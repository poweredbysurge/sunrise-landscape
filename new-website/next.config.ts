import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/old-home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/planting',
        destination: '/landscape-planting-northern-virginia',
        permanent: true,
      },
      {
        source: '/thank-you',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/commercial',
        destination: '/commercial-landscape-maintenance-virginia',
        permanent: true,
      },
      {
        source: '/hardscape',
        destination: '/hardscape-northern-virginia',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/blog',
        permanent: true,
      },

      // Recovered from the old Webflow site, which stopped serving these when DNS
      // moved to Vercel on 2026-08-23. They had been 404ing for three weeks.

      // Service page renames (old Webflow slugs)
      { source: '/design', destination: '/landscape-design-northern-virginia', permanent: true },
      { source: '/lighting', destination: '/landscape-lighting-northern-virginia', permanent: true },
      { source: '/maintenance-packages', destination: '/landscape-maintenance-northern-virginia', permanent: true },
      { source: '/drainage-erosion-control', destination: '/drainage-solutions-northern-virginia', permanent: true },
      { source: '/ponds-water-features', destination: '/water-features-northern-virginia', permanent: true },
      { source: '/hardscape-and-structures', destination: '/hardscape-northern-virginia', permanent: true },
      { source: '/terms-of-services', destination: '/terms-of-service', permanent: true },

      // Old taxonomy pages
      { source: '/category/35-year-anniversary', destination: '/about-us', permanent: true },
      { source: '/tag/leesburg-lawn-care', destination: '/blog', permanent: true },

      // Blog slug shortening — /blogs/ prefix
      { source: '/blogs/landscape-design-costs-tips-and-budgeting-what-homeowners-need-to-know-northern-virginia', destination: '/blogs/landscape-design-costs-northern-virginia', permanent: true },
      { source: '/blogs/landscape-lighting-cost-design-tips-and-trends-homeowners-should-know-virginia', destination: '/blogs/landscape-lighting-costs-northern-virginia', permanent: true },
      { source: '/blogs/the-ultimate-guide-to-year-round-landscape-maintenance-in-northern-virginia', destination: '/blogs/year-round-landscape-maintenance-northern-virginia', permanent: true },
      { source: '/blogs/snow-plowing-vs-snow-removal-costs-differences-and-what-to-expect', destination: '/blogs/snow-plowing-vs-snow-removal-costs', permanent: true },

      // Same posts under the older /blog/ prefix
      { source: '/blog/landscape-design-costs-tips-and-budgeting-what-homeowners-need-to-know', destination: '/blogs/landscape-design-costs-northern-virginia', permanent: true },
      { source: '/blog/landscape-lighting-cost-design-tips-and-trends-homeowners-should-know', destination: '/blogs/landscape-lighting-costs-northern-virginia', permanent: true },
      { source: '/blog/the-ultimate-guide-to-year-round-landscape-maintenance-in-northern-virginia', destination: '/blogs/year-round-landscape-maintenance-northern-virginia', permanent: true },

      // Targets that were never built — redirected to nearest live page instead of 404
      { source: '/blogs/landscaping-in-northern-virginia-what-grows-best-and-how-to-plan-your-yard', destination: '/landscape-planting-northern-virginia', permanent: true },
      { source: '/blog/landscaping-in-northern-virginia-what-grows-best-and-how-to-plan-your-yard', destination: '/landscape-planting-northern-virginia', permanent: true },
      { source: '/blogs/get-your-outdoor-space-winter-ready-build-the-perfect-cozy-escape', destination: '/blogs/fire-pit-installation', permanent: true },
      { source: '/blogs/get-your-outdoor-space-winter-ready-build-the-perfect-cozy-escape-2', destination: '/blogs/fire-pit-installation', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
}

export default nextConfig
