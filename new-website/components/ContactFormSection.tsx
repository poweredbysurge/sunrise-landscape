'use client'

import { useState, FormEvent } from 'react'

type FormData = {
  firstName: string
  lastName: string
  email: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
  phone: string
  services: string
  referralSource: string
}

const TOTAL_STEPS = 4

const REFERRAL_OPTIONS = [
  'From an internet search',
  'Social media',
  'From a friend or neighbor',
  'Drove by a project',
  'Home show or event',
  'Other',
]

const STEP_HEADINGS = [
  "Let’s talk vision",
  "Where’s Your Project?",
  "Let’s Get Into the Details",
  "Final Touches",
]

function TopoLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <path d="M-50 500 C80 460,200 400,340 430 S520 490,680 450 S820 400,900 420" stroke="white" strokeOpacity="0.055" strokeWidth="1.5" />
      <path d="M-50 440 C80 400,200 340,340 370 S520 430,680 390 S820 340,900 360" stroke="white" strokeOpacity="0.055" strokeWidth="1.5" />
      <path d="M-50 380 C80 340,200 280,340 310 S520 370,680 330 S820 280,900 300" stroke="white" strokeOpacity="0.055" strokeWidth="1.5" />
      <path d="M-50 560 C80 520,200 460,340 490 S520 550,680 510 S820 460,900 480" stroke="white" strokeOpacity="0.045" strokeWidth="1.5" />
      <path d="M-50 320 C80 280,200 220,340 250 S520 310,680 270 S820 220,900 240" stroke="white" strokeOpacity="0.045" strokeWidth="1.5" />
      <path d="M100 620 C220 580,360 530,460 550 S620 600,780 570" stroke="white" strokeOpacity="0.04" strokeWidth="1.5" />
      <path d="M-50 260 C80 220,200 160,340 190 S520 250,680 210 S820 160,900 180" stroke="white" strokeOpacity="0.035" strokeWidth="1.5" />
    </svg>
  )
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = true,
}: {
  label: string
  name: keyof FormData
  type?: string
  value: string
  onChange: (name: keyof FormData, value: string) => void
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-cream mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={e => onChange(name, e.target.value)}
        required={required}
        className="w-full bg-transparent border-0 border-b border-cream/35 pb-3 text-cream text-base outline-none focus:border-cream/75 transition-colors duration-200"
      />
    </div>
  )
}

