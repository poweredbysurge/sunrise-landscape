'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { cdnToLocal } from '@/lib/mediaUrl'

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
              src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/681c87540d64604910521baa_about-img-1%20(1).webp')}
              alt="Stone retaining wall steps with lush planting — Sunrise Landscape design craftsmanship"
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
