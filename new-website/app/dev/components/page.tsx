import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import ServiceCarousel from '@/components/ServiceCarousel'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import MaintenanceSection from '@/components/MaintenanceSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FeaturedWorkCarousel from '@/components/FeaturedWorkCarousel'
import WaterFeaturesCarousel from '@/components/WaterFeaturesCarousel'
import HardscapeCarousel from '@/components/HardscapeCarousel'
import BlogGrid from '@/components/BlogGrid'
import FaqAccordion from '@/components/FaqAccordion'
import NewsletterSidebar from '@/components/NewsletterSidebar'
import ContactFormSection from '@/components/ContactFormSection'
import { cdnToLocal } from '@/lib/mediaUrl'
import { BLOGS } from '@/lib/blogData'

/* ── Sample data ── */

const sampleTestimonials = [
  { text: 'Got a new patio for the lower level of my townhome. Previously had drainage problems and shifting uneven stones. Sunrise went the extra mile and delivered something that looks great.', name: 'Chris', location: 'Reston', stars: 5 },
  { text: 'Sunrise transformed our plain yard into a stunning outdoor escape. From concept to completion, every detail was handled with care. We couldn\'t be happier!', name: 'Jack', location: 'Oakton', stars: 5 },
  { text: 'Linda provided valuable guidance and detailed plans. Brandon and his team worked diligently and delivered a beautiful result. Highly recommend for any outdoor project.', name: 'Lisa & Rick', location: 'Aldie', stars: 5 },
]

