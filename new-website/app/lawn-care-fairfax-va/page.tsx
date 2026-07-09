import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import ContactFormSection from '@/components/ContactFormSection'
import FromOurBlog, { BLOG_ART } from '@/components/FromOurBlog'

export const metadata: Metadata = {
  title: 'Lawn Care in Fairfax, VA | Sunrise Landscape',
  description:
    'Fairfax lawn care with aeration and overseeding at its core. Thicker turf by fall, fewer weeds by spring, one local crew all season. Free consultation.',
  alternates: { canonical: 'https://www.sunriselandscapeanddesign.com/lawn-care-fairfax-va' },
  openGraph: {
    title: 'Lawn Care in Fairfax, VA | Sunrise Landscape',
    description:
      'Fairfax lawn care with aeration and overseeding at its core. Thicker turf by fall, fewer weeds by spring, one local crew all season. Free consultation.',
    type: 'website',
    images: [
      {
        url: 'https://www.sunriselandscapeanddesign.com/media/stock/zero-turn-mower-striping-lawn.webp',
        width: 1150,
        height: 537,
      },
    ],
  },
  twitter: {
    title: 'Lawn Care in Fairfax, VA | Sunrise Landscape',
    description:
      'Fairfax lawn care with aeration and overseeding at its core. Thicker turf by fall, fewer weeds by spring, one local crew all season. Free consultation.',
    card: 'summary_large_image',
    images: ['https://www.sunriselandscapeanddesign.com/media/stock/zero-turn-mower-striping-lawn.webp'],
  },
}

const faqs = [
  {
    q: 'How much does lawn care cost in Fairfax?',
    a: 'Mowing visits on typical Fairfax lots run $55 to $85, and full-season programs are quoted by lot size and scope after a free site visit. Larger Fairfax Station properties get priced on acreage and access rather than a flat tier.',
  },
  {
    q: 'When should I aerate my lawn in Fairfax?',
    a: 'September. Fairfax lawns are tall fescue on soil that compacts through summer, and fall aeration opens the root zone right when the grass enters its strongest growth phase. We pair it with overseeding in the same visit so the holes become seedbeds.',
  },
  {
    q: 'Does overseeding work in Fairfax Station?',
    a: 'It is the most reliable thickening tool we have there. Larger wooded lots thin out under shade and root pressure, so we overseed with a shade-tolerant fescue blend each fall. Two consecutive falls of seed usually transforms a patchy stand.',
  },
  {
    q: 'What mowing schedule do you recommend?',
    a: 'Weekly in the growing season at 3.5 to 4 inches. High cutting is half the weed control program: tall fescue shades the soil surface, and crabgrass seed that never sees the sun mostly never germinates.',
  },
  {
    q: 'How far into Fairfax County do you go?',
    a: 'Our core Fairfax coverage is Fairfax Station, the Burke area, and the Oakton borders, dispatched from our Sterling shop. If you are near those, call and we will confirm your address is on a route.',
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lawn Care in Fairfax, VA',
    serviceType: 'Lawn care',
    areaServed: { '@type': 'City', name: 'Fairfax', containedInPlace: { '@type': 'State', name: 'Virginia' } },
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

export default function LawnCareFairfaxPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-green text-cream pt-36 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Lawn Care in Fairfax, VA</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Plenty of Fairfax lawns get mowed every week and still look tired. Thin under the trees,
            weedy at the edges, brown by August. Mowing is maintenance. What those lawns are missing
            is the rebuild work: aeration, seed, and soil that can actually hold water.
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
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-6">Fairfax Lawn Care Services</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-8">
            Full-season programs, one crew, a soil test up front. The Fairfax program leans harder
            on renovation than our other service areas because the lawns here tend to be older, more
            shaded, and more compacted.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
            {[
              'Weekly mowing and edging',
              'Soil test and feeding plan',
              'Seasonal fertilizer and pre-emergent applications',
              'Broadleaf and grassy weed treatment',
              'Core aeration and overseeding each fall',
              'Topdressing thin and shaded areas',
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
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">Lawn Aeration in Fairfax</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            One September visit, thousands of pulled cores. Aeration is where Fairfax lawns turn
            around, because compaction is the quiet problem underneath most of the visible ones.
            Water starts soaking in instead of running to the curb. Roots chase the open channels
            deeper. And the seed we spread the same day lands in perfect little pockets instead of
            bouncing off hardpan.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">
            Overseeding in Fairfax Station
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Fairfax Station lots are big, wooded, and beautiful, which is exactly why their lawns
            thin. Tree roots win the water fight and the canopy takes the light. Our approach is
            honest about that: shade-blend overseeding every fall, higher mowing under the drip
            lines, and grass only where grass can win. One client, Jack in neighboring Oakton, put
            it this way after we rebuilt his yard: the team was professional, efficient, and the
            plain yard became the outdoor escape. That is the assignment here too.
          </p>
          <div className="relative aspect-[4/3] w-full mt-8">
            <Image
              src="/media/stock/zero-turn-mower-striping-lawn.webp"
              alt="Zero-turn mower cutting clean stripes into a residential lawn"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-cream/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-4">Where We Work in Fairfax</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Fairfax Station, the Burke area, and the Oakton borders. Nearby city? Ask anyway. Routes
            shift each season.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-8">Fairfax Lawn Care Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-green text-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl leading-tight mb-6">Beyond Turf in Fairfax</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-6">
            Browse{' '}
            <Link href="/service-areas-northern-virginia" className="underline hover:text-orange">
              every area we serve
            </Link>{' '}
            or go deeper on{' '}
            <Link href="/landscape-maintenance-northern-virginia" className="underline hover:text-orange">
              full landscape maintenance
            </Link>
            . For the why behind our fall program, read{' '}
            <Link href="/blogs/why-fall-fertilization-matters-for-trees-and-shrubs" className="underline hover:text-orange">
              why fall fertilization matters
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
          { slug: 'why-fall-fertilization-matters-for-trees-and-shrubs', image: BLOG_ART.planting },
          { slug: 'year-round-landscape-maintenance-northern-virginia', image: BLOG_ART.maintenance },
          { slug: 'top-10-plants-for-your-garden', image: BLOG_ART.design2 },
        ]}
      />

      <ContactFormSection />
    </>
  )
}
