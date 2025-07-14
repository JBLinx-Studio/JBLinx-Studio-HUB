
import React, { useRef, useState, useCallback, useEffect } from 'react';
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

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const panels = container.children[0]?.children || [];
      setTotalPanels(panels.length);
    }
  }, [children]);

  const snapToPanel = useCallback((panelIndex: number) => {
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
    if (currentPanel > 0) {
      snapToPanel(currentPanel - 1);
    }
  }, [currentPanel, snapToPanel]);

  const handleNext = useCallback(() => {
    if (currentPanel < totalPanels - 1) {
      snapToPanel(currentPanel + 1);
    }
  }, [currentPanel, totalPanels, snapToPanel]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    
    containerRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current || !isDragging) return;
    
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    
    // Snap to nearest panel
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const newPanel = Math.round(container.scrollLeft / panelWidth);
    snapToPanel(Math.max(0, Math.min(newPanel, totalPanels - 1)));
  }, [isDragging, snapToPanel, totalPanels]);

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
    const walk = (x - startX) * 1.2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleTouchEnd = useCallback(() => {
    if (!containerRef.current || !isDragging) return;
    
    setIsDragging(false);
    
    // Snap to nearest panel
    const container = containerRef.current;
    const panelWidth = container.clientWidth;
    const newPanel = Math.round(container.scrollLeft / panelWidth);
    snapToPanel(Math.max(0, Math.min(newPanel, totalPanels - 1)));
  }, [isDragging, snapToPanel, totalPanels]);

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className={`overflow-x-hidden scrollbar-hide cursor-grab select-none ${className}`}
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
        <div className="flex w-full">
          {children}
        </div>
      </div>

      {/* Navigation Controls */}
      {showNavigation && totalPanels > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentPanel === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-800/95 border border-purple-500/50 text-purple-400 p-2 rounded-md backdrop-blur-sm hover:bg-purple-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentPanel === totalPanels - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-800/95 border border-purple-500/50 text-purple-400 p-2 rounded-md backdrop-blur-sm hover:bg-purple-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Panel Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {Array.from({ length: totalPanels }).map((_, index) => (
              <button
                key={index}
                onClick={() => snapToPanel(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
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
