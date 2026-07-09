'use client'

import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import Image from 'next/image'
import { cdnToLocal } from '@/lib/mediaUrl'

const GAP = 20
const CLONES = 1

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

const slides = [
  {
    src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682335ae15765002fa05b2ec_pw-slider-img-1%20(1).webp'),
    alt: 'Small garden pond with water plants, koi fish, and a gentle waterfall over rocks.',
  },
  {
    src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682335cc3a010354185703b0_pw-slider-img-3%20(1).webp'),
    alt: 'A landscaped garden with a small pond surrounded by rocks, various green plants, and a grassy lawn.',
  },
  {
    src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682348cfa19ec32d50466fa3_beyond-img%20(1).webp'),
    alt: 'Outdoor garden with a stone pond featuring a small waterfall and stepping stones leading across the water.',
  },
]

export default function WaterFeaturesCarousel() {
  const total = slides.length
  const [rawIdx, setRawIdx] = useState(CLONES)
  const [animate, setAnimate] = useState(true)
  const [containerW, setContainerW] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = () => setContainerW(el.offsetWidth)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Show ~1.6 cards so next card peeks in — capped at 440px
  const cardW = containerW ? Math.min(440, Math.round(containerW * 0.62)) : 0

  // One clone on each end for seamless looping
  const items = useMemo(() => [
    ...slides.slice(-CLONES),
    ...slides,
    ...slides.slice(0, CLONES),
  ], [])

  const prev = useCallback(() => { setAnimate(true); setRawIdx(i => i - 1) }, [])
  const next = useCallback(() => { setAnimate(true); setRawIdx(i => i + 1) }, [])

  // After sliding into a clone, silently jump to the real counterpart
  const handleTransitionEnd = useCallback(() => {
    if (rawIdx >= total + CLONES) {
      setAnimate(false); setRawIdx(CLONES)
    } else if (rawIdx < CLONES) {
      setAnimate(false); setRawIdx(total + CLONES - 1)
    }
  }, [rawIdx, total])

  // Re-enable animation one frame after the silent jump
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
      return () => cancelAnimationFrame(id)
    }
  }, [animate])

  return (
    <section className="py-16 lg:py-24 bg-cream">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 mb-10 flex items-start justify-between">
        <h2 className="text-3xl lg:text-5xl font-bold text-green leading-tight">
          Check out our water<br />feature <em>projects</em>
        </h2>
        <div className="flex gap-3 pt-1 shrink-0">
          <button
            onClick={prev}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full border border-black/25 flex items-center justify-center hover:border-black/60 transition-colors cursor-pointer"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next project"
            className="w-11 h-11 rounded-full border border-black/25 flex items-center justify-center hover:border-black/60 transition-colors cursor-pointer"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        {/* Gradient fades matching bg-cream */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-16 lg:w-28 bg-gradient-to-r from-cream to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 lg:w-28 bg-gradient-to-l from-cream to-transparent z-10" />

        {/* Measure available width */}
        <div ref={containerRef} className="px-5 lg:px-8">
          {/* Sliding track */}
          <div
            className="flex pb-2"
            style={{
              gap: `${GAP}px`,
              transform: cardW ? `translateX(${-(rawIdx * (cardW + GAP))}px)` : 'none',
              transition: animate && cardW ? 'transform 0.65s cubic-bezier(0.4,0,0.2,1)' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {items.map((slide, i) => (
              <div
                key={`${slide.src}-${i}`}
                className="relative flex-none overflow-hidden"
                style={{
                  width: cardW ? `${cardW}px` : '440px',
                  aspectRatio: '1 / 1',
                  borderRadius: '16px',
                }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 440px"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
