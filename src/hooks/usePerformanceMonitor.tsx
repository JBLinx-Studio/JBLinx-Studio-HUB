
import { useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  isSlowDevice: boolean;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    renderTime: 0,
    isSlowDevice: false
  });

  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const renderStart = useRef(0);

  useEffect(() => {
    let animationId: number;
    
    const measurePerformance = () => {
      const now = performance.now();
      frameCount.current++;
      
      // Calculate FPS every second
      if (now - lastTime.current >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / (now - lastTime.current));
        
        // Get memory usage if available
        const memory = (performance as any).memory;
        const memoryUsage = memory ? Math.round(memory.usedJSHeapSize / 1048576) : 0;
        
        // Calculate render time
        const renderTime = now - renderStart.current;
        
        // Detect slow device
        const isSlowDevice = fps < 45 || memoryUsage > 100;
        
        setMetrics({
          fps,
          memoryUsage,
          renderTime,
          isSlowDevice
        });
        
        frameCount.current = 0;
        lastTime.current = now;
      }
      
      renderStart.current = performance.now();
      animationId = requestAnimationFrame(measurePerformance);
    };
    
    animationId = requestAnimationFrame(measurePerformance);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return metrics;
};
