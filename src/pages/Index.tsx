
import React, { memo, useMemo } from 'react';
import { useAdvancedPerformance } from '../hooks/useAdvancedPerformance';
import LazyComponent from '../components/common/LazyComponent';
import LazySection from '../components/common/LazySection';

// Memoized components for better performance
const MemoizedHero = memo(() => import('../components/Hero').then(m => ({ default: m.default })));
const MemoizedAbout = memo(() => import('../components/About').then(m => ({ default: m.default })));
const MemoizedServices = memo(() => import('../components/Services').then(m => ({ default: m.default })));
const MemoizedPortfolio = memo(() => import('../components/Portfolio').then(m => ({ default: m.default })));
const MemoizedStats = memo(() => import('../components/Stats').then(m => ({ default: m.default })));
const MemoizedBlog = memo(() => import('../components/FeaturedBlogCycle').then(m => ({ default: m.default })));
const MemoizedContact = memo(() => import('../components/Contact').then(m => ({ default: m.default })));
const MemoizedFooter = memo(() => import('../components/Footer').then(m => ({ default: m.default })));

const Index = () => {
  const { isLowPerformance } = useAdvancedPerformance();

  // Adaptive loading strategy based on performance
  const loadingConfig = useMemo(() => ({
    rootMargin: isLowPerformance ? '50px' : '100px',
    threshold: isLowPerformance ? 0.05 : 0.1,
    fallbackHeight: isLowPerformance ? 'h-48' : 'h-64'
  }), [isLowPerformance]);

  return (
    <div className="min-h-screen">
      {/* Hero loads immediately for better FCP */}
      <LazyComponent 
        importFunc={() => import('../components/Hero')}
        fallback={<div className={`${loadingConfig.fallbackHeight} bg-gradient-to-br from-background to-muted animate-pulse`} />}
        threshold={0}
        rootMargin="0px"
      />

      {/* About section with optimized lazy loading */}
      <LazySection 
        threshold={loadingConfig.threshold}
        rootMargin={loadingConfig.rootMargin}
        fallback={<div className={`${loadingConfig.fallbackHeight} bg-muted/20 animate-pulse`} />}
      >
        <LazyComponent 
          importFunc={() => import('../components/About')}
          threshold={loadingConfig.threshold}
          rootMargin={loadingConfig.rootMargin}
        />
      </LazySection>

      {/* Services section */}
      <LazySection 
        threshold={loadingConfig.threshold}
        rootMargin={loadingConfig.rootMargin}
        fallback={<div className={`${loadingConfig.fallbackHeight} bg-muted/10 animate-pulse`} />}
      >
        <LazyComponent 
          importFunc={() => import('../components/Services')}
          threshold={loadingConfig.threshold}
          rootMargin={loadingConfig.rootMargin}
        />
      </LazySection>

      {/* Portfolio section */}
      <LazySection 
        threshold={loadingConfig.threshold}
        rootMargin={loadingConfig.rootMargin}
        fallback={<div className={`${loadingConfig.fallbackHeight} bg-muted/30 animate-pulse`} />}
      >
        <LazyComponent 
          importFunc={() => import('../components/Portfolio')}
          threshold={loadingConfig.threshold}
          rootMargin={loadingConfig.rootMargin}
        />
      </LazySection>

      {/* Stats section - lower priority */}
      <LazySection 
        threshold={0.05}
        rootMargin="200px"
        fallback={<div className="h-32 bg-muted/20 animate-pulse" />}
      >
        <LazyComponent 
          importFunc={() => import('../components/Stats')}
          threshold={0.05}
          rootMargin="200px"
        />
      </LazySection>

      {/* Blog section - lower priority */}
      <LazySection 
        threshold={0.05}
        rootMargin="300px"
        fallback={<div className="h-96 bg-muted/15 animate-pulse" />}
      >
        <LazyComponent 
          importFunc={() => import('../components/FeaturedBlogCycle')}
          threshold={0.05}
          rootMargin="300px"
        />
      </LazySection>

      {/* Contact section - lowest priority */}
      <LazySection 
        threshold={0.02}
        rootMargin="400px"
        fallback={<div className="h-64 bg-muted/10 animate-pulse" />}
      >
        <LazyComponent 
          importFunc={() => import('../components/Contact')}
          threshold={0.02}
          rootMargin="400px"
        />
      </LazySection>

      {/* Footer - loads when almost at bottom */}
      <LazySection 
        threshold={0.01}
        rootMargin="500px"
        fallback={<div className="h-48 bg-background animate-pulse" />}
      >
        <LazyComponent 
          importFunc={() => import('../components/Footer')}
          threshold={0.01}
          rootMargin="500px"
        />
      </LazySection>
    </div>
  );
};

export default memo(Index);
