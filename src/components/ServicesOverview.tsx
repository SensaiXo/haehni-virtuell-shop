
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Users, HeadphonesIcon, Search, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesOverview = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Buchhaltung',
      description: 'Professionelle Buchführung und Finanzadministration für Ihr Unternehmen.',
      features: ['Debitoren/Kreditoren', 'Abschlüsse', 'Steuern'],
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Personalwesen',
      description: 'Komplette HR-Betreuung von der Lohnabrechnung bis zur Personalverwaltung.',
      features: ['Lohnabrechnung', 'Arbeitsverträge', 'Sozialversicherungen'],
      color: 'green'
    },
    {
      icon: HeadphonesIcon,
      title: 'Virtuelle Assistenz',
      description: 'Unterstützung der Geschäftsleitung bei administrativen Aufgaben.',
      features: ['Terminplanung', 'E-Mail-Management', 'Dokumentation'],
      color: 'purple'
    },
    {
      icon: Search,
      title: 'Online-Recherche',
      description: 'Professionelle Recherche und Marktanalysen für Ihre Geschäftsentscheidungen.',
      features: ['Marktanalysen', 'Konkurrenzanalyse', 'Datensammlung'],
      color: 'orange'
    },
    {
      icon: FileText,
      title: 'Administration',
      description: 'Allgemeine Büroarbeiten und administrative Unterstützung.',
      features: ['Korrespondenz', 'Archivierung', 'Reporting'],
      color: 'indigo'
    },
    {
      icon: TrendingUp,
      title: 'Beratung',
      description: 'Strategische Beratung für Prozessoptimierung und Effizienzsteigerung.',
      features: ['Prozessanalyse', 'Optimierung', 'Digitalisierung'],
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100',
      green: 'text-green-600 bg-green-100',
      purple: 'text-purple-600 bg-purple-100',
      orange: 'text-orange-600 bg-orange-100',
      indigo: 'text-indigo-600 bg-indigo-100',
      teal: 'text-teal-600 bg-teal-100'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Konzentrieren Sie sich auf Ihr Kerngeschäft, während wir Ihr Backoffice professionell betreuen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${getColorClasses(service.color)} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/leistungen">
              Alle Leistungen im Detail
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
