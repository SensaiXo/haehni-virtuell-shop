import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckIcon, LocationIcon, HandshakeIcon } from '@/components/ui/icons';
const HeroSection = () => {
  return <>
      <section className="relative overflow-hidden">
        <div className="min-h-screen">
          {/* Light Blue Box - Top */}
          <motion.div 
            className="bg-[hsl(var(--light-blue-section))] py-20 lg:py-28 px-6 lg:px-8 flex items-center justify-center relative"
            style={{
              backgroundImage: `url('/lovable-uploads/27c650dc-803c-4bfe-b036-4c741d943c2f.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-[hsl(var(--light-blue-section))]/70"></div>
            <div className="max-w-lg w-full text-center lg:text-left relative z-10">
              {/* Company Name Border */}
              <motion.div 
                className="inline-block border-2 border-white px-6 py-3 mb-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-white text-sm font-medium tracking-wide">
                  BÜRODIENSTLEISTUNGEN HÄHNI
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight text-[hsl(var(--brand-navy))]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Buchhaltung &<br />
                Administration
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white mb-10 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Virtuell stark, persönlich nah.
              </motion.p>
              
              {/* Proof Bar */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-sm font-medium text-white shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckIcon className="w-4 h-4 text-white" />
                  Über 10 Jahre Erfahrung
                </motion.div>
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-sm font-medium text-white shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <LocationIcon className="w-4 h-4 text-white" />
                  Frauenfeld, Thurgau
                </motion.div>
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-sm font-medium text-white shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <HandshakeIcon className="w-4 h-4 text-white" />
                  100% persönlich & flexibel
                </motion.div>
              </motion.div>
              
              {/* CTAs */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild size="lg" className="text-base px-8 py-4 h-auto rounded-xl font-semibold transition-all duration-300 bg-white text-[hsl(var(--brand-navy))] hover:bg-white/90">
                    <a href="https://calendly.com/swissfinanceai/30min?utm_source=website&utm_medium=hero" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Kostenloses Erstgespräch buchen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button asChild variant="outline" size="lg" className="text-base px-8 py-4 h-auto rounded-xl font-semibold transition-all duration-300 border-white text-white hover:bg-white/10">
                    <Link to="/leistungen">
                      Leistungen entdecken
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* White Box - Right/Bottom */}
          <motion.div 
            className="bg-white py-20 lg:py-28 px-6 lg:px-8 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-lg w-full text-center">
              {/* Description */}
              <motion.p 
                className="text-xl md:text-2xl text-black mb-10 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Ich kümmere mich um den Papierkram, die Buchhaltung und das Büro.<br className="hidden sm:block" />
                <span className="block mt-2">Damit du dich auf dein Business, deine Kunden und das Leben konzentrieren kannst.</span>
              </motion.p>

              {/* Portrait */}
              <motion.div 
                className="flex justify-center mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="relative">
                  <motion.div 
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-[hsl(var(--brand-white))] bg-gradient-to-br from-[hsl(var(--brand-navy))]/5 to-[hsl(var(--brand-blue))]/5"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      alt="Laura Hähni – Virtuelle Assistentin und Buchhalterin für KMU in der Schweiz" 
                      className="w-full h-full object-cover object-center" 
                      loading="lazy" 
                      src="/lovable-uploads/bcba4a70-2042-41ab-b00e-dbebaf65b148.png" 
                    />
                  </motion.div>
                  {/* Subtle floating accent */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-16 h-16 bg-[hsl(var(--brand-navy))]/10 rounded-full blur-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute -top-4 -left-4 w-12 h-12 bg-[hsl(var(--brand-blue))]/10 rounded-full blur-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
              
              {/* Microcopy */}
              <motion.div 
                className="text-sm text-black/60 leading-relaxed max-w-lg mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Direkter Draht zu mir – keine Hotline, keine Bürokratie.<br />
                Vertraulich. Digital. Einfach. Keine Verpflichtung – nur ein persönliches Gespräch.
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Bürodienstleistungen Hähni",
        "url": "https://bdlh.ch",
        "description": "Virtuelle Assistenz und Buchhaltung für KMU in der Schweiz – virtuell stark, persönlich nah.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Langwiesstrasse 30",
          "addressLocality": "Frauenfeld",
          "postalCode": "8500",
          "addressCountry": "CH"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+41-79-645-66-86",
          "contactType": "customer service",
          "email": "info@bdlh.ch"
        }
      })
    }} />
    </>;
};
export default HeroSection;