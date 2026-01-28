'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'fr' | 'en' | 'de';

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'vc_lang';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>('fr');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored === 'fr' || stored === 'en' || stored === 'de') {
      setLangState(stored);
      document.documentElement.lang = stored;
    } else {
      document.documentElement.lang = 'fr';
    }
  }, []);

  const setLang = (value: Language) => {
    setLangState(value);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, value);
      document.documentElement.lang = value;
    }
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};

