
import { useEffect, useRef, useCallback } from 'react';

interface UseSmartScrollOptions {
  throttleMs?: number;
  onScrollStart?: () => void;
  onScrollEnd?: () => void;
  onDirectionChange?: (direction: 'up' | 'down') => void;
}

export const useSmartScroll = (
  callback: (data: {
    scrollY: number;
    deltaY: number;
    direction: 'up' | 'down';
    isScrolling: boolean;
  }) => void,
  options: UseSmartScrollOptions = {}
) => {
  const { throttleMs = 8, onScrollStart, onScrollEnd, onDirectionChange } = options;
  
  const lastScrollY = useRef(0);
  const lastDirection = useRef<'up' | 'down'>('down');
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const rafId = useRef<number>();
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  const handleScroll = useCallback(() => {
    if (rafId.current) return;
    
    rafId.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY.current;
      const direction = deltaY > 0 ? 'down' : 'up';

      if (!isScrolling.current) {
        isScrolling.current = true;
        onScrollStart?.();
      }

      if (direction !== lastDirection.current) {
        lastDirection.current = direction;
        onDirectionChange?.(direction);
      }

      callbackRef.current({
        scrollY: currentScrollY,
        deltaY,
        direction,
        isScrolling: isScrolling.current,
      });

      lastScrollY.current = currentScrollY;
      rafId.current = undefined;

      // Reset scrolling state after inactivity
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (isScrolling.current) {
          isScrolling.current = false;
          onScrollEnd?.();
        }
      }, 150);
    });
  }, [onScrollStart, onScrollEnd, onDirectionChange]);

  useEffect(() => {
    let lastTime = 0;
    const throttledHandler = (e: Event) => {
      const now = Date.now();
      if (now - lastTime >= throttleMs) {
        lastTime = now;
        handleScroll();
      }
    };

    window.addEventListener('scroll', throttledHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandler);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll, throttleMs]);

  return { lastScrollY: lastScrollY.current, isScrolling: isScrolling.current };
};
