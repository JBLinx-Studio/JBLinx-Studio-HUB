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
  particleCount = 20, // Further reduced for performance
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
  const targetFPS = useRef(60);
  const frameInterval = useRef(1000 / 60);

  const themeConfig = {
    emerald: {
      colors: ['#10b981', '#059669', '#047857', '#34d399'],
      glowColor: 'rgba(16, 185, 129, 0.4)',
      trailColor: 'rgba(16, 185, 129, 0.6)',
      magnetism: 2.5 // Increased for more responsiveness
    },
    blue: {
      colors: ['#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa'],
      glowColor: 'rgba(59, 130, 246, 0.4)',
      trailColor: 'rgba(59, 130, 246, 0.6)',
      magnetism: 2.2 // Increased
    },
    green: {
      colors: ['#22c55e', '#16a34a', '#15803d', '#4ade80'],
      glowColor: 'rgba(34, 197, 94, 0.4)',
      trailColor: 'rgba(34, 197, 94, 0.6)',
      magnetism: 2.8 // Increased
    },
    orange: {
      colors: ['#f97316', '#ea580c', '#dc2626', '#fb923c'],
      glowColor: 'rgba(249, 115, 22, 0.4)',
      trailColor: 'rgba(249, 115, 22, 0.6)',
      magnetism: 3.0 // Most responsive
    },
    purple: {
      colors: ['#a855f7', '#9333ea', '#7c3aed', '#c084fc'],
      glowColor: 'rgba(168, 85, 247, 0.4)',
      trailColor: 'rgba(168, 85, 247, 0.6)',
      magnetism: 2.4 // Increased
    }
  };

  // Pre-calculate frequently used values
  const configRef = useRef(themeConfig[theme]);
  const interactionRadiusSquared = useRef(100 * 100); // 100px radius
  const maxDistanceSquared = useRef(60 * 60); // 60px for connections

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
    const size = Math.random() * 1.2 + 0.6; // Even smaller particles
    const particle = getFromPool();
    
    Object.assign(particle, {
      id: Math.random(),
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 3.5, // Increased base speed
      vy: (Math.random() - 0.5) * 3.5, // Increased base speed
      size,
      originalSize: size,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.7 + 0.3,
      life: 0,
      maxLife: Math.random() * 200 + 100, // Shorter lifespans
      energy: Math.random() * 60 + 30,
      isActive: true
    });

    return particle;
  }, [theme, getFromPool]);

  const initParticles = useCallback(() => {
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle());
  }, [particleCount, createParticle]);

  // Optimized update function with faster interactions
  const updateParticles = useCallback((deltaTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mouse = mouseRef.current;
    const config = configRef.current;
    const dt = Math.min(deltaTime * 0.08, 1.2); // Increased time multiplier for faster movement
    
    const particles = particlesRef.current;
    const particleCount = particles.length;
    
    // Batch processing for better performance
    for (let i = 0; i < particleCount; i++) {
      const particle = particles[i];
      if (!particle.isActive) continue;

      // Faster mouse interaction with increased responsiveness
      if (mouse.isOver) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distanceSquared = dx * dx + dy * dy;
        
        if (distanceSquared < interactionRadiusSquared.current) {
          const distance = Math.sqrt(distanceSquared);
          const normalizedDistance = distance / 100; // Normalize to 0-1
          const force = (1 - normalizedDistance) * normalizedDistance * 1.8; // Increased force multiplier
          const magnetism = config.magnetism;
          
          // Enhanced swirling motion with faster time-based variation
          const time = Date.now() * 0.003; // Increased time multiplier
          const swirl = Math.sin(time + i * 0.8) * 0.6; // Increased swirl intensity
          const angle = Math.atan2(dy, dx) + swirl;
          
          const forceMultiplier = force * magnetism * dt * 0.25; // Increased force application
          particle.vx += Math.cos(angle) * forceMultiplier;
          particle.vy += Math.sin(angle) * forceMultiplier;
          
          // Faster energy and size transitions
          const energyBoost = force * 35; // Increased energy boost
          particle.energy = Math.min(particle.energy + energyBoost, 150);
          particle.size = particle.originalSize * (1 + force * 1.8); // More dramatic size changes
          particle.opacity = Math.min(particle.opacity + force * 0.6, 1);
          
          // Enhanced sparkle generation - more frequent and dynamic
          if (distance < 50 && Math.random() < 0.04 && particles.length < particleCount * 1.4) {
            particles.push(createParticle(
              particle.x + (Math.random() - 0.5) * 20,
              particle.y + (Math.random() - 0.5) * 20
            ));
          }
        }
      }

      // Enhanced physics with better momentum
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vx *= 0.94; // Less friction for more fluid movement
      particle.vy *= 0.94;

      // Efficient boundary collision with better energy conservation
      const radius = particle.size;
      if (particle.x <= radius) {
        particle.x = radius;
        particle.vx = Math.abs(particle.vx) * 0.8; // More bouncy
      } else if (particle.x >= canvas.width - radius) {
        particle.x = canvas.width - radius;
        particle.vx = -Math.abs(particle.vx) * 0.8;
      }
      
      if (particle.y <= radius) {
        particle.y = radius;
        particle.vy = Math.abs(particle.vy) * 0.8;
      } else if (particle.y >= canvas.height - radius) {
        particle.y = canvas.height - radius;
        particle.vy = -Math.abs(particle.vy) * 0.8;
      }

      // Lifecycle management
      particle.life++;
      if (particle.life > particle.maxLife) {
        returnToPool(particle);
        particles[i] = createParticle();
        continue;
      }

      // Smooth energy decay when not interacting
      if (!mouse.isOver || Math.sqrt(Math.pow(mouse.x - particle.x, 2) + Math.pow(mouse.y - particle.y, 2)) > 100) {
        particle.energy = Math.max(particle.energy * 0.985, 30);
        particle.size = Math.max(particle.size * 0.99, particle.originalSize);
        particle.opacity = Math.max(particle.opacity * 0.995, 0.3);
      }
    }

    // Clean up inactive particles efficiently
    particlesRef.current = particles.filter(p => p.isActive);
    
    // Maintain particle count efficiently
    const currentCount = particlesRef.current.length;
    if (currentCount < particleCount) {
      const needed = particleCount - currentCount;
      for (let i = 0; i < needed; i++) {
        particlesRef.current.push(createParticle());
      }
    }
  }, [theme, particleCount, createParticle, returnToPool]);

  // Highly optimized rendering with GPU acceleration hints
  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { 
      alpha: true, 
      willReadFrequently: false,
      desynchronized: true // Enable GPU acceleration
    });
    if (!canvas || !ctx) return;

    // Use clearRect for better performance than fillRect
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const config = configRef.current;
    const particles = particlesRef.current;
    
    // Batch similar operations for better GPU utilization
    ctx.save();
    
    // Draw particles in batches by similar properties
    const particlesByColor = new Map<string, Particle[]>();
    
    particles.forEach(particle => {
      if (!particle.isActive) return;
      
      if (!particlesByColor.has(particle.color)) {
        particlesByColor.set(particle.color, []);
      }
      particlesByColor.get(particle.color)!.push(particle);
    });
    
    // Render particles grouped by color for better performance
    particlesByColor.forEach((colorParticles, color) => {
      ctx.fillStyle = color;
      
      colorParticles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        // Optimized glow effect
        const glowSize = 6 + particle.energy * 0.08;
        ctx.shadowBlur = glowSize;
        ctx.shadowColor = color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Core highlight - only for high energy particles
        if (particle.energy > 60) {
          ctx.shadowBlur = 0;
          ctx.fillStyle = '#ffffff';
          ctx.globalAlpha = (particle.opacity * particle.energy) / 400;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });
    });
    
    // Optimized connections - only draw for nearby high-energy particles
    ctx.globalAlpha = 0.15;
    ctx.lineWidth = 0.5;
    
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      if (!particle.isActive || particle.energy < 50) continue;
      
      // Only check particles ahead to avoid duplicate lines
      for (let j = i + 1; j < particles.length; j++) {
        const other = particles[j];
        if (!other.isActive || other.energy < 50) continue;
        
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distanceSquared = dx * dx + dy * dy;
        
        if (distanceSquared < maxDistanceSquared.current) {
          const distance = Math.sqrt(distanceSquared);
          const opacity = ((60 - distance) / 60) * 0.2;
          
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

  // Frame rate controlled animation loop
  const animate = useCallback((currentTime: number) => {
    const deltaTime = currentTime - lastFrameTime.current;
    
    // Skip frame if running too fast (maintain consistent 60fps max)
    if (deltaTime < frameInterval.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    
    lastFrameTime.current = currentTime;
    frameCount.current++;
    
    // Adaptive quality based on performance
    if (frameCount.current % 120 === 0) { // Check every 2 seconds
      const actualFPS = 1000 / deltaTime;
      if (actualFPS < 50) {
        // Reduce quality if performance is poor
        interactionRadiusSquared.current = 80 * 80;
        maxDistanceSquared.current = 40 * 40;
      } else if (actualFPS > 55) {
        // Restore quality if performance is good
        interactionRadiusSquared.current = 100 * 100;
        maxDistanceSquared.current = 60 * 60;
      }
    }
    
    updateParticles(deltaTime);
    drawParticles();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

  useEffect(() => {
    configRef.current = themeConfig[theme];
  }, [theme]);

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

    // Optimized event handlers with passive listeners
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

    // Use passive listeners for better performance
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
        isActive ? 'opacity-100' : 'opacity-85'
      }`}
      style={{ 
        mixBlendMode: 'screen',
        transform: 'translateZ(0)', // Force GPU acceleration
        willChange: 'contents' // Optimize for frequent changes
      }}
    />
  );
};

export default InteractiveParticles;
