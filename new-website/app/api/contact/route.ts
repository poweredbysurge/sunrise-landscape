import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { renderLeadNotification, renderLeadConfirmation } from '@/lib/email/templates'
import { forwardToCommandCenter } from '@/lib/leads/commandCenter'
import type { Lead, LeadContext } from '@/lib/leads/types'

/**
 * Website enquiry receiver.
 *
 * One submission fans out to three places:
 *   1. The internal notification  — Sunrise + Surge. Must succeed.
 *   2. The confirmation to the lead — best effort, and gated on a Sunrise-verified
 *      sender (see LEAD_REPLY_FROM below).
 *   3. The Surge Command Center     — best effort, dormant until a tenant exists.
 *
 * Only (1) can fail the request. A lead is never told the form broke because a
 * secondary send did.
 */

// ─── Configuration ───────────────────────────────────────────────────────────

/**
 * Sender for the INTERNAL notification. Surge-owned by default: this mail is
 * only ever seen by Sunrise and Surge staff, so ADR-002's white-label rule is
 * not in play and it can ship on an already-verified domain. Point
 * LEAD_NOTIFY_FROM at mail.sunriselandscapeanddesign.com once that domain is
 * verified in Resend.
 */
const NOTIFY_FROM =
  process.env.LEAD_NOTIFY_FROM || 'Sunrise Website <leads@mail.thesurgeagency.com>'

/**
 * Sender for the confirmation that goes to the LEAD. Deliberately has no
 * default: this one is customer-facing, so per ADR-024 it must come from a
 * verified Sunrise domain, never from a Surge one. Until
 * mail.sunriselandscapeanddesign.com is verified and this is set, the
 * confirmation is skipped and the lead just sees the on-site success screen.
 */
const LEAD_REPLY_FROM = process.env.LEAD_REPLY_FROM

const NOTIFY_TO = (process.env.LEAD_NOTIFY_TO || 'mflickinger@sunriselandscapeanddesign.com')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

const NOTIFY_CC = (
  process.env.LEAD_NOTIFY_CC ||
  'manager@thesurgeagency.com,info@sunriselandscapeanddesign.com'
)
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

// ─── Input handling ──────────────────────────────────────────────────────────

/** Trims, coerces to string, and caps length so one field cannot bloat a send. */
function str(v: unknown, max = 500): string {
  if (v == null) return ''
  return String(v).trim().slice(0, max)
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const lead: Lead = {
    firstName: str(body.firstName, 100),
    lastName: str(body.lastName, 100),
    email: str(body.email, 200),
    phone: str(body.phone, 40),
    streetAddress: str(body.streetAddress, 200),
    city: str(body.city, 100),
    state: str(body.state, 60),
    zipCode: str(body.zipCode, 20),
    services: str(body.services, 100),
    referralSource: str(body.referralSource, 100),
    notes: str(body.notes, 2000),
    serviceInterest: str(body.serviceInterest, 40),
    urgency: str(body.urgency, 40),
    budgetBand: str(body.budgetBand, 40),
    propertyType: str(body.propertyType, 40),
  }

  const ctxIn = (body.context ?? {}) as Record<string, unknown>
  const ctx: LeadContext = {
    pageUrl: str(ctxIn.pageUrl, 500) || undefined,
    pageTitle: str(ctxIn.pageTitle, 300) || undefined,
    referrer: str(ctxIn.referrer, 500) || undefined,
    landingPage: str(ctxIn.landingPage, 500) || undefined,
    utmSource: str(ctxIn.utmSource, 150) || undefined,
    utmMedium: str(ctxIn.utmMedium, 150) || undefined,
    utmCampaign: str(ctxIn.utmCampaign, 200) || undefined,
    utmTerm: str(ctxIn.utmTerm, 200) || undefined,
    utmContent: str(ctxIn.utmContent, 200) || undefined,
    gclid: str(ctxIn.gclid, 200) || undefined,
    fbclid: str(ctxIn.fbclid, 200) || undefined,
    leadKey: str(ctxIn.leadKey, 100) || undefined,
  }

  // The form gates its own submit button on phone AND email, so requiring one of
  // the two here is the backstop, not the real validation. A lead who somehow
  // reaches us with only a phone number is still a lead worth delivering.
  if (!lead.firstName || (!lead.email && !lead.phone)) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('[lead] RESEND_API_KEY is not set — notification not sent', {
      name: `${lead.firstName} ${lead.lastName}`,
      email: lead.email,
      phone: lead.phone,
    })
    return NextResponse.json({ error: 'Email is not configured' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const notification = renderLeadNotification(lead, ctx)

  // ── 1. Internal notification. The one send that can fail the request. ──
  try {
    const { error } = await resend.emails.send({
      from: NOTIFY_FROM,
      to: NOTIFY_TO,
      cc: NOTIFY_CC,
      // Replying to the alert answers the lead, not the website.
      replyTo: lead.email && EMAIL_RE.test(lead.email) ? lead.email : undefined,
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
    })
    if (error) throw new Error(error.message)
  } catch (err) {
    // Logged with the full lead attached so a failed send is still recoverable
    // from the Vercel logs by hand. Leads are gold.
    console.error('[lead] notification send failed:', (err as Error).message, lead)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }

  // ── 2. Confirmation to the lead. Best effort, and only from a Sunrise sender. ──
  if (LEAD_REPLY_FROM && lead.email && EMAIL_RE.test(lead.email)) {
    const confirmation = renderLeadConfirmation(lead)
    try {
      // Resend reports a rejected send by RETURNING an error rather than
      // throwing, so a bare try/catch here would swallow it silently.
      const { error } = await resend.emails.send({
        from: LEAD_REPLY_FROM,
        to: lead.email,
        replyTo: 'info@sunriselandscapeanddesign.com',
        subject: confirmation.subject,
        html: confirmation.html,
        text: confirmation.text,
      })
      if (error) throw new Error(error.message)
    } catch (err) {
      console.error('[lead] confirmation send failed:', (err as Error).message)
    }
  }

  // ── 3. Command Center. Awaited, not fire-and-forget: on serverless the
  //       function can be frozen the moment the response is returned, which
  //       silently drops a detached promise. It swallows its own errors and is
  //       bounded to 8s, so awaiting it cannot fail or hang the request. ──
  await forwardToCommandCenter(lead, ctx)

  return NextResponse.json({ success: true })
}
