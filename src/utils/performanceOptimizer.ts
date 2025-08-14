
// Performance optimization utilities for the entire website
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private observers: Map<string, IntersectionObserver> = new Map();
  private rafCallbacks: Set<FrameRequestCallback> = new Set();
  private rafId: number | null = null;

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  // Optimized intersection observer for lazy loading
  createLazyLoadObserver(callback: (entries: IntersectionObserverEntry[]) => void): IntersectionObserver {
    const observerId = `lazy-${Date.now()}`;
    const observer = new IntersectionObserver(callback, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });
    
    this.observers.set(observerId, observer);
    return observer;
  }

  // Debounced scroll handler
  createDebouncedScroll(callback: () => void, delay: number = 16): () => void {
    let timeoutId: number;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(callback, delay);
    };
  }

  // Throttled resize handler
  createThrottledResize(callback: () => void, delay: number = 100): () => void {
    let lastTime = 0;
    return () => {
      const now = Date.now();
      if (now - lastTime >= delay) {
        callback();
        lastTime = now;
      }
    };
  }

  // Batch RAF calls for better performance
  addRafCallback(callback: FrameRequestCallback): void {
    this.rafCallbacks.add(callback);
    if (!this.rafId) {
      this.startRafLoop();
    }
  }

  removeRafCallback(callback: FrameRequestCallback): void {
    this.rafCallbacks.delete(callback);
    if (this.rafCallbacks.size === 0 && this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private startRafLoop(): void {
    const loop = (timestamp: number) => {
      this.rafCallbacks.forEach(callback => callback(timestamp));
      if (this.rafCallbacks.size > 0) {
        this.rafId = requestAnimationFrame(loop);
      }
    };
    this.rafId = requestAnimationFrame(loop);
  }

  // Image optimization utility
  static optimizeImage(src: string, width?: number, height?: number): string {
    // Add webp support detection and optimization
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      return canvas.toDataURL('image/webp').indexOf('webp') > -1;
    };

    if (supportsWebP() && !src.includes('.webp')) {
      const extension = src.split('.').pop();
      const optimizedSrc = src.replace(`.${extension}`, '.webp');
      return optimizedSrc;
    }
    
    return src;
  }

  // Memory cleanup utility
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
    
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    
    this.rafCallbacks.clear();
  }
}

// React hook for performance optimization
export const usePerformanceOptimization = () => {
  const optimizer = PerformanceOptimizer.getInstance();
  
  const createLazyLoader = (callback: (entries: IntersectionObserverEntry[]) => void) => {
    return optimizer.createLazyLoadObserver(callback);
  };
  
  const createDebouncedHandler = (callback: () => void, delay?: number) => {
    return optimizer.createDebouncedScroll(callback, delay);
  };
  
  const createThrottledHandler = (callback: () => void, delay?: number) => {
    return optimizer.createThrottledResize(callback, delay);
  };
  
  return {
    createLazyLoader,
    createDebouncedHandler,
    createThrottledHandler,
    addRafCallback: optimizer.addRafCallback.bind(optimizer),
    removeRafCallback: optimizer.removeRafCallback.bind(optimizer)
  };
};
