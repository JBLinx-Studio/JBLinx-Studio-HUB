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
  friction = 0.88,
  momentum = 2.5,
  sensitivity = 3.5,
  minVelocity = 0.05
}: ParallaxScrollOptions = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const lastMouseY = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number>();
  const lastFrameTime = useRef(0);
  const velocityHistory = useRef<number[]>([]);

  // Enhanced smooth scrolling animation with improved momentum physics
  const animateScroll = (currentTime: number) => {
    const deltaTime = Math.min(currentTime - lastFrameTime.current, 32); // Cap at ~30fps for stability
    lastFrameTime.current = currentTime;

    // Apply sophisticated time-based friction with exponential decay
    const timeBasedFriction = Math.pow(friction, deltaTime / 16);
    
    if (Math.abs(velocity.current) > minVelocity) {
      const currentScroll = window.scrollY;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      
      // Calculate new scroll position with enhanced easing and momentum preservation
      let newScroll = currentScroll + velocity.current * (deltaTime / 16);
      
      // Enhanced boundary handling with progressive resistance and smooth bounce
      if (newScroll < 0) {
        const overshoot = Math.abs(newScroll);
        const resistance = Math.min(overshoot / 100, 0.8); // Progressive resistance
        newScroll = newScroll * (1 - resistance);
        velocity.current *= -0.2 * (1 - resistance); // Softer bounce with resistance
      } else if (newScroll > maxScroll) {
        const overshoot = newScroll - maxScroll;
        const resistance = Math.min(overshoot / 100, 0.8);
        newScroll = maxScroll + overshoot * (1 - resistance);
        velocity.current *= -0.2 * (1 - resistance);
      }
      
      window.scrollTo(0, newScroll);
      setScrollY(newScroll);
      
      // Apply enhanced friction with velocity-dependent damping
      const velocityFactor = Math.min(Math.abs(velocity.current) / 50, 1);
      const adaptiveFriction = friction + (1 - friction) * velocityFactor * 0.1;
      velocity.current *= Math.pow(adaptiveFriction, deltaTime / 16);
      
      animationFrame.current = requestAnimationFrame(animateScroll);
    } else {
      velocity.current = 0;
      velocityHistory.current = [];
    }
  };

  // Enhanced scroll event handling with improved performance
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

  // Significantly enhanced mouse drag functionality with advanced physics
  useEffect(() => {
    if (!enableMouseDrag) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // Only left mouse button
      
      setIsDragging(true);
      dragStartY.current = e.clientY;
      lastMouseY.current = e.clientY;
      velocity.current = 0;
      velocityHistory.current = [];
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
      
      // Enhanced scroll calculation with improved sensitivity and responsiveness
      const scrollDelta = deltaY * sensitivity;
      let newScroll = Math.max(0, Math.min(maxScroll, currentScroll + scrollDelta));

      window.scrollTo(0, newScroll);
      setScrollY(newScroll);
      
      // Advanced velocity calculation with temporal smoothing
      const instantVelocity = scrollDelta * momentum;
      velocityHistory.current.push(instantVelocity);
      
      // Keep only recent velocity samples for better momentum calculation
      if (velocityHistory.current.length > 8) {
        velocityHistory.current.shift();
      }
      
      // Calculate weighted average velocity with emphasis on recent samples
      const weights = velocityHistory.current.map((_, i) => Math.pow(1.5, i));
      const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
      velocity.current = velocityHistory.current.reduce((sum, vel, i) => sum + vel * weights[i], 0) / totalWeight;
      
      lastMouseY.current = e.clientY;
      e.preventDefault();
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      
      setIsDragging(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      
      // Enhanced momentum calculation from velocity history
      if (velocityHistory.current.length > 0) {
        // Use weighted average of recent velocities for smoother momentum
        const recentVelocities = velocityHistory.current.slice(-5);
        const weights = recentVelocities.map((_, i) => Math.pow(1.8, i));
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
        velocity.current = recentVelocities.reduce((sum, vel, i) => sum + vel * weights[i], 0) / totalWeight;
        
        // Apply momentum multiplier for better feel
        velocity.current *= 1.4;
      }
      
      // Start enhanced momentum animation with improved initial conditions
      if (Math.abs(velocity.current) > minVelocity) {
        lastFrameTime.current = performance.now();
        animationFrame.current = requestAnimationFrame(animateScroll);
      }
    };

    // Enhanced touch support for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      setIsDragging(true);
      dragStartY.current = touch.clientY;
      lastMouseY.current = touch.clientY;
      velocity.current = 0;
      velocityHistory.current = [];
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
      
      const instantVelocity = scrollDelta * momentum;
      velocityHistory.current.push(instantVelocity);
      
      if (velocityHistory.current.length > 8) {
        velocityHistory.current.shift();
      }
      
      const weights = velocityHistory.current.map((_, i) => Math.pow(1.5, i));
      const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
      velocity.current = velocityHistory.current.reduce((sum, vel, i) => sum + vel * weights[i], 0) / totalWeight;
      
      lastMouseY.current = touch.clientY;
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;
      
      setIsDragging(false);
      
      if (velocityHistory.current.length > 0) {
        const recentVelocities = velocityHistory.current.slice(-5);
        const weights = recentVelocities.map((_, i) => Math.pow(1.8, i));
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
        velocity.current = recentVelocities.reduce((sum, vel, i) => sum + vel * weights[i], 0) / totalWeight;
        velocity.current *= 1.4;
      }
      
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
