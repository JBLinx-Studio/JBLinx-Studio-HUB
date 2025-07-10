
import React, { useRef, useState, useCallback, useEffect } from 'react';

interface HorizontalDragContainerProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalDragContainer: React.FC<HorizontalDragContainerProps> = ({ 
  children, 
  className = "" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setLastX(e.pageX);
    setLastTime(Date.now());
    setVelocity(0);
    
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.style.userSelect = 'none';
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
    
    // Calculate velocity for momentum
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = e.pageX - lastX;
    
    if (deltaTime > 0) {
      setVelocity(deltaX / deltaTime);
    }
    
    setLastX(e.pageX);
    setLastTime(currentTime);
  }, [isDragging, startX, scrollLeft, lastX, lastTime]);

  const handleMouseUp = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    containerRef.current.style.cursor = 'grab';
    containerRef.current.style.userSelect = 'auto';
    
    // Apply momentum scrolling
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 15; // Scale up the velocity
      const friction = 0.95; // Friction factor
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.1) return;
        
        container.scrollLeft -= currentVelocity;
        currentVelocity *= friction;
        
        requestAnimationFrame(momentumScroll);
      };
      
      requestAnimationFrame(momentumScroll);
    }
  }, [velocity]);

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
    setLastX(touch.pageX);
    setLastTime(Date.now());
    setVelocity(0);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
    
    // Calculate velocity for momentum
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const deltaX = touch.pageX - lastX;
    
    if (deltaTime > 0) {
      setVelocity(deltaX / deltaTime);
    }
    
    setLastX(touch.pageX);
    setLastTime(currentTime);
  }, [isDragging, startX, scrollLeft, lastX, lastTime]);

  const handleTouchEnd = useCallback(() => {
    if (!containerRef.current) return;
    
    setIsDragging(false);
    
    // Apply momentum scrolling for touch
    if (Math.abs(velocity) > 0.1) {
      const container = containerRef.current;
      let currentVelocity = velocity * 15;
      const friction = 0.95;
      
      const momentumScroll = () => {
        if (Math.abs(currentVelocity) < 0.1) return;
        
        container.scrollLeft -= currentVelocity;
        currentVelocity *= friction;
        
        requestAnimationFrame(momentumScroll);
      };
      
      requestAnimationFrame(momentumScroll);
    }
  }, [velocity]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Prevent default drag behavior on images and other elements
    const preventDrag = (e: Event) => e.preventDefault();
    
    container.addEventListener('dragstart', preventDrag);
    
    return () => {
      container.removeEventListener('dragstart', preventDrag);
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
    >
      {children}
    </div>
  );
};

export default HorizontalDragContainer;
