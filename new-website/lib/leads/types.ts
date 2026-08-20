/**
 * The shape of a Sunrise website enquiry, from the form through to the
 * notification emails and the Command Center forward. One definition so the
 * form, the API route, the templates, and the ingest payload cannot drift.
 */
export interface Lead {
  firstName: string
  lastName: string
  email: string
  phone: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
  /** Service interest, e.g. "Maintenance" | "Project" | "Commercial" | "Not sure". */
  services: string
  /** "How did you hear about us?" answer. */
  referralSource: string
  /** Free-text "anything else we should know?" from the final step. */
  notes: string

  // ── Qualifying answers. Closed-enum values matching the Command Center
  // lead-form contract, not display strings. Only Project leads are asked for
  // urgency and budget, so these are blank on maintenance and commercial
  // enquiries by design, never because something failed.
  /** maintenance | design_build | commercial | not_sure */
  serviceInterest: string
  /** right_away | within_month | 1_3_months | planning */
  urgency: string
  /** under_5k | 5k_15k | 15k_50k | 50k_100k | over_100k | not_sure */
  budgetBand: string
  /** residential | hoa | commercial | municipal */
  propertyType: string
}

/**
 * Attribution captured by the browser at submit time. Never trusted for
 * identity, only for reporting and Command Center source attribution.
 */
export interface LeadContext {
  pageUrl?: string
  pageTitle?: string
  referrer?: string
  landingPage?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  utmTerm?: string
  utmContent?: string
  gclid?: string
  fbclid?: string
  /** Per-browser-session id, so Command Center can dedupe replayed submits. */
  leadKey?: string
}
