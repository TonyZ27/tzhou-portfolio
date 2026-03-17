import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'zh';

interface LanguageContextType {
  currentLanguage: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Check localStorage for saved preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved && (saved === 'en' || saved === 'zh')) {
        return saved;
      }
    }
    return 'en';
  });

  const toggleLanguage = useCallback(() => {
    setCurrentLanguage((prev) => {
      const newLang = prev === 'en' ? 'zh' : 'en';
      localStorage.setItem('language', newLang);
      return newLang;
    });
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  }, []);

  // Update HTML lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
  }, [currentLanguage]);

  const value: LanguageContextType = {
    currentLanguage,
    toggleLanguage,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
