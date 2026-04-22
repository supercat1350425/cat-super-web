import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface Translations {
  [key: string]: {
    en: string;
    zh: string;
  };
}

export const translations: Translations = {
  nav_works: { en: 'Works', zh: '作品' },
  nav_about: { en: 'About', zh: '关于' },
  nav_contact: { en: 'Contact', zh: '联系' },
  hero_title: { en: 'CRAFTING DIGITAL', zh: '打造数字' },
  hero_subtitle: { en: 'EXPERIENCES', zh: '交互体验' },
  hero_desc: { 
    en: 'Digital Designer & Developer focused on high-end interaction and minimalist aesthetics.', 
    zh: '数字设计师和开发人员，专注于高端交互和极简美学。' 
  },
  cta_view_works: { en: 'View Works', zh: '浏览作品' },
  about_title: { en: 'ABOUT ME', zh: '关于我' },
  about_text: { 
    en: 'I bridge the gap between design and technology. My work is informed by a clinical approach to detail and a passion for motion.', 
    zh: '我致力于弥合设计与技术之间的鸿沟。我的工作源于对细节的精益求精和对动态视觉的热诚。' 
  },
  contact_title: { en: 'GET IN TOUCH', zh: '联系方式' },
  contact_email: { en: 'Email Me', zh: '邮件联系' },
  contact_social: { en: 'Social', zh: '社交媒体' },
  project_type_ui: { en: 'UI/UX Design', zh: 'UI/UX 设计' },
  project_type_web: { en: 'Web Development', zh: '网页开发' },
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('zh');

  const t = (key: string) => {
    return translations[key]?.[lang] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
