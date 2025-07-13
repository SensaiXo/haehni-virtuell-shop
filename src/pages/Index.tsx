
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
      
      {/* Trust Section */}
      <section ref={trustSectionRef} className="py-20 bg-white/50 backdrop-blur-sm opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('home.trust.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.trust.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8AA6C1] to-[#B8CCDE] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.trust.experience')}</h3>
              <p className="text-gray-600">
                {t('home.trust.experience_desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A4B8C7] to-[#8AA6C1] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.trust.remote')}</h3>
              <p className="text-gray-600">
                {t('home.trust.remote_desc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B8CCDE] to-[#A4B8C7] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('home.trust.flexible')}</h3>
              <p className="text-gray-600">
                {t('home.trust.flexible_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSectionRef} className="py-20 bg-gradient-to-br from-[#8AA6C1] to-[#B8CCDE] opacity-0 translate-y-4 transition-all duration-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/swissfinanceai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#8AA6C1] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block shadow-lg"
            >
              {t('home.cta.book')}
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#8AA6C1] font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              {t('home.cta.learn_more')}
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
