// Advanced performance enhancement utilities with cutting-edge optimization techniques

import { debounce, throttle } from './performanceOptimizer';

class PerformanceEnhancer {
  private rafQueue: Set<() => void> = new Set();
  private isRafRunning = false;
  private fpsTarget = 60;
  private adaptiveQuality = true;
  private performanceMetrics = {
    fps: 60,
    memory: 0,
    renderTime: 0,
    frameDrops: 0
  };

  // Advanced RequestAnimationFrame scheduler with priority queuing
  scheduleRender(callback: () => void, priority: 'high' | 'normal' | 'low' = 'normal') {
    if (priority === 'high') {
      // High priority tasks go to front of queue
      const highPriorityQueue = Array.from(this.rafQueue);
      this.rafQueue.clear();
      this.rafQueue.add(callback);
      highPriorityQueue.forEach(cb => this.rafQueue.add(cb));
    } else {
      this.rafQueue.add(callback);
    }

    if (!this.isRafRunning) {
      this.startRafLoop();
    }
  }

  private startRafLoop() {
    this.isRafRunning = true;
    const loop = (timestamp: number) => {
      if (this.rafQueue.size === 0) {
        this.isRafRunning = false;
        return;
      }

      const frameStart = performance.now();
      const targetFrameTime = 1000 / this.fpsTarget;

      // Execute callbacks with time budget
      const callbacks = Array.from(this.rafQueue);
      this.rafQueue.clear();
      
      for (const callback of callbacks) {
        const callbackStart = performance.now();
        callback();
        const callbackTime = performance.now() - callbackStart;
        
        // Skip remaining callbacks if frame budget exceeded
        if (callbackTime > targetFrameTime * 0.8) {
          // Re-queue remaining callbacks for next frame
          const remaining = callbacks.slice(callbacks.indexOf(callback) + 1);
          remaining.forEach(cb => this.rafQueue.add(cb));
          break;
        }
      }

      const frameTime = performance.now() - frameStart;
      this.updatePerformanceMetrics(frameTime);

      if (this.rafQueue.size > 0 || this.isRafRunning) {
        requestAnimationFrame(loop);
      } else {
        this.isRafRunning = false;
      }
    };

    requestAnimationFrame(loop);
  }

  private updatePerformanceMetrics(frameTime: number) {
    this.performanceMetrics.renderTime = frameTime;
    this.performanceMetrics.fps = Math.round(1000 / frameTime);
    
    if (frameTime > 16.67) { // 60fps threshold
      this.performanceMetrics.frameDrops++;
    }

    // Adaptive quality adjustment
    if (this.adaptiveQuality) {
      if (this.performanceMetrics.fps < 45) {
        this.fpsTarget = Math.max(30, this.fpsTarget - 5);
      } else if (this.performanceMetrics.fps > 55) {
        this.fpsTarget = Math.min(60, this.fpsTarget + 2);
      }
    }
  }

  // Advanced DOM batching with mutation observer optimization
  batchDOMUpdates(updates: Array<() => void>) {
    return new Promise<void>((resolve) => {
      this.scheduleRender(() => {
        const fragment = document.createDocumentFragment();
        let tempContainer: HTMLElement | null = null;

        updates.forEach(update => {
          try {
            update();
          } catch (error) {
            console.warn('DOM update failed:', error);
          }
        });

        resolve();
      }, 'high');
    });
  }

  // Memory-aware asset preloader with priority system
  preloadAssets(assets: Array<{ url: string; type: 'image' | 'script' | 'style'; priority: number }>) {
    const sortedAssets = assets.sort((a, b) => b.priority - a.priority);
    const promises: Promise<void>[] = [];

    sortedAssets.forEach((asset, index) => {
      const promise = new Promise<void>((resolve, reject) => {
        // Stagger loading to prevent browser lockup
        setTimeout(() => {
          if (asset.type === 'image') {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = reject;
            img.src = asset.url;
          } else if (asset.type === 'script') {
            const script = document.createElement('script');
            script.onload = () => resolve();
            script.onerror = reject;
            script.src = asset.url;
            script.defer = true;
            document.head.appendChild(script);
          } else if (asset.type === 'style') {
            const link = document.createElement('link');
            link.onload = () => resolve();
            link.onerror = reject;
            link.rel = 'stylesheet';
            link.href = asset.url;
            document.head.appendChild(link);
          }
        }, index * 50); // 50ms stagger
      });

      promises.push(promise);
    });

    return Promise.allSettled(promises);
  }

  // Advanced intersection observer with adaptive margins
  createSmartObserver(
    callback: IntersectionObserverCallback,
    options: {
      rootMargin?: string;
      threshold?: number;
      adaptive?: boolean;
    } = {}
  ) {
    const { adaptive = true } = options;
    let rootMargin = options.rootMargin || '50px';
    
    if (adaptive) {
      // Adjust margins based on device performance
      const deviceMemory = (navigator as any).deviceMemory || 4;
      const connectionSpeed = (navigator as any).connection?.effectiveType || '4g';
      
      if (deviceMemory < 4 || connectionSpeed === '3g') {
        rootMargin = '20px';
      } else if (deviceMemory > 8 && connectionSpeed === '4g') {
        rootMargin = '100px';
      }
    }

    return new IntersectionObserver(callback, {
      rootMargin,
      threshold: options.threshold || 0.1
    });
  }

