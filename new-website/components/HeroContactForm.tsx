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
  "Let's talk vision",
  "Where's Your Project?",
  "Let's Get Into the Details",
  "Final Touches",
]

function TopoLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <path d="M-50 420 C80 380,200 320,340 350 S520 410,680 370 S820 320,900 340" stroke="white" strokeOpacity="0.055" strokeWidth="1.5" />
      <path d="M-50 360 C80 320,200 260,340 290 S520 350,680 310 S820 260,900 280" stroke="white" strokeOpacity="0.055" strokeWidth="1.5" />
      <path d="M-50 300 C80 260,200 200,340 230 S520 290,680 250 S820 200,900 220" stroke="white" strokeOpacity="0.045" strokeWidth="1.5" />
      <path d="M-50 480 C80 440,200 380,340 410 S520 470,680 430 S820 380,900 400" stroke="white" strokeOpacity="0.04" strokeWidth="1.5" />
      <path d="M-50 240 C80 200,200 140,340 170 S520 230,680 190 S820 140,900 160" stroke="white" strokeOpacity="0.035" strokeWidth="1.5" />
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
      <label htmlFor={`hero-${name}`} className="block text-cream text-xs mb-1.5">
        {label}
      </label>
      <input
        id={`hero-${name}`}
        name={name}
        type={type}
        value={value}
        onChange={e => onChange(name, e.target.value)}
        required={required}
        className="w-full bg-transparent border-0 border-b border-cream/35 pb-2.5 text-cream text-sm outline-none focus:border-cream/75 transition-colors duration-200"
      />
    </div>
  )
}

export default function HeroContactForm() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>({
    firstName: '', lastName: '', email: '',
    streetAddress: '', city: '', state: '', zipCode: '',
    phone: '', services: '', referralSource: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (name: keyof FormData, value: string) =>
    setData(prev => ({ ...prev, [name]: value }))

  const handleNext = (e: FormEvent) => {
    e.preventDefault()
    if (step < TOTAL_STEPS) {
      setStep(s => s + 1)
    } else {
      setSubmitted(true)
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(s => s - 1)
  }

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{ backgroundColor: '#1e3526', borderRadius: '16px', border: '1.5px solid rgba(231,230,210,0.14)' }}
    >
      <TopoLines />

      {/* Step tabs */}
      <div className="relative z-10 grid grid-cols-4">
        {[1, 2, 3, 4].map(s => (
          <div
            key={s}
            className="py-3 text-center text-xs font-ui font-bold tracking-widest uppercase transition-colors"
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
            STEP {s}
          </div>
        ))}
        <div className="col-span-4 h-px bg-white/10" />
      </div>

      {/* Form body */}
      <form onSubmit={handleNext}>
        <div className="relative z-10 px-7 pt-7 pb-6 flex flex-col" style={{ minHeight: '420px' }}>
          {submitted ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
              <p className="text-orange text-xs tracking-widest uppercase mb-3">Success</p>
              <h3 className="text-cream mb-3 leading-tight font-ui not-italic font-bold" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
                We&apos;ll be in touch soon.
              </h3>
              <p className="text-cream">Our team will contact you within 24 hours to schedule your free consultation.</p>
            </div>
          ) : (
            <>
              {/* Step heading */}
              <h3
                className="flex-shrink-0 text-cream mb-6 leading-tight font-ui not-italic font-bold"
                style={{ fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)' }}
              >
                {STEP_HEADINGS[step - 1]}
              </h3>

              {/* Fields */}
              <div className="flex-1 space-y-5 overflow-hidden">
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
                    <label htmlFor="hero-referralSource" className="block text-cream text-xs mb-1.5">
                      How did you hear about us?
                    </label>
                    <div className="relative">
                      <select
                        id="hero-referralSource"
                        value={data.referralSource || ''}
                        onChange={e => update('referralSource', e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-cream/35 pb-2.5 text-cream text-sm outline-none focus:border-cream/75 transition-colors duration-200 appearance-none cursor-pointer"
                        required
                        style={{ backgroundColor: 'transparent' }}
                      >
                        <option value="" disabled style={{ background: '#1e3526' }}>Select one...</option>
                        {REFERRAL_OPTIONS.map(o => (
                          <option key={o} value={o} style={{ background: '#1e3526' }}>{o}</option>
                        ))}
                      </select>
                      <svg className="absolute right-0 bottom-3.5 w-4 h-4 text-cream pointer-events-none" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 8l4 4 4-4" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex-shrink-0 flex items-center justify-between pt-5 border-t border-cream/10 mt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-cream text-xs font-ui font-bold tracking-widest uppercase hover:text-orange transition-colors cursor-pointer"
                >
                  CANCEL
                </button>
                <div className="flex items-center gap-5">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-1.5 text-cream text-xs font-ui font-bold tracking-widest uppercase hover:text-orange transition-colors cursor-pointer"
                    >
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                        <path d="M16 10H4M8 5l-5 5 5 5" />
                      </svg>
                      BACK
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 text-cream text-xs font-ui font-bold tracking-widest uppercase hover:text-orange transition-colors cursor-pointer"
                  >
                    {step === TOTAL_STEPS ? "LET'S TALK" : 'NEXT'}
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 ${step === TOTAL_STEPS ? 'rotate-45' : ''}`}>
                      <path d="M4 10h12M12 5l5 5-5 5" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  )
}
