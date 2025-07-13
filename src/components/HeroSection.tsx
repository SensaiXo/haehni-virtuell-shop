import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center bg-background py-16 px-4 min-h-[80vh]" itemScope itemType="http://schema.org/Organization">
        <div className="max-w-xl md:mr-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* Proof Bar */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              {t('hero.proof.experience')}
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              {t('hero.proof.location')}
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              {t('hero.proof.personal')}
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <a 
              href="https://calendly.com/swissfinanceai/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg"
            >
              {t('hero.cta.primary')}
            </a>
            <Link 
              to="/leistungen"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 rounded-full font-semibold text-lg transition-all duration-300"
            >
              {t('hero.cta.secondary')}
            </Link>
          </div>
          
          {/* Microcopy */}
          <div className="text-sm text-muted-foreground leading-relaxed">
            {t('hero.microcopy').split('\n').map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        </div>
        
        {/* Portrait */}
        <div className="mt-12 md:mt-0">
          <img
            src="/lovable-uploads/82ede0e0-24e7-4482-8e05-0f1e46efe8d2.png"
            alt="Laura Hähni – Virtuelle Assistentin"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary shadow-xl mx-auto"
          />
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
    </>
  );
};
export default HeroSection;