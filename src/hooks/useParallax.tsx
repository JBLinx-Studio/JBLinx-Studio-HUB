
import { useEffect, useState, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
  easing?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = 'up',
    threshold = 0.1,
    easing = 0.1
  } = options;

  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const targetOffset = useRef(0);
  const currentOffset = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Check if element is in viewport with threshold
      const inViewport = elementTop < windowHeight * (1 + threshold) && 
                        elementTop + elementHeight > -windowHeight * threshold;
      
      setIsVisible(inViewport);

      if (inViewport) {
        // Calculate parallax offset based on scroll position
        const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        let newOffset = 0;
        switch (direction) {
          case 'up':
            newOffset = (clampedProgress - 0.5) * speed * 100;
            break;
          case 'down':
            newOffset = -(clampedProgress - 0.5) * speed * 100;
            break;
          case 'left':
            newOffset = (clampedProgress - 0.5) * speed * 100;
            break;
          case 'right':
            newOffset = -(clampedProgress - 0.5) * speed * 100;
            break;
        }
        
        targetOffset.current = newOffset;
      }
    };

    const animate = () => {
      // Smooth interpolation using easing
      const diff = targetOffset.current - currentOffset.current;
      currentOffset.current += diff * easing;
      
      if (Math.abs(diff) > 0.01) {
        setOffset(currentOffset.current);
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const handleScrollThrottled = () => {
      handleScroll();
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });
    handleScrollThrottled(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, direction, threshold, easing]);

  return { elementRef, offset, isVisible };
};

export const useMultiLayerParallax = () => {
  const background = useParallax({ speed: 0.3, direction: 'up' });
  const midground = useParallax({ speed: 0.6, direction: 'down' });
  const foreground = useParallax({ speed: 0.1, direction: 'up' });
  
  return { background, midground, foreground };
};
