
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
  autoScrollSpeed = 0.5,
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
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollRef = useRef<number>();
  const momentumRef = useRef<number>();

  // Auto-scroll functionality
  const startAutoScroll = useCallback(() => {
    if (!containerRef.current || !isAutoScrolling) return;

    const scroll = () => {
      if (!containerRef.current || !isAutoScrolling || isDragging) return;

      const container = containerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (autoScrollDirection === 'right') {
        container.scrollLeft += autoScrollSpeed;
        // Reset to start when reaching the end
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      } else {
        container.scrollLeft -= autoScrollSpeed;
        // Reset to end when reaching the start
        if (container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll;
        }
      }

      autoScrollRef.current = requestAnimationFrame(scroll);
    };

    autoScrollRef.current = requestAnimationFrame(scroll);
  }, [autoScrollSpeed, autoScrollDirection, isAutoScrolling, isDragging]);

  // Setup infinite scrolling by duplicating content
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    
    // Clone the content for infinite scroll
    const clone = content.cloneNode(true) as HTMLElement;
    clone.setAttribute('aria-hidden', 'true');
    container.appendChild(clone);

    return () => {
      if (container.contains(clone)) {
        container.removeChild(clone);
      }
    };
  }, [children]);

  // Start auto-scroll when component mounts
  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, [startAutoScroll]);

  // Pause auto-scroll on user interaction
  useEffect(() => {
    if (isDragging) {
      setIsAutoScrolling(false);
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    } else {
      // Resume auto-scroll after a delay
      const timer = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isDragging]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    // Don't start drag on interactive elements
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select, textarea')) {
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
    
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
    
    // Prevent text selection during drag
    document.body.style.userSelect = 'none';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Smooth scrolling multiplier
    const newScrollLeft = scrollLeft - walk;
    
    containerRef.current.scrollLeft = newScrollLeft;
    
    // Calculate velocity for momentum
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.pageX - lastX;
    
    if (deltaTime > 0) {
      setVelocity(deltaX / deltaTime);
    }
    
    setLastX(e.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));
  }, [isDragging, startX, scrollLeft, lastX, lastTime]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = 'auto';
    document.body.style.userSelect = 'auto';
    
    // Apply momentum scrolling
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 20; // Scale up the velocity
      const friction = 0.92; // Smooth friction
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.5) {
          if (momentumRef.current) {
            cancelAnimationFrame(momentumRef.current);
          }
          return;
        }
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        container.scrollLeft -= currentVelocity;
        
        // Handle infinite scroll boundaries
        if (container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll / 2;
        } else if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = maxScroll / 2;
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
    if (target.closest('button, a, input, select, textarea')) {
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
    
    // Calculate velocity for momentum
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = touch.pageX - lastX;
    
    if (deltaTime > 0) {
      setVelocity(deltaX / deltaTime);
    }
    
    setLastX(touch.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));
  }, [isDragging, startX, scrollLeft, lastX, lastTime]);

  const handleTouchEnd = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    
    // Apply momentum scrolling for touch
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 20;
      const friction = 0.92;
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.5) {
          if (momentumRef.current) {
            cancelAnimationFrame(momentumRef.current);
          }
          return;
        }
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        container.scrollLeft -= currentVelocity;
        
        // Handle infinite scroll boundaries
        if (container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll / 2;
        } else if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = maxScroll / 2;
        }
        
        currentVelocity *= friction;
        momentumRef.current = requestAnimationFrame(momentumScroll);
      };
      
      momentumRef.current = requestAnimationFrame(momentumScroll);
    }
  }, [velocity]);

  // Handle clicks - prevent if dragged
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (dragDistance > 5) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, [dragDistance]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Prevent default drag behavior on images and other elements
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
      className={`overflow-x-auto scrollbar-hide cursor-grab select-none ${className}`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
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
      <div ref={contentRef} className="flex space-x-6">
        {children}
      </div>
    </div>
  );
};

export default HorizontalDragContainer;
