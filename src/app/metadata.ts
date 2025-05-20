import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Kiyori | Playful Front-End Developer`,
  description: 'A front-end portfolio by Kiyori',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon/favicon-64x64.png', type: 'image/png', sizes: '64x64' },
      { url: '/favicon/favicon-128x128.png', type: 'image/png', sizes: '128x128' },
      { url: '/favicon/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon/favicon-256x256.png', type: 'image/png', sizes: '256x256' },
      { url: '/favicon/favicon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/favicon/favicon-192x192.png', type: 'image/png' },
    ],
    other: [
      { url: '/favicon/icon0.svg', type: 'image/svg+xml' },
    ],
  },
  manifest: '/favicon/manifest.json',
  themeColor: '#ffffff',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Portfolio',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}; 