
import React, { useRef, useState, useCallback, useEffect } from 'react';

interface HorizontalDragContainerProps {
  children: React.ReactNode;
  className?: string;
  autoScrollSpeed?: number;
  autoScrollDirection?: 'left' | 'right';
}

const HorizontalDragContainer: React.FC<HorizontalDragContainerProps> = ({ 
  children, 
  className = "",
  autoScrollSpeed = 1,
  autoScrollDirection = 'right'
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
  const autoScrollRef = useRef<number>();
  const momentumRef = useRef<number>();

  // Smooth auto-scroll with infinite loop
  const startAutoScroll = useCallback(() => {
    if (!containerRef.current || isDragging) return;

    const scroll = () => {
      if (!containerRef.current || isDragging) return;

      const container = containerRef.current;
      const scrollIncrement = autoScrollSpeed;
      
      if (autoScrollDirection === 'right') {
        container.scrollLeft += scrollIncrement;
        
        // Seamless loop - when we reach the end, jump to beginning
        const maxScroll = container.scrollWidth - container.clientWidth;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      } else {
        container.scrollLeft -= scrollIncrement;
        
        // Seamless loop - when we reach the beginning, jump to end
        if (container.scrollLeft <= 0) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          container.scrollLeft = maxScroll;
        }
      }

      autoScrollRef.current = requestAnimationFrame(scroll);
    };

    autoScrollRef.current = requestAnimationFrame(scroll);
  }, [autoScrollSpeed, autoScrollDirection, isDragging]);

  // Start auto-scroll
  useEffect(() => {
    startAutoScroll();
    return () => {
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
      // Resume auto-scroll immediately after drag ends
      startAutoScroll();
    }
  }, [isDragging, startAutoScroll]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea, [role="button"]')) {
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
    const walk = (x - startX) * 2; // Increased responsiveness
    const newScrollLeft = scrollLeft - walk;
    
    containerRef.current.scrollLeft = newScrollLeft;
    
    // Calculate velocity for momentum
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.pageX - lastX;
    
    if (deltaTime > 0) {
      const newVelocity = (deltaX / deltaTime) * 0.8 + velocity * 0.2;
      setVelocity(newVelocity);
    }
    
    setLastX(e.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));

    // Handle infinite loop during drag
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScroll;
    } else if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = 0;
    }
  }, [isDragging, startX, scrollLeft, lastX, lastTime, velocity]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    document.body.style.userSelect = 'auto';
    document.body.style.cursor = 'auto';
    
    // Apply smooth momentum without snapping
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 15;
      const friction = 0.96;
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.3) {
          if (momentumRef.current) {
            cancelAnimationFrame(momentumRef.current);
          }
          return;
        }
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        container.scrollLeft -= currentVelocity;
        
        // Handle infinite loop during momentum
        if (container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll;
        } else if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
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

  // Touch events
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea, [role="button"]')) {
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
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft - walk;
    
    containerRef.current.scrollLeft = newScrollLeft;
    
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = touch.pageX - lastX;
    
    if (deltaTime > 0) {
      const newVelocity = (deltaX / deltaTime) * 0.8 + velocity * 0.2;
      setVelocity(newVelocity);
    }
    
    setLastX(touch.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));

    // Handle infinite loop
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScroll;
    } else if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = 0;
    }
  }, [isDragging, startX, scrollLeft, lastX, lastTime, velocity]);

  const handleTouchEnd = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 15;
      const friction = 0.96;
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.3) {
          if (momentumRef.current) {
            cancelAnimationFrame(momentumRef.current);
          }
          return;
        }
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        container.scrollLeft -= currentVelocity;
        
        if (container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll;
        } else if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
        
        currentVelocity *= friction;
        momentumRef.current = requestAnimationFrame(momentumScroll);
      };
      
      momentumRef.current = requestAnimationFrame(momentumScroll);
    }
  }, [velocity]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (dragDistance > 5) {
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
    <div
      ref={containerRef}
      className={`overflow-x-auto scrollbar-hide cursor-auto select-none ${className}`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'auto'
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
        className="flex"
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalDragContainer;
