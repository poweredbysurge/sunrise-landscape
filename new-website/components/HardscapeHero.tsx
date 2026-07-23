import Image from 'next/image'
import Link from 'next/link'
import { cdnToLocal } from '@/lib/mediaUrl'

// Only the two dedicated header photos — harmony-img-1/2 and work-img-1/2/3 are used
// further down the page (harmony section / work carousel), so keeping them out here
// avoids showing the same photo twice on one page.
const IMGS = [
  {
    src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cf884cff5a6c39872bd1_hs-header-img-1%20(1).webp'),
    alt: 'Outdoor patio area with black metal seating surrounding a stone fire pit and landscaped garden with stone steps',
  },
  {
    src: cdnToLocal('https://cdn.prod.website-files.com/6808afe22b48076cc8e63cef/6821cf9d8567ec857f4ce0e4_hs-header-img-2%20(1).webp'),
    alt: 'Outdoor stone fireplace with a mounted flat-screen TV above it under a wooden patio roof',
  },
]

export default function HardscapeHero() {
  return (
    <section className="bg-cream">

      {/* 2-column hero header */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 pt-32 pb-10 lg:pb-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end">

          {/* Left: label + heading */}
          <div>
            <p className="section-label text-orange mb-4">Hardscaping</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-green leading-tight">
              Hardscape Contractor in Northern Virginia
            </h1>
          </div>

          {/* Right: paragraph + CTAs */}
          <div>
            <p className="text-green/70 text-lg leading-relaxed mb-8">
              As experts in hardscape design, we specialize in crafting beautiful, functional outdoor
              environments. From integrated walkways and driveways that connect your landscape, to retaining
              walls that maximize usable space. We bring structure and elegance to your yard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact#form" className="btn-primary">
                <span>Free Consultation</span>
              </Link>
              <Link href="/hardscape-northern-virginia" className="btn-ghost text-green">
                <span>Our Work</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2-image row */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 pb-2">
        <div className="grid grid-cols-2 gap-3">
          {IMGS.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[16/10] overflow-hidden"
              style={{ borderRadius: '12px' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
