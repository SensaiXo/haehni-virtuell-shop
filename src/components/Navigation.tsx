
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
    <nav className="bg-primary shadow-sm border-b border-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/09cc67d5-a2fd-4e02-9403-a4dbd8ed55fb.png" 
                alt="BÜRODIENSTLEISTUNGEN Hähni Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2 xl:space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`px-2 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors duration-200 flex items-center space-x-1 whitespace-nowrap ${
                          isDropdownActive(item.dropdown)
                            ? 'bg-primary-foreground/10 text-primary-foreground'
                            : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'
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
                      className={`px-2 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                        isActive(item.path)
                          ? 'bg-primary-foreground/10 text-primary-foreground'
                          : 'text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground'
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
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <div className="flex items-center space-x-2 text-xs xl:text-sm text-primary-foreground/80">
              <Mail className="w-4 h-4" />
              <span className="hidden xl:inline">info@bdlh.ch</span>
            </div>
            <LanguageToggle />
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs xl:text-sm px-3 xl:px-4">
              <a href="https://calendly.com/swissfinanceai/30min" target="_blank" rel="noopener noreferrer">
                {t('cta.booking')}
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 flex items-center justify-between ${
                          isDropdownActive(item.dropdown)
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
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
                                  ? 'bg-blue-100 text-blue-700'
                                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
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
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-3 py-2 border-t mt-2">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>info@bdlh.ch</span>
                  </div>
                  <LanguageToggle />
                </div>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
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
