import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Award, Clock, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
              {/* Logo */}
              <motion.div 
                className="mb-8 flex justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src="/lovable-uploads/237ca005-2004-4d97-8868-42de03d7be44.png" 
                  alt="Laura Hähni Bürodienstleistungen Logo" 
                  className="h-36 w-auto"
                />
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight text-[hsl(var(--brand-navy))]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Buchhaltung<br />
                Administration<br />
                Organisation
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white mb-10 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Virtuell stark, persönlich nah.
              </motion.p>
              
              {/* Premium Badges */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.span 
                  className="bg-[#94acd3] text-[#0c128a] flex items-center font-medium rounded-full px-4 py-1 text-base shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{ boxShadow: '0 1px 4px rgba(26, 54, 93, 0.07)' }}
                >
                  <Zap className="text-[#1e73be] w-5 h-5 mr-2" />
                  Flexibel
                </motion.span>
                <motion.span 
                  className="bg-[#bbc8dd] text-[#0c128a] flex items-center font-medium rounded-full px-4 py-1 text-base shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{ boxShadow: '0 1px 4px rgba(26, 54, 93, 0.07)' }}
                >
                  <Award className="text-[#1e73be] w-5 h-5 mr-2" />
                  Professionell
                </motion.span>
                <motion.span 
                  className="bg-[#94acd3] text-[#0c128a] flex items-center font-medium rounded-full px-4 py-1 text-base shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{ boxShadow: '0 1px 4px rgba(26, 54, 93, 0.07)' }}
                >
                  <Clock className="text-[#1e73be] w-5 h-5 mr-2" />
                  Effizient
                </motion.span>
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
                "Grüezi, ich bin Laura Hähni...<br className="hidden sm:block" />
                <span className="block mt-2">Seit einigen Jahren bin ich als virtuelle Assistentin selbstständig und unterstütze Unternehmen dabei, ihre Buchhaltung und administrativen Aufgaben effizient zu meistern. Zusammen mit Clark, unserem talentierten Website-Entwickler aus dem UK, bieten wir Ihnen die perfekte Kombination aus virtueller Assistenz und digitalen Lösungen.</span>
              </motion.p>

              {/* Couple Portrait */}
              <motion.div 
                className="flex justify-center mb-8 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="relative flex items-center gap-8">
                  {/* Laura's Portrait */}
                  <motion.div 
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl ring-8 ring-[hsl(var(--brand-white))] bg-gradient-to-br from-[hsl(var(--brand-navy))]/5 to-[hsl(var(--brand-blue))]/5 relative z-10"
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

                  {/* Floating Hearts Animation */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Heart className="w-8 h-8 text-red-500 fill-red-500" />
                  </motion.div>

                  {/* Additional floating hearts */}
                  <motion.div 
                    className="absolute top-8 left-1/2 transform -translate-x-1/2 z-15"
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                  </motion.div>

                  <motion.div 
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-15"
                    animate={{ 
                      y: [0, 20, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    <Heart className="w-5 h-5 text-red-400 fill-red-400" />
                  </motion.div>

                  {/* Clark's Portrait */}
                  <motion.div 
                    className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl ring-8 ring-[hsl(var(--brand-white))] bg-gradient-to-br from-[hsl(var(--brand-navy))]/5 to-[hsl(var(--brand-blue))]/5 relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      alt="Clark – Website Developer from UK" 
                      className="w-full h-full object-cover object-center" 
                      loading="lazy" 
                      src="/lovable-uploads/7ec14da2-55de-492d-ac88-28b2e42f814e.png" 
                    />
                  </motion.div>

                  {/* Romantic glow effects */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-300/20 rounded-full blur-xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute -top-4 -left-4 w-12 h-12 bg-pink-300/20 rounded-full blur-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
              
              {/* Names */}
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-lg font-semibold text-black/80">
                  Laura Hähni <Heart className="inline w-5 h-5 text-red-500 fill-red-500 mx-2" /> Clark
                </p>
                <p className="text-sm text-black/60">
                  Virtuelle Assistentin & Website Developer
                </p>
              </motion.div>
              
              {/* Microcopy */}
              <motion.div 
                className="text-sm text-black/60 leading-relaxed max-w-lg mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                Gemeinsam bieten wir Ihnen präzise Arbeit, schnelle Ergebnisse und faire Konditionen – damit Sie sich voll und ganz auf Ihr Business konzentrieren können. Wir freuen uns darauf, Sie kennenzulernen und Ihnen den Alltag zu erleichtern!
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