
// Advanced request optimization and caching utilities

class RequestOptimizer {
  private cache = new Map<string, { data: any; timestamp: number; ttl: number }>();
  private pendingRequests = new Map<string, Promise<any>>();
  private requestQueue: Array<() => Promise<any>> = [];
  private isProcessingQueue = false;
  private maxConcurrentRequests = 6;
  private activeRequests = 0;

  // Intelligent caching with TTL
  async cachedFetch<T>(url: string, ttlMs: number = 300000): Promise<T> {
    const cacheKey = url;
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < cached.ttl) {
      return cached.data;
    }

    // Prevent duplicate requests
    if (this.pendingRequests.has(cacheKey)) {
      return this.pendingRequests.get(cacheKey);
    }

    const request = this.queuedFetch<T>(url).then(data => {
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now(),
        ttl: ttlMs
      });
      this.pendingRequests.delete(cacheKey);
      return data;
    });

    this.pendingRequests.set(cacheKey, request);
    return request;
  }

  // Request queuing to prevent overwhelming the browser
  private async queuedFetch<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this.requestQueue.push(async () => {
        this.activeRequests++;
        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const data = await response.json();
          resolve(data);
        } catch (error) {
          reject(error);
        } finally {
          this.activeRequests--;
        }
      });
      
      this.processQueue();
    });
  }

  private async processQueue() {
    if (this.isProcessingQueue || this.activeRequests >= this.maxConcurrentRequests) {
      return;
    }

    this.isProcessingQueue = true;
    
    while (this.requestQueue.length > 0 && this.activeRequests < this.maxConcurrentRequests) {
      const request = this.requestQueue.shift();
      if (request) {
        request();
      }
    }
    
    this.isProcessingQueue = false;
  }

  // Preload critical resources
  preloadResources(urls: string[]) {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  // Clear expired cache entries
  clearExpiredCache() {
    const now = Date.now();
    for (const [key, value] of this.cache.entries()) {
      if (now - value.timestamp > value.ttl) {
        this.cache.delete(key);
      }
    }
  }

  // Get cache statistics
  getCacheStats() {
    return {
      size: this.cache.size,
      pendingRequests: this.pendingRequests.size,
      queuedRequests: this.requestQueue.length,
      activeRequests: this.activeRequests
    };
  }
}

export const requestOptimizer = new RequestOptimizer();

// Auto-cleanup expired cache every 5 minutes
setInterval(() => {
  requestOptimizer.clearExpiredCache();
}, 300000);
