import Link from 'next/link'

const SERVICE_AREA_LINKS = [
  { label: 'Ashburn', href: '/service-areas/landscaping-ashburn-va' },
  { label: 'Leesburg', href: '/service-areas/landscaping-leesburg-va' },
  { label: 'Reston', href: '/service-areas/landscaping-reston-va' },
  { label: 'Brambleton', href: '/' },
  { label: 'Broadlands', href: '/service-areas/landscaping-ashburn-va' },
  { label: 'Centreville', href: '/service-areas/landscaping-centreville-va' },
  { label: 'Chantilly', href: '/service-areas/landscaping-chantilly-va' },
  { label: 'Great Falls', href: '/service-areas/landscaping-great-falls-va' },
  { label: 'Herndon', href: '/service-areas/landscaping-herndon-va' },
  { label: 'Lansdowne', href: '/service-areas/landscaping-leesburg-va' },
  { label: 'McLean', href: '/service-areas/landscaping-mclean-va' },
  { label: 'Oakton', href: '/service-areas/landscaping-oakton-va' },
  { label: 'Potomac Falls', href: '/' },
  { label: 'South Riding', href: '/service-areas/landscaping-sterling-va' },
  { label: 'Sterling', href: '/service-areas/landscaping-sterling-va' },
  { label: 'Vienna', href: '/service-areas/landscaping-vienna-va' },
  { label: 'Aldie', href: '/service-areas/landscaping-western-loudoun-va' },
  { label: 'Willowsford', href: '/service-areas/landscaping-western-loudoun-va' },
]

export default function ServiceAreaBar() {
  return (
    <section className="bg-green py-12">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-base text-cream">
          {SERVICE_AREA_LINKS.map((area, i) => (
            <span key={area.label} className="flex items-center gap-2">
              <Link href={area.href} className="hover:text-orange transition-colors">
                {area.label}
              </Link>
              {i < SERVICE_AREA_LINKS.length - 1 && <span className="text-cream">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
