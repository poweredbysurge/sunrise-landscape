import Image from 'next/image'

interface ServiceCardProps {
  num?: string
  image: string
  alt: string
  title: string
  description?: string
  items?: string[]
  sizes?: string
}

export default function ServiceCard({ num, image, alt, title, description, items, sizes }: ServiceCardProps) {
  return (
    <article
      className="flex flex-col overflow-hidden"
      style={{ background: '#162b1e', borderRadius: '20px' }}
    >
      <div className="relative" style={{ height: '260px' }}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes ?? '(max-width: 768px) 100vw, 33vw'}
        />
        {num && (
          <span
            className="absolute top-4 left-4 font-display text-cream"
            style={{ fontSize: '2.4rem', textShadow: '0 2px 12px rgba(0,0,0,0.45)' }}
            aria-hidden="true"
          >
            {num}
          </span>
        )}
      </div>
      <div className="flex flex-col flex-1 p-6 lg:p-7">
        <h3 className="text-cream mb-3" style={{ fontSize: '1.45rem', lineHeight: 1.2 }}>
          {title}
        </h3>
        {description && (
          <p className="text-cream leading-relaxed">{description}</p>
        )}
        {items && (
          <ul className="text-cream space-y-1.5 mt-1">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
