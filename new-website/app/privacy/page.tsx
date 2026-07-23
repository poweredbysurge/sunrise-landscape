import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { cdnToLocal } from '@/lib/mediaUrl'
import { getMdxJsonLd } from '@/lib/manifest'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sunrise Landscape and Design',
  description: 'Privacy policy for Sunrise Landscape and Design. Learn how we collect, use, and protect your personal information when you visit our website or request our services.',
  openGraph: {
    title: 'Privacy Policy | Sunrise Landscape and Design',
    description: 'Privacy policy for Sunrise Landscape and Design. Learn how we collect, use, and protect your personal information when you visit our website or request our services.',
    type: 'website',
  },
  twitter: {
    title: 'Privacy Policy | Sunrise Landscape and Design',
    description: 'Privacy policy for Sunrise Landscape and Design. Learn how we collect, use, and protect your personal information when you visit our website or request our services.',
    card: 'summary_large_image',
  },
}

export default function PrivacyPage() {
  const jsonLd = getMdxJsonLd('pages/privacy/index.mdx')

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
          <h1 className="font-ui not-italic font-bold text-4xl lg:text-5xl text-green mb-2">Privacy</h1>
          <p className="text-green/50 text-sm mb-10">Last Updated: April 2026</p>
        </div>
      </section>

      <section className="pb-20 bg-cream">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 prose-content space-y-10">

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Introduction</h2>
            <p>Sunrise Landscape &amp; Design (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, submit forms, or interact with our services.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Information We Collect</h2>
            <p className="mb-3">We may collect the following personal information when you fill out a form, request a consultation, or contact us:</p>
            <ul className="space-y-1 pl-4">
              {['First and last name', 'Email address', 'Phone number', 'Zip code', 'Property details and service preferences'].map(item => (
                <li key={item} className="flex items-start gap-2 text-base"><span className="text-orange mt-1">–</span>{item}</li>
              ))}
            </ul>
            <p className="mt-3">We may also automatically collect non-personal information such as browser type, device type, IP address, and pages visited through cookies and analytics tools.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="space-y-1 pl-4">
              {['Respond to your inquiries and schedule consultations', 'Provide estimates and perform landscaping services', 'Send appointment reminders and service updates via email, phone, or text message', 'Improve our website and customer experience', 'Send occasional promotional communications (only with your consent)'].map(item => (
                <li key={item} className="flex items-start gap-2 text-base"><span className="text-orange mt-1">–</span>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">SMS / Text Messaging Communications</h2>
            <p className="mb-3">By providing your phone number and consenting on our website or landing pages, you agree to receive text messages from Sunrise Landscape &amp; Design. These messages may include appointment confirmations, service reminders, follow-ups related to your inquiry, and promotional offers.</p>
            <ul className="space-y-2 pl-4 text-base">
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span><strong>Message frequency varies</strong> based on your interactions and service needs.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span><strong>Message and data rates may apply</strong> depending on your mobile carrier and plan.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span>You may <strong>opt out at any time</strong> by replying <strong>STOP</strong> to any text message you receive from us.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span><strong>Consent to receive text messages is not a condition of purchase</strong> of any goods or services.</span></li>
              <li className="flex items-start gap-2"><span className="text-orange mt-1">–</span><span>Your phone number and opt-in consent are <strong>never sold, rented, or shared with third parties</strong> for their own marketing purposes.</span></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">How We Share Your Information</h2>
            <p>We do <strong>not</strong> sell, rent, or share your personal information with third parties for their marketing purposes. We may share your information only when required by law, or with trusted service providers who assist us in operating our website and delivering services.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Data Security</h2>
            <p>We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Cookies</h2>
            <p>Our website may use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can manage cookie preferences through your browser settings.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at <a href="tel:703-544-0028" className="text-orange hover:underline">703-544-0028</a>. We will respond to your request within a reasonable timeframe.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Children’s Privacy</h2>
            <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last Updated&rdquo; date. Your continued use of our website or services after changes are posted constitutes your acceptance of the updated policy.</p>
          </div>

          <div>
            <h2 className="text-xl font-ui not-italic font-bold text-green mb-3">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-3 font-ui font-bold text-green">Sunrise Landscape &amp; Design</p>
            <p>Sterling, VA &bull; <a href="tel:703-544-0028" className="text-orange hover:underline">703-544-0028</a></p>
            <Link href="/contact#form" className="mt-4 btn-primary text-xs inline-flex">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