const sampleProjects = [
  { img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7a462c7d0f5245e2a462_cover.webp'), alt: 'Stone patio project', name: 'Backyard Living Retreat', location: 'Great Falls, VA' },
  { img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7d113c21f26f490bb45a_folder-2-cover-1.webp'), alt: 'Koi pond and fire pit', name: 'Koi Pond & Fire Pit', location: 'Ashburn, VA' },
  { img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e1387270569bd211cb9_folder-3-cover.webp'), alt: 'Estate garden', name: 'Estate Elegance', location: 'Vienna, VA' },
  { img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7ecfc4042333b3219c72_folder-4-cover.webp'), alt: 'Grand entrance', name: 'Grand Entrance Design', location: 'Oakton, VA' },
]

const sampleFaqs = [
  { q: 'How long does a typical landscape design project take?', a: 'Most residential design-build projects range from 4 to 12 weeks depending on scope, permitting, and seasonal scheduling. We provide a detailed timeline at the proposal stage.' },
  { q: 'Do you offer maintenance plans after installation?', a: 'Yes. We offer tiered recurring maintenance packages covering lawn care, seasonal cleanups, bed maintenance, fertilization, and more. Ask about our combination pricing.' },
  { q: 'What areas do you serve?', a: 'Our primary markets are Great Falls, McLean, Vienna, and Oakton. We also serve Leesburg, Aldie, Middleburg, and the broader Fairfax and Loudoun County areas.' },
]

/* ── Section label helper ── */
function Section({ label, sub, children, dark }: { label: string; sub?: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={dark ? 'bg-[#1e3526]' : 'bg-[#faf9f4]'}>
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 py-14">
        <div className="mb-10 pb-6 border-b" style={{ borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)' }}>
          <p className={`font-ui text-xs font-bold tracking-[0.2em] uppercase mb-1 ${dark ? 'text-orange-400' : 'text-[#ff6400]'}`}>Component</p>
          <h2 className={`font-ui not-italic font-bold text-2xl ${dark ? 'text-white' : 'text-[#1e3526]'}`}>{label}</h2>
          {sub && <p className={`text-sm mt-1 ${dark ? 'text-white/50' : 'text-black/40'}`}>{sub}</p>}
        </div>
        {children}
      </div>
    </div>
  )
}

function StateRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-6 py-4 border-b border-black/6 last:border-0">
      <span className="w-24 flex-shrink-0 font-ui text-xs font-bold tracking-widest uppercase text-black/30">{label}</span>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </div>
  )
}

/* ── Page ── */
export default function ComponentsPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-[#1e3526] pt-28 pb-10">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <p className="font-ui text-xs font-bold tracking-[0.2em] uppercase text-[#ff6400] mb-2">Internal</p>
          <h1 className="font-ui not-italic font-bold text-4xl text-white mb-3">Component Showcase</h1>
          <p className="text-white/50 text-sm">All site components rendered live. Not indexed.</p>
          <Link href="/" className="inline-block mt-4 text-white/40 text-xs hover:text-white transition-colors">← Back to site</Link>
        </div>
      </div>

      {/* ── 1. Design Tokens ── */}
      <Section label="Design Tokens" sub="Color palette and typography scale">
        <div className="space-y-10">

          {/* Colors */}
          <div>
            <p className="font-ui font-bold text-xs tracking-widest uppercase text-black/30 mb-4">Colors</p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'green', hex: '#1e3526', token: 'bg-green / text-green' },
                { name: 'cream', hex: '#e7e6d2', token: 'bg-cream / text-cream' },
                { name: 'paper', hex: '#faf9f4', token: 'bg-paper' },
                { name: 'orange', hex: '#ff6400', token: 'bg-orange / text-orange' },
                { name: 'white', hex: '#ffffff', token: 'text-white' },
                { name: 'black', hex: '#000000', token: 'text-black' },
              ].map((c) => (
                <div key={c.name} className="flex flex-col gap-2 w-32">
                  <div className="h-14 w-full border border-black/8" style={{ backgroundColor: c.hex, borderRadius: '10px' }} />
                  <p className="font-ui font-bold text-xs text-black/70">{c.name}</p>
                  <p className="text-xs text-black/35">{c.hex}</p>
                  <p className="text-xs text-black/35 font-mono">{c.token}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div>
            <p className="font-ui font-bold text-xs tracking-widest uppercase text-black/30 mb-4">Typography</p>
            <div className="space-y-5">
              <div><p className="text-xs text-black/30 mb-1 font-mono">bold clamp(3rem,6vw,6rem)</p><p className="font-ui font-bold text-green" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 1 }}>Display Heading</p></div>
              <div><p className="text-xs text-black/30 mb-1 font-mono">editorial-display italic clamp(2rem,4vw,4rem)</p><p className="editorial-display italic text-green" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', lineHeight: 1.1 }}>Editorial Italic</p></div>
              <div><p className="text-xs text-black/30 mb-1 font-mono">bold text-2xl</p><p className="font-ui font-bold text-green text-2xl">Section Heading</p></div>
              <div><p className="text-xs text-black/30 mb-1 font-mono">text-base</p><p className="text-base text-green">Body Heading / Nav</p></div>
              <div><p className="text-xs text-black/30 mb-1 font-mono">text-base</p><p className="text-base text-black/70 leading-relaxed">Body copy. A great planting does more than fill space — it brings life, texture, and story to your landscape.</p></div>
              <div><p className="text-xs text-black/30 mb-1 font-mono">section-label (text-orange)</p><p className="section-label text-[#ff6400]">Section Label Tag</p></div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 2. Buttons & CTAs ── */}
      <Section label="Buttons & CTAs" sub="All interactive button states. Hover over each to test the live state.">
        <StateRow label="btn-primary">
          <button className="btn-primary"><span>Default State</span></button>
          <span className="text-xs text-black/30 font-mono">bg-orange text-cream → hover scales + shadow</span>
        </StateRow>
        <StateRow label="btn-primary (link)">
          <Link href="/contact" className="btn-primary"><span>Free Consultation</span></Link>
        </StateRow>
        <StateRow label="Inquire (nav)">
          <Link href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 font-ui font-bold text-xs tracking-wider uppercase transition-all duration-300 text-green bg-cream hover:bg-orange hover:text-cream" style={{ borderRadius: '8px' }}>Inquire</Link>
          <span className="text-xs text-black/30 font-mono">bg-cream text-green → hover bg-orange text-cream</span>
        </StateRow>
        <StateRow label="Phone (nav)">
          <a href="tel:703-544-0028" className="inline-flex items-center gap-2 px-4 py-2 font-ui font-bold text-xs tracking-wider uppercase text-[#1e3526] border border-[#1e3526]/40 hover:border-[#ff6400] hover:text-[#ff6400] transition-colors duration-200" style={{ borderRadius: '8px' }}>
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M3 5a2 2 0 012-2h1.5a1 1 0 01.96.72l.96 3.2a1 1 0 01-.23 1.01L7 9.14a11.06 11.06 0 004.86 4.86l1.21-1.21a1 1 0 011.01-.23l3.2.96A1 1 0 0118 14.5V16a2 2 0 01-2 2h-.5C7.16 18 2 12.84 2 6.5V6a2 2 0 011-1.73V5z" /></svg>
            703-544-0028
          </a>
          <span className="text-xs text-black/30 font-mono">border-cream/40 → hover border-orange text-orange</span>
        </StateRow>
        <StateRow label="Text CTA">
          <a className="inline-flex items-center gap-2 section-label text-[#ff6400] hover:opacity-70 transition-opacity cursor-pointer">
            View All Services
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 -rotate-45"><path d="M4 10h12M12 5l5 5-5 5" /></svg>
          </a>
          <span className="text-xs text-black/30 font-mono">section-label text-orange → hover opacity-70</span>
        </StateRow>
        <StateRow label="nav-link">
          <div className="flex gap-4 bg-[#1e3526] px-6 py-3" style={{ borderRadius: '10px' }}>
            <a className="nav-link text-[#e7e6d2] px-2 cursor-pointer">Home</a>
            <a className="nav-link text-[#e7e6d2] px-2 cursor-pointer">About Us</a>
            <a className="nav-link text-[#e7e6d2] px-2 cursor-pointer">Contact</a>
          </div>
          <span className="text-xs text-black/30 font-mono">underline slide-in on hover, shown on green bg</span>
        </StateRow>
      </Section>

      {/* ── 3. ServiceCard ── */}
      <Section label="ServiceCard" sub="components/ServiceCard.tsx — used in service grids across pages. No interactive state beyond image zoom on parent hover.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            num="01"
            image={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7a462c7d0f5245e2a462_cover.webp')}
            alt="Stone patio project"
            title="Landscape Design"
            description="Expert outdoor space design for Northern Virginia homeowners."
            items={['Custom plant palettes', 'Seasonal interest', '3D design previews']}
          />
          <ServiceCard
            num="02"
            image={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7d113c21f26f490bb45a_folder-2-cover-1.webp')}
            alt="Hardscape project"
            title="Hardscape"
            description="Patios, walkways, fire pits, and retaining walls built to last."
          />
          <ServiceCard
            image={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/686b7e1387270569bd211cb9_folder-3-cover.webp')}
            alt="Garden maintenance"
            title="Without Number Prop"
            description="ServiceCard with no num prop — badge is omitted."
          />
        </div>
      </Section>

      {/* ── 4. FaqAccordion ── */}
      <Section label="FaqAccordion" sub="components/FaqAccordion.tsx — click rows to toggle. hover: question text turns orange. + icon rotates 45° when open.">
        <div className="max-w-2xl">
          <FaqAccordion faqs={sampleFaqs} />
        </div>
      </Section>

      {/* ── 5. NewsletterSidebar ── */}
      <Section label="NewsletterSidebar" sub="components/NewsletterSidebar.tsx — shown sticky in blog post sidebar. Email input with submit state.">
        <div className="max-w-xs">
          <NewsletterSidebar />
        </div>
      </Section>

      {/* ── 6. MaintenanceSection ── */}
      <Section label="MaintenanceSection" sub="components/MaintenanceSection.tsx — accordion on the left, image on the right. Click rows to expand. Used on homepage and maintenance page.">
        <MaintenanceSection />
      </Section>

      {/* ── 7. TestimonialsSection ── */}
      <Section label="TestimonialsSection" sub="components/TestimonialsSection.tsx — horizontal scroll carousel. Arrow buttons and drag/swipe. bg: #ced4bc.">
        <TestimonialsSection testimonials={sampleTestimonials} />
      </Section>

      {/* ── 8. FeaturedWorkCarousel ── */}
      <Section label="FeaturedWorkCarousel" sub="components/FeaturedWorkCarousel.tsx — full-bleed project cards, scrolls horizontally. Accepts title (ReactNode), ctaLabel, ctaHref props." dark>
        <FeaturedWorkCarousel
          projects={sampleProjects}
          title={<><span className="editorial-display italic">Featured</span> landscape projects</>}
          ctaLabel="Schedule a Call"
          ctaHref="/contact"
        />
      </Section>

      {/* ── 9. ServiceCarousel ── */}
      <Section label="ServiceCarousel" sub="components/ServiceCarousel.tsx — global Our Other Services horizontal card carousel. No props, self-contained data." dark>
        <ServiceCarousel />
      </Section>

      {/* ── 10. WaterFeaturesCarousel ── */}
      <Section label="WaterFeaturesCarousel" sub="components/WaterFeaturesCarousel.tsx — water features project portfolio. Same carousel pattern." dark>
        <WaterFeaturesCarousel />
      </Section>

      {/* ── 11. HardscapeCarousel ── */}
      <Section label="HardscapeCarousel" sub="components/HardscapeCarousel.tsx — hardscape project portfolio. Requires slides prop: { src: string; alt: string }[]." dark>
        <HardscapeCarousel slides={[
          { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821c39fee5907320e170120_harmony-img-1%20(1).webp'), alt: 'Stone pathway leading to a wooden dock' },
          { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821c3be80facb1a793f7612_harmony-img-2%20(1).webp'), alt: 'Outdoor patio with fire pit' },
          { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cb4ae52f9959c143a822_work-img-1%20(1).webp'), alt: 'Patio with umbrella' },
          { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cb71a545e0059d060bf5_work-img-2%20(1).webp'), alt: 'Stone patio with fire pit seating' },
          { src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cb817cc578cffd2d3726_work-img-3%20(1).webp'), alt: 'Covered patio with fireplace' },
        ]} />
      </Section>

      {/* ── 12. BlogGrid ── */}
      <Section label="BlogGrid" sub="components/BlogGrid.tsx — category filter tabs (click to filter) + card grid. Active tab has bg-green text-cream. Inactive: border hover bg-green/5.">
        <BlogGrid posts={BLOGS.slice(0, 6)} />
      </Section>

      {/* ── 13. ServiceAreasSection ── */}
      <Section label="ServiceAreasSection" sub="components/ServiceAreasSection.tsx — dark horizontal bar listing service area cities. Placed above ContactFormSection on most pages. No props." dark>
        <ServiceAreasSection />
      </Section>

      {/* ── 14. ContactFormSection ── */}
      <Section label="ContactFormSection" sub="components/ContactFormSection.tsx — full-width cream lead capture form with topo background. No props. Placed at bottom of every service page before footer.">
        <ContactFormSection />
      </Section>

    </>
  )
}
