'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cdnToLocal } from '@/lib/mediaUrl'
import { loadGsap } from '@/lib/loadGsap'

const DEEP = '#101f16'
const PANEL = '#162b1e'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)

const SERVICES = [
  {
    heading: 'Hardscape Design Services',
    body: 'Our hardscapes are designed to be visually stunning and functional, and built to last a lifetime.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bb276774b7c21ff399_Katie%20Bird%20Pool%205.jpg'),
    alt: 'Hardscape patio and stonework installation in Northern Virginia',
    href: '/hardscape-northern-virginia',
  },
  {
    heading: 'Landscape Design Services',
    body: 'As experts in landscape and hardscape design, we specialize in crafting durable and visually stunning outdoor spaces that enhance both functionality and aesthetics.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/681c9fd4dec20f523b550af0_design-img-2%20(1).webp'),
    alt: 'Custom landscape design project in Northern Virginia',
    href: '/landscape-design-northern-virginia',
  },
  {
    heading: 'Landscape Maintenance Services',
    body: 'Transform your outdoor space into a living masterpiece that evolves beautifully through every season. Our curated maintenance packages ensure your landscape receives precisely what it needs, when it needs it.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6822f6271cbe1867ff2caf42_MP-header-img-1%20(1).webp'),
    alt: 'Year-round landscape maintenance services in Northern Virginia',
    href: '/landscape-maintenance-northern-virginia',
  },
  {
    heading: 'Landscape Lighting Design',
    body: 'Transform your property into an enchanting evening retreat with artfully designed landscape lighting.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/680f2d0d1148d166273a6347_design-1.webp'),
    alt: 'Professional landscape lighting design for outdoor spaces',
    href: '/landscape-lighting-northern-virginia',
  },
  {
    heading: 'Ponds & Water Feature',
    body: 'Transform your outdoor sanctuary with the timeless allure of moving water. From meditative koi ponds to dramatic waterfalls, we craft water features that engage all the senses and create year-round interest in your landscape.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682321dd71e368222af56712_pw-header-img-1%20(1).webp'),
    alt: 'Custom pond and water feature installation in Northern Virginia',
    href: '/water-features-northern-virginia',
  },
  {
    heading: 'Drainage & Erosion Control',
    body: 'Where art meets engineering, we transform water challenges into opportunities for landscape enhancement. Our expertise ensures your property remains beautiful and structurally sound through every season.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68247d8f31ffd45cf0a28ba9_dec-header-img-2%20(1).webp'),
    alt: 'Drainage solution and erosion control landscaping in Northern Virginia',
    href: '/drainage-solutions-northern-virginia',
  },
  {
    heading: 'Commercial Landscaping',
    body: 'Transform your commercial property into a distinctive destination that welcomes, impresses, and adds value to your business investment. From corporate campuses to vibrant community spaces, we bring our signature blend of artistic vision and professional excellence to every commercial project.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682313a1105c47482807f99e_commercial-signature-img%20(1).webp'),
    alt: 'Commercial landscape maintenance in Northern Virginia',
    href: '/commercial-landscape-maintenance-virginia',
  },
]

