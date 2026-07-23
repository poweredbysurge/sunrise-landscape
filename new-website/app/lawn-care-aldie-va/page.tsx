import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import ContactFormSection from '@/components/ContactFormSection'
import FromOurBlog, { BLOG_ART } from '@/components/FromOurBlog'

export const metadata: Metadata = {
  title: 'Lawn Care Services in Aldie, VA | Sunrise Landscape',
  description:
    'Lawn care services in Aldie, VA: full-season turf programs plus mosquito and tick control for Willowsford and Lenah yards. Local crew. Free consultation.',
  alternates: { canonical: 'https://www.sunriselandscapeanddesign.com/lawn-care-aldie-va' },
  openGraph: {
    title: 'Lawn Care Services in Aldie, VA | Sunrise Landscape',
    description:
      'Lawn care services in Aldie, VA: full-season turf programs plus mosquito and tick control for Willowsford and Lenah yards. Local crew. Free consultation.',
    type: 'website',
    images: [
      {
        url: 'https://www.sunriselandscapeanddesign.com/media/stock/manicured-lawn-ground-level.webp',
        width: 1200,
        height: 800,
      },
    ],
  },
  twitter: {
    title: 'Lawn Care Services in Aldie, VA | Sunrise Landscape',
    description:
      'Lawn care services in Aldie, VA: full-season turf programs plus mosquito and tick control for Willowsford and Lenah yards. Local crew. Free consultation.',
    card: 'summary_large_image',
    images: ['https://www.sunriselandscapeanddesign.com/media/stock/manicured-lawn-ground-level.webp'],
  },
}

const faqs = [
  {
    q: 'When does mosquito treatment start in Aldie?',
    a: 'Applications begin in late April and repeat roughly every three weeks through September. Aldie backs up to woods and conservancy land, so pressure is real from the first warm evenings. Consistent coverage through the season is what keeps decks usable in July.',
  },
  {
    q: 'What does your lawn weed control program include?',
    a: 'Pre-emergent in early spring to block crabgrass, then targeted broadleaf and grassy weed treatments as the season shows us what is actually growing. New Aldie lawns lean weedy for their first few years, so the program front-loads prevention.',
  },
  {
    q: 'My Willowsford sod is struggling. Is that normal?',
    a: 'Very. Builder sod sits on graded fill, and once its farm fertility runs out the roots hit compacted subsoil. Fall aeration, overseeding, and a topdressing or two rebuild the base. Most sod lawns turn the corner in their second program year.',
  },
  {
    q: 'How much does lawn care cost in Aldie?',
    a: 'Most Aldie visits price between $55 and $85 for mowing, with programs quoted on lot size, and mosquito or tick service added as a flat seasonal line. A free site walk sets the number, and it holds for the season.',
  },
  {
    q: 'Are your yard treatments safe for dogs and kids?',
    a: 'We follow label re-entry windows strictly: keep everyone off treated turf until it dries, typically under an hour. We flag every treated lawn, note it in your visit report, and time applications around your schedule when you tell us it matters.',
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lawn Care Services in Aldie, VA',
    serviceType: 'Lawn care',
    areaServed: { '@type': 'City', name: 'Aldie', containedInPlace: { '@type': 'State', name: 'Virginia' } },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Sunrise Landscape',
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

export default function LawnCareAldiePage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-green text-cream pt-36 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Lawn Care Services in Aldie, VA</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Lisa and Rick in Aldie hired us for a sidewalk, a stoop, a small patio, and a fire pit,
            then had us redo the landscaping around all of it. Their review says the team worked
            diligently and the result was meticulous. That is the bar our lawn crews carry into
            Willowsford and Lenah every week.
          </p>
          <Link
            href="/contact#form"
            className="inline-block mt-8 bg-orange text-white font-bold px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Get a free consultation
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-6">Lawn Care in Aldie, Season by Season</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-8">
            One program covers the year: spring prevention, summer protection, fall rebuilding,
            winter cleanup. Soil test first, always, because Aldie's newer lawns sit on construction
            fill that feeds nothing by default.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
            {[
              'Weekly mowing and edging',
              'Soil test and feeding plan',
              'Seasonal fertilizer and pre-emergent applications',
              'Lawn weed control through the season',
              'Core aeration and overseeding each fall',
              'Topdressing for new-construction soil',
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
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">
            Mosquito and Tick Control in Aldie
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Aldie yards border woods, ponds, and conservancy meadow, which is the appeal and also
            the mosquito problem. Our mosquito yard treatments run late April through September on a
            three-week cycle, targeting shade lines, undersides of leaves, and standing-water edges
            where mosquitoes actually rest. The tick side matters just as much out here: perimeter
            treatments along fence lines and wood edges, timed for spring nymph season. You will use
            your own backyard in July. That is the point.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">
            Willowsford Soil Is a Known Quantity
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            We have worked enough Willowsford lawns to know the pattern before we park: two good
            years of builder sod, then thinning as roots meet compacted fill. The rebuild is
            mechanical and patient. Cores out every fall, seed in, compost topdressing to give the
            soil life it never came with. It works, and it is honest work you can watch happen year
            over year.
          </p>
          <div className="relative aspect-[4/3] w-full mt-8">
            <Image
              src="/media/stock/manicured-lawn-ground-level.webp"
              alt="Ground-level view of a dense, well-maintained lawn"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-cream/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-4">Where We Work Around Aldie</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Willowsford, Lenah, and the Stone Ridge borders, with the rest of the county covered
            through our Loudoun routes.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-8">Aldie Lawn Care Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-green text-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed max-w-3xl mb-6">
            Landscaping and design for western Loudoun lives on our{' '}
            <Link href="/service-areas/landscaping-western-loudoun-va" className="underline hover:text-orange">
              Western Loudoun page
            </Link>
            . County-wide turf routes are on{' '}
            <Link href="/lawn-care-loudoun-county-va" className="underline hover:text-orange">
              Loudoun County lawn care
            </Link>
            , and garden beds fall under{' '}
            <Link href="/landscape-maintenance-northern-virginia" className="underline hover:text-orange">
              landscape maintenance
            </Link>
            . Wondering why your grass browns in August? Read{' '}
            <Link href="/blogs/what-is-dormant-turf-and-why-it-matters-in-northern-virginia" className="underline hover:text-orange">
              our dormant turf explainer
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
          { slug: 'what-is-dormant-turf-and-why-it-matters-in-northern-virginia', image: BLOG_ART.mowing },
          { slug: 'top-10-plants-for-your-garden', image: BLOG_ART.design2 },
          { slug: 'year-round-landscape-maintenance-northern-virginia', image: BLOG_ART.maintenance },
        ]}
      />

      <ContactFormSection />
    </>
  )
}
