import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import ServiceAreasSection from '@/components/ServiceAreasSection'
import CareerAccordion from '@/components/CareerAccordion'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'
import ContactFormSection from '@/components/ContactFormSection'

export const metadata: Metadata = {
  title: 'Landscaping Careers Northern Virginia | Sunrise Landscape',
  description: 'Join Sunrise Landscape and Design in Northern Virginia. We\'re hiring skilled landscape professionals for design, installation, and maintenance. Apply today.',
  openGraph: {
    title: 'Landscaping Careers Northern Virginia | Sunrise Landscape',
    description: 'Join Sunrise Landscape and Design in Northern Virginia. We\'re hiring skilled landscape professionals for design, installation, and maintenance. Apply today.',
    type: 'website',
  },
  twitter: {
    title: 'Landscaping Careers Northern Virginia | Sunrise Landscape',
    description: 'Join Sunrise Landscape and Design in Northern Virginia. We\'re hiring skilled landscape professionals for design, installation, and maintenance. Apply today.',
    card: 'summary_large_image',
  },
}

const whyWork = [
  {
    heading: 'Professional Growth',
    items: ['Comprehensive training', 'Skill development', 'Career advancement', 'Mentorship opportunities', 'Industry certifications'],
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6836d8e3e6470f81829242c8_success_11350673.png'),
    alt: 'A person next to a growth graph',
  },
  {
    heading: 'Tools for Success',
    items: ['Premium equipment', 'Company vehicles', 'Professional uniforms', 'Latest technology', 'Safety gear'],
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6836d7f8010663ec9af7dd58_trophy_8377990.png'),
    alt: 'A cup with a hand below it',
  },
  {
    heading: 'Quality of Life',
    items: ['Competitive compensation', 'Health benefits', 'Paid time off', 'Work-life balance', 'Year-round employment'],
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6836d748eb20d9202cc6c58f_employee_5491841.png'),
    alt: 'A person surrounded from a dollar sign, an umbrella and a house',
  },
  {
    heading: 'Culture of Excellence',
    items: ['Team recognition', 'Performance rewards', 'Company events', 'Collaborative environment', 'Professional development'],
    img: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6836d84bb42491bf5612007b_group_10227316.png'),
    alt: 'A group of three people',
  },
]

const positions = [
  {
    title: 'Hardscape/Construction Crew Leader',
    intro: 'Do you have experience installing hardscapes? Are you able to manage a crew as well as run the job? If so, then we want to hire you as one of our Hardscape Crew Leaders. Requirements:',
    requirements: [
      'Ability to manage your crew and perform all facets of the landscape installation.',
      '3+ years Hardscape/Construction experience.',
      'Experience with installation of low voltage lighting and pavers.',
      'Need basic grading, concrete, and masonry experience.',
      'Ability to diagnose landscape problems on the job.',
      'Comfortable operating machines and transporting machines to worksites.',
      'Ability to perform all job functions including mulching, plant installation, hardscape installation, laying sod, train team members.',
      'VA drivers license and clean record required.',
      'Bilingual in Spanish and English is preferred. Must be able to lift 50lbs.',
    ],
  },
  {
    title: 'Hardscape/Construction Laborer',
    intro: 'If so, you should join the Sunrise team as a Hardscape/Construction laborer. You will work as part of a team building patios, installing water features, installing plants, and more. Important Information:',
    requirements: [
      'VA drivers license is preferred.',
      'Prior landscaping experience is preferred.',
      'Duties may include: Mulching, installing plant materials, hardscape installation, laying sod, clean up of job site.',
      'Must be able to take direction and to learn to operate equipment to perform jobs.',
      'Must be able to lift 50lbs.',
    ],
  },
  {
    title: 'Landscape Maintenance Crew Leader',
    intro: 'Do you have experience maintaining lawns and landscapes in Northern VA? Do you enjoy working as a team? If so, you should join the Sunrise team as a Landscape Maintenance Crew Leader. Important Information:',
    requirements: [
      'VA driver\'s license required.',
      '3+ years prior landscape industry experience required.',
      'Responsibilities may include: managing a schedule, communicating with office team members, supervising crew members. Operate small equipment to perform job duties. Mow, mulch, prune, plant, weed and participate in overall lawn care.',
      'Bilingual in Spanish and English is preferred.',
      'Must be able to lift 50lbs.',
      'Must be able to train other team members to perform job duties.',
    ],
  },
  {
    title: 'Landscape Maintenance Laborer',
    intro: 'Do you love working outdoors? Do you enjoy putting in a hard days work, getting your hands dirty and seeing a lawn transform before your eyes? If so, you need to join the Sunrise team as a landscape maintenance laborer. Important Information:',
    requirements: [
      'VA driver\'s license preferred.',
      'Prior landscape experience preferred.',
      'Responsibilities may include: mowing, mulching, pruning, aeration, weeding, operate small equipment to perform job duties, overall lawn care.',
      'Ability to take direction and follow landscape instructions.',
      'Must be able to lift 50lbs.',
    ],
  },
]

const TOPO_LINES = [
  'M-50,480 C120,420 300,500 500,440 C660,392 780,452 1000,420',
  'M-50,430 C100,370 280,450 480,390 C640,342 760,402 1000,370',
  'M-50,380 C80,320 260,400 460,340 C620,292 740,352 1000,320',
  'M-50,330 C60,270 240,350 440,290 C600,242 720,302 1000,270',
  'M-50,280 C40,220 220,300 420,240 C580,192 700,252 1000,220',
  'M-50,230 C20,170 200,250 400,190 C560,142 680,202 1000,170',
  'M-50,180 C0,120 180,200 380,140 C540,92 660,152 1000,120',
  'M-50,130 C-20,70 160,150 360,90 C520,42 640,102 1000,70',
]

