import Image from 'next/image'
import Link from 'next/link'

const SERVICE_AREAS = [
  { label: 'Aldie',         href: '/service-areas/landscaping-western-loudoun-va' },
  { label: 'Ashburn',       href: '/service-areas/landscaping-ashburn-va' },
  { label: 'Brambleton',    href: '/service-areas/landscaping-ashburn-va' },
  { label: 'Broadlands',    href: '/service-areas/landscaping-ashburn-va' },
  { label: 'Centreville',   href: '/service-areas/landscaping-centreville-va' },
  { label: 'Chantilly',     href: '/service-areas/landscaping-chantilly-va' },
  { label: 'Great Falls',   href: '/service-areas/landscaping-great-falls-va' },
  { label: 'Herndon',       href: '/service-areas/landscaping-herndon-va' },
  { label: 'Lansdowne',     href: '/service-areas/landscaping-leesburg-va' },
  { label: 'Leesburg',      href: '/service-areas/landscaping-leesburg-va' },
  { label: 'McLean',        href: '/service-areas/landscaping-mclean-va' },
  { label: 'Oakton',        href: '/service-areas/landscaping-oakton-va' },
  { label: 'Potomac Falls', href: '/service-areas/landscaping-sterling-va' },
  { label: 'Reston',        href: '/service-areas/landscaping-reston-va' },
  { label: 'South Riding',  href: '/service-areas/landscaping-sterling-va' },
  { label: 'Sterling',      href: '/service-areas/landscaping-sterling-va' },
  { label: 'Vienna',        href: '/service-areas/landscaping-vienna-va' },
  { label: 'Willowsford',   href: '/service-areas/landscaping-western-loudoun-va' },
]

type Props = {
  backgroundImage?: string
  backgroundAlt?: string
}

export default function ServiceAreasSection({
  backgroundImage = '/media/6808afe22b48076cc8e63cef/686b7ecfc4042333b3219c72_folder-4-cover.webp',
  backgroundAlt = 'Residential landscape design project in Northern Virginia',
}: Props) {
  return (
    <section className="flex flex-col lg:flex-row" style={{ minHeight: '580px' }}>

      {/* Left: full-bleed photo */}
      <div className="relative min-h-[300px] lg:min-h-0 lg:flex-1">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Right: location panel */}
      <div
        className="lg:flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 lg:py-20"
        style={{ backgroundColor: '#1e3526' }}
      >
        <p className="font-ui text-[10px] font-bold text-cream uppercase tracking-[0.22em] mb-3 leading-snug">
          Locations We Serve<br />In Virginia
        </p>

        <p
          className="font-ui font-bold text-cream leading-none mb-8"
          style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)' }}
        >
          15+
        </p>

        {/* 3-column city grid */}
        <div className="grid grid-cols-3 gap-x-6 mb-10">
          {SERVICE_AREAS.map(area => (
            <Link
              key={area.label}
              href={area.href}
              className="block py-3 text-cream hover:text-orange transition-colors duration-200 text-base leading-tight"
            >
              {area.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact#form"
          className="section-label text-orange inline-flex items-center gap-2 min-h-[44px] hover:underline underline-offset-2 w-fit"
        >
          Get a Free Consultation
          <svg
            viewBox="0 0 16 16"
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M3 3h10v10M3 13L13 3" />
          </svg>
        </Link>
      </div>

    </section>
  )
}
