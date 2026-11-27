'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { V } from '@/components/preview/CopyVersion'

const EXPECT = [
  ['High standards', 'We have worked in the same Northern Virginia communities since 1986, and our name stays on every job long after the crew leaves.'],
  ['Communication', 'You hear what happens next and what we need from you before you have to ask.'],
  ['Attention to detail', 'Joints, edges, grades and plant spacing get checked before we call a job finished.'],
  ['Timing', 'We give you an honest start date and tell you early if the weather moves it.'],
  ['Preparation', 'Every proposal follows a visit to your property, and we pull the permit when a project needs one.'],
]

function Words({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').reduce<React.ReactNode[]>((acc, word, i) => {
        if (i > 0) acc.push(' ')
        acc.push(
          <span
            key={i}
            data-wi="1"
            style={{ opacity: 0.13, transition: 'opacity 0.28s ease-out' }}
          >
            {word}
          </span>
        )
        return acc
      }, [])}
    </>
  )
}

export default function DesigningForImpact() {
  const outerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    if (!outer) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      outer.querySelectorAll<HTMLSpanElement>('[data-wi]').forEach(el => {
        el.style.opacity = '1'
      })
      return
    }

    const update = () => {
      const rect = outer.getBoundingClientRect()
      const scrollable = outer.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      const scrolled = Math.max(0, -rect.top)
      const progress = Math.min(1, scrolled / scrollable)

      const words = outer.querySelectorAll<HTMLSpanElement>('[data-wi]')
      const total = words.length

      words.forEach((el, i) => {
        const threshold = i / total
        const local = (progress - threshold) * total
        const opacity =
          local > 1 ? 1 :
          local > 0 ? 0.13 + 0.87 * local :
          0.13
        el.style.opacity = String(Math.min(1, opacity))
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div ref={outerRef} style={{ height: '130vh' }}>
      <div className="sticky top-0 h-screen flex overflow-hidden" style={{ backgroundColor: '#1e3526' }}>

        {/* Left: scroll-reveal text */}
        <div className="flex-1 flex flex-col justify-center items-center text-center lg:items-start lg:text-left px-8 lg:px-16 py-16">
          <V
            c={<>
              <p className="section-label text-orange mb-10">
                Designing For Impact
              </p>

              {/* SEO heading preserved from MDX manifest — visually hidden */}
              <h2 className="sr-only">Designing for impact with a purposeful approach.</h2>

              <div className="max-w-xl">
                <p
                  className="text-cream leading-relaxed"
                  style={{ fontSize: 'clamp(1.3rem, 2.2vw, 2.1rem)', lineHeight: 1.6 }}
                >
                  <Words text="We believe creating, and maintaning beautiful landscapes should bring joy, both in the process and the result. Our passion for innovative design and sustainable practices drives us to exceed expectations, but it's our love for what we do that sets us apart." />
                </p>
              </div>
            </>}
            n={<>
              <p className="section-label text-orange mb-5 lg:mb-6">
                Working With Sunrise
              </p>
              <h2 className="text-cream leading-tight mb-5" style={{ fontSize: 'clamp(1.9rem, 3vw, 2.9rem)' }}>
                What to expect when you work with us
              </h2>
              <div className="max-w-xl">
                <p className="text-cream/90 leading-relaxed mb-6" style={{ fontSize: 'clamp(1.05rem, 1.5vw, 1.3rem)' }}>
                  <Words text="Most of what makes a project go well happens before our crew arrives and between the days they are on site. These are the five things we hold ourselves to on every property." />
                </p>
                <ul className="space-y-3 text-left">
                  {EXPECT.map(([t, b]) => (
                    <li key={t} className="text-cream/80 leading-snug text-sm lg:text-base">
                      <span className="text-orange font-bold">{t}.</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </>}
          />
        </div>

        {/* Right: arched portrait image */}
        <div className="hidden lg:flex w-5/12 items-center justify-center py-10 pr-14">
          <div
            className="relative w-full overflow-hidden"
            style={{
              height: '80%',
              borderRadius: '9999px 9999px 24px 24px',
            }}
          >
            <Image
              src={'/media/work/crew-mason-setting-stone-wall.jpg'}
              alt="Sunrise mason setting stone on a garden wall"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
