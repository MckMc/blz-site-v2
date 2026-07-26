'use client';

import { useSyncExternalStore } from 'react';

export type CookieConsent = 'accepted' | 'rejected' | null;

const CONSENT_KEY = 'blz-cookie-consent';
const CONSENT_EVENT = 'blz-cookie-consent-changed';

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener('storage', callback);

  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot(): CookieConsent {
  const value = window.localStorage.getItem(CONSENT_KEY);

  if (value === 'accepted' || value === 'rejected') {
    return value;
  }

  return null;
}

function getServerSnapshot(): CookieConsent {
  return null;
}

export function useCookieConsent() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
}

export function saveCookieConsent(
  value: Exclude<CookieConsent, null>
) {
  window.localStorage.setItem(CONSENT_KEY, value);

  window.dispatchEvent(
    new CustomEvent(CONSENT_EVENT)
  );
}