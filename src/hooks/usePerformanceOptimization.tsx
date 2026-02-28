import { useEffect, useCallback } from 'react';
import { performanceEnhancer } from '../utils/performanceEnhancer';

export const usePerformanceOptimization = () => {
  // Auto-optimize on mount
  useEffect(() => {
    const deviceMemory = (navigator as any).deviceMemory || 4;
    const connectionSpeed = (navigator as any).connection?.effectiveType || '4g';
    
    // Apply immediate optimizations for low-end devices
    if (deviceMemory < 4 || connectionSpeed === '3g') {
      document.documentElement.style.setProperty('--animation-duration', '0.2s');
      document.documentElement.style.setProperty('--particle-quality', '0.5');
    }

    // Preload critical assets
    performanceEnhancer.preloadAssets([
      { url: '/assets/critical.css', type: 'style', priority: 10 },
      { url: '/assets/hero-bg.webp', type: 'image', priority: 8 }
    ]);
  }, []);

  const optimizeForDevice = useCallback(() => {
    performanceEnhancer.setAdaptiveQuality(true);
  }, []);

  return { optimizeForDevice };
};