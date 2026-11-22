import Link from 'next/link'
import HardscapeCarousel from '@/components/HardscapeCarousel'

// Header photos only. The photos in the services carousel further down the page are kept
// out of this list so the same photo never shows twice on one page.
const IMGS = [
  {
    src: '/media/work/hardscape-paver-patio-fire-pit.jpg',
    alt: 'Paver patio with a stone fire pit, seating and planting beds built by Sunrise',
  },
  {
    src: '/media/work/hardscape-paver-walk-patio-boulders.jpg',
    alt: 'Paver walkway and dining patio with boulders and new plantings',
  },
  {
    src: '/media/work/hardscape-paver-patio-urn-fountain.jpg',
    alt: 'Large paver patio with a glazed urn fountain and pink begonias overlooking rolling fields at sunset',
  },
  {
    src: '/media/work/hardscape-paver-driveway-brick-pillars.jpg',
    alt: 'Gray paver driveway framed by white brick pillars with lanterns and stacked stone walls leading to a white house',
  },
]

export default function HardscapeHero() {
  return (
    <section className="bg-cream">

      {/* 2-column hero header */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 pt-32 pb-10 lg:pb-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end">

          {/* Left: label + heading */}
          <div>
            <p className="section-label text-orange mb-4">Hardscaping</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-green leading-tight">
              Hardscape Contractor in Northern Virginia
            </h1>
          </div>

          {/* Right: paragraph + CTAs */}
          <div>
            <p className="text-green/70 text-lg leading-relaxed mb-8">
              As experts in hardscape design, we specialize in crafting beautiful, functional outdoor
              environments. From integrated walkways and driveways that connect your landscape, to retaining
              walls that maximize usable space. We bring structure and elegance to your yard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact#form" className="btn-primary">
                <span>Free Consultation</span>
              </Link>
              <Link href="/hardscape-northern-virginia" className="btn-ghost text-green">
                <span>Our Work</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Photo carousel */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 pb-2">
        <HardscapeCarousel slides={IMGS} />
      </div>

    </section>
  )
}
