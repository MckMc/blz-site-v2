'use client';

import Link from 'next/link';

import {
  saveCookieConsent,
  useCookieConsent
} from '@/hooks/useCookieConsent';

import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const consent = useCookieConsent();

  if (consent !== null) {
    return null;
  }

  return (
    <aside
      className={styles.banner}
      aria-label="Preferências de cookies"
    >
      <div className={styles.content}>
        <div className={styles.text}>
          <strong>Privacidade e cookies</strong>

          <p>
            Utilizamos cookies analíticos para entender como nosso
            site é utilizado e melhorar sua experiência. Você pode
            aceitar ou recusar esses cookies.
          </p>

          <Link
            href="/politica-de-cookies"
            className={styles.link}
          >
            Ver Política de Cookies
          </Link>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.rejectButton}
            onClick={() => saveCookieConsent('rejected')}
          >
            Recusar
          </button>

          <button
            type="button"
            className={styles.acceptButton}
            onClick={() => saveCookieConsent('accepted')}
          >
            Aceitar
          </button>
        </div>
      </div>
    </aside>
  );
}