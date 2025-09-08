// Performance optimization utilities for the entire website

// Throttle function for expensive operations
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Debounce function for user input
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Enhanced AnimationScheduler with performance monitoring
class AnimationScheduler {
  private callbacks: Set<() => void> = new Set();
  private isRunning = false;
  private frameRate = 60;
  private lastFrameTime = 0;
  private frameCount = 0;
  private performanceMode: 'high' | 'medium' | 'low' = 'high';

  add(callback: () => void) {
    this.callbacks.add(callback);
    if (!this.isRunning) {
      this.start();
    }
  }

  remove(callback: () => void) {
    this.callbacks.delete(callback);
    if (this.callbacks.size === 0) {
      this.stop();
    }
  }

  // Adaptive performance mode
  setPerformanceMode(mode: 'high' | 'medium' | 'low') {
    this.performanceMode = mode;
    this.frameRate = mode === 'high' ? 60 : mode === 'medium' ? 45 : 30;
  }

  private start() {
    this.isRunning = true;
    this.tick();
  }

  private stop() {
    this.isRunning = false;
  }

  private tick = () => {
    if (!this.isRunning) return;
    
    const now = performance.now();
    const targetFrameTime = 1000 / this.frameRate;
    
    // Skip frame if we're running too fast
    if (now - this.lastFrameTime < targetFrameTime) {
      requestAnimationFrame(this.tick);
      return;
    }
    
    this.lastFrameTime = now;
    this.frameCount++;
    
    // Performance monitoring every 2 seconds
    if (this.frameCount % 120 === 0) {
      this.monitorPerformance();
    }
    
    // Execute callbacks with error handling
    const callbacksArray = Array.from(this.callbacks);
    const batchSize = this.performanceMode === 'high' ? callbacksArray.length : 
                     this.performanceMode === 'medium' ? Math.ceil(callbacksArray.length / 2) : 
                     Math.ceil(callbacksArray.length / 3);
    
    for (let i = 0; i < batchSize; i++) {
      try {
        callbacksArray[i]?.();
      } catch (error) {
        console.warn('Animation callback error:', error);
      }
    }

    if (this.callbacks.size > 0) {
      requestAnimationFrame(this.tick);
    } else {
      this.stop();
    }
  };

  private monitorPerformance() {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
      
      // Adjust performance mode based on memory usage
      if (memoryUsage > 0.8) {
        this.setPerformanceMode('low');
      } else if (memoryUsage > 0.6) {
        this.setPerformanceMode('medium');
      } else {
        this.setPerformanceMode('high');
      }
    }
  }
}

export const animationScheduler = new AnimationScheduler();

// Image preloader for better performance
export const preloadImages = (urls: string[]): Promise<void[]> => {
  return Promise.all(
    urls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = reject;
        img.src = url;
      });
    })
  );
};

// Memory-efficient array operations
export const batchProcess = <T>(
  items: T[],
  batchSize: number,
  processor: (batch: T[]) => void,
  delay = 0
) => {
  const batches = [];
  for (let i = 0; i < items.length; i += batchSize) {
    batches.push(items.slice(i, i + batchSize));
  }

  let currentBatch = 0;
  const processBatch = () => {
    if (currentBatch < batches.length) {
      processor(batches[currentBatch]);
      currentBatch++;
      if (delay > 0) {
        setTimeout(processBatch, delay);
      } else {
        requestAnimationFrame(processBatch);
      }
    }
  };

  processBatch();
};

// Enhanced memory management with automatic optimization
export const optimizePagePerformance = () => {
  // Enable passive listeners for better scroll performance
  let supportsPassive = false;
  try {
    const opts = Object.defineProperty({}, 'passive', {
      get: () => {
        supportsPassive = true;
        return true;
      }
    });
    window.addEventListener('testPassive', () => {}, opts);
    window.removeEventListener('testPassive', () => {}, opts);
  } catch (e) {}

  // Optimize critical rendering path
  const optimizeCriticalPath = () => {
    // Preload critical resources
    const criticalResources = [
      '/src/components/Hero.tsx',
      '/src/components/About.tsx'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = resource;
      document.head.appendChild(link);
    });
    
    // Optimize font loading
    document.fonts.ready.then(() => {
      document.body.classList.add('fonts-loaded');
    });
  };

  // Initialize optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeCriticalPath);
  } else {
    optimizeCriticalPath();
  }
};

// Auto-initialize performance optimizations
if (typeof window !== 'undefined') {
  optimizePagePerformance();
}
