'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { V } from '@/components/preview/CopyVersion'

const ITEMS = [
  {
    title: 'Lawn Care',
    body: 'Regular mowing, edging, and cleanup keep your lawn consistently pristine throughout the growing season. Scheduled visits ensure you never have to think about it.',
    bodyNew: "Mowing, edging and cleanup on a regular schedule through the growing season. You come home to an even, finished lawn without ever putting it on your list.",
  },
  {
    title: 'Garden Care',
    body: 'Mulching, fertilization, and landscape bed maintenance to keep your planting areas healthy, weed-free, and visually polished year-round.',
    bodyNew: "Mulch, fertilization and bed care that keep your plantings healthy and the weeds down, so the beds look tended in every season.",
  },
  {
    title: 'Seasonal Services',
    body: "Pre-emergent weed applications in spring, fall cleanups, leaf removal, and winterization treatments timed precisely for Northern Virginia's climate.",
    bodyNew: "Pre-emergent in spring, leaf cleanup in fall and winter preparation, each timed to Northern Virginia's seasons. Spring cleanups start in February.",
  },
  {
    title: 'Property Maintenance',
    body: 'Full-service property care packages combining lawn, garden, and hardscape upkeep into one seamless recurring relationship. Everything handled, nothing overlooked.',
    bodyNew: "One plan for your lawn, beds and hardscape, with one company responsible for all of it and one number to call.",
  },
  {
    title: 'Planting & Updates',
    body: 'Strategic plant additions, replacements, and design refreshes to keep your landscape evolving beautifully through every season.',
    bodyNew: "New plants, replacements and small refreshes as your landscape matures. Plants we install carry a warranty when our watering guidance is followed.",
  },
]

export default function MaintenanceSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div
            className="relative overflow-hidden aspect-square bg-[#162b1e]"
            style={{ borderRadius: '16px' }}
          >
            <Image
              src='/media/work/maintenance-rounded-shrubs-garden-path.jpg'
              alt="Rounded shrubs and a garden path at a property Sunrise maintains in Northern Virginia"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#162b1e]/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#162b1e]/85 to-transparent" />
            <p className="absolute top-8 left-8 font-ui text-[10px] font-bold text-cream uppercase tracking-[0.2em]">
              Maintenance Services
            </p>
            <h2 className="absolute bottom-8 left-8 leading-tight editorial-display text-3xl text-cream">
              <V
                c={<><span className="block">Your Yard, </span><span className="block">Our Passion.</span></>}
                n={<><span className="block">Year-round care, </span><span className="block">off your list.</span></>}
              />
            </h2>
          </div>

          <div>
            <div>
              {ITEMS.map((item, i) => (
                <div key={item.title} className="border-b border-green/15">
                  <button
                    className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span
                      className="text-2xl lg:text-3xl text-green"
                      style={{ fontFamily: 'var(--font-editorsnote)', fontStyle: 'normal' }}
                    >
                      {item.title}
                    </span>
                    <span className="text-green/60 text-2xl ml-4 flex-shrink-0 not-italic">
                      {open === i ? '−' : '+'}
                    </span>
                  </button>
                  {open === i ? (
                    <p className="text-green/70 leading-relaxed pb-5 pr-8"><V c={item.body} n={item.bodyNew} /></p>
                  ) : null}
                </div>
              ))}
            </div>
            <Link
              href="/landscape-maintenance-northern-virginia"
              className="section-label text-orange flex items-center gap-2 mt-8 hover:underline"
            >
              Explore Maintenance Packages
              <svg
                viewBox="0 0 16 16"
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 3h10v10M3 13L13 3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
