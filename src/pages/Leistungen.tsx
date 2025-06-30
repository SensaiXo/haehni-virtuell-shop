
import React from 'react';
import Layout from '@/components/Layout';
import { Calculator, Users, HeadphonesIcon, Search, FileText, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Leistungen = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Buchhaltung',
      description: 'Professionelle Buchführung und Finanzadministration',
      details: [
        'Debitoren- und Kreditorenbuchhaltung',
        'Monats- und Jahresabschlüsse',
        'Mehrwertsteuerabrechnung',
        'Kassenbuchführung',
        'Belege digitalisieren und verbuchen'
      ],
      packages: {
        basic: 'Ab CHF 80/Stunde',
        standard: 'CHF 1200/Monat (Grundpaket)',
        premium: 'Individuelle Lösung auf Anfrage'
      }
    },
    {
      icon: Users,
      title: 'Personalwesen & Lohnabrechnung',
      description: 'Komplette HR-Betreuung für Ihr Unternehmen',
      details: [
        'Monatliche Lohnabrechnung',
        'Sozialversicherungsabrechnung',
        'Arbeitsverträge erstellen',
        'Personaladministration',
        'Zeiterfassung und Spesenabrechnungen',
        'Zeugnisse und Bescheinigungen'
      ],
      packages: {
        basic: 'Ab CHF 25 pro Lohnabrechnung',
        standard: 'CHF 800/Monat (bis 10 Mitarbeiter)',
        premium: 'Umfassendes HR-Paket auf Anfrage'
      }
    },
    {
      icon: HeadphonesIcon,
      title: 'Assistenz der Geschäftsleitung',
      description: 'Virtuelle Unterstützung für Führungskräfte',
      details: [
        'Terminplanung und Kalenderführung',
        'E-Mail-Management und Korrespondenz',
        'Reiseplanung und -organisation',
        'Dokumentenerstellung und -verwaltung',
        'Protokollführung bei Meetings',
        'Projektkoordination'
      ],
      packages: {
        basic: 'Ab CHF 75/Stunde',
        standard: 'CHF 1500/Monat (20 Std.)',
        premium: 'Vollzeit-Assistenz auf Anfrage'
      }
    },
    {
      icon: Search,
      title: 'Online-Recherche',
      description: 'Professionelle Markt- und Konkurrenzanalysen',
      details: [
        'Marktanalysen und Trends',
        'Konkurrenzbeobachtung',
        'Lieferanten- und Partnerrecherche',
        'Branchenstudien',
        'Datensammlung und -aufbereitung',
        'Zusammenfassung und Präsentation'
      ],
      packages: {
        basic: 'Ab CHF 60/Stunde',
        standard: 'CHF 500 pro Rechercheprojekt',
        premium: 'Laufende Marktbeobachtung ab CHF 800/Monat'
      }
    },
    {
      icon: FileText,
      title: 'Allgemeine Administration',
      description: 'Büroarbeiten und administrative Unterstützung',
      details: [
        'Allgemeine Korrespondenz',
        'Datenerfassung und -pflege',
        'Archivierung und Dokumentenmanagement',
        'Rechnungsstellung',
        'Office-Management',
        'Kundenbetreuung'
      ],
      packages: {
        basic: 'Ab CHF 65/Stunde',
        standard: 'CHF 1000/Monat (15 Std.)',
        premium: 'Vollservice-Paket auf Anfrage'
      }
    },
    {
      icon: TrendingUp,
      title: 'Beratung & Prozessoptimierung',
      description: 'Strategische Unterstützung für mehr Effizienz',
      details: [
        'Prozessanalyse und -optimierung',
        'Digitalisierungsberatung',
        'Workflow-Design',
        'Software-Empfehlungen',
        'Schulungen und Einführungen',
        'Change Management'
      ],
      packages: {
        basic: 'Ab CHF 120/Stunde',
        standard: 'CHF 2500 Analyse-Paket',
        premium: 'Langzeit-Beratung auf Anfrage'
      }
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professionelle Bürodienstleistungen für Unternehmen jeder Größe. 
            Entlasten Sie sich von administrativen Aufgaben und konzentrieren Sie sich auf Ihr Kerngeschäft.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/buchung">Jetzt anfragen</Link>
                  </Button>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">Preispakete</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-l-4 border-blue-200 pl-4">
                        <div className="font-semibold text-gray-900">Basis</div>
                        <div className="text-blue-600">{service.packages.basic}</div>
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4">
                        <div className="font-semibold text-gray-900">Standard</div>
                        <div className="text-blue-600">{service.packages.standard}</div>
                      </div>
                      <div className="border-l-4 border-blue-600 pl-4">
                        <div className="font-semibold text-gray-900">Premium</div>
                        <div className="text-blue-600">{service.packages.premium}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interessiert an unseren Leistungen?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch und lassen Sie uns gemeinsam die beste Lösung für Ihr Unternehmen finden.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/buchung">
              Kostenloses Erstgespräch buchen
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Leistungen;
