'use client'

import { useState, useCallback, useRef, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export type GalleryImage = { src: string; alt: string }
export type Project = {
  img: string
  alt: string
  name: string
  location: string
  /** Full photo gallery for the lightbox. Falls back to just [img] when omitted. */
  images?: GalleryImage[]
}

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

  // Lightbox state: which project (real index) is open, and which photo within its gallery
  const [lightboxProject, setLightboxProject] = useState<number | null>(null)
  const [lightboxImg, setLightboxImg] = useState(0)

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

  const openLightbox = useCallback((realIndex: number) => {
    setLightboxProject(realIndex)
    setLightboxImg(0)
  }, [])

  const closeLightbox = useCallback(() => setLightboxProject(null), [])

  const gallery = useMemo(() => {
    if (lightboxProject === null) return []
    const p = projects[lightboxProject]
    return p.images && p.images.length > 0 ? p.images : [{ src: p.img, alt: p.alt }]
  }, [lightboxProject, projects])

  const prevImg = useCallback(() => {
    setLightboxImg(i => (i - 1 + gallery.length) % gallery.length)
  }, [gallery.length])

  const nextImg = useCallback(() => {
    setLightboxImg(i => (i + 1) % gallery.length)
  }, [gallery.length])

  // Keyboard nav + body scroll lock while the lightbox is open
  useEffect(() => {
    if (lightboxProject === null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImg()
      if (e.key === 'ArrowRight') nextImg()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxProject, closeLightbox, prevImg, nextImg])

  const activeProject = lightboxProject !== null ? projects[lightboxProject] : null

  return (
    <section className="bg-cream flex flex-col overflow-hidden lg:h-[100svh]">

      {/* Full-width heading */}
      <div className="px-6 lg:px-16 pt-10 lg:pt-16 pb-4 lg:pb-5 flex-shrink-0">
        <h2 className="text-green leading-none" style={{ fontSize: 'clamp(3rem, 5.5vw, 4.5rem)' }}>
          {title}
        </h2>
      </div>

      {/* Divider */}
      <div className="mx-6 lg:mx-16 border-t border-green/15 flex-shrink-0" />

      {/* Body: stacked on mobile, two-column on desktop */}
      <div className="flex flex-col lg:flex-row flex-1 min-h-0">

        {/* Copy + CTA + arrows */}
        <div className="flex-shrink-0 w-full lg:w-[clamp(260px,28vw,400px)] px-6 lg:px-16 pt-6 pb-6 lg:pt-8 lg:pb-14 flex flex-col gap-6 lg:gap-0 lg:justify-between">
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

        {/* Card track — full-width stacked carousel on mobile, bleeds off right edge on desktop */}
        <div
          ref={wrapRef}
          className="w-full lg:flex-1 lg:min-w-0 overflow-hidden pb-8 lg:pt-8 lg:pb-14 relative h-[78vw] max-h-[440px] lg:h-full lg:max-h-none"
        >
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
            {items.map((project, i) => {
              const realIndex = ((i - CLONES) % total + total) % total
              return (
                <button
                  key={`${project.img}-${i}`}
                  type="button"
                  onClick={() => openLightbox(realIndex)}
                  aria-label={`View gallery for ${project.name}`}
                  className="relative flex-shrink-0 overflow-hidden h-full text-left cursor-pointer group appearance-none border-0 bg-transparent p-0 m-0"
                  style={{
                    width: cardPx ? `${cardPx}px` : '70%',
                    borderRadius: '32px',
                  }}
                >
                  <Image
                    src={project.img}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                </button>
              )
            })}
          </div>
        </div>

      </div>

      {/* Lightbox */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.name} photo gallery`}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className="w-5 h-5">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prevImg() }}
                aria-label="Previous photo"
                className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowLeft />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); nextImg() }}
                aria-label="Next photo"
                className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowRight />
              </button>
            </>
          )}

          <div
            className="flex-1 min-h-0 flex items-center justify-center px-4 lg:px-24 pt-20 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-5xl">
              <Image
                src={gallery[lightboxImg].src}
                alt={gallery[lightboxImg].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
          </div>

          <div className="flex-shrink-0 text-center text-cream px-4 pb-3">
            <p className="font-ui font-bold">{activeProject.name}</p>
            {activeProject.location && (
              <p className="text-sm text-cream/60">{activeProject.location}</p>
            )}
          </div>

          {gallery.length > 1 && (
            <div
              className="flex-shrink-0 flex justify-center gap-3 pb-6 px-4 overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {gallery.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setLightboxImg(i)}
                  aria-label={`Go to photo ${i + 1}`}
                  className="relative flex-shrink-0 w-20 h-14 lg:w-24 lg:h-16 overflow-hidden cursor-pointer"
                  style={{ borderRadius: '8px', border: i === lightboxImg ? '2px solid #ff6400' : '2px solid transparent' }}
                >
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="100px" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
