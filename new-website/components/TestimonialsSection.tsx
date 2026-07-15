'use client'

import { useState, useCallback, useRef, useEffect, useMemo } from 'react'

export type Testimonial = { text: string; name: string; location: string; stars?: number }

const GAP = 32
const CLONES = 2

const ArrowLeft = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M16 10H4M9 4l-6 6 6 6" />
  </svg>
)

const ArrowRight = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M4 10h12M11 4l6 6-6 6" />
  </svg>
)

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex justify-center md:justify-start gap-1 mb-6" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`w-5 h-5 ${i < count ? 'text-green' : 'text-green/20'}`} fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

const BG = '#ced4bc'

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const total = testimonials.length
  const [rawIdx, setRawIdx] = useState(CLONES)
  const [animate, setAnimate] = useState(true)
  const [cardPx, setCardPx] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)

  const items = useMemo(() => [
    ...testimonials.slice(-CLONES),
    ...testimonials,
    ...testimonials.slice(0, CLONES),
  ], [testimonials])

  useEffect(() => {
    const measure = () => {
      if (!wrapRef.current) return
      const w = wrapRef.current.offsetWidth
      const isMobile = window.innerWidth < 768
      setCardPx(isMobile ? w * 0.85 : Math.min(w * 0.42, 520))
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (wrapRef.current) ro.observe(wrapRef.current)
    return () => ro.disconnect()
  }, [])

  const prev = useCallback(() => {
    setAnimate(true)
    setRawIdx(i => i - 1)
  }, [])

  const next = useCallback(() => {
    setAnimate(true)
    setRawIdx(i => i + 1)
  }, [])

  const handleTransitionEnd = useCallback(() => {
    if (rawIdx >= total + CLONES) {
      setAnimate(false)
      setRawIdx(CLONES)
    } else if (rawIdx < CLONES) {
      setAnimate(false)
      setRawIdx(total + CLONES - 1)
    }
  }, [rawIdx, total])

  useEffect(() => {
    if (!animate) {
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true))
      )
      return () => cancelAnimationFrame(raf)
    }
  }, [animate])

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: BG }}>
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div>
            <p className="section-label text-green/50 mb-5">Testimonials</p>
            <h2 className="text-green leading-tight" style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)' }}>
              Hear it from the{' '}
              <em>people</em>{' '}
              who <em>matter</em>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-2">
            <p className="text-green/55 leading-relaxed mb-7">
              Choosing a licensed landscaping team ensures your investment is backed by expertise, safety standards, and professionalism. While others may offer lower prices, our certifications guarantee your project is completed correctly the first time.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="w-12 h-12 border border-green/30 flex items-center justify-center text-green hover:bg-green hover:text-cream hover:border-green transition-colors duration-200 cursor-pointer"
                style={{ borderRadius: '50%' }}
              >
                <ArrowLeft />
              </button>
              <button
                onClick={next}
                aria-label="Next review"
                className="w-12 h-12 border-2 border-green flex items-center justify-center text-green hover:bg-green hover:text-cream transition-colors duration-200 cursor-pointer"
                style={{ borderRadius: '50%' }}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-green/15 mb-12" />
      </div>

      {/* Card track — bleeds right edge */}
      <div ref={wrapRef} className="pl-5 lg:pl-8 overflow-hidden relative">
        {/* Left fade — desktop only; hidden on the first card so the section starts with a clean 32px left edge, then fades in once scrolled past it */}
        <div
          className="hidden lg:block absolute top-0 left-0 bottom-0 w-32 pointer-events-none z-10 transition-opacity duration-500"
          style={{ background: `linear-gradient(to right, ${BG}, transparent)`, opacity: rawIdx > CLONES ? 1 : 0 }}
        />
        {/* Right fade — desktop only */}
        <div
          className="hidden lg:block absolute top-0 right-0 bottom-0 w-40 pointer-events-none z-10"
          style={{ background: `linear-gradient(to right, transparent, ${BG})` }}
        />

        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${cardPx ? -rawIdx * (cardPx + GAP) : 0}px)`,
            transition: animate && cardPx ? 'transform 0.65s cubic-bezier(0.4,0,0.2,1)' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {items.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex-shrink-0 flex flex-col"
              style={{ width: cardPx ? `${cardPx}px` : '42%' }}
            >
              <Stars count={t.stars ?? 5} />
              <p className="text-green/70 leading-relaxed mb-4 md:mb-8 md:flex-1" style={{ fontSize: '1.125rem' }}>
                {t.text}
              </p>
              <div>
                <p className="font-ui font-bold text-green">{t.name}</p>
                {t.location && <p className="text-green/65">{t.location}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
