'use client';

import { GoogleAnalytics } from '@next/third-parties/google';

import { useCookieConsent } from '@/hooks/useCookieConsent';

const GA_ID = 'G-LP38HL274R';

export default function GoogleAnalyticsConsent() {
  const consent = useCookieConsent();

  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction || consent !== 'accepted') {
    return null;
  }

  return <GoogleAnalytics gaId={GA_ID} />;
}