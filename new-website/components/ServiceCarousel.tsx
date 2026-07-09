'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { cdnToLocal } from '@/lib/mediaUrl'

/* ── Per-service SVG icons ────────────────────────────────────────── */

const HardscapeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
  </svg>
)
const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
)
const MaintenanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
  </svg>
)
const LightingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)
const WaterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C6 8 4 12 4 14.5a8 8 0 0 0 16 0C20 12 18 8 12 2z" />
    <path d="M9.5 16.5a3 3 0 0 0 5 0" />
  </svg>
)
const DrainageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 4l3 4h12l3-4H3z" /><path d="M6 8l2 5h8l2-5" />
    <path d="M10 13v7M14 13v7M10 20h4" />
  </svg>
)
const CommercialIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="14" height="16" /><path d="M16 7l4-4v20M2 23h20" />
    <rect x="5" y="11" width="3" height="3" /><rect x="10" y="11" width="3" height="3" />
    <rect x="5" y="17" width="3" height="3" /><rect x="10" y="17" width="3" height="3" />
  </svg>
)
const PlantingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22V12" />
    <path d="M12 12C12 12 8 9 8 5a4 4 0 0 1 8 0c0 4-4 7-4 7z" />
    <path d="M12 17c0 0 4-2 7 0M5 22h14" />
  </svg>
)

/* ── Service data (body copy from original design) ────────────────── */

const SERVICES = [
  {
    name: 'Hardscape Design',
    body: 'Our hardscapes are designed to be visually stunning and functional, and built to last a lifetime.',
    href: '/hardscape-northern-virginia',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bb276774b7c21ff399_Katie%20Bird%20Pool%205.jpg'),
    alt: 'Hardscape patio and stonework installation in Northern Virginia',
    Icon: HardscapeIcon,
  },
  {
    name: 'Landscape Design',
    body: 'As experts in landscape and hardscape design, we specialize in crafting durable and visually stunning outdoor spaces that enhance both functionality and aesthetics.',
    href: '/landscape-design-northern-virginia',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/681c9fd4dec20f523b550af0_design-img-2%20(1).webp'),
    alt: 'Custom landscape design project in Northern Virginia',
    Icon: DesignIcon,
  },
  {
    name: 'Landscape Maintenance',
    body: 'Transform your outdoor space into a living masterpiece that evolves beautifully through every season. Our curated maintenance packages ensure your landscape receives precisely what it needs, when it needs it.',
    href: '/landscape-maintenance-northern-virginia',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6822f6271cbe1867ff2caf42_MP-header-img-1%20(1).webp'),
    alt: 'Year-round landscape maintenance services in Northern Virginia',
    Icon: MaintenanceIcon,
  },
  {
    name: 'Landscape Lighting',
    body: 'Transform your property into an enchanting evening retreat with artfully designed landscape lighting that highlights your landscape\'s best features after dark.',
    href: '/landscape-lighting-northern-virginia',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/680f2d0d1148d166273a6347_design-1.webp'),
    alt: 'Professional landscape lighting design for outdoor spaces',
    Icon: LightingIcon,
  },
  {
    name: 'Ponds & Water Features',
    body: 'Transform your outdoor sanctuary with the timeless allure of moving water. From meditative koi ponds to dramatic waterfalls, we craft water features that engage all the senses.',
    href: '/water-features-northern-virginia',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682321dd71e368222af56712_pw-header-img-1%20(1).webp'),
    alt: 'Custom pond and water feature installation in Northern Virginia',
    Icon: WaterIcon,
  },
  {
    name: 'Drainage & Erosion',
    body: 'Where art meets engineering, we transform water challenges into opportunities for landscape enhancement. Our expertise ensures your property remains beautiful and structurally sound through every season.',
    href: '/drainage-solutions-northern-virginia',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68247d8f31ffd45cf0a28ba9_dec-header-img-2%20(1).webp'),
    alt: 'Drainage solution and erosion control landscaping in Northern Virginia',
    Icon: DrainageIcon,
  },
  {
    name: 'Commercial Landscaping',
    body: 'Transform your commercial property into a distinctive destination that welcomes, impresses, and adds value to your business investment. From corporate campuses to vibrant community spaces.',
    href: '/commercial-landscape-maintenance-virginia',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682313a1105c47482807f99e_commercial-signature-img%20(1).webp'),
    alt: 'Commercial landscape maintenance in Northern Virginia',
    Icon: CommercialIcon,
  },
  {
    name: 'Landscape Planting',
    body: 'From initial consultation through expert installation, we create custom planting designs with the right plants in the right places, thriving in Northern Virginia\'s climate for years to come.',
    href: '/landscape-planting-northern-virginia',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/681c9fc83f8047121576ac84_design-img-1%20(1).webp'),
    alt: 'Landscape planting and installation in Northern Virginia',
    Icon: PlantingIcon,
  },
]

