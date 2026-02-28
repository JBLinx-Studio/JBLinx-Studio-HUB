import React, { useState, useRef, useEffect, memo } from 'react';
import { createProgressiveLoader } from '../../utils/performanceEnhancer';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { cn } from '../../lib/utils';

interface SmartImageLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: 'low' | 'medium' | 'high';
  placeholder?: string;
  blurDataUrl?: string;
  aspectRatio?: number;
  sizes?: string;
  srcSet?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallback?: React.ReactNode;
  containerClassName?: string;
  loadingClassName?: string;
  errorClassName?: string;
}

const SmartImageLoader = memo<SmartImageLoaderProps>(({
  src,
  alt,
  priority = false,
  quality = 'medium',
  placeholder,
  blurDataUrl,
  aspectRatio,
  sizes,
  srcSet,
  onLoad,
  onError,
  fallback,
  containerClassName,
  loadingClassName,
  errorClassName,
  className,
  ...props
}) => {
  const [loadState, setLoadState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [imageSrc, setImageSrc] = useState<string>(placeholder || '');
  const imageRef = useRef<HTMLImageElement>(null);
  const { targetRef, isIntersecting, hasBeenVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
    freezeOnceVisible: true
  });

  // Generate optimized placeholder
  const getOptimizedPlaceholder = () => {
    if (blurDataUrl) return blurDataUrl;
    if (placeholder) return placeholder;
    
    // Generate SVG placeholder with aspect ratio
    const width = 100;
    const height = aspectRatio ? Math.round(width / aspectRatio) : 100;
    
    return `data:image/svg+xml;base64,${btoa(`
      <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#f1f5f9"/>
            <stop offset="50%" style="stop-color:#e2e8f0"/>
            <stop offset="100%" style="stop-color:#f1f5f9"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#shimmer)">
          <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
        </rect>
      </svg>
    `)}`;
  };

  // Optimize image URL based on device capabilities
  const getOptimizedImageUrl = (originalSrc: string) => {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const connectionSpeed = (navigator as any).connection?.effectiveType || '4g';
    const deviceMemory = (navigator as any).deviceMemory || 4;
    
    let qualityParam = '75';
    let formatParam = 'webp';
    
    // Adjust quality based on connection and device
    if (connectionSpeed === '3g' || deviceMemory < 4) {
      qualityParam = quality === 'low' ? '50' : quality === 'medium' ? '60' : '70';
    } else if (connectionSpeed === '4g' && deviceMemory > 4) {
      qualityParam = quality === 'low' ? '60' : quality === 'medium' ? '75' : '85';
    }
    
    // Use AVIF if supported, fallback to WebP
    if ('createImageBitmap' in window) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx?.createImageData) {
        formatParam = 'avif';
      }
    }
    
    // Add optimization parameters if URL doesn't already have them
    if (!originalSrc.includes('quality=') && !originalSrc.includes('format=')) {
      const separator = originalSrc.includes('?') ? '&' : '?';
      return `${originalSrc}${separator}quality=${qualityParam}&format=${formatParam}&auto=compress`;
    }
    
    return originalSrc;
  };

  // Load image with progressive enhancement
  const loadImage = async (imgSrc: string) => {
    if (!imgSrc) return;
    
    try {
      setLoadState('loading');
      
      // Create a new image to preload
      const img = new Image();
      
      // Set up crossOrigin if needed
      if (imgSrc.startsWith('http') && !imgSrc.startsWith(window.location.origin)) {
        img.crossOrigin = 'anonymous';
      }
      
      // Set sizes and srcSet for responsive images
      if (sizes) img.sizes = sizes;
      if (srcSet) img.srcset = srcSet;
      
      await new Promise<void>((resolve, reject) => {
        img.onload = () => {
          setImageSrc(getOptimizedImageUrl(imgSrc));
          setLoadState('loaded');
          onLoad?.();
          resolve();
        };
        
        img.onerror = () => {
          setLoadState('error');
          onError?.();
          reject(new Error(`Failed to load image: ${imgSrc}`));
        };
        
        img.src = getOptimizedImageUrl(imgSrc);
      });
      
    } catch (error) {
      console.warn('Image loading failed:', error);
      setLoadState('error');
      onError?.();
    }
  };

  // Handle intersection-based loading
  useEffect(() => {
    if (priority || (isIntersecting && !hasBeenVisible)) {
      loadImage(src);
    }
  }, [src, priority, isIntersecting, hasBeenVisible]);

  // Progressive enhancement with blur-up effect
  useEffect(() => {
    const img = imageRef.current;
    if (!img || loadState !== 'loaded') return;

    const cleanup = createProgressiveLoader(img, {
      quality,
      placeholder: getOptimizedPlaceholder(),
      blurAmount: 10,
      transition: 'all 0.3s ease-out'
    });

    return cleanup;
  }, [loadState, quality]);

  // Set initial placeholder
  useEffect(() => {
    if (!imageSrc && !priority) {
      setImageSrc(getOptimizedPlaceholder());
    }
  }, []);

  const containerStyles = {
    position: 'relative' as const,
    overflow: 'hidden' as const,
    ...(aspectRatio && {
      aspectRatio: aspectRatio.toString(),
      width: '100%'
    })
  };

  const imageStyles = {
    transition: 'all 0.3s ease-out',
    filter: loadState === 'loading' ? 'blur(10px)' : 'blur(0px)',
    transform: loadState === 'loaded' ? 'scale(1)' : 'scale(1.05)',
    opacity: loadState === 'error' ? 0 : 1
  };

  if (loadState === 'error' && fallback) {
    return <div className={containerClassName}>{fallback}</div>;
  }

  return (
    <div 
      ref={targetRef as React.RefObject<HTMLDivElement>}
      style={containerStyles}
      className={cn('relative overflow-hidden', containerClassName)}
    >
      {/* Loading placeholder */}
      {loadState === 'loading' && (
        <div className={cn(
          'absolute inset-0 bg-slate-200 animate-pulse',
          'flex items-center justify-center',
          loadingClassName
        )}>
          <div className="w-8 h-8 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Error state */}
      {loadState === 'error' && (
        <div className={cn(
          'absolute inset-0 bg-slate-100 flex items-center justify-center',
          'text-slate-500 text-sm',
          errorClassName
        )}>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 text-slate-400">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
            <div>Failed to load</div>
          </div>
        </div>
      )}
      
      {/* Main image */}
      <img
        ref={imageRef}
        src={imageSrc}
        alt={alt}
        style={imageStyles}
        className={cn(
          'w-full h-full object-cover',
          loadState === 'loaded' && 'opacity-100',
          className
        )}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
      />
      
      {/* Optional overlay for additional effects */}
      {loadState === 'loading' && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      )}
    </div>
  );
});

SmartImageLoader.displayName = 'SmartImageLoader';

export default SmartImageLoader;