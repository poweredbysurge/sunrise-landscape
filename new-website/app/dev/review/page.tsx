import type { Metadata } from 'next'
import Link from 'next/link'

// DEV-ONLY review dashboard for the recovery-page build.
// Not in the sitemap; noindexed. Delete this folder before production launch
// or leave it: robots noindex keeps it out of Google either way.

export const metadata: Metadata = {
  title: 'Recovery Page Review — internal',
  robots: { index: false, follow: false },
}

type Item = { href: string; label: string; type: string; check: string }

const newPages: Item[] = [
  { href: '/lawn-care-leesburg-va', label: 'Lawn Care — Leesburg (P1)', type: 'New page', check: 'Read 1st. Shade-tree vs Lansdowne sod opener. Check: neighborhoods, $55-85 mowing range.' },
  { href: '/lawn-care-ashburn-va', label: 'Lawn Care — Ashburn (P2)', type: 'New page', check: 'Read 2nd, back to back with Leesburg. HOA angle. Check: Brambleton/Broadlands claims, $50-75 range.' },
  { href: '/lawn-care-herndon-va', label: 'Lawn Service — Herndon (P3)', type: 'New page', check: 'Read 3rd. Clay + season opener. Check: french drain FAQ, neighborhoods (Fox Mill, McNair).' },
  { href: '/lawn-care-fairfax-va', label: 'Lawn Care — Fairfax (P4)', type: 'New page', check: 'Aeration/overseeding hero. Check: Jack (Oakton) testimonial placement OK?' },
  { href: '/lawn-care-loudoun-county-va', label: 'Lawn Care — Loudoun County (P4)', type: 'New page', check: 'Umbrella page. Check: estate/well-water claims, links down to city pages.' },
  { href: '/lawn-care-aldie-va', label: 'Lawn Care — Aldie (P7)', type: 'New page', check: 'Lisa & Rick opener. Check: mosquito program schedule, Willowsford soil story.' },
  { href: '/patio-fire-pit-leesburg-ashburn-great-falls', label: 'Patio & Fire Pit — multi-city (P6)', type: 'New page', check: 'Chris (Reston) opener. Check: $15-45K range, HOA approval claims, city sections.' },
]

const cityPages: Item[] = [
  { href: '/service-areas/landscaping-leesburg-va', label: 'Leesburg', type: 'Expansion', check: 'New sections start below "Neighborhoods We Serve".' },
  { href: '/service-areas/landscaping-ashburn-va', label: 'Ashburn', type: 'Expansion', check: 'Blank-slate backyard angle.' },
  { href: '/service-areas/landscaping-herndon-va', label: 'Herndon', type: 'Expansion', check: 'Water-first design angle.' },
  { href: '/service-areas/landscaping-reston-va', label: 'Reston', type: 'Expansion', check: 'RA design review claims. Verify we do handle DRB submissions.' },
  { href: '/service-areas/landscaping-sterling-va', label: 'Sterling', type: 'Expansion', check: 'Hometown/HQ angle.' },
  { href: '/service-areas/landscaping-chantilly-va', label: 'Chantilly', type: 'Expansion', check: 'COST RANGES quoted. Verify the five-figure framing.' },
  { href: '/service-areas/landscaping-mclean-va', label: 'McLean', type: 'Expansion', check: 'Estate + tree preservation. Air-spade claim OK?' },
  { href: '/service-areas/landscaping-centreville-va', label: 'Centreville', type: 'Expansion', check: 'Terracing angle, permit claim (Fairfax Co wall heights).' },
  { href: '/service-areas/landscaping-great-falls-va', label: 'Great Falls', type: 'Expansion', check: 'Deer + pool surrounds. Katie Bird photo reference.' },
  { href: '/service-areas/landscaping-oakton-va', label: 'Oakton', type: 'Expansion', check: 'Grand Welcome project reference.' },
  { href: '/service-areas/landscaping-vienna-va', label: 'Vienna', type: 'Expansion', check: 'Town tree ordinance claims. Parkland Estate + Estate Elegance.' },
  { href: '/service-areas/landscaping-western-loudoun-va', label: 'Western Loudoun', type: 'Expansion', check: 'Weekly western routes claim true?' },
]

function Row({ item }: { item: Item }) {
  return (
    <div className="border-b border-green/12 py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
      <div className="sm:w-72 shrink-0">
        <Link href={item.href} className="font-bold text-green underline hover:text-orange">
          {item.label}
        </Link>
        <span className="ml-2 text-xs uppercase tracking-wide text-green/50">{item.type}</span>
      </div>
      <p className="text-sm text-green/70">{item.check}</p>
    </div>
  )
}

export default function ReviewPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-36 pb-24">
      <h1 className="text-3xl font-bold text-green mb-2">Recovery Page Review</h1>
      <p className="text-green/70 mb-2">
        Internal checklist. Open each page, read it as a customer would, then check: local facts
        right, prices right, testimonials placed where you want them, no two pages sounding alike.
      </p>
      <p className="text-sm text-green/50 mb-10">
        This page is noindexed and not in the sitemap. Track sign-off in the workbook's Build
        Tracker tab (flip rows to Reviewed).
      </p>

      <h2 className="text-xl font-bold text-green mt-8 mb-2">New pages (read the first three back to back)</h2>
      {newPages.map((i) => (
        <Row key={i.href} item={i} />
      ))}

      <h2 className="text-xl font-bold text-green mt-12 mb-2">City page expansions (new content is below the existing sections)</h2>
      {cityPages.map((i) => (
        <Row key={i.href} item={i} />
      ))}

      <h2 className="text-xl font-bold text-green mt-12 mb-2">Metadata-only change</h2>
      <div className="py-4">
        <p className="text-sm text-green/70">
          Homepage <Link href="/" className="underline text-green hover:text-orange">/</Link> — new meta
          description only (view source or check the tab preview): &quot;Landscape design and build in
          Northern Virginia since 1986...&quot; Title and H1 unchanged.
        </p>
      </div>
    </div>
  )
}
