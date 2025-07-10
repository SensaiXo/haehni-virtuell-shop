import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, Clock, Settings } from 'lucide-react';

const Products = () => {
  const { t, language } = useLanguage();

  const packages = [
    {
      id: 'starter',
      icon: '🟢',
      title: language === 'de' ? 'Starter Plan – Ideal für Solo-Unternehmer' : 'Starter Plan – Best for Solo Entrepreneurs',
      subtitle: language === 'de' ? 'Ideal für: Freelancer und Selbstständige, die leichte virtuelle Unterstützung benötigen.' : 'Ideal for: Freelancers and independent professionals needing light virtual support.',
      price: 'CHF 150/month',
      features: language === 'de' ? [
        'Bis zu 2 Stunden/Monat virtuelle Assistenz',
        'E-Mail-Management und Online-Kalenderverwaltung',
        'Grundlegende digitale Dokumentenorganisation'
      ] : [
        'Up to 2 hours/month of virtual assistance',
        'Email management and online calendar scheduling',
        'Basic digital document organization'
      ],
      highlight: language === 'de' ? 'Vollständig remote Unterstützung – kein Büro erforderlich' : 'Fully remote support – no office required'
    },
    {
      id: 'business',
      icon: '🔵',
      title: language === 'de' ? 'Business Plan – Ideal für kleine Teams' : 'Business Plan – Best for Small Teams',
      subtitle: language === 'de' ? 'Ideal für: Kleine Unternehmen, die remote Hilfe bei Finanzen und HR benötigen.' : 'Ideal for: Small businesses needing remote help with finance and HR.',
      price: 'CHF 350/month',
      features: language === 'de' ? [
        'Alles aus dem Starter Plan, plus:',
        'Bis zu 5 Stunden/Monat virtueller Service',
        'Online-Buchhaltungsunterstützung',
        'Remote-Lohnabrechnung oder HR-Administration'
      ] : [
        'Everything in the Starter Plan, plus:',
        'Up to 5 hours/month of virtual service',
        'Online bookkeeping assistance',
        'Remote payroll processing or HR administration'
      ],
      highlight: language === 'de' ? 'Schweizer-konforme Admin-Hilfe, 100% virtuell geliefert' : 'Swiss-compliant admin help, 100% virtually delivered'
    },
    {
      id: 'pro',
      icon: '🟣',
      title: language === 'de' ? 'Pro Plan – Ideal für wachsende Unternehmen' : 'Pro Plan – Best for Growing Companies',
      subtitle: language === 'de' ? 'Ideal für: Unternehmen mit regelmässigen Admin-Bedürfnissen, die vollständige virtuelle Unterstützung suchen.' : 'Ideal for: Businesses with regular admin needs seeking full virtual support.',
      price: 'CHF 600/month',
      features: language === 'de' ? [
        '10+ Stunden/Monat remote administrative Hilfe',
        'Vollspektrum virtuelles Büromanagement',
        'Angepasste Berichterstattung und Metriken',
        'Prioritätsbehandlung zeitkritischer Aufgaben'
      ] : [
        '10+ hours/month of remote administrative help',
        'Full-spectrum virtual office management',
        'Customized reporting and metrics',
        'Priority handling of time-sensitive tasks'
      ],
      highlight: language === 'de' ? 'Remote-Expertenunterstützung für Schweizer Unternehmen' : 'Remote expert support for Swiss-based companies'
    }
  ];

  const faqItems = language === 'de' ? [
    {
      question: 'Sind alle Dienstleistungen virtuell?',
      answer: 'Ja – ich biete vollständig remote Unterstützung. Es gibt kein physisches Büro oder Arbeit vor Ort.'
    },
    {
      question: 'Kann ich Aufgaben über Kategorien hinweg kombinieren (z.B. HR + Buchhaltung)?',
      answer: 'Absolut. Pakete sind flexibel – wir passen sie an Ihre Prioritäten an.'
    },
    {
      question: 'Wie wird die Zeit erfasst?',
      answer: 'Zeit wird in 15-Minuten-Blöcken überwacht. Sie erhalten am Ende jedes Monats eine klare Aufschlüsselung.'
    },
    {
      question: 'Ist dieser Service für die Schweizer Compliance geeignet?',
      answer: 'Ja – alle Arbeiten entsprechen den Schweizer Geschäftsvorschriften, einschliesslich MwSt und HR-Standards.'
    }
  ] : [
    {
      question: 'Are all services virtual?',
      answer: 'Yes – I offer fully remote support. There\'s no physical office or on-site work involved.'
    },
    {
      question: 'Can I combine tasks across categories (e.g., HR + bookkeeping)?',
      answer: 'Absolutely. Packages are flexible – we\'ll tailor them to your priorities.'
    },
    {
      question: 'How is time tracked?',
      answer: 'Time is monitored in 15-minute blocks. You\'ll receive a clear breakdown at the end of each month.'
    },
    {
      question: 'Is this service suitable for Swiss compliance?',
      answer: 'Yes – all work aligns with Swiss business regulations, including VAT and HR standards.'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🧾 {t('products.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('products.subtitle')}
            </p>
          </div>

          {/* Package Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card key={pkg.id} className={`relative overflow-hidden ${index === 1 ? 'border-blue-500 border-2' : ''}`}>
                {index === 1 && (
                  <Badge className="absolute top-4 right-4 bg-blue-500">
                    {language === 'de' ? 'Beliebt' : 'Popular'}
                  </Badge>
                )}
                <CardHeader>
                  <div className="text-2xl mb-2">{pkg.icon}</div>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-sm">{pkg.subtitle}</CardDescription>
                  <div className="text-2xl font-bold text-blue-600 mt-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-sm text-gray-700">🖥️ {pkg.highlight}</p>
                  </div>
                  <Button asChild className="w-full">
                    <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer">
                      {language === 'de' ? 'Paket wählen' : 'Choose Package'}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Flexible & Custom Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-yellow-600" />
                  <CardTitle className="text-xl">⏱️ {t('products.flexible.title')}</CardTitle>
                </div>
                <CardDescription>{t('products.flexible.subtitle')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  {language === 'de' ? 'Noch nicht sicher, was Sie brauchen? Zahlen Sie nur für das, was Sie nutzen.' : 'Not sure what you need yet? Pay only for what you use.'}
                </p>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-2xl font-bold text-yellow-600">CHF 75/hour</div>
                  <p className="text-sm text-gray-600">
                    {language === 'de' ? 'Abrechnung in 15-Minuten-Schritten' : 'Billed in 15-minute increments'}
                  </p>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {language === 'de' ? 'Ideal für saisonale Aufgaben, einmalige Projekte oder Ad-hoc-virtuelle Hilfe' : 'Great for seasonal tasks, one-off projects, or ad-hoc virtual help'}
                </p>
                <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                  <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer">
                    {language === 'de' ? 'Beratung buchen' : 'Book Consultation'}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Settings className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-xl">🛠️ {t('products.custom.title')}</CardTitle>
                </div>
                <CardDescription>{t('products.custom.subtitle')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6">
                  {language === 'de' ? 'Nicht jedes Unternehmen passt in einen Standardplan. Wenn Sie spezielle Bedürfnisse haben, erstelle ich ein personalisiertes virtuelles Support-Paket.' : 'Not every business fits a standard plan. If you have specific needs, I\'ll prepare a personalized virtual support package.'}
                </p>
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer">
                    {language === 'de' ? 'Individuelles Angebot anfordern' : 'Request a Custom Quote'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">❓ {t('products.faq.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Products;