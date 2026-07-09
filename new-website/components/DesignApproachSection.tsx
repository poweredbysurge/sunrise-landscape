import Image from 'next/image'
import { cdnToLocal } from '@/lib/mediaUrl'

const TOPO_LINES = [
  'M-50,520 C150,460 320,540 500,480 C640,436 760,496 950,460',
  'M-50,470 C130,410 300,490 470,430 C610,386 730,446 950,410',
  'M-50,420 C110,360 280,440 450,380 C590,336 710,396 950,360',
  'M-50,370 C90,310 260,390 420,330 C560,286 690,346 950,310',
  'M-50,320 C70,260 240,340 390,280 C530,236 670,296 950,260',
  'M-50,270 C50,210 220,290 370,230 C510,186 650,246 950,210',
  'M-50,220 C30,160 200,240 350,180 C490,136 630,196 950,160',
  'M-50,170 C10,110 180,190 330,130 C470,86 610,146 950,110',
  'M-50,120 C-10,60 160,140 310,80 C450,36 590,96 950,60',
  'M-50,70 C-30,10 140,90 290,30 C430,-14 570,46 950,10',
]

export default function DesignApproachSection() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">

        {/* Split card */}
        <div
          className="flex flex-col lg:flex-row overflow-hidden"
          style={{ borderRadius: '16px', minHeight: '520px' }}
        >
          {/* Left — dark green with topo texture + heading */}
          <div
            className="relative flex flex-col justify-between px-8 py-10 lg:px-12 lg:py-12 lg:w-1/2"
            style={{ backgroundColor: '#1e3526', minHeight: '380px' }}
          >
            {/* Topo SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 900 560"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {TOPO_LINES.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="white"
                  strokeWidth="0.75"
                  opacity="0.13"
                />
              ))}
            </svg>

            {/* Label */}
            <p className="relative section-label text-cream">Sunrise Promise</p>

            {/* Heading */}
            <div className="relative mt-auto">
              <h2
                className="text-cream"
                style={{ fontFamily: 'var(--font-editorsnote), Georgia, serif', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', lineHeight: 0.9, letterSpacing: '-0.025em' }}
              >
                <span className="block">Our</span>
                <span className="block">Landscape</span>
                <span className="block">Design</span>
                <span className="block">Approach</span>
              </h2>
            </div>
          </div>

          {/* Right — photo + text overlay */}
          <div className="relative lg:w-1/2" style={{ minHeight: '380px' }}>
            <Image
              src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/681c9fc83f8047121576ac84_design-img-1%20(1).webp')}
              alt="Professional landscape design project in Northern Virginia by Sunrise Landscape and Design"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Dark green gradient for text legibility */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(30,53,38,0.96) 0%, rgba(30,53,38,0.65) 45%, transparent 72%)' }}
            />
            {/* Body text */}
            <p
              className="absolute bottom-0 left-0 right-0 text-white/90 leading-relaxed"
              style={{ fontSize: '16px', padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}
            >
              Transforming your outdoor space should be as enjoyable as the result. Our team
              brings enthusiasm and creativity to every project, making the journey fun while
              maintaining excellence. We celebrate perfect plant combinations just as eagerly as
              we tackle complex design challenges. With clear communication and attention to
              detail, we aim to exceed your expectations while creating lasting beauty.
              It&apos;s not just landscaping; it&apos;s about building lasting relationships
              with clients.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
