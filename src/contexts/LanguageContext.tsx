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
    'faq.title': 'Häufig Gestellte Fragen (FAQ) zu Virtuellen Assistenz-Diensten',
    'faq.subtitle': 'Als zertifizierte virtuelle Assistentin in der Schweiz helfe ich KMU, Selbstständigen und Privatpersonen, administrative Lasten zu reduzieren. Diese FAQ deckt gängige Suchanfragen ab und ist suchmaschinenoptimiert für bessere Auffindbarkeit.',
    'faq.q1': 'Was macht eine virtuelle Assistentin genau?',
    'faq.a1': 'Eine virtuelle Assistentin übernimmt administrative, organisatorische und finanzielle Aufgaben remote, damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Bei Bürodienstleistungen Hähni umfassen das E-Mail-Management, Terminplanung, Buchhaltung, Personaladministration und mehr – alles 100% digital und flexibel. Im Gegensatz zu traditionellen Büros bieten wir Schweizer Präzision ohne Vor-Ort-Präsenz.\n\nVorteile: Sparen Sie bis zu 30% an internen Kosten durch Outsourcing.\n\n→ Mehr zu unseren Leistungen unter /leistungen\n→ Bereit zu starten? Buchen Sie ein kostenloses Erstgespräch unter /buchung',
    'faq.q2': 'Welche Vorteile hat die Einstellung einer virtuellen Assistentin für KMU in der Schweiz?',
    'faq.a2': 'Virtuelle Assistenz entlastet Schweizer KMU von Routineaufgaben wie Buchhaltung oder HR, was Zeit und Kosten spart. Unsere USPs: Flexible Abrechnung (ab CHF 60/Stunde), volle Datensicherheit nach DSG und persönliche Betreuung. Kunden berichten von 20-40% mehr Fokus auf Wachstum. Ideal für Freelancer und Startups in Frauenfeld oder Zürich.\n\nTipp: Keine Fixkosten wie bei Festanstellungen – nur bei Bedarf zahlen.\n\n→ Erfahren Sie mehr über unsere Pakete unter /products\n→ Kontaktieren Sie uns für ein individuelles Angebot',
    'faq.q3': 'Wie viel kostet eine virtuelle Assistentin in der Schweiz?',
    'faq.a3': 'Die Kosten variieren je nach Umfang: Bei uns starten Stundenpreise bei CHF 60 für virtuelle Assistenz und CHF 70 für Buchhaltung. Pauschalpakete (z. B. 5 Std./Monat für CHF 290) bieten Rabatte für Planungssicherheit. Keine versteckten Gebühren – transparente Abrechnung pro 15 Minuten. Im Vergleich zu Inhouse-Mitarbeitern sparen Sie Lohnnebenkosten und Sozialabgaben.\n\nBeispiel: Ein Monatspaket „Pro" (20 Std.) kostet CHF 990.\n\n→ Sehen Sie alle Preise unter /products\n→ Fordern Sie eine Offerte unter /kontakt an',
    'faq.q4': 'Sind meine Daten sicher bei einer virtuellen Assistentin?',
    'faq.a4': 'Ja, absolut – wir halten uns streng an Schweizer Datenschutzgesetze (DSG) und EU-DSGVO. Daten werden über sichere Tools wie Dropbox oder bexio ausgetauscht, mit Verschlüsselung und Vertraulichkeitsvereinbarungen. Kein Zugriff Dritter, regelmäßige Backups. Unsere Kunden schätzen diese Transparenz als Kern unserer Swiss-Quality-Philosophie.\n\nZusätzlich: Auf Wunsch NDAs verfügbar.\n\n→ Lesen Sie unsere Datenschutzerklärung\n→ Haben Sie Fragen? Kontaktieren Sie uns unter /kontakt',
    'faq.q5': 'Muss ich vor Ort sein, um mit einer virtuellen Assistentin zusammenzuarbeiten?',
    'faq.a5': 'Nein, unsere Dienste sind 100% remote – perfekt für Kunden in der ganzen Schweiz oder DACH-Region. Kommunikation via Zoom, E-Mail oder Slack; Dokumente digital via Cloud. Das spart Reisekosten und ermöglicht Flexibilität, z. B. für Home-Office-Teams. Persönliche Treffen in Frauenfeld nur auf Wunsch.\n\nVorteil: Starten Sie innerhalb von 1-3 Tagen nach dem Erstgespräch.\n\n→ Mehr zum Ablauf\n→ Buchen Sie jetzt unter /buchung',
    'faq.q6': 'Gibt es Mindestlaufzeiten oder Verträge für virtuelle Assistenz?',
    'faq.a6': 'Nein, wir bieten maximale Flexibilität ohne Mindestlaufzeiten. Buchen Sie ad-hoc für Spitzenlasten oder monatlich für laufende Unterstützung. Kündigung jederzeit möglich – wir bauen auf langfristiges Vertrauen, nicht auf Verträge. Ideal für saisonale Bedürfnisse von Schweizer Startups.\n\nOption: Pauschalen für Rabatte bei Daueraufträgen.\n\n→ Entdecken Sie unsere Modelle unter /products\n→ Lassen Sie uns reden unter /kontakt',
    'faq.q7': 'Wie schnell kann ich mit einer virtuellen Assistentin starten?',
    'faq.a7': 'Meist innerhalb von 1-3 Werktagen: Nach einem kostenlosen 30-minütigen Erstgespräch (via Zoom) erhalten Sie eine Offerte. Danach starten wir remote. Für dringende Fälle priorisieren wir – z. B. bei Steuerfristen oder Events. Unsere Effizienz ist ein Top-USP für KMU.\n\nTipp: Nutzen Sie unseren Online-Kalender für schnelle Buchung.\n\n→ Buchen Sie hier unter /buchung',
    'faq.q8': 'Kann eine virtuelle Assistentin meine Buchhaltung übernehmen?',
    'faq.a8': 'Ja, als zertifizierte Buchhalterin übernehme ich Finanzbuchhaltung, MWST-Abrechnungen, Rechnungsstellung und Steuererklärungen – alles digital mit Tools wie bexio. Speziell für Schweizer KMU: Vorbereitung für Jahresabschlüsse und Quellensteuer. Sparen Sie Zeit und vermeiden Sie Fehler.\n\nBeispiel: Digitale Belegverwaltung via Google Drive.\n\n→ Details zur Buchhaltung unter /leistungen\n→ Fordern Sie Hilfe an unter /kontakt',
    'faq.q9': 'Welche Tools nutzt eine virtuelle Assistentin?',
    'faq.a9': 'Wir arbeiten mit bewährten Tools wie bexio (Buchhaltung), Slack/Teams (Kommunikation), Google Workspace/Dropbox (Dokumente) und Zoom (Meetings). Auf Wunsch integrieren wir Ihre Systeme oder empfehlen Optimierungen für Digitalisierung. Alles sicher und skalierbar.\n\nVorteil: Keine Lernkurve für Sie.\n\n→ Mehr zu Tools\n→ Kontakt für Beratung unter /kontakt',
    'faq.q10': 'Warum eine virtuelle Assistentin aus der Schweiz wählen?',
    'faq.a10': 'Schweizer Qualität bedeutet Zuverlässigkeit, Präzision und Diskretion – plus Kenntnisse lokaler Gesetze (z. B. AHV, MWST). Als Sitz in Frauenfeld bieten wir persönliche Nähe mit globaler Flexibilität. Kunden wählen uns für die Mischung aus Effizienz und Wärme.\n\nTestimonial: „Laura hat unsere Admin digitalisiert – top!" (Patrick S., Zürich).\n\n→ Über uns unter /ueber-uns\n→ Starten Sie Ihr Projekt unter /kontakt',
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
    'faq.title': 'Frequently Asked Questions (FAQ) about Virtual Assistant Services',
    'faq.subtitle': 'As a certified virtual assistant in Switzerland, I help SMEs, freelancers, and individuals reduce administrative burdens. This FAQ covers common search queries and is search engine optimized for better findability.',
    'faq.q1': 'What exactly does a virtual assistant do?',
    'faq.a1': 'A virtual assistant handles administrative, organizational, and financial tasks remotely, allowing you to focus on your core business. At Bürodienstleistungen Hähni, this includes email management, scheduling, bookkeeping, HR admin, and more – all 100% digital and flexible. Unlike traditional offices, we offer Swiss precision without on-site presence.\n\nBenefits: Save up to 30% on internal costs through outsourcing.\n\n→ More about our services at /services\n→ Ready to start? Book a free consultation at /booking',
    'faq.q2': 'What are the benefits of hiring a virtual assistant for SMEs in Switzerland?',
    'faq.a2': 'Virtual assistance relieves Swiss SMEs of routine tasks like bookkeeping or HR, saving time and costs. Our USPs: Flexible billing (from CHF 60/hour), full data security under DSG, and personal support. Clients report 20-40% more focus on growth. Ideal for freelancers and startups in Frauenfeld or Zurich.\n\nTip: No fixed costs like with permanent hires – pay only as needed.\n\n→ Learn about our packages at /products\n→ Contact us for a custom quote',
    'faq.q3': 'How much does a virtual assistant cost in Switzerland?',
    'faq.a3': 'Costs vary by scope: Our hourly rates start at CHF 60 for virtual assistance and CHF 70 for bookkeeping. Flat-rate packages (e.g., 5 hrs/month for CHF 290) offer discounts for predictability. No hidden fees – transparent billing per 15 minutes. Compared to in-house staff, you save on overheads and social contributions.\n\nExample: "Pro" monthly package (20 hrs) at CHF 990.\n\n→ View all pricing at /products\n→ Request a quote at /contact',
    'faq.q4': 'Is my data secure with a virtual assistant?',
    'faq.a4': 'Yes, absolutely – we strictly adhere to Swiss data protection laws (DSG) and EU GDPR. Data is exchanged via secure tools like Dropbox or bexio, with encryption and confidentiality agreements. No third-party access, regular backups. Our clients value this transparency as core to our Swiss-quality philosophy.\n\nAdditional: NDAs upon request.\n\n→ Read our privacy policy\n→ Have questions? Contact us at /contact',
    'faq.q5': 'Do I need to be on-site to work with a virtual assistant?',
    'faq.a5': 'No, our services are 100% remote – perfect for clients across Switzerland or the DACH region. Communication via Zoom, email, or Slack; documents digitally via cloud. This saves travel costs and enables flexibility, e.g., for home-office teams. Personal meetings in Frauenfeld only if desired.\n\nAdvantage: Start within 1-3 days after the initial consultation.\n\n→ More on the process\n→ Book now at /booking',
    'faq.q6': 'Are there minimum contract terms for virtual assistance?',
    'faq.a6': 'No, we offer maximum flexibility without minimum terms. Book ad-hoc for peak loads or monthly for ongoing support. Cancellation anytime – we build on long-term trust, not contracts. Ideal for seasonal needs of Swiss startups.\n\nOption: Flat rates for discounts on ongoing orders.\n\n→ Discover our models at /products\n→ Let\'s talk at /contact',
    'faq.q7': 'How quickly can I start with a virtual assistant?',
    'faq.a7': 'Usually within 1-3 business days: After a free 30-minute initial consultation (via Zoom), you get a quote. Then we start remotely. For urgent cases, we prioritize – e.g., tax deadlines or events. Our efficiency is a top USP for SMEs.\n\nTip: Use our online calendar for quick booking.\n\n→ Book here at /booking',
    'faq.q8': 'Can a virtual assistant handle my bookkeeping?',
    'faq.a8': 'Yes, as a certified accountant, I handle financial bookkeeping, VAT settlements, invoicing, and tax returns – all digitally with tools like bexio. Specifically for Swiss SMEs: Preparation for annual closings and withholding taxes. Save time and avoid errors.\n\nExample: Digital receipt management via Google Drive.\n\n→ Bookkeeping details at /services\n→ Request help at /contact',
    'faq.q9': 'What tools does a virtual assistant use?',
    'faq.a9': 'We work with proven tools like bexio (bookkeeping), Slack/Teams (communication), Google Workspace/Dropbox (documents), and Zoom (meetings). Upon request, we integrate your systems or recommend optimizations for digitization. All secure and scalable.\n\nAdvantage: No learning curve for you.\n\n→ More on tools\n→ Contact for advice at /contact',
    'faq.q10': 'Why choose a virtual assistant from Switzerland?',
    'faq.a10': 'Swiss quality means reliability, precision, and discretion – plus knowledge of local laws (e.g., AHV, VAT). Based in Frauenfeld, we offer personal proximity with global flexibility. Clients choose us for the blend of efficiency and warmth.\n\nTestimonial: "Laura digitized our admin – top!" (Patrick S., Zurich).\n\n→ About us at /about\n→ Start your project at /contact',
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