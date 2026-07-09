import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import HardscapeHero from '@/components/HardscapeHero'

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
            Sunrise creates stylish and functional hardscapes with the highest quality workmanship and time-tested methods. With over 35 years of experience and ICPI certification, Sunrise delivers exceptional results for you to enjoy forever.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="relative aspect-[16/9] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821c39fee5907320e170120_harmony-img-1%20(1).webp')}
                alt="Stone pathway leading to a wooden dock by a lake, with chairs and green grass on the sides."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821c3be80facb1a793f7612_harmony-img-2%20(1).webp')}
                alt="Outdoor patio area with black metal chairs and a bench around a round stone fire pit, next to a landscaped garden with stone steps and red and green shrubs."
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
              { src: 'https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cb4ae52f9959c143a822_work-img-1%20(1).webp', alt: 'Outdoor patio area with a round glass table, four mesh chairs, and a large black umbrella, next to a white house.' },
              { src: 'https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cb71a545e0059d060bf5_work-img-2%20(1).webp', alt: 'A stone patio with cushioned outdoor chairs, a fire pit, small side table, and landscaped garden beds surrounded by a gravel path.' },
              { src: 'https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cb817cc578cffd2d3726_work-img-3%20(1).webp', alt: 'Outdoor covered patio with wicker seating, stone fireplace, wall-mounted TV, and bar counter with stools.' },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
                <Image src={cdnToLocal(img.src)} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area bar */}
      <ServiceAreasSection />


      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