export default function ServicesGrid() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const section = sectionRef.current
    if (!wrapper || !section) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let cancelled = false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any = null
    let refreshTimer: ReturnType<typeof setTimeout> | null = null

    loadGsap()
      .then(gsap => {
        if (cancelled) return
        const ScrollTrigger = window.ScrollTrigger

        ctx = gsap.context(() => {
          /* Generic reveals */
          ;(gsap.utils.toArray('[data-sg-reveal]') as HTMLElement[]).forEach(el => {
            gsap.fromTo(
              el,
              { y: 44, opacity: 0 },
              {
                y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 86%', once: true },
              }
            )
          })

          /* CSS-sticky horizontal gallery — desktop only.
             We do NOT use pin:true so GSAP never re-parents the section
             element, which would cause React removeChild errors on unmount. */
          const mm = gsap.matchMedia()
          mm.add('(min-width: 1024px)', () => {
            const track = section.querySelector<HTMLElement>('[data-sg-track]')
            const viewport = section.querySelector<HTMLElement>('[data-sg-viewport]')
            if (!track || !viewport) return

            const getDistance = () => track.scrollWidth - viewport.clientWidth

            /* Make the section sticky via JS so mobile is unaffected */
            section.style.position = 'sticky'
            section.style.top = '0'
            section.style.height = '100vh'

            /* Give the wrapper enough height to create scroll space */
            const updateWrapperHeight = () => {
              wrapper.style.height = `${window.innerHeight + getDistance()}px`
            }
            updateWrapperHeight()
            window.addEventListener('resize', updateWrapperHeight)

            /* Translate track based on wrapper's scroll progress */
            gsap.to(track, {
              x: () => -getDistance(),
              ease: 'none',
              scrollTrigger: {
                trigger: wrapper,
                start: 'top top',
                end: () => `+=${getDistance()}`,
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            })

            const refresh = () => (ScrollTrigger as { refresh: () => void } | undefined)?.refresh?.()
            refreshTimer = setTimeout(refresh, 300)

            return () => {
              window.removeEventListener('resize', updateWrapperHeight)
              wrapper.style.height = ''
              section.style.position = ''
              section.style.top = ''
              section.style.height = ''
            }
          })
        }, section)
      })
      .catch(() => { /* GSAP unavailable — stays static */ })

    return () => {
      cancelled = true
      if (refreshTimer) clearTimeout(refreshTimer)
      try { ctx?.revert() } catch (_) { /* ignore */ }
    }
  }, [])

  return (
    <div ref={wrapperRef}>
      <section ref={sectionRef} className="relative overflow-hidden" style={{ background: DEEP }}>
        {/* Header */}
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8 pt-14 pb-4 lg:pb-8">
          <h2 data-sg-reveal className="text-cream" style={{ fontSize: 'clamp(2rem, 4.5vw, 4.2rem)', lineHeight: 1.05 }}>
            {'Where Vision ‍ meets craftsmanship.'}
          </h2>
        </div>

        {/* Scroll track */}
        <div data-sg-viewport className="va-scroll-x overflow-x-auto lg:overflow-hidden pb-10 pt-5">
          <div data-sg-track className="flex w-max gap-5 lg:gap-8 px-5 lg:px-8 items-stretch">
            {SERVICES.map((svc, i) => (
              <article
                key={svc.heading}
                className="va-snap relative flex-shrink-0 flex flex-col overflow-hidden"
                style={{ width: 'min(82vw, 420px)', background: PANEL, borderRadius: '20px' }}
              >
                <div className="relative" style={{ height: '220px' }}>
                  <Image src={svc.img} alt={svc.alt} fill className="object-cover" sizes="(min-width: 1024px) 420px, 82vw" loading="lazy" />
                </div>
                <div className="flex flex-col flex-1 p-6 lg:p-7">
                  <h3 className="text-cream mb-3" style={{ fontSize: '1.45rem', lineHeight: 1.2 }}>{svc.heading}</h3>
                  <p className="text-cream leading-relaxed mb-5 flex-1">{svc.body}</p>
                  <Link href={svc.href} className="inline-flex items-center gap-2 min-h-[44px] section-label text-orange hover:text-cream transition-colors duration-200">
                    Learn more <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}

            {/* End CTA card */}
            <Link
              href="/contact"
              className="va-snap relative flex-shrink-0 flex flex-col items-center justify-center text-center p-10 group"
              style={{ width: 'min(82vw, 420px)', background: '#ff6400', borderRadius: '20px' }}
            >
              <span className="font-display italic text-green block mb-4" style={{ fontSize: '2.2rem', lineHeight: 1.1 }}>
                Have a project in mind?
              </span>
              <span className="section-label text-green inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200">
                Get a free consultation <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
