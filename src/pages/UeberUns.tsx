
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Building2, Users, TrendingUp, Heart, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const UeberUns = () => {
  const mainSectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

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

    [mainSectionRef.current, timelineRef.current, philosophyRef.current, servicesRef.current, ctaRef.current]
      .forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <PageHeader 
        title="Über uns"
        subtitle="Lernen Sie die Person hinter dem Unternehmen kennen."
        backgroundImage="/lovable-uploads/5b0d7e19-7ad1-4277-a038-198acddd3197.png"
      />

      {/* Main Content */}
      <section ref={mainSectionRef} className="py-16 opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16">
            <Card className="p-8">
              <div className="text-center mb-8">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src="/lovable-uploads/3108e62c-f0d0-44d0-b0d8-1c11acaca09f.png"
                    alt="Laura Hähni portrait - About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Laura Hähni</h2>
                <p className="text-xl text-blue-600 font-semibold">Gründerin & Geschäftsführerin</p>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  Vielen Dank für Ihr Interesse an meiner Person und meiner Firma. Nachfolgend finden Sie 
                  einige Informationen zu meinen Berufserfahrungen und meiner Selbständigkeit mit 
                  Bürodienstleistungen Hähni.
                </p>

                <h2 id="about-me" className="text-3xl font-bold text-gray-900 mt-10 mb-4">About Me</h2>
                <p className="mb-4">
                  I’m Laura Hähni, a Swiss-based administrative specialist helping founders and SMEs keep their back office lean, compliant and stress‑free. 
                  With hands-on experience across accounting, HR and operations, I bring structure, clarity and momentum to your daily business.
                </p>
                <p className="mb-4">
                  My philosophy is simple: reliable execution, clear communication, and discreet support in the background so you can focus on growth.
                </p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>Strengths: organization, process optimization, and pragmatic problem solving</li>
                  <li>Values: reliability, discretion, and long‑term partnership</li>
                  <li>Focus: Swiss SMEs, trades, and service companies</li>
                </ul>
                <p className="mb-0">
                  If you’d like to know how I can support you specifically, feel free to book a short intro call—no obligations, just clarity.
                </p>
              </div>
            </Card>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="space-y-12 opacity-0 translate-y-4 transition-all duration-700">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Mein Werdegang</h2>
            
            {/* 2017 - Ausbildung */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <Card className="flex-grow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">2017</span>
                    <span>Kaufmännische Ausbildung</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Im Sommer 2017 habe ich meine Ausbildung zur <strong>Kauffrau EFZ</strong> mit einem 
                    Notenschnitt von <strong>5,5</strong> erfolgreich abgeschlossen – ein solider Grundstein 
                    für meine berufliche Laufbahn.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Erste Berufserfahrungen & Nebenerwerb */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <Card className="flex-grow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-purple-600">2017-2020</span>
                    <span>Erste Schritte & Selbständigkeit</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Nach ersten Berufserfahrungen als Call Agentin entschied ich mich, einen 
                    <strong> selbständigen Nebenerwerb im Schmuckhandel</strong> zu eröffnen.
                  </p>
                  <p className="text-gray-700">
                    Diese Zeit war besonders lehrreich – ich sammelte wertvolle Kenntnisse in:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Firmengründungen</li>
                    <li>Verhandlungen mit Lieferanten</li>
                    <li>Aufbau einer Website inklusive SEO</li>
                    <li>Markeneintragungen</li>
                    <li>Marketing & Buchhaltung</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Weiterbildung */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <Card className="flex-grow">
                <CardHeader>
                  <CardTitle className="text-blue-600">Kontinuierliche Weiterbildung</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Parallel dazu habe ich mich durch <strong>Selbststudium</strong> in den Bereichen 
                    Wirtschaft & Unternehmertum stetig weitergebildet – denn ich liebe es zu lesen, 
                    insbesondere wenn mich das Thema wirklich interessiert.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 2020 - Umfassende Berufserfahrung */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <Card className="flex-grow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-600">2020</span>
                    <span>Fundierte Praxiserfahrung</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Ab September 2020 sammelte ich als <strong>Verantwortliche für Buchhaltung, 
                    Personalwesen, Administration und Assistentin der Geschäftsführung</strong> 
                    fundierte Erfahrungen in praktisch allen kaufmännischen und unternehmerischen Belangen.
                  </p>
                  <p className="text-gray-700">
                    Diese verantwortungsvolle und abwechslungsreiche Aufgabe hat mir sehr gut gefallen 
                    und mich in meiner Entscheidung bestärkt, den Schritt in die Selbständigkeit zu wagen.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* 2021 - Gründung */}
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <Card className="flex-grow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-red-600">2021</span>
                    <span>Gründung von Bürodienstleistungen Hähni</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Im Dezember 2021 habe ich den mutigen Schritt gewagt und mich mit 
                    <strong> Bürodienstleistungen Hähni</strong> selbständig gemacht. 
                    Seit über einem Jahr unterstütze ich nun Unternehmen bei allen kaufmännischen 
                    Herausforderungen – remote und im Hintergrund.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Philosophy Section */}
          <section ref={philosophyRef} className="py-16 opacity-0 translate-y-4 transition-all duration-700">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                  Meine Philosophie: Virtuelle Sachbearbeitung
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6">
                    Obwohl es den Begriff offiziell nicht gibt, nenne ich das Konzept von 
                    Bürodienstleistungen Hähni gerne <strong>"virtuelle Sachbearbeitung"</strong>.
                  </p>
                  <p className="text-lg text-gray-700 mb-8">
                    Ihr gesamtes Backoffice wird abgedeckt – jedoch still im Hintergrund. 
                    Sie sparen dadurch Zeit sowie unnötige Kosten und können sich vollständig 
                    auf Ihr Kerngeschäft konzentrieren.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">Remote</h3>
                      <p className="text-gray-600 text-sm">Vollständig digital</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">Im Hintergrund</h3>
                      <p className="text-gray-600 text-sm">Unauffällig & effizient</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <h3 className="font-semibold text-gray-900">Kosteneffizient</h3>
                      <p className="text-gray-600 text-sm">Zeit & Geld sparen</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Services Summary */}
          <section ref={servicesRef} className="py-12 opacity-0 translate-y-4 transition-all duration-700">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              My range of services today
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Accounting',
                'Human Resources', 
                'Administration',
                'Online Presence Creation',
                'Virtual Assistance',
                'Complete Back Office Concept'
              ].map((service, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 hover:scale-105 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                >
                  <CardContent>
                    <h4 className="font-semibold text-gray-900">{service}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section ref={ctaRef} className="py-16 opacity-0 translate-y-4 transition-all duration-700">
            <Card className="bg-blue-600 text-white text-center p-8">
              <CardContent>
                <h3 className="text-3xl font-bold mb-4">Have I sparked your interest?</h3>
                <p className="text-xl mb-8 text-blue-100">
                  Feel free to contact me for a free & non-binding initial consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Link to="/buchung">Schedule Initial Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent">
                    <Link to="/kontakt">
                      <Mail className="w-4 h-4 mr-2" />
                      Make Contact
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
