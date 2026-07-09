'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const designAndBuild = [
  { label: 'Landscape Design', href: '/landscape-design-northern-virginia' },
  { label: 'Hardscape', href: '/hardscape-northern-virginia' },
  { label: 'Planting', href: '/landscape-planting-northern-virginia' },
  { label: 'Lighting', href: '/landscape-lighting-northern-virginia' },
  { label: 'Water Features', href: '/water-features-northern-virginia' },
  { label: 'Drainage Solutions', href: '/drainage-solutions-northern-virginia' },
  { label: 'Service Areas', href: '/service-areas-northern-virginia' },
]

const navLinks = [
  { label: 'Maintenance', href: '/landscape-maintenance-northern-virginia' },
  { label: 'Commercial', href: '/commercial-landscape-maintenance-virginia' },
  { label: 'Careers', href: '/career' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

/* Repeating text items for the marquee ticker */
const TICKER_ITEMS = [
  'Family Owned',
  'Free Yard Inspection',
  'Over 37 Years of Experience',
  'Family Owned',
  'Free Yard Inspection',
  'Over 37 Years of Experience',
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
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
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
        className="fixed top-0 left-0 right-0 z-50 bg-green"
      >
        {/* ── Announcement banner ─────────────────────────────────────── */}
        <div className="va-marquee-wrap h-9 flex items-center overflow-hidden border-b border-cream/10" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}>
          <div className="va-marquee">
            <TickerChunk />
            <TickerChunk />
          </div>
        </div>

        {/* ── Main nav row — 3-column flex so the nav is never absolutely positioned ── */}
        <div className="px-5 lg:px-8 flex items-center h-16">
          {/* Left: Logo */}
          <div className="flex-1">
            <Link href="/" className="inline-flex flex-shrink-0 transition-opacity duration-300 hover:opacity-85" aria-label="Sunrise Landscape & Design — Home">
              <Image
                src="/logos/sunrise-logo-white.png"
                alt="SUNRISE Landscape & Design"
                width={150}
                height={46}
                priority
              />
            </Link>
          </div>

          {/* Center: Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            <Link href="/about-us" className="nav-link text-cream px-2">About Us</Link>

            {/* Design and Build dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="nav-link text-cream px-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Design and Build
                <svg className={`ml-1 w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute top-full mt-2 left-0 w-64 bg-green shadow-2xl transition-all duration-200 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
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

          {/* Right: CTAs + mobile hamburger */}
          <div className="flex-1 flex items-center justify-end gap-2 xl:gap-3">
            {/* Phone number — desktop only */}
            <a
              href="tel:703-544-0028"
              className="hidden lg:inline-flex items-center gap-2 btn-ghost on-dark"
              style={{ padding: '7px 14px', minHeight: '36px', fontSize: '0.7rem', letterSpacing: '0.12em' }}
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0 relative z-10" aria-hidden="true">
                <path d="M3 5a2 2 0 012-2h1.5a1 1 0 01.96.72l.96 3.2a1 1 0 01-.23 1.01L7 9.14a11.06 11.06 0 004.86 4.86l1.21-1.21a1 1 0 011.01-.23l3.2.96A1 1 0 0118 14.5V16a2 2 0 01-2 2h-.5C7.16 18 2 12.84 2 6.5V6a2 2 0 011-1.73V5z" />
              </svg>
              <span>703-544-0028</span>
            </a>

            {/* Inquire CTA — desktop only */}
            <Link
              href="/contact"
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

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 text-cream"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
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

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${mobileOpen ? 'visible' : 'invisible'}`}
      >
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${mobileOpen ? 'opacity-60' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-green text-cream flex flex-col transition-transform duration-400 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <span className="font-ui font-bold text-sm tracking-widest uppercase">
              <span className="text-orange">SUNRISE</span> Landscape
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-11 h-11 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-1">
            <Link
              href="/about-us"
              className="block py-3 font-ui text-sm font-bold tracking-wider uppercase border-b border-white/10 hover:text-orange transition-colors"
            >
              About Us
            </Link>

            <p className="section-label text-orange mb-4 pt-5">Design and Build</p>
            {designAndBuild.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block py-3 font-ui text-sm font-bold tracking-wider uppercase border-b border-white/10 hover:text-orange transition-colors"
              >
                {s.label}
              </Link>
            ))}

            <div className="pt-6 space-y-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block py-3 font-ui text-sm font-bold tracking-wider uppercase border-b border-white/10 hover:text-orange transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="px-6 pb-8">
            <Link
              href="/contact"
              className="btn-primary w-full justify-center"
            >
              <span>Inquire</span>
            </Link>
            <a href="tel:703-544-0028" className="flex items-center justify-center mt-3 min-h-[44px] text-center text-cream text-sm hover:text-orange transition-colors">
              703-544-0028
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
