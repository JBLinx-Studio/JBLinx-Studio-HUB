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
  momentum = 4.0,
  sensitivity = 5.0,
  minVelocity = 0.01
}: ParallaxScrollOptions = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const lastMouseY = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef<number>();
  const lastFrameTime = useRef(0);
  const velocityHistory = useRef<number[]>([]);
  const smoothingBuffer = useRef<number[]>([]);

  // Ultra-smooth scrolling animation with enhanced physics
  const animateScroll = (currentTime: number) => {
    const deltaTime = Math.min(currentTime - lastFrameTime.current, 20); // Higher precision
    lastFrameTime.current = currentTime;

    // Advanced time-based friction with velocity-dependent damping
    const baseFriction = friction;
    const velocityMagnitude = Math.abs(velocity.current);
    const adaptiveFriction = baseFriction + (1 - baseFriction) * Math.min(velocityMagnitude / 100, 0.3);
    const timeBasedFriction = Math.pow(adaptiveFriction, deltaTime / 16);
    
    if (velocityMagnitude > minVelocity) {
      const currentScroll = window.scrollY;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      
      // Enhanced easing with quintic interpolation for ultra-smooth motion
      const easingFactor = 1 - Math.pow(1 - Math.min(velocityMagnitude / 50, 1), 3);
      let newScroll = currentScroll + velocity.current * (deltaTime / 16) * (0.8 + easingFactor * 0.4);
      
      // Sophisticated boundary handling with progressive elastic resistance
      if (newScroll < 0) {
        const overshoot = Math.abs(newScroll);
        const elasticity = Math.pow(0.7, overshoot / 50); // Exponential resistance
        newScroll = newScroll * elasticity;
        velocity.current *= -0.15 * elasticity; // Gentle bounce with resistance decay
      } else if (newScroll > maxScroll) {
        const overshoot = newScroll - maxScroll;
        const elasticity = Math.pow(0.7, overshoot / 50);
        newScroll = maxScroll + overshoot * elasticity;
        velocity.current *= -0.15 * elasticity;
      }
      
      // Smooth the scroll position with temporal averaging
      smoothingBuffer.current.push(newScroll);
      if (smoothingBuffer.current.length > 3) {
        smoothingBuffer.current.shift();
      }
      const smoothedScroll = smoothingBuffer.current.reduce((sum, val) => sum + val, 0) / smoothingBuffer.current.length;
      
      window.scrollTo(0, smoothedScroll);
      setScrollY(smoothedScroll);
      
      // Apply enhanced friction with acceleration-based damping
      const acceleration = Math.abs(velocity.current - (velocityHistory.current[velocityHistory.current.length - 1] || 0));
      const accelerationDamping = 1 + acceleration * 0.02; // Slight damping for rapid changes
      
      velocity.current *= timeBasedFriction / accelerationDamping;
      
      // Track velocity for acceleration calculations
      velocityHistory.current.push(velocity.current);
      if (velocityHistory.current.length > 5) {
        velocityHistory.current.shift();
      }
      
      animationFrame.current = requestAnimationFrame(animateScroll);
    } else {
      velocity.current = 0;
      velocityHistory.current = [];
      smoothingBuffer.current = [];
    }
  };

  // Enhanced scroll event handling
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

  // Ultra-enhanced mouse drag with professional-grade physics
  useEffect(() => {
    if (!enableMouseDrag) return;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      
      setIsDragging(true);
      dragStartY.current = e.clientY;
      lastMouseY.current = e.clientY;
      velocity.current = 0;
      velocityHistory.current = [];
      smoothingBuffer.current = [];
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
      
      // Ultra-responsive scroll calculation with dynamic sensitivity
      const velocityBasedSensitivity = sensitivity * (1 + Math.min(Math.abs(deltaY) / 20, 1));
      const scrollDelta = deltaY * velocityBasedSensitivity;
      let newScroll = Math.max(0, Math.min(maxScroll, currentScroll + scrollDelta));

      window.scrollTo(0, newScroll);
      setScrollY(newScroll);
      
      // Advanced velocity calculation with temporal and spatial smoothing
      const instantVelocity = scrollDelta * momentum;
      const timeWeight = Math.min(performance.now() - lastFrameTime.current, 50) / 16; // Time-weighted velocity
      const weightedVelocity = instantVelocity * timeWeight;
      
      velocityHistory.current.push(weightedVelocity);
      
      // Keep optimal history length for best momentum calculation
      if (velocityHistory.current.length > 12) {
        velocityHistory.current.shift();
      }
      
      // Calculate exponentially weighted moving average for ultra-smooth velocity
      const weights = velocityHistory.current.map((_, i) => Math.pow(1.8, i));
      const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
      velocity.current = velocityHistory.current.reduce((sum, vel, i) => sum + vel * weights[i], 0) / totalWeight;
      
      lastMouseY.current = e.clientY;
      lastFrameTime.current = performance.now();
      e.preventDefault();
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      
      setIsDragging(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      
      // Ultra-enhanced momentum calculation with predictive smoothing
      if (velocityHistory.current.length > 2) {
        // Use weighted average with exponential decay for recent velocities
        const recentVelocities = velocityHistory.current.slice(-8);
        const weights = recentVelocities.map((_, i) => Math.pow(2.2, i)); // Higher exponential weighting
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
        
        const avgVelocity = recentVelocities.reduce((sum, vel, i) => sum + vel * weights[i], 0) / totalWeight;
        
        // Apply enhanced momentum with velocity-dependent multiplier
        const velocityMagnitude = Math.abs(avgVelocity);
        const momentumMultiplier = 1.8 + Math.min(velocityMagnitude / 30, 1.2); // Adaptive momentum
        
        velocity.current = avgVelocity * momentumMultiplier;
        
        // Cap maximum velocity for stability
        const maxVelocity = 80;
        velocity.current = Math.sign(velocity.current) * Math.min(Math.abs(velocity.current), maxVelocity);
      }
      
      // Start ultra-smooth momentum animation
      if (Math.abs(velocity.current) > minVelocity) {
        lastFrameTime.current = performance.now();
        smoothingBuffer.current = [window.scrollY];
        animationFrame.current = requestAnimationFrame(animateScroll);
      }
    };

    // Enhanced touch support with same ultra-smooth physics
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      setIsDragging(true);
      dragStartY.current = touch.clientY;
      lastMouseY.current = touch.clientY;
      velocity.current = 0;
      velocityHistory.current = [];
      smoothingBuffer.current = [];
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
      
      const velocityBasedSensitivity = sensitivity * (1 + Math.min(Math.abs(deltaY) / 20, 1));
      const scrollDelta = deltaY * velocityBasedSensitivity;
      let newScroll = Math.max(0, Math.min(maxScroll, currentScroll + scrollDelta));

      window.scrollTo(0, newScroll);
      setScrollY(newScroll);
      
      const instantVelocity = scrollDelta * momentum;
      const timeWeight = Math.min(performance.now() - lastFrameTime.current, 50) / 16;
      const weightedVelocity = instantVelocity * timeWeight;
      
      velocityHistory.current.push(weightedVelocity);
      
      if (velocityHistory.current.length > 12) {
        velocityHistory.current.shift();
      }
      
      const weights = velocityHistory.current.map((_, i) => Math.pow(1.8, i));
      const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
      velocity.current = velocityHistory.current.reduce((sum, vel, i) => sum + vel * weights[i], 0) / totalWeight;
      
      lastMouseY.current = touch.clientY;
      lastFrameTime.current = performance.now();
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      if (!isDragging) return;
      
      setIsDragging(false);
      
      if (velocityHistory.current.length > 2) {
        const recentVelocities = velocityHistory.current.slice(-8);
        const weights = recentVelocities.map((_, i) => Math.pow(2.2, i));
        const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
        
        const avgVelocity = recentVelocities.reduce((sum, vel, i) => sum + vel * weights[i], 0) / totalWeight;
        const velocityMagnitude = Math.abs(avgVelocity);
        const momentumMultiplier = 1.8 + Math.min(velocityMagnitude / 30, 1.2);
        
        velocity.current = avgVelocity * momentumMultiplier;
        
        const maxVelocity = 80;
        velocity.current = Math.sign(velocity.current) * Math.min(Math.abs(velocity.current), maxVelocity);
      }
      
      if (Math.abs(velocity.current) > minVelocity) {
        lastFrameTime.current = performance.now();
        smoothingBuffer.current = [window.scrollY];
        animationFrame.current = requestAnimationFrame(animateScroll);
      }
    };

    // Add all event listeners
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);
    
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
