
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface VerticalPanelContainerProps {
  children: React.ReactNode;
  className?: string;
  showNavigation?: boolean;
  panelHeight?: number;
}

const VerticalPanelContainer: React.FC<VerticalPanelContainerProps> = ({ 
  children, 
  className = "",
  showNavigation = true,
  panelHeight = 300
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [totalPanels, setTotalPanels] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const totalHeight = container.scrollHeight;
      const visibleHeight = container.clientHeight;
      const panels = Math.ceil(totalHeight / visibleHeight);
      setTotalPanels(panels);
    }
  }, [children]);

  const scrollToPanel = useCallback((panelIndex: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const targetScroll = panelIndex * panelHeight;
    
    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
    
    setCurrentPanel(panelIndex);
  }, [panelHeight]);

  const handlePrevious = useCallback(() => {
    if (currentPanel > 0) {
      scrollToPanel(currentPanel - 1);
    }
  }, [currentPanel, scrollToPanel]);

  const handleNext = useCallback(() => {
    const maxPanel = Math.max(0, totalPanels - 1);
    if (currentPanel < maxPanel) {
      scrollToPanel(currentPanel + 1);
    }
  }, [currentPanel, totalPanels, scrollToPanel]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartY(e.pageY);
    setScrollTop(containerRef.current.scrollTop);
    containerRef.current.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const y = e.pageY;
    const walk = (y - startY) * 1.5;
    containerRef.current.scrollTop = scrollTop - walk;
  }, [isDragging, startY, scrollTop]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`overflow-y-auto scrollbar-hide cursor-grab select-none ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          height: panelHeight
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {children}
      </div>

      {/* Navigation Controls */}
      {showNavigation && totalPanels > 1 && (
        <>
          <button
            onClick={handlePrevious}
            disabled={currentPanel === 0}
            className="absolute -top-2 right-2 bg-slate-800/95 border border-purple-500/50 text-purple-400 p-1 backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
            aria-label="Previous panel"
          >
            <ChevronUp className="w-3 h-3" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentPanel >= totalPanels - 1}
            className="absolute -bottom-2 right-2 bg-slate-800/95 border border-purple-500/50 text-purple-400 p-1 backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
            aria-label="Next panel"
          >
            <ChevronDown className="w-3 h-3" />
          </button>
        </>
      )}
    </div>
  );
};

export default VerticalPanelContainer;
