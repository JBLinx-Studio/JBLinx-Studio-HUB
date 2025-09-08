
// DOM manipulation and rendering optimizations

class DOMOptimizer {
  private mutationBatcher = {
    queue: [] as (() => void)[],
    isScheduled: false
  };

  // Batch DOM mutations to prevent layout thrashing
  batchDOMUpdates(mutations: (() => void)[]) {
    this.mutationBatcher.queue.push(...mutations);
    
    if (!this.mutationBatcher.isScheduled) {
      this.mutationBatcher.isScheduled = true;
      requestAnimationFrame(() => {
        this.mutationBatcher.queue.forEach(mutation => mutation());
        this.mutationBatcher.queue = [];
        this.mutationBatcher.isScheduled = false;
      });
    }
  }

  // Optimize scroll performance
  createOptimizedScrollHandler(
    callback: (scrollY: number) => void,
    throttleMs: number = 16
  ) {
    let ticking = false;
    let lastScrollY = 0;

    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (Math.abs(currentScrollY - lastScrollY) > 1) {
            callback(currentScrollY);
            lastScrollY = currentScrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
  }

  // Efficient element visibility detection
  createVisibilityObserver(
    callback: (entries: IntersectionObserverEntry[]) => void,
    options: IntersectionObserverInit = {}
  ) {
    const defaultOptions = {
      rootMargin: '50px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
      ...options
    };

    return new IntersectionObserver(callback, defaultOptions);
  }

  // Optimize CSS animations
  optimizeAnimations() {
    // Enable CSS containment for better performance
    const style = document.createElement('style');
    style.textContent = `
      .animate-fade-in, .animate-scale-in, .animate-slide-in-right {
        contain: layout style paint;
        will-change: transform, opacity;
      }
      
      .hover-scale {
        contain: layout;
        will-change: transform;
      }
      
      /* Optimize common animations */
      @keyframes optimized-fade-in {
        from { opacity: 0; transform: translate3d(0, 10px, 0); }
        to { opacity: 1; transform: translate3d(0, 0, 0); }
      }
      
      .animate-fade-in {
        animation: optimized-fade-in 0.3s ease-out;
      }
    `;
    document.head.appendChild(style);
  }

  // Preload critical CSS
  preloadCriticalCSS(cssUrls: string[]) {
    cssUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = url;
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    });
  }

  // Optimize images loading
  optimizeImages() {
    // Add loading="lazy" to images that don't have it
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
      (img as HTMLImageElement).loading = 'lazy';
      (img as HTMLImageElement).decoding = 'async';
    });
  }
}

export const domOptimizer = new DOMOptimizer();

// Initialize optimizations
if (typeof window !== 'undefined') {
  // Apply optimizations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      domOptimizer.optimizeAnimations();
      domOptimizer.optimizeImages();
    });
  } else {
    domOptimizer.optimizeAnimations();
    domOptimizer.optimizeImages();
  }
}
