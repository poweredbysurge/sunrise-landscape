import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import ContactFormSection from '@/components/ContactFormSection'
import BlogGrid from '@/components/BlogGrid'
import { getMdxJsonLd } from '@/lib/manifest'
import { BLOGS } from '@/lib/blogData'

export const metadata: Metadata = {
  title: 'Landscaping Blog | Sunrise Landscape and Design',
  description: 'Landscape design tips, planting guides, hardscaping ideas, and seasonal lawn care advice for Northern Virginia homeowners. Expert insights from Sunrise Landscape.',
  openGraph: {
    title: 'Landscaping Blog | Sunrise Landscape and Design',
    description: 'Landscape design tips, planting guides, hardscaping ideas, and seasonal lawn care advice for Northern Virginia homeowners. Expert insights from Sunrise Landscape.',
    type: 'website',
  },
  twitter: {
    title: 'Landscaping Blog | Sunrise Landscape and Design',
    description: 'Landscape design tips, planting guides, hardscaping ideas, and seasonal lawn care advice for Northern Virginia homeowners. Expert insights from Sunrise Landscape.',
    card: 'summary_large_image',
  },
}


export default function BlogPage() {
  const jsonLd = getMdxJsonLd('pages/blog/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="pt-32 pb-8 bg-green text-center">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <p className="section-label text-orange mb-6">Blog</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-cream leading-none mb-6">
            Explore Landscape Design Insights
          </h1>
          <p className="text-cream max-w-xl text-lg leading-relaxed mx-auto">
            Discover innovative ideas for your outdoor spaces.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-24 bg-green">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <BlogGrid posts={BLOGS} />
        </div>
      </section>

      {/* Service area bar */}
      <ServiceAreasSection />


      {/* Contact form */}
      <ContactFormSection />
    </>
  )
}
