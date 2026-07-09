import Image from 'next/image'
import Link from 'next/link'
import { BLOGS } from '@/lib/blogData'

// "From Our Blog" cards: image + title, linking to /blogs/{slug}.
// Matches the section the team added to the live Webflow site post-freeze,
// upgraded from bare text links to cards per design review.
// IMAGE RULE: pass only paths verified to exist in /public (broken images are
// worse than no images). If image is omitted, the card renders text-only.

export type BlogCardSpec = { slug: string; image?: string }

const M = '/media/6808afe22b48076cc8e63cef'
// Verified-existing fallback art by topic, from real Sunrise photos:
export const BLOG_ART = {
  mowing: `${M}/6822fae33f0e864553518e47_mowing-img (1).webp`,
  maintenance: `${M}/6822f6271cbe1867ff2caf42_MP-header-img-1 (1).webp`,
  maintenance2: `${M}/6822f63943d42830d8ddf783_MP-header-img-2 (1).webp`,
  design: `${M}/681c9fd4dec20f523b550af0_design-img-2 (1).webp`,
  design2: `${M}/681c9fc83f8047121576ac84_design-img-1 (1).webp`,
  drainage: `${M}/68247d8f31ffd45cf0a28ba9_dec-header-img-2 (1).webp`,
  water: `${M}/682321dd71e368222af56712_pw-header-img-1 (1).webp`,
  planting: `${M}/68827f23d5ddb3f4a120998a_plant light.jpg`,
}

export default function FromOurBlog({ posts }: { posts: BlogCardSpec[] }) {
  const items = posts
    .map((p) => {
      const post = BLOGS.find((b) => b.slug === p.slug)
      return post ? { slug: p.slug, title: post.title, image: p.image } : null
    })
    .filter(Boolean) as { slug: string; title: string; image?: string }[]

  if (items.length === 0) return null

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12 bg-cream/40">
      <div className="max-w-screen-xl mx-auto">
        <p className="font-ui text-base font-bold uppercase tracking-widest text-orange mb-2">
          Keep Reading
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-green leading-tight mb-10">
          From Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.slug} href={`/blogs/${item.slug}`} className="group block border border-green/20 bg-white">
              {item.image && (
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="p-5 flex items-start justify-between gap-4">
                <span className="font-ui font-bold text-green leading-snug group-hover:text-orange transition-colors">
                  {item.title}
                </span>
                <span aria-hidden className="text-orange font-bold shrink-0">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
