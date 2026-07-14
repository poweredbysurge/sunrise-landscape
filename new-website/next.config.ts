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
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
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
