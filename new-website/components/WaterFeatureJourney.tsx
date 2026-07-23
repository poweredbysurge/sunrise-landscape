'use client'

import { useState, type ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import type { ServiceExpansionData } from '@/components/ServiceExpansion'
import { cdnToLocal } from '@/lib/mediaUrl'

// Water-features-page-only layout: image + numbered list, replacing the plain
// stacked-text rendering of the shared ServiceExpansion for this page only.
// Full body copy from serviceExpansions is preserved behind a "Learn more" toggle.

const ITEMS: { icon: ReactElement; teaser: string }[] = [
  {
    teaser: 'Quietly running for years, expertly built with unmatched quality and care.',
    icon: (
      <path d="M12 3.5S6 11 6 15a6 6 0 0 0 12 0c0-4-6-11.5-6-11.5z" />
    ),
  },
  {
    teaser: 'Custom designs with the perfect drop, placement, and sound.',
    icon: (
      <>
        <path d="M7 4v9M12 4v9M17 4v9" />
        <path d="M4 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
      </>
    ),
  },
  {
    teaser: 'Elegant fountains installed with precision and lasting quality.',
    icon: (
      <>
        <path d="M12 4v4M9.5 6.5 12 9l2.5-2.5" />
        <path d="M6 13.5h12v1.5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.5z" />
        <path d="M4.5 20h15" />
      </>
    ),
  },
  {
    teaser: "Let's bring your vision to life with a conversation about your space.",
    icon: (
      <>
        <path d="M19.5 4.5c-9 0-14 5-14 13.5 7.5 0 12.5-5 12.5-13.5z" />
        <path d="M6 18c3.5-3.5 7-7 10.5-10.5" />
      </>
    ),
  },
]

function ItemIcon({ children }: { children: ReactElement }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export default function WaterFeatureJourney({ data }: { data: ServiceExpansionData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <section className="py-16 lg:py-24 px-5 lg:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-[20px] lg:order-2">
            <Image
              src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7caf1811776d3267929d_folder-2-1.webp')}
              alt="Evening patio with stone fireplace overlooking a koi pond and waterfall lit by landscape lighting."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="lg:order-1">
            {data.sections.map((sec, i) => {
              const item = ITEMS[i % ITEMS.length]
              const isOpen = openIndex === i
              return (
                <div key={sec.heading} className={i > 0 ? 'border-t border-green/10 pt-6 mt-6' : ''}>
                  <div className="flex gap-5">
                    <div
                      className="w-14 h-14 shrink-0 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#1e3526' }}
                    >
                      <ItemIcon>{item.icon}</ItemIcon>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-display text-2xl lg:text-3xl text-green leading-snug mb-2">
                        {sec.heading}
                      </h3>
                      <p className="text-black/70 leading-relaxed">{item.teaser}</p>

                      {isOpen && (
                        <div className="mt-4 space-y-3 text-black/70 leading-relaxed">
                          {sec.body.map((p, j) => (
                            <p key={j}>{p}</p>
                          ))}
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-green hover:text-orange transition-colors"
                        aria-expanded={isOpen}
                      >
                        {isOpen ? 'Show less' : 'Learn more'}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-200"
                          style={{ display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'none' }}
                        >
                          ▾
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-5 lg:px-8 bg-cream/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-8">{data.faqHeading}</h2>
          <FaqAccordion faqs={data.faqs} />
          <p className="mt-10 text-lg text-black/70">
            {data.cta || 'Ready to talk about your property?'}{' '}
            <Link href="/contact#form" className="font-bold text-green underline hover:text-orange">
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
