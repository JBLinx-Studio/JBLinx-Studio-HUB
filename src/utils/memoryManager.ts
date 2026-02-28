
// Memory management utilities for optimal performance

class MemoryManager {
  private cleanupTasks: (() => void)[] = [];
  private memoryThreshold = 50 * 1024 * 1024; // 50MB threshold
  
  addCleanupTask(task: () => void) {
    this.cleanupTasks.push(task);
  }

  removeCleanupTask(task: () => void) {
    const index = this.cleanupTasks.indexOf(task);
    if (index > -1) {
      this.cleanupTasks.splice(index, 1);
    }
  }

  // Force cleanup when memory usage is high
  forceCleanup() {
    this.cleanupTasks.forEach(task => {
      try {
        task();
      } catch (error) {
        console.warn('Cleanup task failed:', error);
      }
    });
  }

  // Monitor memory usage and trigger cleanup if needed
  monitorMemory() {
    if ('memory' in performance) {
      const memInfo = (performance as any).memory;
      if (memInfo.usedJSHeapSize > this.memoryThreshold) {
        this.forceCleanup();
        
        // Force garbage collection if available
        if ('gc' in window) {
          (window as any).gc();
        }
      }
    }
  }

  // Optimize object creation by reusing objects
  createObjectPool<T>(factory: () => T, initialSize: number = 10): {
    get: () => T;
    release: (obj: T) => void;
    clear: () => void;
  } {
    const pool: T[] = [];
    
    // Pre-populate pool
    for (let i = 0; i < initialSize; i++) {
      pool.push(factory());
    }

    return {
      get: () => pool.pop() || factory(),
      release: (obj: T) => {
        // Reset object properties if needed
        if (obj && typeof obj === 'object') {
          Object.keys(obj).forEach(key => {
            delete (obj as any)[key];
          });
        }
        pool.push(obj);
      },
      clear: () => {
        pool.length = 0;
      }
    };
  }
}

export const memoryManager = new MemoryManager();

// Auto-monitor memory every 30 seconds
if (typeof window !== 'undefined') {
  setInterval(() => {
    memoryManager.monitorMemory();
  }, 30000);
}
