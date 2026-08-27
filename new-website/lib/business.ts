/**
 * Sunrise's own contact details, in one place.
 *
 * These appear in the footer, the contact page, and both notification emails.
 * The office address has already moved twice (Sterling, then Catharpin, then
 * back to Sterling on 2026-08-19), and each move left a stale copy behind
 * somewhere. Anything added from here on should import these rather than retype
 * them; Footer.tsx and app/contact/page.tsx still carry their own literals and
 * are worth folding in next time either is touched.
 *
 * Source of truth: components/Footer.tsx as of the 2026-08-19 address revert.
 */
export const BUSINESS = {
  name: 'Sunrise Landscape',
  phone: '703-544-0028',
  /** Digits-only form, for tel: hrefs. */
  phoneHref: 'tel:+17035440028',
  email: 'info@sunriselandscapeanddesign.com',
  addressLine1: '43813 Beaver Meadow Rd #100',
  addressLine2: 'Sterling, VA 20166',
} as const
