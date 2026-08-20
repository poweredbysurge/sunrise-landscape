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
const SEARCH_ENGINE_HOSTS = [
  'google.', 'bing.', 'duckduckgo.', 'yahoo.', 'ecosia.', 'brave.', 'startpage.', 'baidu.',
]
const SOCIAL_HOSTS = ['facebook.', 'instagram.', 'fb.', 'l.facebook', 'lm.facebook']

function hostOf(url: string): string {
  try {
    return new URL(url).hostname.toLowerCase()
  } catch {
    return ''
  }
}

function sourceDetail(ctx: LeadContext): string {
  const medium = ctx.utmMedium?.toLowerCase() ?? ''
  const source = ctx.utmSource?.toLowerCase() ?? ''

  // Paid first: a click id is the most reliable signal there is, and it outranks
  // whatever the referrer happens to say.
  if (ctx.gclid) return 'google_ads'
  if (ctx.fbclid) return 'facebook'
  if (medium === 'cpc' || medium === 'ppc' || medium === 'paid') {
    return source.includes('facebook') || source.includes('meta') ? 'facebook' : 'google_ads'
  }
  if (medium === 'organic') return 'organic'
  if (medium === 'email') return 'email'
  if (medium === 'referral') return 'referral'
  if (source.includes('facebook') || source.includes('instagram')) return 'facebook'

  // No campaign params. Fall back to reading the referrer, which is the common
  // case for this site: most leads arrive from an unpaid search result and carry
  // no UTMs at all. Without this branch every one of them landed on 'unknown',
  // which reports as "we have no idea" for what is plainly organic search.
  const host = hostOf(ctx.referrer ?? '')
  if (!host) return 'direct'
  if (SEARCH_ENGINE_HOSTS.some((h) => host.includes(h))) return 'organic'
  if (SOCIAL_HOSTS.some((h) => host.includes(h))) return 'facebook'
  // Same-site navigation is not a referral; the lead arrived some other way and
  // clicked through internally before submitting.
  if (host.includes('sunriselandscapeanddesign.com')) return 'direct'
  return 'referral'
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

    // Graded by the landscaping intake classifier. Validated as closed enums by
    // the receiver, which soft-nulls an unrecognised value rather than rejecting
    // the lead, so a future option added here cannot cost a submission.
    service_interest: lead.serviceInterest,
    urgency: lead.urgency,
    budget_band: lead.budgetBand,
    property_type: lead.propertyType,

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
