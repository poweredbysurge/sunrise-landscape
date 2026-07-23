import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import CommunityGivingSection from '@/components/CommunityGivingSection'
import DesignApproachSection from '@/components/DesignApproachSection'
import AboutHero from '@/components/AboutHero'

export const metadata: Metadata = {
  title: 'About Us | Sunrise Landscape',
  description: "Learn about Sunrise Landscape, Northern Virginia's trusted landscape experts since 1986. Serving 15+ communities with excellence and integrity.",
  openGraph: {
    title: 'About Us | Sunrise Landscape',
    description: "Learn about Sunrise Landscape, Northern Virginia's trusted landscape experts since 1986. Serving 15+ communities with excellence and integrity.",
    type: 'website',
  },
  twitter: {
    title: 'About Us | Sunrise Landscape',
    description: "Learn about Sunrise Landscape, Northern Virginia's trusted landscape experts since 1986. Serving 15+ communities with excellence and integrity.",
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

      {/* Restored from the pre-migration page (frozen contract H2 + body copy) */}
      <section className="py-16 lg:py-24 px-5 lg:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-green leading-tight">
            Professional Landscape Design Since 1986
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-black/70">
            <p>
              Sunrise started in 1986 with a truck, a small crew, and a simple standard: build
              landscapes we would want in our own yards. Thirty nine years later the crews are
              bigger and the projects run from quarter acre townhome lots to multi acre estates,
              but the standard has not moved.
            </p>
            <p>
              Today the company designs, builds, and maintains landscapes across more than fifteen
              Northern Virginia communities from our home base in Sterling. Design, hardscape,
              planting, lighting, drainage, and year round maintenance all run under one roof,
              which means the person who drew your plan and the crew that builds it answer to the
              same name on the truck.
            </p>
          </div>
        </div>
      </section>

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
