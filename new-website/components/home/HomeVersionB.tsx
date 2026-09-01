import ServicesGrid from '@/components/ServicesGrid'
import DesigningForImpact from '@/components/DesigningForImpact'
import Hero3B from '@/components/home/Hero3B'
import { cdnToLocal } from '@/lib/mediaUrl'
import FeaturedWorkCarousel from '@/components/FeaturedWorkCarousel'
import MaintenanceSection from '@/components/MaintenanceSection'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactFormSection from '@/components/ContactFormSection'

const featuredWork = [
  {
    img: cdnToLocal('/media/6808afe22b48076cc8e63cef/6889b8bd5d405760963255ff_Katie Bird Pool 3.jpg'),
    alt: 'Parkland Estate landscape project in Vienna Virginia',
    name: 'Parkland Estate',
    location: 'Vienna, VA',
    images: [
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/6889b8bd5d405760963255ff_Katie Bird Pool 3.jpg'), alt: 'Parkland Estate landscape project in Vienna Virginia' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/6889b8bd1e9b6ef30940a042_Katie Bird Arbor.jpg'), alt: 'Rose-covered garden arbor over a stone path leading through a manicured lawn and perennial garden beds.' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/6889b8bd026e584fa3a5e8cf_Katie Bird Boulder Retaining Wall 1.jpg'), alt: 'Boulder retaining wall bed with hostas, ferns, and evergreens bordering a manicured lawn.' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/6889b8bca45b369aa14f8ade_Katie Bird Mowing Lines 2.jpg'), alt: 'Expansive striped lawn leading up to a modern estate home with a pool and mature tree line.' },
    ],
  },
  {
    img: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7d113c21f26f490bb45a_folder-2-cover-1.webp'),
    alt: 'Backyard landscape design project in Ashburn Virginia',
    name: 'Backyard Retreat',
    location: 'Ashburn, VA',
    images: [
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7d113c21f26f490bb45a_folder-2-cover-1.webp'), alt: 'Backyard landscape design project in Ashburn Virginia' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7caf1811776d3267929d_folder-2-1.webp'), alt: 'Outdoor stone fireplace with a lit fire, surrounded by cushioned patio furniture, a koi pond with waterfall, and flowering plants at dusk.' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7caebf8b5d7ad36bb774_folder-2-3.webp'), alt: 'Nighttime view of an illuminated koi pond with waterfall, stone patio seating, and an outdoor fireplace glowing against a dark blue sky.' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7cb07b41400be77ba043_folder-2-4.webp'), alt: 'Stone patio with an outdoor fireplace, cushioned seating, and a built-in grill overlooking an open rolling landscape.' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7caeb433ebe730947285_folder-2-5.webp'), alt: 'Koi pond with a stone waterfall and stepping-stone path, flanked by an outdoor stone fireplace and patio seating on a sunny day.' },
    ],
  },
  {
    img: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7e1387270569bd211cb9_folder-3-cover.webp'),
    alt: 'Estate landscape design in full bloom in Vienna Virginia',
    name: 'Estate Garden',
    location: 'Vienna, VA',
    images: [
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7e1387270569bd211cb9_folder-3-cover.webp'), alt: 'Estate landscape design in full bloom in Vienna Virginia' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7e23cadf15ecbd8b2f1b_folder-3-1.webp'), alt: 'Curved stone retaining wall with layered plantings of purple catmint, ornamental grasses, and shrubs beneath mature trees.' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7e23ce1a9da1404d5685_folder-3-2.webp'), alt: 'Tiered stone retaining walls with a Japanese maple, flowering dogwoods, and colorful perennial beds along a paver walkway.' },
    ],
  },
  {
    img: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7ecfc4042333b3219c72_folder-4-cover.webp'),
    alt: 'Grand entrance landscape design in Oakton Virginia',
    name: 'Grand Entrance',
    location: 'Oakton, VA',
    images: [
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7ecfc4042333b3219c72_folder-4-cover.webp'), alt: 'Grand entrance landscape design in Oakton Virginia' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7ed0fa5b34a7cbb00a22_folder-4-1.webp'), alt: 'Manicured striped lawn sloping toward a large brick home, framed by mature trees and a wooden rail fence.' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7ecf6832151e20f2f7dd_folder-4-2.webp'), alt: 'Striped lawn leading up to a stone and stucco estate home with a circular driveway and mature landscaping.' },
    ],
  },
  {
    img: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7fb273f8f7c44bbbc942_folder-5-cover.webp'),
    alt: 'Water feature landscape design in Leesburg Virginia',
    name: 'Water Feature',
    location: 'Leesburg, VA',
    images: [
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7fb273f8f7c44bbbc942_folder-5-cover.webp'), alt: 'Water feature landscape design in Leesburg Virginia' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7fb2416ad7fcedb36977_folder-5-1.webp'), alt: 'Poolside patio with a white-roofed pavilion, cushioned lounge furniture, and stone paver decking overlooking a community view.' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7fb21991bd484a7e97c1_folder-5-2.webp'), alt: 'Backyard lawn with a stone fire pit seating area tucked among ornamental grasses and shrubs near a pool house.' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7fb2920b2080ffa788be_folder-5-3.webp'), alt: 'Poolside garden path lined with red roses and flowering perennials leading to a pergola with a stone fireplace.' },
      { src: cdnToLocal('/media/6808afe22b48076cc8e63cef/686b7fb2f4475bf6baf6303f_folder-5-4.webp'), alt: 'Covered outdoor living area with a stone fireplace, cushioned seating, and a ceiling fan overlooking the pool.' },
    ],
  },
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
      <Hero3B />

      {/* ── SERVICES GRID ─────────────────────────────────────────── */}
      <ServicesGrid />

      {/* ── MAINTENANCE SECTION ─────────────────────────────────────
          Maintenance-led business: this band runs ahead of the
          design/hardscape showcase content below (page mirrors revenue). */}
      <MaintenanceSection />

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
            src="/media/6808afe22b48076cc8e63cef/687d4ea673057f23717e5eaa_Aerial shot-transcode.webm"
            type="video/webm"
          />
          <source
            src="/media/6808afe22b48076cc8e63cef/687d4ea673057f23717e5eaa_Aerial shot-transcode.mp4"
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

      {/* ── FEATURED WORK ──────────────────────────────────────────── */}
      <FeaturedWorkCarousel projects={featuredWork} ctaLabel="Get My Free Yard Inspection" ctaHref="/contact#form" />

      {/* ── TESTIMONIALS ───────────────────────────────────────────── */}
      <TestimonialsSection testimonials={testimonials} />

      {/* ── SERVICE AREAS ──────────────────────────────────────────── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ───────────────────────────────────────────── */}
      <ContactFormSection />
    </>
  )
}
