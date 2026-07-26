import type { Translation } from '@/types/translations';

import styles from './ContactCTA.module.css';
import { trackEvent } from '@/lib/analytics';

type ContactCTAProps = {
  translation: Translation['cta'];
};

const WHATSAPP_URL =
  'https://wa.me/5522997913238?text=Olá!%20Vi%20o%20site%20da%20BLZ%20Site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.';

const INSTAGRAM_URL =
  'https://www.instagram.com/blz.site/';

const EMAIL_URL =
  'mailto:blzsite.buzios@gmail.com';

export default function ContactCTA({
  translation
}: ContactCTAProps) {
  function trackWhatsApp(label: string) {
  trackEvent({
    eventName: 'whatsapp_click',
    category: 'contact',
    label
  });
}

function trackInstagram(label: string) {
  trackEvent({
    eventName: 'instagram_click',
    category: 'social',
    label
  });
}

function trackEmail(label: string) {
  trackEvent({
    eventName: 'email_click',
    category: 'contact',
    label
  });
}
  return (
    <section
      id="contato"
      className={styles.contact}
    >
      <div className="container">
        <div className={styles.card}>
          <div className={styles.gridPattern} />
          <div className={styles.glowOne} />
          <div className={styles.glowTwo} />

          <div className={styles.content}>
            <div className={styles.eyebrow}>
              <span />
              {translation.eyebrow}
            </div>

            <h2 className={styles.title}>
              {translation.title}{' '}
              <span>{translation.titleHighlight}</span>
            </h2>

            <p className={styles.description}>
              {translation.description}
            </p>

            <div className={styles.actions}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
                onClick={() => trackWhatsApp('contact_cta')}
              >
                <WhatsAppIcon />
                {translation.whatsappButton}
                <ArrowIcon />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                <InstagramIcon />
                {translation.instagramButton}
              </a>
            </div>

            <div className={styles.availability}>
              <span />
              {translation.availability}
            </div>
          </div>

          <div className={styles.contactPanel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelStatus}>
                <span />
                BLZ Site
              </div>

              <div className={styles.panelDots}>
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className={styles.contactList}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                  onClick={() => trackWhatsApp('contact_panel')}

              >
                <span className={styles.contactIcon}>
                  <WhatsAppIcon />
                </span>

                <span className={styles.contactInfo}>
                  <small>
                    {translation.whatsappLabel}
                  </small>
                  <strong>+55 22 99791-3238</strong>
                </span>

                <ArrowUpIcon />
              </a>

              <a
                href={EMAIL_URL}
                className={styles.contactItem}
                onClick={() => trackEmail('contact_panel')}
              >
                <span className={styles.contactIcon}>
                  <EmailIcon />
                </span>

                <span className={styles.contactInfo}>
                  <small>
                    {translation.emailLabel}
                  </small>
                  <strong>
                    blzsite.buzios@gmail.com
                  </strong>
                </span>

                <ArrowUpIcon />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                onClick={() => trackInstagram('contact_panel')}
              >
                <span className={styles.contactIcon}>
                  <InstagramIcon />
                </span>

                <span className={styles.contactInfo}>
                  <small>
                    {translation.instagramLabel}
                  </small>
                  <strong>@blz.site</strong>
                </span>

                <ArrowUpIcon />
              </a>
            </div>

            <div className={styles.panelFooter}>
              <div className={styles.avatar}>
                BLZ
              </div>

              <div>
                <strong>BLZ Site</strong>
                <span>Búzios · RJ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4.1A8 8 0 1 1 20 11.7Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <path
        d="M9 8.5c.4 2.5 2 4.1 4.5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.4"
        cy="6.7"
        r="1"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="m4 7 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h14M14 7l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}