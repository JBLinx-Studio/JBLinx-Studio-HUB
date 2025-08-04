
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

  // Enhanced smooth lerp to specific panel
  const lerpToPanel = useCallback((panelIndex: number) => {
    if (!containerRef.current || panelIndex < 0 || panelIndex >= movingPanels.length) return;
    
    const container = containerRef.current;
    const targetScroll = panelIndex * container.clientWidth;
    
    const startScroll = container.scrollLeft;
    const distance = targetScroll - startScroll;
    const duration = 500; // Smoother 500ms transition
    const startTime = performance.now();
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Enhanced easing function (ease-in-out-cubic)
      const easeProgress = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
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

  // Enhanced drag handlers
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
    document.body.style.userSelect = 'none';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Enhanced sensitivity
    const newScrollLeft = scrollLeft - walk;
    
    containerRef.current.scrollLeft = newScrollLeft;
    
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.pageX - lastX;
    
    if (deltaTime > 0) {
      setVelocity((deltaX / deltaTime) * 1.2);
    }
    
    setLastX(e.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));
  }, [isDragging, startX, scrollLeft, lastX, lastTime]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    document.body.style.cursor = 'auto';
    document.body.style.userSelect = 'auto';
    
    // Enhanced snap to nearest panel
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const nearestPanel = Math.round(container.scrollLeft / panelWidth);
    const clampedPanel = Math.max(0, Math.min(nearestPanel, movingPanels.length - 1));
    
    lerpToPanel(clampedPanel);
  }, [movingPanels.length, lerpToPanel]);

  // Enhanced touch handlers for mobile
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
    const walk = (x - startX) * 1.5;
    const newScrollLeft = scrollLeft - walk;
    
    containerRef.current.scrollLeft = newScrollLeft;
    
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = touch.pageX - lastX;
    
    if (deltaTime > 0) {
      setVelocity((deltaX / deltaTime) * 1.2);
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
    <div className="relative w-full h-full professional-container">
      {/* Enhanced Static L-shaped panels */}
      {staticPanels.length > 0 && (
        <div className="hidden lg:block absolute left-0 top-0 z-30 professional-static-panels">
          <div className="flex flex-col h-full">
            {staticPanels.map((panel, index) => (
              <div key={index} className="professional-static-panel bg-slate-900/95 border border-slate-700/30 backdrop-blur-md w-full max-w-[320px]">
                {panel}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Main scrolling container */}
      <div
        ref={containerRef}
        className={`professional-scroll-container overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab select-none w-full ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'auto',
          paddingLeft: staticPanels.length > 0 ? 'clamp(300px, 25vw, 320px)' : '0'
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
          className="flex h-full w-full professional-content-wrapper"
          style={{ willChange: 'transform, scroll-position' }}
        >
          {/* Enhanced Moving panels */}
          {movingPanels.length > 0 ? (
            movingPanels.map((panel, index) => (
              <div 
                key={index} 
                className="professional-moving-panel flex-shrink-0 w-full h-full flex items-center justify-center"
                style={{ 
                  minWidth: 'calc(100vw - clamp(2rem, 4vw, 4rem))',
                  width: 'calc(100vw - clamp(2rem, 4vw, 4rem))'
                }}
              >
                <div className="w-full max-w-none mx-auto professional-panel-content">
                  {panel}
                </div>
              </div>
            ))
          ) : (
            children && (
              <div className="professional-single-panel w-full h-full flex items-center justify-center">
                <div className="w-full max-w-none mx-auto professional-panel-content">
                  {children}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Enhanced Navigation controls */}
      {movingPanels.length > 1 && (
        <>
          <button
            onClick={goToPrevPanel}
            disabled={currentPanel === 0}
            className="professional-nav-btn professional-nav-left absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-slate-900/90 border border-slate-600 hover:bg-slate-800 hover:border-purple-500/50 disabled:opacity-20 disabled:cursor-not-allowed text-white p-4 transition-all duration-300 backdrop-blur-sm lg:left-[calc(clamp(320px,25vw,340px)+1rem)]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNextPanel}
            disabled={currentPanel === movingPanels.length - 1}
            className="professional-nav-btn professional-nav-right absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-slate-900/90 border border-slate-600 hover:bg-slate-800 hover:border-purple-500/50 disabled:opacity-20 disabled:cursor-not-allowed text-white p-4 transition-all duration-300 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Enhanced Panel indicators */}
      {movingPanels.length > 1 && (
        <div className="professional-indicators absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex space-x-3">
          {movingPanels.map((_, index) => (
            <button
              key={index}
              onClick={() => lerpToPanel(index)}
              className={`professional-indicator w-3 h-3 transition-all duration-400 backdrop-blur-sm border ${
                index === currentPanel 
                  ? 'bg-purple-400 border-purple-300 scale-125 shadow-lg shadow-purple-400/50' 
                  : 'bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-slate-500 hover:scale-110'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HorizontalDragContainer;
