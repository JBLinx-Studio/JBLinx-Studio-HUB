
import { useEffect, useState, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = 'up',
    threshold = 0.1
  } = options;

  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Check if element is in viewport
      const inViewport = elementTop < windowHeight * (1 + threshold) && 
                        elementTop + elementHeight > -windowHeight * threshold;
      
      setIsVisible(inViewport);

      if (inViewport) {
        // Calculate parallax offset based on scroll position
        const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        let newOffset = 0;
        const parallaxAmount = (clampedProgress - 0.5) * speed * 100;
        
        switch (direction) {
          case 'up':
            newOffset = parallaxAmount;
            break;
          case 'down':
            newOffset = -parallaxAmount;
            break;
          case 'left':
            newOffset = parallaxAmount;
            break;
          case 'right':
            newOffset = -parallaxAmount;
            break;
        }
        
        setOffset(newOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction, threshold]);

  return { elementRef, offset, isVisible };
};

export const useMultiLayerParallax = () => {
  const background = useParallax({ speed: 0.8, direction: 'up' });
  const midground = useParallax({ speed: 0.4, direction: 'down' });
  const foreground = useParallax({ speed: 0.2, direction: 'up' });
  
  return { background, midground, foreground };
};
