'use client'

import { useState } from 'react'

type Faq = { q: string; a: string }

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="border-b border-green/12">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span className="font-ui font-bold text-green text-base leading-snug group-hover:text-orange transition-colors duration-200">
                {faq.q}
              </span>
              <span
                className="flex-shrink-0 w-5 h-5 text-green/50 group-hover:text-orange transition-all duration-300"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? '400px' : '0px', opacity: isOpen ? 1 : 0 }}
            >
              <p className="text-black/65 leading-relaxed pb-5 max-w-2xl">
                {faq.a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
