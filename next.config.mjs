import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },
  // output: 'standalone', // Comentado para Vercel (usa otimização própria)
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
  // Privacidade: a política única (aprovada em 28/09/2026) fica no institucional.
  async redirects() {
    const destination = 'https://www.baccosistemas.com.br/privacidade/'
    const paths = [
      '/politica-de-privacidade',
      '/pt-BR/politica-de-privacidade',
      '/pt-PT/politica-de-privacidade',
      '/en-US/privacy-policy',
      '/es/politica-de-privacidad',
      '/it-IT/informativa-sulla-privacy',
      '/fr/politique-de-confidentialite',
      '/de/datenschutz',
    ]
    return paths.map((source) => ({ source, destination, permanent: true }))
  },
  // Headers de segurança
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
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
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
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
}

export default withNextIntl(nextConfig)
