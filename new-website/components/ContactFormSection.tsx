import InquiryForm from '@/components/InquiryForm'

export default function ContactFormSection() {
  return (
    <section className="bg-cream py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: typography */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2
              className="text-green leading-[0.92] tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 5vw, 4.5rem)' }}
            >
              Let&apos;s get<br />
              <span className="editorial-display">started</span> in<br />
              making your<br />
              dream a<br />
              <span className="editorial-display">reality.</span>
            </h2>
          </div>

          {/* Right: form card — matches the homepage hero's inquiry form */}
          <div
            className="bg-cream flex flex-col gap-5 p-8 shadow-2xl overflow-y-auto"
            style={{ borderRadius: '10px', height: 560, border: '1px solid rgba(30,53,38,0.1)' }}
          >
            <InquiryForm />
          </div>

        </div>
      </div>
    </section>
  )
}
