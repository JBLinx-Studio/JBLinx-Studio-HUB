
class ResourcePreloader {
  private cache = new Map<string, Promise<any>>();
  private priorities = new Map<string, number>();
  private loadedResources = new Set<string>();

  // Preload images with priority
  preloadImage(url: string, priority: number = 1): Promise<HTMLImageElement> {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.loadedResources.add(url);
        resolve(img);
      };
      img.onerror = reject;
      
      // Set fetch priority for modern browsers
      if ('fetchPriority' in img) {
        (img as any).fetchPriority = priority > 5 ? 'high' : 'low';
      }
      
      img.src = url;
    });

    this.cache.set(url, promise);
    this.priorities.set(url, priority);
    return promise;
  }

  // Preload CSS
  preloadCSS(href: string): Promise<void> {
    if (this.cache.has(href)) {
      return this.cache.get(href)!;
    }

    const promise = new Promise<void>((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => {
        this.loadedResources.add(href);
        resolve();
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });

    this.cache.set(href, promise);
    return promise;
  }

  // Preload JavaScript modules
  preloadScript(src: string): Promise<void> {
    if (this.cache.has(src)) {
      return this.cache.get(src)!;
    }

    const promise = new Promise<void>((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = src;
      link.onload = () => {
        this.loadedResources.add(src);
        resolve();
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });

    this.cache.set(src, promise);
    return promise;
  }

  // Preload fonts
  preloadFont(href: string, type: string = 'font/woff2'): Promise<void> {
    if (this.cache.has(href)) {
      return this.cache.get(href)!;
    }

    const promise = new Promise<void>((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = type;
      link.href = href;
      link.crossOrigin = 'anonymous';
      link.onload = () => {
        this.loadedResources.add(href);
        resolve();
      };
      link.onerror = reject;
      document.head.appendChild(link);
    });

    this.cache.set(href, promise);
    return promise;
  }

  // Batch preload with priorities
  async preloadBatch(resources: Array<{
    url: string;
    type: 'image' | 'css' | 'script' | 'font';
    priority?: number;
  }>): Promise<void> {
    // Sort by priority
    const sortedResources = resources.sort((a, b) => 
      (b.priority || 1) - (a.priority || 1)
    );

    const promises = sortedResources.map(({ url, type, priority = 1 }) => {
      switch (type) {
        case 'image':
          return this.preloadImage(url, priority);
        case 'css':
          return this.preloadCSS(url);
        case 'script':
          return this.preloadScript(url);
        case 'font':
          return this.preloadFont(url);
        default:
          return Promise.resolve();
      }
    });

    await Promise.allSettled(promises);
  }

  // Check if resource is loaded
  isLoaded(url: string): boolean {
    return this.loadedResources.has(url);
  }

  // Get loading progress
  getProgress(): number {
    const total = this.cache.size;
    const loaded = this.loadedResources.size;
    return total === 0 ? 100 : Math.round((loaded / total) * 100);
  }

  // Clean up cache
  clearCache(): void {
    this.cache.clear();
    this.priorities.clear();
    this.loadedResources.clear();
  }
}

export const resourcePreloader = new ResourcePreloader();

// Auto-preload critical resources on idle
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  const preloadCriticalResources = () => {
    resourcePreloader.preloadBatch([
      { url: '/fonts/inter.woff2', type: 'font', priority: 10 },
      { url: '/images/hero-bg.webp', type: 'image', priority: 9 },
      // Add more critical resources here
    ]);
  };

  if (document.readyState === 'complete') {
    requestIdleCallback(preloadCriticalResources);
  } else {
    window.addEventListener('load', () => {
      requestIdleCallback(preloadCriticalResources);
    });
  }
}
