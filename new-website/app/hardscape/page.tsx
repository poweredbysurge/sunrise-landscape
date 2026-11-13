import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansionV2'
import { serviceExpansions } from '@/lib/serviceExpansions'
import HardscapeHero from '@/components/HardscapeHero'
import { SITE_URL } from '@/lib/siteUrl'

export const metadata: Metadata = {
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

export default function HardscapeAliasPage() {
  const jsonLd = getMdxJsonLd('pages/hardscape/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero — 2-col header + scroll-scatter images */}
      <HardscapeHero />

      {/* Services */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-green mb-4">
            Hardscape Services: Patios , Fire Pits &amp; More
          </h2>
          <p className="text-green/70 max-w-2xl mb-12 leading-relaxed">
            Sunrise creates stylish and functional hardscapes with the highest quality workmanship and time-tested methods. With ICPI certification and a track record going back to 1986, Sunrise delivers exceptional results for you to enjoy forever.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="relative aspect-[16/9] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image
                src={'/media/work/hardscape-fire-pit-adirondack-chairs.jpg'}
                alt="Stone fire pit with Adirondack chairs beside a paver patio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image
                src={'/media/work/hardscape-flagstone-patio.jpg'}
                alt="New flagstone patio in a rectangular pattern"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-8 bg-white">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl text-green mb-8">
            Professional Hardscape Installation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: '/media/work/hardscape-stone-steps-seat-wall.jpg', alt: 'Stone steps and a capped seat wall beside rounded shrubs' },
              { src: '/media/work/hardscape-paver-patio-dining.jpg', alt: 'Paver dining patio edged with boulders and plantings' },
              { src: '/media/work/hardscape-knot-garden-gravel-court.jpg', alt: 'Gravel knot garden court edged in brick with clipped shrubs' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
                <Image src={cdnToLocal(img.src)} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['hardscape']} />

      {/* Service area bar */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
