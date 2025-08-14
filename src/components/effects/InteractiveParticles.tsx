
import React, { useEffect, useRef, useState, useCallback } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
  originalSize: number;
  energy: number;
  isActive: boolean;
}

interface InteractiveParticlesProps {
  theme: 'emerald' | 'blue' | 'green' | 'orange' | 'purple';
  particleCount?: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const InteractiveParticles: React.FC<InteractiveParticlesProps> = ({ 
  theme, 
  particleCount = 15, // Reduced further for better performance
  containerRef 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isOver: false });
  const [isActive, setIsActive] = useState(false);
  const lastFrameTime = useRef(0);
  const poolRef = useRef<Particle[]>([]);
  
  // Performance monitoring
  const frameCount = useRef(0);
  const lastPerformanceCheck = useRef(0);
  const adaptiveQuality = useRef(1);

  const themeConfig = {
    emerald: {
      colors: ['#10b981', '#059669', '#047857', '#34d399'],
      glowColor: 'rgba(16, 185, 129, 0.4)',
      magnetism: 3.0
    },
    blue: {
      colors: ['#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa'],
      glowColor: 'rgba(59, 130, 246, 0.4)',
      magnetism: 2.8
    },
    green: {
      colors: ['#22c55e', '#16a34a', '#15803d', '#4ade80'],
      glowColor: 'rgba(34, 197, 94, 0.4)',
      magnetism: 3.2
    },
    orange: {
      colors: ['#f97316', '#ea580c', '#dc2626', '#fb923c'],
      glowColor: 'rgba(249, 115, 22, 0.4)',
      magnetism: 3.5
    },
    purple: {
      colors: ['#a855f7', '#9333ea', '#7c3aed', '#c084fc'],
      glowColor: 'rgba(168, 85, 247, 0.4)',
      magnetism: 2.9
    }
  };

  const configRef = useRef(themeConfig[theme]);
  const interactionRadius = useRef(120);
  const maxConnectionDistance = useRef(50);

  // Object pooling for better memory management
  const getFromPool = useCallback((): Particle => {
    if (poolRef.current.length > 0) {
      return poolRef.current.pop()!;
    }
    return {} as Particle;
  }, []);

  const returnToPool = useCallback((particle: Particle) => {
    particle.isActive = false;
    if (poolRef.current.length < 50) { // Limit pool size
      poolRef.current.push(particle);
    }
  }, []);

  const createParticle = useCallback((x?: number, y?: number): Particle => {
    const canvas = canvasRef.current;
    if (!canvas) return {} as Particle;

    const colors = configRef.current.colors;
    const size = Math.random() * 1.5 + 0.8;
    const particle = getFromPool();
    
    Object.assign(particle, {
      id: Math.random(),
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      size,
      originalSize: size,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.8 + 0.2,
      life: 0,
      maxLife: Math.random() * 180 + 120,
      energy: Math.random() * 50 + 25,
      isActive: true
    });

    return particle;
  }, [theme, getFromPool]);

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Clear existing particles
    particlesRef.current.forEach(p => returnToPool(p));
    particlesRef.current = [];
    
