'use client'

import { useState } from 'react'

type Position = {
  title: string
  intro: string
  requirements: string[]
}

export default function CareerAccordion({ positions }: { positions: Position[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {positions.map((pos, i) => (
        <div
          key={pos.title}
          className="bg-cream overflow-hidden"
          style={{ borderRadius: '12px' }}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-ui font-bold text-green text-sm tracking-wide">
              {pos.title}
            </span>
            <span className="text-green text-xl leading-none select-none" aria-hidden="true">
              {open === i ? '×' : '+'}
            </span>
          </button>

          {open === i && (
            <div className="px-6 pb-6 border-t border-green/10">
              <p className="text-green/70 leading-relaxed mt-4 mb-4">{pos.intro}</p>
              <ul className="space-y-2">
                {pos.requirements.map((req, j) => (
                  <li key={j} className="flex items-start gap-3 text-base text-green/70 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-orange flex-shrink-0 mt-[7px]" />
                    {req}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="tel:703-544-0028" className="btn-primary text-xs">
                  <span>Call to Apply: 703-544-0028</span>
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
