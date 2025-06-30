
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BH</span>
              </div>
              <div>
                <span className="text-xl font-bold">Bürodienstleistungen</span>
                <span className="text-blue-400 ml-1">Hähni</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Ihr zuverlässiger Partner für alle kaufmännischen Aufgaben. 
              Virtuelle Sachbearbeitung – remote, flexibel und transparent.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:info@bdlh.ch" className="text-gray-300 hover:text-white transition-colors">
                  info@bdlh.ch
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Frauenfeld, Thurgau, Schweiz</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Startseite</Link></li>
              <li><Link to="/leistungen" className="text-gray-300 hover:text-white transition-colors">Leistungen</Link></li>
              <li><Link to="/buchung" className="text-gray-300 hover:text-white transition-colors">Online-Buchung</Link></li>
              <li><Link to="/ueber-uns" className="text-gray-300 hover:text-white transition-colors">Über uns</Link></li>
              <li><Link to="/kontakt" className="text-gray-300 hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Buchhaltung</span></li>
              <li><span className="text-gray-300">Personalwesen</span></li>
              <li><span className="text-gray-300">Virtuelle Assistenz</span></li>
              <li><span className="text-gray-300">Online-Recherche</span></li>
              <li><span className="text-gray-300">Administration</span></li>
              <li><span className="text-gray-300">Beratung</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Bürodienstleistungen Hähni. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6">
              <Link to="/datenschutz" className="text-gray-400 hover:text-white text-sm transition-colors">
                Datenschutz
              </Link>
              <Link to="/impressum" className="text-gray-400 hover:text-white text-sm transition-colors">
                Impressum
              </Link>
              <Link to="/agb" className="text-gray-400 hover:text-white text-sm transition-colors">
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
