
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

// RAF-based animation scheduler
class AnimationScheduler {
  private callbacks: Set<() => void> = new Set();
  private isRunning = false;

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
  }

  private tick = () => {
    if (!this.isRunning) return;
    
    this.callbacks.forEach(callback => {
      try {
        callback();
      } catch (error) {
        console.error('Animation callback error:', error);
      }
    });

    if (this.callbacks.size > 0) {
      requestAnimationFrame(this.tick);
    } else {
      this.stop();
    }
  };
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
