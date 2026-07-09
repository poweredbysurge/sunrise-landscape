import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import ContactFormSection from '@/components/ContactFormSection'
import FromOurBlog, { BLOG_ART } from '@/components/FromOurBlog'

export const metadata: Metadata = {
  title: 'Lawn Care in Loudoun County, VA | Sunrise Landscape',
  description:
    'Countywide lawn care in Loudoun from a Sterling-based crew: quarter-acre HOA lots to western estates. Mowing, fertilization, aeration. Free consultation.',
  alternates: { canonical: 'https://www.sunriselandscapeanddesign.com/lawn-care-loudoun-county-va' },
  openGraph: {
    title: 'Lawn Care in Loudoun County, VA | Sunrise Landscape',
    description:
      'Countywide lawn care in Loudoun from a Sterling-based crew: quarter-acre HOA lots to western estates. Mowing, fertilization, aeration. Free consultation.',
    type: 'website',
    images: [
      {
        url: 'https://www.sunriselandscapeanddesign.com/media/stock/tall-fescue-lawn-sunlight.webp',
        width: 1050,
        height: 698,
      },
    ],
  },
  twitter: {
    title: 'Lawn Care in Loudoun County, VA | Sunrise Landscape',
    description:
      'Countywide lawn care in Loudoun from a Sterling-based crew: quarter-acre HOA lots to western estates. Mowing, fertilization, aeration. Free consultation.',
    card: 'summary_large_image',
    images: ['https://www.sunriselandscapeanddesign.com/media/stock/tall-fescue-lawn-sunlight.webp'],
  },
}

const faqs = [
  {
    q: 'Which Loudoun County towns do you cover?',
    a: 'Our routes run from Sterling and Potomac Falls through Ashburn, Leesburg, South Riding, Stone Ridge, and Aldie, and out to the western Loudoun estates. If your town is not listed, call. The county is our home turf and routes flex each season.',
  },
  {
    q: 'How do you price large or estate lots?',
    a: 'By measured turf area and access, not guesswork. An acre of open lawn mows very differently than an acre broken up by fencing, orchards, and outbuildings. We walk the property once, then the quote holds for the season.',
  },
  {
    q: 'Will the same crew come every week?',
    a: 'Yes. Route consistency is deliberate: a crew that knows your gate code, your dog, and the wet corner by the shed works faster and catches problems earlier. You get a crew, not a rotation.',
  },
  {
    q: 'Do you handle HOA communities like South Riding?',
    a: 'All season long. South Riding and Stone Ridge have active covenant enforcement, and our weekly mowing standard is built to pass it: consistent height, edged walks, clean hard surfaces before the trailer door closes.',
  },
  {
    q: 'How fast can you start?',
    a: 'Spring onboarding usually lands within one to two weeks. Midseason starts are often faster because routes are already running. Either way it begins with a free site visit and a soil test.',
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lawn Care in Loudoun County, VA',
    serviceType: 'Lawn care',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Loudoun County',
      containedInPlace: { '@type': 'State', name: 'Virginia' },
    },
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

export default function LawnCareLoudounPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-green text-cream pt-36 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Lawn Care in Loudoun County, VA</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Loudoun runs from quarter-acre HOA lots in South Riding to multi-acre spreads past
            Aldie, and the same lawn program does not fit both. Our shop sits at 43813 Beaver Meadow
            Road in Sterling, which puts every corner of the county inside a real service radius,
            with crews sized for the lot in front of them.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-orange text-white font-bold px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Get a free consultation
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-6">
            Lawn Care Services Across Loudoun
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-8">
            The county program carries the same backbone everywhere: soil test first, then a season
            of scheduled care with one crew owning your property.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
            {[
              'Weekly mowing and edging',
              'Soil test and feeding plan',
              'Seasonal fertilizer and pre-emergent applications',
              'Broadleaf and grassy weed treatment',
              'Core aeration and overseeding each fall',
              'Topdressing and renovation work',
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

      <section className="py-12 px-6 lg:px-12 bg-cream/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">Built for Big Lots Too</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Estate properties west of Ashburn bring their own logistics: long driveways, well-water
            irrigation that cannot run all day, meadow edges that blur into turf. We plan those
            lawns zone by zone. Irrigated turf near the house gets the full program. Outer acreage
            gets a mowing and weed regimen that keeps it healthy without pretending it is a putting
            green. That honesty saves owners real money every season.
          </p>
          <div className="relative aspect-[4/3] w-full mt-8">
            <Image
              src="/media/stock/tall-fescue-lawn-sunlight.webp"
              alt="Tall fescue lawn blades backlit by afternoon sun"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">Your Town Has Its Own Page</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-6">
            The county page is the map. The town pages are the detail. If you live in one of these,
            start there:
          </p>
          <div className="flex flex-wrap gap-3 text-lg">
            <Link href="/lawn-care-leesburg-va" className="border border-green text-green px-5 py-2 hover:bg-green hover:text-cream transition-colors">
              Lawn Care in Leesburg
            </Link>
            <Link href="/lawn-care-ashburn-va" className="border border-green text-green px-5 py-2 hover:bg-green hover:text-cream transition-colors">
              Lawn Care in Ashburn
            </Link>
            <Link href="/lawn-care-aldie-va" className="border border-green text-green px-5 py-2 hover:bg-green hover:text-cream transition-colors">
              Lawn Care in Aldie
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-cream/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-4">Communities We Serve</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            South Riding, Stone Ridge, Potomac Falls, and the western Loudoun estates, alongside our
            dedicated Leesburg, Ashburn, and Aldie routes.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-8">Loudoun Lawn Care Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-green text-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed max-w-3xl mb-6">
            Garden beds, pruning, and seasonal color live under{' '}
            <Link href="/landscape-maintenance-northern-virginia" className="underline hover:text-orange">
              landscape maintenance
            </Link>
            . Design and build work starts at{' '}
            <Link href="/landscape-design-northern-virginia" className="underline hover:text-orange">
              landscape design
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
          { slug: 'landscape-maintenance-services', image: BLOG_ART.maintenance2 },
          { slug: 'what-is-dormant-turf-and-why-it-matters-in-northern-virginia', image: BLOG_ART.mowing },
        ]}
      />

      <ContactFormSection />
    </>
  )
}
