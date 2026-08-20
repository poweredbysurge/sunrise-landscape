import type { LeadContext } from './types'

/**
 * Collects submit-time attribution in the browser.
 *
 * Everything here is advisory. The server never trusts it for identity, only for
 * "where did this lead come from" reporting and Command Center source mapping.
 */

const LANDING_KEY = 'sr_landing_page'
const LEAD_KEY = 'sr_lead_key'
const UTM_KEY = 'sr_utm'

const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

function session(): Storage | null {
  try {
    return window.sessionStorage
  } catch {
    return null // Safari private mode, or storage blocked
  }
}

/**
 * Call once per page load. Records the landing page, the click ids, and the UTMs
 * from the FIRST page of the session — a lead who arrives on an ad landing page
 * and submits three pages later would otherwise be attributed to the last page,
 * which is where paid attribution goes to die.
 */
export function captureLeadContext(): void {
  const store = session()
  if (!store) return

  try {
    if (!store.getItem(LANDING_KEY)) {
      store.setItem(LANDING_KEY, window.location.href)
    }
    if (!store.getItem(LEAD_KEY)) {
      store.setItem(LEAD_KEY, crypto.randomUUID())
    }

    const params = new URLSearchParams(window.location.search)
    const found: Record<string, string> = {}
    for (const key of [...UTM_PARAMS, 'gclid', 'fbclid']) {
      const value = params.get(key)
      if (value) found[key] = value
    }
    // Only overwrite when this page actually carries campaign params, so
    // navigating deeper into the site does not erase the entry attribution.
    if (Object.keys(found).length > 0) {
      store.setItem(UTM_KEY, JSON.stringify(found))
    }
  } catch {
    // Storage full or unavailable. Attribution is a nice-to-have; never let it
    // throw into a form submit.
  }
}

/** Reads what captureLeadContext stored, plus the current page. */
export function readLeadContext(): LeadContext {
  if (typeof window === 'undefined') return {}

  const store = session()
  let utm: Record<string, string> = {}
  try {
    utm = JSON.parse(store?.getItem(UTM_KEY) ?? '{}')
  } catch {
    utm = {}
  }

  return {
    pageUrl: window.location.href,
    pageTitle: document.title,
    referrer: document.referrer || undefined,
    landingPage: store?.getItem(LANDING_KEY) ?? window.location.href,
    leadKey: store?.getItem(LEAD_KEY) ?? undefined,
    utmSource: utm.utm_source,
    utmMedium: utm.utm_medium,
    utmCampaign: utm.utm_campaign,
    utmTerm: utm.utm_term,
    utmContent: utm.utm_content,
    gclid: utm.gclid,
    fbclid: utm.fbclid,
  }
}
