
import React from 'react';
import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, BookOpen, ExternalLink, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const OnlineBuchung = () => {
  const courses = [
    {
      title: 'Virtual Bookkeeping',
      platform: 'Freelance University',
      description: 'Learn basic bookkeeping skills, choose the right accounting system, and master bookkeeping processes for remote clients.',
      url: 'https://freelanceuniversity.com/virtual-bookkeeping',
      category: 'Buchhaltung'
    },
    {
      title: 'The Savvy System',
      platform: 'The Savvy System',
      description: 'Comprehensive training for virtual assistants, including templates, live tutorials, and best practices for remote work.',
      url: 'https://www.thesavvysystem.com',
      category: 'Virtuelle Assistenz'
    },
    {
      title: 'The 90 Day VA',
      platform: 'The 90 Day VA',
      description: 'In-depth course covering all essential VA skills, content marketing, social media management, and more.',
      url: 'https://the90dayva.com',
      category: 'Virtuelle Assistenz'
    },
    {
      title: 'Online Bookkeeping Training',
      platform: 'Penn Foster',
      description: 'Build fundamental bookkeeping skills, learn to use accounting software, and prepare for real-world bookkeeping tasks.',
      url: 'https://www.pennfoster.edu/programs/business/bookkeeping',
      category: 'Buchhaltung'
    },
    {
      title: 'Free Online Bookkeeping Courses',
      platform: 'Coursera & AccountingCoach',
      description: 'Free and paid bookkeeping courses covering accounting basics, financial statements, payroll, and more.',
      url: 'https://www.coursera.org/courses?query=bookkeeping',
      category: 'Buchhaltung'
    },
    {
      title: 'Virtual Assistant Program',
      platform: 'Australian Online Courses',
      description: 'Learn about the VA industry, essential tools, communication, and project management skills for virtual assistants.',
      url: 'https://www.australianonlinecourses.com.au/virtual-assistant',
      category: 'Virtuelle Assistenz'
    },
    {
      title: 'Must-Have Skills for Virtual Assistants',
      platform: 'Udemy',
      description: 'Short, accessible courses covering essential virtual assistant skills, tools, and best practices.',
      url: 'https://www.udemy.com/topic/virtual-assistant',
      category: 'Virtuelle Assistenz'
    }
  ];

  const getCategoryColor = (category: string) => {
    return category === 'Buchhaltung' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  };

  return (
    <Layout>
      <PageHeader 
        title="Online-Buchung"
        subtitle="Buchen Sie Ihr kostenloses Erstgespräch oder entdecken Sie empfehlenswerte Online-Kurse"
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

          {/* Courses Section */}
          <section className="py-12">
            <div className="text-center mb-12">
              <BookOpen className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Empfehlenswerte Online-Kurse
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Für virtuelle Assistenz & Buchhaltung - Erweitern Sie Ihre Fähigkeiten mit diesen 
                hochwertigen Online-Kursen von renommierten Plattformen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(course.category)}`}>
                        {course.category}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription className="text-sm text-blue-600 font-medium">
                      {course.platform}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {course.description}
                    </p>
                    <Button asChild size="sm" variant="outline" className="w-full">
                      <a href={course.url} target="_blank" rel="noopener noreferrer">
                        Kurs ansehen
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200 p-8">
                <CardContent>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Möchten Sie sich weiterbilden?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Diese Kurse bieten exzellente Grundlagen für alle, die sich in den Bereichen 
                    virtuelle Assistenz und Buchhaltung weiterbilden möchten. Als erfahrene 
                    Fachkraft kann ich Ihnen bei der Auswahl des passenden Kurses helfen.
                  </p>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700">
                    <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer">
                      Beratungsgespräch vereinbaren
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default OnlineBuchung;
