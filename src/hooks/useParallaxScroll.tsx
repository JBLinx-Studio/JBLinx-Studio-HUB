
import { useEffect, useState, useRef } from 'react';

interface ParallaxScrollOptions {
  enableMouseDrag?: boolean;
  friction?: number;
  momentum?: number;
  sensitivity?: number;
  minVelocity?: number;
}

export const useParallaxScroll = ({
  enableMouseDrag = true,
  friction = 0.96,
  momentum = 1.2,
  sensitivity = 2.5,
  minVelocity = 0.1
}: ParallaxScrollOptions = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const lastMouseY = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number>();
  const lastFrameTime = useRef(0);

  // Enhanced smooth scrolling animation with momentum
  const animateScroll = (currentTime: number) => {
    const deltaTime = currentTime - lastFrameTime.current;
    lastFrameTime.current = currentTime;

    // Apply time-based friction for consistent physics regardless of framerate
    const timeBasedFriction = Math.pow(friction, deltaTime / 16);
    
    if (Math.abs(velocity.current) > minVelocity) {
      const currentScroll = window.scrollY;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      
      // Calculate new scroll position with improved easing
      let newScroll = currentScroll + velocity.current * (deltaTime / 16);
      
      // Boundary handling with soft bounce effect
      if (newScroll < 0) {
        newScroll = 0;
        velocity.current *= -0.3; // Soft bounce at top
      } else if (newScroll > maxScroll) {
        newScroll = maxScroll;
        velocity.current *= -0.3; // Soft bounce at bottom
      }
      
      window.scrollTo(0, newScroll);
      velocity.current *= timeBasedFriction;
      animationFrame.current = requestAnimationFrame(animateScroll);
    } else {
      velocity.current = 0;
    }
  };

  // Handle scroll events with improved throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!isDragging && !ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDragging]);

  // Enhanced mouse drag functionality with improved physics
  useEffect(() => {
    if (!enableMouseDrag) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // Only left mouse button
      
      setIsDragging(true);
      dragStartY.current = e.clientY;
      lastMouseY.current = e.clientY;
      velocity.current = 0;
      lastFrameTime.current = performance.now();
      
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaY = lastMouseY.current - e.clientY;
      const currentScroll = window.scrollY;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      
      // Enhanced scroll calculation with improved sensitivity
      const scrollDelta = deltaY * sensitivity;
      let newScroll = Math.max(0, Math.min(maxScroll, currentScroll + scrollDelta));

      window.scrollTo(0, newScroll);
      setScrollY(newScroll);
      
      // Calculate velocity for momentum with time-based smoothing
      velocity.current = scrollDelta * momentum;
      lastMouseY.current = e.clientY;
      
      e.preventDefault();
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      
      setIsDragging(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      
      // Start enhanced momentum animation with improved initial conditions
      if (Math.abs(velocity.current) > minVelocity) {
        lastFrameTime.current = performance.now();
        animationFrame.current = requestAnimationFrame(animateScroll);
      }
    };

    // Touch support for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      setIsDragging(true);
      dragStartY.current = touch.clientY;
      lastMouseY.current = touch.clientY;
      velocity.current = 0;
      lastFrameTime.current = performance.now();
      
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      
      const touch = e.touches[0];
      const deltaY = lastMouseY.current - touch.clientY;
      const currentScroll = window.scrollY;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      
      const scrollDelta = deltaY * sensitivity;
      let newScroll = Math.max(0, Math.min(maxScroll, currentScroll + scrollDelta));

      window.scrollTo(0, newScroll);
      setScrollY(newScroll);
      
      velocity.current = scrollDelta * momentum;
      lastMouseY.current = touch.clientY;
      
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;
      
      setIsDragging(false);
      
      if (Math.abs(velocity.current) > minVelocity) {
        lastFrameTime.current = performance.now();
        animationFrame.current = requestAnimationFrame(animateScroll);
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);
    
    // Touch events
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [enableMouseDrag, isDragging, friction, momentum, sensitivity, minVelocity]);

  return { 
    scrollY, 
    isDragging,
    getParallaxStyle: (speed: number) => ({
      transform: `translateY(${scrollY * speed}px)`
    })
  };
};
