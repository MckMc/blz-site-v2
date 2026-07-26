'use client';

import { sendGAEvent } from '@next/third-parties/google';

type AnalyticsEventParams = {
  eventName: string;
  category: string;
  label: string;
  value?: string;
};

export function trackEvent({
  eventName,
  category,
  label,
  value
}: AnalyticsEventParams) {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  sendGAEvent('event', eventName, {
    event_category: category,
    event_label: label,
    value
  });
}