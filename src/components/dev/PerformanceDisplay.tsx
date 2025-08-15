
import React, { useState, useEffect, memo } from 'react';
import { cn } from '../../lib/utils';

interface PerformanceMetrics {
  fps: number;
  memory: number;
  renderTime: number;
  domNodes: number;
  loadTime: number;
}

const PerformanceDisplay = memo(() => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memory: 0,
    renderTime: 0,
    domNodes: 0,
    loadTime: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const updateMetrics = () => {
      const now = performance.now();
      frameCount++;

      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        
        const metrics: PerformanceMetrics = {
          fps,
          memory: (performance as any).memory ? 
            Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024) : 0,
          renderTime: Math.round(now - lastTime),
          domNodes: document.querySelectorAll('*').length,
          loadTime: Math.round(performance.now())
        };

        setMetrics(metrics);
        frameCount = 0;
        lastTime = now;
      }

      animationId = requestAnimationFrame(updateMetrics);
    };

    if (isVisible) {
      updateMetrics();
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible || process.env.NODE_ENV === 'production') {
    return null;
  }

  const getPerformanceColor = (value: number, thresholds: [number, number]) => {
    if (value >= thresholds[1]) return 'text-green-400';
    if (value >= thresholds[0]) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className={cn(
      'fixed top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg',
      'font-mono text-xs space-y-2 min-w-[200px]',
      'border border-gray-700 backdrop-blur-sm'
    )}>
      <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
        <span className="font-semibold">Performance</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={getPerformanceColor(metrics.fps, [30, 50])}>
            {metrics.fps}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={getPerformanceColor(100 - metrics.memory, [50, 80])}>
            {metrics.memory}MB
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>DOM Nodes:</span>
          <span className={getPerformanceColor(2000 - metrics.domNodes, [1000, 1500])}>
            {metrics.domNodes}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-blue-400">
            {metrics.loadTime}ms
          </span>
        </div>
      </div>
      
      <div className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-700">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
});

PerformanceDisplay.displayName = 'PerformanceDisplay';

export default PerformanceDisplay;
