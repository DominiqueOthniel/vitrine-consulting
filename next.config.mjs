/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false, // Désactivé pour la production
    distDir: process.env.DIST_DIR || '.next',
    compress: true, // Compression Gzip
    poweredByHeader: false, // Masquer le header X-Powered-By
    reactStrictMode: true,
    swcMinify: true, // Utiliser SWC pour minifier
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      formats: ['image/avif', 'image/webp'], // Formats modernes
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'images.pixabay.com',
        },
        {
          protocol: 'https',
          hostname: 'img.rocket.new',
        },
      ],
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on'
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN'
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff'
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin'
            },
          ],
        },
        {
          source: '/assets/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/assets/videos/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400',
            },
            {
              key: 'Accept-Ranges',
              value: 'bytes',
            },
          ],
        },
      ];
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/homepage',
          permanent: false,
        },
      ];
    },
  };
  
  export default nextConfig;
  