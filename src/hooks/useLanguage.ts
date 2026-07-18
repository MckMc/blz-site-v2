'use client';

import { useCallback, useState } from 'react';

import en from '@/locales/en.json';
import es from '@/locales/es.json';
import pt from '@/locales/pt.json';

import type {
  Language,
  Translation
} from '@/types/translations';

const translations: Record<Language, Translation> = {
  pt,
  es,
  en
};

function isLanguage(value: string | null): value is Language {
  return value === 'pt' || value === 'es' || value === 'en';
}

function getInitialLanguage(): Language {
  /*
   * Durante el render del servidor usamos portugués.
   * Así el HTML generado siempre tiene un valor estable.
   */
  if (typeof window === 'undefined') {
    return 'pt';
  }

  const savedLanguage =
    window.localStorage.getItem('blz-language');

  if (isLanguage(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguage =
    window.navigator.language.toLowerCase();

  if (browserLanguage.startsWith('es')) {
    return 'es';
  }

  if (browserLanguage.startsWith('en')) {
    return 'en';
  }

  return 'pt';
}

export function useLanguage() {
  const [language, setLanguageState] =
    useState<Language>('pt');

  const setLanguage = useCallback(
    (newLanguage: Language) => {
      setLanguageState(newLanguage);

      window.localStorage.setItem(
        'blz-language',
        newLanguage
      );

      document.documentElement.lang =
        newLanguage;
    },
    []
  );

  return {
    language,
    setLanguage,
    translation: translations[language]
  };
}