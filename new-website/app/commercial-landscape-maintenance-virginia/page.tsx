import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Commercial Landscape Maintenance | Sunrise Landscape',
  description: 'Commercial landscape maintenance in Virginia. Professional care for corporate campuses and commercial properties. Serving Northern Virginia since 1986.',
  openGraph: {
    title: 'Commercial Landscape Maintenance | Sunrise Landscape',
    description: 'Commercial landscape maintenance in Virginia. Professional care for corporate campuses and commercial properties. Serving Northern Virginia since 1986.',
    type: 'website',
  },
  twitter: {
    title: 'Commercial Landscape Maintenance | Sunrise Landscape',
    description: 'Commercial landscape maintenance in Virginia. Professional care for corporate campuses and commercial properties. Serving Northern Virginia since 1986.',
    card: 'summary_large_image',
  },
}

export default function CommercialLandscapePage() {
  const jsonLd = getMdxJsonLd('pages/commercial-landscape-maintenance-virginia/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO — clean image, no overlay ── */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68512a743bcf0ea3fbccff0a_commercial-hero-img-new.webp')}
          alt="Gray wooden building with a peaked roof and white double doors, surrounded by manicured bushes and green lawn."
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {/* ── INTRO CARD — cream card on dark green ── */}
      <section className="bg-green py-10 lg:py-14 px-4 lg:px-8">
        <div
          className="max-w-screen-xl mx-auto bg-cream grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0 overflow-hidden"
          style={{ borderRadius: '28px' }}
        >
          {/* Left: text */}
          <div className="px-10 py-12 lg:px-14 lg:py-16 flex flex-col justify-center">
            <h1 className="text-green text-lg lg:text-xl font-bold uppercase tracking-widest mb-3">
              Commercial Landscape Maintenance in Virginia
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl text-green leading-tight mb-6">
              Commercial Landscape Services in Northern Virginia
            </h2>
            <p className="text-black/60 leading-relaxed mb-8 max-w-sm">
              Transform your commercial property into a distinctive destination that welcomes, impresses, and adds value to your business investment. From corporate campuses to vibrant community spaces, we bring our signature blend of artistic vision and professional excellence to every commercial project.
            </p>
            <Link
              href="/contact#form"
              className="inline-flex items-center gap-2 font-ui font-bold text-base tracking-widest uppercase text-orange hover:underline underline-offset-2"
            >
              Schedule a Call
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 -rotate-45" aria-hidden="true">
                <path d="M4 10h12M12 5l5 5-5 5" />
              </svg>
            </Link>
          </div>

          {/* Right: image */}
          <div className="relative min-h-[320px] lg:min-h-0">
            <Image
              src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68230cb41bf1c271c22f3138_commercial-img%20(1).webp')}
              alt="Modern glass commercial building illuminated with blue and yellow lights at dusk"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>


{/* ── OUR COMMERCIAL LANDSCAPING SERVICES ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="editorial-display text-3xl lg:text-5xl text-green leading-tight mb-12 text-center" style={{ fontWeight: 400 }}>
            Our Commercial Landscaping Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Corporate Campuses',
                desc: 'Large-scale landscape design and maintenance for professional office environments.',
                img: 'https://images.unsplash.com/photo-1743178207584-4a0c1109975e?auto=format&fit=crop&w=800&q=80',
                alt: 'Modern glass office building with manicured green landscaping',
              },
              {
                num: '02',
                title: 'HOA Communities',
                desc: 'Pristine common area maintenance and seasonal enhancements for homeowner associations.',
                img: 'https://images.unsplash.com/photo-1775112077888-8fa36e9bbc51?auto=format&fit=crop&w=800&q=80',
                alt: 'Gated community entrance with manicured landscaping',
              },
              {
                num: '03',
                title: 'Retail Environments',
                desc: 'Welcoming entrances and curb appeal for retail centers and shopping destinations.',
                img: 'https://images.unsplash.com/photo-1780874919204-8868612fcfeb?auto=format&fit=crop&w=800&q=80',
                alt: 'Retail building entrance with planters and rock garden landscaping',
              },
              {
                num: '04',
                title: 'Multi-Family Properties',
                desc: 'Year-round care for apartment complexes and condominium communities.',
                img: 'https://images.unsplash.com/photo-1773470920361-4f6cbb702ce0?auto=format&fit=crop&w=800&q=80',
                alt: 'Modern apartment buildings with serene park and water feature',
              },
              {
                num: '05',
                title: 'Data Centers',
                desc: 'Specialized maintenance respecting security requirements and critical infrastructure.',
                img: 'https://images.unsplash.com/photo-1780417805734-036faf1724ac?auto=format&fit=crop&w=800&q=80',
                alt: 'Large modern facility building exterior with trees and clear blue sky',
              },
              {
                num: '06',
                title: 'Religious Institutions',
                desc: 'Respectful, consistent care for churches, temples, and community centers.',
                img: 'https://images.unsplash.com/photo-1762231602041-c15ebf28879a?auto=format&fit=crop&w=800&q=80',
                alt: 'Stone church with red roof surrounded by flowering garden',
              },
            ].map((item) => (
              <ServiceCard
                key={item.title}
                num={item.num}
                image={item.img}
                alt={item.alt}
                title={item.title}
                description={item.desc}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['commercial-landscape-maintenance-virginia']} />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
