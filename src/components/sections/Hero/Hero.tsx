'use client';

import { trackEvent } from '@/lib/analytics';
import type { Translation } from '@/types/translations';

import styles from './Hero.module.css';

type HeroProps = {
  translation: Translation['hero'];
};

const WHATSAPP_URL =
  'https://wa.me/5522997913238?text=Olá!%20Vi%20o%20site%20da%20BLZ%20Site%20e%20gostaria%20de%20solicitar%20uma%20demonstração.';

export default function Hero({ translation }: HeroProps) {
  function trackWhatsAppClick() {
    trackEvent({
      eventName: 'whatsapp_click',
      category: 'contact',
      label: 'hero_primary_cta'
    });
  }

  function trackPortfolioClick() {
    trackEvent({
      eventName: 'cta_click',
      category: 'navigation',
      label: 'hero_portfolio_cta'
    });
  }

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.backgroundGlowOne} />
      <div className={styles.backgroundGlowTwo} />

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {translation.eyebrow}
          </div>

          <h1 className={styles.title}>
            {translation.titleStart}{' '}
            <span>{translation.titleHighlight}</span>
          </h1>

          <p className={styles.description}>
            {translation.description}
          </p>

          <div className={styles.actions}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primaryButton"
              onClick={trackWhatsAppClick}
            >
              <WhatsAppIcon />
              {translation.primaryButton}
            </a>

            <a
              href="#portfolio"
              className="secondaryButton"
              onClick={trackPortfolioClick}
            >
              {translation.secondaryButton}
              <ArrowIcon />
            </a>
          </div>

          <div className={styles.availability}>
            <span className={styles.availabilityIcon}>
              <span />
            </span>

            {translation.availability}
          </div>

          <div className={styles.stats}>
            <article>
              <strong>3</strong>
              <span>{translation.projectsLabel}</span>
            </article>

            <article>
              <strong>3</strong>
              <span>{translation.languagesLabel}</span>
            </article>

            <article>
              <strong>100%</strong>
              <span>{translation.responsiveLabel}</span>
            </article>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.floatingBadge}>
            <span className={styles.floatingBadgeIcon}>
              <SparklesIcon />
            </span>

            <div>
              <strong>{translation.browserLabel}</strong>
              <span>Hamburgueria Búzios</span>
            </div>
          </div>

          <div className={styles.browser}>
            <div className={styles.browserTop}>
              <div className={styles.browserDots}>
                <span />
                <span />
                <span />
              </div>

              <div className={styles.browserAddress}>
                hamburgueria-buzios.com
              </div>

              <div className={styles.browserMenu}>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className={styles.videoWrapper}>
              <video
                className={styles.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Demonstração do site Hamburgueria Búzios"
              >
                <source
                  src="/videos/hamburgueria.webm"
                  type="video/webm"
                />
              </video>

              <div className={styles.videoOverlay} />
            </div>
          </div>

          <div className={styles.mobilePreview}>
            <div className={styles.mobileSpeaker} />

            <video
              className={styles.mobileVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source
                src="/videos/hamb-celu.mp4"
                type="video/mp4"
              />
            </video>

            <div className={styles.mobileHomeIndicator} />
          </div>

          <div className={styles.decorativeCard}>
            <span>BLZ</span>
            <strong>Sites que vendem</strong>
          </div>
        </div>
      </div>

      <div className={styles.bottomWave} />
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2A9.84 9.84 0 0 0 2.2 11.84c0 1.73.45 3.42 1.3 4.91L2 22l5.39-1.42a9.83 9.83 0 1 0 4.65-18.58Zm0 17.9a8.05 8.05 0 0 1-4.1-1.12l-.29-.17-3.2.84.85-3.12-.19-.32a8.06 8.06 0 1 1 6.93 3.89Zm4.42-6.02c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.39 1.37.5.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 12h14m-6-6 6 6-6 6"
      />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Zm6 10 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13ZM5 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"
      />
    </svg>
  );
}