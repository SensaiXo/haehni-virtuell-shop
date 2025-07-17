
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Calculator, Users, HeadphonesIcon, Search, FileText, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SelectedPackage {
  tier: string;
  price: string;
  effort: string;
  note: string;
}

interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  services: Record<string, SelectedPackage>;
}

const Leistungen = () => {
  const { t } = useLanguage();
  const [selectedPackages, setSelectedPackages] = useState<Record<string, SelectedPackage>>({});
  const [showContactModal, setShowContactModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [modalType, setModalType] = useState<'single' | 'combined'>('single');
  const [currentService, setCurrentService] = useState('');
  const [messageTitle, setMessageTitle] = useState('');
  const [messageText, setMessageText] = useState('');
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    services: {}
  });

  const services = [
    {
      icon: Calculator,
      title: 'Buchhaltung',
      description: 'Professionelle Buchhaltung und Finanzadministration',
      details: [
        'Doppelte Buchhaltung',
        'Monats- und Jahresabschlüsse',
        'MWST-Abrechnung',
        'Kassenbuch-Führung',
        'Belege digitalisieren und verbuchen'
      ],
      packages: [
        { tier: 'Mini (bis 40 Belege)', price: 'CHF 300.– exkl. MwSt', effort: '3 Std', note: 'Mehrbelege: CHF 2.– je Beleg' },
        { tier: 'Standard (bis 100)', price: 'CHF 540.– exkl. MwSt', effort: '6 Std', note: '' },
        { tier: 'Business (bis 200)', price: 'CHF 900.– exkl. MwSt', effort: '10 Std', note: '' },
        { tier: 'Plus (bis 300)', price: 'CHF 1\'050.– exkl. MwSt', effort: '14 Std', note: '' }
      ]
    },
    {
      icon: Users,
      title: 'Lohnadministration',
      description: 'Komplette Lohnabrechnung für Ihr Unternehmen',
      details: [
        'Monatliche Lohnabrechnung',
        'Sozialversicherungen',
        'Lohnausweise',
        'Lohnbuchhaltung',
        'Quellensteuer',
        'Unfallversicherung'
      ],
      packages: [
        { tier: 'Basic (1 Lohn)', price: 'CHF 75.– exkl. MwSt', effort: '0.75 Std', note: 'Mehrlöhne: CHF 25.– je Lohn' },
        { tier: 'Standard (bis 3)', price: 'CHF 180.– exkl. MwSt', effort: '2 Std', note: '' },
        { tier: 'Business (bis 8)', price: 'CHF 405.– exkl. MwSt', effort: '4.5 Std', note: '' },
        { tier: 'Plus (bis 15)', price: 'CHF 600.– exkl. MwSt', effort: '8 Std', note: '' }
      ]
    },
    {
      icon: Users,
      title: 'Personaladministration',
      description: 'Professionelle Personalverwaltung',
      details: [
        'Personalakten führen',
        'Arbeitsverträge erstellen',
        'Mutationen verarbeiten',
        'Zeugnisse und Referenzen',
        'Personalstatistiken',
        'Versicherungsanmeldungen'
      ],
      packages: [
        { tier: 'Basic (1 Mutation)', price: 'CHF 75.– exkl. MwSt', effort: '0.75 Std', note: 'Mehrmutationen: CHF 25.–' },
        { tier: 'Standard (bis 3)', price: 'CHF 180.– exkl. MwSt', effort: '2 Std', note: '' },
        { tier: 'Business (bis 5)', price: 'CHF 315.– exkl. MwSt', effort: '3.5 Std', note: '' },
        { tier: 'Plus (unbegrenzt)', price: 'CHF 450.– exkl. MwSt', effort: '–', note: '' }
      ]
    },
    {
      icon: FileText,
      title: 'Zahlungsläufe & Mahnwesen',
      description: 'Effiziente Zahlungsabwicklung und Mahnverfahren',
      details: [
        'Zahlungsläufe erstellen',
        'Mahnungen verschicken',
        'Debitorenverwaltung',
        'Zahlungseingänge kontrollieren',
        'Inkasso-Unterstützung',
        'Payment-Tracking'
      ],
      packages: [
        { tier: 'Mini (10 Zahlungen & 5 Mahnungen)', price: 'CHF 125.– exkl. MwSt', effort: '1.25 Std', note: 'Mehrbelege: CHF 2.– je Zahlung/Mahnung' },
        { tier: 'Standard (bis 25 & 10)', price: 'CHF 225.– exkl. MwSt', effort: '2.5 Std', note: '' },
        { tier: 'Business (bis 40 & 20)', price: 'CHF 315.– exkl. MwSt', effort: '3.5 Std', note: '' }
      ]
    },
    {
      icon: HeadphonesIcon,
      title: 'Virtuelle Assistenz',
      description: 'Flexible Unterstützung für Geschäftsführer',
      details: [
        'Terminplanung und Kalender',
        'E-Mail-Management',
        'Reiseplanung',
        'Dokumentenerstellung',
        'Protokolle und Sitzungen',
        'Projektkoordination'
      ],
      packages: [
        { tier: 'Light', price: 'CHF 100.– exkl. MwSt', effort: '1 Std', note: 'Mehrstunden: CHF 100.–/h' },
        { tier: 'Standard', price: 'CHF 270.– exkl. MwSt', effort: '3 Std', note: 'Mehrstunden: CHF 90.–/h' },
        { tier: 'Business', price: 'CHF 375.– exkl. MwSt', effort: '5 Std', note: 'Mehrstunden: CHF 75.–/h' },
        { tier: 'Max', price: 'CHF 750.– exkl. MwSt', effort: '10 Std', note: '' }
      ]
    },
    {
      icon: Search,
      title: 'Kommunikation & Organisation',
      description: 'Professionelle Kommunikation und Organisation',
      details: [
        'Korrespondenz führen',
        'Terminorganisation',
        'Veranstaltungsplanung',
        'Kundenbetreuung',
        'Präsentationen erstellen',
        'Organisationsstrukturen'
      ],
      packages: [
        { tier: 'Kompakt', price: 'CHF 100.– exkl. MwSt', effort: '1 Std', note: 'Mehrstunden: CHF 100.–/h' },
        { tier: 'Standard', price: 'CHF 270.– exkl. MwSt', effort: '3 Std', note: 'Mehrstunden: CHF 90.–/h' },
        { tier: 'Intensiv', price: 'CHF 375.– exkl. MwSt', effort: '5 Std', note: 'Mehrstunden: CHF 75.–/h' },
        { tier: 'Max', price: 'CHF 750.– exkl. MwSt', effort: '10 Std', note: '' }
      ]
    },
    {
      icon: FileText,
      title: 'Spesenverarbeitung',
      description: 'Effiziente Spesenabrechnung und -verwaltung',
      details: [
        'Spesenbelege erfassen',
        'Spesenkonten führen',
        'Abrechnungen erstellen',
        'Kategorisierung',
        'Steueroptimierung',
        'Reporting und Statistiken'
      ],
      packages: [
        { tier: 'Mini (bis 10 Belege)', price: 'CHF 100.– exkl. MwSt', effort: '1 Std', note: 'Mehrbelege: CHF 2.–' },
        { tier: 'Standard (bis 25)', price: 'CHF 180.– exkl. MwSt', effort: '2 Std', note: '' },
        { tier: 'Business (bis 50)', price: 'CHF 315.– exkl. MwSt', effort: '3.5 Std', note: '' },
        { tier: 'Plus (bis 80)', price: 'CHF 375.– exkl. MwSt', effort: '5 Std', note: '' },
        { tier: 'Max (bis 100+)', price: 'CHF 750.– exkl. MwSt', effort: '10 Std', note: '' }
      ]
    },
    {
      icon: HeadphonesIcon,
      title: 'Mailbetreuung',
      description: 'Professionelle E-Mail-Verwaltung und Kundenbetreuung',
      details: [
        'E-Mail-Postfach betreuen',
        'Kundenanfragen bearbeiten',
        'E-Mail-Korrespondenz',
        'Terminvereinbarungen',
        'Follow-up Kommunikation',
        'E-Mail-Marketing Support'
      ],
      packages: [
        { tier: 'Mini', price: 'CHF 100.– exkl. MwSt', effort: '1 Std', note: 'Mehrstunden: CHF 100.–/h' },
        { tier: 'Standard', price: 'CHF 270.– exkl. MwSt', effort: '3 Std', note: 'Mehrstunden: CHF 90.–/h' },
        { tier: 'Business', price: 'CHF 375.– exkl. MwSt', effort: '5 Std', note: 'Mehrstunden: CHF 75.–/h' },
        { tier: 'Max', price: 'CHF 750.– exkl. MwSt', effort: '10 Std', note: '' }
      ]
    }
  ];

  const selectPackage = (service: string, tier: string, price: string, effort: string, note: string) => {
    setSelectedPackages(prev => {
      const newSelection = { ...prev };
      
      if (newSelection[service]?.tier === tier) {
        delete newSelection[service];
      } else {
        newSelection[service] = { tier, price, effort, note };
      }
      
      return newSelection;
    });
  };

  const getColorClasses = (index: number) => {
    const colors = ['border-l-blue-200', 'border-l-blue-400', 'border-l-blue-600'];
    return colors[index] || colors[0];
  };

  const showMessage = (title: string, text: string) => {
    setMessageTitle(title);
    setMessageText(text);
    setShowMessageModal(true);
  };

  const showContactForm = (type: 'single' | 'combined', serviceName: string, services: Record<string, SelectedPackage>) => {
    setModalType(type);
    setCurrentService(serviceName);
    setFormData(prev => ({ ...prev, services }));
    setShowContactModal(true);
  };

  const handleQuoteClick = (service: string) => {
    if (selectedPackages[service]) {
      const selection = selectedPackages[service];
      showContactForm('single', service, { [service]: selection });
    } else {
      const totalSelections = Object.keys(selectedPackages).length;
      
      if (totalSelections === 0) {
        showMessage('Select a Package First!', `To get started:\n\n1. Choose a service you're interested in\n2. Click on one of the pricing packages (Basic, Standard, or Premium)\n3. Then click "Get Quote" again\n\nSelected packages will be highlighted with a checkmark ✓`);
      } else {
        showMessage(`No ${service} Package Selected`, `You have selections for other services. You can either:\n\n1. Select a ${service} package above, then click "Get Quote"\n2. Use the floating "Get Combined Quote" panel for your other selections\n\nOr select a package for ${service} first by clicking Basic, Standard, or Premium above.`);
      }
    }
  };

  const handleGlobalQuote = () => {
    const count = Object.keys(selectedPackages).length;
    if (count === 0) {
      showMessage('No Packages Selected', 'Please select at least one package from the services above first.');
      return;
    }
    
    showContactForm('combined', 'Multiple Services', selectedPackages);
  };

  const submitQuoteForm = () => {
    if (!formData.fullName.trim() || !formData.email.trim()) {
      alert('Please fill in all required fields (Name and Email)');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    setShowContactModal(false);
    setShowThankYouModal(true);
    
    // Reset form and selections
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      services: {}
    });
    setSelectedPackages({});
  };

  const selectedCount = Object.keys(selectedPackages).length;

  return (
    <Layout>
      <PageHeader 
        title="Unsere Leistungen"
        subtitle="Modulare Dienstleistungspakete für Schweizer KMU."
        backgroundImage="/lovable-uploads/845a28fa-4440-49ec-ba65-67e05a5fad14.png"
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-50'} border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full`}>
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                {/* Service Details */}
                <div className="flex-grow mb-6">
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Section */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-navy mb-4 text-center">Pakete</h3>
                  
                  {/* Packages Table */}
                  <div className="overflow-x-auto mb-6">
                    <table className="w-full text-sm">
                      <thead className="border-b border-gray-200">
                        <tr>
                          <th className="text-left py-2 font-semibold text-gray-700">Paket</th>
                          <th className="text-center py-2 font-semibold text-gray-700">Aufwand</th>
                          <th className="text-right py-2 font-semibold text-gray-700">Preis</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.packages.map((pkg, pkgIndex) => {
                          const isSelected = selectedPackages[service.title]?.tier === pkg.tier;
                          return (
                            <tr
                              key={pkgIndex}
                              onClick={() => selectPackage(service.title, pkg.tier, pkg.price, pkg.effort, pkg.note)}
                              className={`cursor-pointer transition-all duration-200 hover:bg-blue-50 ${
                                isSelected ? 'bg-blue-100 border-l-4 border-blue-600' : 'hover:border-l-4 hover:border-blue-300'
                              }`}
                            >
                              <td className="py-3 px-2 relative">
                                <div className="font-medium text-gray-900">{pkg.tier}</div>
                                {pkg.note && (
                                  <div className="text-xs text-blue-600 mt-1">{pkg.note}</div>
                                )}
                                {isSelected && (
                                  <div className="absolute top-2 right-2 text-blue-600 font-bold text-lg">✓</div>
                                )}
                              </td>
                              <td className="py-3 px-2 text-center text-gray-600">{pkg.effort}</td>
                              <td className="py-3 px-2 text-right font-bold text-navy">{pkg.price}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  
                  {selectedPackages[service.title] && (
                    <div className="text-sm text-green-600 font-medium mb-4 text-center bg-green-50 p-2 rounded-lg">
                      Ausgewählt: {selectedPackages[service.title].tier} - {selectedPackages[service.title].price}
                    </div>
                  )}

                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => handleQuoteClick(service.title)}
                      className="bg-navy text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                    >
                      Offerte anfordern
                    </button>
                    <button className="bg-white text-navy border-2 border-navy px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      Beratung buchen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Quote Panel */}
      {selectedCount > 0 && (
        <div className="fixed bottom-5 right-5 bg-white border-2 border-blue-600 rounded-xl p-5 shadow-xl max-w-sm z-50 transition-all duration-300">
          <button
            onClick={() => setSelectedPackages({})}
            className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
          <div className="text-lg font-semibold text-gray-900 mb-3">Ausgewählte Leistungen</div>
          <div className="max-h-48 overflow-y-auto mb-4">
            {Object.entries(selectedPackages).map(([service, details]) => (
              <div key={service} className="text-sm text-gray-700 mb-2 p-2 bg-gray-50 rounded-lg border-l-3 border-blue-600">
                <div className="font-semibold text-gray-900">{service}</div>
                <div>{details.tier} - {details.price}</div>
              </div>
            ))}
          </div>
          <button
            onClick={handleGlobalQuote}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mb-2"
          >
            Kombinierte Offerte anfordern
          </button>
          <div className="text-xs text-gray-500 text-center">
            Wählen Sie Pakete aus verschiedenen Dienstleistungen oben aus
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000] p-5 overflow-y-auto">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {modalType === 'combined' ? 'Kombinierte Offerte anfordern' : `Offerte anfordern - ${currentService}`}
            </h3>
            
            {/* Selected Services Summary */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="font-semibold text-blue-900 mb-2">Ausgewählte Leistungen:</div>
              {Object.entries(formData.services).map(([service, details]) => (
                <div key={service} className="text-sm text-gray-700 mb-1">
                  <strong>{service}</strong>: {details.tier} - {details.price}
                </div>
              ))}
            </div>
            
            {/* Contact Form */}
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Vollständiger Name *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-2">E-Mail-Adresse *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Telefonnummer</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Firmenname</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Zusätzliche Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Erzählen Sie uns mehr über Ihre Anforderungen, Zeitplan oder spezifische Fragen..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none h-24 resize-vertical"
                />
              </div>
              
              <div className="flex gap-3 justify-center pt-4">
                <button
                  onClick={submitQuoteForm}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Offerte-Anfrage senden
                </button>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000] p-5">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="20,6 9,17 4,12" strokeWidth="3"></polyline>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-green-600 mb-4">Vielen Dank!</h3>
            
            <p className="text-gray-700 mb-6">
              Ihre Offerte-Anfrage wurde erfolgreich übermittelt!<br />
              Wir haben Ihre Anfrage erhalten und werden Ihre Anforderungen sorgfältig prüfen.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6 font-mono font-semibold text-green-800">
              Reference: QR-{Date.now().toString().slice(-6)}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <div className="font-semibold text-gray-700 mb-3">Wie geht es weiter:</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Unser Team prüft Ihre Anforderungen innerhalb von 2 Stunden</li>
                <li>• Wir erstellen eine detaillierte, auf Ihre Bedürfnisse zugeschnittene Offerte</li>
                <li>• Sie erhalten unsere Antwort innerhalb von 24 Stunden per E-Mail</li>
                <li>• Bei Bedarf vereinbaren wir einen Beratungstermin</li>
              </ul>
            </div>
            
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowThankYouModal(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Weiter durchsuchen
              </button>
              <button
                onClick={() => {
                  setShowThankYouModal(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50"
              >
                Weitere Offerte anfordern
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000] p-5">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{messageTitle}</h3>
            <p className="text-gray-700 mb-6 whitespace-pre-line">{messageText}</p>
            <div className="text-center">
              <button
                onClick={() => setShowMessageModal(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Verstanden!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interessiert an unseren Dienstleistungen?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Vereinbaren Sie jetzt Ihre kostenlose Beratung und lassen Sie uns gemeinsam die beste Lösung für Ihr Unternehmen finden.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Kostenlose Beratung buchen
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Leistungen;