  // Smart cache with LRU eviction and size limits
  createSmartCache<T>(maxSize: number = 100, ttl: number = 300000) {
    const cache = new Map<string, { value: T; timestamp: number; accessCount: number }>();
    
    return {
      get: (key: string): T | null => {
        const item = cache.get(key);
        if (!item) return null;
        
        // Check TTL
        if (Date.now() - item.timestamp > ttl) {
          cache.delete(key);
          return null;
        }
        
        // Update access count and timestamp
        item.accessCount++;
        item.timestamp = Date.now();
        return item.value;
      },
      
      set: (key: string, value: T): void => {
        // Evict least recently used items if at capacity
        if (cache.size >= maxSize) {
          const entries = Array.from(cache.entries());
          entries.sort((a, b) => a[1].accessCount - b[1].accessCount);
          const toDelete = entries.slice(0, Math.floor(maxSize * 0.2)); // Remove 20%
          toDelete.forEach(([k]) => cache.delete(k));
        }
        
        cache.set(key, {
          value,
          timestamp: Date.now(),
          accessCount: 1
        });
      },
      
      clear: () => cache.clear(),
      size: () => cache.size
    };
  }

  // Advanced scroll performance with momentum and easing
  optimizeScrolling(element: HTMLElement, options: {
    smoothness?: number;
    threshold?: number;
    momentum?: boolean;
  } = {}) {
    const { smoothness = 0.1, threshold = 1, momentum = true } = options;
    let isScrolling = false;
    let scrollTarget = 0;
    let currentScroll = element.scrollTop;
    let velocity = 0;

    const smoothScroll = () => {
      if (!isScrolling) return;

      const diff = scrollTarget - currentScroll;
      if (Math.abs(diff) < threshold) {
        isScrolling = false;
        element.scrollTop = scrollTarget;
        return;
      }

      if (momentum) {
        velocity += diff * smoothness;
        velocity *= 0.95; // Friction
        currentScroll += velocity;
      } else {
        currentScroll += diff * smoothness;
      }

      element.scrollTop = currentScroll;
      this.scheduleRender(smoothScroll);
    };

    const handleScroll = throttle((e: Event) => {
      scrollTarget = element.scrollTop;
      if (!isScrolling) {
        currentScroll = scrollTarget;
        isScrolling = true;
        smoothScroll();
      }
    }, 16);

    element.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      element.removeEventListener('scroll', handleScroll);
      isScrolling = false;
    };
  }

  // Get current performance metrics
  getMetrics() {
    return { ...this.performanceMetrics };
  }

  // Enable/disable adaptive quality
  setAdaptiveQuality(enabled: boolean) {
    this.adaptiveQuality = enabled;
  }
}

export const performanceEnhancer = new PerformanceEnhancer();

// Advanced lazy loading with progressive enhancement
export const createProgressiveLoader = (
  element: HTMLElement,
  options: {
    placeholder?: string;
    blurAmount?: number;
    transition?: string;
    quality?: 'low' | 'medium' | 'high';
  } = {}
) => {
  const { 
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+',
    blurAmount = 10,
    transition = 'opacity 0.3s ease-out',
    quality = 'medium'
  } = options;

  const img = element as HTMLImageElement;
  const originalSrc = img.src || img.dataset.src;
  
  if (!originalSrc) return;

  // Set placeholder with blur effect
  img.style.filter = `blur(${blurAmount}px)`;
  img.style.transition = transition;
  img.src = placeholder;

  // Create intersection observer for loading
  const observer = performanceEnhancer.createSmartObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Determine optimal image quality based on device
          const devicePixelRatio = window.devicePixelRatio || 1;
          const connectionSpeed = (navigator as any).connection?.effectiveType || '4g';
          
          let qualityMultiplier = 1;
          if (quality === 'low' || connectionSpeed === '3g') {
            qualityMultiplier = 0.7;
          } else if (quality === 'high' && devicePixelRatio > 1) {
            qualityMultiplier = devicePixelRatio;
          }

          // Load the actual image
          const tempImg = new Image();
          tempImg.onload = () => {
            performanceEnhancer.scheduleRender(() => {
              img.src = originalSrc;
              img.style.filter = 'blur(0px)';
            });
          };
          tempImg.src = originalSrc;
          
          observer.unobserve(img);
        }
      });
    },
    { threshold: 0.1, adaptive: true }
  );

  observer.observe(img);
  
  return () => observer.unobserve(img);
};

// CSS-in-JS optimization for dynamic styles
export const optimizedStyler = {
  cache: new Map<string, HTMLStyleElement>(),
  
  inject: (styles: string, id?: string) => {
    const styleId = id || `style-${Date.now()}`;
    
    if (optimizedStyler.cache.has(styleId)) {
      return optimizedStyler.cache.get(styleId)!;
    }

    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = styles;
    
    performanceEnhancer.scheduleRender(() => {
      document.head.appendChild(styleElement);
    });
    
    optimizedStyler.cache.set(styleId, styleElement);
    return styleElement;
  },
  
  remove: (id: string) => {
    const element = optimizedStyler.cache.get(id);
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
      optimizedStyler.cache.delete(id);
    }
  }
};