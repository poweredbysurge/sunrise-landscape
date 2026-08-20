import type { Lead, LeadContext } from './types'

/**
 * Forward a website enquiry to the Surge Command Center lead ingest
 * (ADR-025, `POST /api/inbound/lead-form`).
 *
 * Dormant by default. Sunrise has no Command Center tenant provisioned yet, so
 * with SURGE_INGEST_TOKEN unset this is a no-op and the email path is untouched.
 * Provisioning the tenant is the whole activation: set the token, redeploy, and
 * leads start landing in the Command Center alongside the notification email.
 *
 * Never throws and never blocks the response. A Command Center outage must not
 * cost Sunrise a lead — the notification email is the system of record until the
 * tenant is live, and the receiver keeps its own durable webhook_logs row for
 * replay once it is.
 */

const DEFAULT_ENDPOINT = 'https://command.thesurgeagency.com/api/inbound/lead-form'

/**
 * The receiver keeps a closed enum for source_detail; anything outside it is
 * soft-nulled and tagged `enum-mismatch`, so the mapping stays conservative and
 * falls back to 'unknown' rather than inventing a value.
 */
function sourceDetail(ctx: LeadContext): string {
  const medium = ctx.utmMedium?.toLowerCase() ?? ''
  const source = ctx.utmSource?.toLowerCase() ?? ''

  if (ctx.gclid) return 'google_ads'
  if (ctx.fbclid) return 'facebook'
  if (medium === 'cpc' || medium === 'ppc' || medium === 'paid') {
    return source.includes('facebook') || source.includes('meta') ? 'facebook' : 'google_ads'
  }
  if (medium === 'organic') return 'organic'
  if (medium === 'email') return 'email'
  if (medium === 'referral') return 'referral'
  if (source.includes('facebook') || source.includes('instagram')) return 'facebook'
  if (!ctx.referrer && !ctx.utmSource) return 'direct'
  return 'unknown'
}

/** Drops empty values so the receiver's passthrough map stays clean. */
function compact(obj: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined && v !== null && v !== '')
  )
}

export async function forwardToCommandCenter(lead: Lead, ctx: LeadContext = {}): Promise<void> {
  const token = process.env.SURGE_INGEST_TOKEN
  if (!token) return // no tenant provisioned yet

  const endpoint = process.env.SURGE_INGEST_URL || DEFAULT_ENDPOINT

  // Field names follow the receiver's lead-form contract. Deliberately omitted:
  // reason / roof_age / urgency / signed_other_contractor. Those enums are
  // roofing-vertical (HomeSource) and carry no landscaping meaning; sending them
  // would only produce enum_mismatches noise on every Sunrise lead.
  const payload = compact({
    first_name: lead.firstName,
    last_name: lead.lastName,
    email: lead.email,
    phone: lead.phone,

    address_street: lead.streetAddress,
    address_city: lead.city,
    address_state: lead.state,
    address_zip: lead.zipCode,

    notes: lead.notes,
    services: lead.services,
    referral_source: lead.referralSource,

    form_id: 'inquiry',
    lead_key: ctx.leadKey,
    step: 1,
    lead_source: 'website',
    source_detail: sourceDetail(ctx),

    page_url: ctx.pageUrl,
    page_title: ctx.pageTitle,
    referrer: ctx.referrer,
    landing_page: ctx.landingPage,
    utm_source: ctx.utmSource,
    utm_medium: ctx.utmMedium,
    utm_campaign: ctx.utmCampaign,
    utm_term: ctx.utmTerm,
    utm_content: ctx.utmContent,
    gclid: ctx.gclid,
    fbclid: ctx.fbclid,
  })

  try {
    // Bounded so a hung receiver cannot hold the form's response open.
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-tenant-token': token },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    })
    if (!res.ok) {
      console.error('[lead] command center forward failed:', res.status, await res.text().catch(() => ''))
    }
  } catch (err) {
    console.error('[lead] command center forward error:', (err as Error).message)
  }
}
