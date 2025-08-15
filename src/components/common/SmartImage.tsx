
import React, { useState, useRef, useEffect, memo } from 'react';
import { cn } from '../../lib/utils';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  blurDataURL?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  onLoadComplete?: () => void;
}

const SmartImage = memo<SmartImageProps>(({
  src,
  alt,
  placeholder,
  blurDataURL,
  priority = false,
  quality = 90,
  sizes,
  className,
  onLoadComplete,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    if (priority || typeof window === 'undefined') return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observerRef.current?.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    const img = imgRef.current;
    if (img && observerRef.current) {
      observerRef.current.observe(img);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoadComplete?.();
  };

  const handleError = () => {
    setHasError(true);
  };

  // Generate blur placeholder if not provided
  const blurPlaceholder = blurDataURL || 
    `data:image/svg+xml;base64,${btoa(
      `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="hsl(var(--muted))"/>
      </svg>`
    )}`;

  return (
    <div 
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      {/* Blur placeholder */}
      {!isLoaded && !hasError && (
        <img
          src={blurPlaceholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300"
          aria-hidden="true"
        />
      )}
      
      {/* Main image */}
      {isIntersecting && !hasError && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
      
      {/* Error fallback */}
      {hasError && placeholder && (
        <img
          src={placeholder}
          alt={alt}
          className="w-full h-full object-cover"
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  );
});

SmartImage.displayName = 'SmartImage';

export default SmartImage;
