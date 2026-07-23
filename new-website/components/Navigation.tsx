'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const landscapingAndLawnCare = [
  { label: 'Landscape Maintenance', href: '/landscape-maintenance-northern-virginia' },
  { label: 'Lawn Care', href: '/lawn-care-loudoun-county-va' },
  { label: 'Planting', href: '/landscape-planting-northern-virginia' },
  { label: 'Drainage Solutions', href: '/drainage-solutions-northern-virginia' },
]

const designAndBuild = [
  { label: 'Patios & Hardscaping', href: '/hardscape-northern-virginia' },
  { label: 'Landscape Design', href: '/landscape-design-northern-virginia' },
  { label: 'Outdoor Lighting', href: '/landscape-lighting-northern-virginia' },
  { label: 'Water Features', href: '/water-features-northern-virginia' },
]

const navLinks = [
  { label: 'Commercial', href: '/commercial-landscape-maintenance-virginia' },
  { label: 'Service Areas', href: '/service-areas-northern-virginia' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Careers', href: '/career' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact#form' },
]

/* Repeating text items for the marquee ticker */
const TICKER_ITEMS = [
  'Family Owned',
  'Free Yard Inspection',
  'Over 40 Years of Experience',
  'Family Owned',
  'Free Yard Inspection',
  'Over 40 Years of Experience',
]

