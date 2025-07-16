
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Users, FileText, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesOverview = () => {
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
      title: 'Buchhaltung',
      description: 'Von der doppelten Buchhaltung für Ihr Unternehmen bis hin zur privaten Steuererklärung.'
    },
    {
      icon: Users,
      title: 'Virtuelle Assistenz',
      description: 'Offerten erstellen, Briefe verfassen oder Texte prüfen. Ich bin für Sie da.'
    },
    {
      icon: FileText,
      title: 'Schreibarbeiten',
      description: 'Ob Medienmitteilung, Werbebriefe, interne Informationen oder Webseitentexte.'
    },
    {
      icon: Globe,
      title: 'Onlineauftritt',
      description: 'Ich unterstütze sie auch beim Aufbau Ihrer Webpräsenz.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--brand-navy))] mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Als administrative Unterstützung, biete ich folgende Leistungen an:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} to="/leistungen" className="group">
              <Card className="h-full hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--brand-blue))]/10 text-[hsl(var(--brand-blue))] flex items-center justify-center mx-auto mb-4 group-hover:bg-[hsl(var(--brand-blue))] group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[hsl(var(--brand-navy))] group-hover:text-[hsl(var(--brand-blue))] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Was darf ich Ihnen abnehmen?
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-8">
            Kontaktieren Sie mich unverbindlich – gemeinsam finden wir heraus, wie ich Sie bestmöglich unterstützen kann!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center">
              <span className="text-lg font-semibold text-[hsl(var(--brand-navy))]">
                +41 (0)79 645 66 86
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-lg font-semibold text-[hsl(var(--brand-navy))]">
                info@bdlh.ch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
