import Image from 'next/image'
import Link from 'next/link'

const HERO_IMAGE = {
  src: 'https://images.unsplash.com/photo-1636301587190-88cbb412fea0',
  alt: 'Professionally landscaped home exterior with dense green garden beds and mature trees surrounding a residential patio.',
}

export default function MaintenanceHero() {
  return (
    <section className="relative h-[80vh] min-h-[540px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 pb-16 lg:pb-24 w-full">
        <p className="section-label text-orange mb-4">Maintenance Services</p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-none tracking-tight max-w-4xl mb-6">
          Landscape Maintenance Services in Northern Virginia
        </h1>
        <p className="text-xl lg:text-2xl text-cream mb-8 max-w-2xl leading-relaxed">
          Transform your outdoor space into a living masterpiece that evolves beautifully through every season.
        </p>
        <Link href="/contact#form" className="btn-primary"><span>Free Consultation</span></Link>
      </div>
    </section>
  )
}
