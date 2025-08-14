
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { createIntersectionObserver } from '../../utils/performanceOptimizer';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  fallback?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '150px', // Increased for better UX
  fallback
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Memoize fallback to prevent re-renders
  const memoizedFallback = useMemo(() => 
    fallback || <div className="h-96 bg-slate-950/30 animate-pulse rounded-lg" />,
    [fallback]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasLoaded) return;

    const observer = createIntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? children : memoizedFallback}
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(LazySection);
