'use client'

import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import Image from 'next/image'

export type Slide = { src: string; alt: string }

const GAP = 16   // px gap between visible cards
const CLONES = 2 // clones on each end for seamless loop

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

export default function HardscapeCarousel({ slides }: { slides: Slide[] }) {
  const total = slides.length
  const [rawIdx, setRawIdx] = useState(CLONES)
  const [animate, setAnimate] = useState(true)
  const [trackW, setTrackW] = useState(0)
  const [perPage, setPerPage] = useState(2)
  const trackRef = useRef<HTMLDivElement>(null)

  // Responsive: 1-up on mobile, 2-up on desktop
  useEffect(() => {
    const update = () => setPerPage(window.innerWidth < 768 ? 1 : 2)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setTrackW(trackRef.current.offsetWidth)
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (trackRef.current) ro.observe(trackRef.current)
    return () => ro.disconnect()
  }, [])

  // Width of each card
  const itemW = trackW ? (trackW - GAP * (perPage - 1)) / perPage : 0

  // Clone last CLONES + all real + first CLONES for seamless looping
  const items = useMemo(() => [
    ...slides.slice(-CLONES),
    ...slides,
    ...slides.slice(0, CLONES),
  ], [slides])

  const prev = useCallback(() => { setAnimate(true); setRawIdx(i => i - 1) }, [])
  const next = useCallback(() => { setAnimate(true); setRawIdx(i => i + 1) }, [])

  // On reaching a clone, silently jump to the real counterpart
  const handleTransitionEnd = useCallback(() => {
    if (rawIdx >= total + CLONES) {
      setAnimate(false); setRawIdx(CLONES)
    } else if (rawIdx < CLONES) {
      setAnimate(false); setRawIdx(total + CLONES - 1)
    }
  }, [rawIdx, total])

  // Re-enable animation after silent jump
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)))
      return () => cancelAnimationFrame(id)
    }
  }, [animate])

  const realIdx = ((rawIdx - CLONES) % total + total) % total

  return (
    <div className="relative overflow-hidden" style={{ borderRadius: '20px', height: 'clamp(280px, 40vw, 480px)' }}>
      {/* Slide track */}
      <div
        ref={trackRef}
        className="flex h-full"
        style={{
          gap: `${GAP}px`,
          transform: itemW ? `translateX(${-rawIdx * (itemW + GAP)}px)` : 'none',
          transition: animate && itemW ? 'transform 0.65s cubic-bezier(0.4,0,0.2,1)' : 'none',
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {items.map((slide, i) => (
          <div
            key={`${slide.src}-${i}`}
            className="relative flex-shrink-0 h-full overflow-hidden"
            style={{
              width: itemW ? `${itemW}px` : `${100 / perPage}%`,
              borderRadius: '16px',
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === CLONES}
            />
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white bg-black/35 hover:bg-black/60 transition-colors duration-200 cursor-pointer backdrop-blur-sm"
        style={{ borderRadius: '50%' }}
      >
        <ArrowLeft />
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white bg-black/35 hover:bg-black/60 transition-colors duration-200 cursor-pointer backdrop-blur-sm"
        style={{ borderRadius: '50%' }}
      >
        <ArrowRight />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAnimate(true); setRawIdx(i + CLONES) }}
            aria-label={`Go to image ${i + 1}`}
            className="flex items-center justify-center cursor-pointer"
            style={{ height: '44px', padding: '0 4px' }}
          >
            <span className="block transition-all duration-300" style={{
              height: '6px',
              width: i === realIdx ? '22px' : '6px',
              borderRadius: '999px',
              background: i === realIdx ? '#fff' : 'rgba(255,255,255,0.4)',
            }} />
          </button>
        ))}
      </div>
    </div>
  )
}
