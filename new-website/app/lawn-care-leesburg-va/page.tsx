import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import ContactFormSection from '@/components/ContactFormSection'
import FromOurBlog, { BLOG_ART } from '@/components/FromOurBlog'

export const metadata: Metadata = {
  title: 'Lawn Care in Leesburg, VA | Sunrise Landscape',
  description:
    'Full-season lawn care in Leesburg, VA from a crew that has worked Loudoun lawns for 39 years. Mowing, fertilization, aeration, weed control. Free consultation.',
  alternates: { canonical: 'https://www.sunriselandscapeanddesign.com/lawn-care-leesburg-va' },
  openGraph: {
    title: 'Lawn Care in Leesburg, VA | Sunrise Landscape',
    description:
      'Full-season lawn care in Leesburg, VA from a crew that has worked Loudoun lawns for 39 years. Mowing, fertilization, aeration, weed control. Free consultation.',
    type: 'website',
    images: [
      {
        url: 'https://www.sunriselandscapeanddesign.com/media/stock/mature-shade-tree-suburban-lawn.webp',
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    title: 'Lawn Care in Leesburg, VA | Sunrise Landscape',
    description:
      'Full-season lawn care in Leesburg, VA from a crew that has worked Loudoun lawns for 39 years. Mowing, fertilization, aeration, weed control. Free consultation.',
    card: 'summary_large_image',
    images: ['https://www.sunriselandscapeanddesign.com/media/stock/mature-shade-tree-suburban-lawn.webp'],
  },
}

const faqs = [
  {
    q: 'How much does lawn care cost in Leesburg?',
    a: 'Most Leesburg homes land between $55 and $85 per mowing visit, with full-season programs priced by lot size and services included. We quote after a free site visit, so the number reflects your actual lawn rather than a county average.',
  },
  {
    q: 'When should I aerate and overseed in Leesburg?',
    a: 'Mid September through mid October. Leesburg lawns are almost all tall fescue, and that window gives new seedlings warm soil, cool air, and a full fall to root before winter. Spring seeding here mostly feeds the crabgrass.',
  },
  {
    q: 'Do you offer weed control in Leesburg?',
    a: 'Yes. Our lawn weed control services in Leesburg run through the season: pre-emergent in early spring to stop crabgrass, then targeted broadleaf and grassy weed treatments as needed. We treat what is actually growing, not a fixed spray calendar.',
  },
  {
    q: 'Do you service lawns near downtown Leesburg and the historic district?',
    a: 'We do, and those lawns get handled differently. Mature shade trees mean thinner turf, so we mow higher, seed shade-tolerant fescue blends, and skip aggressive spring feeding that pushes growth the canopy cannot support.',
  },
  {
    q: 'Is weekly or biweekly mowing better for Leesburg lawns?',
    a: 'Weekly, April through October. Tall fescue grows fast enough here that a two-week gap forces you to cut off more than a third of the blade, which stresses the lawn and leaves clumps. We shift to as-needed visits in the shoulder months.',
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lawn Care in Leesburg, VA',
    serviceType: 'Lawn care',
    areaServed: { '@type': 'City', name: 'Leesburg', containedInPlace: { '@type': 'State', name: 'Virginia' } },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Sunrise Landscape & Design',
      telephone: '703-544-0028',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '43813 Beaver Meadow Rd #100',
        addressLocality: 'Sterling',
        addressRegion: 'VA',
        postalCode: '20166',
      },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
]

export default function LawnCareLeesburgPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="bg-green text-cream pt-36 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Lawn Care in Leesburg, VA</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            The oaks and maples that make older Leesburg streets worth the drive are the same trees
            starving the grass beneath them. Out in Lansdowne, builder sod tends to look perfect for
            two summers, then thins. Different lawns, same answer: lawn care built for this town, not
            a one-size mowing route.
          </p>
          <Link
            href="/contact#form"
            className="inline-block mt-8 bg-orange text-white font-bold px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Get a free consultation
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-6">Lawn Care Services in Leesburg</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-8">
            We run lawn care in Leesburg as a full-season program, not a menu of one-off visits. One
            crew learns your property. The program carries it from the first spring pre-emergent to
            the last leaf pickup in December.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
            {[
              'Weekly mowing and edging',
              'Soil test to start, so treatments match your dirt',
              'Seasonal fertilizer and pre-emergent applications',
              'Broadleaf and grassy weed treatment',
              'Core aeration and overseeding each fall',
              'Topdressing for thin or compacted areas',
              'Leaf cleanup and removal',
              'Grub control and fungicide treatments',
            ].map((s) => (
              <div key={s} className="flex gap-3 items-start">
                <span className="text-orange font-bold mt-1">•</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services image */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/media/6808afe22b48076cc8e63cef/6822fae33f0e864553518e47_mowing-img (1).webp"
              alt="Freshly mowed, striped tall fescue lawn maintained by Sunrise Landscape in Northern Virginia"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* Mowing */}
      <section className="py-12 px-6 lg:px-12 bg-cream/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">Lawn Mowing in Leesburg, VA</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            A mowing visit here is weekly from April through October. The crew cuts at 3.5 to 4
            inches, because tall fescue shades out weeds when you let it stand tall. Edges get a
            clean blade line along walks and beds, clippings get dispersed rather than left in rows,
            and gates get closed. That last one sounds small until it is your dog.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mt-4">
            Leesburg lawn mowing has one wrinkle most companies ignore: the town has two kinds of
            lawns. Newer communities want a uniform carpet cut. Shade lawns near the historic
            district need a higher deck and a lighter touch. We set the mower for the lawn in front
            of us.
          </p>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">
            Shade Lawns, Sod Lawns, and the September Window
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Two facts drive almost every lawn decision in Leesburg. First, mature tree canopy: turf
            under a 60-year-old maple gets a fraction of the sun it needs, so it wants shade-blend
            seed, higher mowing, and patience. Second, the calendar: tall fescue germinates best when
            soil is still warm and nights turn cool, which in Loudoun County means mid September to
            mid October. Aeration and overseeding in that window does more for a thin lawn than
            anything you can buy in a jug. We book those weeks out in August, every year.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mt-4">
            This is the same team behind our Leesburg water feature and landscape work, including the
            lakefront project our design portfolio features. If your plans go past the lawn, the crew
            that mows it can bring in the team that builds.
          </p>
          <div className="relative aspect-[4/3] w-full mt-8">
            <Image
              src="/media/stock/mature-shade-tree-suburban-lawn.webp"
              alt="Mature shade tree over a manicured suburban lawn"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-12 px-6 lg:px-12 bg-cream/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-4">Leesburg Neighborhoods We Serve</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Lansdowne, River Creek, Red Cedar, Potomac Station, Exeter, and the streets in and around
            downtown Leesburg. If you are just outside those, ask. Our crews are based fifteen
            minutes away in Sterling.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-8">Leesburg Lawn Care Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Cross links */}
      <section className="py-12 px-6 lg:px-12 bg-green text-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl leading-tight mb-6">More Than Lawns in Leesburg</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-6">
            Need design, hardscape, or planting instead of turf care? Our{' '}
            <Link href="/service-areas/landscaping-leesburg-va" className="underline hover:text-orange">
              Leesburg landscaping
            </Link>{' '}
            team handles that side. We also build{' '}
            <Link href="/landscape-maintenance-northern-virginia" className="underline hover:text-orange">
              full landscape maintenance programs
            </Link>{' '}
            and fix soggy yards with{' '}
            <Link href="/drainage-solutions-northern-virginia" className="underline hover:text-orange">
              drainage and erosion control
            </Link>
            . Curious what a season of care involves? Read our{' '}
            <Link href="/blogs/year-round-landscape-maintenance-northern-virginia" className="underline hover:text-orange">
              year-round maintenance guide
            </Link>
            .
          </p>
          <p className="text-lg">
            Call <a href="tel:703-544-0028" className="underline hover:text-orange">703-544-0028</a> or
            request a free consultation below.
          </p>
        </div>
      </section>

      <FromOurBlog
        posts={[
          { slug: 'year-round-landscape-maintenance-northern-virginia', image: BLOG_ART.maintenance },
          { slug: 'what-is-dormant-turf-and-why-it-matters-in-northern-virginia', image: BLOG_ART.mowing },
          { slug: 'why-fall-fertilization-matters-for-trees-and-shrubs', image: BLOG_ART.planting },
        ]}
      />

      <ContactFormSection />
    </>
  )
}
