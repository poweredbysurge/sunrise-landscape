import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import WaterFeaturesCarousel from '@/components/WaterFeaturesCarousel'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Water Features Northern Virginia | Sunrise Landscape',
  description: 'Custom water features and pond installation in Northern Virginia. From koi ponds to waterfalls, we create stunning aquatic landscapes. Contact us today.',
  openGraph: {
    title: 'Water Features Northern Virginia | Sunrise Landscape',
    description: 'Custom water features and pond installation in Northern Virginia. From koi ponds to waterfalls, we create stunning aquatic landscapes. Contact us today.',
    type: 'website',
  },
  twitter: {
    title: 'Water Features Northern Virginia | Sunrise Landscape',
    description: 'Custom water features and pond installation in Northern Virginia. From koi ponds to waterfalls, we create stunning aquatic landscapes. Contact us today.',
    card: 'summary_large_image',
  },
}

export default function WaterFeaturesPage() {
  const jsonLd = getMdxJsonLd('pages/water-features-northern-virginia/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO ── */}
      <section className="pt-28 pb-16 lg:pt-40 lg:pb-24 bg-green">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
            <div>
              <h1 className="text-cream text-lg lg:text-xl font-bold uppercase tracking-widest mb-4">
                Water Features and Pond Installation in Northern Virginia
              </h1>
              <p className="text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight">
                Nature&apos;s Symphony: Ponds &amp; Water Features
              </p>
            </div>
            <div className="lg:pt-2">
              <p className="text-xl lg:text-2xl text-cream mb-6 leading-relaxed">
                Transform your outdoor sanctuary with the timeless allure of moving water. From meditative koi ponds to dramatic waterfalls, we craft water features that engage all the senses and create year-round interest in your landscape.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-orange uppercase tracking-widest font-bold hover:underline underline-offset-2">
                <span>Schedule a Call</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68232209aa9a940cdc9eb536_pw-header-img-2%20(1).webp')} alt="A small landscaped waterfall with flowing water over rocks surrounded by green plants and mulch." fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68828511b1625ab8175ffac0_image016.jpg')} alt="Tranquil garden pond with small cascading waterfalls surrounded by lush green plants and rocks." fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6823250e85c30890c0101ca6_pw-art-img%20(1).webp')} alt="Backyard patio with stone fireplace, outdoor seating, a small waterfall, and a pond with stepping stones surrounded by greenery." fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WATER FEATURE INSTALLATION SERVICES ── */}
      <section className="py-16 lg:py-24" style={{ background: '#101f16' }}>
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-cream leading-tight mb-12 text-center">
            Water Feature Installation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Custom Pond Installation',
                desc: 'From intimate koi sanctuaries to natural swimming ponds and reflection pools, we design and build custom water ecosystems tailored to your landscape and lifestyle.',
                img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682335ae15765002fa05b2ec_pw-slider-img-1%20(1).webp'),
                alt: 'Koi pond with water plants and a gentle waterfall over natural rocks.',
              },
              {
                num: '02',
                title: 'Waterfall Design & Installation',
                desc: 'From dramatic multi-tiered rock cascades to elegant architectural water walls, we engineer waterfalls that become the living centerpiece of your outdoor space.',
                img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68232209aa9a940cdc9eb536_pw-header-img-2%20(1).webp'),
                alt: 'Landscaped waterfall with flowing water over rocks surrounded by green plants.',
              },
              {
                num: '03',
                title: 'Fountain Installation',
                desc: 'From classical tiered designs to contemporary sculptures and floating features, our custom fountains bring movement, sound, and artistry to any outdoor setting.',
                img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68828511b1625ab8175ffac0_image016.jpg'),
                alt: 'Garden pond with cascading waterfalls surrounded by lush green plants.',
              },
            ].map((card) => (
              <ServiceCard
                key={card.num}
                num={card.num}
                image={card.img}
                alt={card.alt}
                title={card.title}
                description={card.desc}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED WATER FEATURE PROJECTS ── */}
      <WaterFeaturesCarousel />

      {/* ── MAINTENANCE SERVICES ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6823250e85c30890c0101ca6_pw-art-img%20(1).webp')}
                alt="Backyard pond with waterfall, stepping stones, and stone fireplace surrounded by lush plants."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Content */}
            <div>
              <p className="section-label text-green/60 mb-4">Beyond the Build</p>
              <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-6">
                Water Feature Maintenance <em>Services</em>
              </h2>
              <p className="prose-content text-black/70 mb-8">
                We provide specialized care programs to ensure your water feature remains a source of joy:
              </p>
              <ul className="space-y-4 mb-10">
                {['Seasonal cleaning', 'Equipment maintenance', 'Water quality management', 'Aquatic plant care'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-black/80">
                    <svg viewBox="0 0 22 22" fill="none" className="w-5 h-5 shrink-0 text-green" aria-hidden="true">
                      <circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 text-orange uppercase tracking-widest font-bold hover:underline underline-offset-2">
                <span>Get in Touch</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['water-features-northern-virginia']} />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
