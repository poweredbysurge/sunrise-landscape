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
  title: 'Outdoor Living Contractor in Northern Virginia | Sunrise Landscape',
  description: 'Outdoor living spaces in Northern Virginia: patios, fire features, lighting, water features, and planting designed and built as one project. Free consultation.',
  openGraph: {
    title: 'Outdoor Living Contractor in Northern Virginia | Sunrise Landscape',
    description: 'Outdoor living spaces in Northern Virginia: patios, fire features, lighting, water features, and planting designed and built as one project. Free consultation.',
    type: 'website',
    images: [{ url: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7fb273f8f7c44bbbc942_folder-5-cover.webp') }],
  },
  twitter: {
    title: 'Outdoor Living Contractor in Northern Virginia | Sunrise Landscape',
    description: 'Outdoor living spaces in Northern Virginia: patios, fire features, lighting, water features, and planting designed and built as one project. Free consultation.',
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.sunriselandscapeanddesign.com/outdoor-living-spaces-northern-virginia',
  },
}

const elements = [
  {
    num: '01',
    title: 'Patios & Hardscaping',
    href: '/hardscape-northern-virginia',
    body: 'The floor of the space. Pavers or natural stone set the layout everything else builds around, from a simple sitting patio to a full outdoor kitchen and dining area.',
  },
  {
    num: '02',
    title: 'Fire Features',
    href: '/patio-fire-pit-leesburg-ashburn-great-falls',
    body: 'A fire pit or fireplace turns a patio into a destination people use after sunset and into the fall. We size and place it for the seating layout, not as an afterthought or decorative feature.',
  },
  {
    num: '03',
    title: 'Outdoor Lighting',
    href: '/landscape-lighting-northern-virginia',
    body: 'Lighting is what makes the space usable after dark and what makes the landscaping around it worth looking at from inside the house. Path, step, and accent lighting all get planned into the same design.',
  },
  {
    num: '04',
    title: 'Water Features',
    href: '/water-features-northern-virginia',
    body: 'A pondless waterfall or fountain adds sound and motion without the maintenance of open water, and works in yards where a full pond would crowd the space. For properties with room for a Koi pond, we also specialize in designing and building filtration systems for Koi to thrive.',
  },
  {
    num: '05',
    title: 'Planting',
    href: '/landscape-planting-northern-virginia',
    body: 'Planting is what softens the hardscape and gives the space privacy from neighbors. It is designed alongside the patio and lighting, considering color, texture, bloom seasons, and surrounding elements for a cohesive landscape.',
  },
]

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Outdoor Living Spaces in Northern Virginia',
    serviceType: 'Outdoor living design and construction',
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

export default function OutdoorLivingSpacesPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* ── HERO — clean image, no overlay ── */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7fb273f8f7c44bbbc942_folder-5-cover.webp')}
          alt="Backyard with a rectangular swimming pool, lounge chairs, and a covered patio area with outdoor seating and a fireplace."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ── INTRO ── */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <p className="section-label text-orange mb-4">Design &amp; Build</p>
          <h1 className="text-4xl lg:text-6xl text-green leading-tight mb-6 max-w-3xl">
            Outdoor Living Spaces in Northern Virginia
          </h1>
          <p className="text-green/70 max-w-2xl leading-relaxed lg:text-lg">
            An outdoor living space is a set of rooms outside: a floor to stand on, fire to gather around, light to
            stay out past dark, water for sound, and planting that ties it all together and gives it privacy. Most
            homeowners come to us wanting one piece, a patio or a fire pit, and leave with a plan for the whole
            backyard because the pieces work better designed together than added one at a time.
          </p>
        </div>
      </section>

      {/* ── ELEMENTS ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-12 text-center">
            Every Element, Designed as One Space
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {elements.map((el) => (
              <div key={el.title} className="flex gap-5">
                <p className="text-orange text-sm font-bold tracking-widest pt-1 flex-shrink-0">{el.num}</p>
                <div>
                  <h3 className="text-xl font-bold text-green mb-2">{el.title}</h3>
                  <p className="text-black/70 leading-relaxed mb-2">{el.body}</p>
                  <Link href={el.href} className="text-sm font-bold text-green underline hover:text-orange">
                    See {el.title} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW A PROJECT RUNS ── */}
      <section className="bg-cream py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
            Design Once, Build in Phases
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            The master plan covers the whole yard: where the patio sits, where the fire feature goes, where lighting
            and water fit in, and how the planting frames all of it. Once that plan exists, you can build every
            element in one season or spread it across two or three years as budget allows, and each phase still fits
            the ones before it because nothing was designed in isolation. That is the practical advantage of one
            company owning the whole project: grading, drainage, and electrical only get planned once, not
            re-solved by a different contractor for every phase.
          </p>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
            Built, Not Just Rendered
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            Our featured projects page shows completed outdoor living spaces across Northern Virginia, patios with
            fire pits, koi ponds paired with stone fireplaces, and pool surrounds built as full backyard renovations.
            Every photo is a finished Sunrise project, not a rendering.{' '}
            <Link href="/landscape-design-northern-virginia" className="font-bold text-green underline hover:text-orange">
              See our featured landscape design projects
            </Link>
            .
          </p>
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['outdoor-living-spaces-northern-virginia']} />

      <FromOurBlog
        posts={[
          { slug: 'outdoor-living-spaces-northern-virginia', image: BLOG_ART.design },
          { slug: 'winter-outdoor-space-cozy-escape', image: BLOG_ART.water },
          { slug: 'transform-your-backyard-into-a-paradise', image: BLOG_ART.planting },
        ]}
      />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
