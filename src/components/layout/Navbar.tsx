import { useState, useEffect, type FC } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { navigationItems } from '@/data';
import { Button } from '@/components/ui';
import { useScrollspy } from '@/hooks';
import { useLanguage } from '@/contexts';

// Flag components
const FlagID: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 16" fill="none">
    <rect width="24" height="8" fill="#FF0000" />
    <rect y="8" width="24" height="8" fill="#FFFFFF" />
  </svg>
);

const FlagEN: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 16" fill="none">
    <rect width="24" height="16" fill="#012169" />
    <path d="M0 0L24 16M24 0L0 16" stroke="white" strokeWidth="2" />
    <path d="M0 0L24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1" />
    <path d="M12 0V16M0 8H24" stroke="white" strokeWidth="4" />
    <path d="M12 0V16M0 8H24" stroke="#C8102E" strokeWidth="2" />
  </svg>
);

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  
  const sectionIds = navigationItems.map((item) => item.id);
  const activeSection = useScrollspy(sectionIds);

  const navLabels: Record<string, string> = {
    home: t('nav.home'),
    products: t('nav.products'),
    services: t('nav.services'),
    portfolio: t('nav.portfolio'),
    testimonials: t('nav.testimonials'),
    contact: t('nav.contact'),
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="w-10 h-10 bg-linear-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Gani<span className="text-primary-500">pedia</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-primary-600 bg-primary-50'
                      : isScrolled
                      ? 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {navLabels[item.id]}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Toggle & CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 border ${
                isScrolled
                  ? 'text-slate-600 hover:bg-slate-100 border-slate-200'
                  : 'text-white/90 hover:bg-white/10 border-white/20'
              }`}
              aria-label={`Switch to ${language === 'id' ? 'English' : 'Indonesian'}`}
            >
              {language === 'id' ? (
                <FlagID className="w-5 h-4 rounded-sm" />
              ) : (
                <FlagEN className="w-5 h-4 rounded-sm" />
              )}
              <span className="uppercase font-semibold">{language === 'id' ? 'ID' : 'EN'}</span>
            </button>
            <Button
              size="sm"
              onClick={() => handleNavClick('#contact')}
            >
              {t('nav.contactUs')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-125 pb-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-1 bg-white rounded-2xl p-4 shadow-xl">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`}
                >
                  {navLabels[item.id]}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-slate-600 hover:bg-slate-50 transition-colors border border-slate-200"
              >
                {language === 'id' ? (
                  <FlagID className="w-5 h-4 rounded-sm" />
                ) : (
                  <FlagEN className="w-5 h-4 rounded-sm" />
                )}
                <span>{language === 'id' ? 'Switch to English' : 'Ganti ke Indonesia'}</span>
              </button>
            </li>
            <li className="mt-2">
              <Button
                className="w-full"
                onClick={() => handleNavClick('#contact')}
              >
                {t('nav.contactUs')}
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
