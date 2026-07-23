import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxFrontmatter, getMdxBody, getMdxJsonLd, getAllServiceAreaSlugs } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceCarousel from '@/components/ServiceCarousel'
import FaqAccordion from '@/components/FaqAccordion'
import { cityExpansions } from '@/lib/cityExpansions'
import FromOurBlog, { BLOG_ART } from '@/components/FromOurBlog'

export async function generateStaticParams() {
  return getAllServiceAreaSlugs().map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const fm = getMdxFrontmatter(`pages/service-areas/${city}/index.mdx`)
  // Manifest descriptions are empty for city pages (WQA finding, approved fix):
  // fall back to the build-kit expansion meta description.
  const expansion = cityExpansions[city]
  const heroImg = fm.images[0]
  const ogImage = expansion?.image
    ? {
        url: encodeURI(`https://www.sunriselandscapeanddesign.com${expansion.image.src}`),
        width: expansion.image.width,
        height: expansion.image.height,
      }
    : heroImg
      ? { url: encodeURI(`https://www.sunriselandscapeanddesign.com${cdnToLocal(heroImg.src)}`) }
      : undefined
  return {
    title: fm.title || 'Sunrise Landscape',
    description: fm.description || expansion?.metaDescription || undefined,
    openGraph: ogImage ? { images: [ogImage] } : undefined,
    twitter: ogImage ? { card: 'summary_large_image', images: [ogImage.url] } : undefined,
  }
}

