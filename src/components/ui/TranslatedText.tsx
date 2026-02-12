import { type FC, type ReactNode, type ElementType, useEffect, useState } from 'react';

interface TranslatedTextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/**
 * Wrapper component that adds smooth fade transition when text content changes
 * due to language switching
 */
export const TranslatedText: FC<TranslatedTextProps> = ({ 
  children, 
  className = '', 
  as: Component = 'span' 
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [content, setContent] = useState(children);

  useEffect(() => {
    if (content !== children) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setContent(children);
        setIsTransitioning(false);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [children, content]);

  return (
    <Component 
      className={`transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'} ${className}`}
    >
      {content}
    </Component>
  );
};
