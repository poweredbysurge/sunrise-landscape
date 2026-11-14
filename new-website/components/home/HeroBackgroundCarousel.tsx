'use client'

import { useEffect, useState } from 'react'
import Image, { type StaticImageData } from 'next/image'

const HOLD_MS = 2000
const FADE_MS = 800

export type HeroSlide = { src: StaticImageData; alt: string }

export default function HeroBackgroundCarousel({ images }: { images: HeroSlide[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, HOLD_MS)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <>
      {images.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          className="object-cover transition-opacity ease-in-out"
          style={{ transitionDuration: `${FADE_MS}ms`, opacity: i === index ? 1 : 0 }}
          sizes="100vw"
        />
      ))}
    </>
  )
}
