
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
  const snapTimeoutRef = useRef<number>();

  // Get panel width for snapping
  const getPanelWidth = useCallback(() => {
    if (!contentRef.current) return 0;
    const firstChild = contentRef.current.firstElementChild as HTMLElement;
    return firstChild ? firstChild.offsetWidth + 24 : 0; // 24px for gap
  }, []);

  // Snap to nearest panel
  const snapToPanel = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const panelWidth = getPanelWidth();
    if (panelWidth === 0) return;

    const currentScroll = container.scrollLeft;
    const nearestPanel = Math.round(currentScroll / panelWidth);
    const targetScroll = nearestPanel * panelWidth;

    // Smooth scroll to target
    const startScroll = currentScroll;
    const distance = targetScroll - startScroll;
    const duration = 300;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newScroll = startScroll + (distance * easeOut);
      
      container.scrollLeft = newScroll;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [getPanelWidth]);

  // Enhanced auto-scroll with smooth panel transitions
  const startAutoScroll = useCallback(() => {
    if (!containerRef.current || !isAutoScrolling || isDragging) return;

    const scroll = () => {
      if (!containerRef.current || !isAutoScrolling || isDragging) return;

      const container = containerRef.current;
      const panelWidth = getPanelWidth();
      
      if (panelWidth > 0) {
        // Move by small increments for smooth motion
        const scrollIncrement = autoScrollSpeed;
        
        if (autoScrollDirection === 'right') {
          container.scrollLeft += scrollIncrement;
          
          // Check if we need to loop back
          const maxScroll = container.scrollWidth - container.clientWidth;
          if (container.scrollLeft >= maxScroll - panelWidth) {
            // Smoothly transition to beginning
            container.scrollLeft = 0;
          }
        } else {
          container.scrollLeft -= scrollIncrement;
          
          if (container.scrollLeft <= 0) {
            // Smoothly transition to end
            const maxScroll = container.scrollWidth - container.clientWidth;
            container.scrollLeft = maxScroll - panelWidth;
          }
        }
      }

      autoScrollRef.current = requestAnimationFrame(scroll);
    };

    autoScrollRef.current = requestAnimationFrame(scroll);
  }, [autoScrollSpeed, autoScrollDirection, isAutoScrolling, isDragging, getPanelWidth]);

  // Setup single set of content (no duplicates)
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    
    // Remove any existing clones
    const existingClones = container.querySelectorAll('[data-clone]');
    existingClones.forEach(clone => clone.remove());

    // Set initial scroll position
    setTimeout(() => {
      container.scrollLeft = 0;
    }, 0);
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

  // Pause auto-scroll only when dragging
  useEffect(() => {
    if (isDragging) {
      setIsAutoScrolling(false);
      if (autoScrollRef.current) {
        cancelAnimationFrame(autoScrollRef.current);
      }
    } else {
      // Resume auto-scroll after a short delay
      const timer = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isDragging]);

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
    
    // Clear any pending snap
    if (snapTimeoutRef.current) {
      clearTimeout(snapTimeoutRef.current);
    }
    
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    const newScrollLeft = scrollLeft - walk;
    
    containerRef.current.scrollLeft = newScrollLeft;
    
    // Calculate velocity for momentum
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.pageX - lastX;
    
    if (deltaTime > 0) {
      const newVelocity = (deltaX / deltaTime) * 0.7 + velocity * 0.3;
      setVelocity(newVelocity);
    }
    
    setLastX(e.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));

    // Handle looping during drag
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (container.scrollLeft <= -100) {
      container.scrollLeft = maxScroll - 100;
    } else if (container.scrollLeft >= maxScroll + 100) {
      container.scrollLeft = 100;
    }
  }, [isDragging, startX, scrollLeft, lastX, lastTime, velocity]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    document.body.style.userSelect = 'auto';
    document.body.style.cursor = 'auto';
    
    // Apply momentum with smooth deceleration
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 20;
      const friction = 0.95;
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.5) {
          if (momentumRef.current) {
            cancelAnimationFrame(momentumRef.current);
          }
          // Snap to nearest panel after momentum stops
          snapTimeoutRef.current = window.setTimeout(snapToPanel, 100);
          return;
        }
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        container.scrollLeft -= currentVelocity;
        
        // Handle looping
        if (container.scrollLeft <= 0) {
          container.scrollLeft = maxScroll;
        } else if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
        
        currentVelocity *= friction;
        momentumRef.current = requestAnimationFrame(momentumScroll);
      };
      
      momentumRef.current = requestAnimationFrame(momentumScroll);
    } else {
      // Snap immediately if no momentum
      snapTimeoutRef.current = window.setTimeout(snapToPanel, 100);
    }
  }, [velocity, snapToPanel]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleMouseUp();
    }
  }, [isDragging, handleMouseUp]);

  // Touch events with same functionality
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
    
    if (snapTimeoutRef.current) {
      clearTimeout(snapTimeoutRef.current);
    }
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
      const newVelocity = (deltaX / deltaTime) * 0.7 + velocity * 0.3;
      setVelocity(newVelocity);
    }
    
    setLastX(touch.pageX);
    setLastTime(currentTime);
    setDragDistance(Math.abs(walk));

    // Handle looping
    const container = containerRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (container.scrollLeft <= -100) {
      container.scrollLeft = maxScroll - 100;
    } else if (container.scrollLeft >= maxScroll + 100) {
      container.scrollLeft = 100;
    }
  }, [isDragging, startX, scrollLeft, lastX, lastTime, velocity]);

  const handleTouchEnd = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 20;
      const friction = 0.95;
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.5) {
          if (momentumRef.current) {
            cancelAnimationFrame(momentumRef.current);
          }
          snapTimeoutRef.current = window.setTimeout(snapToPanel, 100);
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
    } else {
      snapTimeoutRef.current = window.setTimeout(snapToPanel, 100);
    }
  }, [velocity, snapToPanel]);

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
      if (snapTimeoutRef.current) {
        clearTimeout(snapTimeoutRef.current);
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
        scrollSnapType: 'x mandatory'
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
        className="flex space-x-6"
        style={{ scrollSnapAlign: 'start' }}
      >
        {children}
      </div>
    </div>
  );
};

export default HorizontalDragContainer;
