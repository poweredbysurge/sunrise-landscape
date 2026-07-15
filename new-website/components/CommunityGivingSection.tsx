'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

const ENTRIES = [
  {
    year: '2019',
    title: 'Renewal and Remembrance at Arlington National Cemetery',
    body: 'Sunrise gives back by volunteering with hundreds of other landscape professionals at Renewal and Remembrance, an annual day of service, at Arlington National Cemetery. The event put on by the Landscape Association NALP, gathers volunteers to mulch, lime, plant and enhance the grounds throughout the cemetery. Proud to be a part of this great event! This year Sunrise planted and installed stepping stones. Thanks to all who donated time and materials especially, Walnut Springs Nursery, Oregon Battery Operated Products, Sislers Stone, Alliance Cleaners and Sealers and Techo Bloc.',
  },
  {
    year: '2018',
    title: 'Renewal and Remembrance at Arlington National Cemetery',
    body: 'SUNRISE LANDSCAPE AND DESIGN, a member of the National Association of Landscape Professionals, participated in Renewal & Remembrance at Arlington National Cemetery on Monday, July 16, 2018. This marks the 22nd year that industry professionals have worked to help care for this national burial ground that serves as the final resting spot for more than 400,000 military service men and women and their spouses.',
  },
]

export default function CommunityGivingSection() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLDivElement>('[data-card]')
    if (!cards) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cards.forEach(el => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    cards.forEach(card => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-cream py-16 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

          {/* Sticky left panel */}
          <div className="lg:w-5/12 lg:sticky lg:top-24 lg:self-start">
            <h2
              className="text-green mb-8"
              style={{ fontFamily: 'var(--font-editorsnote), Georgia, serif', fontStyle: 'normal', fontWeight: 400, fontSize: 'clamp(2.6rem, 4.5vw, 4.5rem)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
            >
              <span className="block">Community</span>
              <span className="block">Service</span>
              <span className="block">and Giving</span>
              <span className="block">Back</span>
            </h2>

            <p className="prose-content text-green/70 mb-10" style={{ maxWidth: '320px' }}>
              For decades, Sunrise has nurtured landscapes and communities alike, giving back through
              hands-on service, partnerships, and local impact projects that grow lasting beauty and
              connection.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-orange font-ui font-bold text-xs tracking-[0.2em] uppercase group"
            >
              Schedule a Call
              <span
                className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          </div>

          {/* Scrollable right: cards slide up on enter */}
          <div ref={cardsRef} className="lg:w-7/12 flex flex-col gap-4">
            {ENTRIES.map((entry, i) => (
              <div
                key={entry.year}
                data-card
                style={{
                  backgroundColor: '#1e3526',
                  borderRadius: '16px',
                  padding: 'clamp(2rem, 5vw, 3.5rem)',
                  opacity: 0,
                  transform: 'translateY(48px)',
                  transition: `opacity 0.65s ease ${i * 0.14}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.14}s`,
                }}
              >
                <div
                  className="font-ui font-bold"
                  style={{
                    fontSize: 'clamp(3.5rem, 6vw, 4.5rem)',
                    color: '#e7e6d2',
                    opacity: 0.2,
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {entry.year}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-editorsnote), Georgia, serif',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
                    color: '#e7e6d2',
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                    marginBottom: '1rem',
                  }}
                >
                  {entry.title}
                </h3>
                <p style={{ color: '#e7e6d2', lineHeight: 1.75, fontSize: '1.125rem' }}>
                  {entry.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