export default function CareerPage() {
  const jsonLd = getMdxJsonLd('pages/career/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="relative min-h-[540px] lg:min-h-[620px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1734303023491-db8037a21f09?auto=format&fit=crop&w=1920&q=80"
          alt="Landscaper mowing a green lawn on a sunny day"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 pt-44 pb-20 w-full">
          <h1 className="text-4xl lg:text-6xl text-cream mb-6" style={{ lineHeight: 1 }}>
            <span
              style={{
                fontFamily: 'var(--font-editorsnote), Georgia, serif',
                fontStyle: 'italic',
                display: 'block',
                marginBottom: '0.15em',
              }}
            >
              Grow With Us:
            </span>
            <span
              className="font-ui font-bold block"
            >
              Careers at Sunrise
            </span>
          </h1>
          <p className="text-cream max-w-md leading-relaxed mb-8">
            Join a team where artistry meets opportunity. At Sunrise, we&rsquo;re not just creating beautiful landscapes, we&rsquo;re cultivating careers for passionate professionals who take pride in transforming outdoor spaces.
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Get in Touch</span>
          </Link>
        </div>
      </section>

      {/* Why Work */}
      <section className="py-16 lg:py-28 bg-cream">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <h2
            className="text-3xl lg:text-4xl text-center text-green mb-4"
            style={{ lineHeight: 1.05 }}
          >
            <span
              style={{
                fontFamily: 'var(--font-editorsnote), Georgia, serif',
                fontStyle: 'italic',
              }}
            >
              Why
            </span>
            {' '}
            <span className="font-ui font-bold">Work At</span>
            {' '}
            <span
              style={{
                fontFamily: 'var(--font-editorsnote), Georgia, serif',
                fontStyle: 'italic',
              }}
            >
              Sunrise?
            </span>
          </h2>
          <p className="text-center text-green/60 max-w-2xl mx-auto mb-16 leading-relaxed">
            Whether you&rsquo;re an experienced hardscape artisan or aspiring landscape professional, Sunrise offers an environment where creativity flourishes and excellence is rewarded.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px_1fr] xl:grid-cols-[1fr_440px_1fr] gap-10 lg:gap-8 items-start">
            {/* Left column */}
            <div className="space-y-14 lg:pt-6">
              {[whyWork[0], whyWork[1]].map((item) => (
                <div key={item.heading} className="text-center">
                  <div className="relative w-16 h-16 mb-5 mx-auto">
                    <Image src={item.img} alt={item.alt} fill className="object-contain" sizes="64px" />
                  </div>
                  <h3 className="font-ui not-italic font-bold text-green text-base mb-4 tracking-wide">
                    {item.heading}
                  </h3>
                  <ul className="space-y-1">
                    {item.items.map((it) => (
                      <li key={it} className="text-base text-green/60">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Center: team photo */}
            <div className="relative overflow-hidden order-first lg:order-none" style={{ aspectRatio: '3/4', borderRadius: '16px' }}>
              <Image
                src={cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6825b46f04c55a8038291b82_career-work-img.webp')}
                alt="The Sunrise Landscape team posing with trucks and equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>

            {/* Right column */}
            <div className="space-y-14 lg:pt-6">
              {[whyWork[2], whyWork[3]].map((item) => (
                <div key={item.heading} className="text-center">
                  <div className="relative w-16 h-16 mb-5 mx-auto">
                    <Image src={item.img} alt={item.alt} fill className="object-contain" sizes="64px" />
                  </div>
                  <h3 className="font-ui not-italic font-bold text-green text-base mb-4 tracking-wide">
                    {item.heading}
                  </h3>
                  <ul className="space-y-1">
                    {item.items.map((it) => (
                      <li key={it} className="text-base text-green/60">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="relative bg-green overflow-hidden py-16 lg:py-24">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 560"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {TOPO_LINES.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="white" strokeWidth="0.75" opacity="0.1" />
          ))}
        </svg>

        <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left */}
            <div>
              <h2 className="text-3xl lg:text-4xl text-cream mb-6" style={{ lineHeight: 1.05 }}>
                <span
                  className="font-ui font-bold block"
                >
                  Current
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-editorsnote), Georgia, serif',
                    fontStyle: 'italic',
                    display: 'block',
                  }}
                >
                  Opportunities
                </span>
              </h2>
              <p className="text-cream leading-relaxed max-w-sm mb-4">
                Sunrise is a large and dynamic company with a broad range of design, sales and labor opportunities. We are growing and looking for the next qualified candidates to join our team!
              </p>
              <p className="text-cream leading-relaxed max-w-sm mb-1">
                Give us a call to discuss this opportunity today!
              </p>
              <a href="tel:703-544-0028" className="text-cream hover:text-orange transition-colors">
                703-544-0028
              </a>
              <div className="mt-6">
                <Link href="/contact" className="section-label text-orange hover:underline">
                  CONTACT
                </Link>
              </div>
            </div>

            {/* Right: accordions */}
            <CareerAccordion positions={positions} />
          </div>
        </div>
      </section>

      {/* Service area bar */}
      <ServiceAreasSection />

      {/* Contact form */}
      <ContactFormSection />
    </>
  )
}
