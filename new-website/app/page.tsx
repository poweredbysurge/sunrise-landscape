import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { getMdxJsonLd } from '@/lib/manifest'
import HomeVersionB from '@/components/home/HomeVersionB'

export const metadata: Metadata = {
  title: 'Landscape Design Northern Virginia | Sunrise Landscape',
  description: 'Landscape design and build in Northern Virginia since 1986. Patios, plantings, water features, year-round care from one local team. Free design consultation.',
  openGraph: {
    title: 'Landscape Design Northern Virginia | Sunrise Landscape',
    description: 'Landscape design and build in Northern Virginia since 1986. Patios, plantings, water features, year-round care from one local team. Free design consultation.',
    type: 'website',
  },
  twitter: {
    title: 'Landscape Design Northern Virginia | Sunrise Landscape',
    description: 'Landscape design and build in Northern Virginia since 1986. Patios, plantings, water features, year-round care from one local team. Free design consultation.',
    card: 'summary_large_image',
  },
}

export default function HomePage() {
  const jsonLd = getMdxJsonLd('pages/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="home-no-italic">
        <HomeVersionB />
      </div>
    </>
  )
}
