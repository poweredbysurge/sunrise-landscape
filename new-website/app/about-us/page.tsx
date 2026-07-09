import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import CommunityGivingSection from '@/components/CommunityGivingSection'
import DesignApproachSection from '@/components/DesignApproachSection'
import AboutHero from '@/components/AboutHero'

export const metadata: Metadata = {
  title: 'About Us | Sunrise Landscape and Design',
  description: "Learn about Sunrise Landscape and Design, Northern Virginia's trusted landscape experts since 1986. Serving 15+ communities with excellence and integrity.",
  openGraph: {
    title: 'About Us | Sunrise Landscape and Design',
    description: "Learn about Sunrise Landscape and Design, Northern Virginia's trusted landscape experts since 1986. Serving 15+ communities with excellence and integrity.",
    type: 'website',
  },
  twitter: {
    title: 'About Us | Sunrise Landscape and Design',
    description: "Learn about Sunrise Landscape and Design, Northern Virginia's trusted landscape experts since 1986. Serving 15+ communities with excellence and integrity.",
    card: 'summary_large_image',
  },
}

export default function AboutPage() {
  const jsonLd = getMdxJsonLd('pages/about-us/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO ── */}
      <AboutHero />

      {/* ── PROFESSIONAL HEADING + DESIGN APPROACH ── */}
      <DesignApproachSection />

      {/* ── COMMUNITY SERVICE ── */}
      <CommunityGivingSection />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />


      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
