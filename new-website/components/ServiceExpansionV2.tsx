import type { ReactElement } from 'react'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import type { ServiceExpansionData, ExpSection } from '@/components/ServiceExpansion'

// PREVIEW ONLY — "Option 2: split with icon + vertical divider".
// Not wired into the shared ServiceExpansion used by the other 10 pages yet.
// If approved, fold this layout back into ServiceExpansion.tsx and delete this file.

const ICONS: Record<string, ReactElement> = {
  tools: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
  checklist: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="0" />
      <path d="M9 3v2h6V3M9 10l2 2 4-4M9 16h6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="0" />
      <path d="M3 9h18M8 3v4M16 3v4M7.5 13h1M11.5 13h1M15.5 13h1M7.5 17h1M11.5 17h1M15.5 17h1" />
    </>
  ),
  default: <path d="M9 12l2 2 4-4M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />,
}

function Icon({ name }: { name?: string }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name || 'default'] || ICONS.default}
    </svg>
  )
}

function Card({ sec }: { sec: ExpSection & { icon?: string } }) {
  const H = sec.level === 3 ? 'h3' : 'h2'
  return (
    <div className="flex flex-col items-center text-center px-8 lg:px-12 py-4">
      <div className="w-16 h-16 flex items-center justify-center mb-6" style={{ backgroundColor: '#1e3526', borderRadius: '50%' }}>
        <Icon name={sec.icon} />
      </div>
      <H className="font-display italic text-2xl lg:text-3xl text-green leading-snug mb-5">
        {sec.heading}
      </H>
      <div className="w-10 h-px bg-green/30 mb-6" />
      <div className="space-y-4 text-black/70 leading-relaxed max-w-sm">
        {sec.body.map((p, j) => (
          <p key={j}>{p}</p>
        ))}
      </div>
    </div>
  )
}

export default function ServiceExpansionV2({ data }: { data: ServiceExpansionData }) {
  const pairs: ExpSection[][] = []
  for (let i = 0; i < data.sections.length; i += 2) {
    pairs.push(data.sections.slice(i, i + 2))
  }

  return (
    <>
      <section className="py-16 lg:py-24 px-5 lg:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto space-y-10">
          {pairs.map((pair, pi) => (
            <div
              key={pi}
              className={
                pair.length === 2
                  ? 'grid grid-cols-1 md:grid-cols-2 border border-green/15'
                  : 'border border-green/15 max-w-xl mx-auto'
              }
              style={{ borderRadius: '20px' }}
            >
              {pair.map((sec, si) => (
                <div key={sec.heading} className={si === 1 ? 'md:border-l md:border-green/15' : ''}>
                  <Card sec={sec} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 px-5 lg:px-8 bg-cream/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-8">{data.faqHeading}</h2>
          <FaqAccordion faqs={data.faqs} />
          <p className="mt-10 text-lg text-black/70">
            {data.cta || 'Ready to talk about your property?'}{' '}
            <Link href="/contact" className="font-bold text-green underline hover:text-orange">
              Book a free consultation
            </Link>{' '}
            or call <a href="tel:703-544-0028" className="font-bold text-green underline hover:text-orange">703-544-0028</a>.
          </p>
        </div>
      </section>

      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />
    </>
  )
}
