
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      
      {/* Trust Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Warum Bürodienstleistungen Hähni?
            </h2>
            <p className="text-xl text-gray-600">
              Damit Sie sich auf Ihr Kerngeschäft konzentrieren können
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">10+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jahre Erfahrung</h3>
              <p className="text-gray-600">
                Langjährige Expertise in der kaufmännischen Sachbearbeitung
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Remote</h3>
              <p className="text-gray-600">
                Vollständig digitale Abwicklung - keine Vor-Ort-Termine nötig
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexibel</h3>
              <p className="text-gray-600">
                Anpassung an Ihre Bedürfnisse und Arbeitszeiten
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Bereit für Ihr kostenloses Erstgespräch?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Lassen Sie uns besprechen, wie wir Ihr Backoffice optimieren können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/swissfinanceai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
            >
              Jetzt Termin vereinbaren
            </a>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Mehr erfahren
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