export default function ContactFormSection() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>({
    firstName: '', lastName: '', email: '',
    streetAddress: '', city: '', state: '', zipCode: '',
    phone: '', services: '', referralSource: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const update = (name: keyof FormData, value: string) =>
    setData(prev => ({ ...prev, [name]: value }))

  const handleNext = async (e: FormEvent) => {
    e.preventDefault()
    if (step < TOTAL_STEPS) {
      setStep(s => s + 1)
    } else {
      setSubmitting(true)
      setSubmitError(null)
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error('Failed to send')
        setSubmitted(true)
      } catch {
        setSubmitError('Something went wrong. Please call us at 703-544-0028.')
      } finally {
        setSubmitting(false)
      }
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(s => s - 1)
  }

  return (
    <section className="bg-cream py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: typography */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2
              className="text-green leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 5vw, 4.5rem)' }}
            >
              Let&apos;s get<br />
              <span className="editorial-display">started</span> in<br />
              making your<br />
              dream a<br />
              <span className="editorial-display">reality.</span>
            </h2>
          </div>

          {/* Right: form card */}
          <div
            className="relative overflow-hidden"
            style={{ backgroundColor: '#1e3526', borderRadius: '16px', border: '1.5px solid rgba(30,53,38,0.22)' }}
          >
            <TopoLines />

            {/* Step tabs */}
            <div className="relative z-10 grid grid-cols-4">
              {[1, 2, 3, 4].map(s => (
                <div
                  key={s}
                  className="py-4 text-center text-xs font-ui font-bold tracking-widest uppercase transition-colors"
                  style={{
                    backgroundColor: step === s ? '#e7e6d2' : 'transparent',
                    color: step === s ? '#1e3526' : '#e7e6d2',
                    borderRadius: step === s && s === 1
                      ? '16px 0 0 0'
                      : step === s && s === 4
                        ? '0 16px 0 0'
                        : undefined,
                  }}
                >
                  {step > s ? `Step ${s}` : `STEP ${s}`}
                </div>
              ))}
              {/* Bottom border under tabs */}
              <div className="col-span-4 h-px bg-white/10" />
            </div>

            {/* Form body — fixed height so the card never grows or shrinks */}
            <form onSubmit={handleNext}>
              <div className="relative z-10 px-8 lg:px-10 pt-10 pb-8 flex flex-col" style={{ height: '560px' }}>
                {submitted ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <p className="text-cream text-sm tracking-widest uppercase text-orange mb-4">Success</p>
                    <h3
                      className="text-cream mb-4 leading-tight"
                      style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}
                    >
                      We&apos;ll be in touch soon.
                    </h3>
                    <p className="text-cream">
                      Thank you for reaching out. Our team will contact you within 24 hours to schedule your free consultation.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Heading — fixed, never scrolls */}
                    <h3
                      className="flex-shrink-0 text-cream mb-8 leading-tight"
                      style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
                    >
                      {STEP_HEADINGS[step - 1].split(' ').map((word, i) => {
                        const italicWords = ['vision', 'Project?', 'Details', 'Touches']
                        return italicWords.includes(word)
                          ? <span key={i} className="editorial-display"> {word}</span>
                          : <span key={i}> {word}</span>
                      })}
                    </h3>

                    {/* Fields — flex-1 so navigation stays pinned at bottom */}
                    <div className="flex-1 space-y-7 overflow-hidden">
                      {step === 1 && (
                        <>
                          <Field label="First Name" name="firstName" value={data.firstName} onChange={update} />
                          <Field label="Last Name" name="lastName" value={data.lastName} onChange={update} />
                          <Field label="Email Address" name="email" type="email" value={data.email} onChange={update} />
                        </>
                      )}
                      {step === 2 && (
                        <>
                          <Field label="Street Address" name="streetAddress" value={data.streetAddress} onChange={update} />
                          <Field label="City" name="city" value={data.city} onChange={update} />
                          <Field label="State" name="state" value={data.state} onChange={update} />
                          <Field label="Zip Code" name="zipCode" value={data.zipCode} onChange={update} />
                        </>
                      )}
                      {step === 3 && (
                        <>
                          <Field label="Phone Number" name="phone" type="tel" value={data.phone} onChange={update} />
                          <Field label="What services are you looking for?" name="services" value={data.services} onChange={update} />
                        </>
                      )}
                      {step === 4 && (
                        <div>
                          <label htmlFor="referralSource" className="block text-cream mb-2">
                            How did you hear about us?
                          </label>
                          <div className="relative">
                            <select
                              id="referralSource"
                              value={data.referralSource || ''}
                              onChange={e => update('referralSource', e.target.value)}
                              className="w-full bg-transparent border-0 border-b border-cream/35 pb-3 text-cream text-base outline-none focus:border-cream/75 transition-colors duration-200 appearance-none cursor-pointer"
                              required
                              style={{ backgroundColor: 'transparent' }}
                            >
                              <option value="" disabled style={{ background: '#1e3526' }}>Select one...</option>
                              {REFERRAL_OPTIONS.map(o => (
                                <option key={o} value={o} style={{ background: '#1e3526' }}>{o}</option>
                              ))}
                            </select>
                            <svg className="absolute right-0 bottom-4 w-4 h-4 text-cream pointer-events-none" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M6 8l4 4 4-4" strokeLinecap="round" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Navigation — always pinned to bottom */}
                    <div className="flex-shrink-0 pt-6 border-t border-cream/10">
                      {submitError && (
                        <p className="text-orange text-sm mb-3">{submitError}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="inline-flex items-center min-h-[44px] text-cream text-sm font-ui font-bold tracking-widest uppercase hover:text-orange transition-colors cursor-pointer"
                        >
                          CANCEL
                        </button>
                        <div className="flex items-center gap-6">
                          {step > 1 && (
                            <button
                              type="button"
                              onClick={handleBack}
                              className="inline-flex items-center gap-2 min-h-[44px] text-cream text-sm font-ui font-bold tracking-widest uppercase hover:text-orange transition-colors cursor-pointer"
                            >
                              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M16 10H4M8 5l-5 5 5 5" />
                              </svg>
                              BACK
                            </button>
                          )}
                          <button
                            type="submit"
                            disabled={submitting}
                            className="inline-flex items-center gap-2 min-h-[44px] text-cream text-sm font-ui font-bold tracking-widest uppercase hover:text-orange transition-colors cursor-pointer disabled:opacity-50"
                          >
                            {submitting ? 'SENDING...' : step === TOTAL_STEPS ? 'LETS TALK' : 'NEXT'}
                            {!submitting && (
                              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 ${step === TOTAL_STEPS ? 'rotate-45' : ''}`}>
                                <path d="M4 10h12M12 5l5 5-5 5" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