function TickerChunk() {
  return (
    <span className="va-marquee-chunk inline-flex items-center gap-5">
      {TICKER_ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-5">
          <span className="font-ui text-xs font-bold tracking-[0.25em] uppercase text-cream">{item}</span>
          <span className="text-orange text-base leading-none" aria-hidden="true">·</span>
        </span>
      ))}
    </span>
  )
}

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lawnOpen, setLawnOpen] = useState(false)
  const [designOpen, setDesignOpen] = useState(false)
  const pathname = usePathname()
  const lawnRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setLawnOpen(false)
    setDesignOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-[#101f16] shadow-[0_6px_30px_rgba(0,0,0,0.65)] lg:shadow-none"
      >
        {/* ── Announcement banner — hidden on mobile while the menu is open ── */}
        <div className={`va-marquee-wrap h-9 items-center overflow-hidden border-b border-cream/10 ${mobileOpen ? 'hidden lg:flex' : 'flex'}`} style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
          <div className="va-marquee">
            <TickerChunk />
            <TickerChunk />
          </div>
        </div>

        {/* ── Main nav row — plain flex (mobile: logo left, controls right).
            Desktop nav is taken out of flow and centered absolutely against
            this row so it's truly centered no matter how wide the logo vs.
            right-side content is — a 3-column flex/grid can't do that when
            the two sides are different widths. ── */}
        <div className="relative px-5 lg:px-8 flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div>
            <Link href="/" className="inline-flex flex-shrink-0 transition-opacity duration-300 hover:opacity-85" aria-label="Sunrise Landscape — Home">
              <Image
                src="/logos/sunrise-logo.svg"
                alt="SUNRISE Landscape"
                width={190}
                height={66}
                priority
              />
            </Link>
          </div>

          {/* Center: Desktop nav — absolutely centered against the row */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Landscaping and Lawn Care dropdown */}
            <div className="relative" ref={lawnRef}>
              <button
                className="nav-link text-cream px-2"
                onMouseEnter={() => setLawnOpen(true)}
                onMouseLeave={() => setLawnOpen(false)}
                onClick={() => setLawnOpen(!lawnOpen)}
                aria-expanded={lawnOpen}
              >
                Landscaping &amp; Lawn Care
                <svg className={`ml-1 w-3 h-3 transition-transform duration-200 ${lawnOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute top-full mt-2 left-0 w-64 bg-green shadow-2xl transition-all duration-200 ${lawnOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                onMouseEnter={() => setLawnOpen(true)}
                onMouseLeave={() => setLawnOpen(false)}
              >
                <div className="py-2">
                  {landscapingAndLawnCare.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-3 text-sm font-ui font-bold tracking-wide uppercase text-cream hover:text-orange hover:bg-cream/5 transition-colors duration-150 border-b border-cream/10 last:border-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Design and Build dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="nav-link text-cream px-2"
                onMouseEnter={() => setDesignOpen(true)}
                onMouseLeave={() => setDesignOpen(false)}
                onClick={() => setDesignOpen(!designOpen)}
                aria-expanded={designOpen}
              >
                Design &amp; Build
                <svg className={`ml-1 w-3 h-3 transition-transform duration-200 ${designOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute top-full mt-2 left-0 w-64 bg-green shadow-2xl transition-all duration-200 ${designOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                onMouseEnter={() => setDesignOpen(true)}
                onMouseLeave={() => setDesignOpen(false)}
              >
                <div className="py-2">
                  {designAndBuild.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-3 text-sm font-ui font-bold tracking-wide uppercase text-cream hover:text-orange hover:bg-cream/5 transition-colors duration-150 border-b border-cream/10 last:border-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-cream px-2"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTAs + mobile controls */}
          <div className="flex items-center justify-end gap-2 xl:gap-3">
            {/* Inquire CTA — desktop only (phone button removed for a cleaner header) */}
            <Link
              href="/contact#form"
              className="hidden lg:inline-flex items-center gap-2 btn-primary"
              style={{ padding: '7px 16px', minHeight: '36px', fontSize: '0.7rem' }}
            >
              <span>Inquire</span>
              <span className="relative z-10" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <path d="M3 13L13 3M13 3H7M13 3v6" />
                </svg>
              </span>
            </Link>

            {/* Mobile: phone icon — stays visible next to the close button when the menu is open */}
            <a
              href="tel:703-544-0028"
              aria-label="Call 703-544-0028"
              className="lg:hidden flex items-center justify-center w-11 h-11 text-cream hover:text-orange transition-colors"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                <path d="M3 5a2 2 0 012-2h1.5a1 1 0 01.96.72l.96 3.2a1 1 0 01-.23 1.01L7 9.14a11.06 11.06 0 004.86 4.86l1.21-1.21a1 1 0 011.01-.23l3.2.96A1 1 0 0118 14.5V16a2 2 0 01-2 2h-.5C7.16 18 2 12.84 2 6.5V6a2 2 0 011-1.73V5z" />
              </svg>
            </a>

            {/* Mobile hamburger — morphs into a close (X) when the menu is open */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 text-cream"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-px bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Orange accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange opacity-60" />
      </header>

      {/* Full-screen mobile menu — sits below the header (logo + close X stay in the header itself) */}
      <div
        className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-[#101f16] text-cream flex flex-col lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
      >
        {/* Scrollable nav — visible orange scrollbar + bottom fade make the scroll obvious */}
        <div className="relative flex-1 min-h-0">
          <nav className="mobile-nav-scroll h-full overflow-y-auto px-6 pt-8 pb-10">
            <p className="section-label text-orange mb-1">Landscaping &amp; Lawn Care</p>
            <div className="flex flex-col">
              {landscapingAndLawnCare.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center min-h-[60px] font-ui text-base font-bold tracking-wide uppercase text-cream hover:text-orange transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-white/10 my-7" />

            <p className="section-label text-orange mb-1">Design &amp; Build</p>
            <div className="flex flex-col">
              {designAndBuild.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center min-h-[60px] font-ui text-base font-bold tracking-wide uppercase text-cream hover:text-orange transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-white/10 my-7" />

            <div className="flex flex-col">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="flex items-center min-h-[56px] font-ui text-base font-bold tracking-wide uppercase text-cream/90 hover:text-orange transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Bottom fade — signals there's more to scroll */}
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#101f16] to-transparent" />
        </div>

        {/* Anchored CTA — always visible, doesn't scroll away. Shadow cast
            upward over the scroll area reinforces that content scrolls
            underneath this fixed bar. */}
        <div className="relative z-10 flex-shrink-0 px-6 pt-5 pb-8 border-t border-white/10 shadow-[0_-10px_24px_rgba(0,0,0,0.6)]">
          <Link
            href="/contact#form"
            className="btn-primary w-full justify-center"
            style={{ minHeight: 56 }}
          >
            <span>Get My Free Yard Inspection</span>
          </Link>
        </div>
      </div>
    </>
  )
}
