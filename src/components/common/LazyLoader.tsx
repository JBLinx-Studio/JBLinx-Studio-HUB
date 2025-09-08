
import React, { useState, useRef, useEffect } from 'react';
import { usePerformanceOptimization } from '@/utils/performanceOptimizer';

interface LazyLoaderProps {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

const LazyLoader: React.FC<LazyLoaderProps> = ({
  children,
  placeholder = <div className="animate-pulse bg-gray-200 h-32 rounded" />,
  rootMargin = '50px',
  threshold = 0.1,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { createLazyLoader } = usePerformanceOptimization();

  useEffect(() => {
    if (!ref.current) return;

    const observer = createLazyLoader((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [createLazyLoader]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : placeholder}
    </div>
  );
};

export default LazyLoader;
