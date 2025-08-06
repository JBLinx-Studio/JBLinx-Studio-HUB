
import { useEffect, useRef, useState } from 'react';

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();
          const elementTop = rect.top;
          const elementHeight = rect.height;
          const windowHeight = window.innerHeight;
          
          // Check if element is in viewport
          const inView = elementTop < windowHeight && (elementTop + elementHeight) > 0;
          setIsInView(inView);

          if (inView) {
            // Calculate scroll progress when element is in view
            const progress = Math.max(0, Math.min(1, 
              (windowHeight - elementTop) / (windowHeight + elementHeight)
            ));
            setScrollY(progress);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return { scrollY, isInView, elementRef };
};
