
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, BookOpen, ExternalLink, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const OnlineBuchung = () => {
  return (
    <Layout>
      <PageHeader 
        title="Online-Buchung"
        subtitle="Kostenloses Erstgespräch buchen."
        backgroundImage="/lovable-uploads/73eba743-f722-4214-8881-25440bfe8aea.png"
      />

      {/* Booking Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Direct Booking */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader className="text-center">
                <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-900">Kostenloses Erstgespräch</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Lassen Sie uns besprechen, wie wir Ihr Backoffice optimieren können
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Clock className="w-5 h-5" />
                    <span>30 Minuten</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <Phone className="w-5 h-5" />
                    <span>Online per Zoom/Teams</span>
                  </div>
                </div>
                <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer">
                    Jetzt Termin buchen
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Form Alternative */}
            <Card className="p-8">
              <CardHeader className="text-center">
                <Mail className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-gray-900">Individuelle Anfrage</CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Haben Sie spezielle Wünsche oder komplexe Projekte?
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 mb-8">
                  <p className="text-gray-700">
                    Kontaktieren Sie mich direkt für eine persönliche Beratung
                  </p>
                  <div className="text-blue-600 font-semibold">
                    info@bdlh.ch
                  </div>
                </div>
                <Button asChild size="lg" variant="outline" className="w-full border-green-200 hover:bg-green-50">
                  <Link to="/kontakt">
                    Kontakt aufnehmen
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OnlineBuchung;
