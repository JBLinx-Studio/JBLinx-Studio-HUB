
/**
 * Image optimization utilities for better performance
 */

// Preload critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch preload images
export const preloadImages = async (urls: string[]): Promise<void> => {
  const chunks = chunkArray(urls, 3); // Process 3 images at a time
  
  for (const chunk of chunks) {
    await Promise.allSettled(chunk.map(preloadImage));
  }
};

// Create responsive image srcset
export const createSrcSet = (basePath: string, sizes: number[]): string => {
  return sizes
    .map(size => `${basePath}?w=${size} ${size}w`)
    .join(', ');
};

// Lazy loading intersection observer
export const createImageObserver = (callback: (img: HTMLImageElement) => void) => {
  if (!('IntersectionObserver' in window)) {
    return null;
  }

  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        callback(img);
      }
    });
  }, {
    rootMargin: '50px',
    threshold: 0.1
  });
};

// Utility function to chunk arrays
const chunkArray = <T>(array: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

// WebP detection and fallback
export const supportsWebP = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Optimize image loading with progressive enhancement
export const optimizeImageSrc = async (src: string): Promise<string> => {
  const isWebPSupported = await supportsWebP();
  
  if (isWebPSupported && !src.includes('.webp')) {
    // Try to get WebP version if supported
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  
  return src;
};
