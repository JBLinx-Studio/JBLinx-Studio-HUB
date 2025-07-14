
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

interface HorizontalDragContainerProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
  staticFirstPanel?: boolean;
}

const HorizontalDragContainer: React.FC<HorizontalDragContainerProps> = ({ 
  children, 
  className = "",
  showNavigation = true,
  staticFirstPanel = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [totalPanels, setTotalPanels] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const panelWidth = container.clientWidth;
      const scrollWidth = container.scrollWidth;
      setTotalPanels(Math.ceil(scrollWidth / panelWidth));
    }

    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const panelWidth = container.clientWidth;
        container.scrollTo({
          left: currentPanel * panelWidth,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [children, currentPanel]);

  const navigateToPanel = useCallback((panelIndex: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const targetScroll = panelIndex * panelWidth;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    setCurrentPanel(panelIndex);
  }, []);

  const handlePrevious = useCallback(() => {
    const minPanel = staticFirstPanel ? 0 : 0;
    if (currentPanel > minPanel) {
      navigateToPanel(currentPanel - 1);
    }
  }, [currentPanel, navigateToPanel, staticFirstPanel]);

  const handleNext = useCallback(() => {
    if (currentPanel < totalPanels - 1) {
      navigateToPanel(currentPanel + 1);
    }
  }, [currentPanel, totalPanels, navigateToPanel]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current || (staticFirstPanel && currentPanel === 0)) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  }, [staticFirstPanel, currentPanel]);

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
    
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const newPanel = Math.round(container.scrollLeft / panelWidth);
    const minPanel = staticFirstPanel ? 0 : 0;
    navigateToPanel(Math.max(minPanel, Math.min(newPanel, totalPanels - 1)));
  }, [isDragging, navigateToPanel, totalPanels, staticFirstPanel]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleMouseUp();
    }
  }, [isDragging, handleMouseUp]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current || (staticFirstPanel && currentPanel === 0)) return;
    
    const touch = e.touches[0];
    setIsDragging(true);
    setStartX(touch.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  }, [staticFirstPanel, currentPanel]);

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
    
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const newPanel = Math.round(container.scrollLeft / panelWidth);
    const minPanel = staticFirstPanel ? 0 : 0;
    navigateToPanel(Math.max(minPanel, Math.min(newPanel, totalPanels - 1)));
  }, [isDragging, navigateToPanel, totalPanels, staticFirstPanel]);

  return (
    <div className="relative w-full h-full">
      <div
        ref={containerRef}
        className={`overflow-x-auto scrollbar-hide cursor-grab select-none snap-x snap-mandatory h-full ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex h-full">
          {children}
        </div>
      </div>

      {showNavigation && totalPanels > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentPanel === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-slate-800/90 border border-purple-500/50 text-purple-400 backdrop-blur-sm hover:bg-purple-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-10 ${
              isMobile ? 'p-1' : 'p-2'
            }`}
          >
            <ChevronLeft className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentPanel === totalPanels - 1}
            className={`absolute right-2 top-1/2 -translate-y-1/2 bg-slate-800/90 border border-purple-500/50 text-purple-400 backdrop-blur-sm hover:bg-purple-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-10 ${
              isMobile ? 'p-1' : 'p-2'
            }`}
          >
            <ChevronRight className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
          </button>

          <div className={`absolute ${isMobile ? 'bottom-2' : 'bottom-4'} left-1/2 -translate-x-1/2 flex space-x-2 z-10`}>
            {Array.from({ length: totalPanels }).map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToPanel(index)}
                className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2'} rounded-full transition-all duration-300 ${
                  index === currentPanel 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-slate-600 hover:bg-purple-400/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HorizontalDragContainer;
