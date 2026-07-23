import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import ContactFormSection from '@/components/ContactFormSection'
import FromOurBlog, { BLOG_ART } from '@/components/FromOurBlog'

export const metadata: Metadata = {
  title: 'Patio & Fire Pit Contractors | Leesburg, Ashburn, Great Falls | Sunrise',
  description:
    'Patio and fire pit construction across Leesburg, Ashburn, Great Falls, Reston, Centreville and Sterling. Built on NoVA clay to last. Free design consultation.',
  alternates: {
    canonical: 'https://www.sunriselandscapeanddesign.com/patio-fire-pit-leesburg-ashburn-great-falls',
  },
  openGraph: {
    title: 'Patio & Fire Pit Contractors | Leesburg, Ashburn, Great Falls | Sunrise',
    description:
      'Patio and fire pit construction across Leesburg, Ashburn, Great Falls, Reston, Centreville and Sterling. Built on NoVA clay to last. Free design consultation.',
    type: 'website',
    images: [
      {
        url: 'https://www.sunriselandscapeanddesign.com/media/6808afe22b48076cc8e63cef/6889b8bb276774b7c21ff399_Katie%20Bird%20Pool%205.jpg',
        width: 1440,
        height: 1080,
      },
    ],
  },
  twitter: {
    title: 'Patio & Fire Pit Contractors | Leesburg, Ashburn, Great Falls | Sunrise',
    description:
      'Patio and fire pit construction across Leesburg, Ashburn, Great Falls, Reston, Centreville and Sterling. Built on NoVA clay to last. Free design consultation.',
    card: 'summary_large_image',
    images: ['https://www.sunriselandscapeanddesign.com/media/6808afe22b48076cc8e63cef/6889b8bb276774b7c21ff399_Katie%20Bird%20Pool%205.jpg'],
  },
}

