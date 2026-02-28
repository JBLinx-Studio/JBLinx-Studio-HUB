
import React, { memo } from 'react';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import { cn } from '../../lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  fallback?: React.ReactNode;
  containerClassName?: string;
}

const OptimizedImage = memo<OptimizedImageProps>(({
  src,
  alt,
  priority = false,
  fallback,
  containerClassName,
  className,
  ...props
}) => {
  const { isLoaded, hasError } = useImagePreloader(src, { priority });

  if (hasError && fallback) {
    return <div className={containerClassName}>{fallback}</div>;
  }

  return (
    <div className={cn('overflow-hidden', containerClassName)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
