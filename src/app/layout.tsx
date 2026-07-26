import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Sora } from 'next/font/google';

import CookieBanner from '@/components/cookies/CookieBanner';
import GoogleAnalyticsConsent from '@/components/analytics/GoogleAnalyticsConsent';

import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://blzsite.com.br'),

  title: {
    default: 'BLZ Site | Sites profissionais em Búzios',
    template: '%s | BLZ Site'
  },

  description:
    'Criamos sites modernos e profissionais para restaurantes, pousadas, passeios e negócios locais de Búzios.',

  keywords: [
    'sites em Búzios',
    'criação de sites',
    'web design Búzios',
    'sites para restaurantes',
    'sites para pousadas',
    'BLZ Site'
  ],

  alternates: {
    canonical: '/'
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://blzsite.com.br',
    siteName: 'BLZ Site',
    title: 'BLZ Site | Sites profissionais em Búzios',
    description:
      'Criamos sites modernos, rápidos e profissionais para negócios de Búzios.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BLZ Site — Sites profissionais para negócios de Búzios'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'BLZ Site | Sites profissionais em Búzios',
    description:
      'Criamos sites modernos, rápidos e profissionais para negócios de Búzios.',
    images: ['/og-image.png']
  },

  icons: {
    icon: '/images/logo-con-texto.png'
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({
  children
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt">
      <body className={sora.variable}>
        {children}

        <CookieBanner />
        <GoogleAnalyticsConsent />
      </body>
    </html>
  );
}