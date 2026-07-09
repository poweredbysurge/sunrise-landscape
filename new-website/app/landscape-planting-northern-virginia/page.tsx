import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'

export const metadata: Metadata = {
  title: 'Landscape Planting Northern Virginia | Sunrise Landscape',
  description: 'Expert landscape planting services in Northern Virginia. Beautiful plantings, trees, and shrubs for residential and commercial properties. Free consultation.',
  openGraph: {
    title: 'Landscape Planting Northern Virginia | Sunrise Landscape',
    description: 'Expert landscape planting services in Northern Virginia. Beautiful plantings, trees, and shrubs for residential and commercial properties. Free consultation.',
    type: 'website',
  },
  twitter: {
    title: 'Landscape Planting Northern Virginia | Sunrise Landscape',
    description: 'Expert landscape planting services in Northern Virginia. Beautiful plantings, trees, and shrubs for residential and commercial properties. Free consultation.',
    card: 'summary_large_image',
  },
}

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

const processSteps = [
  { heading: 'Consultation', body: 'We start with a conversation about your goals', icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
  { heading: 'Site Visit', body: 'A designer walks the property with you to assess layout, sunlight, soil, and use', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' },
  { heading: 'Concept Design', body: "You'll receive initial ideas and ballpark pricing", icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' },
  { heading: 'Design Refinement', body: 'Together, we fine-tune materials, plants, and placement', icon: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6' },
  { heading: 'Installation & Care', body: 'We bring your design to life and support it to thrive', icon: 'M12 22V12M7.5 8C7.5 12 12 12 12 12s4.5-4 4.5-4M5 4a7 7 0 0 1 7 4M19 4a7 7 0 0 0-7 4' },
]

export default function LandscapePlantingPage() {
  const jsonLd = getMdxJsonLd('pages/landscape-planting-northern-virginia/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO ── */}
      <section className="relative h-[85vh] min-h-[620px] overflow-hidden flex flex-col justify-end pb-8 lg:pb-10">
        <Image
          src="https://images.unsplash.com/photo-1710046385385-a37df445b619?auto=format&fit=crop&w=1920&q=85"
          alt="Modern house with swimming pool surrounded by lush garden and trees"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />

        {/* Floating green card */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="relative bg-green overflow-hidden" style={{ borderRadius: '24px' }}>
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 560"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {TOPO_LINES.map((d, i) => (
                <path key={i} d={d} fill="none" stroke="white" strokeWidth="0.75" opacity="0.1" />
              ))}
            </svg>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-10 py-10 lg:px-14 lg:py-12">
              <h1 className="text-cream" style={{ lineHeight: 1.05 }}>
                <span style={{ fontFamily: 'var(--font-editorsnote), Georgia, serif', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', display: 'block' }}>
                  Plant Design
                </span>
                <span className="text-4xl sm:text-5xl lg:text-7xl" style={{ display: 'block' }}>
                  Inspired by{' '}
                  <span style={{ fontFamily: 'var(--font-editorsnote), Georgia, serif', fontStyle: 'italic', fontWeight: 400 }}>
                    Nature
                  </span>
                </span>
              </h1>
              <div>
                <p className="text-cream leading-relaxed mb-6">
                  We believe a great planting does more than fill space — it brings life, texture, and story to your landscape. With an artist&apos;s eye and decades of experience, we create living environments that evolve beautifully with time and purpose.
                </p>
                <Link href="/contact" className="btn-primary"><span>Free Consultation</span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {([
              { title: 'Custom Garden and Planting Design', body: 'We create thoughtful planting layouts using trees, shrubs, perennials, annuals, and ground covers. Each design balances color, texture, and seasonal interest to keep your landscape vibrant year-round.', img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68230187ed0e534a13fbd511_season-img-1%20(1).webp'), alt: 'Landscaped garden bed with vibrant pink flowers and green shrubs' },
              { title: 'Specialty Garden Design and Installation', body: 'We design specialty gardens that reflect your unique style and site conditions, including native, English, woodland, wetland, shade, and meadow gardens. Crafted to thrive with minimal upkeep.', img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e1387270569bd211cb9_folder-3-cover.webp'), alt: 'Estate home with manicured specialty garden' },
              { title: 'Turf & Lawn Installation', body: 'Our team installs high-quality turf and lawn systems for a lush, durable finish. From expert soil preparation to the final roll of sod, we handle every detail with care.', img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7ecfc4042333b3219c72_folder-4-cover.webp'), alt: 'Brick house with manicured green lawn' },
              { title: 'Planters & Seasonal Displays', body: 'We create stunning planters and fresh seasonal displays to add color and charm to your property. Each arrangement is designed to highlight the best of every season.', img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7a462c7d0f5245e2a462_cover.webp'), alt: 'Backyard with stone patio and colorful seasonal plantings' },
            ] as { title: string; body: string; img: string; alt: string }[]).map((item) => (
              <div key={item.title} className="relative bg-green overflow-hidden" style={{ borderRadius: '20px' }}>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  {TOPO_LINES.map((d, i) => <path key={i} d={d} fill="none" stroke="white" strokeWidth="0.75" opacity="0.08" />)}
                </svg>
                <div className="relative h-52 w-full overflow-hidden">
                  <Image src={item.img} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="relative z-10 p-8">
                  <h3 className="font-ui not-italic text-xl font-bold text-cream mb-3">{item.title}</h3>
                  <p className="text-cream leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR LANDSCAPE PLANTING PROCESS ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: sticky heading + bullets */}
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl lg:text-5xl text-green mb-6" style={{ lineHeight: 1.0 }}>
                Our Landscape Planting
                <span className="block" style={{ fontFamily: 'var(--font-editorsnote), Georgia, serif', fontStyle: 'italic', fontWeight: 400 }}>
                  Process
                </span>
              </h2>
              <p className="text-green/70 mb-5">Our designs consider:</p>
              <ul className="space-y-3">
                {['Sunlight, soil type, slope, water retention', 'Retaining walls, privacy needs, hardscape integration', 'Native pollinators, erosion control, and long-term growth'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-green/70">
                    <svg className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: sticky-stack cards */}
            <div>
              {processSteps.map((step, i) => (
                <div
                  key={step.heading}
                  className="relative bg-green overflow-hidden mb-4 last:mb-0"
                  style={{ borderRadius: '16px', position: 'sticky', top: `${7 + i * 1.25}rem`, zIndex: i + 1 }}
                >
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {TOPO_LINES.map((d, j) => <path key={j} d={d} fill="none" stroke="white" strokeWidth="0.75" opacity="0.08" />)}
                  </svg>
                  <div className="relative z-10 px-8 py-7 flex items-start gap-5">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center" style={{ borderRadius: '10px', background: 'rgba(255,100,0,0.2)' }}>
                      <svg className="w-5 h-5 text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d={step.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-ui not-italic font-bold text-cream text-lg mb-1">{i + 1}. {step.heading}</h3>
                      <p className="text-cream leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── PLANTING CARE ── */}
      <section className="relative bg-green overflow-hidden py-16 lg:py-24">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {TOPO_LINES.map((d, i) => <path key={i} d={d} fill="none" stroke="white" strokeWidth="0.75" opacity="0.1" />)}
        </svg>
        <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left */}
            <div>
              <h2 className="text-3xl lg:text-5xl text-cream mb-6" style={{ lineHeight: 1.1 }}>
                Planting Care and<br />Maintenance Services
              </h2>
              <p className="text-cream leading-relaxed mb-6">We offer full-service planting care to help your landscape evolve gracefully:</p>
              <ul className="space-y-3 mb-8">
                {['Seasonal pruning & cutbacks', 'Mulching & fertilization', 'Weekly garden visits', 'Integrated pest management', 'Deer repellents & more'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-cream">
                    <svg className="w-5 h-5 text-orange flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/maintenance" className="inline-flex items-center gap-2 section-label text-orange hover:underline underline-offset-2">
                Check Out Our Maintenance Packages
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 -rotate-45" aria-hidden="true">
                  <path d="M4 10h12M12 5l5 5-5 5" />
                </svg>
              </Link>
            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden" style={{ borderRadius: '20px', aspectRatio: '4/3' }}>
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682316025847f4be966b0fd5_commercial-includes-img%20(1).webp')}
                alt="Aerial view of a curved stone patio with circular fire pit, seating area, and manicured garden beds"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#e7e6d2' }}>
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left: image */}
            <div className="relative overflow-hidden" style={{ borderRadius: '20px', aspectRatio: '4 / 3' }}>
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68230187ed0e534a13fbd511_season-img-1%20(1).webp')}
                alt="Professionally landscaped garden bed with vibrant pink rhododendrons, black mulch, and a stone wall."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right: content */}
            <div>
              <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-5">
                Benefits of Professional Landscape Planting
              </h2>
              <p className="text-green/70 leading-relaxed mb-8">
                A well-designed plant palette doesn&apos;t just look good — it works harder than you think:
              </p>
              <ul className="space-y-4">
                {[
                  'Enhances curb appeal & property value',
                  'Prevents erosion & improves drainage',
                  'Offers shade, reducing HVAC costs',
                  'Supports biodiversity & attracts wildlife',
                  'Evokes emotion, memory, and connection over time',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: '#1e3526', borderRadius: '50%' }}>
                      <svg viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3" aria-hidden="true">
                        <path d="M2 6l2.5 2.5L10 3" />
                      </svg>
                    </div>
                    <span className="text-green/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
