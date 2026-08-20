'use client'

import { useEffect, useState } from 'react'
import { captureLeadContext, readLeadContext } from '@/lib/leads/context'

type ServiceKey = 'maintenance' | 'project' | 'commercial' | 'notsure'

const SERVICES: { key: ServiceKey; label: string; sub: string }[] = [
  { key: 'maintenance', label: 'Maintenance', sub: 'Year-round care plans' },
  { key: 'project', label: 'Project', sub: 'Patios, plantings, outdoor living' },
  { key: 'commercial', label: 'Commercial', sub: 'HOA & business properties' },
  { key: 'notsure', label: 'Not sure', sub: "We'll point you the right way" },
]

// Command Center lead-form contract values. The site's own labels stay
// human-facing; these are the closed-enum values the receiver validates against
// (an unrecognised one is soft-nulled and tagged, never rejected).
const SERVICE_INTEREST_ENUM: Record<ServiceKey, string> = {
  maintenance: 'maintenance',
  project: 'design_build',
  commercial: 'commercial',
  notsure: 'not_sure',
}

// Timeline reuses the receiver's existing `urgency` enum rather than inventing a
// landscaping-specific one that would mean the same thing in different words.
const TIMELINE_OPTIONS: { value: string; label: string }[] = [
  { value: 'right_away', label: 'As soon as possible' },
  { value: 'within_month', label: 'Within a month' },
  { value: '1_3_months', label: 'This season' },
  { value: 'planning', label: 'Just planning ahead' },
]

