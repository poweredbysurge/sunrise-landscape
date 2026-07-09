import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'

export const metadata: Metadata = {
  title: 'Terms of Service | Sunrise Landscape and Design',
  description: 'Terms of service for Sunrise Landscape and Design. Review our service agreements, payment policies, and client responsibilities for landscaping services in Northern Virginia.',
  openGraph: {
    title: 'Terms of Service | Sunrise Landscape and Design',
    description: 'Terms of service for Sunrise Landscape and Design. Review our service agreements, payment policies, and client responsibilities for landscaping services in Northern Virginia.',
    type: 'website',
  },
  twitter: {
    title: 'Terms of Service | Sunrise Landscape and Design',
    description: 'Terms of service for Sunrise Landscape and Design. Review our service agreements, payment policies, and client responsibilities for landscaping services in Northern Virginia.',
    card: 'summary_large_image',
  },
}

export default function TermsPage() {
  const jsonLd = getMdxJsonLd('pages/terms-of-service/index.mdx')

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="pt-32 pb-6 bg-cream">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="relative w-24 h-8 mb-8">
            <Image
              src={"/logos/sunrise-logo.svg"}
              alt="SUNRISE Landscape - Design"
              fill
              className="object-contain object-left"
              sizes="96px"
            />
          </div>
          <h1 className="font-ui not-italic font-bold text-4xl lg:text-5xl text-green mb-2">Terms of Service</h1>
          <p className="text-green/50 text-sm mb-10">Last Updated: April 2026</p>
        </div>
      </section>

      <section className="pb-20 bg-cream">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 space-y-10">

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Agreement to Terms</h2>
            <p className="text-black/70 leading-relaxed">By accessing or using the services of Sunrise Landscape and Design, you agree to be bound by these Terms of Service. These terms apply to all clients, visitors, and others who use our services.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Services</h2>
            <p className="text-black/70 leading-relaxed">Sunrise Landscape and Design provides landscape design, installation, hardscaping, planting, drainage, maintenance, and related outdoor services in Northern Virginia. All services are subject to a written proposal or estimate agreed upon by both parties prior to commencement of work.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Estimates &amp; Proposals</h2>
            <p className="text-black/70 leading-relaxed">All estimates are valid for 30 days from the date of issue. Estimates are based on site conditions at the time of assessment. Changes in scope, material costs, or unforeseen site conditions may result in revised pricing, which will be communicated and approved before proceeding.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Payment Terms</h2>
            <p className="text-black/70 leading-relaxed">Payment terms are outlined in your signed proposal. A deposit may be required before work begins. Final payment is due upon project completion unless otherwise agreed in writing. Overdue accounts are subject to a 1.5% monthly finance charge.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Scheduling &amp; Cancellations</h2>
            <p className="text-black/70 leading-relaxed">We schedule work based on project availability and weather conditions. Client-initiated cancellations with less than 48 hours notice may result in a cancellation fee. Sunrise Landscape reserves the right to reschedule work due to weather or safety concerns at no penalty.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Property Access</h2>
            <p className="text-black/70 leading-relaxed">Clients must ensure reasonable access to the work site on scheduled service days. Sunrise Landscape is not liable for delays caused by restricted site access. Clients are responsible for marking underground utilities, irrigation systems, and other buried features not visible at the surface.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Liability</h2>
            <p className="text-black/70 leading-relaxed">Sunrise Landscape and Design carries full general liability insurance and workers&apos; compensation coverage. We are not responsible for pre-existing conditions, damage caused by unmarked underground utilities, or acts of nature. Any claims must be reported within 5 business days of service completion.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Design &amp; Intellectual Property</h2>
            <p className="text-black/70 leading-relaxed">All landscape design plans, drawings, and concepts created by Sunrise Landscape remain the intellectual property of Sunrise Landscape and Design until full payment is received. Photos of completed projects may be used for portfolio and marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">SMS / Text Messaging Terms</h2>
            <p className="text-black/70 leading-relaxed mb-3">By opting in to receive text messages from Sunrise Landscape &amp; Design (through our website, landing pages, or other opt-in methods), you agree to the following terms:</p>
            <ul className="space-y-2 pl-4 text-black/70">
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span>You consent to receive automated and non-automated text messages from Sunrise Landscape &amp; Design at the phone number you provide. These messages may include appointment confirmations, service reminders, consultation follow-ups, and promotional offers.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span><strong>Message frequency varies</strong> depending on your interactions, service needs, and campaign type.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span><strong>Message and data rates may apply.</strong> Your mobile carrier&apos;s standard messaging and data rates may apply to any messages you send or receive.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span>You may <strong>opt out at any time</strong> by replying <strong>STOP</strong> to any message. You will receive a single confirmation text and no further messages will be sent.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span>For assistance, reply <strong>HELP</strong> to any message or contact us at 703-544-0028.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span><strong>Consent to receive text messages is not required as a condition of purchasing any goods or services.</strong></span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span>Your opt-in consent and phone number are <strong>not sold, shared, or rented to any third parties</strong> for their own marketing or promotional purposes.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span>We reserve the right to modify these SMS terms at any time. Continued opt-in after changes constitutes acceptance of the updated terms.</span></li>
            </ul>
            <p className="text-black/70 mt-3 leading-relaxed">Supported carriers include but are not limited to AT&amp;T, T-Mobile, Verizon, Sprint, and all major U.S. carriers. Carriers are not liable for delayed or undelivered messages.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Governing Law</h2>
            <p className="text-black/70 leading-relaxed">These terms are governed by the laws of the Commonwealth of Virginia. Any disputes shall be resolved in the courts of Loudoun County, Virginia.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Contact Us</h2>
            <p className="text-black/70 leading-relaxed">For questions about these terms, contact us at:</p>
            <p className="mt-3 font-ui font-bold text-green">Sunrise Landscape and Design</p>
            <p className="text-black/70">Sterling, VA &bull; <a href="tel:703-544-0028" className="text-orange hover:underline">703-544-0028</a> &bull; <a href="https://sunriselandscapeanddesign.com" className="text-orange hover:underline">sunriselandscapeanddesign.com</a></p>
            <Link href="/contact" className="mt-4 btn-primary text-xs inline-flex">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
