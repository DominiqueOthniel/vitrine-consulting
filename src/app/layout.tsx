import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Source_Sans_3, Montserrat } from 'next/font/google';
import Script from 'next/script';
import '../styles/index.css';
import { LanguageProvider } from '@/components/common/LanguageContext';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-headline',
  preload: true,
});

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-body',
  preload: true,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-cta',
  preload: false, // Moins prioritaire
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: { default: 'VITRINE CONSULTING', template: '%s | VITRINE CONSULTING' },
  description: 'Agence de communication et consulting. Transformons votre communication en impact culturel.',
  keywords: ['consulting', 'communication', 'marketing', 'agence', 'stratégie', 'branding'],
  authors: [{ name: 'VITRINE CONSULTING' }],
  creator: 'VITRINE CONSULTING',
  publisher: 'VITRINE CONSULTING',
  icons: { icon: [{ url: '/favicon.ico', type: 'image/x-icon' }] },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4028'),
  openGraph: {
    type: 'website',
    locale: 'fr_CM',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:4028',
    siteName: 'VITRINE CONSULTING',
    title: 'VITRINE CONSULTING - Agence de communication et consulting',
    description: 'Transformons votre communication en impact culturel.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VITRINE CONSULTING',
    description: 'Agence de communication et consulting. Transformons votre communication en impact culturel.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfairDisplay.variable} ${sourceSansPro.variable} ${montserrat.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://static.rocket.new" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://img.rocket.new" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <Script
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fvitrineco4435back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.15"
          strategy="lazyOnload"
        />
        <Script
          src="https://static.rocket.new/rocket-shot.js?v=0.0.2"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
