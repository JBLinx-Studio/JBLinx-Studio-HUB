
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
    const containerWidth = container.clientWidth;
    const targetScroll = panelIndex * containerWidth;
    
    const startScroll = container.scrollLeft;
    const distance = targetScroll - startScroll;
    const duration = customDuration || (Math.abs(distance) > containerWidth ? 600 : 400);
    const startTime = performance.now();
    
    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ultra-smooth easing with perfect curves
      const easeProgress = progress < 0.5 
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
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
    const containerWidth = containerRef.current.clientWidth;
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
    const containerWidth = container.clientWidth;
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
  }, [movingPanels.length, lerpToPanel, velocity, currentPanel]);

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
    <div className="relative w-full h-full overflow-hidden">
      {/* Static L-shaped panels - Fixed positioning */}
      {staticPanels.length > 0 && (
        <div className="absolute left-0 top-0 z-20 h-full hidden lg:flex flex-col">
          {staticPanels.map((panel, index) => (
            <div 
              key={index} 
              className="static-panel bg-slate-900/98 border-r border-slate-700/50 backdrop-blur-sm"
              style={{
                width: '280px',
                height: index === 0 ? '50%' : '50%',
                position: 'relative'
              }}
            >
              {panel}
            </div>
          ))}
        </div>
      )}

      {/* Main scrolling container - Optimized for performance */}
      <div
        ref={containerRef}
        className={`relative overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab select-none ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'auto',
          marginLeft: staticPanels.length > 0 ? '280px' : '0',
          width: staticPanels.length > 0 ? 'calc(100% - 280px)' : '100%',
          height: '100%',
          contain: 'layout style paint'
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
          className="flex h-full will-change-scroll"
          style={{ 
            willChange: 'transform, scroll-position',
            width: 'max-content',
            scrollBehavior: 'auto'
          }}
        >
          {/* Enhanced moving panels with smooth transitions */}
          {movingPanels.length > 0 ? (
            movingPanels.map((panel, index) => (
              <div 
                key={index} 
                className="moving-panel flex-shrink-0 h-full flex items-stretch"
                style={{ 
                  width: 'calc(100vw - 280px)',
                  minWidth: 'calc(100vw - 280px)',
                  maxWidth: 'calc(100vw - 280px)',
                  transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: Math.abs(index - currentPanel) <= 1 ? 1 : 0.7
                }}
              >
                <div className="w-full h-full overflow-hidden">
                  {panel}
                </div>
              </div>
            ))
          ) : (
            children && (
              <div 
                className="w-full h-full flex items-center justify-center"
                style={{ 
                  width: 'calc(100vw - 280px)',
                  minWidth: 'calc(100vw - 280px)'
                }}
              >
                {children}
              </div>
            )
          )}
        </div>
      </div>

      {/* Simplified navigation controls */}
      {movingPanels.length > 1 && (
        <>
          <button
            onClick={goToPrevPanel}
            disabled={currentPanel === 0 || isAnimating}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-slate-900/90 border border-slate-600 hover:border-purple-400 hover:bg-slate-800 disabled:opacity-20 disabled:cursor-not-allowed text-white p-3 transition-all duration-200 backdrop-blur-sm lg:left-[calc(280px+0.5rem)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNextPanel}
            disabled={currentPanel === movingPanels.length - 1 || isAnimating}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-slate-900/90 border border-slate-600 hover:border-purple-400 hover:bg-slate-800 disabled:opacity-20 disabled:cursor-not-allowed text-white p-3 transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Simplified panel indicators */}
      {movingPanels.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2 bg-slate-900/90 backdrop-blur-sm border border-slate-700 px-3 py-2">
          {movingPanels.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && lerpToPanel(index)}
              disabled={isAnimating}
              className={`w-2 h-2 transition-all duration-300 ${
                index === currentPanel 
                  ? 'bg-purple-400 scale-150' 
                  : 'bg-slate-600 hover:bg-slate-500'
              } disabled:cursor-not-allowed`}
            />
          ))}
          <div className="ml-2 pl-2 border-l border-slate-600">
            <span className="text-slate-400 text-xs font-mono">
              {currentPanel + 1}/{movingPanels.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalDragContainer;
