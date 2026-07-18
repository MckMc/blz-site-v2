import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Sora } from 'next/font/google';

import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora'
});

export const metadata: Metadata = {
  title: {
    default: 'BLZ Site | Sites profissionais em Búzios',
    template: '%s | BLZ Site',
  },
  openGraph: {
    images: ['/og-image.png']
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
      <body className={sora.variable}>{children}</body>
    </html>
  );
}
