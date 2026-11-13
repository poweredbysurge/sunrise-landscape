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
import ServiceCard from '@/components/ServiceCard'
import { SITE_URL } from '@/lib/siteUrl'

export const metadata: Metadata = {
  alternates: { canonical: '/commercial-landscape-maintenance-virginia' },
  title: 'Commercial Landscape Maintenance | Sunrise Landscape',
  description: 'Commercial landscape maintenance in Virginia. Professional care for corporate campuses and commercial properties. Serving Northern Virginia since 1986.',
  openGraph: {
    title: 'Commercial Landscape Maintenance | Sunrise Landscape',
    description: 'Commercial landscape maintenance in Virginia. Professional care for corporate campuses and commercial properties. Serving Northern Virginia since 1986.',
    type: 'website',
    images: [{ url: `${SITE_URL}/media/og/sunrise-landscape-og.png`, width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Commercial Landscape Maintenance | Sunrise Landscape',
    description: 'Commercial landscape maintenance in Virginia. Professional care for corporate campuses and commercial properties. Serving Northern Virginia since 1986.',
    card: 'summary_large_image',
    images: [`${SITE_URL}/media/og/sunrise-landscape-og.png`],
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
          src={'/media/work/commercial-striped-lawn-chapel-campus.jpg'}
          alt="Striped lawn in front of a commercial campus maintained by Sunrise Landscape"
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
              src={'/media/work/commercial-annuals-entry-steps.jpg'}
              alt="Seasonal flowers planted beside the entry steps of a commercial building"
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
                img: '/media/work/commercial-office-lawn-beds.jpg',
                alt: 'Lawn and planting beds along a brick office building',
              },
              {
                num: '02',
                title: 'HOA Communities',
                desc: 'Pristine common area maintenance and seasonal enhancements for homeowner associations.',
                img: '/media/work/commercial-hoa-entrance-sign-beds.jpg',
                alt: 'Community entrance sign with flower beds and trimmed hedges',
              },
              {
                num: '03',
                title: 'Retail Environments',
                desc: 'Welcoming entrances and curb appeal for retail centers and shopping destinations.',
                img: '/media/work/commercial-streetside-flower-bed.jpg',
                alt: 'Flower bed between a sidewalk and a commercial driveway',
              },
              {
                num: '04',
                title: 'Multi-Family Properties',
                desc: 'Year-round care for apartment complexes and condominium communities.',
                img: '/media/work/commercial-community-flower-bed.jpg',
                alt: 'Bed of red and pink flowers at a community entrance',
              },
              {
                num: '05',
                title: 'Data Centers',
                desc: 'Specialized maintenance respecting security requirements and critical infrastructure.',
                img: '/media/work/commercial-campus-walkway-plantings.jpg',
                alt: 'Walkway and young trees beside a modern commercial building',
              },
              {
                num: '06',
                title: 'Religious Institutions',
                desc: 'Respectful, consistent care for churches, temples, and community centers. We plan and prioritize our schedule around worship times, so walkways, entrances, and parking areas are clear and accessible well before services begin.',
                img: '/media/work/commercial-church-garden-arch.jpg',
                alt: 'Church garden with a stone arch, brick path and new plantings',
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

      {/* ── BEFORE / AFTER: entrance roundabout (drag to compare) ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label text-orange mb-4">Drag to compare</p>
            <h2 className="editorial-display text-3xl lg:text-5xl text-green leading-tight" style={{ fontWeight: 400 }}>
              An Entrance Bed, Replanted
            </h2>
          </div>
          <BeforeAfterSlider
            aspect="4 / 3"
            sizes="(max-width: 1024px) 100vw, 900px"
            before={{ src: '/media/work/ba-roundabout-before.jpg', alt: 'Entrance roundabout bed on planting day with shrubs set out in pots' }}
            after={{ src: '/media/work/ba-roundabout-after.jpg', alt: 'The same roundabout planted with a shrub border, new sod and a center flower bed' }}
          />
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['commercial-landscape-maintenance-virginia']} />

      <section className="py-10 px-5 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-black/70 leading-relaxed">
            Writing this winter&apos;s snow RFP? See our{' '}
            <Link href="/commercial-snow-removal-virginia" className="font-bold text-green underline hover:text-orange">
              commercial snow and ice management
            </Link>{' '}
            page for RFP-ready time and material pricing, or bundle it into one contract with grounds maintenance.
          </p>
        </div>
      </section>

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