const CARD_W = 280   // px
const GAP    = 16    // px
const STEP   = CARD_W + GAP   // 296px per position
const ADVANCE_MS = 1500       // hold time between steps
const TRANSITION_MS = 650     // slide duration

export type CarouselItem = {
  name: string
  body: string
  href: string
  img: string
  alt: string
}

const ICON_BY_HREF: Record<string, () => React.JSX.Element> = {
  '/hardscape-northern-virginia': HardscapeIcon,
  '/landscape-design-northern-virginia': DesignIcon,
  '/landscape-maintenance-northern-virginia': MaintenanceIcon,
  '/landscape-lighting-northern-virginia': LightingIcon,
  '/water-features-northern-virginia': WaterIcon,
  '/drainage-solutions-northern-virginia': DrainageIcon,
  '/commercial-landscape-maintenance-virginia': CommercialIcon,
  '/landscape-planting-northern-virginia': PlantingIcon,
}

/* Duplicate first N cards at the end for seamless forward loop */
const CLONES = 4

/* ── Arrow SVGs ───────────────────────────────────────────────────── */
const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
)
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-5 h-5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

/* ── Component ────────────────────────────────────────────────────── */

export default function ServiceCarousel({
  title = 'Our Other Services',
  items,
  useHeadings = false,
}: {
  title?: string
  items?: CarouselItem[]
  useHeadings?: boolean
}) {
  const list = items ?? SERVICES
  const clones = Math.min(CLONES, list.length)
  const extended = [...list, ...list.slice(0, clones)]
  const [index, setIndex]         = useState(0)
  const [animated, setAnimated]   = useState(true)   // controls CSS transition
  const pausedRef                 = useRef(false)
  const advanceRef                = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Schedule next auto-advance */
  const scheduleNext = useCallback(() => {
    if (advanceRef.current) clearTimeout(advanceRef.current)
    advanceRef.current = setTimeout(() => {
      if (!pausedRef.current) step(1)
    }, ADVANCE_MS)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  /* Move by delta (+1 or -1) */
  const step = useCallback((delta: number) => {
    setIndex(i => {
      const next = i + delta
      return next
    })
  }, [])

  /* Start auto-advance on mount */
  useEffect(() => {
    scheduleNext()
    return () => { if (advanceRef.current) clearTimeout(advanceRef.current) }
  }, [scheduleNext])

  /* Re-schedule after every index change */
  useEffect(() => {
    scheduleNext()
  }, [index, scheduleNext])

  /* Seamless forward loop: after the clone zone, jump back instantly */
  useEffect(() => {
    if (index >= list.length) {
      const id = setTimeout(() => {
        setAnimated(false)
        setIndex(i => i - list.length)
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)))
      }, TRANSITION_MS + 20)
      return () => clearTimeout(id)
    }
  }, [index])

  /* Seamless backward loop: before 0, jump to end-of-real cards */
  const handlePrev = () => {
    if (index <= 0) {
      setAnimated(false)
      const jumpTo = list.length
      setIndex(jumpTo)
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimated(true)
          setIndex(jumpTo - 1)
        })
      )
    } else {
      setIndex(i => i - 1)
    }
    if (advanceRef.current) clearTimeout(advanceRef.current)
  }

  const handleNext = () => {
    setIndex(i => i + 1)
    if (advanceRef.current) clearTimeout(advanceRef.current)
  }

  const normalised = ((index % list.length) + list.length) % list.length

  return (
    <section
      className="bg-green pb-10 pt-10"
      aria-label="Sunrise Landscape services"
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      {/* ── Heading ── */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 mb-8">
        <h2 className="font-ui not-italic font-bold text-cream leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          {title}
        </h2>
      </div>

      {/* ── Track ── */}
      <div className="overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none" style={{ width: '100px', background: 'linear-gradient(to right, #1e3526, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none" style={{ width: '100px', background: 'linear-gradient(to left, #1e3526, transparent)' }} />
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            paddingLeft: `${GAP}px`,
            transform: `translateX(-${index * STEP}px)`,
            transition: animated ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)` : 'none',
            willChange: 'transform',
          }}
        >
          {extended.map((svc, i) => {
            const Icon = ('Icon' in svc && (svc as { Icon?: () => React.JSX.Element }).Icon) || ICON_BY_HREF[svc.href] || DesignIcon
            const isClone = i >= list.length
            return (
              <Link
                key={i}
                href={svc.href}
                className="group flex-shrink-0 block overflow-hidden"
                style={{ width: `${CARD_W}px`, borderRadius: '16px' }}
                tabIndex={isClone ? -1 : 0}
                aria-hidden={isClone ? true : undefined}
              >
                {/* ── Photo + hover overlay ── */}
                <div className="relative overflow-hidden" style={{ height: '320px' }}>
                  <Image
                    src={svc.img}
                    alt={svc.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes={`${CARD_W}px`}
                    loading="lazy"
                  />

                  {/* Static bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

                  {/* Hover reveal — entire dark panel slides up from below the card */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <div
                      className="absolute inset-0 flex flex-col justify-end p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out overflow-hidden"
                      style={{ background: 'rgba(22, 43, 30, 0.95)' }}
                    >
                      <p className="section-label text-orange mb-3">{svc.name}</p>
                      <p className="text-cream leading-relaxed mb-4 line-clamp-4">{svc.body}</p>
                      <span className="inline-flex items-center gap-1.5 section-label text-orange">
                        Learn More
                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── Static info panel ── */}
                <div className="bg-[#162b1e] border-t border-white/10 px-5 pt-4 pb-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-orange flex-shrink-0" style={{ width: 18, height: 18 }}>
                      <Icon />
                    </span>
                    <span className="flex-1 h-px bg-orange/25" />
                  </div>
                  {useHeadings && !isClone ? (
                    <h3 className="font-ui text-[11px] font-bold text-cream uppercase tracking-[0.16em] leading-tight not-italic">
                      {svc.name}
                    </h3>
                  ) : (
                    <p className="font-ui text-[11px] font-bold text-cream uppercase tracking-[0.16em] leading-tight">
                      {svc.name}
                    </p>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* ── Arrow navigation + dot indicators ── */}
      <div className="flex items-center justify-center gap-5 mt-7">
        {/* Prev */}
        <button
          onClick={handlePrev}
          aria-label="Previous service"
          className="flex items-center justify-center border border-cream/25 text-cream hover:border-orange hover:text-orange transition-colors duration-200 cursor-pointer"
          style={{ width: 44, height: 44, borderRadius: '8px' }}
        >
          <ArrowLeft />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Service slides">
          {SERVICES.map((svc, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === normalised}
              aria-label={`Go to ${svc.name}`}
              onClick={() => {
                setIndex(i)
                if (advanceRef.current) clearTimeout(advanceRef.current)
              }}
              className="flex items-center justify-center cursor-pointer"
              style={{ height: '44px', padding: '0 4px' }}
            >
              <span className="block transition-all duration-300" style={{
                height: 4,
                width: i === normalised ? 20 : 6,
                background: i === normalised ? '#ff6400' : 'rgba(231,230,210,0.3)',
                borderRadius: '2px',
              }} />
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label="Next service"
          className="flex items-center justify-center border border-cream/25 text-cream hover:border-orange hover:text-orange transition-colors duration-200 cursor-pointer"
          style={{ width: 44, height: 44, borderRadius: '8px' }}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  )
}
