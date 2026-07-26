'use client';

import Image from 'next/image';

import { trackEvent } from '@/lib/analytics';
import type { Translation } from '@/types/translations';

import styles from './Footer.module.css';

type FooterProps = {
  translation: Translation['footer'];
};

const INSTAGRAM_URL =
  'https://www.instagram.com/blz.site/';

const WHATSAPP_URL =
  'https://wa.me/5522997913238';

const EMAIL_URL =
  'mailto:blzsite.buzios@gmail.com';

export default function Footer({
  translation
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  function trackWhatsApp(location: string) {
    trackEvent({
      eventName: 'whatsapp_click',
      category: 'contact',
      label: location
    });
  }

  function trackInstagram(location: string) {
    trackEvent({
      eventName: 'instagram_click',
      category: 'social',
      label: location
    });
  }

  function trackEmail(location: string) {
    trackEvent({
      eventName: 'email_click',
      category: 'contact',
      label: location
    });
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a
              href="#inicio"
              className={styles.logo}
              aria-label="BLZ Site"
            >
              <Image
                src="/images/logo-inverso.png"
                alt="BLZ Site"
                width={170}
                height={60}
                className={styles.logoImage}
              />
            </a>

            <p>{translation.description}</p>

            <div className={styles.socials}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={() =>
                  trackWhatsApp('footer_social_icon')
                }
              >
                <WhatsAppIcon />
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() =>
                  trackInstagram('footer_social_icon')
                }
              >
                <InstagramIcon />
              </a>

              <a
                href={EMAIL_URL}
                aria-label="Email"
                onClick={() =>
                  trackEmail('footer_social_icon')
                }
              >
                <EmailIcon />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3>{translation.navigationTitle}</h3>

            <nav>
              <a href="#inicio">
                {translation.homeLink}
              </a>

              <a href="#servicos">
                {translation.servicesLink}
              </a>

              <a href="#portfolio">
                {translation.portfolioLink}
              </a>

              <a href="#processo">
                {translation.processLink}
              </a>

              <a href="#planos">
                {translation.plansLink}
              </a>

              <a href="#sobre">
                {translation.aboutLink}
              </a>
            </nav>
          </div>

          <div className={styles.column}>
            <h3>{translation.contactTitle}</h3>

            <div className={styles.contacts}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsApp('footer_contact_link')
                }
              >
                <span>
                  <WhatsAppIcon />
                </span>

                +55 22 99791-3238
              </a>

              <a
                href={EMAIL_URL}
                onClick={() =>
                  trackEmail('footer_contact_link')
                }
              >
                <span>
                  <EmailIcon />
                </span>

                blzsite.buzios@gmail.com
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackInstagram('footer_contact_link')
                }
              >
                <span>
                  <InstagramIcon />
                </span>

                @blz.site
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {currentYear} BLZ Site.{' '}
            {translation.rights}
          </p>

          <p className={styles.location}>
            <LocationIcon />
            {translation.madeIn}
          </p>
        </div>
      </div>
    </footer>
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

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="10"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}