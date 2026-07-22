'use client';

import {
  useCallback,
  useEffect,
  useState
} from 'react';

import en from '@/locales/en.json';
import es from '@/locales/es.json';
import pt from '@/locales/pt.json';

import type {
  Language,
  Translation
} from '@/types/translations';

const STORAGE_KEY = 'blz-language';

const translations: Record<Language, Translation> = {
  pt,
  es,
  en
};

function isLanguage(
  value: string | null
): value is Language {
  return (
    value === 'pt' ||
    value === 'es' ||
    value === 'en'
  );
}

function getInitialLanguage(): Language {
  const savedLanguage =
    window.localStorage.getItem(STORAGE_KEY);

  if (isLanguage(savedLanguage)) {
    return savedLanguage;
  }

  const browserLanguages =
    window.navigator.languages?.length
      ? window.navigator.languages
      : [window.navigator.language];

  const detectedLanguage = browserLanguages
    .map((item) => item.toLowerCase())
    .find(
      (item) =>
        item.startsWith('es') ||
        item.startsWith('en') ||
        item.startsWith('pt')
    );

  if (detectedLanguage?.startsWith('es')) {
    return 'es';
  }

  if (detectedLanguage?.startsWith('en')) {
    return 'en';
  }

  return 'pt';
}

export function useLanguage() {
  const [language, setLanguageState] =
    useState<Language>('pt');

  useEffect(() => {

    const timeoutId = window.setTimeout(() => {
      const initialLanguage = getInitialLanguage();

      setLanguageState(initialLanguage);

      document.documentElement.lang =
        initialLanguage;
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  const setLanguage = useCallback(
    (newLanguage: Language) => {
      setLanguageState(newLanguage);

      window.localStorage.setItem(
        STORAGE_KEY,
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