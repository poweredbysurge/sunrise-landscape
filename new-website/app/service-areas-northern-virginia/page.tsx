import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceCarousel from '@/components/ServiceCarousel'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'

export const metadata: Metadata = {
  title: 'Landscape Services Across Northern Virginia | Sunrise Landscape & Design',
  description: 'Sunrise Landscape & Design serves 12+ Northern Virginia communities including Ashburn, Leesburg, Reston, McLean, and Vienna. 39+ years of landscape design, hardscape, and maintenance expertise.',
  openGraph: {
    title: 'Landscape Services Across Northern Virginia | Sunrise Landscape & Design',
    description: 'Sunrise Landscape & Design serves 12+ Northern Virginia communities including Ashburn, Leesburg, Reston, McLean, and Vienna. 39+ years of landscape design, hardscape, and maintenance expertise.',
    type: 'website',
  },
  twitter: {
    title: 'Landscape Services Across Northern Virginia | Sunrise Landscape & Design',
    description: 'Sunrise Landscape & Design serves 12+ Northern Virginia communities including Ashburn, Leesburg, Reston, McLean, and Vienna. 39+ years of landscape design, hardscape, and maintenance expertise.',
    card: 'summary_large_image',
  },
}

const cityCards = [
  {
    city: 'Western Loudoun',
    slug: 'landscaping-western-loudoun-va',
    neighborhoods: 'Willowsford, Aldie Village, Middleburg corridor, Hunt Country, Goose Creek',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364544ce089fe9dbc0f8_photo-1500382017468-9049fed747ef.jpeg',
    alt: 'Rolling farmland at sunset in Western Loudoun County, Virginia',
  },
  {
    city: 'Oakton',
    slug: 'landscaping-oakton-va',
    neighborhoods: 'Hunter Mill, Oak Marr, Difficult Run, Vale, Five Oaks',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364744ce089fe9dbc165_photo-1598902108854-10e335adac99.jpeg',
    alt: 'Lush shaded garden landscape in Oakton, Virginia',
  },
  {
    city: 'Great Falls',
    slug: 'landscaping-great-falls-va',
    neighborhoods: 'Falcon Ridge, Holly Knoll, Riverbend, Brooks Farm, Springvale',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364544ce089fe9dbc0f3_photo-1568605114967-8130f3a36994.jpeg',
    alt: 'Custom estate home with landscape lighting at dusk in Great Falls, Virginia',
  },
  {
    city: 'Centreville',
    slug: 'landscaping-centreville-va',
    neighborhoods: 'Sully Station, Bull Run, Faircrest, Virginia Run, Little Rocky Run',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364744ce089fe9dbc16f_photo-1600047509807-ba8f99d2cdde.jpeg',
    alt: 'Contemporary home with paver walkway and landscaping in Centreville, Virginia',
  },
  {
    city: 'Chantilly',
    slug: 'landscaping-chantilly-va',
    neighborhoods: 'Westfield, Greenbriar, Pleasant Valley, Franklin Glen, Brookfield',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364544ce089fe9dbc0ff_photo-1567496898669-ee935f5f647a.jpeg',
    alt: 'Row of townhomes in a Chantilly, Virginia community',
  },
  {
    city: 'Vienna',
    slug: 'landscaping-vienna-va',
    neighborhoods: 'Tysons, Wolf Trap, Westwood Village, Hunter Mill, Country Club Manor',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364544ce089fe9dbc10b_photo-1572120360610-d971b9d7767c.jpeg',
    alt: 'Classic American home with front porch and autumn foliage in Vienna, Virginia',
  },
  {
    city: 'McLean',
    slug: 'landscaping-mclean-va',
    neighborhoods: 'Langley, Chesterbrook, Pimmit Hills, McLean Hamlet, Salona Village',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364644ce089fe9dbc11d_photo-1598228723793-52759bba239c.jpeg',
    alt: 'Stately brick home with manicured landscaping in McLean, Virginia',
  },
  {
    city: 'Herndon',
    slug: 'landscaping-herndon-va',
    neighborhoods: 'Old Town Herndon, Folly Lick, Chandon, Franklin Farm, Hiddenbrook',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364544ce089fe9dbc10f_photo-1605146769289-440113cc3d00.jpeg',
    alt: 'Newly built suburban homes in a Herndon, Virginia neighborhood',
  },
  {
    city: 'Reston',
    slug: 'landscaping-reston-va',
    neighborhoods: 'Lake Anne, North Point, South Lakes, Hunters Woods, Tall Oaks',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364644ce089fe9dbc121_photo-1600585154340-be6161a56a0c.jpeg',
    alt: 'Modern home nestled among mature trees in Reston, Virginia',
  },
  {
    city: 'Leesburg',
    slug: 'landscaping-leesburg-va',
    neighborhoods: 'Lansdowne, Old Town Leesburg, River Creek, Beacon Hill, Potomac Station',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364744ce089fe9dbc16b_photo-1570129477492-45c003edd2be.jpeg',
    alt: 'Historic white colonial home with wraparound porch and lush lawn in Leesburg, Virginia',
  },
  {
    city: 'Ashburn',
    slug: 'landscaping-ashburn-va',
    neighborhoods: 'Brambleton, Broadlands, One Loudoun, Belmont Country Club, Belmont Ridge',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364544ce089fe9dbc0fb_photo-1605276374104-dee2a0ed3cd6.jpeg',
    alt: 'Brick suburban home with manicured lawn in Ashburn, Virginia',
  },
  {
    city: 'Sterling',
    slug: 'landscaping-sterling-va',
    neighborhoods: 'Potomac Falls, Lowes Island, Cascades, Countryside, Sugarland Run',
    img: 'https://cdn.prod.website-files.com/680b491848812a8a8cf323ac/6a17364544ce089fe9dbc113_photo-1449844908441-8829872d2607.jpeg',
    alt: 'Shingled home along a tree-lined street in Sterling, Virginia',
  },
]


