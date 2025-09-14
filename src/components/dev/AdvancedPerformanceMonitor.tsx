import React, { useState, useEffect } from 'react';
import { useAdvancedPerformance } from '../../hooks/useAdvancedPerformance';
import { cn } from '../../lib/utils';

const AdvancedPerformanceMonitor: React.FC = () => {
  const { metrics, isOptimized, optimize, resetOptimizations, mark, measure } = useAdvancedPerformance();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'metrics' | 'optimizations' | 'tools'>('metrics');

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

  const getPerformanceColor = (value: number, thresholds: [number, number], inverse = false) => {
    if (inverse) {
      if (value <= thresholds[0]) return 'text-green-400';
      if (value <= thresholds[1]) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= thresholds[1]) return 'text-green-400';
      if (value >= thresholds[0]) return 'text-yellow-400';
      return 'text-red-400';
    }
  };

  const getBatteryIcon = () => {
    if (metrics.batteryLevel > 0.7) return '🔋';
    if (metrics.batteryLevel > 0.3) return '🔋';
    return '🪫';
  };

  const getConnectionIcon = () => {
    switch (metrics.connectionType) {
      case '4g': return '📶';
      case '3g': return '📵';
      case 'wifi': return '📶';
      default: return '📶';
    }
  };

  return (
    <div className={cn(
      'fixed top-4 right-4 z-50 bg-black/95 text-white rounded-lg',
      'font-mono text-xs border border-gray-700 backdrop-blur-sm',
      'w-80 max-h-[80vh] overflow-hidden flex flex-col'
    )}>
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-700 p-3">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Performance Monitor</span>
          {isOptimized && (
            <span className="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded">
              OPTIMIZED
            </span>
          )}
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-700">
        {['metrics', 'optimizations', 'tools'].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab as any)}
            className={cn(
              'flex-1 px-3 py-2 text-xs font-medium transition-colors capitalize',
              selectedTab === tab
                ? 'bg-blue-600/20 text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-3">
        {selectedTab === 'metrics' && (
          <div className="space-y-3">
            {/* Performance Metrics */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                Performance
              </h4>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span>FPS:</span>
                  <span className={getPerformanceColor(metrics.fps, [30, 50])}>
                    {metrics.fps}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Memory:</span>
                  <span className={getPerformanceColor(metrics.memory, [50, 80], true)}>
                    {metrics.memory}MB
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Render:</span>
                  <span className={getPerformanceColor(metrics.renderTime, [8, 16], true)}>
                    {metrics.renderTime}ms
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>DOM Nodes:</span>
                  <span className={getPerformanceColor(metrics.domNodes, [1000, 2000], true)}>
                    {metrics.domNodes}
                  </span>
                </div>
              </div>
            </div>

            {/* Device Info */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                Device
              </h4>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span>Memory:</span>
                  <span className="text-blue-400">{metrics.deviceMemory}GB</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Battery:</span>
                  <span className="text-blue-400">
                    {getBatteryIcon()} {Math.round(metrics.batteryLevel * 100)}%
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Connection:</span>
                  <span className="text-blue-400">
                    {getConnectionIcon()} {metrics.connectionType}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Latency:</span>
                  <span className={getPerformanceColor(metrics.networkLatency, [50, 100], true)}>
                    {metrics.networkLatency}ms
                  </span>
                </div>
              </div>
            </div>

            {/* Status Indicators */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                Status
              </h4>
              
              <div className="space-y-1">
                <div className={cn(
                  'flex items-center space-x-2 px-2 py-1 rounded text-xs',
                  metrics.isLowEndDevice 
                    ? 'bg-red-600/20 text-red-400'
                    : 'bg-green-600/20 text-green-400'
                )}>
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  <span>{metrics.isLowEndDevice ? 'Low-end Device' : 'High-end Device'}</span>
                </div>
                
                <div className={cn(
                  'flex items-center space-x-2 px-2 py-1 rounded text-xs',
                  metrics.fps < 30 
                    ? 'bg-red-600/20 text-red-400'
                    : metrics.fps < 50
                    ? 'bg-yellow-600/20 text-yellow-400'
                    : 'bg-green-600/20 text-green-400'
                )}>
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  <span>
                    {metrics.fps < 30 ? 'Poor Performance' : 
                     metrics.fps < 50 ? 'Fair Performance' : 'Good Performance'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'optimizations' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                Auto Optimizations
              </h4>
              <span className={cn(
                'text-xs px-2 py-1 rounded',
                isOptimized 
                  ? 'bg-green-600/20 text-green-400'
                  : 'bg-gray-600/20 text-gray-400'
              )}>
                {isOptimized ? 'ACTIVE' : 'INACTIVE'}
              </span>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={optimize}
                disabled={isOptimized}
                className={cn(
                  'w-full px-3 py-2 text-xs font-medium rounded transition-colors',
                  isOptimized
                    ? 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 border border-blue-500/30'
                )}
              >
                Apply Optimizations
              </button>
              
              <button
                onClick={resetOptimizations}
                disabled={!isOptimized}
                className={cn(
                  'w-full px-3 py-2 text-xs font-medium rounded transition-colors',
                  !isOptimized
                    ? 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
                    : 'bg-orange-600/20 text-orange-400 hover:bg-orange-600/30 border border-orange-500/30'
                )}
              >
                Reset Optimizations
              </button>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs font-medium text-gray-400">Active Optimizations:</h5>
              <div className="space-y-1 text-xs text-gray-500">
                {isOptimized ? (
                  <>
                    <div>• Reduced animation quality</div>
                    <div>• Optimized image loading</div>
                    <div>• Memory cleanup enabled</div>
                    <div>• Adaptive particle count</div>
                  </>
                ) : (
                  <div>No optimizations active</div>
                )}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'tools' && (
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
              Performance Tools
            </h4>
            
            <div className="space-y-2">
              <button
                onClick={() => mark('custom-mark-' + Date.now())}
                className="w-full px-3 py-2 text-xs font-medium rounded transition-colors bg-purple-600/20 text-purple-400 hover:bg-purple-600/30 border border-purple-500/30"
              >
                Add Performance Mark
              </button>
              
              <button
                onClick={() => {
                  mark('start-measure');
                  setTimeout(() => {
                    mark('end-measure');
                    measure('custom-measure', 'start-measure', 'end-measure');
                  }, 100);
                }}
                className="w-full px-3 py-2 text-xs font-medium rounded transition-colors bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30 border border-indigo-500/30"
              >
                Test Performance Measure
              </button>
              
              <button
                onClick={() => {
                  if ('gc' in window) {
                    (window as any).gc();
                  } else {
                    console.log('Garbage collection not available');
                  }
                }}
                className="w-full px-3 py-2 text-xs font-medium rounded transition-colors bg-green-600/20 text-green-400 hover:bg-green-600/30 border border-green-500/30"
              >
                Force Garbage Collection
              </button>
              
              <button
                onClick={() => {
                  const data = {
                    timestamp: new Date().toISOString(),
                    metrics,
                    userAgent: navigator.userAgent,
                    url: window.location.href
                  };
                  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'performance-report.json';
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="w-full px-3 py-2 text-xs font-medium rounded transition-colors bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 border border-cyan-500/30"
              >
                Export Performance Report
              </button>
            </div>

            <div className="text-xs text-gray-500 mt-4">
              <div className="border-t border-gray-700 pt-2">
                <div>Press Ctrl+Shift+P to toggle monitor</div>
                <div>Performance marks are logged to console</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;