
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Calculator, Users, HeadphonesIcon, Search, FileText, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SelectedPackage {
  tier: string;
  price: string;
}

interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  services: Record<string, SelectedPackage>;
}

const Leistungen = () => {
  const { t } = useLanguage();
  const [selectedPackages, setSelectedPackages] = useState<Record<string, SelectedPackage>>({});
  const [showContactModal, setShowContactModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [modalType, setModalType] = useState<'single' | 'combined'>('single');
  const [currentService, setCurrentService] = useState('');
  const [messageTitle, setMessageTitle] = useState('');
  const [messageText, setMessageText] = useState('');
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    services: {}
  });

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
        { tier: 'Basic', price: 'From CHF 90/hour' },
        { tier: 'Standard', price: 'CHF 1,200/month (Basic package)' },
        { tier: 'Premium', price: 'Custom solution on request' }
      ]
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
        { tier: 'Basic', price: 'From CHF 30 per payroll' },
        { tier: 'Standard', price: 'CHF 800/month (up to 10 employees)' },
        { tier: 'Premium', price: 'Comprehensive HR package on request' }
      ]
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
        { tier: 'Basic', price: 'From CHF 85/hour' },
        { tier: 'Standard', price: 'CHF 1,500/month (20 hrs)' },
        { tier: 'Premium', price: 'Full-time assistance on request' }
      ]
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
        { tier: 'Basic', price: 'From CHF 65/hour' },
        { tier: 'Standard', price: 'CHF 500 per research project' },
        { tier: 'Premium', price: 'Ongoing market monitoring from CHF 800/month' }
      ]
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
        { tier: 'Basic', price: 'From CHF 72/hour' },
        { tier: 'Standard', price: 'CHF 1,000/month (15 hrs)' },
        { tier: 'Premium', price: 'Full-service package on request' }
      ]
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
        { tier: 'Basic', price: 'From CHF 132/hour' },
        { tier: 'Standard', price: 'CHF 2,500 analysis package' },
        { tier: 'Premium', price: 'Long-term consulting on request' }
      ]
    }
  ];

  const selectPackage = (service: string, tier: string, price: string) => {
    setSelectedPackages(prev => {
      const newSelection = { ...prev };
      
      if (newSelection[service]?.tier === tier) {
        delete newSelection[service];
      } else {
        newSelection[service] = { tier, price };
      }
      
      return newSelection;
    });
  };

  const getColorClasses = (index: number) => {
    const colors = ['border-l-blue-200', 'border-l-blue-400', 'border-l-blue-600'];
    return colors[index] || colors[0];
  };

  const showMessage = (title: string, text: string) => {
    setMessageTitle(title);
    setMessageText(text);
    setShowMessageModal(true);
  };

  const showContactForm = (type: 'single' | 'combined', serviceName: string, services: Record<string, SelectedPackage>) => {
    setModalType(type);
    setCurrentService(serviceName);
    setFormData(prev => ({ ...prev, services }));
    setShowContactModal(true);
  };

  const handleQuoteClick = (service: string) => {
    if (selectedPackages[service]) {
      const selection = selectedPackages[service];
      showContactForm('single', service, { [service]: selection });
    } else {
      const totalSelections = Object.keys(selectedPackages).length;
      
      if (totalSelections === 0) {
        showMessage('Select a Package First!', `To get started:\n\n1. Choose a service you're interested in\n2. Click on one of the pricing packages (Basic, Standard, or Premium)\n3. Then click "Get Quote" again\n\nSelected packages will be highlighted with a checkmark ✓`);
      } else {
        showMessage(`No ${service} Package Selected`, `You have selections for other services. You can either:\n\n1. Select a ${service} package above, then click "Get Quote"\n2. Use the floating "Get Combined Quote" panel for your other selections\n\nOr select a package for ${service} first by clicking Basic, Standard, or Premium above.`);
      }
    }
  };

  const handleGlobalQuote = () => {
    const count = Object.keys(selectedPackages).length;
    if (count === 0) {
      showMessage('No Packages Selected', 'Please select at least one package from the services above first.');
      return;
    }
    
    showContactForm('combined', 'Multiple Services', selectedPackages);
  };

  const submitQuoteForm = () => {
    if (!formData.fullName.trim() || !formData.email.trim()) {
      alert('Please fill in all required fields (Name and Email)');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    setShowContactModal(false);
    setShowThankYouModal(true);
    
    // Reset form and selections
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      services: {}
    });
    setSelectedPackages({});
  };

  const selectedCount = Object.keys(selectedPackages).length;

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
                            isSelected ? 'bg-blue-100 border-blue-600 shadow-md border-2' : ''
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

                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => handleQuoteClick(service.title)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Get Quote
                    </button>
                    <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      Book Consultation
                    </button>
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
          <button
            onClick={handleGlobalQuote}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold mb-2"
          >
            Get Combined Quote
          </button>
          <div className="text-xs text-gray-500 text-center">
            Select packages from different services above
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000] p-5 overflow-y-auto">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {modalType === 'combined' ? 'Request Combined Quote' : `Request Quote - ${currentService}`}
            </h3>
            
            {/* Selected Services Summary */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="font-semibold text-blue-900 mb-2">Selected Services:</div>
              {Object.entries(formData.services).map(([service, details]) => (
                <div key={service} className="text-sm text-gray-700 mb-1">
                  <strong>{service}</strong>: {details.tier} - {details.price}
                </div>
              ))}
            </div>
            
            {/* Contact Form */}
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Additional Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us more about your requirements, timeline, or any specific questions..."
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none h-24 resize-vertical"
                />
              </div>
              
              <div className="flex gap-3 justify-center pt-4">
                <button
                  onClick={submitQuoteForm}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Send Quote Request
                </button>
                <button
                  onClick={() => setShowContactModal(false)}
                  className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000] p-5">
          <div className="bg-white rounded-xl p-8 max-w-lg w-full text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <polyline points="20,6 9,17 4,12" strokeWidth="3"></polyline>
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h3>
            
            <p className="text-gray-700 mb-6">
              Your quote request has been submitted successfully!<br />
              We've received your inquiry and will review your requirements carefully.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6 font-mono font-semibold text-green-800">
              Reference: QR-{Date.now().toString().slice(-6)}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <div className="font-semibold text-gray-700 mb-3">What happens next:</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Our team will review your requirements within 2 hours</li>
                <li>• We'll prepare a detailed quote tailored to your needs</li>
                <li>• You'll receive our response within 24 hours via email</li>
                <li>• We'll schedule a consultation call if needed</li>
              </ul>
            </div>
            
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowThankYouModal(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Continue Browsing
              </button>
              <button
                onClick={() => {
                  setShowThankYouModal(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white text-gray-700 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50"
              >
                Request Another Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[2000] p-5">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{messageTitle}</h3>
            <p className="text-gray-700 mb-6 whitespace-pre-line">{messageText}</p>
            <div className="text-center">
              <button
                onClick={() => setShowMessageModal(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Got it!
              </button>
            </div>
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
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Book Free Consultation
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Leistungen;
