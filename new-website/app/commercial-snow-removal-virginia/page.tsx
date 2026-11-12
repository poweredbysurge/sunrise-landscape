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
  description: 'Commercial snow and ice management for HOA, retail, and office properties in Northern Virginia. RFP-ready time and material pricing, contracted response times. Request a proposal.',
  openGraph: {
    title: 'Commercial Snow Removal in Northern Virginia | Sunrise Landscape',
    description: 'Commercial snow and ice management for HOA, retail, and office properties in Northern Virginia. RFP-ready time and material pricing, contracted response times. Request a proposal.',
    type: 'website',
    images: [{ url: 'https://www.sunriselandscapeanddesign.com/media/snow-removal/snow-2026-01-27-church-walkways-cleared.jpg' }],
  },
  twitter: {
    title: 'Commercial Snow Removal in Northern Virginia | Sunrise Landscape',
    description: 'Commercial snow and ice management for HOA, retail, and office properties in Northern Virginia. RFP-ready time and material pricing, contracted response times. Request a proposal.',
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
        streetAddress: '43813 Beaver Meadow Rd Ste 100',
        addressLocality: 'Sterling',
        addressRegion: 'VA',
        postalCode: '20166',
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
          src="/media/snow-removal/snow-2026-01-27-church-walkways-cleared.jpg"
          alt="Church entrance walkways and drive cleared of snow by a Sunrise crew in January 2026"
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
            If your property is writing this winter&apos;s snow RFP now, you need response expectations, trigger depths, and
            pricing in writing before the first flake, not a verbal understanding from last year. We provide
            commercial snow removal and ice management billed on a time and material basis, for HOA
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
                Every commercial snow and ice management contract defines trigger depth, response window, scope of
                work for lots and walkways, and de-icing material and application rate. Plow routes are
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
            RFP-Ready: We Respond With Time and Material Pricing
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            Snow work in the DMV is a nightmare and every storm is different. Wet heavy snow, flash ice, multi-day
            events, and overnight refreeze each demand a different response, which is why we do not customize our
            snow contracts site by site. They are almost all the same, billed on a time and material basis, and
            what actually separates one contractor from another here is response time, well-trained crews, and a
            dedication to making sure our clients&apos; properties are accessible as soon as possible. Send us your
            snow removal RFP with a site plan, square footage, and current trigger depth or response requirements,
            and we will return level pricing or T&amp;M pricing your committee can compare against other bids on
            equal footing.
          </p>
        </div>
      </section>

      {/* ── OUR CREWS THIS WINTER: real job photos (CompanyCam, Jan to Feb 2026) ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-5">
              Our Crews This Winter
            </h2>
            <p className="text-lg leading-relaxed text-black/70">
              Photos from our snow and ice work in January and February 2026: lots plowed to the pavement, walkways
              opened with compact track loaders, and snow stacked out of the way so parking stays usable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { src: '/media/snow-removal/snow-2026-02-02-crew-clearing-walkway.jpg', alt: 'Sunrise crew clearing a snow-covered walkway with a compact track loader', caption: 'Crews clearing walkways with a compact track loader.' },
              { src: '/media/snow-removal/snow-2026-02-02-track-loader-operator.jpg', alt: 'Operator pushing deep snow with a compact track loader', caption: 'Pushing deep snow off the paths.' },
              { src: '/media/snow-removal/snow-2026-01-29-parking-lot-cleared.jpg', alt: 'Commercial parking lot plowed down to the pavement', caption: 'A parking lot cleared down to the pavement.' },
              { src: '/media/snow-removal/snow-2026-01-29-walkway-cleared-fence-line.jpg', alt: 'Walkway cleared of snow along a fence line', caption: 'A walkway cleared along the fence line.' },
              { src: '/media/snow-removal/snow-2026-01-29-snow-piles-lot-edge.jpg', alt: 'Plowed snow stacked at the edge of a parking lot', caption: 'Snow stacked at the lot edge to keep spaces open.' },
              { src: '/media/snow-removal/snow-2026-02-23-lot-cleared-before-dawn.jpg', alt: 'Parking lot cleared of snow before sunrise', caption: 'A lot cleared before 5:30 in the morning.' },
            ].map((photo) => (
              <figure key={photo.src}>
                <div className="relative overflow-hidden" style={{ borderRadius: '16px', aspectRatio: '4/3' }}>
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <figcaption className="mt-3 text-black/70 text-base leading-snug">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
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
          { slug: 'snow-and-ice-management', image: '/media/snow-removal/snow-2026-01-29-skid-steer-clearing-sidewalk.jpg' },
          { slug: 'snow-plowing-vs-snow-removal-costs', image: '/media/snow-removal/snow-2026-02-02-track-loader-clearing-path.jpg' },
        ]}
      />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
