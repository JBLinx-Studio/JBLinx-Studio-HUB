
import React, { useRef, useState, useCallback, useEffect } from 'react';

interface HorizontalDragContainerProps {
  children?: React.ReactNode;
  className?: string;
  autoScrollSpeed?: number;
  staticPanels?: React.ReactNode[];
  movingPanels?: React.ReactNode[];
  currentPanel?: number;
  onPanelChange?: (index: number) => void;
  enableAutoplay?: boolean;
  autoplayInterval?: number;
  enableSnapPreview?: boolean;
  dampingFactor?: number;
}

const HorizontalDragContainer: React.FC<HorizontalDragContainerProps> = ({ 
  children, 
  className = "",
  autoScrollSpeed = 0.8,
  staticPanels = [],
  movingPanels = [],
  currentPanel = 0,
  onPanelChange,
  enableAutoplay = false,
  autoplayInterval = 5000,
  enableSnapPreview = true,
  dampingFactor = 0.85
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [previewOffset, setPreviewOffset] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Enhanced smooth lerp with advanced easing
  const lerpToPanel = useCallback((panelIndex: number, customDuration?: number) => {
    if (!containerRef.current || panelIndex < 0 || panelIndex >= movingPanels.length || isAnimating) return;
    
    setIsAnimating(true);
    const container = containerRef.current;
    const containerWidth = container.clientWidth - (staticPanels.length > 0 ? Math.min(320, window.innerWidth * 0.25) : 0);
    const targetScroll = panelIndex * containerWidth;
    
    const startScroll = container.scrollLeft;
    const distance = targetScroll - startScroll;
    const duration = customDuration || (Math.abs(distance) > containerWidth ? 800 : 500);
    const startTime = performance.now();
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Advanced easing with bounce-out effect
      let easeProgress;
      if (progress < 0.7) {
        easeProgress = 1 - Math.pow(1 - (progress / 0.7), 3);
      } else {
        const bounceProgress = (progress - 0.7) / 0.3;
        easeProgress = 1 - (1 - bounceProgress) * Math.cos(bounceProgress * Math.PI * 2) * 0.1;
      }
      
      container.scrollLeft = startScroll + (distance * easeProgress);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        setIsAnimating(false);
        onPanelChange?.(panelIndex);
      }
    };
    
    requestAnimationFrame(animateScroll);
  }, [movingPanels.length, onPanelChange, isAnimating, staticPanels.length]);

  // Autoplay functionality
  useEffect(() => {
    if (enableAutoplay && movingPanels.length > 1 && !isDragging && !isAnimating) {
      autoplayRef.current = setTimeout(() => {
        const nextPanel = (currentPanel + 1) % movingPanels.length;
        lerpToPanel(nextPanel);
      }, autoplayInterval);
    }

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [enableAutoplay, currentPanel, movingPanels.length, isDragging, isAnimating, autoplayInterval, lerpToPanel]);

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

  // Enhanced drag handlers with momentum and preview
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea, [role="button"], .interactive-element')) {
      return;
    }

    if (!containerRef.current || isAnimating) return;
    
    // Clear autoplay
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setLastX(e.pageX);
    setLastTime(Date.now());
    setVelocity(0);
    setDragDistance(0);
    setPreviewOffset(0);
    
    document.body.style.cursor = 'grabbing';
    containerRef.current.style.scrollBehavior = 'auto';
  }, [isAnimating]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * dampingFactor;
    const newScrollLeft = scrollLeft - walk;
    
    // Enhanced momentum calculation
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.pageX - lastX;
    
    if (deltaTime > 0) {
      const currentVelocity = (deltaX / deltaTime) * dampingFactor;
      setVelocity(velocity * 0.9 + currentVelocity * 0.1); // Smooth velocity
    }
    
    // Snap preview for next/previous panels
    const containerWidth = containerRef.current.clientWidth - (staticPanels.length > 0 ? Math.min(320, window.innerWidth * 0.25) : 0);
    const currentPanelOffset = currentPanel * containerWidth;
    const offset = newScrollLeft - currentPanelOffset;
    
    if (enableSnapPreview) {
      const previewThreshold = containerWidth * 0.15;
      if (Math.abs(offset) > previewThreshold) {
        setPreviewOffset(Math.sign(offset) * Math.min(Math.abs(offset) - previewThreshold, containerWidth * 0.3));
      } else {
        setPreviewOffset(0);
      }
    }
    
    containerRef.current.scrollLeft = newScrollLeft;
    setLastX(e.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));
  }, [isDragging, startX, scrollLeft, lastX, lastTime, velocity, currentPanel, enableSnapPreview, dampingFactor, staticPanels.length]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    document.body.style.cursor = 'auto';
    setPreviewOffset(0);
    
    // Enhanced snap logic with momentum consideration
    const container = containerRef.current;
    const containerWidth = container.clientWidth - (staticPanels.length > 0 ? Math.min(320, window.innerWidth * 0.25) : 0);
    const currentScroll = container.scrollLeft;
    
    // Calculate target panel based on velocity and current position
    let targetPanel = currentPanel;
    const velocityThreshold = 0.5;
    const positionThreshold = containerWidth * 0.25;
    
    if (Math.abs(velocity) > velocityThreshold) {
      // Use velocity for direction
      targetPanel = velocity > 0 ? Math.max(0, currentPanel - 1) : Math.min(movingPanels.length - 1, currentPanel + 1);
    } else {
      // Use position for snapping
      const currentPanelOffset = currentPanel * containerWidth;
      const offset = currentScroll - currentPanelOffset;
      
      if (offset > positionThreshold) {
        targetPanel = Math.min(movingPanels.length - 1, currentPanel + 1);
      } else if (offset < -positionThreshold) {
        targetPanel = Math.max(0, currentPanel - 1);
      }
    }
    
    lerpToPanel(targetPanel);
  }, [movingPanels.length, lerpToPanel, velocity, currentPanel, staticPanels.length]);

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
    <div className="relative w-full h-full">
      {/* Static L-shaped panels */}
      {staticPanels.length > 0 && (
        <div className="hidden lg:block absolute left-0 top-0 z-20">
          <div className="flex flex-col h-full">
            {staticPanels.map((panel, index) => (
              <div key={index} className="static-panel bg-slate-900/98 border border-slate-700/50 backdrop-blur-sm">
                {panel}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main scrolling container with perfect viewport fitting */}
      <div
        ref={containerRef}
        className={`overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab select-none ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'auto',
          paddingLeft: staticPanels.length > 0 ? 'min(320px, 25vw)' : '0'
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
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ 
            willChange: 'transform',
            transform: `translateX(${previewOffset * 0.1}px)`
          }}
        >
          {/* Moving panels with enhanced responsiveness */}
          {movingPanels.length > 0 ? (
            movingPanels.map((panel, index) => (
              <div 
                key={index} 
                className={`moving-panel flex-shrink-0 h-full flex items-center justify-center transition-all duration-300 ${
                  Math.abs(index - currentPanel) <= 1 ? 'opacity-100' : 'opacity-60'
                }`}
                style={{ 
                  minWidth: `calc(100vw - ${staticPanels.length > 0 ? 'min(320px, 25vw)' : '0px'})`,
                  width: `calc(100vw - ${staticPanels.length > 0 ? 'min(320px, 25vw)' : '0px'})`,
                  transform: `scale(${index === currentPanel ? 1 : 0.98})`,
                }}
              >
                {panel}
              </div>
            ))
          ) : (
            children && (
              <div className="w-full h-full flex items-center justify-center">
                {children}
              </div>
            )
          )}
        </div>
      </div>

      {/* Enhanced navigation controls */}
      {movingPanels.length > 1 && (
        <>
          <button
            onClick={goToPrevPanel}
            disabled={currentPanel === 0 || isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-slate-900/95 border border-slate-600/80 hover:border-purple-400/60 hover:bg-slate-800/95 disabled:opacity-20 disabled:cursor-not-allowed text-white p-4 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20 lg:left-[calc(min(320px,25vw)+1rem)] group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNextPanel}
            disabled={currentPanel === movingPanels.length - 1 || isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-slate-900/95 border border-slate-600/80 hover:border-purple-400/60 hover:bg-slate-800/95 disabled:opacity-20 disabled:cursor-not-allowed text-white p-4 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-purple-500/20 group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Enhanced panel indicators with progress */}
      {movingPanels.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
          <div className="flex items-center space-x-3 bg-slate-900/90 backdrop-blur-sm border border-slate-700/60 px-4 py-3 shadow-xl">
            {movingPanels.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && lerpToPanel(index)}
                disabled={isAnimating}
                className={`relative transition-all duration-400 ${
                  index === currentPanel 
                    ? 'w-8 h-3 bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg shadow-purple-400/40' 
                    : 'w-3 h-3 bg-slate-600 hover:bg-slate-500 hover:scale-125'
                } disabled:cursor-not-allowed`}
                style={{
                  clipPath: index === currentPanel ? 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)' : 'circle(50%)'
                }}
              >
                {index === currentPanel && (
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-60"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)',
                      animation: enableAutoplay ? `pulse ${autoplayInterval}ms linear infinite` : 'none'
                    }}
                  />
                )}
              </button>
            ))}
            
            {/* Panel counter */}
            <div className="ml-3 pl-3 border-l border-slate-600">
              <span className="text-slate-400 text-xs font-mono">
                {String(currentPanel + 1).padStart(2, '0')} / {String(movingPanels.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalDragContainer;
