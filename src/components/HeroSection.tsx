import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <>
      <section className="relative bg-white/70 backdrop-blur-sm py-16 lg:py-24 overflow-hidden" itemScope itemType="http://schema.org/Organization">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
            <div className="lg:col-span-7 mb-12 lg:mb-0">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  <span className="text-gray-900">Administration, die entlastet:</span><br />
                  <span className="text-brand-primary">Virtuelle Assistenz & Buchhaltung</span><br />
                  <span className="text-gray-700">für KMU in der Schweiz</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                  Virtuell stark, persönlich nah. <span className="font-semibold text-brand-primary">Mehr Zeit für Ihr Kerngeschäft</span> – wir übernehmen Administration und Finanzen, remote und flexibel.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-secondary text-white text-lg px-8 py-3 transition-all duration-300 hover:shadow-md">
                    <a href="https://calendly.com/swissfinanceai/30min?utm_source=website&utm_medium=hero" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Kostenloses Erstgespräch buchen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-brand-primary border-brand-primary/30 hover:bg-brand-light text-lg px-8 py-3 transition-all duration-300">
                    <Link to="/leistungen">
                      Leistungen entdecken
                    </Link>
                  </Button>
                </div>

                {/* Benefits */}
                
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl shadow-2xl overflow-hidden">
                  <img alt="Laura Hähni – Virtuelle Assistentin und Buchhalterin für KMU in der Schweiz" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/82ede0e0-24e7-4482-8e05-0f1e46efe8d2.png" />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 max-w-xs transition-opacity duration-500 opacity-90 hover:opacity-100">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-brand-primary" />
                    <span className="text-sm font-medium text-gray-900">Ihr Partner für effiziente Administration</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 max-w-xs transition-opacity duration-500 opacity-90 hover:opacity-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-brand-primary">10+</div>
                    <div className="text-sm text-gray-600">Jahre Expertise in Schweizer KMU</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Bürodienstleistungen Hähni",
        "url": "https://bdlh.ch",
        "description": "Virtuelle Assistenz und Buchhaltung für KMU in der Schweiz – virtuell stark, persönlich nah.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Langwiesstrasse 30",
          "addressLocality": "Frauenfeld",
          "postalCode": "8500",
          "addressCountry": "CH"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+41-79-645-66-86",
          "contactType": "customer service",
          "email": "info@bdlh.ch"
        }
      })
    }} />
    </>;
};
export default HeroSection;