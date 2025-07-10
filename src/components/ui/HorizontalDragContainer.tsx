
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
  autoScrollSpeed = 0.3,
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
  const [isHovering, setIsHovering] = useState(false);
  const autoScrollRef = useRef<number>();
  const momentumRef = useRef<number>();

  // Enhanced auto-scroll with seamless looping
  const startAutoScroll = useCallback(() => {
    if (!containerRef.current || !isAutoScrolling || isDragging) return;

    const scroll = () => {
      if (!containerRef.current || !isAutoScrolling || isDragging) return;

      const container = containerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (autoScrollDirection === 'right') {
        container.scrollLeft += autoScrollSpeed;
        // Seamless loop - reset when past halfway through duplicated content
        if (container.scrollLeft >= maxScroll * 0.75) {
          container.scrollLeft = maxScroll * 0.25;
        }
      } else {
        container.scrollLeft -= autoScrollSpeed;
        if (container.scrollLeft <= maxScroll * 0.25) {
          container.scrollLeft = maxScroll * 0.75;
        }
      }

      autoScrollRef.current = requestAnimationFrame(scroll);
    };

    autoScrollRef.current = requestAnimationFrame(scroll);
  }, [autoScrollSpeed, autoScrollDirection, isAutoScrolling, isDragging]);

  // Setup seamless infinite scrolling by triplicating content
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;
    
    // Remove existing clones
    const existingClones = container.querySelectorAll('[data-clone]');
    existingClones.forEach(clone => clone.remove());
    
    // Create two clones for seamless infinite scroll
    const clone1 = content.cloneNode(true) as HTMLElement;
    const clone2 = content.cloneNode(true) as HTMLElement;
    clone1.setAttribute('data-clone', 'true');
    clone2.setAttribute('data-clone', 'true');
    clone1.setAttribute('aria-hidden', 'true');
    clone2.setAttribute('aria-hidden', 'true');
    
    container.appendChild(clone1);
    container.appendChild(clone2);

    // Set initial scroll position to middle section
    setTimeout(() => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollLeft = maxScroll / 3;
    }, 0);

    return () => {
      if (container.contains(clone1)) container.removeChild(clone1);
      if (container.contains(clone2)) container.removeChild(clone2);
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

  // Enhanced pause/resume logic
  useEffect(() => {
    if (isDragging || isHovering) {
      setIsAutoScrolling(false);
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    } else {
      const timer = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isDragging, isHovering]);

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
    
    // Enhanced velocity calculation with smoothing
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.pageX - lastX;
    
    if (deltaTime > 0) {
      const newVelocity = (deltaX / deltaTime) * 0.8 + velocity * 0.2; // Smoothing
      setVelocity(newVelocity);
    }
    
    setLastX(e.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));

    // Handle seamless boundaries during drag
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScroll * 0.66;
    } else if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = maxScroll * 0.33;
    }
  }, [isDragging, startX, scrollLeft, lastX, lastTime, velocity]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    document.body.style.userSelect = 'auto';
    document.body.style.cursor = 'auto';
    
    // Enhanced momentum with smoother deceleration
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 25;
      const friction = 0.94; // Smoother friction
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.3) {
          if (momentumRef.current) {
            cancelAnimationFrame(momentumRef.current);
          }
          return;
        }
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        container.scrollLeft -= currentVelocity;
        
        // Seamless boundary handling
        if (container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll * 0.66;
        } else if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = maxScroll * 0.33;
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
    setIsHovering(false);
  }, [isDragging, handleMouseUp]);

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  // Touch events with same enhancements
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

    // Handle boundaries
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScroll * 0.66;
    } else if (container.scrollLeft >= maxScroll) {
      container.scrollLeft = maxScroll * 0.33;
    }
  }, [isDragging, startX, scrollLeft, lastX, lastTime, velocity]);

  const handleTouchEnd = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 25;
      const friction = 0.94;
      
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
          container.scrollLeft = maxScroll * 0.66;
        } else if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = maxScroll * 0.33;
        }
        
        currentVelocity *= friction;
        momentumRef.current = requestAnimationFrame(momentumScroll);
      };
      
      momentumRef.current = requestAnimationFrame(momentumScroll);
    }
  }, [velocity]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (dragDistance > 8) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, [dragDistance]);

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
        WebkitOverflowScrolling: 'touch'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      <div ref={contentRef} className="flex space-x-4">
        {children}
      </div>
    </div>
  );
};

export default HorizontalDragContainer;
