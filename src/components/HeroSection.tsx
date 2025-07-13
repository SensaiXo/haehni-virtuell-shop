import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <>
      <section className="relative bg-background py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] mb-8 tracking-tight">
                <span className="text-foreground">Mehr Zeit für das,</span>
                <br />
                <span className="text-primary font-bold">was zählt.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Ich kümmere mich um den Papierkram, die Buchhaltung und das Büro.<br className="hidden sm:block" />
                <span className="block mt-2">Damit du dich auf dein Business, deine Kunden und das Leben konzentrieren kannst.</span>
              </p>
              
              {/* Proof Bar */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-foreground">
                  <span className="text-primary">✅</span>
                  Über 10 Jahre Erfahrung
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-foreground">
                  <span className="text-primary">🏠</span>
                  Frauenfeld, Thurgau
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-foreground">
                  <span className="text-primary">🤝</span>
                  100% persönlich & flexibel
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 py-4 h-auto rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <a href="https://calendly.com/swissfinanceai/30min?utm_source=website&utm_medium=hero" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Kostenloses Erstgespräch buchen
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-primary/20 text-primary hover:bg-primary/5 text-base px-8 py-4 h-auto rounded-xl font-semibold transition-all duration-300">
                  <Link to="/leistungen">
                    Leistungen entdecken
                  </Link>
                </Button>
              </div>
              
              {/* Microcopy */}
              <div className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                Direkter Draht zu mir – keine Hotline, keine Bürokratie.<br />
                Vertraulich. Digital. Einfach. Keine Verpflichtung – nur ein persönliches Gespräch.
              </div>
            </div>

            {/* Portrait */}
            <div className="flex-shrink-0 order-first lg:order-last">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-primary/5 bg-gradient-to-br from-primary/5 to-accent/5">
                  <img 
                    alt="Laura Hähni – Virtuelle Assistentin und Buchhalterin für KMU in der Schweiz" 
                    className="w-full h-full object-cover object-center" 
                    loading="lazy" 
                    src="/lovable-uploads/bcba4a70-2042-41ab-b00e-dbebaf65b148.png" 
                  />
                </div>
                {/* Subtle floating accent */}
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent/10 rounded-full blur-lg"></div>
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