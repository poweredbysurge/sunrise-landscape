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

export default function ContactHero() {
  return (
    <section className="relative bg-green overflow-hidden">
      {/* Topo texture */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 560"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {TOPO_LINES.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="white" strokeWidth="0.75" opacity="0.12" />
        ))}
      </svg>

      {/* Text row */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 pt-36 lg:pt-44 pb-16 lg:pb-24 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

        {/* Left: editorial heading */}
        <div className="lg:w-1/2">
          <h1
            className="text-cream"
            style={{ fontFamily: 'var(--font-editorsnote), Georgia, serif', fontStyle: 'normal', fontWeight: 400, fontSize: '4.5rem', lineHeight: 0.92, letterSpacing: '-0.025em' }}
          >
            <span className="block">Let&apos;s build</span>
            <span className="block">your dream yard</span>
          </h1>
        </div>

        {/* Right: body + CTAs */}
        <div className="lg:w-[360px] lg:pt-3 flex flex-col gap-6">
          <p className="text-cream leading-relaxed">
            Ready to transform your outdoor space? Our team has been serving Northern Virginia
            homeowners and businesses for 38+ years. Fill out the form below or reach out directly
            to get started with a free consultation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:703-544-0028" className="btn-primary">
              <span>Call 703-544-0028</span>
            </a>
            <a href="mailto:info@sunriselandscapeanddesign.com" className="btn-ghost text-cream border-cream/40">
              <span>Email Us</span>
            </a>
          </div>
        </div>

      </div>

      <div className="h-8 lg:h-12" />
    </section>
  )
}
