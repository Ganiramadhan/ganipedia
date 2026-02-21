import { useEffect, type FC } from 'react';
import { useLanguage } from '@/contexts';

declare global {
  interface Window {
    tidioChatApi?: {
      show: () => void;
      hide: () => void;
      open: () => void;
      close: () => void;
      display: (value: boolean) => void;
      on: (event: string, callback: () => void) => void;
      setColorPalette: (color: string) => void;
      messageFromVisitor: (message: string) => void;
    };
  }
}

export const ChatWidget: FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const checkTidio = setInterval(() => {
      if (window.tidioChatApi) {
        clearInterval(checkTidio);
        
        window.tidioChatApi.on('ready', () => {
          console.log('Tidio chat is ready');
          
        });
      }
    }, 100);

    return () => {
      clearInterval(checkTidio);
    };
  }, [language]);

  return null;
};
