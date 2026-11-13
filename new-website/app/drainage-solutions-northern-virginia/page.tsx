import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'
import ServiceExpansion from '@/components/ServiceExpansion'
import { serviceExpansions } from '@/lib/serviceExpansions'
import { SITE_URL } from '@/lib/siteUrl'

export const metadata: Metadata = {
  alternates: { canonical: '/drainage-solutions-northern-virginia' },
  title: 'Drainage Solutions Northern Virginia | Sunrise Landscape',
  description: 'Professional drainage solutions in Northern Virginia. Protect your property from water damage with expert erosion control and drainage systems.',
  openGraph: {
    title: 'Drainage Solutions Northern Virginia | Sunrise Landscape',
    description: 'Professional drainage solutions in Northern Virginia. Protect your property from water damage with expert erosion control and drainage systems.',
    type: 'website',
    images: [{ url: `${SITE_URL}/media/og/sunrise-landscape-og.png`, width: 1200, height: 630 }],
  },
  twitter: {
    title: 'Drainage Solutions Northern Virginia | Sunrise Landscape',
    description: 'Professional drainage solutions in Northern Virginia. Protect your property from water damage with expert erosion control and drainage systems.',
    card: 'summary_large_image',
    images: [`${SITE_URL}/media/og/sunrise-landscape-og.png`],
  },
}

