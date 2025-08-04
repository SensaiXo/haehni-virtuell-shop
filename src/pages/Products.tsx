import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calculator, Users, Headphones, Search, FileText, TrendingUp, CheckCircle, Star, Crown, Shield, Zap, ChevronDown, ChevronUp, ShoppingCart, X, Plus, Minus } from 'lucide-react';

const Products = () => {
  const { language } = useLanguage();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [basket, setBasket] = useState([]);
  const [showBasket, setShowBasket] = useState(false);

  const addToBasket = (pkg) => {
    const existingItem = basket.find(item => item.id === pkg.id);
    if (existingItem) {
      setBasket(basket.map(item => 
        item.id === pkg.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setBasket([...basket, { ...pkg, quantity: 1 }]);
    }
    setSelectedPackage(null);
  };

  const removeFromBasket = (id) => {
    setBasket(basket.filter(item => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setBasket(basket.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const getTotalPrice = () => {
    return basket.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const packages = [
    {
      id: 'startup',
      name: language === 'de' ? 'Startup Essentials' : 'Startup Essentials',
      icon: Zap,
      price: 'CHF 1,800',
      period: '/month',
      description: language === 'de' ? 'Perfekt für neue Unternehmen und Startups, die grundlegende administrative Unterstützung benötigen' : 'Perfect for new businesses and startups needing core administrative support',
      popular: false,
      color: 'from-green-400 to-green-600',
      features: language === 'de' ? [
        'Grundlegende Buchhaltung (bis zu 50 Transaktionen/Monat)',
        'Monatliche Finanzberichte',
        'MwSt-Buchhaltung',
        'Allgemeine Verwaltung (10 Stunden/Monat)',
        'Grundlegende Dokumentenverwaltung',
        'E-Mail-Korrespondenz-Support',
        'Monatliche Geschäftsberatung (1 Stunde)',
        'Digitale Belegverarbeitung'
      ] : [
        'Basic bookkeeping (up to 50 transactions/month)',
        'Monthly financial statements',
        'VAT accounting',
        'General administration (10 hours/month)',
        'Basic document management',
        'Email correspondence support',
        'Monthly business consultation (1 hour)',
        'Digital receipt processing'
      ],
      services: language === 'de' ? ['Buchhaltung', 'Allgemeine Verwaltung', 'Beratung'] : ['Bookkeeping', 'General Administration', 'Consulting'],
      savings: language === 'de' ? 'Sparen Sie CHF 400/Monat vs. Einzelleistungen' : 'Save CHF 400/month vs individual services'
    },
    {
      id: 'consulting',
      name: language === 'de' ? 'Beratungsfokus' : 'Consulting Focus',
      icon: Shield,
      price: 'CHF 2,400',
      period: '/month',
      description: language === 'de' ? 'Strategische Unterstützung und Optimierung für skalierungsbereite Unternehmen' : 'Strategic support and optimization for businesses ready to scale',
      popular: false,
      color: 'from-orange-400 to-orange-600',
      features: language === 'de' ? [
        'Prozessanalyse & Optimierung',
        'Digitale Transformationsberatung',
        'Workflow-Design & Implementierung',
        'Software-Empfehlungen & Setup',
        'Team-Training & Change Management',
        'Monatliche strategische Reviews',
        'Performance-Metriken-Entwicklung',
        'Wettbewerbsanalyse-Berichte',
        'Executive Coaching Sessions'
      ] : [
        'Process analysis & optimization',
        'Digital transformation consulting',
        'Workflow design & implementation',
        'Software recommendations & setup',
        'Team training & change management',
        'Monthly strategic reviews',
        'Performance metrics development',
        'Competitive intelligence reports',
        'Executive coaching sessions'
      ],
      services: language === 'de' ? ['Beratung', 'Recherche', 'Executive Assistant'] : ['Consulting', 'Research', 'Executive Assistant'],
      savings: language === 'de' ? 'Sparen Sie CHF 600/Monat vs. Einzelleistungen' : 'Save CHF 600/month vs individual services'
    },
    {
      id: 'growth',
      name: language === 'de' ? 'Wachstumsunternehmen' : 'Growth Business',
      icon: TrendingUp,
      price: 'CHF 3,200',
      period: '/month',
      description: language === 'de' ? 'Umfassende Unterstützung für wachsende Unternehmen mit zunehmender Komplexität' : 'Comprehensive support for growing businesses with increasing complexity',
      popular: true,
      color: 'from-blue-500 to-blue-700',
      features: language === 'de' ? [
        'Vollständiger Buchhaltungsservice (unbegrenzte Transaktionen)',
        'Monatliche & vierteljährliche Finanzberichte',
        'Lohnabrechnung (bis zu 15 Mitarbeiter)',
        'HR-Verwaltung & Verträge',
        'Executive Assistant Services (15 Stunden/Monat)',
        'Marktforschung & Wettbewerbsanalyse',
        'Prozessoptimierungsberatung',
        'Monatliche strategische Planungssitzung',
        'Prioritäts-E-Mail & Telefon-Support'
      ] : [
        'Full bookkeeping service (unlimited transactions)',
        'Monthly & quarterly financial reports',
        'Payroll processing (up to 15 employees)',
        'HR administration & contracts',
        'Executive assistant services (15 hours/month)',
        'Market research & competitor analysis',
        'Process optimization consultation',
        'Monthly strategic planning session',
        'Priority email & phone support'
      ],
      services: language === 'de' ? ['Buchhaltung', 'HR & Lohnabrechnung', 'Executive Assistant', 'Recherche', 'Beratung'] : ['Bookkeeping', 'HR & Payroll', 'Executive Assistant', 'Research', 'Consulting'],
      savings: language === 'de' ? 'Sparen Sie CHF 800/Monat vs. Einzelleistungen' : 'Save CHF 800/month vs individual services'
    },
    {
      id: 'enterprise',
      name: language === 'de' ? 'Enterprise Komplett' : 'Enterprise Complete',
      icon: Crown,
      price: 'CHF 5,500',
      period: '/month',
      description: language === 'de' ? 'Full-Service-Lösung für etablierte Unternehmen, die umfassende Unterstützung benötigen' : 'Full-service solution for established businesses requiring comprehensive support',
      popular: false,
      color: 'from-purple-500 to-purple-700',
      features: language === 'de' ? [
        'Komplettes Finanzmanagement',
        'Erweiterte Berichterstattung & Analytik',
        'Vollständige HR & Lohnabrechnung (unbegrenzte Mitarbeiter)',
        'Dedizierter Executive Assistant (30 Stunden/Monat)',
        'Laufende Marktintelligenz',
        'Strategische Geschäftsberatung',
        'Prozessautomatisierungs-Implementierung',
        'Change Management Support',
        'Monatliche Vorbereitung von Vorstandssitzungen',
        'Dedizierter Account Manager',
        '24/7 Priority Support'
      ] : [
        'Complete financial management',
        'Advanced reporting & analytics',
        'Full HR & payroll services (unlimited employees)',
        'Dedicated executive assistant (30 hours/month)',
        'Ongoing market intelligence',
        'Strategic business consultation',
        'Process automation implementation',
        'Change management support',
        'Monthly board meeting preparation',
        'Dedicated account manager',
        '24/7 priority support'
      ],
      services: language === 'de' ? ['Alle Services inbegriffen'] : ['All Services Included'],
      savings: language === 'de' ? 'Sparen Sie CHF 1,200/Monat vs. Einzelleistungen' : 'Save CHF 1,200/month vs individual services'
    }
  ];

  const additionalServices = [
    { 
      name: language === 'de' ? 'Zusätzlicher Mitarbeiter (Lohnabrechnung)' : 'Additional employee (payroll)', 
      price: 'CHF 25/employee' 
    },
    { 
      name: language === 'de' ? 'Extra Executive Assistant Stunden' : 'Extra executive assistant hours', 
      price: 'CHF 75/hour' 
    },
    { 
      name: language === 'de' ? 'Individuelle Rechercheprojekte' : 'Custom research projects', 
      price: 'CHF 500/project' 
    },
    { 
      name: language === 'de' ? 'Notfall-Wochenend-Support' : 'Emergency weekend support', 
      price: 'CHF 150/hour' 
    },
    { 
      name: language === 'de' ? 'Zusätzliche Finanzberichterstattung' : 'Additional financial reporting', 
      price: 'CHF 200/report' 
    }
  ];

  const faqData = [
    {
      question: language === 'de' ? "Wie funktioniert Remote-Support?" : "How does remote support work?",
      answer: language === 'de' ? "Alle Services werden 100% remote mit sicheren digitalen Tools geliefert. Ich arbeite mit Ihren bestehenden Systemen und kann auf Dokumente über Cloud-Plattformen, E-Mail und Videoanrufe zugreifen. Keine physische Präsenz erforderlich – nur effizienter, professioneller Support." : "All services are delivered 100% remotely using secure digital tools. I work with your existing systems and can access documents through cloud platforms, email, and video calls. No physical presence required – just efficient, professional support."
    },
    {
      question: language === 'de' ? "Was passiert, wenn ich mein Paket später ändern muss?" : "What if I need to change my package later?",
      answer: language === 'de' ? "Pakete sind flexibel und können angepasst werden, wenn Ihr Unternehmen wächst. Sie können mit 30 Tagen Kündigungsfrist upgraden, downgraden oder Ihren Plan anpassen. Ich arbeite mit Ihnen zusammen, um sicherzustellen, dass Ihr Paket immer Ihren aktuellen Bedürfnissen entspricht." : "Packages are flexible and can be adjusted as your business grows. You can upgrade, downgrade, or customize your plan with 30 days' notice. I'll work with you to ensure your package always matches your current needs."
    },
    {
      question: language === 'de' ? "Gibt es Setup-Gebühren oder Langzeitverträge?" : "Are there any setup fees or long-term contracts?",
      answer: language === 'de' ? "Keine Setup-Gebühren erforderlich. Alle Pakete sind monatlich kündbar ohne Langzeitverträge. Sie können Ihren Service mit 30 Tagen Kündigungsfrist kündigen oder ändern. Das gibt Ihnen komplette Flexibilität, wenn sich Ihre Geschäftsbedürfnisse ändern." : "No setup fees required. All packages are month-to-month with no long-term contracts. You can cancel or modify your service with 30 days' notice. This gives you complete flexibility as your business needs change."
    },
    {
      question: language === 'de' ? "Wie schnell kann ich anfangen?" : "How quickly can I get started?",
      answer: language === 'de' ? "Nach unserer ersten Beratung können die meisten Services innerhalb von 3-5 Werktagen beginnen. Ich arbeite mit Ihnen zusammen, um sicheren Zugang zu Ihren Systemen einzurichten und Workflows zu etablieren, die zu Ihren Geschäftsprozessen passen." : "After our initial consultation, most services can begin within 3-5 business days. I'll work with you to set up secure access to your systems and establish workflows that fit your business processes."
    },
    {
      question: language === 'de' ? "Was passiert, wenn ich meine Paket-Limits überschreite?" : "What happens if I exceed my package limits?",
      answer: language === 'de' ? "Wenn Sie gelegentlich Ihre Paket-Limits überschreiten, wird zusätzliche Arbeit zum Standard-Stundensatz abgerechnet. Für konsistente Überschreitungen empfehle ich ein Upgrade auf ein höheres Paket, das besser zu Ihren Bedürfnissen passt." : "If you occasionally exceed your package limits, additional work is billed at the standard hourly rate. For consistent overages, I'll recommend upgrading to a higher tier package that better fits your needs."
    },
    {
      question: language === 'de' ? "Wie stellen Sie Datensicherheit und Vertraulichkeit sicher?" : "How do you ensure data security and confidentiality?",
      answer: language === 'de' ? "Ich verwende sichere, verschlüsselte Kommunikationskanäle und befolge strenge Vertraulichkeitsprotokolle. Alle Kundendaten werden gemäß Schweizer Datenschutzstandards behandelt, und ich kann zusätzliche NDAs unterzeichnen, falls erforderlich." : "I use secure, encrypted communication channels and follow strict confidentiality protocols. All client data is handled according to Swiss data protection standards, and I can sign additional NDAs if required."
    }
  ];

  return (
    <Layout>
      {/* Basket Sidebar */}
      {basket.length > 0 && (
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${showBasket ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {language === 'de' ? 'Warenkorb' : 'Basket'}
              </h3>
              <button 
                onClick={() => setShowBasket(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            {basket.map((item) => (
              <div key={item.id} className="border-b pb-4 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <button 
                    onClick={() => removeFromBasket(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-2">{item.price}{item.period}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">
                {language === 'de' ? 'Gesamt:' : 'Total:'}
              </span>
              <span className="font-bold text-lg">CHF {getTotalPrice().toLocaleString()}</span>
            </div>
            <Button className="w-full mb-2">
              {language === 'de' ? 'Zur Kasse' : 'Checkout'}
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer">
                {language === 'de' ? 'Beratung buchen' : 'Book Consultation'}
              </a>
            </Button>
          </div>
        </div>
      )}

      {/* Basket Toggle Button */}
      {basket.length > 0 && (
        <button
          onClick={() => setShowBasket(!showBasket)}
          className="fixed top-20 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-40 hover:bg-blue-700 transition-colors"
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {basket.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </div>
        </button>
      )}

      <PageHeader 
        title={language === 'de' ? 'Preis-Pakete' : 'Price Packages'}
        subtitle={language === 'de' ? 'Professionelle virtuelle Assistenz-Services von Laura Hähni aus Frauenfeld.' : 'Professional virtual assistant services from Laura Hähni based in Frauenfeld.'}
        backgroundImage="/lovable-uploads/1a17e213-ccfb-456d-8cff-f45a5c10da41.png"
      />
      
      <div className="min-h-screen bg-gray-50">

        {/* Package Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${pkg.popular ? 'ring-4 ring-blue-500' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {language === 'de' ? 'Beliebteste' : 'Most Popular'}
                    </div>
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${pkg.color} p-6 text-white`}>
                  <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-4">
                    <pkg.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-sm opacity-90">{pkg.period}</span>
                  </div>
                  <p className="text-sm opacity-90 mt-2">{pkg.savings}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {language === 'de' ? 'Enthaltene Services:' : 'Included Services:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.services.map((service, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedPackage(pkg)}
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                      pkg.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {language === 'de' ? 'Paket wählen' : 'Choose Package'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'de' ? 'Zusätzliche Services' : 'Additional Services'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'de' ? 'Erweitern Sie Ihr Paket mit diesen optionalen Services' : 'Extend your package with these optional services'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Package Section */}
        <div className="bg-gray-100">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'de' ? 'Brauchen Sie etwas Individuelles?' : 'Need Something Custom?'}
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                {language === 'de' ? 'Maßgeschneiderte virtuelle Lösungen verfügbar' : 'Tailored Virtual Solutions Available'}
              </p>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                {language === 'de' ? 'Nicht jedes Unternehmen passt in einen Standardplan. Wenn Sie spezielle Bedürfnisse haben, erstelle ich ein personalisiertes virtuelles Support-Paket.' : 'Not every business fits a standard plan. If you have specific needs, I\'ll prepare a personalized virtual support package.'}
              </p>
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg" asChild>
                <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer">
                  {language === 'de' ? 'Individuelles Paket anfragen' : 'Request Custom Package'}
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {language === 'de' ? 'Häufig gestellte Fragen' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'de' ? 'Alles, was Sie über unsere virtuellen Assistenz-Pakete wissen müssen' : 'Everything you need to know about our virtual assistant packages'}
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4 bg-gray-50">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'de' ? 'Bereit anzufangen?' : 'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {language === 'de' ? 'Lassen Sie uns besprechen, welches Paket für Ihr Unternehmen geeignet ist' : 'Let\'s discuss which package is right for your business'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg" asChild>
                <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer">
                  {language === 'de' ? 'Kostenlose Beratung buchen' : 'Schedule Free Consultation'}
                </a>
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                {language === 'de' ? 'Alle Pakete vergleichen' : 'Compare All Packages'}
              </Button>
            </div>
          </div>
        </div>

        {/* Selected Package Modal */}
        {selectedPackage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {selectedPackage.name} {language === 'de' ? 'ausgewählt' : 'Selected'}
                </h3>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600 mb-6">
                {language === 'de' ? 'Großartige Wahl! Dieses Paket enthält alles, was Sie brauchen, um Ihre Geschäftsabläufe zu optimieren.' : 'Great choice! This package includes everything you need to streamline your business operations.'}
              </p>
              <div className="flex gap-3">
                <button 
                  onClick={() => addToBasket(selectedPackage)}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {language === 'de' ? 'Zum Warenkorb hinzufügen' : 'Add to Basket'}
                </button>
                <button 
                  onClick={() => setSelectedPackage(null)}
                  className="flex-1 bg-gray-100 text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {language === 'de' ? 'Weiter schauen' : 'Keep Looking'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;