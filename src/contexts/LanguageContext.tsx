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
    'nav.services_packages': 'Leistungen & Pakete',
    'nav.services_overview': 'Leistungsübersicht',
    'nav.pricing_packages': 'Preis-Pakete',
    'nav.book_now': 'Jetzt buchen',
    'nav.about_contact': 'Über uns & Kontakt',
    'nav.about_us': 'Über uns',
    'nav.contact_info': 'Kontaktinformationen',
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
    
    // Contact page
    'contact.title': 'Laura Hähni Office Services kontaktieren',
    'contact.subtitle': 'Ich freue mich zu hören, wie ich Ihr Unternehmen unterstützen kann. Ob Sie sich für ein Servicepaket interessieren, ein individuelles Angebot benötigen oder einfach eine Frage haben - kontaktieren Sie mich gerne.',
    'contact.info.title': 'Kontaktinformationen',
    'contact.info.email': 'E-Mail',
    'contact.info.phone': 'Telefon / WhatsApp',
    'contact.info.location': 'Standort',
    'contact.info.location.value': 'Ansässig in Frauenfeld, Schweiz (Nur Remote-Services)',
    'contact.hours.title': 'Geschäftszeiten',
    'contact.hours.weekdays': 'Montag bis Freitag: 08:00 – 12:00 und 14:00 – 18:00',
    'contact.hours.note': 'Support ausserhalb dieser Zeiten kann nach vorheriger Absprache und gegen Aufpreis verfügbar sein.',
    'contact.form.title': 'Kontaktformular',
    'contact.form.name': 'Vollständiger Name',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.subject': 'Betreff',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht senden',
    'contact.privacy.title': 'Datenschutzerklärung',
    'contact.privacy.text': 'Ihre persönlichen Daten werden sicher und in Übereinstimmung mit den Schweizer Datenschutzgesetzen behandelt. Ich teile keine Daten mit Dritten und verwende Ihre Angaben nur, um auf Ihre Anfrage zu antworten.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services_packages': 'Services & Packages',
    'nav.services_overview': 'Services Overview',
    'nav.pricing_packages': 'Pricing Packages',
    'nav.book_now': 'Book Now',
    'nav.about_contact': 'About & Contact',
    'nav.about_us': 'About Us',
    'nav.contact_info': 'Contact Info',
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
    
    // Contact page
    'contact.title': 'Contact Laura Hähni Office Services',
    'contact.subtitle': 'I\'d love to hear how I can support your business. Whether you\'re interested in a service package, need a custom quote, or simply have a question — feel free to get in touch.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone / WhatsApp',
    'contact.info.location': 'Location',
    'contact.info.location.value': 'Based in Frauenfeld, Switzerland (Remote-only services)',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekdays': 'Monday to Friday: 08:00 – 12:00 and 14:00 – 18:00',
    'contact.hours.note': 'Support outside these hours may be available with prior agreement and surcharge.',
    'contact.form.title': 'Contact Form',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.privacy.title': 'Privacy Statement',
    'contact.privacy.text': 'Your personal information is handled securely and in accordance with Swiss data protection laws. I do not share data with third parties and will only use your details to respond to your inquiry.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

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