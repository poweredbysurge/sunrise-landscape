import type { Metadata } from 'next'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'
import HardscapeHero from '@/components/HardscapeHero'
import HardscapeCarousel from '@/components/HardscapeCarousel'
import { SITE_URL } from '@/lib/siteUrl'

export const metadata: Metadata = {
  alternates: { canonical: '/hardscape-northern-virginia' },
  title: 'Hardscape Contractor Northern Virginia | Sunrise Landscape',
  description: 'Professional hardscape contractor serving Northern Virginia. Custom patios, walkways, and stonework built to last. Get your free consultation today.',
  openGraph: {
    title: 'Hardscape Contractor Northern Virginia | Sunrise Landscape',
    description: 'Professional hardscape contractor serving Northern Virginia. Custom patios, walkways, and stonework built to last. Get your free consultation today.',
    type: 'website',
    images: [{ url: `${SITE_URL}/media/og/sunrise-landscape-og.png`, width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Hardscape Contractor Northern Virginia | Sunrise Landscape',
    description: 'Professional hardscape contractor serving Northern Virginia. Custom patios, walkways, and stonework built to last. Get your free consultation today.',
    card: 'summary_large_image',
    images: [`${SITE_URL}/media/og/sunrise-landscape-og.png`],
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
              <h2 className="text-green" style={{ fontSize: 'clamp(2.6rem, 6.5vw, 6.2rem)', lineHeight: 1.0, letterSpacing: '-0.02em' }}>
                Hardscape Services: Patios, Fire Pits &amp; More
              </h2>
              <p className="text-green/70 mt-6 max-w-3xl lg:text-lg leading-relaxed">
                Sunrise creates stylish and functional hardscapes with the highest quality workmanship and time-tested methods. With ICPI certification and a track record going back to 1986, Sunrise delivers exceptional results for you to enjoy forever.
              </p>
            </div>
          </div>

          {/* 5-image carousel: local, AI-upscaled copies. Source photos were originally
              quite small (323-620px), so even after a 4x upscale a couple of these land
              short of the ideal full-width resolution — that's the source ceiling, not
              a processing issue. */}
          <HardscapeCarousel slides={[
            { src: '/media/work/hardscape-fire-pit-adirondack-chairs.jpg', alt: 'Stone fire pit with Adirondack chairs beside a paver patio' },
            { src: '/media/work/hardscape-flagstone-patio.jpg', alt: 'New flagstone patio in a rectangular pattern' },
            { src: '/media/work/hardscape-stone-steps-seat-wall.jpg', alt: 'Stone steps and a capped seat wall beside rounded shrubs' },
            { src: '/media/work/hardscape-paver-patio-dining.jpg', alt: 'Paver dining patio edged with boulders and plantings' },
            { src: '/media/work/hardscape-knot-garden-gravel-court.jpg', alt: 'Gravel knot garden court edged in brick with clipped shrubs' },
          ]} />

          <p className="text-green/70 mt-10 leading-relaxed">
            Looking for a patio or fire pit specifically?{' '}
            <Link href="/patio-fire-pit-leesburg-ashburn-great-falls" className="underline text-green hover:text-orange">
              See our patio and fire pit contractors
            </Link>{' '}
            for Leesburg, Ashburn, and Great Falls. Building on a slope?{' '}
            <Link href="/retaining-walls-northern-virginia" className="underline text-green hover:text-orange">
              See our retaining wall construction services
            </Link>
            . Planning a full backyard renovation?{' '}
            <Link href="/outdoor-living-spaces-northern-virginia" className="underline text-green hover:text-orange">
              See how we design complete outdoor living spaces
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── BEFORE / AFTER: front walk (drag to compare) ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="section-label text-orange mb-4">Drag to compare</p>
            <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-5">A Front Walk, Rebuilt in Flagstone</h2>
            <p className="text-green/70 text-lg leading-relaxed">
              The same walk from the same spot: the new base going in, and the finished flagstone a few weeks later.
            </p>
          </div>
          <div className="w-full max-w-md mx-auto lg:max-w-lg">
            <BeforeAfterSlider
              aspect="3 / 4"
              beforeLabel="During"
              afterLabel="After"
              before={{ src: '/media/work/ba-front-walk-during.jpg', alt: 'Front walk during construction with forms set for the new base' }}
              after={{ src: '/media/work/ba-front-walk-after.jpg', alt: 'Finished flagstone front walk leading to the house' }}
            />
          </div>
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
