
import { useEffect, useRef, useCallback, useState } from 'react';
import { memoryManager } from '../utils/memoryManager';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  isLowPerformance: boolean;
}

export const useAdvancedPerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    renderTime: 0,
    isLowPerformance: false
  });

  const frameCount = useRef(0);
  const lastTime = useRef(Date.now());
  const renderTimes = useRef<number[]>([]);
  const animationFrame = useRef<number>();

  const measurePerformance = useCallback(() => {
    const now = Date.now();
    const renderStart = performance.now();
    
    // FPS calculation
    frameCount.current++;
    if (now - lastTime.current >= 1000) {
      const fps = Math.round((frameCount.current * 1000) / (now - lastTime.current));
      frameCount.current = 0;
      lastTime.current = now;
      
      // Memory usage
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;
      
      // Average render time
      const renderEnd = performance.now();
      const renderTime = renderEnd - renderStart;
      renderTimes.current.push(renderTime);
      
      if (renderTimes.current.length > 60) {
        renderTimes.current.shift();
      }
      
      const avgRenderTime = renderTimes.current.reduce((a, b) => a + b, 0) / renderTimes.current.length;
      
      // Determine if performance is low
      const isLowPerformance = fps < 45 || avgRenderTime > 16.67;
      
      setMetrics({
        fps,
        memoryUsage,
        renderTime: avgRenderTime,
        isLowPerformance
      });
      
      // Trigger memory cleanup if needed
      if (isLowPerformance) {
        memoryManager.forceCleanup();
      }
    }

    animationFrame.current = requestAnimationFrame(measurePerformance);
  }, []);

  useEffect(() => {
    animationFrame.current = requestAnimationFrame(measurePerformance);
    
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [measurePerformance]);

  return metrics;
};
