import Image from 'next/image'
import Link from 'next/link'
import ServicesGrid from '@/components/ServicesGrid'
import DesigningForImpact from '@/components/DesigningForImpact'
import HeroContactForm from '@/components/HeroContactForm'
import { cdnToLocal } from '@/lib/mediaUrl'
import FeaturedWorkCarousel from '@/components/FeaturedWorkCarousel'
import MaintenanceSection from '@/components/MaintenanceSection'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactFormSection from '@/components/ContactFormSection'

const serviceCards1 = [
  {
    heading: 'Hardscape Design Services',
    body: 'Our hardscapes are designed to be visually stunning and functional, and built to last a lifetime.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bb276774b7c21ff399_Katie%20Bird%20Pool%205.jpg'),
    alt: 'Hardscape patio and stonework installation in Northern Virginia',
    href: '/hardscape-northern-virginia',
  },
  {
    heading: 'Landscape Design Services',
    body: 'As experts in landscape and hardscape design, we specialize in crafting durable and visually stunning outdoor spaces that enhance both functionality and aesthetics.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/681c9fd4dec20f523b550af0_design-img-2%20(1).webp'),
    alt: 'Custom landscape design project in Northern Virginia',
    href: '/landscape-design-northern-virginia',
  },
  {
    heading: 'Landscape Maintenance Services',
    body: 'Transform your outdoor space into a living masterpiece that evolves beautifully through every season. Our curated maintenance packages ensure your landscape receives precisely what it needs, when it needs it.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6822f6271cbe1867ff2caf42_MP-header-img-1%20(1).webp'),
    alt: 'Year-round landscape maintenance services in Northern Virginia',
    href: '/landscape-maintenance-northern-virginia',
  },
  {
    heading: 'Landscape Lighting Design',
    body: 'Transform your property into an enchanting evening retreat with artfully designed landscape lighting.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/680f2d0d1148d166273a6347_design-1.webp'),
    alt: 'Professional landscape lighting design for outdoor spaces',
    href: '/landscape-lighting-northern-virginia',
  },
  {
    heading: 'Ponds & Water Feature',
    body: 'Transform your outdoor sanctuary with the timeless allure of moving water. From meditative koi ponds to dramatic waterfalls, we craft water features that engage all the senses and create year-round interest in your landscape.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682321dd71e368222af56712_pw-header-img-1%20(1).webp'),
    alt: 'Custom pond and water feature installation in Northern Virginia',
    href: '/water-features-northern-virginia',
  },
  {
    heading: 'Drainage & Erosion Control',
    body: 'Where art meets engineering, we transform water challenges into opportunities for landscape enhancement. Our expertise ensures your property remains beautiful and structurally sound through every season.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68247d8f31ffd45cf0a28ba9_dec-header-img-2%20(1).webp'),
    alt: 'Drainage solution and erosion control landscaping in Northern Virginia',
    href: '/drainage-solutions-northern-virginia',
  },
  {
    heading: 'Commercial Landscaping',
    body: 'Transform your commercial property into a distinctive destination that welcomes, impresses, and adds value to your business investment. From corporate campuses to vibrant community spaces, we bring our signature blend of artistic vision and professional excellence to every commercial project.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682313a1105c47482807f99e_commercial-signature-img%20(1).webp'),
    alt: 'Commercial landscape maintenance in Northern Virginia',
    href: '/commercial-landscape-maintenance-virginia',
  },
]

