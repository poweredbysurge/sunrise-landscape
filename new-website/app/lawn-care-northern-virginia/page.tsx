import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'
import FromOurBlog, { BLOG_ART } from '@/components/FromOurBlog'
import { cdnToLocal } from '@/lib/mediaUrl'

export const metadata: Metadata = {
  title: 'Lawn Care Company in Northern Virginia | Sunrise Landscape',
  description: 'Lawn care across Loudoun and Fairfax counties. Mowing, fertilization, aeration, and full-season programs from one Northern Virginia lawn care company. Free yard inspection.',
  openGraph: {
    title: 'Lawn Care Company in Northern Virginia | Sunrise Landscape',
    description: 'Lawn care across Loudoun and Fairfax counties. Mowing, fertilization, aeration, and full-season programs from one Northern Virginia lawn care company. Free yard inspection.',
    type: 'website',
    images: [{ url: cdnToLocal('/media/6808afe22b48076cc8e63cef/6889b8bca45b369aa14f8ade_Katie Bird Mowing Lines 2.jpg') }],
  },
  twitter: {
    title: 'Lawn Care Company in Northern Virginia | Sunrise Landscape',
    description: 'Lawn care across Loudoun and Fairfax counties. Mowing, fertilization, aeration, and full-season programs from one Northern Virginia lawn care company. Free yard inspection.',
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.sunriselandscapeanddesign.com/lawn-care-northern-virginia',
  },
}

