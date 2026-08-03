import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'
import FromOurBlog from '@/components/FromOurBlog'
import { cdnToLocal } from '@/lib/mediaUrl'

export const metadata: Metadata = {
  title: 'Commercial Snow Removal in Northern Virginia | Sunrise Landscape',
  description: 'Commercial snow and ice management for HOA, retail, and office properties in Northern Virginia. RFP-ready unit pricing, contracted response times. Request a proposal.',
  openGraph: {
    title: 'Commercial Snow Removal in Northern Virginia | Sunrise Landscape',
    description: 'Commercial snow and ice management for HOA, retail, and office properties in Northern Virginia. RFP-ready unit pricing, contracted response times. Request a proposal.',
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1670947913768-f0e6cd48f104?auto=format&fit=crop&w=1200&q=80' }],
  },
  twitter: {
    title: 'Commercial Snow Removal in Northern Virginia | Sunrise Landscape',
    description: 'Commercial snow and ice management for HOA, retail, and office properties in Northern Virginia. RFP-ready unit pricing, contracted response times. Request a proposal.',
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.sunriselandscapeanddesign.com/commercial-snow-removal-virginia',
  },
}

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Commercial Snow and Ice Management',
    serviceType: 'Commercial snow removal',
    areaServed: { '@type': 'AdministrativeArea', name: 'Northern Virginia' },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Sunrise Landscape',
      telephone: '703-544-0028',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4819 Sudley Rd',
        addressLocality: 'Catharpin',
        addressRegion: 'VA',
        postalCode: '20143',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
    },
  },
]

export default function CommercialSnowRemovalPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* ── HERO — clean image, no overlay ── */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1670947913768-f0e6cd48f104?auto=format&fit=crop&w=1920&q=80"
          alt="Loader plowing snow from a commercial property lot during heavy snowfall"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ── INTRO ── */}
      <section className="bg-green py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8 text-center flex flex-col items-center">
          <p className="section-label text-orange mb-4">Commercial</p>
          <h1 className="text-4xl lg:text-6xl text-cream leading-tight mb-6 max-w-3xl">
            Commercial Snow and Ice Management
          </h1>
          <p className="text-cream/80 max-w-2xl leading-relaxed lg:text-lg mb-8">
            If your property is writing this winter&apos;s snow RFP now, you need response tiers, trigger depths, and
            pricing in writing before the first flake, not a verbal understanding from last year. We provide
            commercial snow removal and ice management with unit pricing built to answer an RFP directly, for HOA
            common areas, retail centers, and office properties across Northern Virginia.
          </p>
          <Link href="/contact#form" className="btn-primary" style={{ background: '#ff6400', color: '#fff' }}>
            <span>Request a Snow Proposal</span>
          </Link>
        </div>
      </section>

      {/* ── WHAT A CONTRACT INCLUDES ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
              What a Contract Includes
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-black/70">
              <p>
                Every commercial snow and ice management contract defines trigger depth, response window, service
                priority order for lots and walkways, and de-icing material and application rate. Plow routes are
                mapped to the property before the season starts, not improvised during the first storm.
              </p>
              <p>
                Documentation runs alongside the work: time-stamped service logs and material application records
                for every event, which most commercial insurance policies and property management agreements now
                require for liability purposes.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
              Properties We Serve
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-black/70">
              <p>
                HOA common areas and private roads, retail centers where liability exposure is highest on walkways
                and entrances, and office and multi-family properties where parking capacity has to stay usable
                through a multi-day event, not just cleared once.
              </p>
              <p>
                Portfolios with multiple properties across Loudoun and Fairfax counties get one account manager and
                one contract instead of coordinating a different vendor per site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RFP READY ── */}
      <section className="bg-cream py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
            RFP-Ready: We Respond With Unit Pricing
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            Send us your snow removal contract RFP with a site plan, square footage, and current trigger depth or
            response requirements, and we return itemized unit pricing broken out by plowing, walkway clearing, and
            de-icing application, built so your committee can compare bids on the same line items instead of a single
            bottom-line number. Seasonal and per-event pricing structures are both available, with a written not-to-exceed
            cap on per-event contracts so budget risk is defined before the season, not discovered after a heavy one.
          </p>
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['commercial-snow-removal-virginia']} />

      {/* ── CROSS-LINK: commercial maintenance ── */}
      <section className="bg-white py-12 px-5 lg:px-8 border-t border-green/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-black/60 leading-relaxed">
            Looking for year-round grounds maintenance alongside snow coverage? See our{' '}
            <Link href="/commercial-landscape-maintenance-virginia" className="font-bold text-green underline hover:text-orange">
              commercial landscape maintenance
            </Link>{' '}
            program, which can be bundled into one contract with snow and ice management.
          </p>
        </div>
      </section>

      <FromOurBlog
        posts={[
          { slug: 'snow-and-ice-management', image: 'https://images.unsplash.com/photo-1701809922861-6f650117c966?auto=format&fit=crop&w=800&q=80' },
          { slug: 'snow-plowing-vs-snow-removal-costs', image: 'https://images.unsplash.com/photo-1662906849229-e5b34c4488db?auto=format&fit=crop&w=800&q=80' },
        ]}
      />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
