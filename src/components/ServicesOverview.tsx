
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Users, HeadphonesIcon, FileText, CreditCard, Mail, Receipt, Phone } from 'lucide-react';
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
      title: t('pricing.accounting.title'),
      description: t('pricing.accounting.description'),
      packages: [
        {
          name: t('pricing.accounting.mini.name'),
          included: t('pricing.accounting.mini.included'),
          hours: t('pricing.accounting.mini.hours'),
          price: t('pricing.accounting.mini.price'),
          extra: t('pricing.accounting.mini.extra')
        },
        {
          name: t('pricing.accounting.standard.name'),
          included: t('pricing.accounting.standard.included'),
          hours: t('pricing.accounting.standard.hours'),
          price: t('pricing.accounting.standard.price'),
          extra: ''
        },
        {
          name: t('pricing.accounting.business.name'),
          included: t('pricing.accounting.business.included'),
          hours: t('pricing.accounting.business.hours'),
          price: t('pricing.accounting.business.price'),
          extra: ''
        },
        {
          name: t('pricing.accounting.plus.name'),
          included: t('pricing.accounting.plus.included'),
          hours: t('pricing.accounting.plus.hours'),
          price: t('pricing.accounting.plus.price'),
          extra: ''
        }
      ]
    },
    {
      icon: Users,
      title: t('pricing.payroll.title'),
      description: t('pricing.payroll.description'),
      packages: [
        {
          name: t('pricing.payroll.basic.name'),
          included: t('pricing.payroll.basic.included'),
          hours: t('pricing.payroll.basic.hours'),
          price: t('pricing.payroll.basic.price'),
          extra: t('pricing.payroll.basic.extra')
        },
        {
          name: t('pricing.payroll.standard.name'),
          included: t('pricing.payroll.standard.included'),
          hours: t('pricing.payroll.standard.hours'),
          price: t('pricing.payroll.standard.price'),
          extra: ''
        },
        {
          name: t('pricing.payroll.business.name'),
          included: t('pricing.payroll.business.included'),
          hours: t('pricing.payroll.business.hours'),
          price: t('pricing.payroll.business.price'),
          extra: ''
        },
        {
          name: t('pricing.payroll.plus.name'),
          included: t('pricing.payroll.plus.included'),
          hours: t('pricing.payroll.plus.hours'),
          price: t('pricing.payroll.plus.price'),
          extra: ''
        }
      ]
    },
    {
      icon: FileText,
      title: t('pricing.hr.title'),
      description: t('pricing.hr.description'),
      packages: [
        {
          name: t('pricing.hr.basic.name'),
          included: t('pricing.hr.basic.included'),
          hours: t('pricing.hr.basic.hours'),
          price: t('pricing.hr.basic.price'),
          extra: t('pricing.hr.basic.extra')
        },
        {
          name: t('pricing.hr.standard.name'),
          included: t('pricing.hr.standard.included'),
          hours: t('pricing.hr.standard.hours'),
          price: t('pricing.hr.standard.price'),
          extra: ''
        },
        {
          name: t('pricing.hr.business.name'),
          included: t('pricing.hr.business.included'),
          hours: t('pricing.hr.business.hours'),
          price: t('pricing.hr.business.price'),
          extra: ''
        },
        {
          name: t('pricing.hr.plus.name'),
          included: t('pricing.hr.plus.included'),
          hours: t('pricing.hr.plus.hours'),
          price: t('pricing.hr.plus.price'),
          extra: ''
        }
      ]
    },
    {
      icon: CreditCard,
      title: t('pricing.payments.title'),
      description: t('pricing.payments.description'),
      packages: [
        {
          name: t('pricing.payments.mini.name'),
          included: t('pricing.payments.mini.included'),
          hours: t('pricing.payments.mini.hours'),
          price: t('pricing.payments.mini.price'),
          extra: t('pricing.payments.mini.extra')
        },
        {
          name: t('pricing.payments.standard.name'),
          included: t('pricing.payments.standard.included'),
          hours: t('pricing.payments.standard.hours'),
          price: t('pricing.payments.standard.price'),
          extra: ''
        },
        {
          name: t('pricing.payments.business.name'),
          included: t('pricing.payments.business.included'),
          hours: t('pricing.payments.business.hours'),
          price: t('pricing.payments.business.price'),
          extra: ''
        }
      ]
    },
    {
      icon: HeadphonesIcon,
      title: t('pricing.virtual.title'),
      description: t('pricing.virtual.description'),
      packages: [
        {
          name: t('pricing.virtual.light.name'),
          included: t('pricing.virtual.light.included'),
          hours: t('pricing.virtual.light.hours'),
          price: t('pricing.virtual.light.price'),
          extra: t('pricing.virtual.light.extra')
        },
        {
          name: t('pricing.virtual.standard.name'),
          included: t('pricing.virtual.standard.included'),
          hours: t('pricing.virtual.standard.hours'),
          price: t('pricing.virtual.standard.price'),
          extra: t('pricing.virtual.standard.extra')
        },
        {
          name: t('pricing.virtual.business.name'),
          included: t('pricing.virtual.business.included'),
          hours: t('pricing.virtual.business.hours'),
          price: t('pricing.virtual.business.price'),
          extra: t('pricing.virtual.business.extra')
        },
        {
          name: t('pricing.virtual.max.name'),
          included: t('pricing.virtual.max.included'),
          hours: t('pricing.virtual.max.hours'),
          price: t('pricing.virtual.max.price'),
          extra: ''
        }
      ]
    },
    {
      icon: Phone,
      title: t('pricing.communication.title'),
      description: t('pricing.communication.description'),
      packages: [
        {
          name: t('pricing.communication.kompakt.name'),
          included: t('pricing.communication.kompakt.included'),
          hours: t('pricing.communication.kompakt.hours'),
          price: t('pricing.communication.kompakt.price'),
          extra: t('pricing.communication.kompakt.extra')
        },
        {
          name: t('pricing.communication.standard.name'),
          included: t('pricing.communication.standard.included'),
          hours: t('pricing.communication.standard.hours'),
          price: t('pricing.communication.standard.price'),
          extra: t('pricing.communication.standard.extra')
        },
        {
          name: t('pricing.communication.intensiv.name'),
          included: t('pricing.communication.intensiv.included'),
          hours: t('pricing.communication.intensiv.hours'),
          price: t('pricing.communication.intensiv.price'),
          extra: t('pricing.communication.intensiv.extra')
        },
        {
          name: t('pricing.communication.max.name'),
          included: t('pricing.communication.max.included'),
          hours: t('pricing.communication.max.hours'),
          price: t('pricing.communication.max.price'),
          extra: ''
        }
      ]
    },
    {
      icon: Receipt,
      title: t('pricing.expenses.title'),
      description: t('pricing.expenses.description'),
      packages: [
        {
          name: t('pricing.expenses.mini.name'),
          included: t('pricing.expenses.mini.included'),
          hours: t('pricing.expenses.mini.hours'),
          price: t('pricing.expenses.mini.price'),
          extra: t('pricing.expenses.mini.extra')
        },
        {
          name: t('pricing.expenses.standard.name'),
          included: t('pricing.expenses.standard.included'),
          hours: t('pricing.expenses.standard.hours'),
          price: t('pricing.expenses.standard.price'),
          extra: ''
        },
        {
          name: t('pricing.expenses.business.name'),
          included: t('pricing.expenses.business.included'),
          hours: t('pricing.expenses.business.hours'),
          price: t('pricing.expenses.business.price'),
          extra: ''
        },
        {
          name: t('pricing.expenses.plus.name'),
          included: t('pricing.expenses.plus.included'),
          hours: t('pricing.expenses.plus.hours'),
          price: t('pricing.expenses.plus.price'),
          extra: ''
        },
        {
          name: t('pricing.expenses.max.name'),
          included: t('pricing.expenses.max.included'),
          hours: t('pricing.expenses.max.hours'),
          price: t('pricing.expenses.max.price'),
          extra: ''
        }
      ]
    },
    {
      icon: Mail,
      title: t('pricing.mail.title'),
      description: t('pricing.mail.description'),
      packages: [
        {
          name: t('pricing.mail.mini.name'),
          included: t('pricing.mail.mini.included'),
          hours: t('pricing.mail.mini.hours'),
          price: t('pricing.mail.mini.price'),
          extra: t('pricing.mail.mini.extra')
        },
        {
          name: t('pricing.mail.standard.name'),
          included: t('pricing.mail.standard.included'),
          hours: t('pricing.mail.standard.hours'),
          price: t('pricing.mail.standard.price'),
          extra: t('pricing.mail.standard.extra')
        },
        {
          name: t('pricing.mail.business.name'),
          included: t('pricing.mail.business.included'),
          hours: t('pricing.mail.business.hours'),
          price: t('pricing.mail.business.price'),
          extra: t('pricing.mail.business.extra')
        },
        {
          name: t('pricing.mail.max.name'),
          included: t('pricing.mail.max.included'),
          hours: t('pricing.mail.max.hours'),
          price: t('pricing.mail.max.price'),
          extra: ''
        }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[hsl(var(--white-section))] opacity-0 translate-y-4 transition-all duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--white-section-text))] mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-[hsl(var(--white-section-accent))] max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, serviceIndex) => (
            <div key={serviceIndex} className="space-y-8">
              {/* Service Header */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--white-section-accent))] text-white flex items-center justify-center mr-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--white-section-text))]">{service.title}</h3>
                    <p className="text-lg text-[hsl(var(--white-section-text))]/70">{service.description}</p>
                  </div>
                </div>
              </div>

              {/* Package Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.packages.map((pkg, pkgIndex) => (
                  <Card 
                    key={pkgIndex}
                    className="hover:shadow-lg hover:scale-105 transition-all duration-300 border border-border shadow-md bg-card relative overflow-hidden"
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-[hsl(var(--white-section-text))]">
                        {pkg.name}
                      </CardTitle>
                      <div className="text-sm text-[hsl(var(--white-section-text))]/70">
                        {pkg.included}
                      </div>
                      <div className="text-sm text-[hsl(var(--white-section-text))]/70">
                        {pkg.hours}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="mb-4">
                        <div className="text-3xl font-bold text-[hsl(var(--white-section-accent))] mb-1">
                          {pkg.price}
                        </div>
                        {pkg.extra && (
                          <div className="text-xs text-[hsl(var(--white-section-text))]/70">
                            {pkg.extra}
                          </div>
                        )}
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="w-full bg-[hsl(var(--white-section-accent))] hover:bg-[hsl(var(--white-section-accent))]/90 text-white"
                        asChild
                      >
                        <Link to="/kontakt">
                          {t('pricing.cta.request')}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-[hsl(var(--white-section-accent))] hover:bg-[hsl(var(--white-section-accent))]/90 text-white shadow-lg">
            <Link to="/leistungen">
              {t('pricing.cta.details')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