const townLinks = [
  { label: 'Leesburg', href: '/lawn-care-leesburg-va' },
  { label: 'Ashburn', href: '/lawn-care-ashburn-va' },
  { label: 'Herndon', href: '/lawn-care-herndon-va' },
  { label: 'Fairfax', href: '/lawn-care-fairfax-va' },
  { label: 'Loudoun County', href: '/lawn-care-loudoun-county-va' },
  { label: 'Aldie', href: '/lawn-care-aldie-va' },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lawn Care in Northern Virginia',
    serviceType: 'Lawn care',
    areaServed: { '@type': 'AdministrativeArea', name: 'Northern Virginia' },
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

export default function LawnCareNorthernVirginiaPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* ── HERO — 50/50 split, content left / image right ── */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="section-label text-orange mb-4">Lawn Care</p>
            <h1 className="text-4xl lg:text-6xl text-green leading-tight mb-6">
              Lawn Care Across Northern Virginia
            </h1>
            <p className="text-green/70 leading-relaxed lg:text-lg">
              One company handles lawn care across Loudoun, Fairfax, and Prince William counties, from townhome lots in Ashburn to
              multi-acre properties out past Aldie. Same crews, same standards, same phone number, whether your lawn
              needs a weekly mow or a full turf renovation. Pick your town below or keep reading for the program
              details. We have run lawn crews across Northern Virginia since 1986, long enough to know which fixes
              actually hold up through a summer here and which ones just look good for a season.
            </p>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden" style={{ borderRadius: '20px' }}>
            <Image
              src={cdnToLocal('/media/6808afe22b48076cc8e63cef/6889b8bca45b369aa14f8ade_Katie Bird Mowing Lines 2.jpg')}
              alt="Expansive striped lawn leading up to a modern estate home with a pool and mature tree line."
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES A NOVA LAWN DIFFERENT ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
            What Makes a Northern Virginia Lawn Different
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            Clay soil compacts fast, drains slowly, and starves grass roots of oxygen within a season or two if it
            never gets aerated. Add heavy tree cover in older neighborhoods like Reston or Herndon, and a lawn is
            fighting shade and thin soil at the same time. Newer subdivisions bring the opposite problem: builder-grade
            fill soil with almost no organic matter, which is why a lawn in a five-year-old Ashburn or Chantilly
            neighborhood often struggles more than one in an established one. Both problems point to the same fixes,
            aeration and overseeding, and topdressing on a schedule the lawn actually needs, not a generic calendar.
          </p>
        </div>
      </section>

      {/* ── FULL SEASON PROGRAM ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
              The Full-Season Lawn Care Program
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-black/70">
              <p>
                Tall fescue, the dominant lawn type here, wants a different rhythm than the warm-season grass most
                national lawn brands are built around. Our lawn care services intertwine throughout the season
                rather than running on a fixed chronological calendar:
              </p>
              <ol className="space-y-3">
                <li>
                  <span className="font-bold text-green">1. Mowing / Edging</span> &mdash; offered only if the
                  client also carries at least fertilizer treatments.
                </li>
                <li>
                  <span className="font-bold text-green">2. Turf Care</span> &mdash; fertilizer, herbicide, and
                  pesticide treatments. We will perform these services without doing the mowing.
                </li>
                <li>
                  <span className="font-bold text-green">3. Aeration / Overseeding</span> &mdash; the most
                  important service we offer.
                </li>
                <li>
                  <span className="font-bold text-green">4. Topdressing</span> &mdash; optional, but highly
                  recommended.
                </li>
              </ol>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: '20px' }}>
            <Image
              src={cdnToLocal('/media/6808afe22b48076cc8e63cef/6822fae33f0e864553518e47_mowing-img (1).webp')}
              alt="Landscaping crew mowing a manicured lawn in Northern Virginia"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── FIND YOUR TOWN ── */}
      <section className="bg-cream py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-4">
            Find Your Town
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every town page below covers the same core lawn care program with local detail: neighborhoods we serve,
            the soil and shade conditions specific to that area, and answers to the questions that town actually asks.
            Nothing about the service changes from town to town. What changes is the yard in front of it, and that
            is worth reading about before your first visit.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {townLinks.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="bg-white border border-green/15 py-5 px-4 font-ui font-bold text-green hover:text-orange hover:border-orange transition-colors"
                style={{ borderRadius: '12px' }}
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAWN TREATMENTS ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
            Lawn Treatments We Provide
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            A soil test tells us what nutrients the lawn is lacking before we spread anything on it. From there, the
            best lawn treatment for a Northern Virginia yard usually combines 4 fertilizer treatments, starting with
            two applications of a slow release fertilizer combined with pre-emergent, matched to our clay soil,
            targeted weed control for the broadleaf weeds that show up every spring, and grub prevention timed to
            the beetle life cycle. We also offer a 3-treatment fungicide prevention program that prevents fungus
            from feeding on the grass roots during the humid summer months. None of it is guesswork: every
            treatment plan starts from what the soil test and the lawn itself are telling us, and adjusts through
            the season if the weather or the turf changes course.
          </p>
        </div>
      </section>

      {/* ── WHY REGION-WIDE MATTERS ── */}
      <section className="bg-cream py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
            Why Region-Wide Matters
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            A property manager running an HOA or a portfolio of rental homes across several towns does not want six
            different lawn crews on six different schedules. One contract with Sunrise covers every property under
            one set of standards, one point of contact, and one invoice, whether that portfolio spans Sterling
            townhomes and a Great Falls estate or a single HOA common area in South Riding. Homeowners get the same
            benefit at a smaller scale. Separate, dedicated crews perform aeration and overseeding, and the most
            difficult but most important part of these services is sequencing them correctly: mowing, then fall
            fertilizer, then aeration and overseeding, then skipping one week of mowing so the turf has as much
            time as possible to absorb the fertilizer before we mow again. That coordination is where a lot of lawn
            problems actually start. A different crew every visit means nobody notices the fungus patch forming near
            the downspout or the grub damage spreading under a shade tree until it is already a bigger problem.
          </p>
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['lawn-care-northern-virginia']} />

      <FromOurBlog
        posts={[
          { slug: 'year-round-landscape-maintenance-northern-virginia', image: BLOG_ART.mowing },
          { slug: 'what-is-dormant-turf-and-why-it-matters-in-northern-virginia', image: BLOG_ART.maintenance },
          { slug: 'why-fall-fertilization-matters-for-trees-and-shrubs', image: BLOG_ART.maintenance2 },
        ]}
      />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
