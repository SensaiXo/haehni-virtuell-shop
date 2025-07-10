import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Users, Shield, Phone, Calculator, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQItem = ({ question, answer, icon: Icon, isOpen, onToggle }) => (
  <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-blue-600" />
        <span className="font-medium text-gray-900">{question}</span>
      </div>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-gray-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500" />
      )}
    </button>
    {isOpen && (
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">{answer}</div>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const { t } = useLanguage();

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1'),
      icon: HelpCircle
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2'),
      icon: Users
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3'),
      icon: Clock
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4'),
      icon: Calculator
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5'),
      icon: Shield
    },
    {
      question: t('faq.q6'),
      answer: t('faq.a6'),
      icon: FileText
    },
    {
      question: t('faq.q7'),
      answer: t('faq.a7'),
      icon: Clock
    },
    {
      question: t('faq.q8'),
      answer: t('faq.a8'),
      icon: Users
    },
    {
      question: t('faq.q9'),
      answer: t('faq.a9'),
      icon: Phone
    },
    {
      question: t('faq.q10'),
      answer: t('faq.a10'),
      icon: HelpCircle
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('faq.title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                icon={item.icon}
                isOpen={openItems.has(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('faq.cta.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('faq.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="mailto:info@bdlh.ekigicod.myhostpoint.ch"
                className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
              >
                {t('faq.cta.email')}
              </a>
              <a
                href="tel:+41796456686"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
              >
                {t('faq.cta.call')}
              </a>
            </div>
            
            {/* Additional helpful links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-sm">
              <Link 
                to="/products" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {t('faq.links.packages')}
              </Link>
              <Link 
                to="/buchung" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {t('faq.links.booking')}
              </Link>
              <Link 
                to="/kontakt" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                {t('faq.links.contact')}
              </Link>
            </div>
          </div>

          {/* Discreet privacy notice */}
          <div className="mt-12 px-4">
            <p className="text-xs text-gray-500 text-center">
              {t('faq.privacy')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;