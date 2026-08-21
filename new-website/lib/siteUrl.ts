// The custom domain is about to be pointed at this deployment (final
// pre-launch pass), so this now defaults to the production origin. Kept
// overridable via NEXT_PUBLIC_SITE_URL as a safety valve for any future
// staging environment, but nothing in this repo should ever resolve to
// the *.vercel.app deployment URL once live.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.sunriselandscapeanddesign.com'
