import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Landscape Lighting Northern Virginia | Sunrise Landscape',
  description: 'Transform your property with professional landscape lighting in Northern Virginia. Expert design and installation for homes and businesses.',
  openGraph: {
    title: 'Landscape Lighting Northern Virginia | Sunrise Landscape',
    description: 'Transform your property with professional landscape lighting in Northern Virginia. Expert design and installation for homes and businesses.',
    type: 'website',
  },
  twitter: {
    title: 'Landscape Lighting Northern Virginia | Sunrise Landscape',
    description: 'Transform your property with professional landscape lighting in Northern Virginia. Expert design and installation for homes and businesses.',
    card: 'summary_large_image',
  },
}

export default function LandscapeLightingPage() {
  const jsonLd = getMdxJsonLd('pages/landscape-lighting-northern-virginia/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO ── */}
      <section className="bg-green">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-36 lg:pt-44 pb-16 lg:pb-20">

            {/* Left: content */}
            <div>
              <p className="section-label mb-5">Lighting Design</p>
              <h1
                className="text-4xl sm:text-5xl lg:text-7xl text-cream leading-tight mb-6"
              >
                Landscape Lighting Services in Northern Virginia
              </h1>
              <p className="text-cream leading-relaxed mb-8">
                Transform your property into an enchanting evening retreat with artfully designed landscape lighting. Where security meets sophistication, our designs create ambiance that extends your living space well into the evening hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary"><span>Free Consultation</span></Link>
                <a href="tel:703-544-0028" className="btn-ghost on-dark">
                  <span>703-544-0028</span>
                </a>
              </div>
            </div>

            {/* Right: image */}
            <div
              className="relative overflow-hidden w-full min-h-[300px] lg:self-stretch"
              style={{ borderRadius: '16px' }}
            >
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821db31696152a2f76d3a41_lighting-header-img%20(1).webp')}
                alt="Illuminated backyard patio at night with waterfall flowing into a pond, outdoor fireplace, and seating area."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL LANDSCAPE LIGHTING SERVICES ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2
            className="text-3xl lg:text-5xl text-green leading-tight mb-6"
          >
            Professional Landscape Lighting Services
          </h2>
          <p className="prose-content max-w-3xl">
            Every shadow and highlight tells a story. Our lighting designs thoughtfully reveal your property&apos;s architectural features and landscape elements, creating depth, drama, and security throughout your outdoor spaces.
          </p>
        </div>
      </section>

      {/* Secondary images */}
      <section className="pb-16 lg:pb-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68827f23d5ddb3f4a120998a_plant%20light.jpg')} alt="Curved stone pathway at dusk with garden landscape lighting illuminating rock wall, plants, and a tree." fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821ddef6588d920f302dc9d_illum-img-2%20(1).webp')} alt="Cozy outdoor patio with cushioned chairs, a stone fireplace with fire, plants, and ambient lighting at dusk." fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR LIGHTING SOLUTIONS ── */}
      <section className="py-16 lg:py-24 bg-green">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-cream leading-tight mb-4 text-center">
            Our Lighting Solutions
          </h2>
          <p className="text-cream leading-relaxed mb-12 max-w-2xl mx-auto text-center">
            Choosing a licensed landscaping team ensures your investment is backed by expertise, safety standards, and professionalism. While others may offer lower prices, our certifications guarantee your project is completed correctly the first time, creating enduring beauty.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'Architectural Lighting Services',
                img: 'https://images.unsplash.com/photo-1762417421809-d79af3d838a3?auto=format&fit=crop&w=800&q=80',
                alt: 'Building facade with dramatic architectural accent lighting and shadow contrast at night',
                items: ['Facade accentuation', 'Structural detail emphasis', 'Textural wall washing', 'Dramatic shadow play'],
              },
              {
                num: '02',
                title: 'Landscape Enhancement',
                img: 'https://images.unsplash.com/photo-1671914492246-a1a7da242223?auto=format&fit=crop&w=800&q=80',
                alt: 'Low-voltage ground lights illuminating a garden pathway in the dark',
                items: ['Garden path illumination', 'Tree and foliage lighting', 'Water feature displays', 'Seasonal adaptation'],
              },
              {
                num: '03',
                title: 'Living Space Extension',
                img: 'https://images.unsplash.com/photo-1714381633320-e5c3fd0f14db?auto=format&fit=crop&w=800&q=80',
                alt: 'Outdoor patio with table, chairs, and warm fairy lights creating evening ambiance',
                items: ['Entertainment area lighting', 'Pool surrounds', 'Outdoor kitchen illumination', 'Patio and deck ambiance'],
              },
              {
                num: '04',
                title: 'Smart Home Lighting Integration',
                img: 'https://images.unsplash.com/photo-1755238798584-782309132c90?auto=format&fit=crop&w=800&q=80',
                alt: 'White pergola with string lights hanging above trees creating elegant outdoor atmosphere',
                items: ['Mobile device control', 'Automated scheduling', 'Energy-efficient LED systems', 'Holiday lighting preparation'],
              },
            ].map((card) => (
              <ServiceCard
                key={card.title}
                num={card.num}
                image={card.img}
                alt={card.alt}
                title={card.title}
                items={card.items}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-12 text-center">
            Landscape Lighting Portfolio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821e3d0a6db9a1d3151b66c_lighting-img-1%20(1).webp')} alt="Outdoor patio bar area at night with stone counter, three metal bar stools with cushions, and a built-in grill under a covered roof with ambient lighting." fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821e3f94b3e6ecdea889e48_lighting-img-2%20(1).webp')} alt="Cozy outdoor seating area at night with cushioned chairs, a stone fireplace, and soft ambient lighting." fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
              <Image src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821e40bcf6e5cadaefac37b_lighting-img-3%20(1).webp')} alt="Night scene of a paved patio with stone walls, small garden beds, a tree illuminated by ground lights, and a rock water feature." fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ILLUMINATE YOUR VISION CTA ── */}
      <section className="bg-cream py-12 lg:py-16 px-5 lg:px-8">
        <style>{`
          @keyframes glow-pulse {
            0%, 100% { text-shadow: 0 0 24px rgba(255, 200, 100, 0.25), 0 0 50px rgba(255, 150, 50, 0.12); }
            50% { text-shadow: 0 0 44px rgba(255, 210, 110, 0.75), 0 0 88px rgba(255, 160, 60, 0.5), 0 0 130px rgba(255, 110, 10, 0.28); }
          }
          .illuminate-glow { animation: glow-pulse 2.8s ease-in-out infinite; }
        `}</style>

        <div
          className="relative overflow-hidden max-w-screen-xl mx-auto"
          style={{ borderRadius: '24px', minHeight: '520px' }}
        >
          {/* Background image — house illuminated at night */}
          <Image
            src="https://images.unsplash.com/photo-1761778371592-c39fe1148a94?auto=format&fit=crop&w=1800&q=80"
            alt="House beautifully illuminated with landscape lighting at night"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* 50% black overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8 py-28 lg:py-36 text-center flex flex-col items-center">
            <p className="font-ui text-xs font-bold uppercase tracking-[0.25em] text-cream mb-6">
              Get Started
            </p>
            <h2
              className="text-3xl lg:text-5xl text-cream leading-tight mb-6 illuminate-glow"
            >
              Illuminate{' '}
              <span className="editorial-display" style={{ fontWeight: 400 }}>
                Your Vision
              </span>
            </h2>
            <p className="text-cream leading-relaxed mb-10 max-w-xl">
              Ready to transform your property's evening presence? Let's discuss how thoughtful lighting design can enhance your outdoor space.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-ui font-bold text-base tracking-widest uppercase text-orange hover:underline underline-offset-2"
            >
              Schedule a Lighting Consultation
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 -rotate-45" aria-hidden="true">
                <path d="M4 10h12M12 5l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['landscape-lighting-northern-virginia']} />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
