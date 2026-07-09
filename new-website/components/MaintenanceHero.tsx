'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1636301587190-88cbb412fea0',
    alt: 'Professionally landscaped home exterior with dense green garden beds and mature trees surrounding a residential patio.',
  },
  {
    src: 'https://images.unsplash.com/photo-1598714805247-5dd440d87124',
    alt: 'Modern upscale home with manicured green lawn and outdoor lounge area in warm afternoon sunlight.',
  },
]

export default function MaintenanceHero() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setActive(i => (i + 1) % SLIDES.length)

  return (
    <section className="relative h-[80vh] min-h-[540px] flex items-end overflow-hidden">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === active ? 1 : 0 }}
          aria-hidden={i !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Arrow buttons */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-5 lg:left-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 transition-colors duration-200"
        style={{ borderRadius: '50%', backgroundColor: 'rgba(231,230,210,0.15)', border: '1px solid rgba(231,230,210,0.3)' }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(231,230,210,0.25)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(231,230,210,0.15)')}
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cream" aria-hidden="true">
          <path d="M13 4l-6 6 6 6" />
        </svg>
      </button>

      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-5 lg:right-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 transition-colors duration-200"
        style={{ borderRadius: '50%', backgroundColor: 'rgba(231,230,210,0.15)', border: '1px solid rgba(231,230,210,0.3)' }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(231,230,210,0.25)')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(231,230,210,0.15)')}
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cream" aria-hidden="true">
          <path d="M7 4l6 6-6 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="flex items-center justify-center cursor-pointer"
            style={{ height: '44px', width: '24px' }}
          >
            <span className="block w-2 h-2 transition-all duration-300" style={{
              borderRadius: '50%',
              backgroundColor: i === active ? '#ff6400' : 'rgba(231,230,210,0.5)',
              transform: i === active ? 'scale(1.3)' : 'scale(1)',
            }} />
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 pb-16 lg:pb-24 w-full">
        <p className="section-label text-orange mb-4">Maintenance Services</p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-none tracking-tight max-w-4xl mb-6">
          Landscape Maintenance Services in Northern Virginia
        </h1>
        <p className="text-xl lg:text-2xl text-cream mb-8 max-w-2xl leading-relaxed">
          Transform your outdoor space into a living masterpiece that evolves beautifully through every season.
        </p>
        <Link href="/contact" className="btn-primary"><span>Free Consultation</span></Link>
      </div>
    </section>
  )
}
