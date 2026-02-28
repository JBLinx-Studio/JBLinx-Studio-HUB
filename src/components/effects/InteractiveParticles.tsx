import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

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
  particleCount = 15, // Reduced for better performance
  containerRef 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isOver: false });
  const [isActive, setIsActive] = useState(false);
  const lastFrameTime = useRef(0);
  const poolRef = useRef<Particle[]>([]);
  const frameCount = useRef(0);
  
  // Performance optimization: Memoize theme configuration
  const themeConfig = useMemo(() => ({
    emerald: {
      colors: ['#10b981', '#059669', '#047857', '#34d399'],
      glowColor: 'rgba(16, 185, 129, 0.4)',
      trailColor: 'rgba(16, 185, 129, 0.6)',
      magnetism: 2.8
    },
    blue: {
      colors: ['#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa'],
      glowColor: 'rgba(59, 130, 246, 0.4)',
      trailColor: 'rgba(59, 130, 246, 0.6)',
      magnetism: 2.5
    },
    green: {
      colors: ['#22c55e', '#16a34a', '#15803d', '#4ade80'],
      glowColor: 'rgba(34, 197, 94, 0.4)',
      trailColor: 'rgba(34, 197, 94, 0.6)',
      magnetism: 3.0
    },
    orange: {
      colors: ['#f97316', '#ea580c', '#dc2626', '#fb923c'],
      glowColor: 'rgba(249, 115, 22, 0.4)',
      trailColor: 'rgba(249, 115, 22, 0.6)',
      magnetism: 3.2
    },
    purple: {
      colors: ['#a855f7', '#9333ea', '#7c3aed', '#c084fc'],
      glowColor: 'rgba(168, 85, 247, 0.4)',
      trailColor: 'rgba(168, 85, 247, 0.6)',
      magnetism: 2.7
    }
  }), []);

  const configRef = useRef(themeConfig[theme]);
  const interactionRadiusSquared = useRef(120 * 120); // Increased interaction radius
  const maxDistanceSquared = useRef(50 * 50);

  // Optimized particle creation with object pooling
  const getFromPool = useCallback((): Particle => {
    return poolRef.current.pop() || {} as Particle;
  }, []);

  const returnToPool = useCallback((particle: Particle) => {
    particle.isActive = false;
    poolRef.current.push(particle);
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
      vx: (Math.random() - 0.5) * 4, // Increased initial velocity
      vy: (Math.random() - 0.5) * 4,
      size,
      originalSize: size,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.6 + 0.4,
      life: 0,
      maxLife: Math.random() * 180 + 120,
      energy: Math.random() * 50 + 25,
      isActive: true
    });

    return particle;
  }, [theme, getFromPool]);

  const initParticles = useCallback(() => {
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle());
  }, [particleCount, createParticle]);

  // High-performance particle update with optimized mouse interaction
  const updateParticles = useCallback((deltaTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mouse = mouseRef.current;
    const config = configRef.current;
    const dt = Math.min(deltaTime * 0.1, 1.5);
    
    const particles = particlesRef.current;
    
    // Pre-calculate mouse interaction values
    const mouseInteractionRadius = interactionRadiusSquared.current;
    const magnetism = config.magnetism;
    const time = Date.now() * 0.004;
    
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      if (!particle.isActive) continue;

      // Enhanced mouse interaction with playful physics
      if (mouse.isOver) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distanceSquared = dx * dx + dy * dy;
        
        if (distanceSquared < mouseInteractionRadius) {
          const distance = Math.sqrt(distanceSquared);
          const normalizedDistance = distance / 120;
          const force = (1 - normalizedDistance) * normalizedDistance * 2.2;
          
          // Enhanced swirling motion that follows mouse
          const swirl = Math.sin(time + i * 0.9) * 0.8;
          const angle = Math.atan2(dy, dx) + swirl;
          
          const forceMultiplier = force * magnetism * dt * 0.3;
          particle.vx += Math.cos(angle) * forceMultiplier;
          particle.vy += Math.sin(angle) * forceMultiplier;
          
          // Dynamic particle properties
          const energyBoost = force * 40;
          particle.energy = Math.min(particle.energy + energyBoost, 180);
          particle.size = particle.originalSize * (1 + force * 2);
          particle.opacity = Math.min(particle.opacity + force * 0.7, 1);
          
          // Sparkle generation for close interactions
          if (distance < 40 && Math.random() < 0.05 && particles.length < particleCount * 1.5) {
            particles.push(createParticle(
              particle.x + (Math.random() - 0.5) * 25,
              particle.y + (Math.random() - 0.5) * 25
            ));
          }
        }
      }

      // Physics update with better momentum conservation
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vx *= 0.92; // Optimized friction
      particle.vy *= 0.92;

      // Efficient boundary handling
      const radius = particle.size;
      if (particle.x <= radius || particle.x >= canvas.width - radius) {
        particle.vx *= -0.85;
        particle.x = Math.max(radius, Math.min(canvas.width - radius, particle.x));
      }
      
      if (particle.y <= radius || particle.y >= canvas.height - radius) {
        particle.vy *= -0.85;
        particle.y = Math.max(radius, Math.min(canvas.height - radius, particle.y));
      }

      // Lifecycle management
      particle.life++;
      if (particle.life > particle.maxLife) {
        returnToPool(particle);
        particles[i] = createParticle();
        continue;
      }

      // Optimized energy decay
      if (!mouse.isOver || Math.sqrt(Math.pow(mouse.x - particle.x, 2) + Math.pow(mouse.y - particle.y, 2)) > 120) {
        particle.energy *= 0.988;
        particle.size = Math.max(particle.size * 0.995, particle.originalSize);
        particle.opacity = Math.max(particle.opacity * 0.997, 0.3);
      }
    }

    // Maintain particle count efficiently
    particlesRef.current = particles.filter(p => p.isActive);
    const currentCount = particlesRef.current.length;
    if (currentCount < particleCount) {
      const needed = particleCount - currentCount;
      for (let i = 0; i < needed; i++) {
        particlesRef.current.push(createParticle());
      }
    }
  }, [theme, particleCount, createParticle, returnToPool]);

  // Optimized rendering with batched operations
  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { 
      alpha: true, 
      willReadFrequently: false,
      desynchronized: true
    });
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const config = configRef.current;
    const particles = particlesRef.current;
    
    // Batch rendering by color for better performance
    const particlesByColor = new Map<string, Particle[]>();
    
    particles.forEach(particle => {
      if (!particle.isActive) return;
      
      if (!particlesByColor.has(particle.color)) {
        particlesByColor.set(particle.color, []);
      }
      particlesByColor.get(particle.color)!.push(particle);
    });
    
    ctx.save();
    
    // Render particles in color batches
    particlesByColor.forEach((colorParticles, color) => {
      colorParticles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Optimized glow effect
        const glowSize = 4 + particle.energy * 0.06;
        ctx.shadowBlur = glowSize;
        ctx.shadowColor = color;
        ctx.fillStyle = color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Core highlight for high-energy particles
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
    
    // Optimized connections
    ctx.globalAlpha = 0.12;
    ctx.lineWidth = 0.8;
    
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      if (!particle.isActive || particle.energy < 60) continue;
      
      for (let j = i + 1; j < particles.length; j++) {
        const other = particles[j];
        if (!other.isActive || other.energy < 60) continue;
        
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distanceSquared = dx * dx + dy * dy;
        
        if (distanceSquared < maxDistanceSquared.current) {
          const distance = Math.sqrt(distanceSquared);
          const opacity = ((50 - distance) / 50) * 0.25;
          
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = particle.color;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }
    }
    
    ctx.restore();
  }, [theme]);

  // Frame-rate controlled animation with performance monitoring
  const animate = useCallback((currentTime: number) => {
    const deltaTime = currentTime - lastFrameTime.current;
    
    // Target 60fps
    if (deltaTime < 16.67) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    
    lastFrameTime.current = currentTime;
    frameCount.current++;
    
    // Performance monitoring and adaptive quality
    if (frameCount.current % 180 === 0) { // Check every 3 seconds
      const actualFPS = 1000 / deltaTime;
      if (actualFPS < 45) {
        // Reduce quality for performance
        interactionRadiusSquared.current = 100 * 100;
        maxDistanceSquared.current = 35 * 35;
      } else if (actualFPS > 55) {
        // Restore quality
        interactionRadiusSquared.current = 120 * 120;
        maxDistanceSquared.current = 50 * 50;
      }
    }
    
    updateParticles(deltaTime);
    drawParticles();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  useEffect(() => {
    configRef.current = themeConfig[theme];
  }, [theme, themeConfig]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    initParticles();

    // Optimized event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isOver = true;
      setIsActive(true);
    };

    const handleMouseLeave = () => {
      mouseRef.current.isOver = false;
      setIsActive(false);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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
