
import React, { useRef, useState, useCallback, useEffect } from 'react';

interface HorizontalDragContainerProps {
  children?: React.ReactNode;
  className?: string;
  autoScrollSpeed?: number;
  staticPanels?: React.ReactNode[];
  movingPanels?: React.ReactNode[];
  currentPanel?: number;
  onPanelChange?: (index: number) => void;
}

const HorizontalDragContainer: React.FC<HorizontalDragContainerProps> = ({ 
  children, 
  className = "",
  autoScrollSpeed = 0.8,
  staticPanels = [],
  movingPanels = [],
  currentPanel = 0,
  onPanelChange
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  // Smooth lerp to specific panel
  const lerpToPanel = useCallback((panelIndex: number) => {
    if (!containerRef.current || panelIndex < 0 || panelIndex >= movingPanels.length) return;
    
    const container = containerRef.current;
    const targetScroll = panelIndex * container.clientWidth;
    
    const startScroll = container.scrollLeft;
    const distance = targetScroll - startScroll;
    const duration = 600; // Smooth 600ms transition
    const startTime = performance.now();
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth easing function (ease-out-cubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      container.scrollLeft = startScroll + (distance * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        onPanelChange?.(panelIndex);
      }
    };
    
    requestAnimationFrame(animateScroll);
  }, [movingPanels.length, onPanelChange]);

  // Navigation functions
  const goToNextPanel = useCallback(() => {
    const nextIndex = Math.min(currentPanel + 1, movingPanels.length - 1);
    if (nextIndex !== currentPanel) {
      lerpToPanel(nextIndex);
    }
  }, [currentPanel, movingPanels.length, lerpToPanel]);

  const goToPrevPanel = useCallback(() => {
    const prevIndex = Math.max(currentPanel - 1, 0);
    if (prevIndex !== currentPanel) {
      lerpToPanel(prevIndex);
    }
  }, [currentPanel, lerpToPanel]);

  // Drag handlers with snap-to-panel
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea, [role="button"], .interactive-element')) {
      return;
    }

    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setLastX(e.pageX);
    setLastTime(Date.now());
    setVelocity(0);
    setDragDistance(0);
    
    document.body.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    const newScrollLeft = scrollLeft - walk;
    
    containerRef.current.scrollLeft = newScrollLeft;
    
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.pageX - lastX;
    
    if (deltaTime > 0) {
      setVelocity((deltaX / deltaTime) * 0.8);
    }
    
    setLastX(e.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));
  }, [isDragging, startX, scrollLeft, lastX, lastTime]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    document.body.style.cursor = 'auto';
    
    // Snap to nearest panel
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const nearestPanel = Math.round(container.scrollLeft / panelWidth);
    const clampedPanel = Math.max(0, Math.min(nearestPanel, movingPanels.length - 1));
    
    lerpToPanel(clampedPanel);
  }, [movingPanels.length, lerpToPanel]);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea, [role="button"], .interactive-element')) {
      return;
    }

    if (!containerRef.current) return;
    
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setLastX(touch.pageX);
    setLastTime(Date.now());
    setVelocity(0);
    setDragDistance(0);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    const newScrollLeft = scrollLeft - walk;
    
    containerRef.current.scrollLeft = newScrollLeft;
    
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = touch.pageX - lastX;
    
    if (deltaTime > 0) {
      setVelocity((deltaX / deltaTime) * 0.8);
    }
    
    setLastX(touch.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));
  }, [isDragging, startX, scrollLeft, lastX, lastTime]);

  const handleTouchEnd = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    
    // Snap to nearest panel
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const nearestPanel = Math.round(container.scrollLeft / panelWidth);
    const clampedPanel = Math.max(0, Math.min(nearestPanel, movingPanels.length - 1));
    
    lerpToPanel(clampedPanel);
  }, [movingPanels.length, lerpToPanel]);

  return (
    <div className="relative w-full h-full full-width-cinematic">
      {/* Static L-shaped panels */}
      {staticPanels.length > 0 && (
        <div className="hidden lg:block absolute left-0 top-0 z-20">
          <div className="flex flex-col h-full">
            {staticPanels.map((panel, index) => (
              <div key={index} className="static-panel bg-slate-900/98 border border-slate-700/50 backdrop-blur-sm w-full max-w-[280px]">
                {panel}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main scrolling container - Full width with better proportions */}
      <div
        ref={containerRef}
        className={`overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab select-none w-full ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'auto',
          paddingLeft: staticPanels.length > 0 ? '280px' : '0'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          ref={contentRef} 
          className="flex h-full w-full"
          style={{ willChange: 'transform' }}
        >
          {/* Moving panels - Better width control */}
          {movingPanels.length > 0 ? (
            movingPanels.map((panel, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full h-full flex items-center justify-center"
                style={{ 
                  minWidth: 'calc(100vw - 2rem)',
                  width: 'calc(100vw - 2rem)'
                }}
              >
                <div className="w-full max-w-7xl mx-auto px-4">
                  {panel}
                </div>
              </div>
            ))
          ) : (
            children && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-7xl mx-auto px-4">
                  {children}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Navigation controls */}
      {movingPanels.length > 1 && (
        <>
          <button
            onClick={goToPrevPanel}
            disabled={currentPanel === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-slate-900/90 border border-slate-700 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-white p-3 transition-all duration-200 lg:left-[calc(min(320px,25vw)+1rem)]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNextPanel}
            disabled={currentPanel === movingPanels.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-slate-900/90 border border-slate-700 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-white p-3 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Panel indicators */}
      {movingPanels.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {movingPanels.map((_, index) => (
            <button
              key={index}
              onClick={() => lerpToPanel(index)}
              className={`w-2 h-2 transition-all duration-300 ${
                index === currentPanel 
                  ? 'bg-purple-400 scale-125' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HorizontalDragContainer;
