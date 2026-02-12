import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts';

/**
 * Hook to handle smooth transitions when language changes
 * Returns isTransitioning state and current language
 */
export const useLanguageTransition = (transitionDuration = 300) => {
  const { language } = useLanguage();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLanguage, setDisplayLanguage] = useState(language);

  useEffect(() => {
    if (language !== displayLanguage) {
      setIsTransitioning(true);
      
      // Wait for fade out
      const fadeOutTimer = setTimeout(() => {
        setDisplayLanguage(language);
      }, transitionDuration / 2);

      // Complete transition
      const completeTimer = setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);

      return () => {
        clearTimeout(fadeOutTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [language, displayLanguage, transitionDuration]);

  return { isTransitioning, displayLanguage };
};
