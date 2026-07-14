'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'

type ServiceKey = 'maintenance' | 'project' | 'commercial' | 'notsure'

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

const SERVICES: { key: ServiceKey; label: string; sub: string }[] = [
  { key: 'maintenance', label: 'Maintenance', sub: 'Year-round care plans' },
  { key: 'project', label: 'Project', sub: 'Patios, plantings, outdoor living' },
  { key: 'commercial', label: 'Commercial', sub: 'HOA & business properties' },
  { key: 'notsure', label: 'Not sure', sub: "We'll point you the right way" },
]

const HEAR_OPTIONS = [
  'From an internet search',
  'Word of mouth',
  'Instagram',
  'Facebook',
  'Local publication',
  'Door hanger',
  'Direct mail',
  'Other',
]

function ctaFor(svc: ServiceKey | null) {
  if (svc === 'project') return 'Start My Project Conversation'
  if (svc === 'commercial') return 'Talk To Our Commercial Team'
  return 'Get My Free Yard Inspection'
}

interface FieldsState {
  street: string
  city: string
  state: string
  zip: string
  firstName: string
  lastName: string
  phone: string
  email: string
  notes: string
}

const EMPTY_FIELDS: FieldsState = {
  street: '', city: '', state: 'VA', zip: '',
  firstName: '', lastName: '', phone: '', email: '', notes: '',
}

