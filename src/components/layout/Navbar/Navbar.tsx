'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import type { Language, Translation } from '@/types/translations';

import styles from './Navbar.module.css';

type NavbarProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  translation: Translation['navbar'];
};

const WHATSAPP_URL =
  'https://wa.me/5522997913238?text=Olá!%20Vi%20o%20site%20da%20BLZ%20Site%20e%20gostaria%20de%20mais%20informações.';

const NAV_LINKS = [
  { id: 'servicos', key: 'services' },
  { id: 'portfolio', key: 'portfolio' },
  { id: 'processo', key: 'process' },
  { id: 'planos', key: 'plans' },
  { id: 'sobre', key: 'about' },
  { id: 'contato', key: 'contact' }
] as const;

export default function Navbar({
  language,
  setLanguage,
  translation
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    closeMenu();
  };

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.headerScrolled : ''
      }`}
    >
      <div className={`container ${styles.navbar}`}>
        <a
          href="#inicio"
          className={styles.brand}
          onClick={closeMenu}
          aria-label="BLZ Site"
        >
          <Image
            src="/images/logo.png"
            alt="BLZ Site"
            width={128}
            height={88}
            priority
            className={styles.logo}
          />

          <div className={styles.brandText}>
            <strong>BLZ Site</strong>
            <span>{translation.subtitle}</span>
          </div>
        </a>

        <nav className={styles.desktopNavigation}>
          {NAV_LINKS.map(({ id, key }) => (
            <a key={id} href={`#${id}`}>
              {translation[key]}
            </a>
          ))}
        </nav>

        <div className={styles.desktopActions}>
          <LanguageSelector
            language={language}
            setLanguage={handleLanguageChange}
          />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <WhatsAppIcon />
            <span>{translation.whatsapp}</span>
          </a>
        </div>

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ''
          }`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            menuOpen ? translation.closeMenu : translation.openMenu
          }
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <button
        type="button"
        className={`${styles.overlay} ${
          menuOpen ? styles.overlayVisible : ''
        }`}
        onClick={closeMenu}
        aria-label={translation.closeMenu}
      />

      <aside
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <div className={styles.mobileHeader}>
          <div className={styles.mobileBrand}>
            <Image
              src="/images/logo-con-texto.png"
              alt="BLZ Site"
              width={108}
              height={74}
              className={styles.mobileLogo}
            />

            <div>
              <strong>BLZ Site</strong>
              <span>{translation.subtitle}</span>
            </div>
          </div>
        </div>

        <nav className={styles.mobileNavigation}>
          {NAV_LINKS.map(({ id, key }, index) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {translation[key]}
            </a>
          ))}
        </nav>

        <div className={styles.mobileFooter}>
          <LanguageSelector
            language={language}
            setLanguage={handleLanguageChange}
            mobile
          />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileWhatsapp}
            onClick={closeMenu}
          >
            <WhatsAppIcon />
            {translation.whatsapp}
          </a>
        </div>
      </aside>
    </header>
  );
}

type LanguageSelectorProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  mobile?: boolean;
};

function LanguageSelector({
  language,
  setLanguage,
  mobile = false
}: LanguageSelectorProps) {
  return (
    <div
      className={
        mobile ? styles.mobileLanguages : styles.languageSelector
      }
    >
      {(['pt', 'es', 'en'] as Language[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={
            language === item
              ? mobile
                ? styles.activeMobileLanguage
                : styles.activeLanguage
              : undefined
          }
          aria-label={`Selecionar idioma ${item.toUpperCase()}`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
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