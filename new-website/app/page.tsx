import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { getMdxJsonLd } from '@/lib/manifest'
import HomeVersionB from '@/components/home/HomeVersionB'

export const metadata: Metadata = {
  title: 'Landscaping Company in Northern Virginia | Sunrise Landscape',
  description: 'Full-service landscaping in Northern Virginia: year-round maintenance, lawn care, patios and outdoor living. Family owned since 1986. Free yard inspection.',
  openGraph: {
    title: 'Landscaping Company in Northern Virginia | Sunrise Landscape',
    description: 'Full-service landscaping in Northern Virginia: year-round maintenance, lawn care, patios and outdoor living. Family owned since 1986. Free yard inspection.',
    type: 'website',
  },
  twitter: {
    title: 'Landscaping Company in Northern Virginia | Sunrise Landscape',
    description: 'Full-service landscaping in Northern Virginia: year-round maintenance, lawn care, patios and outdoor living. Family owned since 1986. Free yard inspection.',
    card: 'summary_large_image',
  },
}

// Manifest JSON-LD is frozen content, but the brand-rename and anniversary-math
// approvals (July 2026 hierarchy audit) apply to it too — patch in code rather
// than editing the frozen MDX source.
type NamedNode = { '@type'?: string; name?: string; description?: string }

function renameBrand(node: NamedNode): NamedNode {
  if (node['@type'] !== 'LocalBusiness' && node['@type'] !== 'WebSite') return node
  return {
    ...node,
    name: 'Sunrise Landscape',
    description: node.description?.replace('over 39 years', 'over 40 years'),
  }
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
