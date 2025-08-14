
import React, { Suspense, lazy, memo } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface LazyComponentProps {
  importFunc: () => Promise<{ default: React.ComponentType<any> }>;
  fallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  props?: any;
  className?: string;
}

const LazyComponent: React.FC<LazyComponentProps> = memo(({
  importFunc,
  fallback = <div className="h-32 bg-muted/20 animate-pulse rounded-lg" />,
  threshold = 0.1,
  rootMargin = '100px',
  props = {},
  className = ''
}) => {
  const { targetRef, isIntersecting, hasBeenVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true
  });

  // Lazy load component only when visible
  const LazyLoadedComponent = hasBeenVisible ? lazy(importFunc) : null;

  return (
    <div ref={targetRef as React.RefObject<HTMLDivElement>} className={className}>
      {LazyLoadedComponent ? (
        <Suspense fallback={fallback}>
          <LazyLoadedComponent {...props} />
        </Suspense>
      ) : (
        isIntersecting ? fallback : <div className="h-32" />
      )}
    </div>
  );
});

LazyComponent.displayName = 'LazyComponent';

export default LazyComponent;
