import { useState, useRef, useEffect, type FC, type ReactElement } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { useLanguage, type Language } from '@/contexts';

interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: ReactElement;
}

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

const languageOptions: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: <FlagEN className="w-5 h-4 rounded-sm shadow-sm" />,
  },
  {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Indonesia',
    flag: <FlagID className="w-5 h-4 rounded-sm shadow-sm" />,
  },
];

interface LanguageSelectorProps {
  isScrolled: boolean;
}

export const LanguageSelector: FC<LanguageSelectorProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage } = useLanguage();

  const currentLanguage = languageOptions.find((lang) => lang.code === language);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: Language) => {
    // Add slight delay for visual feedback
    setTimeout(() => {
      setLanguage(langCode);
      setIsOpen(false);
    }, 100);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 border ${
          isScrolled
            ? 'text-slate-700 bg-white hover:bg-slate-50 border-slate-200 shadow-sm'
            : 'text-white/95 bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-sm'
        }`}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        {currentLanguage?.flag}
        <span className="uppercase font-semibold hidden sm:inline">
          {currentLanguage?.code}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-xl shadow-xl border overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${
            isScrolled
              ? 'bg-white border-slate-200'
              : 'bg-white/95 backdrop-blur-md border-slate-200/50'
          }`}
        >
          {languageOptions.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                language === lang.code
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {lang.flag}
              <div className="flex flex-col">
                <span className="font-medium text-sm">{lang.name}</span>
                <span className="text-xs opacity-60">{lang.nativeName}</span>
              </div>
              {language === lang.code && (
                <svg
                  className="w-4 h-4 ml-auto text-primary-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