export default function Hero3B() {
  const [step, setStep] = useState(1)
  const [svc, setSvc] = useState<ServiceKey | null>(null)
  const [hear, setHear] = useState<string | null>(null)
  const [fields, setFields] = useState<FieldsState>(EMPTY_FIELDS)
  const [showModal, setShowModal] = useState(false)
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

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showModal])

  const update = (name: keyof FieldsState, value: string) =>
    setFields((prev) => ({ ...prev, [name]: value }))

  const reset = () => {
    setStep(1)
    setSvc(null)
    setHear(null)
    setFields(EMPTY_FIELDS)
  }

  const openForm = () => setShowModal(true)

  const handleCtaClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      e.preventDefault()
      openForm()
    }
  }

  const inputClass =
    'w-full bg-white border border-green/25 text-green font-ui text-[15px] px-3.5 py-3 outline-none placeholder:text-green/40 focus:border-orange transition-colors'

  const review = GOOGLE_REVIEWS[reviewIdx]
  const reviewCount = GOOGLE_REVIEWS.length

  const heroCopy = (
    <div className="flex flex-col justify-start lg:justify-center gap-4 lg:gap-6 px-6 lg:px-14 py-0 lg:py-0">
      <p className="hidden lg:block section-label text-orange">
        Family Owned &middot; Sterling, Virginia &middot; Since 1986
      </p>
      <h1 className="text-cream leading-[1.02]" style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)' }}>
        Landscaping in Northern Virginia
      </h1>
      <p className="text-cream/85 text-lg leading-relaxed max-w-xl">
        Year-round maintenance plans, plus outdoor living projects when you&apos;re ready. Family
        owned, serving Northern Virginia since 1986. We respond in minutes.
      </p>
      <div className="flex items-center gap-6 flex-wrap">
        <a href="#hero-form" onClick={handleCtaClick} className="btn-primary">
          <span>Get My Free Yard Inspection</span>
        </a>
      </div>
      <a
        href="#hero-form"
        onClick={handleCtaClick}
        className="text-cream/60 text-sm underline underline-offset-4 hover:text-cream transition-colors w-fit"
      >
        Planning a bigger project? Start here
      </a>

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

  const formSteps = (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="h-2 rounded-full transition-all duration-200"
              style={{
                width: step === n ? 22 : 8,
                background: step === n ? '#ff6400' : 'rgba(30,53,38,0.2)',
              }}
            />
          ))}
        </div>
        <div className="font-mono text-xs text-green/50">
          {step <= 4 ? `Question ${step} of 4` : 'Done'}
        </div>
      </div>

      {step === 1 && (
            <div className="flex flex-col gap-3.5 flex-1">
              <h2 className="text-green" style={{ fontSize: '1.9rem' }}>
                What does your yard need?
              </h2>
              <div className="flex flex-col gap-2.5">
                {SERVICES.map((s) => {
                  const active = svc === s.key
                  return (
                    <button
                      key={s.key}
                      type="button"
                      onClick={() => {
                        setSvc(s.key)
                        setStep(2)
                      }}
                      className="text-left px-4 py-3.5 border transition-colors"
                      style={{
                        borderRadius: 8,
                        borderColor: active ? '#ff6400' : 'rgba(30,53,38,0.25)',
                        borderWidth: active ? 1.5 : 1,
                        background: active ? 'rgba(255,100,0,0.08)' : '#fff',
                      }}
                    >
                      <div className="font-bold text-[16px] text-green">{s.label}</div>
                      <div className="text-[13px] text-green/65">{s.sub}</div>
                    </button>
                  )
                })}
              </div>
              <div className="flex-1" />
              <p className="text-[17px] font-bold text-green text-center">
                4 quick questions &middot; 30 seconds
              </p>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-3.5 flex-1">
              <h2 className="text-green" style={{ fontSize: '1.9rem' }}>
                Where&apos;s the property?
              </h2>
              <input
                placeholder="Street address"
                value={fields.street}
                onChange={(e) => update('street', e.target.value)}
                className={inputClass}
              />
              <input
                placeholder="City"
                value={fields.city}
                onChange={(e) => update('city', e.target.value)}
                className={inputClass}
              />
              <div className="grid grid-cols-[1fr_120px] gap-2.5">
                <input
                  placeholder="State"
                  value={fields.state}
                  onChange={(e) => update('state', e.target.value)}
                  className={inputClass}
                />
                <input
                  placeholder="Zip code"
                  value={fields.zip}
                  onChange={(e) => update('zip', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div className="flex-1" />
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-orange text-cream text-center font-bold text-sm tracking-wider uppercase py-4 hover:brightness-95 transition-all"
                style={{ borderRadius: 4 }}
              >
                Next &rarr;
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-green/50 underline text-center"
              >
                &larr; Back
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-3.5 flex-1">
              <h2 className="text-green" style={{ fontSize: '1.9rem' }}>
                How do we reach you?
              </h2>
              <div className="grid grid-cols-2 gap-2.5">
                <input
                  placeholder="First name"
                  value={fields.firstName}
                  onChange={(e) => update('firstName', e.target.value)}
                  className={inputClass}
                />
                <input
                  placeholder="Last name"
                  value={fields.lastName}
                  onChange={(e) => update('lastName', e.target.value)}
                  className={inputClass}
                />
              </div>
              <input
                placeholder="Phone number (required)"
                type="tel"
                value={fields.phone}
                onChange={(e) => update('phone', e.target.value)}
                className={`${inputClass} border-orange`}
                style={{ borderWidth: 1.5 }}
              />
              <input
                placeholder="Email (optional)"
                type="email"
                value={fields.email}
                onChange={(e) => update('email', e.target.value)}
                className={inputClass}
              />
              <div className="flex-1" />
              <button
                type="button"
                disabled={!fields.phone.trim()}
                onClick={() => setStep(4)}
                className="bg-orange text-cream text-center font-bold text-sm tracking-wider uppercase py-4 hover:brightness-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ borderRadius: 4 }}
              >
                Next &rarr;
              </button>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-green/50 underline text-center"
              >
                &larr; Back
              </button>
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-green" style={{ fontSize: '2.1rem' }}>
                Final Touches
              </h2>
              <p className="text-xs font-bold text-green/60">How did you hear about us?</p>
              <div className="flex flex-wrap gap-2">
                {HEAR_OPTIONS.map((opt) => {
                  const active = hear === opt
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setHear(opt)}
                      className="text-[13px] font-bold px-3.5 py-1.5 whitespace-nowrap transition-colors"
                      style={{
                        borderRadius: 999,
                        border: active ? '1.5px solid #ff6400' : '1px solid rgba(30,53,38,0.3)',
                        background: active ? '#ff6400' : 'transparent',
                        color: active ? '#e7e6d2' : '#1e3526',
                      }}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              <textarea
                placeholder="Anything else we should know? (optional)"
                value={fields.notes}
                onChange={(e) => update('notes', e.target.value)}
                className={`${inputClass} resize-none`}
                style={{ height: 80 }}
              />
              <div className="flex-1" />
              <button
                type="button"
                onClick={() => setStep(5)}
                className="bg-orange text-cream text-center font-bold text-sm tracking-wider uppercase py-4 hover:brightness-95 transition-all"
                style={{ borderRadius: 4 }}
              >
                {ctaFor(svc)}
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="text-xs text-green/50 underline text-center"
              >
                &larr; Back
              </button>
            </div>
          )}

          {step === 5 && (
            <div className="flex flex-col gap-4 flex-1 items-center justify-center text-center">
              <div
                className="w-14 h-14 flex items-center justify-center text-cream text-2xl"
                style={{ borderRadius: '50%', background: '#1c7a3e' }}
              >
                &#10003;
              </div>
              <h2 className="text-green" style={{ fontSize: '2.1rem' }}>
                You&apos;re on the books.
              </h2>
              <p className="text-green/70 leading-relaxed max-w-xs">
                We&apos;ll call you in minutes. If it&apos;s after hours, you&apos;re first thing tomorrow.
              </p>
              <button type="button" onClick={reset} className="text-xs text-green/50 underline">
                &rsaquo; start over
              </button>
            </div>
          )}
    </>
  )

  return (
    <>
      <section
        ref={heroRef}
        className="relative w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_560px]"
        style={{ backgroundColor: '#1e3526', minHeight: '90vh', paddingTop: '150px', paddingBottom: '64px' }}
      >
        {heroCopy}

        {/* Right: desktop-only inline form card */}
        <div id="hero-form" className="hidden lg:flex items-center px-6 lg:pr-12 py-10 lg:py-0">
          <div
            className="flex-1 bg-cream flex flex-col gap-5 p-8 shadow-2xl overflow-y-auto"
            style={{ borderRadius: '10px', height: 560 }}
          >
            {formSteps}
          </div>
        </div>
      </section>

      {/* Mobile-only full-screen form modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-cream flex flex-col lg:hidden" style={{ height: '100dvh' }}>
          <div className="flex items-center justify-end px-5 pt-5 flex-shrink-0">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              aria-label="Close"
              className="w-9 h-9 rounded-full bg-green/10 text-green text-xl flex items-center justify-center"
            >
              &times;
            </button>
          </div>
          <div className="flex-1 flex flex-col gap-5 px-6 pb-8 overflow-y-auto">
            {formSteps}
          </div>
        </div>
      )}

      {/* Mobile-only sticky CTA, shown once the hero has scrolled out of view */}
      {pastHero && !showModal && (
        <div
          className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-4 pt-3"
          style={{ backgroundColor: '#1e3526', paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
        >
          <button type="button" onClick={openForm} className="btn-primary w-full flex">
            <span>Get My Free Yard Inspection</span>
          </button>
        </div>
      )}
    </>
  )
}
