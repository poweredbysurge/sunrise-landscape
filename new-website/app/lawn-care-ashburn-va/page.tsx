import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import ContactFormSection from '@/components/ContactFormSection'
import FromOurBlog, { BLOG_ART } from '@/components/FromOurBlog'

export const metadata: Metadata = {
  title: 'Lawn Care in Ashburn, VA | Sunrise Landscape',
  description:
    'Lawn care in Ashburn, VA that keeps HOA letters out of your mailbox. Weekly mowing, fertilization, aeration, weed control on a full-season program. Free quote.',
  alternates: { canonical: 'https://www.sunriselandscapeanddesign.com/lawn-care-ashburn-va' },
  openGraph: {
    title: 'Lawn Care in Ashburn, VA | Sunrise Landscape',
    description:
      'Lawn care in Ashburn, VA that keeps HOA letters out of your mailbox. Weekly mowing, fertilization, aeration, weed control on a full-season program. Free quote.',
    type: 'website',
    images: [
      {
        url: 'https://www.sunriselandscapeanddesign.com/media/stock/fenced-backyard-lawn-closeup.webp',
        width: 1150,
        height: 767,
      },
    ],
  },
  twitter: {
    title: 'Lawn Care in Ashburn, VA | Sunrise Landscape',
    description:
      'Lawn care in Ashburn, VA that keeps HOA letters out of your mailbox. Weekly mowing, fertilization, aeration, weed control on a full-season program. Free quote.',
    card: 'summary_large_image',
    images: ['https://www.sunriselandscapeanddesign.com/media/stock/fenced-backyard-lawn-closeup.webp'],
  },
}