const serviceCards2 = [
  {
    heading: 'Hardscape Design Services',
    body: 'Our hardscapes are designed to be visually stunning and functional, and built to last a lifetime.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bb276774b7c21ff399_Katie%20Bird%20Pool%205.jpg'),
    alt: 'Hardscape patio and stonework installation in Northern Virginia',
    href: '/hardscape-northern-virginia',
  },
  {
    heading: 'Landscape Design Services',
    body: 'As experts in landscape and hardscape design, we specialize in crafting durable and visually stunning outdoor spaces that enhance both functionality and aesthetics.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/681c9fd4dec20f523b550af0_design-img-2%20(1).webp'),
    alt: 'Custom landscape design project in Northern Virginia',
    href: '/landscape-design-northern-virginia',
  },
  {
    heading: 'Landscape Lighting Services',
    body: 'Transform your property into an enchanting evening retreat with artfully designed landscape lighting.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/680f2d0d1148d166273a6347_design-1.webp'),
    alt: 'Professional landscape lighting design for outdoor spaces',
    href: '/landscape-lighting-northern-virginia',
  },
  {
    heading: 'Ponds & Water Feature',
    body: 'Transform your outdoor sanctuary with the timeless allure of moving water. From meditative koi ponds to dramatic waterfalls, we craft water features that engage all the senses and create year-round interest in your landscape.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682321dd71e368222af56712_pw-header-img-1%20(1).webp'),
    alt: 'Custom pond and water feature installation in Northern Virginia',
    href: '/water-features-northern-virginia',
  },
  {
    heading: 'Drainage & Erosion Control',
    body: 'Where art meets engineering, we transform water challenges into opportunities for landscape enhancement. Our expertise ensures your property remains beautiful and structurally sound through every season.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68247d8f31ffd45cf0a28ba9_dec-header-img-2%20(1).webp'),
    alt: 'Drainage solution and erosion control landscaping in Northern Virginia',
    href: '/drainage-solutions-northern-virginia',
  },
  {
    heading: 'Landscape Maintenance Services',
    body: 'Transform your outdoor space into a living masterpiece that evolves beautifully through every season. Our curated maintenance packages ensure your landscape receives precisely what it needs, when it needs it.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6822f6271cbe1867ff2caf42_MP-header-img-1%20(1).webp'),
    alt: 'Stone pathway flanked by green hedges leading to a grassy backyard with trees and a fence.',
    href: '/landscape-maintenance-northern-virginia',
  },
  {
    heading: 'Commercial Landscaping',
    body: 'Transform your commercial property into a distinctive destination that welcomes, impresses, and adds value to your business investment. From corporate campuses to vibrant community spaces, we bring our signature blend of artistic vision and professional excellence to every commercial project.',
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/682313a1105c47482807f99e_commercial-signature-img%20(1).webp'),
    alt: 'Gray building with white double doors and red trim, surrounded by neatly trimmed bushes and green trees under a clear blue sky.',
    href: '/commercial-landscape-maintenance-virginia',
  },
]

