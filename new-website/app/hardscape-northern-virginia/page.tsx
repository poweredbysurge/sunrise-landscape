import type { Metadata } from 'next'
import Image from 'next/image'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'
import HardscapeHero from '@/components/HardscapeHero'
import HardscapeCarousel from '@/components/HardscapeCarousel'

export const metadata: Metadata = {
  title: 'Hardscape Contractor Northern Virginia | Sunrise Landscape',
  description: 'Professional hardscape contractor serving Northern Virginia. Custom patios, walkways, and stonework built to last. Get your free consultation today.',
  openGraph: {
    title: 'Hardscape Contractor Northern Virginia | Sunrise Landscape',
    description: 'Professional hardscape contractor serving Northern Virginia. Custom patios, walkways, and stonework built to last. Get your free consultation today.',
    type: 'website',
  },
  twitter: {
    title: 'Hardscape Contractor Northern Virginia | Sunrise Landscape',
    description: 'Professional hardscape contractor serving Northern Virginia. Custom patios, walkways, and stonework built to last. Get your free consultation today.',
    card: 'summary_large_image',
  },
}

export default function HardscapePage() {
  const jsonLd = getMdxJsonLd('pages/hardscape-northern-virginia/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero — 2-col header + scroll-scatter images */}
      <HardscapeHero />

      {/* ── HARDSCAPE SERVICES ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">

          {/* Label + oversized heading */}
          <div className="grid lg:grid-cols-[180px_1fr] gap-6 lg:gap-10 items-start mb-10 lg:mb-14">
            <p className="section-label text-green/50 leading-snug pt-1">
              Hardscapes Creating Harmony
            </p>
            <div>
              <h2 style={{ fontSize: 'clamp(2.6rem, 6.5vw, 6.2rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                <span className="font-ui font-bold text-green block">Hardscape Services:</span>
                <span className="block">
                  <span className="font-display italic text-green" style={{ fontStyle: 'italic' }}>Patios, Fire Pits</span>
                  <span className="font-ui font-bold text-green"> &amp; More</span>
                </span>
              </h2>
              <p className="text-green/70 mt-6 max-w-3xl lg:text-lg leading-relaxed">
                Sunrise creates stylish and functional hardscapes with the highest quality workmanship and time-tested methods. With over 35 years of experience and ICPI certification, Sunrise delivers exceptional results for you to enjoy forever.
              </p>
            </div>
          </div>

          {/* 5-image carousel: CDN URLs used directly — local copies are too low-res for full-width display */}
          <HardscapeCarousel slides={[
            { src: 'https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821c39fee5907320e170120_harmony-img-1%20(1).webp', alt: 'Stone pathway leading to a wooden dock by a lake, with chairs and green grass on the sides' },
            { src: 'https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821c3be80facb1a793f7612_harmony-img-2%20(1).webp', alt: 'Outdoor patio area with black metal chairs and a bench around a round stone fire pit next to a landscaped garden' },
            { src: 'https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cb4ae52f9959c143a822_work-img-1%20(1).webp', alt: 'Outdoor patio area with a round glass table, four mesh chairs, and a large black umbrella, next to a white house' },
            { src: 'https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cb71a545e0059d060bf5_work-img-2%20(1).webp', alt: 'Stone patio with cushioned outdoor chairs, a fire pit, small side table, and landscaped garden beds' },
            { src: 'https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cb817cc578cffd2d3726_work-img-3%20(1).webp', alt: 'Outdoor covered patio with wicker seating, stone fireplace, wall-mounted TV, and bar counter with stools' },
          ]} />

        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['hardscape-northern-virginia']} />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
