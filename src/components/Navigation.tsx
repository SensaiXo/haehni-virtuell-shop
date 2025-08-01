
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { 
      name: t('nav.services_packages'), 
      path: null,
      dropdown: [
        { name: t('nav.services_overview'), path: '/leistungen' },
        { name: t('nav.pricing_packages'), path: '/products' },
        { name: t('nav.book_now'), path: '/buchung' },
      ]
    },
    { 
      name: t('nav.about_contact'), 
      path: null,
      dropdown: [
        { name: t('nav.about_us'), path: '/ueber-uns' },
        { name: t('nav.contact_info'), path: '/kontakt' },
        { name: t('nav.faq'), path: '/faq' },
      ]
    },
    { name: t('nav.blog'), path: '/blog' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (dropdown: any[]) => dropdown.some(item => isActive(item.path));

  const handleDropdownToggle = (itemName: string) => {
    setDropdownOpen(dropdownOpen === itemName ? null : itemName);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-[68px]">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-navy">bdlh.ch</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`px-3 py-2 text-base font-medium transition-all duration-300 flex items-center space-x-1 whitespace-nowrap ${
                          isDropdownActive(item.dropdown)
                            ? 'text-navy border-b-2 border-accent'
                            : 'text-navy hover:text-accent'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {dropdownOpen === item.name && (
                        <div className="absolute left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50 py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={closeDropdown}
                              className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                isActive(subItem.path)
                                  ? 'bg-accent/10 text-accent'
                                  : 'text-card-foreground hover:bg-muted hover:text-accent'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 text-base font-medium transition-all duration-300 whitespace-nowrap relative ${
                        isActive(item.path)
                          ? 'text-navy border-b-2 border-accent'
                          : 'text-navy hover:text-accent'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info, Language Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <Mail className="w-6 h-6 text-navy cursor-pointer hover:text-navy/70 transition-colors" onClick={() => window.location.href = '/kontakt'} />
            <LanguageToggle />
            <Button asChild className="bg-navy hover:bg-navy/80 text-white text-base font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer">
                {t('cta.booking')}
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:bg-navy/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-navy/20">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between ${
                          isDropdownActive(item.dropdown)
                            ? 'bg-accent/10 text-accent'
                            : 'text-navy hover:bg-navy/10 hover:text-accent'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {dropdownOpen === item.name && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => {
                                setIsOpen(false);
                                closeDropdown();
                              }}
                              className={`block px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                                isActive(subItem.path)
                                  ? 'bg-accent/10 text-accent'
                                  : 'text-navy/80 hover:bg-navy/10 hover:text-accent'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'bg-accent/10 text-accent'
                          : 'text-navy hover:bg-navy/10 hover:text-accent'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-4 border-t border-navy/20 mt-4">
                <div className="flex items-center justify-between mb-4">
                  <Mail className="w-6 h-6 text-navy cursor-pointer hover:text-navy/70 transition-colors" onClick={() => window.location.href = '/kontakt'} />
                  <LanguageToggle />
                </div>
                <Button asChild className="w-full bg-navy hover:bg-navy/80 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    {t('cta.booking')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
