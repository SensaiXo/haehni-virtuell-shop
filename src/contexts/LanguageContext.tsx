import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.services': 'Leistungen',
    'nav.products': 'Pakete',
    'nav.booking': 'Online-Buchung',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.blog': 'Blog',
    'cta.booking': 'Erstgespräch buchen',
    
    // Products page
    'products.title': 'Virtuelle Assistenz Pakete für Schweizer Unternehmen',
    'products.subtitle': 'Alle Dienstleistungen werden 100% remote von Laura Hähni Office Services mit Sitz in Frauenfeld, Schweiz, erbracht. Keine Vorort-Besuche – nur effiziente, flexible Unterstützung, wo immer Sie sind.',
    'products.starter.title': 'Starter Plan – Ideal für Solo-Unternehmer',
    'products.starter.subtitle': 'Ideal für: Freelancer und Selbstständige, die leichte virtuelle Unterstützung benötigen.',
    'products.business.title': 'Business Plan – Ideal für kleine Teams',
    'products.business.subtitle': 'Ideal für: Kleine Unternehmen, die remote Hilfe bei Finanzen und HR benötigen.',
    'products.pro.title': 'Pro Plan – Ideal für wachsende Unternehmen',
    'products.pro.subtitle': 'Ideal für: Unternehmen mit regelmässigen Admin-Bedürfnissen, die vollständige virtuelle Unterstützung suchen.',
    'products.flexible.title': 'Flexible Unterstützung benötigt?',
    'products.flexible.subtitle': 'Virtuelle Assistenz nach Bedarf',
    'products.custom.title': 'Etwas Individuelles benötigt?',
    'products.custom.subtitle': 'Massgeschneiderte virtuelle Lösungen verfügbar',
    'products.faq.title': 'Häufig gestellte Fragen',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.products': 'Packages',
    'nav.booking': 'Online Booking',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    'cta.booking': 'Book Consultation',
    
    // Products page
    'products.title': 'Virtual Assistant Packages for Swiss Businesses',
    'products.subtitle': 'All services are delivered 100% remotely by Laura Hähni Office Services, based in Frauenfeld, Switzerland. No on-site visits – just efficient, flexible support wherever you are.',
    'products.starter.title': 'Starter Plan – Best for Solo Entrepreneurs',
    'products.starter.subtitle': 'Ideal for: Freelancers and independent professionals needing light virtual support.',
    'products.business.title': 'Business Plan – Best for Small Teams',
    'products.business.subtitle': 'Ideal for: Small businesses needing remote help with finance and HR.',
    'products.pro.title': 'Pro Plan – Best for Growing Companies',
    'products.pro.subtitle': 'Ideal for: Businesses with regular admin needs seeking full virtual support.',
    'products.flexible.title': 'Need Flexible Support?',
    'products.flexible.subtitle': 'On-Demand Virtual Assistance',
    'products.custom.title': 'Need Something Custom?',
    'products.custom.subtitle': 'Tailored Virtual Solutions Available',
    'products.faq.title': 'Frequently Asked Questions',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'de' || saved === 'en')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};