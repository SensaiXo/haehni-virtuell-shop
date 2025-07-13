import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Clock, Users, Shield, Phone, Calculator, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQItem = ({ question, answer, icon: Icon, isOpen, onToggle }) => (
  <div className="border border-border rounded-lg mb-4 overflow-hidden shadow-card">
    <button
      onClick={onToggle}
      className="w-full px-6 py-4 text-left bg-background hover:bg-muted transition-colors flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-accent" />
        <span className="font-medium text-foreground">{question}</span>
      </div>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-muted-foreground" />
      ) : (
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
    {isOpen && (
      <div className="px-6 py-4 bg-warm-beige border-t border-border">
        <div className="text-foreground leading-relaxed whitespace-pre-line">{answer}</div>
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
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map((item, index) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })}
      </script>
      
      <div className="min-h-screen bg-gradient-to-b from-background to-warm-beige">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">{t('faq.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
          <div className="mt-16 text-center bg-muted rounded-lg p-8 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t('faq.cta.title')}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t('faq.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="mailto:info@bdlh.ekigicod.myhostpoint.ch"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
              >
                {t('faq.cta.email')}
              </a>
              <a
                href="tel:+41796456686"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-block"
              >
                {t('faq.cta.call')}
              </a>
            </div>
            
            {/* Additional helpful links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-sm">
              <Link 
                to="/products" 
                className="text-accent hover:text-accent/80 underline"
              >
                {t('faq.links.packages')}
              </Link>
              <Link 
                to="/buchung" 
                className="text-accent hover:text-accent/80 underline"
              >
                {t('faq.links.booking')}
              </Link>
              <Link 
                to="/kontakt" 
                className="text-accent hover:text-accent/80 underline"
              >
                {t('faq.links.contact')}
              </Link>
            </div>
          </div>

          {/* Discreet privacy notice */}
          <div className="mt-12 px-4">
            <p className="text-xs text-muted-foreground text-center">
              {t('faq.privacy')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;