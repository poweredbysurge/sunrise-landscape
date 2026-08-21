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
  title: 'Retaining Wall Contractors in Northern Virginia | Sunrise Landscape',
  description: 'Retaining wall construction in Northern Virginia. Precast modular block, natural stone, and boulder walls, engineered and permitted. Free yard inspection.',
  openGraph: {
    title: 'Retaining Wall Contractors in Northern Virginia | Sunrise Landscape',
    description: 'Retaining wall construction in Northern Virginia. Precast modular block, natural stone, and boulder walls, engineered and permitted. Free yard inspection.',
    type: 'website',
    images: [{ url: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e23cadf15ecbd8b2f1b_folder-3-1.webp') }],
  },
  twitter: {
    title: 'Retaining Wall Contractors in Northern Virginia | Sunrise Landscape',
    description: 'Retaining wall construction in Northern Virginia. Precast modular block, natural stone, and boulder walls, engineered and permitted. Free yard inspection.',
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.sunriselandscapeanddesign.com/retaining-walls-northern-virginia',
  },
}

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Retaining Wall Construction in Northern Virginia',
    serviceType: 'Retaining wall construction',
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

export default function RetainingWallsPage() {
  return (
    <>
      <JsonLd data={schema} />

      {/* ── HERO — clean image, no overlay ── */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e23cadf15ecbd8b2f1b_folder-3-1.webp')}
          alt="Curved stone retaining wall with layered plantings of purple catmint, ornamental grasses, and shrubs beneath mature trees."
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* ── INTRO ── */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <p className="section-label text-orange mb-4">Hardscape &amp; Grading</p>
          <h1 className="text-4xl lg:text-6xl text-green leading-tight mb-6 max-w-3xl">
            Retaining Wall Construction in Northern Virginia
          </h1>
          <p className="text-green/70 max-w-2xl leading-relaxed lg:text-lg">
            Northern Virginia&apos;s clay soil holds water and lets go of it slowly, which means a slope that looks
            stable in June can slide in a wet March. The entire purpose of a retaining wall is to create more usable
            space on your property. It turns an unusable hillside into a level patio, a planting bed, or a second yard, and it does it for
            decades instead of one good season. Most of the calls we get start the same way: a lawn too steep to mow
            safely, a patio that floods every spring, or a slope that keeps losing mulch and topsoil every time it
            rains.
          </p>
        </div>
      </section>

      {/* ── WALL TYPES ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
              Wall Types We Build
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-black/70">
              <p>
                Walls are either retaining or free-standing. A retaining wall holds back soil to create more usable
                space. A freestanding wall does not retain soil but serves another purpose: seating around a patio
                or fire pit, or an accent in the landscape design that directs foot traffic or visual focus.
              </p>
              <ol className="space-y-3">
                <li>
                  <span className="font-bold text-green">1. Veneer mortared to CMU block</span> &mdash; natural or
                  manufactured stone veneer mortared to CMU block, reinforced with rebar. The most expensive option,
                  and the most durable and versatile depending on the veneer stone selected.
                </li>
                <li>
                  <span className="font-bold text-green">2. Boulder wall</span> &mdash; retains soil under the
                  weight of the stones for a natural look. The foreman needs an artistic eye to find the best face
                  of each stone and the best angle to set it.
                </li>
                <li>
                  <span className="font-bold text-green">3. Dry stack fieldstone</span> &mdash; generally built on
                  a gravel footer. Only suitable where the wall is not retaining a large volume of soil.
                </li>
                <li>
                  <span className="font-bold text-green">4. Precast modular block</span> &mdash; also called
                  interlocking modular block. This is a different product from the colored concrete block sold
                  at home improvement stores, in both engineering and appearance, and it is the material we
                  specify for modular block walls.
                </li>
              </ol>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: '20px' }}>
            <Image
              src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e23ce1a9da1404d5685_folder-3-2.webp')}
              alt="Tiered stone retaining walls with a Japanese maple, flowering dogwoods, and colorful perennial beds along a paver walkway."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section className="bg-cream py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-10 text-center">
            What a Wall Project Looks Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-orange text-sm font-bold tracking-widest mb-2">01</p>
              <h3 className="text-xl font-bold text-green mb-2">Site Visit and Soil Check</h3>
              <p className="text-black/70 leading-relaxed">
                We measure the slope and check drainage patterns. Clay behaves differently than the fill soil
                common in newer subdivisions.
              </p>
            </div>
            <div>
              <p className="text-orange text-sm font-bold tracking-widest mb-2">02</p>
              <h3 className="text-xl font-bold text-green mb-2">Design and Permit</h3>
              <p className="text-black/70 leading-relaxed">
                You get a fixed proposal with wall type, length, width, facia material, cap material, height, and
                drainage plan. If the height triggers engineering or a permit, we handle both before crews ever
                break ground.
              </p>
            </div>
            <div>
              <p className="text-orange text-sm font-bold tracking-widest mb-2">03</p>
              <h3 className="text-xl font-bold text-green mb-2">Build and Backfill</h3>
              <p className="text-black/70 leading-relaxed">
                Excavation to stable subgrade, compacted gravel or concrete footer, drainage pipe and gravel behind
                the wall, then lighting rough-in, finished face, wall cap, and lighting installation. Most
                residential walls finish in one to two weeks depending on length.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENGINEERING AND PERMITS ── */}
      <section className="bg-cream py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
            Engineering and Permits, Handled
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            Fairfax and Loudoun counties both require a permit and stamped engineering once a wall crosses a set
            height, and the exact rule depends on what sits above or below the slope: a driveway, a foundation, a
            property line. We check this during the site visit, bring in an engineer when the wall calls for one,
            and pull the permit ourselves. Walls built without that step get flagged during a home sale or a neighbor
            complaint, and fixing an unpermitted wall costs more than building it right the first time. We have seen
            homeowners inherit this exact problem from a previous owner who built a wall themselves or hired an
            unlicensed crew, and the fix usually means tearing out and rebuilding rather than a simple patch. Getting
            the engineering right at the start is cheaper every time.
          </p>
        </div>
      </section>

      {/* ── WALLS + DRAINAGE ── */}
      <section className="bg-white py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
            Walls and Drainage, Designed Together
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            A retaining wall without drainage behind it is a dam. Water builds up in the soil it is holding back and
            creates hydrostatic pressure, and that pressure is what makes a wall bulge, lean, fail at the joints, or
            push efflorescence through the face of the stone, usually within a few wet seasons rather than decades.
            Every wall we build includes a gravel drainage zone and a perforated pipe that carries water to
            daylight or a dry well, tied into the same grading plan as the rest of the property. That matters more
            here than in sandier climates: Northern Virginia clay does not let water pass through it, so a wall
            built without an escape route for that water is really just storing hydrostatic pressure for a future
            failure.
          </p>
        </div>
      </section>

      {/* ── SLOPED LOTS / CENTREVILLE ── */}
      <section className="bg-cream py-16 lg:py-24 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-6">
            Built for Sloped Lots
          </h2>
          <p className="text-lg leading-relaxed text-black/70">
            Some of the steepest residential lots in our service area sit around{' '}
            <Link href="/service-areas/landscaping-centreville-va" className="font-bold text-green underline hover:text-orange">
              Centreville
            </Link>
            , where grade change between the street and the back of the lot can eat up most of the usable yard.
            Terracing that grade with one or two walls routinely recovers a flat patio, a play area, or a garden bed
            that the slope was hiding. The same approach works anywhere in our service area with a graded or hillside
            lot: a wall is rarely just about the dirt, it is about getting back the square footage the slope was
            taking from you.
          </p>
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['retaining-walls-northern-virginia']} />

      {/* ── CROSS-LINK: how-to blog + local guide blog ── */}
      <section className="bg-white py-12 px-5 lg:px-8 border-t border-green/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-black/60 leading-relaxed">
            Planning to build a wall yourself? Read our{' '}
            <Link href="/blogs/how-to-build-a-retaining-wall" className="font-bold text-green underline hover:text-orange">
              how-to guide to building a retaining wall
            </Link>{' '}
            first. For a deeper look at design options and cost ranges before you call a contractor, see our{' '}
            <Link href="/blogs/retaining-walls-northern-virginia" className="font-bold text-green underline hover:text-orange">
              retaining wall design and cost guide
            </Link>
            .
          </p>
        </div>
      </section>

      <FromOurBlog
        posts={[
          { slug: 'how-to-build-a-retaining-wall', image: BLOG_ART.design2 },
          { slug: 'retaining-walls-northern-virginia', image: BLOG_ART.drainage },
          { slug: 'hardscaping-enhancing-your-outdoor-space', image: BLOG_ART.design },
        ]}
      />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
