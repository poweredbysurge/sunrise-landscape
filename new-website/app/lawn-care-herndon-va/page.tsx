import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import ContactFormSection from '@/components/ContactFormSection'
import FromOurBlog, { BLOG_ART } from '@/components/FromOurBlog'

export const metadata: Metadata = {
  title: 'Lawn Service in Herndon, VA | Sunrise Landscape',
  description:
    'Lawn service in Herndon, VA built for clay soil: mowing, aeration, grub control, and drainage-aware care from a local crew. 39 years in Northern Virginia.',
  alternates: { canonical: 'https://www.sunriselandscapeanddesign.com/lawn-care-herndon-va' },
  openGraph: {
    title: 'Lawn Service in Herndon, VA | Sunrise Landscape',
    description:
      'Lawn service in Herndon, VA built for clay soil: mowing, aeration, grub control, and drainage-aware care from a local crew. 39 years in Northern Virginia.',
    type: 'website',
    images: [
      {
        url: 'https://www.sunriselandscapeanddesign.com/media/stock/freshly-mowed-lawn-closeup.webp',
        width: 1200,
        height: 874,
      },
    ],
  },
  twitter: {
    title: 'Lawn Service in Herndon, VA | Sunrise Landscape',
    description:
      'Lawn service in Herndon, VA built for clay soil: mowing, aeration, grub control, and drainage-aware care from a local crew. 39 years in Northern Virginia.',
    card: 'summary_large_image',
    images: ['https://www.sunriselandscapeanddesign.com/media/stock/freshly-mowed-lawn-closeup.webp'],
  },
}

const faqs = [
  {
    q: 'How much does lawn service cost in Herndon?',
    a: 'Most Herndon properties fall between $50 and $80 per mowing visit depending on lot size and access. Season-long programs bundle mowing with fertilization, aeration, and cleanups at a better rate than booking each separately. Quotes follow a free site visit.',
  },
  {
    q: 'My Herndon lawn stays soggy. Do I need a french drain?',
    a: 'Maybe. Herndon clay drains slowly, so start with core aeration and watch one wet season. If water still stands more than a day after rain, a french drain or regrading is the real fix, and our drainage team designs those. Turf care alone cannot beat standing water.',
  },
  {
    q: 'Does aeration really matter in clay soil?',
    a: 'In Herndon it is the single highest-value visit of the year. Clay compacts hard, roots suffocate, and water sheets off instead of soaking in. Pulling cores every fall opens the soil so air, water, and seed actually reach the root zone.',
  },
  {
    q: 'What mowing schedule works for Herndon lawns?',
    a: 'Weekly through the growing season, with the deck set high at 3.5 to 4 inches. Taller fescue shades the soil, which slows both weed germination and the evaporation that stresses lawns on hot clay in July and August.',
  },
  {
    q: 'When should I treat for grubs in Herndon?',
    a: 'Preventive treatment goes down in early summer, before eggs hatch. Irrigated Herndon lawns are grub magnets because beetles seek moist soil in dry Julys. If you see brown patches that lift like carpet in late summer, that window has passed and we treat curatively.',
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lawn Service in Herndon, VA',
    serviceType: 'Lawn care',
    areaServed: { '@type': 'City', name: 'Herndon', containedInPlace: { '@type': 'State', name: 'Virginia' } },
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

export default function LawnCareHerndonPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="bg-green text-cream pt-36 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Lawn Service in Herndon, VA</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            By midsummer, Herndon lawns tell you what they need: mow high while the heat is on, keep
            an eye out for grub damage in irrigated yards, and get on the September aeration
            calendar before it fills. This is the season where good lawns hold and neglected ones
            start writing next spring's problem list.
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
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-6">Lawn Care Services in Herndon</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-8">
            Every Herndon program starts with a soil test, and around here the results rarely
            surprise us: heavy clay, low organic matter, compaction. The program is built to work
            with that soil instead of fighting it.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
            {[
              'Weekly mowing and edging',
              'Soil test and clay-specific feeding plan',
              'Seasonal fertilizer and pre-emergent applications',
              'Broadleaf and grassy weed treatment',
              'Core aeration and overseeding each fall',
              'Topdressing to build organic matter into clay',
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
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">Lawn Mowing in Herndon, VA</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Weekly visits, high deck, sharp blades. On clay lawns a dull blade tears grass that is
            already water-stressed, and the tips brown within a day. Our crews swap blades on a
            schedule, cut at 3.5 to 4 inches, edge the walks, and disperse clippings to feed the
            soil. Downtown Herndon lots with mature trees get the same shade treatment we use in
            older neighborhoods across the county: higher cut, lighter feeding, more seed.
          </p>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">
            Herndon's Real Lawn Problem Is Under the Grass
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Ask why a Herndon lawn puddles, thins, or browns in patches and the answer is usually the
            same word: clay. Water cannot soak in, so it stands in low spots and drowns roots. Then
            summer bakes the surface into something close to brick. Core aeration every fall is the
            non-negotiable fix, and topdressing with compost slowly gives the soil structure it never
            had. Where water problems go past what turf care can solve, our drainage team steps in
            with french drains, dry creeks, and regrading. Lawn crew and drainage crew, one company,
            which means nobody blames the other guy.
          </p>
          <div className="relative aspect-[4/3] w-full mt-8">
            <Image
              src="/media/stock/freshly-mowed-lawn-closeup.webp"
              alt="Close-up of freshly mowed, dew-covered tall fescue grass"
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
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-4">Herndon Neighborhoods We Serve</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Downtown Herndon, Fox Mill, McNair, and the Dranesville area. Sterling is next door, so
            Herndon sits inside our tightest service radius.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-8">Herndon Lawn Service Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Cross links */}
      <section className="py-12 px-6 lg:px-12 bg-green text-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl leading-tight mb-6">More Help for Herndon Yards</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-6">
            Standing water problems live on our{' '}
            <Link href="/drainage-solutions-northern-virginia" className="underline hover:text-orange">
              drainage and erosion control
            </Link>{' '}
            page. Design and planting work is handled by the{' '}
            <Link href="/service-areas/landscaping-herndon-va" className="underline hover:text-orange">
              Herndon landscaping
            </Link>{' '}
            team, and garden beds fall under{' '}
            <Link href="/landscape-maintenance-northern-virginia" className="underline hover:text-orange">
              landscape maintenance
            </Link>
            . For the science on fall feeding, read{' '}
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
          { slug: 'what-is-dormant-turf-and-why-it-matters-in-northern-virginia', image: BLOG_ART.mowing },
          { slug: 'year-round-landscape-maintenance-northern-virginia', image: BLOG_ART.maintenance },
        ]}
      />

      <ContactFormSection />
    </>
  )
}
