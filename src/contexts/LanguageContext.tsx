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
    'nav.faq': 'FAQ',
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
    
    // FAQ page
    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Hier finden Sie Antworten auf häufige Fragen zu unseren Unternehmensdienstleistungen. Können Sie nicht finden, was Sie suchen? Kontaktieren Sie uns gerne direkt.',
    'faq.q1': 'Welche Dienstleistungen bieten Sie an?',
    'faq.a1': 'Wir bieten remote Back-Office-Unterstützung für Ihr Unternehmen, einschliesslich:\n• Buchhaltung & Bookkeeping\n• Administrative Assistenz\n• Terminplanung\n• E-Mail & Korrespondenz\n• Digitale Dokumentenverwaltung und Prozessautomatisierung',
    'faq.q2': 'Wie funktioniert die Remote-Dienstleistung?',
    'faq.a2': 'Alle Dienstleistungen werden digital erbracht. Wir verwenden sichere Plattformen wie:\n• Cloud-basierte Buchhaltungstools (z.B. Xero, QuickBooks)\n• Verschlüsselte Dateifreigabe\n• Videokonferenzen und E-Mail für die Kommunikation\n\nSie haben rund um die Uhr Zugang zu Ihren Daten. Keine Präsenz vor Ort erforderlich.',
    'faq.q3': 'Was sind Ihre Arbeitszeiten?',
    'faq.a3': 'Unsere Standardzeiten sind Montag bis Freitag, 9:00 - 18:00 Uhr (Schweizer Zeit). Wir bieten auch flexible Unterstützung für dringende oder ausserplanmässige Anfragen.',
    'faq.q4': 'Wie viel kosten Ihre Dienstleistungen?',
    'faq.a4': 'Die Preise hängen vom Umfang und der Komplexität Ihrer Bedürfnisse ab. Wir bieten:\n• Wettbewerbsfähige Stundensätze\n• Monatliche Pakete für laufende Unterstützung\n\nBuchen Sie eine kostenlose Beratung für ein individuelles Angebot.',
    'faq.q5': 'Sind meine Geschäftsdaten sicher?',
    'faq.a5': 'Ja. Wir verwenden:\n• Branchenstandard-Verschlüsselung\n• Sichere Cloud-Speicherung\n• Vertraulichkeitsvereinbarungen (auf Anfrage verfügbar)\n\nAlle Systeme werden regelmässig aktualisiert und überwacht.',
    'faq.q6': 'Können Sie mit meiner bestehenden Buchhaltungssoftware arbeiten?',
    'faq.a6': 'Absolut. Wir unterstützen QuickBooks, Xero, Sage und andere grosse Plattformen. Bei Bedarf empfehlen wir Ihnen das richtige Tool für Ihr Unternehmen und helfen bei der Implementierung.',
    'faq.q7': 'Wie schnell können Sie anfangen?',
    'faq.a7': 'Wir integrieren neue Kunden normalerweise innerhalb von 1-2 Wochen nach der Beratung. Für dringende Projekte können wir nach Möglichkeit früher beginnen.',
    'faq.q8': 'Unterstützen Sie Unternehmen aller Grössen?',
    'faq.a8': 'Ja. Wir arbeiten mit Freelancern, Startups und etablierten KMUs. Unser Service wächst mit Ihrem Unternehmen mit.',
    'faq.q9': 'Was ist, wenn ich dringende Hilfe brauche?',
    'faq.a9': 'Für dringende Angelegenheiten: Rufen Sie uns an unter +41 (0)79 645 66 86, E-Mail an info@bdlh.ekigicod.myhostpoint.ch. Für laufende Kunden können wir Notfallkontaktverfahren einrichten.',
    'faq.q10': 'Kann ich Ihre Dienstleistungen testen, bevor ich mich festlege?',
    'faq.a10': 'Ja! Wir bieten: Eine kostenlose Erstberatung, kleine Projekte oder kurzfristige Testläufe zur Bewertung unserer Servicequalität.',
    'faq.cta.title': 'Haben Sie noch Fragen?',
    'faq.cta.subtitle': 'Wir sind hier, um zu helfen! Kontaktieren Sie uns für eine persönliche Beratung.',
    'faq.cta.email': 'E-Mail senden',
    'faq.cta.call': 'Jetzt anrufen',
    'faq.links.packages': 'Unsere Pakete ansehen',
    'faq.links.booking': 'Termin buchen',
    'faq.links.contact': 'Kontakt aufnehmen',
    'faq.privacy': 'Ihre Privatsphäre ist uns wichtig. Die bereitgestellten Informationen werden ausschliesslich zur Beantwortung Ihrer Anfrage verwendet und gemäss den geltenden Datenschutzgesetzen behandelt.',
    
    // Home page
    'home.trust.title': 'Warum Bürodienstleistungen Hähni?',
    'home.trust.subtitle': 'Damit Sie sich auf Ihr Kerngeschäft konzentrieren können',
    'home.trust.experience': 'Jahre Erfahrung',
    'home.trust.experience_desc': 'Langjährige Expertise in der kaufmännischen Sachbearbeitung',
    'home.trust.remote': 'Remote',
    'home.trust.remote_desc': 'Vollständig digitale Abwicklung - keine Vor-Ort-Termine nötig',
    'home.trust.flexible': 'Flexibel',
    'home.trust.flexible_desc': 'Anpassung an Ihre Bedürfnisse und Arbeitszeiten',
    'home.cta.title': 'Bereit für Ihr kostenloses Erstgespräch?',
    'home.cta.subtitle': 'Lassen Sie uns besprechen, wie wir Ihr Backoffice optimieren können.',
    'home.cta.book': 'Jetzt Termin vereinbaren',
    'home.cta.learn_more': 'Mehr erfahren',
    
    // Services
    'services.title': 'Unsere Leistungen',
    'services.subtitle': 'Konzentrieren Sie sich auf Ihr Kerngeschäft, während wir Ihr Backoffice professionell betreuen.',
    'services.cta': 'Alle Leistungen im Detail',
    'services.accounting.title': 'Buchhaltung',
    'services.accounting.description': 'Professionelle Buchführung und Finanzadministration für Ihr Unternehmen.',
    'services.accounting.feature1': 'Debitoren/Kreditoren',
    'services.accounting.feature2': 'Abschlüsse',
    'services.accounting.feature3': 'Steuern',
    'services.hr.title': 'Personalwesen',
    'services.hr.description': 'Komplette HR-Betreuung von der Lohnabrechnung bis zur Personalverwaltung.',
    'services.hr.feature1': 'Lohnabrechnung',
    'services.hr.feature2': 'Arbeitsverträge',
    'services.hr.feature3': 'Sozialversicherungen',
    'services.virtual.title': 'Virtuelle Assistenz',
    'services.virtual.description': 'Unterstützung der Geschäftsleitung bei administrativen Aufgaben.',
    'services.virtual.feature1': 'Terminplanung',
    'services.virtual.feature2': 'E-Mail-Management',
    'services.virtual.feature3': 'Dokumentation',
    'services.research.title': 'Online-Recherche',
    'services.research.description': 'Professionelle Recherche und Marktanalysen für Ihre Geschäftsentscheidungen.',
    'services.research.feature1': 'Marktanalysen',
    'services.research.feature2': 'Konkurrenzanalyse',
    'services.research.feature3': 'Datensammlung',
    'services.admin.title': 'Administration',
    'services.admin.description': 'Allgemeine Büroarbeiten und administrative Unterstützung.',
    'services.admin.feature1': 'Korrespondenz',
    'services.admin.feature2': 'Archivierung',
    'services.admin.feature3': 'Reporting',
    'services.consulting.title': 'Beratung',
    'services.consulting.description': 'Strategische Beratung für Prozessoptimierung und Effizienzsteigerung.',
    'services.consulting.feature1': 'Prozessanalyse',
    'services.consulting.feature2': 'Optimierung',
    'services.consulting.feature3': 'Digitalisierung',
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
    'nav.faq': 'FAQ',
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
    
    // FAQ page
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about our business services. Can\'t find what you\'re looking for? Feel free to contact us directly.',
    'faq.q1': 'What services do you offer?',
    'faq.a1': 'We provide remote back-office support tailored to your business, including:\n• Accounting & bookkeeping\n• Administrative assistance\n• Appointment scheduling\n• Email & correspondence handling\n• Digital document management and process automation',
    'faq.q2': 'How does remote service delivery work?',
    'faq.a2': 'All services are delivered digitally. We use secure platforms like:\n• Cloud-based accounting tools (e.g. Xero, QuickBooks)\n• Encrypted file sharing\n• Video conferencing and email for communication\n\nYou\'ll have 24/7 access to your data. No on-site presence is needed.',
    'faq.q3': 'What are your working hours?',
    'faq.a3': 'Our standard hours are Monday to Friday, 9:00 AM–6:00 PM (Swiss time). We also offer flexible support for urgent or out-of-hours requests.',
    'faq.q4': 'How much do your services cost?',
    'faq.a4': 'Pricing depends on the scope and complexity of your needs. We offer:\n• Competitive hourly rates\n• Monthly packages for ongoing support\n\nBook a free consultation to get a custom quote.',
    'faq.q5': 'Is my business data secure?',
    'faq.a5': 'Yes. We use:\n• Industry-standard encryption\n• Secure cloud storage\n• Confidentiality agreements (available upon request)\n\nAll systems are regularly updated and monitored.',
    'faq.q6': 'Can you work with my existing accounting software?',
    'faq.a6': 'Absolutely. We support QuickBooks, Xero, Sage, and other major platforms. If needed, we\'ll recommend and help you implement the right tool for your business.',
    'faq.q7': 'How soon can you start?',
    'faq.a7': 'We usually onboard new clients within 1–2 weeks of consultation. For urgent projects, we can start sooner where possible.',
    'faq.q8': 'Do you support businesses of all sizes?',
    'faq.a8': 'Yes. We work with freelancers, startups, and established SMEs. Our service scales with your business as it grows.',
    'faq.q9': 'What if I need urgent assistance?',
    'faq.a9': 'For urgent matters: Call us at +41 (0)79 645 66 86, Email us at info@bdlh.ekigicod.myhostpoint.ch. We can arrange emergency contact procedures for ongoing clients.',
    'faq.q10': 'Can I try your services before committing?',
    'faq.a10': 'Yes! We offer: A free initial consultation, Small projects or short-term trials to evaluate our service quality.',
    'faq.cta.title': 'Still Have Questions?',
    'faq.cta.subtitle': 'We\'re here to help! Get in touch for a personalized consultation.',
    'faq.cta.email': 'Send us an Email',
    'faq.cta.call': 'Call us Now',
    'faq.links.packages': 'View Our Packages',
    'faq.links.booking': 'Book Appointment',
    'faq.links.contact': 'Get in Touch',
    'faq.privacy': 'Your privacy is important to us. Information provided will be used solely to respond to your inquiry and handled in accordance with applicable data protection laws.',
    
    // Home page
    'home.trust.title': 'Why Choose Laura Hähni Office Services?',
    'home.trust.subtitle': 'So you can focus on your core business',
    'home.trust.experience': 'Years Experience',
    'home.trust.experience_desc': 'Long-standing expertise in commercial administration',
    'home.trust.remote': 'Remote',
    'home.trust.remote_desc': 'Completely digital processing - no on-site appointments needed',
    'home.trust.flexible': 'Flexible',
    'home.trust.flexible_desc': 'Adaptation to your needs and working hours',
    'home.cta.title': 'Ready for your free initial consultation?',
    'home.cta.subtitle': 'Let\'s discuss how we can optimize your back office.',
    'home.cta.book': 'Schedule Appointment Now',
    'home.cta.learn_more': 'Learn More',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Focus on your core business while we professionally manage your back office.',
    'services.cta': 'All Services in Detail',
    'services.accounting.title': 'Accounting',
    'services.accounting.description': 'Professional bookkeeping and financial administration for your company.',
    'services.accounting.feature1': 'Accounts Receivable/Payable',
    'services.accounting.feature2': 'Financial Statements',
    'services.accounting.feature3': 'Taxes',
    'services.hr.title': 'Human Resources',
    'services.hr.description': 'Complete HR support from payroll to personnel management.',
    'services.hr.feature1': 'Payroll Processing',
    'services.hr.feature2': 'Employment Contracts',
    'services.hr.feature3': 'Social Insurance',
    'services.virtual.title': 'Virtual Assistance',
    'services.virtual.description': 'Supporting management with administrative tasks.',
    'services.virtual.feature1': 'Appointment Scheduling',
    'services.virtual.feature2': 'Email Management',
    'services.virtual.feature3': 'Documentation',
    'services.research.title': 'Online Research',
    'services.research.description': 'Professional research and market analysis for your business decisions.',
    'services.research.feature1': 'Market Analysis',
    'services.research.feature2': 'Competitive Analysis',
    'services.research.feature3': 'Data Collection',
    'services.admin.title': 'Administration',
    'services.admin.description': 'General office work and administrative support.',
    'services.admin.feature1': 'Correspondence',
    'services.admin.feature2': 'Archiving',
    'services.admin.feature3': 'Reporting',
    'services.consulting.title': 'Consulting',
    'services.consulting.description': 'Strategic consulting for process optimization and efficiency improvement.',
    'services.consulting.feature1': 'Process Analysis',
    'services.consulting.feature2': 'Optimization',
    'services.consulting.feature3': 'Digitization',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'de' || saved === 'en')) {
      setLanguage(saved);
    } else {
      // Always default to English if no saved language
      setLanguage('en');
      localStorage.setItem('language', 'en');
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