function extractIntroParagraph(body: string): string {
  // Match text between the 2nd H2 (city name) and "## Our Services in".
  // Both leading H2s are matched explicitly so the capture group starts
  // after the city-name heading, not the "Landscape Services In" one —
  // otherwise the literal "## Great Falls" heading text leaks into the copy.
  const m = body.match(/## [^\n]+\n\n## [^\n]+\n\n([\s\S]+?)\n\n## Our Services in/)
  // Manifest body content is frozen, but the approved anniversary-math fix
  // (39 -> 40 years) applies here too — correct post-extraction rather than
  // editing the frozen MDX source.
  return m ? m[1].trim().replace(/\b39 years\b/, '40 years') : ''
}

function extractNeighborhoods(body: string): string {
  const m = body.match(/### Neighborhoods We Serve\n\n([^\n]+)/)
  return m ? m[1].trim() : ''
}

// Map a nearby-area image (alt text names the city) to its city page.
// Restores the original Webflow behavior: these cards linked to sibling city pages.
const NEARBY_SLUGS: Record<string, string> = {
  ashburn: 'landscaping-ashburn-va',
  centreville: 'landscaping-centreville-va',
  chantilly: 'landscaping-chantilly-va',
  'great falls': 'landscaping-great-falls-va',
  herndon: 'landscaping-herndon-va',
  leesburg: 'landscaping-leesburg-va',
  mclean: 'landscaping-mclean-va',
  oakton: 'landscaping-oakton-va',
  reston: 'landscaping-reston-va',
  sterling: 'landscaping-sterling-va',
  vienna: 'landscaping-vienna-va',
  'western loudoun': 'landscaping-western-loudoun-va',
}

function nearbyFromAlt(alt: string): { name: string; href: string } | null {
  const m = alt.match(/in (?:a |an |the )?([A-Za-z ]+?)(?: County)?, Virginia/i)
  if (!m) return null
  const name = m[1].trim()
  const slug = NEARBY_SLUGS[name.toLowerCase()]
  return slug ? { name, href: `/service-areas/${slug}` } : null
}

const serviceCards = [
  {
    heading: 'Hardscape Design Services',
    desc: 'Our hardscapes are designed to be visually stunning and functional, and built to last a lifetime.',
    href: '/hardscape-northern-virginia',
  },
  {
    heading: 'Landscape Design Services',
    desc: 'As experts in landscape and hardscape design, we specialize in crafting durable and visually stunning outdoor spaces that enhance both functionality and aesthetics.',
    href: '/landscape-design-northern-virginia',
  },
  {
    heading: 'Landscape Lighting Services',
    desc: 'Transform your property into an enchanting evening retreat with artfully designed landscape lighting.',
    href: '/landscape-lighting-northern-virginia',
  },
  {
    heading: 'Ponds & Water Feature',
    desc: 'Transform your outdoor sanctuary with the timeless allure of moving water. From meditative koi ponds to dramatic waterfalls, we craft water features that engage all the senses and create year-round interest in your landscape.',
    href: '/water-features-northern-virginia',
  },
  {
    heading: 'Drainage & Erosion Control',
    desc: 'Where art meets engineering, we transform water challenges into opportunities for landscape enhancement. Our expertise ensures your property remains beautiful and structurally sound through every season.',
    href: '/drainage-solutions-northern-virginia',
  },
  {
    heading: 'Landscape Maintenance Services',
    desc: 'Transform your outdoor space into a living masterpiece that evolves beautifully through every season. Our curated maintenance packages ensure your landscape receives precisely what it needs, when it needs it.',
    href: '/landscape-maintenance-northern-virginia',
  },
  {
    heading: 'Commercial Landscaping',
    desc: 'Transform your commercial property into a distinctive destination that welcomes, impresses, and adds value to your business investment. From corporate campuses to vibrant community spaces, we bring our signature blend of artistic vision and professional excellence to every commercial project.',
    href: '/commercial-landscape-maintenance-virginia',
  },
]

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const fm = getMdxFrontmatter(`pages/service-areas/${city}/index.mdx`)
  const jsonLd = getMdxJsonLd(`pages/service-areas/${city}/index.mdx`)
  const body = getMdxBody(`pages/service-areas/${city}/index.mdx`)

  // headings[1] = H2 city name (e.g. "Great Falls")
  const cityName = fm.headings[1]?.text || ''

  // images[0] = city hero, images[1] = SVG logo
  // images[2-8] = 7 service card images (hardscape, design, lighting, water, drainage, maintenance, commercial)
  // images[9-11] = 3 "also serving" nearby area images
  // images[12] = site logo PNG
  const heroImg = fm.images[0]
  const svgLogo = fm.images[1]
  const serviceImgs = fm.images.slice(2, 9)
  const nearbyImgs = fm.images.slice(9, 12)
  const pngLogo = fm.images[12]

  const introParagraph = extractIntroParagraph(body)
  const neighborhoods = extractNeighborhoods(body)

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Banner — image only, no overlay or text */}
      <section className="relative min-h-[55vh] bg-green overflow-hidden">
        {heroImg && (
          <Image
            src={cdnToLocal(heroImg.src)}
            alt={heroImg.alt}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
      </section>

      {/* Intro */}
      <section className="py-16 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl text-green leading-tight mb-8">
            Landscape Services in {cityName}
          </h1>
          {introParagraph && (
            <p className="text-green/70 max-w-3xl mx-auto leading-relaxed">
              {introParagraph}
            </p>
          )}
        </div>
      </section>

      {/* Service cards — carousel (7 cards never fit a 3-col grid cleanly).
          Card names render as H3s with the exact manifest text (frozen contract). */}
      <ServiceCarousel
        title={`Services in ${cityName}`}
        useHeadings
        items={serviceCards.map((svc, i) => ({
          name: svc.heading,
          body: svc.desc,
          href: svc.href,
          img: serviceImgs[i] ? cdnToLocal(serviceImgs[i].src) : '',
          alt: serviceImgs[i]?.alt || svc.heading,
        }))}
      />

      {/* Neighborhoods */}
      <section className="py-12 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8 text-center">
          <h3 className="font-ui not-italic text-base lg:text-lg font-bold uppercase tracking-widest text-green mb-4">
            Neighborhoods We Serve
          </h3>
          {neighborhoods && (
            <p className="text-green/70">{neighborhoods}</p>
          )}
        </div>
      </section>

      {/* ===== Build-kit expansion sections (additive; see build-kit/briefs/city-expansions) ===== */}
      {(() => {
        const expansion = cityExpansions[city]
        if (!expansion) return null
        return (
          <>
            <section className="py-12 bg-cream">
              <div className="max-w-screen-xl mx-auto px-5 lg:px-8 text-center">
                <h2 className="text-3xl lg:text-4xl text-green leading-tight mb-6">{expansion.knowledgeHeading}</h2>
                <p className="text-green/70 max-w-3xl mx-auto leading-relaxed">{expansion.knowledgePara}</p>
                {expansion.proofPara && (
                  <p className="text-green/70 max-w-3xl mx-auto leading-relaxed mt-4">{expansion.proofPara}</p>
                )}
                <p className="text-green/70 max-w-3xl mx-auto leading-relaxed mt-4">
                  Also serving: {expansion.extraNeighborhoods}
                </p>
                {expansion.image && (
                  <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto mt-8">
                    <Image
                      src={expansion.image.src}
                      alt={expansion.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 672px"
                    />
                  </div>
                )}
              </div>
            </section>

            <section className="py-12 bg-cream">
              <div className="max-w-screen-xl mx-auto px-5 lg:px-8 text-center">
                <h3 className="text-2xl lg:text-3xl text-green leading-tight mb-6">
                  Common Questions
                </h3>
                <div className="max-w-3xl mx-auto text-left">
                  <FaqAccordion faqs={expansion.faqs} />
                </div>
              </div>
            </section>

            {expansion.sibling && (
              <section className="py-12 bg-cream">
                <div className="max-w-screen-xl mx-auto px-5 lg:px-8 text-center">
                  <p className="text-green/70 max-w-3xl mx-auto leading-relaxed">
                    {expansion.sibling.line}{' '}
                    <Link href={expansion.sibling.href} className="underline text-green hover:text-orange">
                      {expansion.sibling.label}
                    </Link>
                  </p>
                </div>
              </section>
            )}

            {expansion.extraSibling && (
              <section className="py-12 bg-cream">
                <div className="max-w-screen-xl mx-auto px-5 lg:px-8 text-center">
                  <p className="text-green/70 max-w-3xl mx-auto leading-relaxed">
                    {expansion.extraSibling.line}{' '}
                    <Link href={expansion.extraSibling.href} className="underline text-green hover:text-orange">
                      {expansion.extraSibling.label}
                    </Link>
                  </p>
                </div>
              </section>
            )}

            <JsonLd
              data={[
                {
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: expansion.faqs.map((f) => ({
                    '@type': 'Question',
                    name: f.q,
                    acceptedAnswer: { '@type': 'Answer', text: f.a },
                  })),
                },
              ]}
            />
          </>
        )
      })()}

      {/* Also serving nearby */}
      <section className="py-12 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h3 className="font-ui not-italic text-base lg:text-lg font-bold uppercase tracking-widest text-green mb-6 text-center">
            Also Serving Nearby Areas
          </h3>
          {nearbyImgs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {nearbyImgs.map((img) => {
                const nearby = nearbyFromAlt(img.alt)
                const card = (
                  <div className="group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={cdnToLocal(img.src)}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    {nearby && (
                      <div className="flex items-center justify-between border border-t-0 border-green/20 px-4 py-3">
                        <span className="font-ui font-bold text-green group-hover:text-orange transition-colors">
                          Landscaping in {nearby.name}
                        </span>
                        <span aria-hidden className="text-orange font-bold">→</span>
                      </div>
                    )}
                  </div>
                )
                return nearby ? (
                  <Link key={img.src} href={nearby.href} aria-label={`Landscaping in ${nearby.name}`}>
                    {card}
                  </Link>
                ) : (
                  <div key={img.src}>{card}</div>
                )
              })}
            </div>
          )}
        </div>
      </section>


      {/* From Our Blog — matches the section added to the live site; design-relevant posts */}
      {/* BLOG_ART.design / .maintenance are reused as this template's own service-card
          images (design-img-2, MP-header-img-1) for every city, so use the .2 variants
          here to avoid repeating a photo already shown higher up on the same page. */}
      <FromOurBlog
        posts={[
          { slug: 'modern-landscape-design', image: BLOG_ART.maintenance2 },
          { slug: 'backyard-landscape-design', image: BLOG_ART.design2 },
          { slug: 'residential-landscaping', image: BLOG_ART.mowing },
        ]}
      />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
