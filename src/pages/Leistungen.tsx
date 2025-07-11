
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Calculator, Users, HeadphonesIcon, Search, FileText, TrendingUp, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Leistungen = () => {
  const [selectedPackages, setSelectedPackages] = useState<Record<string, { tier: string; price: string }>>({});

  const services = [
    {
      icon: Calculator,
      title: 'Accounting',
      description: 'Professional bookkeeping and financial administration',
      details: [
        'Accounts receivable and payable',
        'Monthly and annual financial statements',
        'VAT processing',
        'Cash book management',
        'Document digitization and booking'
      ],
      packages: [
        { tier: 'Basic', price: 'From CHF 80/hour' },
        { tier: 'Standard', price: 'CHF 1,200/month (Basic package)' },
        { tier: 'Premium', price: 'Custom solution on request' }
      ],
      serviceKey: 'accounting'
    },
    {
      icon: Users,
      title: 'HR & Payroll',
      description: 'Complete HR management for your business',
      details: [
        'Monthly payroll processing',
        'Social insurance processing',
        'Employment contract creation',
        'Personnel administration',
        'Time tracking and expense reports',
        'Certificates and references'
      ],
      packages: [
        { tier: 'Basic', price: 'From CHF 25 per payroll' },
        { tier: 'Standard', price: 'CHF 800/month (up to 10 employees)' },
        { tier: 'Premium', price: 'Comprehensive HR package on request' }
      ],
      serviceKey: 'hr'
    },
    {
      icon: HeadphonesIcon,
      title: 'Executive Assistance',
      description: 'Virtual support for business leaders',
      details: [
        'Appointment scheduling and calendar management',
        'Email management and correspondence',
        'Travel planning and organization',
        'Document creation and management',
        'Meeting minutes and protocols',
        'Project coordination'
      ],
      packages: [
        { tier: 'Basic', price: 'From CHF 75/hour' },
        { tier: 'Standard', price: 'CHF 1,500/month (20 hrs)' },
        { tier: 'Premium', price: 'Full-time assistance on request' }
      ],
      serviceKey: 'executive'
    },
    {
      icon: Search,
      title: 'Online Research',
      description: 'Professional market and competitor analysis',
      details: [
        'Market analysis and trends',
        'Competitor monitoring',
        'Supplier and partner research',
        'Industry studies',
        'Data collection and processing',
        'Summary and presentation'
      ],
      packages: [
        { tier: 'Basic', price: 'From CHF 60/hour' },
        { tier: 'Standard', price: 'CHF 500 per research project' },
        { tier: 'Premium', price: 'Ongoing market monitoring from CHF 800/month' }
      ],
      serviceKey: 'research'
    },
    {
      icon: FileText,
      title: 'General Administration',
      description: 'Office work and administrative support',
      details: [
        'General correspondence',
        'Data entry and maintenance',
        'Filing and document management',
        'Invoice processing',
        'Office management',
        'Customer service'
      ],
      packages: [
        { tier: 'Basic', price: 'From CHF 65/hour' },
        { tier: 'Standard', price: 'CHF 1,000/month (15 hrs)' },
        { tier: 'Premium', price: 'Full-service package on request' }
      ],
      serviceKey: 'admin'
    },
    {
      icon: TrendingUp,
      title: 'Consulting & Process Optimization',
      description: 'Strategic support for increased efficiency',
      details: [
        'Process analysis and optimization',
        'Digitization consulting',
        'Workflow design',
        'Software recommendations',
        'Training and implementation',
        'Change management'
      ],
      packages: [
        { tier: 'Basic', price: 'From CHF 120/hour' },
        { tier: 'Standard', price: 'CHF 2,500 analysis package' },
        { tier: 'Premium', price: 'Long-term consulting on request' }
      ],
      serviceKey: 'consulting'
    }
  ];

  const selectPackage = (service: string, tier: string, price: string) => {
    setSelectedPackages(prev => {
      const newSelection = { ...prev };
      
      if (newSelection[service]?.tier === tier) {
        // If clicking the same package, deselect it
        delete newSelection[service];
      } else {
        // Select new package
        newSelection[service] = { tier, price };
      }
      
      return newSelection;
    });
  };

  const getColorClasses = (index: number) => {
    const colors = [
      'border-blue-200',
      'border-blue-400', 
      'border-blue-600'
    ];
    return colors[index] || colors[0];
  };

  const selectedCount = Object.keys(selectedPackages).length;

  const submitGlobalQuote = () => {
    if (selectedCount === 0) {
      alert('Please select at least one package');
      return;
    }
    
    let message = `Combined Quote Request\n\n`;
    message += `Services Selected: ${selectedCount}\n\n`;
    
    Object.entries(selectedPackages).forEach(([service, details]) => {
      message += `${service}\n`;
      message += `Package: ${details.tier}\n`;
      message += `Price: ${details.price}\n\n`;
    });
    
    message += `We'll contact you shortly with a comprehensive quote for all selected services!`;
    
    alert(message);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional business administration services for companies of all sizes. Let us handle your administrative tasks so you can focus on your core business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>

                {/* Service Details */}
                <div className="flex-grow mb-6">
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Section */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Pricing Packages</h3>
                  <div className="space-y-3 mb-6">
                    {service.packages.map((pkg, pkgIndex) => {
                      const isSelected = selectedPackages[service.title]?.tier === pkg.tier;
                      return (
                        <div
                          key={pkgIndex}
                          onClick={() => selectPackage(service.title, pkg.tier, pkg.price)}
                          className={`p-4 border-l-4 ${getColorClasses(pkgIndex)} bg-gray-50 rounded-lg cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:transform hover:-translate-y-0.5 hover:shadow-md relative ${
                            isSelected ? 'bg-blue-100 border-blue-600 shadow-md' : ''
                          }`}
                        >
                          {isSelected && (
                            <div className="absolute top-2 right-3 text-blue-600 font-bold text-lg">✓</div>
                          )}
                          <div className="font-semibold text-gray-900 text-center">{pkg.tier}</div>
                          <div className="text-blue-600 font-medium text-sm text-center mt-2">{pkg.price}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {selectedPackages[service.title] && (
                    <div className="text-sm text-green-600 font-medium mb-4 text-center">
                      Selected: {selectedPackages[service.title].tier} - {selectedPackages[service.title].price}
                    </div>
                  )}

                  <div className="text-center">
                    <Button variant="outline" className="w-full">
                      <Link to="/buchung">Book Consultation</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Quote Panel */}
      {selectedCount > 0 && (
        <div className="fixed bottom-5 right-5 bg-white border-2 border-blue-600 rounded-xl p-5 shadow-xl max-w-sm z-50 transition-all duration-300">
          <button
            onClick={() => setSelectedPackages({})}
            className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
          <div className="text-lg font-semibold text-gray-900 mb-3">Selected Services</div>
          <div className="max-h-48 overflow-y-auto mb-4">
            {Object.entries(selectedPackages).map(([service, details]) => (
              <div key={service} className="text-sm text-gray-700 mb-2 p-2 bg-gray-50 rounded-lg border-l-3 border-blue-600">
                <div className="font-semibold text-gray-900">{service}</div>
                <div>{details.tier} - {details.price}</div>
              </div>
            ))}
          </div>
          <Button onClick={submitGlobalQuote} className="w-full bg-blue-600 hover:bg-blue-700 mb-2">
            Get Combined Quote
          </Button>
          <div className="text-xs text-gray-500 text-center">
            Select packages from different services above
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Our Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your free consultation now and let us find the best solution for your business together.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link to="/buchung">
              Book Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Leistungen;
