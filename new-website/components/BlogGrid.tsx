'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import type { BlogPost } from '@/lib/blogData'

const FILTER_TABS = ['View All', 'Design Trends', 'Hardscaping Ideas', 'Gardening Tips', 'Sustainable Practices']

const CATEGORY_TO_FILTER: Record<string, string> = {
  'Design':               'Design Trends',
  'Inspiration':          'Design Trends',
  'Hardscaping':          'Hardscaping Ideas',
  'Plants':               'Gardening Tips',
  'Fertilization':        'Gardening Tips',
  'Native':               'Gardening Tips',
  'Seasonal Maintenance': 'Sustainable Practices',
  'Sustainability':       'Sustainable Practices',
}

const CARD_RADIUS = 16
const BTN_RADIUS = 8

export default function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState('View All')

  const visible = active === 'View All'
    ? posts
    : posts.filter((p) => CATEGORY_TO_FILTER[p.category] === active)

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{ borderRadius: BTN_RADIUS }}
            className={`font-ui font-bold text-sm tracking-wide px-5 py-2.5 border transition-colors ${
              active === tab
                ? 'bg-cream text-green border-cream'
                : 'bg-transparent text-cream border-cream/30 hover:border-cream'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group block bg-cream"
            style={{ borderRadius: CARD_RADIUS, overflow: 'hidden' }}
          >
            {/* Image — flush to card top, overflow clipped by parent */}
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {post.category && (
                <p className="font-ui font-bold text-xs tracking-widest uppercase text-green/60 mb-2">
                  {post.category}
                </p>
              )}
              <h2 className="font-ui not-italic font-bold text-xl text-green leading-snug mb-3 group-hover:text-orange transition-colors">
                {post.title}
              </h2>
              <p className="text-green/70 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