export default function ServiceAreasNVPage() {
  const jsonLd = getMdxJsonLd('pages/service-areas-northern-virginia/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-green text-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: text */}
            <div>
              <div className="relative w-24 h-8 mb-8 opacity-60">
                <Image
                  src={"/logos/sunrise-logo.svg"}
                  alt="SUNRISE Landscape - Design"
                  fill
                  className="object-contain object-left"
                  sizes="96px"
                />
              </div>
              <h1 className="text-4xl lg:text-6xl text-cream leading-tight mb-6">
                Landscape Design in Northern Virginia
              </h1>
              <p className="text-cream/80 leading-relaxed mb-4">
                For nearly four decades, Sunrise Landscape &amp; Design has shaped outdoor spaces across Loudoun and Fairfax counties, from estate properties in McLean and Great Falls to family backyards in Ashburn, Reston, and Sterling. Our service area spans the breadth of Northern Virginia, covering more than a dozen communities where homeowners, HOAs, and commercial property managers count on us for landscape design, hardscape construction, lighting design, and year-round maintenance.
              </p>
              <p className="text-cream/80 leading-relaxed">
                Northern Virginia&apos;s mid-Atlantic climate, clay-heavy soils, and four-season conditions create a unique landscape environment, one that rewards experience. Headquartered in Sterling, our team brings local knowledge to every project, whether we&apos;re installing a drainage solution in a wooded Vienna lot, designing a pool surround for a Leesburg estate, or building a low-maintenance entrance landscape for a Chantilly office park.
              </p>
            </div>

            {/* Right: image */}
            <div
              className="relative overflow-hidden w-full"
              style={{ borderRadius: '20px', aspectRatio: '4/3' }}
            >
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/680b3f278dd4a418016b50d1_Outer-pattio.webp')}
                alt="Stone patio with flowering planting beds and outdoor seating overlooking a Northern Virginia landscape"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Second H1 (matches Webflow heading tree) */}
      <section className="bg-cream py-8">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-4xl lg:text-6xl text-green">
            Landscape Lighting Services in Northern Virginia
          </h2>
        </div>
      </section>

      {/* City cards */}
      <section className="pb-16 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h3 className="font-ui not-italic text-sm font-bold uppercase tracking-widest text-orange mb-4">
            Browse Our Service Areas
          </h3>
          <p className="text-green/60 mb-10 leading-relaxed">
            Sunrise Landscape &amp; Design serves 12 communities across Northern Virginia. Click any area below to explore our work in your neighborhood.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityCards.map((card) => (
              <Link
                key={card.city}
                href={`/service-areas/${card.slug}`}
                className="group flex flex-col overflow-hidden"
                style={{ background: '#162b1e', borderRadius: '20px' }}
              >
                <div className="relative overflow-hidden" style={{ height: '220px' }}>
                  <Image
                    src={cdnToLocal(card.img)}
                    alt={card.alt}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h4 className="text-cream mb-2" style={{ fontSize: '1.45rem', lineHeight: 1.2 }}>
                    {card.city}
                  </h4>
                  <p className="text-cream/70 leading-relaxed mb-5 flex-1">{card.neighborhoods}</p>
                  <span className="inline-flex items-center gap-2 section-label text-orange group-hover:text-cream transition-colors duration-200">
                    View Area
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lawn care town pages */}
      <section className="py-14 bg-cream/60">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl text-green leading-tight mb-3">Lawn Care in Your Town</h2>
          <p className="text-green/60 mb-8 leading-relaxed max-w-2xl">
            Dedicated lawn care programs for the towns we serve most. Each page covers local soil conditions, neighborhoods, and seasonal timing specific to that area.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Lawn Care in Leesburg', href: '/lawn-care-leesburg-va' },
              { label: 'Lawn Care in Ashburn', href: '/lawn-care-ashburn-va' },
              { label: 'Lawn Care in Herndon', href: '/lawn-care-herndon-va' },
              { label: 'Lawn Care in Fairfax', href: '/lawn-care-fairfax-va' },
              { label: 'Lawn Care in Aldie', href: '/lawn-care-aldie-va' },
              { label: 'Lawn Care in Loudoun County', href: '/lawn-care-loudoun-county-va' },
              { label: 'Patio & Fire Pit Contractors', href: '/patio-fire-pit-leesburg-ashburn-great-falls' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-green text-green px-5 py-2.5 text-sm font-medium hover:bg-green hover:text-cream transition-colors"
                style={{ borderRadius: '8px' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services carousel */}
      <ServiceCarousel title="Our Services in Northern Virginia" />

      {/* ── CONTACT FORM ── */}
      <ServiceExpansion data={serviceExpansions['service-areas-northern-virginia']} />

      <ContactFormSection />
    </>
  )
}
