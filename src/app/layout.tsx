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
  openGraph: {
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