const faqs = [
  {
    q: 'How much does lawn care cost in Ashburn?',
    a: 'Typical Ashburn lots run $50 to $75 per mowing visit, and full-season programs are quoted by lot size and scope. Smaller HOA lots often cost less than owners expect. We confirm pricing with a free on-site visit, not a satellite guess.',
  },
  {
    q: 'Can you help if my HOA sent a lawn violation letter?',
    a: 'Yes, and it is one of the most common calls we get from Brambleton and Broadlands. We fix the immediate issue, usually weeds or ragged edging, then put the lawn on a program so the letters stop coming. Most violations resolve within two visits.',
  },
  {
    q: 'What mowing schedule do Ashburn lawns need?',
    a: 'Weekly during the growing season. Ashburn turf is tall fescue on irrigated or partly irrigated lots, and it grows fast enough that biweekly cuts leave clumps and scalping. Weekly visits keep the cut height steady and the edges sharp.',
  },
  {
    q: 'When is the right time to aerate in Ashburn?',
    a: 'September into early October. Ashburn soil is heavily compacted from construction, so annual core aeration matters more here than in older towns. Pairing it with overseeding thickens the lawn before winter and crowds out spring weeds.',
  },
  {
    q: 'Do you service townhomes in One Loudoun and Brambleton?',
    a: 'We do. Townhome lawns are small but the standards are not, and shared sight lines mean one rough yard stands out. We run several townhome rows on the same visit day, which keeps pricing reasonable for smaller properties.',
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lawn Care in Ashburn, VA',
    serviceType: 'Lawn care',
    areaServed: { '@type': 'City', name: 'Ashburn', containedInPlace: { '@type': 'State', name: 'Virginia' } },
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

export default function LawnCareAshburnPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* Hero */}
      <section className="bg-green text-cream pt-36 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Lawn Care in Ashburn, VA</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Most Ashburn lots sit under a quarter acre, and nearly all of them sit inside an HOA.
            Your lawn is visible from the sidewalk, the neighbors keep theirs tight, and Broadlands
            will absolutely send a letter about crabgrass. Keeping a lawn sharp here is not vanity.
            It is the standard the whole street runs on.
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
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-6">Lawn Care Services in Ashburn</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-8">
            One program, all season. It starts with a soil test, because Ashburn dirt is mostly
            construction fill and it feeds differently than native loam. From there the year runs on
            a schedule your lawn sets, not a route sheet.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-lg">
            {[
              'Weekly mowing and edging',
              'Soil test and a feeding plan matched to it',
              'Seasonal fertilizer and pre-emergent applications',
              'Broadleaf and grassy weed treatment',
              'Core aeration and overseeding each fall',
              'Topdressing for compacted builder soil',
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

      {/* Mowing / HOA */}
      <section className="py-12 px-6 lg:px-12 bg-cream/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">
            Weekly Mowing That Passes HOA Review
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Ashburn lawn mowing is a weekly rhythm: consistent cut height, crisp edges along
            driveways and beds, clippings dispersed, hard surfaces blown clean before the crew
            leaves. That is the visit. The result is a yard that reads tidy from the street, which
            is exactly what HOA reviewers in Ashburn Farm and Ashburn Village are looking at.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mt-4">
            If you already got a violation notice, send us a photo of it. We will tell you honestly
            whether it is a one-visit fix or a program problem.
          </p>
        </div>
      </section>

      {/* Local knowledge */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">
            Why New Ashburn Lawns Thin Out by Year Three
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Builders lay sod over graded fill, and for two seasons it coasts on the sod farm's
            fertility. Then the roots hit compacted subsoil and the lawn starts thinning from the
            inside. The fix is mechanical, not chemical: core aeration every fall to open the soil,
            overseeding to keep the stand young, topdressing to slowly rebuild what grading stripped
            out. We have run that recovery on lawns across Brambleton and Loudoun Valley and the
            pattern is reliable. Year one stabilizes, year two thickens.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mt-4">
            Ashburn is also home to one of our favorite transformations, the backyard our portfolio
            calls Paradise in Your Backyard. Lawns are where most Ashburn projects start with us.
            They are rarely where they end.
          </p>
          <div className="relative aspect-[4/3] w-full mt-8">
            <Image
              src="/media/stock/fenced-backyard-lawn-closeup.webp"
              alt="Close-up of a lawn along a wooden privacy fence in a suburban backyard"
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
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-4">Ashburn Neighborhoods We Serve</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Brambleton, Broadlands, Ashburn Farm, Ashburn Village, and One Loudoun, plus the streets
            between them. Our shop in Sterling is one exit away, which is why Ashburn gets some of
            our earliest visit slots.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-8">Ashburn Lawn Care Questions</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* Cross links */}
      <section className="py-12 px-6 lg:px-12 bg-green text-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl lg:text-3xl leading-tight mb-6">Beyond the Lawn in Ashburn</h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-6">
            For design and planting work, see our{' '}
            <Link href="/service-areas/landscaping-ashburn-va" className="underline hover:text-orange">
              Ashburn landscaping
            </Link>{' '}
            page. Thinking about a patio or fire pit? That is our{' '}
            <Link href="/patio-fire-pit-leesburg-ashburn-great-falls" className="underline hover:text-orange">
              hardscape crew
            </Link>
            . For garden beds, pruning, and everything the mower does not touch, look at{' '}
            <Link href="/landscape-maintenance-northern-virginia" className="underline hover:text-orange">
              landscape maintenance
            </Link>
            , and our{' '}
            <Link href="/blogs/when-to-mulch-in-northern-virginia-mulch-installation-guide" className="underline hover:text-orange">
              mulch timing guide
            </Link>{' '}
            answers the most-asked spring question.
          </p>
          <p className="text-lg">
            Call <a href="tel:703-544-0028" className="underline hover:text-orange">703-544-0028</a> or
            request a free consultation below.
          </p>
        </div>
      </section>

      <FromOurBlog
        posts={[
          { slug: 'when-to-mulch-in-northern-virginia-mulch-installation-guide', image: BLOG_ART.maintenance2 },
          { slug: 'year-round-landscape-maintenance-northern-virginia', image: BLOG_ART.maintenance },
          { slug: 'what-is-dormant-turf-and-why-it-matters-in-northern-virginia', image: BLOG_ART.mowing },
        ]}
      />

      <ContactFormSection />
    </>
  )
}
