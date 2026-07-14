import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import ServiceCarousel from '@/components/ServiceCarousel'
import FeaturedWorkCarousel from '@/components/FeaturedWorkCarousel'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'

export const metadata: Metadata = {
  title: 'Landscape Design Northern Virginia | Sunrise Landscape',
  description: 'Expert landscape design services in Northern Virginia. Transform your outdoor space with custom designs from our experienced team. Free consultation available.',
  openGraph: {
    title: 'Landscape Design Northern Virginia | Sunrise Landscape',
    description: 'Expert landscape design services in Northern Virginia. Transform your outdoor space with custom designs from our experienced team. Free consultation available.',
    type: 'website',
  },
  twitter: {
    title: 'Landscape Design Northern Virginia | Sunrise Landscape',
    description: 'Expert landscape design services in Northern Virginia. Transform your outdoor space with custom designs from our experienced team. Free consultation available.',
    card: 'summary_large_image',
  },
}

const featuredProjects = [
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7a462c7d0f5245e2a462_cover.webp'),
    alt: 'Backyard of a beige house with a multi-level stone patio, outdoor seating areas, and lush landscaping including shrubs and a red bush.',
    name: 'Backyard Living Retreat',
    location: 'Great Falls, VA',
    images: [
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7a462c7d0f5245e2a462_cover.webp'), alt: 'Backyard of a beige house with a multi-level stone patio, outdoor seating areas, and lush landscaping including shrubs and a red bush.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7bb1405fd774eb893c78_folder-1-2(1).webp'), alt: 'Aerial view of a curved stone patio with a fire pit, seating area, and stepping-stone path through mulched garden beds leading up to a covered deck.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7bb07b41400be77ae7e6_folder-1-3%20(1).webp'), alt: "Aerial view of a home's screened porch and covered patio with a stone paver terrace, retaining wall, and fire pit area surrounded by lawn." },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7bb0ffa8d3d4fbc19022_folder-1-4%20(1).webp'), alt: 'Overhead view of a curved stone retaining wall, mulched planting beds, and a circular fire pit patio with seating.' },
    ],
  },
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7d113c21f26f490bb45a_folder-2-cover-1.webp'),
    alt: 'Backyard patio with stone walkway over a koi pond, small waterfall, outdoor fireplace, and patio furniture under a blue sky.',
    name: 'Koi Pond & Fire Pit',
    location: 'Ashburn, VA',
    images: [
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7d113c21f26f490bb45a_folder-2-cover-1.webp'), alt: 'Backyard patio with stone walkway over a koi pond, small waterfall, outdoor fireplace, and patio furniture under a blue sky.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7caf1811776d3267929d_folder-2-1.webp'), alt: 'Outdoor stone fireplace with a lit fire, surrounded by cushioned patio furniture, a koi pond with waterfall, and flowering plants at dusk.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7caebf8b5d7ad36bb774_folder-2-3.webp'), alt: 'Nighttime view of an illuminated koi pond with waterfall, stone patio seating, and an outdoor fireplace glowing against a dark blue sky.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7cb07b41400be77ba043_folder-2-4.webp'), alt: 'Stone patio with an outdoor fireplace, cushioned seating, and a built-in grill overlooking an open rolling landscape.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7caeb433ebe730947285_folder-2-5.webp'), alt: 'Koi pond with a stone waterfall and stepping-stone path, flanked by an outdoor stone fireplace and patio seating on a sunny day.' },
    ],
  },
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e1387270569bd211cb9_folder-3-cover.webp'),
    alt: 'Large two-story house with brick and stone facade, a gray shingled roof, and a manicured garden in front.',
    name: 'Estate Elegance in Full Bloom',
    location: 'Vienna, VA',
    images: [
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e1387270569bd211cb9_folder-3-cover.webp'), alt: 'Large two-story house with brick and stone facade, a gray shingled roof, and a manicured garden in front.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e23cadf15ecbd8b2f1b_folder-3-1.webp'), alt: 'Curved stone retaining wall with layered plantings of purple catmint, ornamental grasses, and shrubs beneath mature trees.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e23ce1a9da1404d5685_folder-3-2.webp'), alt: 'Tiered stone retaining walls with a Japanese maple, flowering dogwoods, and colorful perennial beds along a paver walkway.' },
    ],
  },
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7ecfc4042333b3219c72_folder-4-cover.webp'),
    alt: 'Large two-story brick house with a manicured lawn and trees in the background under a clear blue sky.',
    name: 'Grand Entrance Design',
    location: 'Oakton, VA',
    images: [
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7ecfc4042333b3219c72_folder-4-cover.webp'), alt: 'Large two-story brick house with a manicured lawn and trees in the background under a clear blue sky.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7ed0fa5b34a7cbb00a22_folder-4-1.webp'), alt: 'Manicured striped lawn sloping toward a large brick home, framed by mature trees and a wooden rail fence.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7ecf6832151e20f2f7dd_folder-4-2.webp'), alt: 'Striped lawn leading up to a stone and stucco estate home with a circular driveway and mature landscaping.' },
    ],
  },
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7fb273f8f7c44bbbc942_folder-5-cover.webp'),
    alt: 'Backyard with a rectangular swimming pool, lounge chairs, and a covered patio area with outdoor seating and a fireplace.',
    name: 'Resort-Style Pool & Patio',
    location: 'Leesburg, VA',
    images: [
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7fb273f8f7c44bbbc942_folder-5-cover.webp'), alt: 'Backyard with a rectangular swimming pool, lounge chairs, and a covered patio area with outdoor seating and a fireplace.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7fb2416ad7fcedb36977_folder-5-1.webp'), alt: 'Poolside patio with a white-roofed pavilion, cushioned lounge furniture, and stone paver decking overlooking a community view.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7fb21991bd484a7e97c1_folder-5-2.webp'), alt: 'Backyard lawn with a stone fire pit seating area tucked among ornamental grasses and shrubs near a pool house.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7fb2920b2080ffa788be_folder-5-3.webp'), alt: 'Poolside garden path lined with red roses and flowering perennials leading to a pergola with a stone fireplace.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7fb2f4475bf6baf6303f_folder-5-4.webp'), alt: 'Covered outdoor living area with a stone fireplace, cushioned seating, and a ceiling fan overlooking the pool.' },
    ],
  },
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bd5d405760963255ff_Katie%20Bird%20Pool%203.jpg'),
    alt: 'Modern house with beige walls and dark roof, a pool with hot tub, lounge chairs, umbrellas, and white flowering bushes in the foreground.',
    name: 'Parkland Estate',
    location: 'Vienna, VA',
    images: [
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bd5d405760963255ff_Katie%20Bird%20Pool%203.jpg'), alt: 'Modern house with beige walls and dark roof, a pool with hot tub, lounge chairs, umbrellas, and white flowering bushes in the foreground.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bca45b369aa14f8ade_Katie%20Bird%20Mowing%20Lines%202.jpg'), alt: 'Expansive striped lawn leading up to a modern estate home with a pool and mature tree line.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bd1e9b6ef30940a042_Katie%20Bird%20Arbor.jpg'), alt: 'Rose-covered garden arbor over a stone path leading through a manicured lawn and perennial garden beds.' },
      { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bd026e584fa3a5e8cf_Katie%20Bird%20Boulder%20Retaining%20Wall%201.jpg'), alt: 'Natural boulder retaining wall with layered plantings of hostas, ferns, and evergreens beside a stone home.' },
    ],
  },
]

