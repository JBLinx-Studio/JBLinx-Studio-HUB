
import React, { useRef, useState, useCallback, useEffect } from 'react';

interface HorizontalDragContainerProps {
  children: React.ReactNode;
  className?: string;
  autoScrollSpeed?: number;
  staticPanels?: React.ReactNode[];
  movingPanels?: React.ReactNode[];
}

const HorizontalDragContainer: React.FC<HorizontalDragContainerProps> = ({ 
  children, 
  className = "",
  autoScrollSpeed = 0.8,
  staticPanels = [],
  movingPanels = []
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
  const [autoScrollDirection, setAutoScrollDirection] = useState<'left' | 'right'>('right');
  const autoScrollRef = useRef<number>();
  const momentumRef = useRef<number>();

  // Smooth bidirectional auto-scroll with direction change at boundaries
  const startAutoScroll = useCallback(() => {
    if (!containerRef.current || isDragging) return;

    const scroll = () => {
      if (!containerRef.current || isDragging) return;

      const container = containerRef.current;
      const scrollIncrement = autoScrollSpeed;
      
      if (autoScrollDirection === 'right') {
        container.scrollLeft += scrollIncrement;
        
        // Check if we've reached the end, then reverse direction
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll - 1) {
          setAutoScrollDirection('left');
        }
      } else {
        container.scrollLeft -= scrollIncrement;
        
        // Check if we've reached the beginning, then reverse direction
        if (container.scrollLeft <= 1) {
          setAutoScrollDirection('right');
        }
      }

      autoScrollRef.current = requestAnimationFrame(scroll);
    };

    autoScrollRef.current = requestAnimationFrame(scroll);
  }, [autoScrollSpeed, autoScrollDirection, isDragging]);

  // Start auto-scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      startAutoScroll();
    }, 100); // Small delay to ensure content is loaded

    return () => {
      clearTimeout(timer);
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [startAutoScroll]);

  // Pause auto-scroll during drag
  useEffect(() => {
    if (isDragging) {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    } else {
      // Resume auto-scroll with a slight delay
      const timer = setTimeout(() => {
        startAutoScroll();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isDragging, startAutoScroll]);

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
    
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Smooth responsiveness
    const newScrollLeft = scrollLeft - walk;
    
    containerRef.current.scrollLeft = newScrollLeft;
    
    // Calculate smooth velocity for momentum
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.pageX - lastX;
    
    if (deltaTime > 0) {
      const newVelocity = (deltaX / deltaTime) * 0.9 + velocity * 0.1;
      setVelocity(newVelocity);
    }
    
    setLastX(e.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));
  }, [isDragging, startX, scrollLeft, lastX, lastTime, velocity]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    document.body.style.userSelect = 'auto';
    document.body.style.cursor = 'auto';
    
    // Apply ultra-smooth momentum
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 20;
      const friction = 0.98; // Higher friction for smoother deceleration
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.2) {
          if (momentumRef.current) {
            cancelAnimationFrame(momentumRef.current);
          }
          return;
        }
        
        container.scrollLeft -= currentVelocity;
        
        // Ensure we stay within bounds
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft < 0) {
          container.scrollLeft = 0;
          currentVelocity = 0;
        } else if (container.scrollLeft > maxScroll) {
          container.scrollLeft = maxScroll;
          currentVelocity = 0;
        }
        
        currentVelocity *= friction;
        momentumRef.current = requestAnimationFrame(momentumScroll);
      };
      
      momentumRef.current = requestAnimationFrame(momentumScroll);
    }
  }, [velocity]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleMouseUp();
    }
  }, [isDragging, handleMouseUp]);

  // Touch events for mobile
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
      const newVelocity = (deltaX / deltaTime) * 0.9 + velocity * 0.1;
      setVelocity(newVelocity);
    }
    
    setLastX(touch.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));
  }, [isDragging, startX, scrollLeft, lastX, lastTime, velocity]);

  const handleTouchEnd = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 20;
      const friction = 0.98;
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.2) {
          if (momentumRef.current) {
            cancelAnimationFrame(momentumRef.current);
          }
          return;
        }
        
        container.scrollLeft -= currentVelocity;
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft < 0) {
          container.scrollLeft = 0;
          currentVelocity = 0;
        } else if (container.scrollLeft > maxScroll) {
          container.scrollLeft = maxScroll;
          currentVelocity = 0;
        }
        
        currentVelocity *= friction;
        momentumRef.current = requestAnimationFrame(momentumScroll);
      };
      
      momentumRef.current = requestAnimationFrame(momentumScroll);
    }
  }, [velocity]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (dragDistance > 3) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, [dragDistance]);

  // Cleanup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventDrag = (e: Event) => e.preventDefault();
    
    container.addEventListener('dragstart', preventDrag);
    
    return () => {
      container.removeEventListener('dragstart', preventDrag);
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
      if (momentumRef.current) {
        cancelAnimationFrame(momentumRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Static Docked Panels */}
      {staticPanels.length > 0 && (
        <div className="hidden lg:block absolute left-0 top-0 z-10 h-full">
          <div className="flex h-full">
            {staticPanels.map((panel, index) => (
              <div key={index} className="static-panel bg-slate-900/95 border border-slate-700/50 backdrop-blur-sm">
                {panel}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Scrolling Container */}
      <div
        ref={containerRef}
        className={`overflow-x-auto scrollbar-hide cursor-grab select-none transition-all duration-300 ${className}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'auto',
          paddingLeft: staticPanels.length > 0 ? `${staticPanels.length * 300}px` : '0'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
      >
        <div 
          ref={contentRef} 
          className="flex transition-transform duration-300 ease-out"
          style={{ willChange: 'transform' }}
        >
          {/* Moving Panels */}
          {movingPanels.length > 0 ? (
            movingPanels.map((panel, index) => (
              <div key={index} className="moving-panel flex-shrink-0">
                {panel}
              </div>
            ))
          ) : (
            children
          )}
        </div>
      </div>

      {/* Direction Indicator */}
      <div className="absolute bottom-4 right-4 hidden lg:flex items-center space-x-2 text-slate-500 text-xs font-mono z-20">
        <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${
          autoScrollDirection === 'right' ? 'bg-purple-400 animate-pulse' : 'bg-slate-600'
        }`}></div>
        <span>BIDIRECTIONAL FLOW</span>
        <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${
          autoScrollDirection === 'left' ? 'bg-purple-400 animate-pulse' : 'bg-slate-600'
        }`}></div>
      </div>
    </div>
  );
};

export default HorizontalDragContainer;
