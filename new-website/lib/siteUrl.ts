// The custom domain isn't pointed at this deployment yet, so link-preview
// crawlers (iMessage, Slack, Twitter) fail to fetch URLs resolved against it
// and fall back to the favicon. Set NEXT_PUBLIC_SITE_URL in Vercel once DNS
// is live to switch every canonical/OG/Twitter URL over with no code change.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sunrise-landscape.vercel.app'