const featuredWork = [
  { img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bd5d405760963255ff_Katie%20Bird%20Pool%203.jpg'), alt: 'Parkland Estate landscape project in Vienna Virginia', name: 'Parkland Estate', location: 'Vienna, VA' },
  { img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7d113c21f26f490bb45a_folder-2-cover-1.webp'), alt: 'Backyard landscape design project in Ashburn Virginia', name: 'Backyard Retreat', location: 'Ashburn, VA' },
  { img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e1387270569bd211cb9_folder-3-cover.webp'), alt: 'Estate landscape design in full bloom in Vienna Virginia', name: 'Estate Garden', location: 'Vienna, VA' },
  { img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7ecfc4042333b3219c72_folder-4-cover.webp'), alt: 'Grand entrance landscape design in Oakton Virginia', name: 'Grand Entrance', location: 'Oakton, VA' },
  { img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7fb273f8f7c44bbbc942_folder-5-cover.webp'), alt: 'Water feature landscape design in Leesburg Virginia', name: 'Water Feature', location: 'Leesburg, VA' },
]

const testimonials = [
  {
    text: 'Got New Patio for lower level of my townhome a couple months ago. Previously had drainage problems, issues with rotten wood/railroad ties and shifting uneven stones. Sunrise came out and went the extra mile with drainage and used a combination of stone and pavers that came out looking great. Would use Sunrise Landscape and Design again in a heartbeat.',
    name: 'Chris',
    location: 'Reston',
  },
  {
    text: 'Our goal was to renovate our concrete sidewalk, update our concrete stoop, and add a small patio and fire pit to our backyard. We also wanted to enhance the landscaping in both areas. Linda provided us with valuable guidance and detailed plans, helping us visualize the final outcome. Brandon and his team worked diligently and delivered a beautiful and meticulous job. We highly recommend them for any outdoor project you may have!',
    name: 'Lisa and Rick',
    location: 'Aldie',
  },
  {
    text: 'Sunrise transformed our plain yard into a stunning outdoor escape. From concept to completion, every detail was handled with care. The team was professional, efficient, and a pleasure to work with. We couldn\'t be happier!',
    name: 'Jack',
    location: 'Oakton',
  },
]

export default function HomeVersionB() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[640px] flex items-end overflow-hidden">
        <Image
          src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/680b3f278dd4a418016b50d1_Outer-pattio.webp')}
          alt="Hardscape patio and stonework installation in Northern Virginia"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(30,53,38,0.92) 0%, rgba(30,53,38,0.55) 40%, rgba(30,53,38,0.15) 70%, transparent 100%)' }} />

        <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 pb-12 lg:pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-end">

            {/* Left: hero copy + CTAs */}
            <div>
              <p className="section-label text-orange mb-4">Est. 1986 · Sterling, Virginia</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-none tracking-tight max-w-3xl mb-5">
                Landscape Design in Northern Virginia
              </h1>
              <p className="text-2xl lg:text-3xl text-cream mb-7 leading-relaxed">
                Landscapes For Living.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  <span>Free Consultation</span>
                </Link>
                <Link href="/landscape-design-northern-virginia" className="btn-ghost">
                  <span>Our Services</span>
                </Link>
              </div>
            </div>

            {/* Right: 4-step contact form — desktop only */}
            <div className="hidden lg:block">
              <HeroContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────── */}
      <ServicesGrid />

      {/* SEO headings preserved from manifest — visually hidden */}
      <div aria-hidden="true" className="sr-only">
        <h2>Hardscape Services in Northern Virginia</h2>
        <h2>Landscape Maintenance in Northern Virginia</h2>
        <h2>Commercial Landscape Services</h2>
      </div>

      {/* ── DESIGNING FOR IMPACT ───────────────────────────────────── */}
      <DesigningForImpact />

      {/* ── AERIAL VIDEO ────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source
            src="https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/687d4ea673057f23717e5eaa_Aerial%20shot-transcode.webm"
            type="video/webm"
          />
          <source
            src="https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/687d4ea673057f23717e5eaa_Aerial%20shot-transcode.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="section-label text-orange mb-6" style={{ fontSize: '0.85rem' }}>Est. 1986 · Sterling, Virginia</p>
          <h2 className="text-white leading-tight" style={{ fontSize: 'clamp(1.96rem, 4.76vw, 4.5rem)', fontStyle: 'normal' }}>
            Northern Virginia&apos;s Most Trusted Landscape Experts since 1986
          </h2>
        </div>
      </section>

      {/* ── SERVICE GRID 1 → sr-only for SEO ──────────────────────── */}
      <div aria-hidden="true" className="sr-only">
        <h2>Where Vision ‍ meets craftsmanship.</h2>
        {serviceCards1.map(card => (
          <div key={card.heading + '-sg1'}>
            <h3>{card.heading}</h3>
            <Image src={card.img} alt={card.alt} width={1} height={1} />
            <p>{card.body}</p>
          </div>
        ))}
      </div>

      {/* ── FEATURED WORK ──────────────────────────────────────────── */}
      <FeaturedWorkCarousel projects={featuredWork} />

      {/* ── SERVICE GRID 2 → sr-only for SEO ──────────────────────── */}
      <div aria-hidden="true" className="sr-only">
        <h2>Where vision meets craftsmanship</h2>
        {serviceCards2.map(card => (
          <div key={card.heading + '-sg2'}>
            <h3>{card.heading}</h3>
            <Image src={card.img} alt={card.alt} width={1} height={1} />
            <p>{card.body}</p>
          </div>
        ))}
      </div>

      {/* ── MAINTENANCE SECTION ────────────────────────────────────── */}
      <MaintenanceSection />

      {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
      <TestimonialsSection testimonials={testimonials} />

      {/* ── SERVICE AREAS ──────────────────────────────────────────── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ───────────────────────────────────────────── */}
      <ContactFormSection />
    </>
  )
}
