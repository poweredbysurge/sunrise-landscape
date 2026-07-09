'use client'

import { useState, useCallback, useRef, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export type Project = { img: string; alt: string; name: string; location: string }

const GAP = 20
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

type Props = {
  projects: Project[]
  title?: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
}

export default function FeaturedWorkCarousel({
  projects,
  title = 'Our featured work',
  ctaLabel = 'Speak to an Expert',
  ctaHref = '/contact',
}: Props) {
  const total = projects.length
  // rawIdx includes the clone offset: CLONES = first real item, total+CLONES-1 = last real item
  const [rawIdx, setRawIdx] = useState(CLONES)
  const [animate, setAnimate] = useState(true)
  const [cardPx, setCardPx] = useState(0)
  const wrapRef = useRef<HTMLDivElement>(null)

  // Extended array: last CLONES items + all real items + first CLONES items
  const items = useMemo(() => [
    ...projects.slice(-CLONES),
    ...projects,
    ...projects.slice(0, CLONES),
  ], [projects])

  useEffect(() => {
    const measure = () => {
      if (wrapRef.current) setCardPx(wrapRef.current.offsetWidth * 0.7)
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

  // After animating to a clone, silently jump to the real counterpart
  const handleTransitionEnd = useCallback(() => {
    if (rawIdx >= total + CLONES) {
      setAnimate(false)
      setRawIdx(CLONES)
    } else if (rawIdx < CLONES) {
      setAnimate(false)
      setRawIdx(total + CLONES - 1)
    }
  }, [rawIdx, total])

  // Re-enable animation after the silent jump renders (2 rAFs ensure DOM has updated)
  useEffect(() => {
    if (!animate) {
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true))
      )
      return () => cancelAnimationFrame(raf)
    }
  }, [animate])

  return (
    <section className="bg-cream flex flex-col overflow-hidden" style={{ height: '100svh' }}>

      {/* Full-width heading */}
      <div className="px-6 lg:px-16 pt-14 lg:pt-16 pb-5 flex-shrink-0">
        <h2 className="text-green leading-none" style={{ fontSize: 'clamp(3rem, 5.5vw, 4.5rem)' }}>
          {title}
        </h2>
      </div>

      {/* Divider */}
      <div className="mx-6 lg:mx-16 border-t border-green/15 flex-shrink-0" />

      {/* Two-column body: left sidebar + right card track */}
      <div className="flex flex-1 min-h-0">

        {/* Left: body copy + CTA + arrows pinned to bottom */}
        <div
          className="flex-shrink-0 px-6 lg:px-16 pt-8 pb-10 lg:pb-14 flex flex-col justify-between"
          style={{ width: 'clamp(260px, 28vw, 400px)' }}
        >
          <div>
            <p className="text-green/60 leading-relaxed mb-7">
              Each project we undertake is a reflection of bold creativity and refined elegance. Every space we create is carefully tailored to embody our clients&apos; unique vision while pushing the boundaries of modern landscape design.
            </p>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 text-orange font-ui font-bold text-base tracking-[0.2em] uppercase hover:underline underline-offset-2"
            >
              {ctaLabel}
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 -rotate-45" aria-hidden="true">
                <path d="M4 10h12M12 5l5 5-5 5" />
              </svg>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous project"
              className="w-11 h-11 border border-green/30 flex items-center justify-center text-green hover:bg-green hover:text-cream hover:border-green transition-colors duration-200 cursor-pointer"
              style={{ borderRadius: '50%' }}
            >
              <ArrowLeft />
            </button>
            <button
              onClick={next}
              aria-label="Next project"
              className="w-11 h-11 border border-green/30 flex items-center justify-center text-green hover:bg-green hover:text-cream hover:border-green transition-colors duration-200 cursor-pointer"
              style={{ borderRadius: '50%' }}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Right: card track — fills remaining width, bleeds off right edge */}
        <div ref={wrapRef} className="flex-1 min-w-0 overflow-hidden pt-8 pb-10 lg:pb-14 relative">
          {/* Left fade — only visible once user has scrolled past the first card */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none transition-opacity duration-500"
            style={{
              width: '120px',
              background: 'linear-gradient(to right, #e7e6d2, transparent)',
              opacity: rawIdx > CLONES ? 1 : 0,
            }}
          />
          {/* Right fade — always visible */}
          <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none" style={{ width: '120px', background: 'linear-gradient(to left, #e7e6d2, transparent)' }} />
          <div
            className="flex h-full"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${cardPx ? -rawIdx * (cardPx + GAP) : 0}px)`,
              transition: animate && cardPx ? 'transform 0.7s cubic-bezier(0.4,0,0.2,1)' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {items.map((project, i) => (
              <div
                key={`${project.img}-${i}`}
                className="relative flex-shrink-0 overflow-hidden h-full"
                style={{
                  width: cardPx ? `${cardPx}px` : '70%',
                  borderRadius: '32px',
                }}
              >
                <Image
                  src={project.img}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 65vw"
                  priority={i === CLONES}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  {project.location && (
                    <p className="text-sm text-white/65 uppercase tracking-[0.2em] mb-2">
                      {project.location}
                    </p>
                  )}
                  <p
                    className="text-white font-ui font-bold leading-tight"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 4rem)' }}
                  >
                    {project.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
