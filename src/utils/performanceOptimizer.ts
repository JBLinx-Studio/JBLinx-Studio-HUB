// Performance optimization utilities for the entire website

// Throttle function for expensive operations
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
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

// Optimized Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '100px',
    threshold: 0.1,
    ...options,
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Efficient RAF-based animation scheduler
class AnimationScheduler {
  private callbacks: Set<() => void> = new Set();
  private isRunning = false;
  private rafId: number | null = null;

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

  private start() {
    this.isRunning = true;
    this.tick();
  }

  private stop() {
    this.isRunning = false;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private tick = () => {
    if (!this.isRunning) return;
    
    // Process callbacks in batches for better performance
    let processedCount = 0;
    const maxBatchSize = 5;
    
    for (const callback of this.callbacks) {
      if (processedCount >= maxBatchSize) break;
      
      try {
        callback();
        processedCount++;
      } catch (error) {
        console.error('Animation callback error:', error);
      }
    }

    if (this.callbacks.size > 0) {
      this.rafId = requestAnimationFrame(this.tick);
    } else {
      this.stop();
    }
  };
}

export const animationScheduler = new AnimationScheduler();

// Optimized image preloader
export const preloadImages = (urls: string[]): Promise<void[]> => {
  return Promise.all(
    urls.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Don't fail the whole batch
        img.src = url;
      });
    })
  );
};

// Memory-efficient batch processing
export const batchProcess = <T>(
  items: T[],
  batchSize: number,
  processor: (batch: T[]) => void,
  delay = 0
) => {
  if (items.length === 0) return;
  
  const batches = [];
  for (let i = 0; i < items.length; i += batchSize) {
    batches.push(items.slice(i, i + batchSize));
  }

  let currentBatch = 0;
  const processBatch = () => {
    if (currentBatch < batches.length) {
      try {
        processor(batches[currentBatch]);
      } catch (error) {
        console.error('Batch processing error:', error);
      }
      currentBatch++;
      
      if (currentBatch < batches.length) {
        if (delay > 0) {
          setTimeout(processBatch, delay);
        } else {
          requestAnimationFrame(processBatch);
        }
      }
    }
  };

  processBatch();
};

// Performance monitoring utility
export class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();
  private maxSamples = 100;

  startTimer(name: string): () => void {
    const start = performance.now();
    return () => {
      const duration = performance.now() - start;
      this.addMetric(name, duration);
    };
  }

  addMetric(name: string, value: number) {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    
    const samples = this.metrics.get(name)!;
    samples.push(value);
    
    // Keep only recent samples
    if (samples.length > this.maxSamples) {
      samples.shift();
    }
  }

  getAverage(name: string): number {
    const samples = this.metrics.get(name);
    if (!samples || samples.length === 0) return 0;
    
    return samples.reduce((sum, val) => sum + val, 0) / samples.length;
  }

  clear(name?: string) {
    if (name) {
      this.metrics.delete(name);
    } else {
      this.metrics.clear();
    }
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Viewport visibility optimization
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Memory cleanup utility
export const createCleanupManager = () => {
  const cleanupTasks: (() => void)[] = [];
  
  return {
    add: (task: () => void) => {
      cleanupTasks.push(task);
    },
    cleanup: () => {
      cleanupTasks.forEach(task => {
        try {
          task();
        } catch (error) {
          console.error('Cleanup task error:', error);
        }
      });
      cleanupTasks.length = 0;
    }
  };
};
