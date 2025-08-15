
import React, { useState, useEffect } from 'react';
import { useAdvancedPerformance } from '../../hooks/useAdvancedPerformance';

const PerformanceMonitor: React.FC = () => {
  const { fps, memoryUsage, renderTime, isLowPerformance } = useAdvancedPerformance();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (!isVisible || process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed top-4 right-4 bg-background/90 backdrop-blur-sm border rounded-lg p-4 text-sm z-50 shadow-lg">
      <div className="font-semibold mb-2 text-foreground">Performance Monitor</div>
      <div className="space-y-1 text-muted-foreground">
        <div className={`flex justify-between ${fps < 45 ? 'text-red-500' : fps < 55 ? 'text-yellow-500' : 'text-green-500'}`}>
          <span>FPS:</span>
          <span>{fps}</span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span>{(memoryUsage / 1024 / 1024).toFixed(1)}MB</span>
        </div>
        <div className={`flex justify-between ${renderTime > 16 ? 'text-red-500' : 'text-green-500'}`}>
          <span>Render:</span>
          <span>{renderTime.toFixed(2)}ms</span>
        </div>
        <div className={`flex justify-between font-medium ${isLowPerformance ? 'text-red-500' : 'text-green-500'}`}>
          <span>Mode:</span>
          <span>{isLowPerformance ? 'Low' : 'High'}</span>
        </div>
      </div>
      <div className="text-xs text-muted-foreground mt-2 border-t pt-2">
        Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
