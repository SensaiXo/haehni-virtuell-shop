
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Users, HeadphonesIcon, Search, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesOverview = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Calculator,
      title: t('services.accounting.title'),
      description: t('services.accounting.description'),
      features: [t('services.accounting.feature1'), t('services.accounting.feature2'), t('services.accounting.feature3')],
      color: 'blue'
    },
    {
      icon: Users,
      title: t('services.hr.title'),
      description: t('services.hr.description'),
      features: [t('services.hr.feature1'), t('services.hr.feature2'), t('services.hr.feature3')],
      color: 'green'
    },
    {
      icon: HeadphonesIcon,
      title: t('services.virtual.title'),
      description: t('services.virtual.description'),
      features: [t('services.virtual.feature1'), t('services.virtual.feature2'), t('services.virtual.feature3')],
      color: 'purple'
    },
    {
      icon: Search,
      title: t('services.research.title'),
      description: t('services.research.description'),
      features: [t('services.research.feature1'), t('services.research.feature2'), t('services.research.feature3')],
      color: 'orange'
    },
    {
      icon: FileText,
      title: t('services.admin.title'),
      description: t('services.admin.description'),
      features: [t('services.admin.feature1'), t('services.admin.feature2'), t('services.admin.feature3')],
      color: 'indigo'
    },
    {
      icon: TrendingUp,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: [t('services.consulting.feature1'), t('services.consulting.feature2'), t('services.consulting.feature3')],
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
    <section ref={sectionRef} className="py-20 bg-white opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg hover:scale-105 hover:bg-gray-50 transition-all duration-300 border-0 shadow-md cursor-pointer"
            >
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
              {t('services.cta')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
