'use client';

import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext({ lang: 'en', toggle: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <LanguageContext.Provider value={{ lang, toggle: () => setLang(l => l === 'en' ? 'ar' : 'en') }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
