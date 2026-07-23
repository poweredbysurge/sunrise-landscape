import Link from 'next/link'
import Image from 'next/image'

const serviceLinks = [
  { label: 'Landscape Maintenance', href: '/landscape-maintenance-northern-virginia' },
  { label: 'Planting', href: '/landscape-planting-northern-virginia' },
  { label: 'Drainage Solutions', href: '/drainage-solutions-northern-virginia' },
  { label: 'Patios & Hardscaping', href: '/hardscape-northern-virginia' },
  { label: 'Landscape Design', href: '/landscape-design-northern-virginia' },
  { label: 'Outdoor Lighting', href: '/landscape-lighting-northern-virginia' },
  { label: 'Water Features', href: '/water-features-northern-virginia' },
  { label: 'Commercial', href: '/commercial-landscape-maintenance-virginia' },
]

const lawnCareLinks = [
  { label: 'Lawn Care in Leesburg', href: '/lawn-care-leesburg-va' },
  { label: 'Lawn Care in Ashburn', href: '/lawn-care-ashburn-va' },
  { label: 'Lawn Care in Herndon', href: '/lawn-care-herndon-va' },
  { label: 'Lawn Care in Fairfax', href: '/lawn-care-fairfax-va' },
  { label: 'Lawn Care in Loudoun County', href: '/lawn-care-loudoun-county-va' },
  { label: 'Lawn Care in Aldie', href: '/lawn-care-aldie-va' },
  { label: 'Patio & Fire Pit Contractors', href: '/patio-fire-pit-leesburg-ashburn-great-falls' },
]

const areaLinks = [
  { label: 'Ashburn', href: '/service-areas/landscaping-ashburn-va' },
  { label: 'Centreville', href: '/service-areas/landscaping-centreville-va' },
  { label: 'Chantilly', href: '/service-areas/landscaping-chantilly-va' },
  { label: 'Great Falls', href: '/service-areas/landscaping-great-falls-va' },
  { label: 'Herndon', href: '/service-areas/landscaping-herndon-va' },
  { label: 'Leesburg', href: '/service-areas/landscaping-leesburg-va' },
  { label: 'McLean', href: '/service-areas/landscaping-mclean-va' },
  { label: 'Oakton', href: '/service-areas/landscaping-oakton-va' },
  { label: 'Reston', href: '/service-areas/landscaping-reston-va' },
  { label: 'Sterling', href: '/service-areas/landscaping-sterling-va' },
  { label: 'Vienna', href: '/service-areas/landscaping-vienna-va' },
  { label: 'Western Loudoun', href: '/service-areas/landscaping-western-loudoun-va' },
]

const companyLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Career', href: '/career' },
  { label: 'Service Areas', href: '/service-areas-northern-virginia' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
]

export default function Footer() {
  return (
    <footer className="bg-green text-cream">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10 items-start">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="block mb-5" aria-label="Sunrise Landscape — Home">
              <Image
                src="/logos/sunrise-logo.svg"
                alt="SUNRISE Landscape"
                width={200}
                height={69}
                className="w-36 h-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <h2 className="font-display editorial-display text-3xl text-cream leading-none mb-6">
              Landscapes <br />For Living
            </h2>
            <div className="text-base text-cream">
              <a href="tel:703-544-0028" className="flex items-center justify-center md:justify-start gap-2 py-2.5 hover:text-orange transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 1.18 2 2 0 013.99 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                703-544-0028
              </a>
              <a href="mailto:info@sunriselandscapeanddesign.com" className="flex items-center justify-center md:justify-start gap-2 py-2.5 hover:text-orange transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@sunriselandscapeanddesign.com
              </a>
              <p className="flex items-start justify-center md:justify-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 flex-shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                43813 Beaver Meadow Rd #100<br />Sterling, VA 20166
              </p>
            </div>
            <div className="flex justify-center md:justify-start gap-3 mt-6">
              <a href="https://www.facebook.com/sunriselandscapeanddesign" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/20 flex items-center justify-center hover:border-orange hover:text-orange transition-colors" style={{ borderRadius: '50%' }} aria-label="Facebook">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/sunriselandscapedesign" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/20 flex items-center justify-center hover:border-orange hover:text-orange transition-colors" style={{ borderRadius: '50%' }} aria-label="Instagram">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <p className="section-label text-orange mb-3">Services</p>
            <ul>
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block py-1 text-base text-cream hover:text-orange transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="text-center md:text-left">
            <p className="section-label text-orange mb-3">Service Areas</p>
            <ul>
              {areaLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block py-1 text-base text-cream hover:text-orange transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <p className="section-label text-orange mb-3">Company</p>
            <ul>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block py-1 text-base text-cream hover:text-orange transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="section-label text-orange mb-3">Hours</p>
              <p className="text-base text-cream leading-relaxed">Mon – Fri<br />8:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Lawn Care */}
        <div className="py-8 border-b border-white/10">
          <p className="section-label text-orange mb-3 text-center md:text-left">Lawn Care</p>
          <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-1">
            {lawnCareLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-1 text-base text-cream hover:text-orange transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-cream">
          <p>&copy; {new Date().getFullYear()} Sunrise Landscape. All rights reserved.</p>
          <p>Est. 1986 · Sterling, Virginia · Serving Northern Virginia</p>
        </div>
      </div>
    </footer>
  )
}
