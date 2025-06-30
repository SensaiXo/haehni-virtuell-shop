
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Bürodienstleistungen</span>
                <br />
                <span className="text-gray-800">Hähni</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                Ihr zuverlässiger Partner für alle kaufmännischen Aufgaben – 
                <span className="font-semibold text-blue-600"> remote, flexibel und transparent.</span>
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  <Link to="/buchung" className="flex items-center">
                    Kostenloses Erstgespräch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-blue-200 hover:bg-blue-50">
                  <Link to="/leistungen">
                    Leistungen entdecken
                  </Link>
                </Button>
              </div>

              {/* Benefits */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="text-gray-700 font-medium">100% Remote</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="text-gray-700 font-medium">Flexibel</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="flex-shrink-0">
                    <Shield className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="text-gray-700 font-medium">Transparent</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/lovable-uploads/e753479d-a5a2-4126-866b-ce85a09912a3.png"
                  alt="Laura Hähni - Bürodienstleistungen"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">Ihr Backoffice im Hintergrund</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
