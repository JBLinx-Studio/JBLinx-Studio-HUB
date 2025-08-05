
import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalDragContainerProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
}

const HorizontalDragContainer: React.FC<HorizontalDragContainerProps> = ({ 
  children, 
  className = "",
  showNavigation = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [totalPanels, setTotalPanels] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Memoize panel calculations for better performance
  const panelCalculations = useMemo(() => {
    if (!containerRef.current) return { panelWidth: 0, totalPanels: 0 };
    
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    const totalPanels = Math.max(1, Math.ceil(scrollWidth / panelWidth));
    
    return { panelWidth, totalPanels };
  }, [children]);

  useEffect(() => {
    const updatePanels = () => {
      if (containerRef.current) {
        const { totalPanels } = panelCalculations;
        setTotalPanels(totalPanels);
      }
    };

    updatePanels();
    
    // Listen for resize events to recalculate panels
    const handleResize = () => {
      setTimeout(updatePanels, 100); // Debounce resize
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [panelCalculations]);

  // Update current panel based on scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!isAnimating && !isDragging) {
        const { panelWidth } = panelCalculations;
        const newPanel = Math.round(container.scrollLeft / panelWidth);
        setCurrentPanel(Math.max(0, Math.min(newPanel, totalPanels - 1)));
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [panelCalculations, totalPanels, isAnimating, isDragging]);

  const navigateToPanel = useCallback((panelIndex: number) => {
    if (!containerRef.current || isAnimating) return;
    
    setIsAnimating(true);
    const container = containerRef.current;
    const { panelWidth } = panelCalculations;
    const targetScroll = panelIndex * panelWidth;
    
    // Use smooth scroll for better performance
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    setCurrentPanel(panelIndex);
    
    // Reset animation flag after scroll completes
    setTimeout(() => setIsAnimating(false), 500);
  }, [panelCalculations, isAnimating]);

  const handlePrevious = useCallback(() => {
    if (currentPanel > 0) {
      navigateToPanel(currentPanel - 1);
    }
  }, [currentPanel, navigateToPanel]);

  const handleNext = useCallback(() => {
    if (currentPanel < totalPanels - 1) {
      navigateToPanel(currentPanel + 1);
    }
  }, [currentPanel, totalPanels, navigateToPanel]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current || !isDragging) return;
    
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = 'auto';
    
    // Snap to nearest panel
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const newPanel = Math.round(container.scrollLeft / panelWidth);
    navigateToPanel(Math.max(0, Math.min(newPanel, totalPanels - 1)));
  }, [isDragging, navigateToPanel, totalPanels]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleMouseUp();
    }
  }, [isDragging, handleMouseUp]);

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    if (!containerRef.current || !isDragging) return;
    
    setIsDragging(false);
    
    // Snap to nearest panel
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const newPanel = Math.round(container.scrollLeft / panelWidth);
    navigateToPanel(Math.max(0, Math.min(newPanel, totalPanels - 1)));
  }, [isDragging, navigateToPanel, totalPanels]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`overflow-x-auto scrollbar-hide cursor-grab select-none snap-x snap-mandatory ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex">
          {children}
        </div>
      </div>

      {/* Enhanced Navigation Controls */}
      {showNavigation && totalPanels > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentPanel === 0 || isAnimating}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-800/95 border border-purple-500/50 text-purple-400 p-3 backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20 rounded-lg shadow-lg shadow-purple-500/10"
            aria-label="Previous panel"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentPanel === totalPanels - 1 || isAnimating}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-800/95 border border-purple-500/50 text-purple-400 p-3 backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20 rounded-lg shadow-lg shadow-purple-500/10"
            aria-label="Next panel"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Enhanced Panel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20 bg-slate-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
            {Array.from({ length: totalPanels }).map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToPanel(index)}
                disabled={isAnimating}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPanel 
                    ? 'bg-purple-400 scale-125 shadow-lg shadow-purple-400/50' 
                    : 'bg-slate-600 hover:bg-purple-400/50 hover:scale-110'
                } disabled:cursor-not-allowed`}
                aria-label={`Go to panel ${index + 1}`}
              />
            ))}
          </div>

          {/* Panel Counter */}
          <div className="absolute top-4 right-4 bg-slate-800/80 backdrop-blur-sm text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30 z-20">
            {currentPanel + 1} / {totalPanels}
          </div>
        </>
      )}
    </div>
  );
};

export default HorizontalDragContainer;
