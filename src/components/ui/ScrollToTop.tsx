import { useState, useEffect, type FC } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts';

export const ScrollToTop: FC = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button only when scrolling up and not at the top
      if (currentScrollY < lastScrollY && currentScrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-40 px-6 py-3 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 hover:bg-primary-700 hover:scale-105 hover:shadow-xl hover:shadow-primary-600/40 transition-all duration-300 flex items-center gap-2 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
      <span className="font-medium whitespace-nowrap">
        {language === 'id' ? 'Kembali ke Atas' : 'Back to Top'}
      </span>
    </button>
  );
};
