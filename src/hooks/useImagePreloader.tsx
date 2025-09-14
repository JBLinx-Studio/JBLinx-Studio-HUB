
import { useEffect, useState } from 'react';

interface UseImagePreloaderOptions {
  priority?: boolean;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const useImagePreloader = (
  imageSrc: string,
  options: UseImagePreloaderOptions = {}
) => {
  const { priority = false, onLoad, onError } = options;
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!imageSrc) return;

    const img = new Image();
    
    img.addEventListener('load', () => {
      setIsLoaded(true);
      onLoad?.();
    });

    img.addEventListener('error', (e) => {
      setHasError(true);
      onError?.(new Error('Image failed to load'));
    });

    // Set priority loading hint
    if (priority) {
      img.fetchPriority = 'high';
    }

    img.src = imageSrc;

    return () => {
      img.removeEventListener('load', () => {});
      img.removeEventListener('error', () => {});
    };
  }, [imageSrc, priority, onLoad, onError]);

  return { isLoaded, hasError };
};
