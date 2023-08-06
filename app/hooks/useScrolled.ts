'use client'
// hooks/useScrolled.ts
import { useEffect } from 'react';

export const useScrolled = () => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        document.body.classList.add('scrolled');
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          document.body.classList.remove('scrolled');
        }, 150); // adjust delay as needed
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};