const faqs = [
  {
    q: 'What does a patio and fire pit project cost?',
    a: 'Most of our paver patio projects with a built-in fire pit land between $15,000 and $45,000 depending on size, materials, and site work. Flagstone and complicated grades cost more. Every project starts with a free design consultation and a fixed proposal.',
  },
  {
    q: 'Do I need HOA approval for a fire pit in Ashburn?',
    a: 'Almost always yes for permanent fire features. Brambleton, Broadlands, and most Ashburn HOAs require an application with a site plan, and we prepare those drawings as part of the design phase. Approval typically takes two to six weeks.',
  },
  {
    q: 'Paver patio or stamped concrete on Northern Virginia clay?',
    a: 'Pavers, and it is not close. Our clay heaves with freeze-thaw cycles, and a monolithic slab shows every crack. A properly compacted paver base flexes with the soil, and individual pavers can be lifted and reset if anything ever moves.',
  },
  {
    q: 'How long does a patio project take?',
    a: 'Design and HOA approval run a few weeks. Construction itself is usually five to ten working days for a patio and fire pit, weather allowing. We schedule so crews finish one project before starting the next, not five sites at once.',
  },
  {
    q: 'Can you build in winter?',
    a: 'Often, yes. Hardscape is our winter specialty because dry cold days are fine for base work and masonry above freezing. Winter slots also book faster and occasionally price better. Spring demand is the busiest window.',
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Patio and Fire Pit Construction',
    serviceType: 'Hardscape contractor',
    areaServed: [
      { '@type': 'City', name: 'Leesburg' },
      { '@type': 'City', name: 'Ashburn' },
      { '@type': 'City', name: 'Great Falls' },
      { '@type': 'City', name: 'Reston' },
      { '@type': 'City', name: 'Centreville' },
      { '@type': 'City', name: 'Sterling' },
    ],
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

export default function PatioFirePitPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-green text-cream pt-36 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Patio and Fire Pit Contractors Serving Leesburg, Ashburn and Great Falls
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Chris in Reston came to us with a townhome patio that had drainage problems, rotting
            timbers, and shifting stones. We rebuilt it with drainage done right and a stone and
            paver combination he says he would hire us for again in a heartbeat. Patios fail from
            the ground down. We build from the ground up.
          </p>
          <Link
            href="/contact#form"
            className="inline-block mt-8 bg-orange text-white font-bold px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Get a free design consultation
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-6">
            Built on Clay, Built to Stay
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Northern Virginia clay moves. It swells in wet winters, shrinks in dry Augusts, and
            heaves with every freeze. That is why our patios start with excavation to stable
            subgrade, a compacted open-graded base, and drainage planned before a single paver is
            placed. Paver versus flagstone is mostly a style call. The base underneath is why one
            patio is flat in year ten and another is a wave pool in year three.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/media/6808afe22b48076cc8e63cef/6821cb71a545e0059d060bf5_work-img-2 (1).webp"
              alt="Aerial view of a paver patio with a built-in fire pit and stone seating wall"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-cream/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">Custom Fire Pits in Ashburn</h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Ashburn fire pit projects come with one extra step nobody warns you about: the HOA
            packet. Permanent gas or wood-burning features need approval in most communities, and we
            draw the site plan, spec sheet, and material samples that boards ask for. Wood-burning
            pits want setbacks from structures and fences. Gas features want a plumbed line and a
            shutoff you can reach. We handle both, and the seating wall that makes it a room.
          </p>
          <div className="relative aspect-[3/4] w-full max-w-sm mt-8">
            <Image
              src="/media/6808afe22b48076cc8e63cef/6821c39fee5907320e170120_harmony-img-1 (1).webp"
              alt="Stone fire pit with seating built into a terraced backyard patio"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">
            Hardscape Work in Reston and Sterling
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Reston brings townhome courtyards, association design standards, and tight machine
            access, all of which we plan around rather than discover mid-dig. Sterling is home
            ground: our shop is on Beaver Meadow Road, so Sterling hardscape projects get the
            shortest mobilization in our book. In both, the finish standard is the one our Great
            Falls estate clients expect, because it is the same crew.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-cream/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">
            Patio Contractors for Centreville
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl">
            Centreville lots slope. Sully Station and Virginia Run yards often drop several feet
            back to front, which turns a flat-patio wish into a terracing project with retaining
            walls, steps, and drainage doing quiet work behind the scenes. We design the whole
            grade, not just the flat part, so the patio does not become a dam.
          </p>
          <div className="relative aspect-[4/3] w-full mt-8">
            <Image
              src="/media/6808afe22b48076cc8e63cef/6889b8bb276774b7c21ff399_Katie Bird Pool 5.jpg"
              alt="Pool and stone patio hardscape built by Sunrise Landscape in Great Falls, VA"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-8">
            Patio and Fire Pit Questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 bg-green text-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed max-w-3xl mb-6">
            See the full craft on our{' '}
            <Link href="/hardscape-northern-virginia" className="underline hover:text-orange">
              hardscape services
            </Link>{' '}
            page. Wet yards get fixed first at{' '}
            <Link href="/drainage-solutions-northern-virginia" className="underline hover:text-orange">
              drainage and erosion control
            </Link>
            , and lawns around new patios stay sharp with{' '}
            <Link href="/lawn-care-ashburn-va" className="underline hover:text-orange">
              Ashburn lawn care
            </Link>
            . Planning costs? Read{' '}
            <Link href="/blogs/fire-pit-installation" className="underline hover:text-orange">
              our fire pit installation guide
            </Link>
            .
          </p>
          <p className="text-lg">
            Call <a href="tel:703-544-0028" className="underline hover:text-orange">703-544-0028</a> or
            request a free design consultation below.
          </p>
        </div>
      </section>

      <FromOurBlog
        posts={[
          { slug: 'fire-pit-installation', image: BLOG_ART.water },
          { slug: 'hardscape-contractor-near-me', image: BLOG_ART.design },
          { slug: 'retaining-walls-northern-virginia', image: BLOG_ART.drainage },
        ]}
      />

      <ContactFormSection />
    </>
  )
}
