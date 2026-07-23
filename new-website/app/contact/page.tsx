import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import ContactFormSection from '@/components/ContactFormSection'
import ContactHero from '@/components/ContactHero'
import LeafletMapClient from '@/components/LeafletMapClient'
import FaqAccordion from '@/components/FaqAccordion'
import { getMdxJsonLd } from '@/lib/manifest'

export const metadata: Metadata = {
  title: 'Contact Us | Sunrise Landscape',
  description: 'Contact Sunrise Landscape in Sterling, VA. Call 703-544-0028 or request a free consultation for your landscape project in Northern Virginia.',
  openGraph: {
    title: 'Contact Us | Sunrise Landscape',
    description: 'Contact Sunrise Landscape in Sterling, VA. Call 703-544-0028 or request a free consultation for your landscape project in Northern Virginia.',
    type: 'website',
  },
  twitter: {
    title: 'Contact Us | Sunrise Landscape',
    description: 'Contact Sunrise Landscape in Sterling, VA. Call 703-544-0028 or request a free consultation for your landscape project in Northern Virginia.',
    card: 'summary_large_image',
  },
}

const faqs = [
  {
    q: 'What areas do you serve?',
    a: 'Our primary service area covers Fairfax and Loudoun Counties, including Great Falls, McLean, Vienna, Oakton, Leesburg, and Aldie. For design-build projects we work throughout the greater DMV region. Maintenance services are limited to approximately 25 miles from our Sterling, VA office.',
  },
  {
    q: 'How do I get a free consultation?',
    a: 'Fill out the form on this page or give us a call at 703-544-0028. We will follow up within one business day to schedule a site visit. There is no cost or obligation for an initial consultation.',
  },
  {
    q: 'What is your design and build process from start to finish?',
    a: 'It starts with a site visit where we assess your property, discuss your goals, and understand your budget. From there, our designers develop a detailed plan and present it to you for review. Once approved, we handle all coordination, materials sourcing, and installation. We stay in communication with you throughout the project and walk through the finished work together before closing out.',
  },
  {
    q: 'How long does a landscape design-build project take?',
    a: 'Timelines vary based on the scope of work. A patio or fire pit installation typically takes one to two weeks once materials are on-site. Larger design-build projects involving grading, plantings, and hardscape can run four to eight weeks. We will give you a detailed schedule during your consultation.',
  },
  {
    q: 'Do you offer year-round maintenance programs?',
    a: 'Yes. We offer recurring maintenance programs that cover lawn care, mulching, fertilization, pre-emergent applications, seasonal cleanups, and landscape bed management. Programs are tailored to your property size and needs, and our maintenance team services properties within approximately 25 miles of our Sterling, VA office.',
  },
  {
    q: 'Can you help me meet HOA landscape requirements?',
    a: 'Absolutely. We work with homeowners throughout Northern Virginia who need to comply with HOA standards. We understand local community requirements around plant selections, mulch colors, fence and wall heights, and seasonal appearance standards. We can help you stay in good standing and keep your property looking its best year-round.',
  },
  {
    q: 'Do you handle the permits needed for hardscape or structural work?',
    a: 'Yes. For projects that require permits, such as retaining walls, drainage systems, or significant grading work, we manage the permitting process on your behalf. We are familiar with Loudoun and Fairfax County requirements and coordinate with local authorities so you do not have to.',
  },
  {
    q: 'Do you handle both residential and commercial properties?',
    a: 'Yes. We work with homeowners, HOAs, and commercial property managers across Northern Virginia. Our commercial division specializes in landscape design, installation, and ongoing maintenance programs for office parks, retail centers, and multi-family communities.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Absolutely. Sunrise Landscape and Design holds all required Virginia contractor licenses and carries full liability insurance and workers compensation coverage. We are happy to provide certificates of insurance upon request.',
  },
  {
    q: 'What is the best time of year to start a project?',
    a: 'We accept new projects year-round. Spring and early fall are peak seasons for planting and full landscape renovations, but hardscape work, drainage improvements, and design planning can begin at any time. Booking ahead in winter often means priority scheduling for spring.',
  },
]

// The homepage is the canonical LocalBusiness entity (see app/page.tsx).
// Strip LocalBusiness nodes from the contact page's manifest JSON-LD so the
// two pages don't compete as separate business entities in search results.
function stripLocalBusiness(data: object[]): object[] {
  return data
    .filter((item) => (item as { '@type'?: string })['@type'] !== 'LocalBusiness')
    .map((item) => {
      const graph = (item as { '@graph'?: { '@type'?: string }[] })['@graph']
      if (!graph) return item
      return { ...item, '@graph': graph.filter((g) => g['@type'] !== 'LocalBusiness') }
    })
}

export default function ContactPage() {
  const jsonLd = stripLocalBusiness(getMdxJsonLd('pages/contact/index.mdx'))

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO ── */}
      <ContactHero />

      {/* ── CONTACT FORM ── */}
      <ContactFormSection />

      {/* ── GET IN TOUCH ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-14 text-center">
            Get in Touch
          </h2>

          {/* Icon contact row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14 max-w-3xl mx-auto text-center">
            {/* Email */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-green/8 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '50%' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e3526" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
              </div>
              <div>
                <p className="font-ui text-xs font-bold uppercase tracking-widest text-green/50 mb-1">Email</p>
                <a href="mailto:info@sunriselandscapeanddesign.com" className="block py-2.5 text-base text-green hover:text-orange transition-colors">
                  info@sunriselandscapeanddesign.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-green/8 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '50%' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e3526" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 5.93 5.93l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-ui text-xs font-bold uppercase tracking-widest text-green/50 mb-1">Phone</p>
                <a href="tel:703-544-0028" className="block py-2.5 text-base text-green hover:text-orange transition-colors">
                  703-544-0028
                </a>
              </div>
            </div>

            {/* Office */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 bg-green/8 flex items-center justify-center flex-shrink-0" style={{ borderRadius: '50%' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1e3526" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="font-ui text-xs font-bold uppercase tracking-widest text-green/50 mb-1">Office</p>
                <address className="text-base text-green not-italic leading-relaxed">
                  43813 Beaver Meadow Rd #100<br />
                  Sterling, VA 20166
                </address>
              </div>
            </div>
          </div>

          {/* Map */}
          <LeafletMapClient />
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl text-green leading-tight mb-3">
            FAQs
          </h2>
          <p className="text-green/60 mb-10">
            Common questions about working with Sunrise Landscape.
          </p>
          <div className="mb-14 text-left">
            <FaqAccordion faqs={faqs} />
          </div>

          <div className="bg-green p-10 lg:p-14 text-center" style={{ borderRadius: '16px' }}>
            <h3 className="text-2xl lg:text-3xl text-cream mb-3">Still have questions?</h3>
            <p className="text-cream mb-8">Our team is happy to help. Reach out any time.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:703-544-0028" className="btn-primary"><span>Call 703-544-0028</span></a>
              <a href="mailto:info@sunriselandscapeanddesign.com" className="btn-ghost text-cream border-cream/40"><span>Email Us</span></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
