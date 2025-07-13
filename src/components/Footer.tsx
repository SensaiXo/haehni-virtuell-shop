
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-sm border-t border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-[#8AA6C1] to-[#B8CCDE] px-4 py-2 rounded-lg">
                <span className="text-white font-bold text-xl">bdlh.ch</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Ihr zuverlässiger Partner für alle kaufmännischen Aufgaben. 
              Virtuelle Sachbearbeitung – remote, flexibel und transparent.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8AA6C1]" />
                <a href="mailto:info@bdlh.ch" className="text-gray-600 hover:text-[#8AA6C1] transition-colors">
                  info@bdlh.ch
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#8AA6C1]" />
                <span className="text-gray-600">Frauenfeld, Thurgau, Schweiz</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-[#8AA6C1] transition-colors">Startseite</Link></li>
              <li><Link to="/leistungen" className="text-gray-600 hover:text-[#8AA6C1] transition-colors">Leistungen</Link></li>
              <li><Link to="/buchung" className="text-gray-600 hover:text-[#8AA6C1] transition-colors">Online-Buchung</Link></li>
              <li><Link to="/ueber-uns" className="text-gray-600 hover:text-[#8AA6C1] transition-colors">Über uns</Link></li>
              <li><Link to="/kontakt" className="text-gray-600 hover:text-[#8AA6C1] transition-colors">Kontakt</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-[#8AA6C1] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Leistungen</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-600">Buchhaltung</span></li>
              <li><span className="text-gray-600">Personalwesen</span></li>
              <li><span className="text-gray-600">Virtuelle Assistenz</span></li>
              <li><span className="text-gray-600">Online-Recherche</span></li>
              <li><span className="text-gray-600">Administration</span></li>
              <li><span className="text-gray-600">Beratung</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2024 bdlh.ch. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6">
              <Link to="/datenschutz" className="text-gray-500 hover:text-[#8AA6C1] text-sm transition-colors">
                Datenschutz
              </Link>
              <Link to="/impressum" className="text-gray-500 hover:text-[#8AA6C1] text-sm transition-colors">
                Impressum
              </Link>
              <Link to="/agb" className="text-gray-500 hover:text-[#8AA6C1] text-sm transition-colors">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
