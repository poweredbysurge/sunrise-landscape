import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'

// Additive depth layer for the thin service pages (WQA P1 rewrites).
// Renders BELOW the frozen manifest content: new sections, FAQs with schema, CTA.
// Section headings marked `exact: true` restore heading text deleted from the
// original manifest tree (e.g. hardscape H2s, water-features H2/H3s).

export type ExpSection = { heading: string; level?: 2 | 3; body: string[] }
export type ExpFaq = { q: string; a: string }

export interface ServiceExpansionData {
  sections: ExpSection[]
  faqHeading: string
  faqs: ExpFaq[]
  cta?: string
}

export default function ServiceExpansion({ data }: { data: ServiceExpansionData }) {
  return (
    <>
      <section className="py-16 lg:py-24 px-5 lg:px-8 bg-white">
        <div className="max-w-screen-xl mx-auto space-y-14">
          {data.sections.map((sec, i) => {
            const H = sec.level === 3 ? 'h3' : 'h2'
            const split = i % 2 === 0
            return (
              <div key={sec.heading} className={split ? 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-start' : ''}>
                <H
                  className={
                    sec.level === 3
                      ? 'text-2xl lg:text-3xl font-bold text-green leading-tight mb-4'
                      : 'text-3xl lg:text-4xl font-bold text-green leading-tight mb-4'
                  }
                >
                  {sec.heading}
                </H>
                <div className="space-y-4 text-lg leading-relaxed text-black/70 max-w-3xl">
                  {sec.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 lg:py-24 px-5 lg:px-8 bg-cream/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-8">{data.faqHeading}</h2>
          <FaqAccordion faqs={data.faqs} />
          <p className="mt-10 text-lg text-black/70">
            {data.cta || 'Ready to talk about your property?'}{' '}
            <Link href="/contact" className="font-bold text-green underline hover:text-orange">
              Book a free consultation
            </Link>{' '}
            or call <a href="tel:703-544-0028" className="font-bold text-green underline hover:text-orange">703-544-0028</a>.
          </p>
        </div>
      </section>

      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: data.faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />
    </>
  )
}