    // Create new particles
    for (let i = 0; i < particleCount * adaptiveQuality.current; i++) {
      particlesRef.current.push(createParticle());
    }
  }, [particleCount, createParticle, returnToPool]);

  const updateParticles = useCallback((deltaTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mouse = mouseRef.current;
    const config = configRef.current;
    const dt = Math.min(deltaTime * 0.016, 0.033); // Cap delta time
    const particles = particlesRef.current;
    
    // Pre-calculate mouse interaction
    const mouseInteractionRadius = interactionRadius.current * adaptiveQuality.current;
    const mouseInteractionRadiusSquared = mouseInteractionRadius * mouseInteractionRadius;
    
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      if (!particle.isActive) {
        particles.splice(i, 1);
        continue;
      }

      // Mouse interaction with optimized distance calculation
      if (mouse.isOver) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distanceSquared = dx * dx + dy * dy;
        
        if (distanceSquared < mouseInteractionRadiusSquared) {
          const distance = Math.sqrt(distanceSquared);
          const normalizedDistance = distance / mouseInteractionRadius;
          const force = (1 - normalizedDistance) * normalizedDistance * 2.5;
          
          // Enhanced swirling motion
          const time = Date.now() * 0.004;
          const swirl = Math.sin(time + i * 0.5) * 0.8;
          const angle = Math.atan2(dy, dx) + swirl;
          
          const forceMultiplier = force * config.magnetism * dt * 0.3;
          particle.vx += Math.cos(angle) * forceMultiplier;
          particle.vy += Math.sin(angle) * forceMultiplier;
          
          // Dynamic particle properties
          particle.energy = Math.min(particle.energy + force * 40, 120);
          particle.size = particle.originalSize * (1 + force * 2);
          particle.opacity = Math.min(particle.opacity + force * 0.8, 1);
          
          // Sparkle generation (reduced frequency)
          if (distance < 40 && Math.random() < 0.02 && particles.length < particleCount * 1.2) {
            particles.push(createParticle(
              particle.x + (Math.random() - 0.5) * 15,
              particle.y + (Math.random() - 0.5) * 15
            ));
          }
        }
      }

      // Physics update
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vx *= 0.95;
      particle.vy *= 0.95;

      // Boundary collision
      const radius = particle.size;
      if (particle.x <= radius || particle.x >= canvas.width - radius) {
        particle.vx *= -0.8;
        particle.x = Math.max(radius, Math.min(canvas.width - radius, particle.x));
      }
      if (particle.y <= radius || particle.y >= canvas.height - radius) {
        particle.vy *= -0.8;
        particle.y = Math.max(radius, Math.min(canvas.height - radius, particle.y));
      }

      // Lifecycle
      particle.life++;
      if (particle.life > particle.maxLife) {
        returnToPool(particle);
        particles.splice(i, 1);
        continue;
      }

      // Energy decay
      if (!mouse.isOver || Math.sqrt(Math.pow(mouse.x - particle.x, 2) + Math.pow(mouse.y - particle.y, 2)) > mouseInteractionRadius) {
        particle.energy = Math.max(particle.energy * 0.99, 25);
        particle.size = Math.max(particle.size * 0.995, particle.originalSize);
        particle.opacity = Math.max(particle.opacity * 0.998, 0.2);
      }
    }

    // Maintain particle count
    while (particles.length < particleCount * adaptiveQuality.current) {
      particles.push(createParticle());
    }
  }, [theme, particleCount, createParticle, returnToPool]);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { 
      alpha: true, 
      willReadFrequently: false,
      desynchronized: true
    });
    if (!canvas || !ctx) return;

    // Clear with minimal overdraw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const particles = particlesRef.current;
    const maxConnectionDistanceSquared = maxConnectionDistance.current * maxConnectionDistance.current;
    
    // Batch rendering by color
    const particlesByColor = new Map<string, Particle[]>();
    
    particles.forEach(particle => {
      if (!particle.isActive) return;
      
      if (!particlesByColor.has(particle.color)) {
        particlesByColor.set(particle.color, []);
      }
      particlesByColor.get(particle.color)!.push(particle);
    });
    
    // Render particles
    ctx.save();
    particlesByColor.forEach((colorParticles, color) => {
      ctx.fillStyle = color;
      
      colorParticles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Glow effect (only for high energy particles)
        if (particle.energy > 50) {
          const glowSize = 4 + particle.energy * 0.05;
          ctx.shadowBlur = glowSize;
          ctx.shadowColor = color;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Core highlight
        if (particle.energy > 70) {
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#ffffff';
          ctx.globalAlpha = (particle.opacity * particle.energy) / 500;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });
    });
    
    // Optimized connections (only for nearby high-energy particles)
    if (adaptiveQuality.current > 0.7) {
      ctx.globalAlpha = 0.1;
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        if (!particle.isActive || particle.energy < 60) continue;
        
        for (let j = i + 1; j < particles.length && j < i + 5; j++) { // Limit connection checks
          const other = particles[j];
          if (!other.isActive || other.energy < 60) continue;
          
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distanceSquared = dx * dx + dy * dy;
          
          if (distanceSquared < maxConnectionDistanceSquared) {
            const distance = Math.sqrt(distanceSquared);
            const opacity = ((maxConnectionDistance.current - distance) / maxConnectionDistance.current) * 0.15;
            
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = particle.color;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }
    }
    
    ctx.restore();
  }, [theme]);

  // Performance-optimized animation loop
  const animate = useCallback((currentTime: number) => {
    const now = performance.now();
    const deltaTime = now - lastFrameTime.current;
    
    // Dynamic frame rate limiting
    const targetInterval = 1000 / 60;
    if (deltaTime < targetInterval * 0.9) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    
    lastFrameTime.current = now;
    frameCount.current++;
    
    // Performance monitoring and adaptive quality
    if (now - lastPerformanceCheck.current > 1000) { // Check every second
      const fps = frameCount.current;
      frameCount.current = 0;
      lastPerformanceCheck.current = now;
      
      if (fps < 45) {
        adaptiveQuality.current = Math.max(0.5, adaptiveQuality.current - 0.1);
        interactionRadius.current = Math.max(80, interactionRadius.current - 10);
        maxConnectionDistance.current = Math.max(30, maxConnectionDistance.current - 5);
      } else if (fps > 55) {
        adaptiveQuality.current = Math.min(1, adaptiveQuality.current + 0.05);
        interactionRadius.current = Math.min(120, interactionRadius.current + 5);
        maxConnectionDistance.current = Math.min(50, maxConnectionDistance.current + 2);
      }
    }
    
    updateParticles(deltaTime);
    drawParticles();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  // Theme update
  useEffect(() => {
    configRef.current = themeConfig[theme];
  }, [theme]);

  // Main setup effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Limit DPR for performance
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    resizeCanvas();
    initParticles();

    // Throttled mouse move handler
    let mouseMoveTimeout: number;
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(mouseMoveTimeout);
      mouseMoveTimeout = setTimeout(() => {
        const rect = container.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
      }, 8) as unknown as number; // ~120fps throttle
    };

    const handleMouseEnter = () => {
      mouseRef.current.isOver = true;
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      mouseRef.current.isOver = false;
      setIsActive(false);
    };

    // Throttled resize handler
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100) as unknown as number;
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(mouseMoveTimeout);
      clearTimeout(resizeTimeout);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      // Clean up particles
      particlesRef.current.forEach(p => returnToPool(p));
      particlesRef.current = [];
    };
  }, [theme, particleCount, initParticles, animate]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-90'
      }`}
      style={{ 
        mixBlendMode: 'screen',
        transform: 'translateZ(0)',
        willChange: 'contents'
      }}
    />
  );
};

export default InteractiveParticles;
