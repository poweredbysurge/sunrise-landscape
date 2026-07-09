import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import MaintenanceHero from '@/components/MaintenanceHero'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'

export const metadata: Metadata = {
  title: 'Landscape Maintenance Northern Virginia | Sunrise Landscape',
  description: 'Professional landscape maintenance in Northern Virginia. Year-round care packages for residential and commercial properties. Keep your landscape thriving.',
  openGraph: {
    title: 'Landscape Maintenance Northern Virginia | Sunrise Landscape',
    description: 'Professional landscape maintenance in Northern Virginia. Year-round care packages for residential and commercial properties. Keep your landscape thriving.',
    type: 'website',
  },
  twitter: {
    title: 'Landscape Maintenance Northern Virginia | Sunrise Landscape',
    description: 'Professional landscape maintenance in Northern Virginia. Year-round care packages for residential and commercial properties. Keep your landscape thriving.',
    card: 'summary_large_image',
  },
}

export default function LandscapeMaintenancePage() {
  const jsonLd = getMdxJsonLd('pages/landscape-maintenance-northern-virginia/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO ── */}
      <MaintenanceHero />

      {/* ── LANDSCAPE MAINTENANCE PACKAGES ── */}
      <section id="packages" className="py-16 lg:py-24" style={{ backgroundColor: '#e7e6d2' }}>
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          {/* Section header */}
          <div className="mb-12 lg:mb-16 text-center">
            <p className="section-label mb-4">Year-Round Care</p>
            <h2 className="text-3xl lg:text-5xl text-green leading-tight">
              Landscape Maintenance Packages
            </h2>
          </div>

          {/* 2×2 package grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              {
                name: 'Bronze',
                num: '01',
                tagline: 'The essentials for a healthy, well-maintained lawn.',
                inherits: null,
                additions: [
                  'Weekly Mowing',
                  'Turf Fertilization and Weed Control',
                  'Early Fall and Late Fall Fertilization',
                  'Soil Test',
                ],
              },
              {
                name: 'Silver',
                num: '02',
                tagline: 'Added protection against grubs and seasonal thinning.',
                inherits: 'Bronze',
                additions: [
                  'Grub Control',
                  'Core Aeration and Overseeding',
                ],
              },
              {
                name: 'Gold',
                num: '03',
                tagline: 'Full lawn care plus hands-on garden attention.',
                inherits: 'Silver',
                additions: [
                  'Spring Clean-up',
                  'Garden Visit',
                  'Seasonal Pruning',
                ],
              },
              {
                name: 'Platinum',
                num: '04',
                tagline: 'Our most comprehensive package. Nothing overlooked.',
                inherits: 'Gold',
                additions: [
                  'Integrated Pest Management (IPM)',
                  'Fertilization of Trees and Shrubs',
                  'Leaf Clean-ups and Disposal',
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col"
                style={{ backgroundColor: '#1e3526', borderRadius: '16px', overflow: 'hidden' }}
              >
                {/* Card header */}
                <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: 'rgba(231,230,210,0.12)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-ui not-italic text-xs font-bold tracking-[0.28em] uppercase text-cream/50">
                      {pkg.num}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 font-ui not-italic text-xs font-bold tracking-widest uppercase transition-colors duration-200"
                      style={{ color: '#ff6400' }}
                    >
                      Get Started
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                        <path d="M3 3h10v10M3 13L13 3" />
                      </svg>
                    </Link>
                  </div>
                  <h4 className="text-cream leading-none mb-2">
                    {pkg.name}
                  </h4>
                  <p className="text-cream/70 text-sm leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="flex-1 px-6 py-4 space-y-2">
                  {pkg.inherits && (
                    <li className="flex items-center gap-2 pb-2 mb-1 border-b" style={{ borderColor: 'rgba(231,230,210,0.1)' }}>
                      <svg viewBox="0 0 16 16" fill="none" stroke="rgba(231,230,210,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
                        <path d="M3 8l3.5 3.5L13 4" />
                      </svg>
                      <span className="text-cream/50 text-sm">Everything in {pkg.inherits}, plus:</span>
                    </li>
                  )}
                  {pkg.additions.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="#ff6400"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <path d="M3 8l3.5 3.5L13 4" />
                      </svg>
                      <span className="text-cream text-sm leading-snug">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <p className="mt-10 text-center" style={{ color: 'rgba(30,53,38,0.6)' }}>
            Not sure which package is right for you?{' '}
            <Link href="/contact" className="inline-flex items-center py-2.5 text-green underline decoration-orange underline-offset-4 hover:text-orange transition-colors font-bold">
              Schedule a free consultation.
            </Link>
          </p>
        </div>
      </section>

      {/* ── PROFESSIONAL LAWN CARE ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: content */}
            <div>
              <p className="section-label mb-4">Lawn Care Package</p>
              <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-5">
                Professional Lawn Care in Northern Virginia
              </h2>
              <p className="text-green/70 leading-relaxed mb-8">
                A healthy lawn requires much more than just mowing and edging. Our Lawn Care Package provides your grass everything it needs to look great in the spring, endure the hot and dry months of the summer, rejuvenate in the fall, and wake up stronger from winter dormancy.
              </p>

              <ul className="space-y-3 mb-10">
                {[
                  'Weekly mowing & edging',
                  'Soil test',
                  'Seasonal fertilizer & pre-emergent applications',
                  'Broadleaf & grassy weed treatment',
                  'Core aeration & over-seeding',
                  'Topdressing services',
                  'Leaf clean-up and removal',
                  'Grub Control applications',
                  'Fungicide applications',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg viewBox="0 0 16 16" fill="none" stroke="#ff6400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M3 8l3.5 3.5L13 4" />
                    </svg>
                    <span className="text-green/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="#packages" className="btn-primary">
                <span>Check Out Our Packages</span>
              </Link>
            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden" style={{ borderRadius: '20px', aspectRatio: '4 / 5' }}>
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6822fae33f0e864553518e47_mowing-img%20(1).webp')}
                alt="Large two-story brick house with dark roof, red front door, and a well-maintained lawn with striped mowing patterns."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── GARDEN MAINTENANCE SERVICES ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#e7e6d2' }}>
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left: image */}
            <div className="relative overflow-hidden" style={{ borderRadius: '20px', aspectRatio: '4 / 3' }}>
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68230187ed0e534a13fbd511_season-img-1%20(1).webp')}
                alt="Landscaped garden bed with vibrant pink flowers, green shrubs, and trees bordered by black mulch and a stone wall with patio furniture in the background."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right: content */}
            <div className="lg:pt-4">
              <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-5">
                Garden Maintenance Services
              </h2>
              <p className="text-green/65 leading-relaxed mb-8">
                Proper care for your gardens requires attention year-round. Our Garden Care package will give you peace of mind that your trees, shrubs, and plants will be monitored and properly cared for all year.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  'Spring clean-up (Edging/Mulching/Pre-emergent/Cutbacks)',
                  'Bi-weekly garden visits',
                  'Seasonal Pruning',
                  'Fertilization of trees & shrubs',
                  'Integrated Pest Management (IPM)',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: '#1e3526', borderRadius: '50%' }}>
                      <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                        <path d="M2 6l2.5 2.5L10 3" />
                      </svg>
                    </div>
                    <span className="text-green/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-flex items-center min-h-[44px] gap-2 section-label text-orange hover:text-green transition-colors duration-200">
                Schedule a Consultation
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                  <path d="M3 3h10v10M3 13L13 3" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── SEASONAL LANDSCAPE SERVICES ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#e7e6d2' }}>
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: content */}
            <div>
              <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-5">
                Seasonal Landscape Services
              </h2>
              <p className="text-green/65 leading-relaxed mb-8">
                Fall is an important time to prepare your yard for the winter. Our fall services package combines the most requested fall services into one easy package. Available for townhomes, patio homes, single family homes, and estates in Loudoun and Fairfax County.
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  {
                    label: 'Spring Package',
                    body: 'Includes removing old mulch, edging, applying pre-emergent herbicide, mulching beds, cutting back ornamental grasses, and clearing sticks and debris.',
                  },
                  {
                    label: 'Fall Package',
                    body: 'Includes core aeration, overseeding for strong turf growth, leaf cleanup to prevent damage, and topdressing to add nutrients and smooth uneven surfaces.',
                  },
                ].map(item => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: '#1e3526', borderRadius: '50%' }}>
                      <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                        <path d="M2 6l2.5 2.5L10 3" />
                      </svg>
                    </div>
                    <span className="text-green/80 leading-relaxed">
                      <strong className="text-green">{item.label}:</strong> {item.body}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="inline-flex items-center min-h-[44px] gap-2 section-label text-orange hover:text-green transition-colors duration-200">
                Schedule a Consultation
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                  <path d="M3 3h10v10M3 13L13 3" />
                </svg>
              </Link>
            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden" style={{ borderRadius: '20px', aspectRatio: '4 / 5' }}>
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6822f8c8c8ec5c4eba8b85e6_fall-img%20(1).webp')}
                alt="Terraced backyard garden with stone retaining walls, green shrubs, red-leaved bush, outdoor seating, and tall trees under a blue sky."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />


      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
