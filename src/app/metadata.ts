import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Kiyori | Playful Front-End Developer`,
  description: 'A front-end portfolio by Kiyori',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/icon1.png', type: 'image/png' },
      { url: '/images/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-icon.png', type: 'image/png' },
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