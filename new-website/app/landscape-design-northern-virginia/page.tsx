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
  },
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7d113c21f26f490bb45a_folder-2-cover-1.webp'),
    alt: 'Backyard patio with stone walkway over a koi pond, small waterfall, outdoor fireplace, and patio furniture under a blue sky.',
    name: 'Koi Pond & Fire Pit',
    location: 'Ashburn, VA',
  },
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e1387270569bd211cb9_folder-3-cover.webp'),
    alt: 'Large two-story house with brick and stone facade, a gray shingled roof, and a manicured garden in front.',
    name: 'Estate Elegance in Full Bloom',
    location: 'Vienna, VA',
  },
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7ecfc4042333b3219c72_folder-4-cover.webp'),
    alt: 'Large two-story brick house with a manicured lawn and trees in the background under a clear blue sky.',
    name: 'Grand Entrance Design',
    location: 'Oakton, VA',
  },
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7fb273f8f7c44bbbc942_folder-5-cover.webp'),
    alt: 'Backyard with a rectangular swimming pool, lounge chairs, and a covered patio area with outdoor seating and a fireplace.',
    name: 'Resort-Style Pool & Patio',
    location: 'Leesburg, VA',
  },
  {
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6889b8bd5d405760963255ff_Katie%20Bird%20Pool%203.jpg'),
    alt: 'Modern house with beige walls and dark roof, a pool with hot tub, lounge chairs, umbrellas, and white flowering bushes in the foreground.',
    name: 'Parkland Estate',
    location: 'Vienna, VA',
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
