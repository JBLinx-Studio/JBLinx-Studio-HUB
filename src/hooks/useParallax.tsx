
import { useEffect, useState } from 'react';

interface ParallaxValues {
  backgroundY: number;
  foregroundY: number;
  opacity: number;
}

export const useParallax = () => {
  const [values, setValues] = useState<ParallaxValues>({
    backgroundY: 0,
    foregroundY: 0,
    opacity: 1
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      const foregroundRate = scrolled * -0.2;
      const opacityRate = Math.min(1, Math.max(0.3, 1 - scrolled * 0.0005));

      setValues({
        backgroundY: rate,
        foregroundY: foregroundRate,
        opacity: opacityRate
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return values;
};
