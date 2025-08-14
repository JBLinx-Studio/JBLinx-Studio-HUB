
import { useCallback, useEffect, useRef } from 'react';
import { throttle } from '../utils/performanceOptimizer';

interface UseOptimizedScrollOptions {
  throttleMs?: number;
  passive?: boolean;
}

export const useOptimizedScroll = (
  callback: (scrollY: number) => void,
  options: UseOptimizedScrollOptions = {}
) => {
  const { throttleMs = 16, passive = true } = options;
  const callbackRef = useRef(callback);
  
  // Update callback ref without causing re-renders
  callbackRef.current = callback;

  const throttledCallback = useCallback(
    throttle(() => {
      callbackRef.current(window.scrollY);
    }, throttleMs),
    [throttleMs]
  );

  useEffect(() => {
    const handleScroll = () => {
      throttledCallback();
    };

    window.addEventListener('scroll', handleScroll, { passive });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [throttledCallback, passive]);
};
