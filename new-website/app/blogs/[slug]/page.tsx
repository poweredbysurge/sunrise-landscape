import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import NewsletterSidebar from '@/components/NewsletterSidebar'
import ShareButtons from '@/components/ShareButtons'
import { getMdxJsonLd, getBlogHtml, getAllBlogSlugs } from '@/lib/manifest'
import { getBlogBySlug, BLOGS } from '@/lib/blogData'

// One H1 per page: the template renders the H1, so any H1 inside the
// imported article HTML is demoted to H2 (fixes duplicate-H1 pages).
function demoteBodyH1(html: string): string {
  return html.replace(/<h1(\s[^>]*)?>/gi, '<h2$1>').replace(/<\/h1>/gi, '</h2>')
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  return {
    title: post?.title
      ? `${post.title} | Sunrise Landscape and Design`
      : 'Sunrise Landscape and Design',
    description: post?.excerpt || 'Read expert landscaping advice from Sunrise Landscape and Design.',
    openGraph: {
      title: post?.title,
      description: post?.excerpt,
      images: post?.image ? [{ url: post.image }] : [],
      type: 'article',
    },
  }
}

function processHtml(raw: string, slug: string): string {
  // Strip full HTML shell — keep only the <article> body
  const articleMatch = raw.match(/<article[^>]*>([\s\S]*?)<\/article>/)
  let html = articleMatch ? articleMatch[1] : raw

  // Fix relative image paths for blog-19 and blog-20
  html = html.replace(
    /src="(blog-\d+-img-\d+\.(?:jpg|jpeg|png|webp))"/gi,
    'src="/blogs/$1"'
  )

  return html
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogBySlug(slug)
  const jsonLd = getMdxJsonLd(`pages/blogs/${slug}/index.mdx`)
  const rawHtml = getBlogHtml(slug)
  const articleHtml = rawHtml ? processHtml(rawHtml, slug) : null

  const title = post?.title || slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const category = post?.category || 'Landscape Insights'
  const heroImage = post?.image

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero bar — dark green with share icons */}
      <div className="bg-green pt-36 pb-10">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1 min-w-0">
              <p className="section-label text-orange mb-3">{category}</p>
              <h1
                className="text-4xl lg:text-6xl text-cream leading-tight mb-4"
              >
                {title}
              </h1>
              <p className="text-cream tracking-wide">
                By Sunrise Landscape &amp; Design &bull; Northern Virginia
              </p>
            </div>
            <div className="flex-shrink-0 pt-1">
              <ShareButtons title={title} />
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      {heroImage && (
        <div className="bg-green">
          <div className="max-w-screen-xl mx-auto px-5 lg:px-8 pb-0">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '21/9', borderRadius: '12px 12px 0 0' }}>
              <Image
                src={heroImage}
                alt={title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          </div>
        </div>
      )}

      {/* Two-column body */}
      <section className="bg-cream py-14">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

            {/* Left — article content */}
            <div className="flex-1 min-w-0">
              {articleHtml ? (
                <div
                  className="prose-content"
                  dangerouslySetInnerHTML={{ __html: demoteBodyH1(articleHtml) }}
                />
              ) : (
                /* Fallback for posts without a local HTML file */
                <div className="prose-content">
                  {post?.excerpt && (
                    <p className="text-lg leading-relaxed mb-6">{post.excerpt}</p>
                  )}
                  <div className="bg-green/5 border border-green/15 p-6" style={{ borderRadius: '12px' }}>
                    <p className="font-ui font-bold text-green mb-2">Full Article</p>
                    <p className="text-green/60 mb-4">
                      Read the complete article on our website.
                    </p>
                    <a
                      href={`https://www.sunriselandscapeanddesign.com/blogs/${slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm"
                    >
                      <span>Read on Sunrise Website</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-black/10">
                <Link href="/blog" className="font-ui font-bold text-sm text-orange tracking-wide hover:underline">
                  ← Back to All Articles
                </Link>
              </div>
            </div>

            {/* Right — sticky sidebar */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="sticky top-28 space-y-6">
                <NewsletterSidebar />

                {/* Related category badge */}
                <div className="bg-green p-6" style={{ borderRadius: '16px' }}>
                  <p className="section-label text-orange mb-3">Free Consultation</p>
                  <p className="font-ui font-bold text-xl text-cream leading-snug mb-4">
                    Ready to transform your outdoor space?
                  </p>
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    <span>Get a Free Estimate</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
