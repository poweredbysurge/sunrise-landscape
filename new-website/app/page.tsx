import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { getMdxJsonLd } from '@/lib/manifest'
import HomeVersionB from '@/components/home/HomeVersionB'
import { SITE_URL } from '@/lib/siteUrl'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title: 'Landscaping Company in Northern Virginia | Sunrise Landscape',
  description: 'Full-service landscaping in Northern Virginia: year-round maintenance, lawn care, patios and outdoor living. Family owned since 1986. Free yard inspection.',
  openGraph: {
    title: 'Landscaping Company in Northern Virginia | Sunrise Landscape',
    description: 'Full-service landscaping in Northern Virginia: year-round maintenance, lawn care, patios and outdoor living. Family owned since 1986. Free yard inspection.',
    type: 'website',
    images: [{ url: `${SITE_URL}/media/og/sunrise-landscape-og.png`, width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Landscaping Company in Northern Virginia | Sunrise Landscape',
    description: 'Full-service landscaping in Northern Virginia: year-round maintenance, lawn care, patios and outdoor living. Family owned since 1986. Free yard inspection.',
    card: 'summary_large_image',
    images: [`${SITE_URL}/media/og/sunrise-landscape-og.png`],
  },
}

// Manifest JSON-LD is frozen content, but the brand-rename and anniversary-math
// approvals (July 2026 hierarchy audit) apply to it too — patch in code rather
// than editing the frozen MDX source.
type NamedNode = {
  '@type'?: string
  name?: string
  description?: string
  aggregateRating?: unknown
}

function renameBrand(node: NamedNode): NamedNode {
  if (node['@type'] !== 'LocalBusiness' && node['@type'] !== 'WebSite') return node
  const patched: NamedNode = {
    ...node,
    name: 'Sunrise Landscape',
    description: node.description?.replace(
      'Trusted local experts with over 39 years of experience.',
      'Trusted local experts serving Northern Virginia since 1986.',
    ),
  }
  // The crawled manifest carries a self-serving aggregateRating (5.0 from 3
  // reviews) that is both inaccurate — the profile is 4.7 from 47 — and
  // ineligible for review rich results, since Google does not honour a
  // business rating its own pages. Strip it rather than editing frozen MDX.
  delete patched.aggregateRating
  return patched
}

function patchLocalBusinessJsonLd(data: object[]): object[] {
  return data.map((item) => {
    const node = item as NamedNode & { '@graph'?: NamedNode[] }
    if (node['@graph']) return { ...node, '@graph': node['@graph'].map(renameBrand) }
    return renameBrand(node)
  })
}

export default function HomePage() {
  const jsonLd = patchLocalBusinessJsonLd(getMdxJsonLd('pages/index.mdx'))

  return (
    <>
      <JsonLd data={jsonLd} />
      <HomeVersionB />
    </>
  )
}
