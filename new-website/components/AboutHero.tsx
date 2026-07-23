import Image from 'next/image'
import { cdnToLocal } from '@/lib/mediaUrl'

const TOPO_LINES = [
  'M-50,480 C120,420 300,500 500,440 C660,392 780,452 1000,420',
  'M-50,430 C100,370 280,450 480,390 C640,342 760,402 1000,370',
  'M-50,380 C80,320 260,400 460,340 C620,292 740,352 1000,320',
  'M-50,330 C60,270 240,350 440,290 C600,242 720,302 1000,270',
  'M-50,280 C40,220 220,300 420,240 C580,192 700,252 1000,220',
  'M-50,230 C20,170 200,250 400,190 C560,142 680,202 1000,170',
  'M-50,180 C0,120 180,200 380,140 C540,92 660,152 1000,120',
  'M-50,130 C-20,70 160,150 360,90 C520,42 640,102 1000,70',
]

export default function AboutHero() {
  return (
    <section className="relative bg-green overflow-hidden">
      {/* Topo texture */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 560"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {TOPO_LINES.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="white" strokeWidth="0.75" opacity="0.12" />
        ))}
      </svg>

      {/* Text row */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 pt-20 lg:pt-28 pb-12 lg:pb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

        {/* Left: editorial heading */}
        <div className="lg:w-1/2">
          <h1 className="text-cream text-lg lg:text-xl font-bold uppercase tracking-widest mb-4">
            About Sunrise Landscape
          </h1>
          <p
            className="text-cream"
            style={{ fontFamily: 'var(--font-editorsnote), Georgia, serif', fontStyle: 'normal', fontWeight: 400, fontSize: '4.5rem', lineHeight: 0.92, letterSpacing: '-0.025em' }}
          >
            <span className="block">Growing joy</span>
            <span className="block">The sunrise story</span>
          </p>
        </div>

        {/* Right: body text */}
        <div className="lg:w-[340px] lg:pt-3">
          <p className="text-cream leading-relaxed">
            Since 1986, we&apos;ve been more than just a landscaping company — we&apos;re a
            passionate collective of outdoor artists, plant enthusiasts, and design dreamers
            who love transforming spaces and bringing smiles to our clients&apos; faces.
          </p>
        </div>

      </div>

      {/* Photos */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: '16px', aspectRatio: '4/3' }}
        >
          <Image
            src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/681c87540d64604910521baa_about-img-1%20(1).webp')}
            alt="Sunrise team member tending to a garden planting near a decorative pot"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
            priority
          />
        </div>
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: '16px', aspectRatio: '4/3' }}
        >
          <Image
            src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/681c878de1dcc6f50faeabac_about-img-2%20(1).webp')}
            alt="Sunrise team member planting small green shrubs in freshly tilled soil"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      {/* Bottom spacer so photos don't flush against the next section */}
      <div className="h-16 lg:h-20" />
    </section>
  )
}
