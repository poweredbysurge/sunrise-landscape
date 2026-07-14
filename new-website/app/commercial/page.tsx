import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansionV2'
import { serviceExpansions } from '@/lib/serviceExpansions'

export const metadata: Metadata = {
  title: 'Commercial Landscape Maintenance | Sunrise Landscape',
  description: 'Commercial landscape maintenance in Virginia. Professional care for corporate campuses and commercial properties. Serving Northern Virginia since 1986.',
  openGraph: {
    title: 'Commercial Landscape Maintenance | Sunrise Landscape',
    description: 'Commercial landscape maintenance in Virginia. Professional care for corporate campuses and commercial properties. Serving Northern Virginia since 1986.',
    type: 'website',
  },
  twitter: {
    title: 'Commercial Landscape Maintenance | Sunrise Landscape',
    description: 'Commercial landscape maintenance in Virginia. Professional care for corporate campuses and commercial properties. Serving Northern Virginia since 1986.',
    card: 'summary_large_image',
  },
}

export default function CommercialAliasPage() {
  const jsonLd = getMdxJsonLd('pages/commercial/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end bg-green overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68512a743bcf0ea3fbccff0a_commercial-hero-img-new.webp')}
            alt="Gray wooden building with a peaked roof and white double doors, surrounded by manicured bushes and green lawn."
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 pb-16">
          <div className="relative w-24 h-8 mb-8">
            <Image
              src={"/logos/sunrise-logo.svg"}
              alt="SUNRISE Landscape - Design"
              fill
              className="object-contain object-left"
              sizes="96px"
            />
          </div>
          <p className="section-label text-orange mb-4">Commercial Services</p>
          <h1 className="text-4xl lg:text-6xl text-cream leading-tight max-w-3xl">
            Commercial Landscape Maintenance in Virginia
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl text-green mb-6">
                Commercial Landscape Services in Northern Virginia
              </h2>
              <p className="text-green/70 leading-relaxed mb-6">
                Transform your commercial property into a distinctive destination that welcomes, impresses, and adds value to your business investment. From corporate campuses to vibrant community spaces, we bring our signature blend of artistic vision and professional excellence to every commercial project.
              </p>
              <p className="text-green/70 leading-relaxed">
                Whether managing sprawling corporate campuses, maintaining pristine HOA communities, or enhancing retail environments, our team brings decades of experience to every project. We understand the unique challenges of data centers, multi-family properties, and religious institutions, crafting solutions that balance beauty with functionality.
              </p>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[16/9] overflow-hidden" style={{ borderRadius: '16px' }}>
                <Image
                  src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68230cb41bf1c271c22f3138_commercial-img%20(1).webp')}
                  alt="Modern glass building illuminated with blue and yellow lights at dusk, surrounded by trees and lawn."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden" style={{ borderRadius: '16px' }}>
                <Image
                  src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/68828a60664f16a909e9fa6b_image002.jpg')}
                  alt="Sidewalk alongside a building with stone and wood exterior, bordered by pink and white flowers, with a grassy hill and another building in the background under a blue sky."
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-2xl lg:text-3xl text-green mb-10">
            Our Commercial Landscaping Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Corporate Campus Maintenance',
              'HOA Community Landscaping',
              'Retail Property Care',
              'Data Center Grounds',
              'Multi-Family Properties',
              'Religious Institution Grounds',
            ].map((service) => (
              <div key={service} className="border-l-4 border-orange pl-4 py-2">
                <p className="font-ui text-sm font-bold text-green tracking-wide">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['commercial']} />

      {/* Service area bar */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
