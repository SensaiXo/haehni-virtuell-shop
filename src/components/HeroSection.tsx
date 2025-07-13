import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <>
      <section className="relative bg-gradient-to-br from-[#8AA6C1] to-[#B8CCDE] py-20 lg:py-32 overflow-hidden" itemScope itemType="http://schema.org/Organization">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Organisation, die entlastet: <br />
                  <span className="text-blue-700">Virtuelle Assistenz & Buchhaltung</span> <br />
                  für KMU in der Schweiz
                </h1>
                <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                  Virtuell stark, persönlich nah. <span className="font-semibold text-blue-700">Gewinnen Sie Zeit für Ihr Kerngeschäft – wir übernehmen Administration, Finanzen und mehr, remote und flexibel.</span>
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-3 transition-all duration-300 hover:shadow-md">
                    <a href="https://calendly.com/swissfinanceai/30min?utm_source=website&utm_medium=hero" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Kostenloses Erstgespräch buchen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-blue-700 border-blue-300 hover:bg-blue-50 text-lg px-8 py-3 transition-all duration-300">
                    <Link to="/leistungen">
                      Leistungen entdecken
                    </Link>
                  </Button>
                </div>

              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="relative">
                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl shadow-2xl overflow-hidden">
                  <img alt="Laura Hähni – Virtuelle Assistentin und Buchhalterin für KMU in der Schweiz" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/783a212f-65c8-4cdb-8bef-fc29d360db1a.png" />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 max-w-xs transition-opacity duration-500 opacity-90 hover:opacity-100">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-700" />
                    <span className="text-sm font-medium text-gray-900">Ihr Partner für effiziente Administration</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 max-w-xs transition-opacity duration-500 opacity-90 hover:opacity-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-700">10+</div>
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