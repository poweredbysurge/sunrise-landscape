'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import heroBackground from './Background 2.png'
import InquiryForm from '@/components/InquiryForm'

interface GoogleReview {
  initial: string
  color: string
  name: string
  location: string
  text: string
}

const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    initial: 'C',
    color: '#4285F4',
    name: 'Chris',
    location: 'Reston',
    text: 'Got a new patio for the lower level of my townhome. Sunrise went the extra mile with drainage and used a combination of stone and pavers that came out looking great. Would use them again in a heartbeat.',
  },
  {
    initial: 'L',
    color: '#DB4437',
    name: 'Lisa and Rick',
    location: 'Aldie',
    text: 'We renovated our sidewalk and stoop and added a small patio and fire pit. Linda gave us detailed plans, and Brandon and his team worked diligently to deliver a beautiful, meticulous job.',
  },
  {
    initial: 'J',
    color: '#0F9D58',
    name: 'Jack',
    location: 'Oakton',
    text: "Sunrise transformed our plain yard into a stunning outdoor escape. From concept to completion, every detail was handled with care. We couldn't be happier!",
  },
]

export default function Hero3B() {
  const [reviewIdx, setReviewIdx] = useState(0)
  const [pastHero, setPastHero] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const review = GOOGLE_REVIEWS[reviewIdx]
  const reviewCount = GOOGLE_REVIEWS.length

  const heroCopy = (
    <div className="relative z-10 flex flex-col justify-start lg:justify-center gap-4 lg:gap-6 px-6 lg:px-14 py-0 lg:py-0">
      <p className="hidden lg:block section-label text-orange">
        Family Owned &middot; Sterling, Virginia &middot; Since 1986
      </p>
      <h1 className="text-cream leading-[1.02]" style={{ fontSize: 'clamp(2.6rem, 4.5vw, 6rem)' }}>
        Landscaping &amp; Hardscaping in Northern Virginia
      </h1>
      <p className="text-cream/85 text-lg leading-relaxed max-w-xl">
        Year-round maintenance plans, plus outdoor living projects when you&apos;re ready. Family
        owned, serving Northern Virginia since 1986. We respond in minutes.
      </p>
      <div className="flex items-center gap-6 flex-wrap">
        <Link href="/contact#form" className="btn-primary">
          <span>Get My Free Yard Inspection</span>
        </Link>
      </div>
      {/* Desktop trust bar */}
      <div className="hidden lg:flex items-center gap-6 flex-wrap pt-4 border-t border-cream/15 text-cream/75 text-sm">
        <div className="flex flex-col gap-0.5">
          <span className="text-cream font-bold">4.9 on Google</span>
          <span className="text-orange tracking-widest">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
        <div className="w-px h-4 bg-cream/20" />
        <div>Licensed &amp; Insured</div>
        <div className="w-px h-4 bg-cream/20" />
        <div>Since 1986</div>
      </div>

      {/* Mobile Google reviews carousel */}
      <div className="lg:hidden bg-white flex flex-col gap-5 p-6" style={{ borderRadius: '10px' }}>
        <div className="flex flex-col items-center gap-1.5 pb-4 border-b border-black/10 text-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </span>
            <span className="text-green/50 text-sm">Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green font-bold text-xl">4.9</span>
            <span className="text-orange text-base tracking-widest">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          </div>
        </div>
        <div className="flex items-start gap-3.5 text-left min-h-[120px]">
          <div
            className="w-9 h-9 flex-shrink-0 flex items-center justify-center text-white font-medium"
            style={{ borderRadius: '50%', background: review.color }}
          >
            {review.initial}
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="text-green font-medium text-sm">
              {review.name} &middot; {review.location}
            </div>
            <div className="text-orange text-xs tracking-widest">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="text-green/80 text-[13.5px] leading-relaxed">{review.text}</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => setReviewIdx((i) => (i - 1 + reviewCount) % reviewCount)}
            className="w-8 h-8 rounded-full border border-black/15 text-green/60 flex items-center justify-center"
          >
            &#8249;
          </button>
          <div className="flex gap-1.5">
            {GOOGLE_REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                onClick={() => setReviewIdx(i)}
                className="h-2 rounded-full transition-all duration-200"
                style={{ width: i === reviewIdx ? 20 : 8, background: i === reviewIdx ? '#ff6400' : 'rgba(30,53,38,0.2)' }}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => setReviewIdx((i) => (i + 1) % reviewCount)}
            className="w-8 h-8 rounded-full border border-black/15 text-green/60 flex items-center justify-center"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_clamp(460px,34vw,640px)] overflow-hidden pt-[160px] lg:pt-[140px]"
        style={{ backgroundColor: '#1e3526', minHeight: '100vh', paddingBottom: '64px' }}
      >
        <div className="absolute inset-0 z-0">
          <Image src={heroBackground} alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#1e3526]/45" />
        </div>

        {heroCopy}

        {/* Right: desktop-only inline form card */}
        <div id="hero-form" className="relative z-10 hidden lg:flex items-center px-6 lg:pr-12 py-10 lg:py-0">
          <div
            className="flex-1 bg-cream flex flex-col gap-5 p-8 shadow-2xl overflow-y-auto"
            style={{ borderRadius: '10px', height: 'clamp(520px, 62vh, 680px)' }}
          >
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Mobile-only sticky CTA, shown once the hero has scrolled out of view */}
      {pastHero && (
        <div
          className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-4 pt-3"
          style={{ backgroundColor: '#141414', paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <Link
            href="/contact#form"
            className="w-full flex items-center justify-center gap-2 bg-orange text-white font-ui font-bold text-sm tracking-wider uppercase px-7 rounded-lg cursor-pointer active:scale-[0.96] active:opacity-90 transition-transform"
            style={{ minHeight: '44px' }}
          >
            <span>Get My Free Yard Inspection</span>
          </Link>
        </div>
      )}
    </>
  )
}