const BUDGET_OPTIONS: { value: string; label: string }[] = [
  { value: 'under_5k', label: 'Under $5,000' },
  { value: '5k_15k', label: '$5,000 to $15,000' },
  { value: '15k_50k', label: '$15,000 to $50,000' },
  { value: '50k_100k', label: '$50,000 to $100,000' },
  { value: 'over_100k', label: 'Over $100,000' },
  { value: 'not_sure', label: 'Not sure yet' },
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

// Shared step-quiz form widget — the "hero style" form. Used both inline in
// the homepage hero (Hero3B) and inside the sitewide ContactFormSection card.
export default function InquiryForm() {
  const [step, setStep] = useState(1)
  const [svc, setSvc] = useState<ServiceKey | null>(null)
  const [hear, setHear] = useState<string | null>(null)
  const [timeline, setTimeline] = useState<string | null>(null)
  const [budget, setBudget] = useState<string | null>(null)
  const [fields, setFields] = useState<FieldsState>(EMPTY_FIELDS)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Records the landing page, lead key, and campaign params for this session the
  // first time a form is on screen. Cheap, idempotent, and safe to run on every
  // page since the form ships on nearly all of them.
  useEffect(() => {
    captureLeadContext()
  }, [])

  // Steps 1-3 are the same for everyone. A Project lead then gets a qualifying
  // screen (timeline + budget) before the final one, so the flow is five
  // questions for them and four for everyone else. Derived rather than
  // hard-coded so the progress dots and the "Question X of Y" counter stay
  // honest when the branch changes.
  const isProject = svc === 'project'
  const STEP_QUALIFY = 4
  const stepFinal = isProject ? 5 : 4
  const totalSteps = stepFinal
  const stepDone = stepFinal + 1

  const update = (name: keyof FieldsState, value: string) =>
    setFields((prev) => ({ ...prev, [name]: value }))

  const reset = () => {
    setStep(1)
    setSvc(null)
    setHear(null)
    setTimeline(null)
    setBudget(null)
    setFields(EMPTY_FIELDS)
    setSubmitError(null)
  }

  const inputClass =
    'w-full bg-white border border-green/25 text-green font-ui text-[15px] px-3.5 py-3 outline-none placeholder:text-green/40 focus:border-orange transition-colors'

  const handleSubmit = async () => {
    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fields.firstName,
          lastName: fields.lastName,
          email: fields.email,
          streetAddress: fields.street,
          city: fields.city,
          state: fields.state,
          zipCode: fields.zip,
          phone: fields.phone,
          services: svc ? SERVICES.find((s) => s.key === svc)?.label : '',
          referralSource: hear,
          notes: fields.notes,
          // Closed-enum values for Command Center intake classification. The
          // human-readable `services` / `referralSource` above are what the
          // notification emails render; these are what the classifier grades.
          serviceInterest: svc ? SERVICE_INTEREST_ENUM[svc] : '',
          urgency: timeline ?? '',
          budgetBand: budget ?? '',
          // Only asserted when they said so. Guessing 'residential' for everyone
          // else would mislabel the HOA manager who picked Maintenance.
          propertyType: svc === 'commercial' ? 'commercial' : '',
          context: readLeadContext(),
        }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStep(stepDone)
    } catch {
      setSubmitError('Something went wrong. Please call us at 703-544-0028.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((n) => (
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
          {step <= totalSteps ? `Question ${step} of ${totalSteps}` : 'Done'}
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
            placeholder="Email address (required)"
            type="email"
            value={fields.email}
            onChange={(e) => update('email', e.target.value)}
            className={`${inputClass} border-orange`}
            style={{ borderWidth: 1.5 }}
          />
          <div className="flex-1" />
          <button
            type="button"
            disabled={!fields.phone.trim() || !fields.email.trim()}
            onClick={() => setStep(isProject ? STEP_QUALIFY : stepFinal)}
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

      {isProject && step === STEP_QUALIFY && (
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="text-green" style={{ fontSize: '2.1rem' }}>
            About the project
          </h2>
          <p className="text-xs font-bold text-green/60">When would you like the work done?</p>
          <div className="flex flex-wrap gap-2">
            {TIMELINE_OPTIONS.map((opt) => {
              const active = timeline === opt.value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setTimeline(active ? null : opt.value)}
                  className="text-[13px] font-bold px-3.5 py-1.5 whitespace-nowrap transition-colors"
                  style={{
                    borderRadius: 999,
                    border: active ? '1.5px solid #ff6400' : '1px solid rgba(30,53,38,0.3)',
                    background: active ? '#ff6400' : 'transparent',
                    color: active ? '#e7e6d2' : '#1e3526',
                  }}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>

          <p className="text-xs font-bold text-green/60">
            Do you have a budget range in mind?
          </p>
          <div className="flex flex-wrap gap-2">
            {BUDGET_OPTIONS.map((opt) => {
              const active = budget === opt.value
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setBudget(active ? null : opt.value)}
                  className="text-[13px] font-bold px-3.5 py-1.5 whitespace-nowrap transition-colors"
                  style={{
                    borderRadius: 999,
                    border: active ? '1.5px solid #ff6400' : '1px solid rgba(30,53,38,0.3)',
                    background: active ? '#ff6400' : 'transparent',
                    color: active ? '#e7e6d2' : '#1e3526',
                  }}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>
          <p className="text-[12px] text-green/50 leading-relaxed">
            A range helps us send the right person out. Skip either one if you are not sure.
          </p>

          <div className="flex-1" />
          <button
            type="button"
            onClick={() => setStep(stepFinal)}
            className="bg-orange text-cream text-center font-bold text-sm tracking-wider uppercase py-4 hover:brightness-95 transition-all"
            style={{ borderRadius: 4 }}
          >
            Next &rarr;
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

      {step === stepFinal && (
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
          {submitError && <p className="text-orange text-sm">{submitError}</p>}
          <div className="flex-1" />
          <button
            type="button"
            disabled={submitting}
            onClick={handleSubmit}
            className="bg-orange text-cream text-center font-bold text-sm tracking-wider uppercase py-4 hover:brightness-95 transition-all disabled:opacity-50"
            style={{ borderRadius: 4 }}
          >
            {submitting ? 'Sending...' : ctaFor(svc)}
          </button>
          <button
            type="button"
            onClick={() => setStep(isProject ? STEP_QUALIFY : 3)}
            className="text-xs text-green/50 underline text-center"
          >
            &larr; Back
          </button>
        </div>
      )}

      {step === stepDone && (
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
}