export default function DrainageSolutionsPage() {
  const jsonLd = getMdxJsonLd('pages/drainage-solutions-northern-virginia/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO — clean full-bleed image ── */}
      <section className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image
          src="/media/drainage/drainage-pipe-fabric-gravel-hero.jpg"
          alt="Sunrise crew installing a large corrugated drainage pipe wrapped in filter fabric and gravel, with an excavator at work behind it"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {/* ── HEADING + BODY ── */}
      <section className="bg-green py-16 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-cream text-lg lg:text-xl font-bold uppercase tracking-widest mb-4">
                Drainage Solutions in Northern Virginia
              </h1>
              <p className="editorial-display text-4xl sm:text-5xl lg:text-7xl text-cream leading-tight">
                <span className="block" style={{ fontSize: '0.72em' }}>Drainage</span>
                and Erosion Control
              </p>
            </div>
            <div>
              <p className="text-cream text-lg lg:text-xl leading-relaxed mb-8">
                Where art meets engineering, we transform water challenges into opportunities for landscape enhancement. Our expertise ensures your property remains beautiful and structurally sound through every season.
              </p>
              <Link href="/contact#form" className="inline-flex items-center gap-2 text-orange uppercase tracking-widest font-bold hover:underline underline-offset-2">
                <span>Schedule a Call</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL DRAINAGE SOLUTIONS ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#e7e6d2' }}>
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: single image */}
            <div className="relative overflow-hidden" style={{ borderRadius: '20px', aspectRatio: '4/3' }}>
              <Image
                src="/media/drainage/drainage-crew-compacting-gravel.jpg"
                alt="Sunrise crew compacting the gravel bed over filter fabric on a drainage installation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Right: content */}
            <div>
              <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-6">
                Professional Drainage Solutions in Northern Virginia
              </h2>
              <p className="prose-content mb-6">
                Water should flow gracefully through your landscape, not compromise it. Our solutions blend seamlessly with your existing design while providing crucial protection for your investment.
              </p>
              <p className="font-ui text-sm font-bold uppercase tracking-wider text-green mb-4">Signs Your Property Needs Attention:</p>
              <ul className="space-y-3">
                {['Standing water', 'Soggy lawn areas', 'Foundation concerns', 'Erosion patterns', 'Basement seepage', 'Landscape deterioration'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div style={{ backgroundColor: '#1e3526', borderRadius: '50%', width: '20px', height: '20px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="10" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                        <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-base text-green/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 lg:mt-16">
            {[
              { src: '/media/work/drainage-pipe-junction-trench.jpg', alt: 'Drain lines joined at a junction in an open trench' },
              { src: '/media/work/drainage-downspout-tie-in-river-rock.jpg', alt: 'Downspout tied into a buried drain line with river rock at the outlet' },
              { src: '/media/work/drainage-geogrid-berm-slope.jpg', alt: 'Geogrid laid on a slope to build a berm that redirects water' },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '16px' }}>
                <Image src={photo.src} alt={photo.alt} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DRAINAGE AND EROSION CONTROL SERVICES ── */}
      <section className="py-16 lg:py-24 bg-green">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-cream leading-tight mb-12 text-center">
            Drainage and Erosion Control Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Prevention & Protection */}
            <div className="p-8 flex flex-col items-center text-center" style={{ borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.07)' }}>
              <div className="w-12 h-12 mb-5 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
                </svg>
              </div>
              <h3 className="font-ui not-italic text-xl font-bold text-cream mb-4">Prevention &amp; Protection</h3>
              <ul className="text-cream space-y-2 text-left w-full">
                {['Foundation safeguarding', 'Soil stabilization', 'Lawn preservation', 'Root zone protection'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Artistic Solutions */}
            <div className="p-8 flex flex-col items-center text-center" style={{ borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.07)' }}>
              <div className="w-12 h-12 mb-5 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="13.5" cy="6.5" r="2.5" />
                  <circle cx="19" cy="11" r="2" />
                  <circle cx="6" cy="12" r="2.5" />
                  <circle cx="10" cy="18" r="2" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.19-1.01-.5-1.38-.31-.37-.5-.85-.5-1.37 0-1.1.9-2 2-2h2.34C19.9 15.25 22 13.26 22 11c0-4.97-4.48-9-10-9z" />
                </svg>
              </div>
              <h3 className="font-ui not-italic text-xl font-bold text-cream mb-4">Artistic Solutions</h3>
              <ul className="text-cream space-y-2 text-left w-full">
                {['Decorative drainage channels', 'Designer catch basins', 'Sculptural retaining walls', 'Dry creek beds'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Engineering Innovation */}
            <div className="p-8 flex flex-col items-center text-center" style={{ borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.07)' }}>
              <div className="w-12 h-12 mb-5 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>
              <h3 className="font-ui not-italic text-xl font-bold text-cream mb-4">Engineering Innovation</h3>
              <ul className="text-cream space-y-2 text-left w-full">
                {['French drain systems', 'Precision grading', 'Bioswale integration', 'Storm water management'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Property Enhancement */}
            <div className="p-8 flex flex-col items-center text-center" style={{ borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.07)' }}>
              <div className="w-12 h-12 mb-5 flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: '50%' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 8C8 10 5.9 16.17 3.82 19.5" />
                  <path d="M9.5 4.5C9.5 4.5 9 9 11 11c2 2 6.5 1.5 6.5 1.5" />
                  <path d="M3.82 19.5C5 17 8 12 17 8c0 0-2.5 7-9 11.5" />
                </svg>
              </div>
              <h3 className="font-ui not-italic text-xl font-bold text-cream mb-4">Property Enhancement</h3>
              <ul className="text-cream space-y-2 text-left w-full">
                {['Landscape contouring', 'Natural stone solutions', 'Native plant integration', 'Sustainable designs'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-orange font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECT: real job photos (CompanyCam, June 2025) ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-5">
              Inside a Recent Drainage Project
            </h2>
            <p className="text-green/70 text-lg leading-relaxed">
              Photos from a three-day job our crew finished in June 2025: a large drain pipe set in a trench, wrapped in filter fabric and gravel, buried, and finished with a stone outlet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { src: '/media/drainage/drainage-setting-pipe-trench.jpg', alt: 'Sunrise crew setting a large corrugated drain pipe in a trench', caption: 'Day 1: setting the drain pipe in the trench.' },
              { src: '/media/drainage/drainage-pipe-run-woods.jpg', alt: 'Drain pipe running downhill through a wooded yard toward the outlet', caption: 'The pipe runs downhill through the woods to the outlet.' },
              { src: '/media/drainage/drainage-gravel-over-fabric.jpg', alt: 'Excavator spreading gravel over filter fabric around the new drain pipe', caption: 'Day 2: filter fabric and gravel go in around the pipe.' },
              { src: '/media/drainage/drainage-backfill-track-loader.jpg', alt: 'Crew member backfilling the trench with a compact track loader', caption: 'Backfilling the trench with the track loader.' },
              { src: '/media/drainage/drainage-stone-outlet-apron.jpg', alt: 'Stone apron laid at the drain pipe outlet to slow the water', caption: 'Day 3: a stone apron at the outlet slows the water and stops erosion.' },
              { src: '/media/drainage/drainage-finished-outlet.jpg', alt: 'Finished drain pipe outlet with stone apron, three days after the job started', caption: 'The finished outlet, three days start to finish.' },
            ].map((photo) => (
              <figure key={photo.src}>
                <div className="relative overflow-hidden" style={{ borderRadius: '16px', aspectRatio: '4/5' }}>
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
                <figcaption className="mt-3 text-green/80 text-base leading-snug">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEGIN YOUR PROTECTION PLAN ── */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <Image
          src="/media/drainage/drainage-stone-outlet-finished.jpg"
          alt="Finished drainage pipe outlet with a stone apron in a wooded yard"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl text-white leading-none mb-6">
            Begin <em>Your Protection</em> Plan
          </h2>
          <p className="text-white/75 max-w-2xl mx-auto mb-8 text-lg">
            Don&apos;t wait for water to compromise your property&apos;s beauty and integrity. Let&apos;s discuss a solution that works as beautifully as it functions.
          </p>
          <Link
            href="/contact#form"
            className="inline-flex items-center gap-2 font-ui font-bold uppercase tracking-wider text-orange text-sm hover:gap-3 transition-all"
          >
            Contact Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── CROSS-LINK: retaining walls ── */}
      <section className="bg-cream py-10 px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-green/70 leading-relaxed">
            Grading and drainage on a slope often call for a wall to hold the new grade in place.{' '}
            <Link href="/retaining-walls-northern-virginia" className="font-bold text-green underline hover:text-orange">
              See our retaining wall construction services
            </Link>
            , designed and built alongside your drainage plan.
          </p>
        </div>
      </section>

      <ServiceExpansion data={serviceExpansions['drainage-solutions-northern-virginia']} />

      {/* ── SERVICE AREA BAR ── */}
      <ServiceAreasSection />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />
    </>
  )
}
