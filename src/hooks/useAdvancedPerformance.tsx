import { useState, useEffect, useRef, useCallback } from 'react';
import { performanceEnhancer } from '../utils/performanceEnhancer';

interface PerformanceMetrics {
  fps: number;
  memory: number;
  renderTime: number;
  domNodes: number;
  networkLatency: number;
  batteryLevel: number;
  connectionType: string;
  deviceMemory: number;
  isLowEndDevice: boolean;
}

export const useAdvancedPerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: 0,
    renderTime: 0,
    domNodes: 0,
    networkLatency: 0,
    batteryLevel: 1,
    connectionType: '4g',
    deviceMemory: 4,
    isLowEndDevice: false
  });

  const [isOptimized, setIsOptimized] = useState(false);
  const metricsRef = useRef<PerformanceMetrics>(metrics);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Performance monitoring with comprehensive metrics
  const startMonitoring = useCallback(() => {
    let animationId: number;

    const updateMetrics = () => {
      const now = performance.now();
      frameCountRef.current++;

      if (now - lastTimeRef.current >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current));
        
        // Gather comprehensive metrics
        const newMetrics: PerformanceMetrics = {
          fps,
          memory: (performance as any).memory ? 
            Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) : 0,
          renderTime: Math.round(now - lastTimeRef.current),
          domNodes: document.querySelectorAll('*').length,
          networkLatency: getNetworkLatency(),
          batteryLevel: getBatteryLevel(),
          connectionType: getConnectionType(),
          deviceMemory: getDeviceMemory(),
          isLowEndDevice: isLowEndDevice()
        };

        setMetrics(newMetrics);
        metricsRef.current = newMetrics;
        
        frameCountRef.current = 0;
        lastTimeRef.current = now;

        // Auto-optimize based on metrics
        autoOptimize(newMetrics);
      }

      animationId = requestAnimationFrame(updateMetrics);
    };

    // Performance Observer for detailed timing
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'measure' || entry.entryType === 'mark') {
              console.log(`Performance ${entry.entryType}:`, entry.name, entry.duration);
            }
          });
        });
        
        observerRef.current.observe({ entryTypes: ['measure', 'mark', 'navigation'] });
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }

    updateMetrics();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Auto-optimization based on performance metrics
  const autoOptimize = useCallback((currentMetrics: PerformanceMetrics) => {
    if (isOptimized) return;

    const needsOptimization = 
      currentMetrics.fps < 45 ||
      currentMetrics.memory > 100 ||
      currentMetrics.isLowEndDevice ||
      currentMetrics.connectionType === '3g';

    if (needsOptimization) {
      applyOptimizations(currentMetrics);
      setIsOptimized(true);
    }
  }, [isOptimized]);

  // Apply performance optimizations
  const applyOptimizations = useCallback((currentMetrics: PerformanceMetrics) => {
    // Reduce animation quality on low-end devices
    if (currentMetrics.isLowEndDevice) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--particle-count', '10');
    }

    // Optimize images for slow connections
    if (currentMetrics.connectionType === '3g') {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.src && !img.src.includes('quality=')) {
          img.src = img.src + (img.src.includes('?') ? '&' : '?') + 'quality=60';
        }
      });
    }

    // Memory cleanup for high memory usage
    if (currentMetrics.memory > 80) {
      // Force garbage collection if available
      if ('gc' in window) {
        (window as any).gc();
      }
      
      // Clear unused caches
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => {
            if (name.includes('temp') || name.includes('old')) {
              caches.delete(name);
            }
          });
        });
      }
    }

    // Reduce particle count for low FPS
    if (currentMetrics.fps < 30) {
      const particleElements = document.querySelectorAll('[data-particle-count]');
      particleElements.forEach(el => {
        const currentCount = parseInt(el.getAttribute('data-particle-count') || '50');
        el.setAttribute('data-particle-count', Math.max(10, currentCount * 0.6).toString());
      });
    }
  }, []);

  // Manual optimization trigger
  const optimize = useCallback(() => {
    applyOptimizations(metricsRef.current);
    setIsOptimized(true);
  }, [applyOptimizations]);

  // Reset optimizations
  const resetOptimizations = useCallback(() => {
    document.documentElement.style.removeProperty('--animation-duration');
    document.documentElement.style.removeProperty('--particle-count');
    setIsOptimized(false);
  }, []);

  // Performance mark for timing critical operations
  const mark = useCallback((name: string) => {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(name);
    }
  }, []);

  // Performance measure between two marks
  const measure = useCallback((name: string, startMark: string, endMark?: string) => {
    if ('performance' in window && 'measure' in performance) {
      try {
        performance.measure(name, startMark, endMark);
      } catch (error) {
        console.warn('Performance measure failed:', error);
      }
    }
  }, []);

  useEffect(() => {
    const cleanup = startMonitoring();
    return cleanup;
  }, [startMonitoring]);

  return {
    metrics,
    isOptimized,
    optimize,
    resetOptimizations,
    mark,
    measure
  };
};

// Helper functions for metrics gathering
function getNetworkLatency(): number {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return connection.rtt || 0;
  }
  return 0;
}

function getBatteryLevel(): number {
  // Note: Battery API is deprecated, this is just for demonstration
  return 1;
}

function getConnectionType(): string {
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    return connection.effectiveType || '4g';
  }
  return '4g';
}

function getDeviceMemory(): number {
  if ('deviceMemory' in navigator) {
    return (navigator as any).deviceMemory || 4;
  }
  return 4;
}

function isLowEndDevice(): boolean {
  const deviceMemory = getDeviceMemory();
  const connectionType = getConnectionType();
  const userAgent = navigator.userAgent.toLowerCase();
  
  return (
    deviceMemory < 4 ||
    connectionType === '3g' ||
    userAgent.includes('mobile') && deviceMemory < 6
  );
}