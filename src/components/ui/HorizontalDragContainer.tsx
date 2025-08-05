
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

  // Enhanced panel calculations with better performance
  const panelCalculations = useMemo(() => {
    if (!containerRef.current) return { panelWidth: 0, totalPanels: 0 };
    
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    const totalPanels = Math.max(1, Math.ceil(scrollWidth / panelWidth));
    
    return { panelWidth, totalPanels };
  }, [children]);

  // Update panels count
  useEffect(() => {
    const updatePanels = () => {
      if (containerRef.current) {
        const { totalPanels } = panelCalculations;
        setTotalPanels(totalPanels);
      }
    };

    updatePanels();
    
    const handleResize = () => {
      setTimeout(updatePanels, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [panelCalculations]);

  // Enhanced scroll tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!isAnimating && !isDragging) {
        const { panelWidth } = panelCalculations;
        const scrollPosition = container.scrollLeft;
        const newPanel = Math.round(scrollPosition / panelWidth);
        setCurrentPanel(Math.max(0, Math.min(newPanel, totalPanels - 1)));
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [panelCalculations, totalPanels, isAnimating, isDragging]);

  // Smooth panel navigation
  const navigateToPanel = useCallback((panelIndex: number) => {
    if (!containerRef.current || isAnimating) return;
    
    setIsAnimating(true);
    const container = containerRef.current;
    const { panelWidth } = panelCalculations;
    const targetScroll = panelIndex * panelWidth;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    setCurrentPanel(panelIndex);
    
    // Reset animation flag after smooth scroll
    setTimeout(() => setIsAnimating(false), 600);
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

  // Enhanced mouse drag handling
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
    containerRef.current.style.scrollBehavior = 'auto';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Increased sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current || !isDragging) return;
    
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = 'auto';
    containerRef.current.style.scrollBehavior = 'smooth';
    
    // Enhanced snap to nearest panel
    const container = containerRef.current;
    const { panelWidth } = panelCalculations;
    const currentScroll = container.scrollLeft;
    const newPanel = Math.round(currentScroll / panelWidth);
    const clampedPanel = Math.max(0, Math.min(newPanel, totalPanels - 1));
    
    if (Math.abs(currentScroll - (clampedPanel * panelWidth)) > 10) {
      navigateToPanel(clampedPanel);
    }
  }, [isDragging, navigateToPanel, totalPanels, panelCalculations]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleMouseUp();
    }
  }, [isDragging, handleMouseUp]);

  // Enhanced touch handling for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    
    containerRef.current.style.scrollBehavior = 'auto';
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    if (!containerRef.current || !isDragging) return;
    
    setIsDragging(false);
    containerRef.current.style.scrollBehavior = 'smooth';
    
    // Snap to nearest panel on touch end
    const container = containerRef.current;
    const { panelWidth } = panelCalculations;
    const newPanel = Math.round(container.scrollLeft / panelWidth);
    const clampedPanel = Math.max(0, Math.min(newPanel, totalPanels - 1));
    navigateToPanel(clampedPanel);
  }, [isDragging, navigateToPanel, totalPanels, panelCalculations]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`overflow-x-auto scrollbar-hide cursor-grab select-none snap-x snap-mandatory ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth'
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

      {/* Enhanced Navigation Controls with better visual feedback */}
      {showNavigation && totalPanels > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentPanel === 0 || isAnimating}
            className={`absolute left-3 top-1/2 -translate-y-1/2 bg-slate-800/95 border border-purple-500/50 text-purple-400 p-3 backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-400 hover:scale-110 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 z-20 rounded-xl shadow-lg shadow-purple-500/20 ${
              currentPanel === 0 ? 'opacity-30' : 'opacity-90'
            }`}
            aria-label="Previous panel"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentPanel === totalPanels - 1 || isAnimating}
            className={`absolute right-3 top-1/2 -translate-y-1/2 bg-slate-800/95 border border-purple-500/50 text-purple-400 p-3 backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-400 hover:scale-110 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 z-20 rounded-xl shadow-lg shadow-purple-500/20 ${
              currentPanel === totalPanels - 1 ? 'opacity-30' : 'opacity-90'
            }`}
            aria-label="Next panel"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Enhanced Panel Indicators with better animations */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20 bg-slate-800/90 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-500/40 shadow-lg shadow-purple-500/20">
            {Array.from({ length: totalPanels }).map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToPanel(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-400 ease-out ${
                  index === currentPanel 
                    ? 'bg-purple-400 scale-125 shadow-lg shadow-purple-400/60 ring-2 ring-purple-400/30' 
                    : 'bg-slate-600 hover:bg-purple-400/60 hover:scale-110'
                } disabled:cursor-not-allowed`}
                aria-label={`Go to panel ${index + 1}`}
              />
            ))}
          </div>

          {/* Enhanced Panel Counter with progress bar */}
          <div className="absolute top-6 right-6 bg-slate-800/90 backdrop-blur-sm text-purple-400 px-4 py-2 rounded-xl text-sm font-mono border border-purple-500/40 z-20 shadow-lg shadow-purple-500/10">
            <div className="flex items-center space-x-2">
              <span>{currentPanel + 1} / {totalPanels}</span>
              <div className="w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-400 transition-all duration-300 ease-out"
                  style={{ width: `${((currentPanel + 1) / totalPanels) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HorizontalDragContainer;