export default function LandscapeDesignPage() {
  const jsonLd = getMdxJsonLd('pages/landscape-design-northern-virginia/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO ── */}
      <section className="relative h-[80vh] min-h-[540px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1633330948542-0b3bdeefcdb3?auto=format&fit=crop&w=1920&q=85"
          alt="Elegant outdoor patio with seating area surrounded by professional landscaping"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 pb-16 lg:pb-24 w-full">
          <p className="section-label text-orange mb-4">Landscape Design Services</p>
          <h1 className="text-white leading-none tracking-tight max-w-4xl mb-6">
            Professional Landscape Design in Northern Virginia
          </h1>
          <p className="text-xl lg:text-2xl text-cream mb-8 max-w-2xl leading-relaxed">
            Transform your property into a living masterpiece where nature meets thoughtful design. Since 1986, we&apos;ve been designing distinctive outdoor spaces that reflect our clients&apos; personalities while enhancing their lifestyle and property value.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary"><span>Free Consultation</span></Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED LANDSCAPE PROJECTS ── */}
      <FeaturedWorkCarousel
        projects={featuredProjects}
        title={<><span className="editorial-display italic">Featured</span> landscape designs projects</>}
        ctaLabel="Schedule a Call"
        ctaHref="/contact"
      />

      {/* ── SERVICES CAROUSEL ── */}
      <ServiceCarousel />

      <ServiceExpansion data={serviceExpansions['landscape-design-northern-virginia']} />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
