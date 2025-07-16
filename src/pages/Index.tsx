
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  const trustSectionRef = useRef<HTMLElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);

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

    if (trustSectionRef.current) observer.observe(trustSectionRef.current);
    if (ctaSectionRef.current) observer.observe(ctaSectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      
      {/* Trust Section - WHITE BACKGROUND */}
      <section ref={trustSectionRef} className="py-20 bg-[hsl(var(--white-section))] opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[hsl(var(--white-section-text))] mb-4">
              {t('home.trust.title')}
            </h2>
            <p className="text-xl text-[hsl(var(--white-section-accent))]">
              {t('home.trust.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--white-section-accent))] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--white-section-text))] mb-2">{t('home.trust.experience')}</h3>
              <p className="text-[hsl(var(--white-section-text))]/70">
                {t('home.trust.experience_desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--white-section-accent))] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--white-section-text))] mb-2">{t('home.trust.remote')}</h3>
              <p className="text-[hsl(var(--white-section-text))]/70">
                {t('home.trust.remote_desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(var(--white-section-accent))] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-[hsl(var(--white-section-text))] mb-2">{t('home.trust.flexible')}</h3>
              <p className="text-[hsl(var(--white-section-text))]/70">
                {t('home.trust.flexible_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - LIGHT BLUE BACKGROUND */}
      <section ref={ctaSectionRef} className="py-20 bg-[hsl(var(--light-blue-section))] opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--light-blue-text))] mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-[hsl(var(--light-blue-text))]/90 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/swissfinanceai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[hsl(var(--white-section-accent))] text-white hover:bg-[hsl(var(--white-section-accent))]/90 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block shadow-lg"
            >
              {t('home.cta.book')}
            </a>
            <button className="border-2 border-[hsl(var(--light-blue-text))] text-[hsl(var(--light-blue-text))] hover:bg-[hsl(var(--light-blue-text))] hover:text-[hsl(var(--light-blue-section))] font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              {t('home.cta.learn_more')}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
