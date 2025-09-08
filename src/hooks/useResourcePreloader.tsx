
import { useEffect, useCallback, useRef } from 'react';
import { useAdvancedPerformance } from './useAdvancedPerformance';

interface ResourcePreloaderOptions {
  priority?: 'high' | 'medium' | 'low';
  timeout?: number;
}

export const useResourcePreloader = () => {
  const { isLowPerformance } = useAdvancedPerformance();
  const preloadedResources = useRef<Set<string>>(new Set());

  const preloadComponent = useCallback(async (
    importFunc: () => Promise<any>,
    key: string,
    options: ResourcePreloaderOptions = {}
  ) => {
    if (preloadedResources.current.has(key)) return;
    
    const { priority = 'medium', timeout = 5000 } = options;
    
    // Skip low-priority preloading on low-performance devices
    if (isLowPerformance && priority === 'low') return;
    
    try {
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Preload timeout')), timeout)
      );
      
      await Promise.race([importFunc(), timeoutPromise]);
      preloadedResources.current.add(key);
    } catch (error) {
      console.warn(`Failed to preload resource: ${key}`, error);
    }
  }, [isLowPerformance]);

  const preloadImage = useCallback((src: string, priority: 'high' | 'medium' | 'low' = 'medium') => {
    if (preloadedResources.current.has(src)) return;
    
    const img = new Image();
    if (priority === 'high') {
      img.fetchPriority = 'high';
    }
    
    img.onload = () => preloadedResources.current.add(src);
    img.onerror = () => console.warn(`Failed to preload image: ${src}`);
    img.src = src;
  }, []);

  const preloadCSSModule = useCallback((cssUrl: string) => {
    if (preloadedResources.current.has(cssUrl)) return;
    
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = cssUrl;
    link.onload = () => {
      link.rel = 'stylesheet';
      preloadedResources.current.add(cssUrl);
    };
    document.head.appendChild(link);
  }, []);

  return {
    preloadComponent,
    preloadImage,
    preloadCSSModule,
    isResourcePreloaded: (key: string) => preloadedResources.current.has(key)
  };
};
