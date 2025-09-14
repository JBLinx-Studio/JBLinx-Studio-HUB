import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { performanceEnhancer } from '../../utils/performanceEnhancer';
import { useAdvancedPerformance } from '../../hooks/useAdvancedPerformance';

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
  energy: number;
  isActive: boolean;
  trailX: number[];
  trailY: number[];
}

interface OptimizedParticlesProps {
  theme: 'emerald' | 'blue' | 'green' | 'orange' | 'purple';
  particleCount?: number;
  containerRef: React.RefObject<HTMLDivElement>;
  enableTrails?: boolean;
  enableConnections?: boolean;
  quality?: 'low' | 'medium' | 'high' | 'adaptive';
}

const OptimizedParticles: React.FC<OptimizedParticlesProps> = ({ 
  theme, 
  particleCount = 50,
  containerRef,
  enableTrails = true,
  enableConnections = true,
  quality = 'adaptive'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isOver: false });
  const [isActive, setIsActive] = useState(false);
  const poolRef = useRef<Particle[]>([]);
  const lastFrameTime = useRef(0);
  const { metrics, isOptimized } = useAdvancedPerformance();

  // Adaptive quality based on performance
  const adaptiveSettings = useMemo(() => {
    const baseCount = particleCount;
    let adjustedCount = baseCount;
    let trailLength = 10;
    let connectionDistance = 100;
    let renderQuality = 1;

    if (quality === 'adaptive') {
      if (metrics.fps < 30 || metrics.isLowEndDevice) {
        adjustedCount = Math.max(10, baseCount * 0.4);
        trailLength = 3;
        connectionDistance = 60;
        renderQuality = 0.7;
      } else if (metrics.fps < 45) {
        adjustedCount = Math.max(15, baseCount * 0.7);
        trailLength = 6;
        connectionDistance = 80;
        renderQuality = 0.85;
      } else if (metrics.fps > 55) {
        adjustedCount = Math.min(100, baseCount * 1.2);
        trailLength = 15;
        connectionDistance = 120;
        renderQuality = 1.2;
      }
    } else {
      const qualityMap = { low: 0.5, medium: 0.8, high: 1.2 };
      const multiplier = qualityMap[quality];
      adjustedCount = Math.round(baseCount * multiplier);
      trailLength = Math.round(10 * multiplier);
      connectionDistance = Math.round(100 * multiplier);
      renderQuality = multiplier;
    }

    return {
      particleCount: adjustedCount,
      trailLength,
      connectionDistance,
      renderQuality
    };
  }, [particleCount, quality, metrics.fps, metrics.isLowEndDevice]);

  // Enhanced theme configuration with performance considerations
  const themeConfig = useMemo(() => ({
    emerald: {
      colors: ['#10b981', '#059669', '#047857', '#34d399'],
      glowColor: 'rgba(16, 185, 129, 0.4)',
      trailColor: 'rgba(16, 185, 129, 0.6)',
      magnetism: 2.5
    },
    blue: {
      colors: ['#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa'],
      glowColor: 'rgba(59, 130, 246, 0.4)',
      trailColor: 'rgba(59, 130, 246, 0.6)',
      magnetism: 2.8
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
      magnetism: 2.3
    }
  }), []);

  // Advanced object pool with size management
  const getFromPool = useCallback((): Particle => {
    if (poolRef.current.length > 0) {
      return poolRef.current.pop()!;
    }
    
    return {
      id: Math.random(),
      x: 0, y: 0, vx: 0, vy: 0,
      size: 0, color: '', opacity: 0,
      life: 0, maxLife: 0, energy: 0,
      isActive: false,
      trailX: [],
      trailY: []
    };
  }, []);

  const returnToPool = useCallback((particle: Particle) => {
    particle.isActive = false;
    particle.trailX.length = 0;
    particle.trailY.length = 0;
    if (poolRef.current.length < adaptiveSettings.particleCount * 2) {
      poolRef.current.push(particle);
    }
  }, [adaptiveSettings.particleCount]);

  // Enhanced particle creation with trail initialization
  const createParticle = useCallback((x?: number, y?: number): Particle => {
    const particle = getFromPool();
    const canvas = canvasRef.current;
    if (!canvas) return particle;

    const config = themeConfig[theme];
    const randomColor = config.colors[Math.floor(Math.random() * config.colors.length)];
    const baseSize = 1.5 + Math.random() * 2.5;

    Object.assign(particle, {
      id: Math.random(),
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: baseSize * adaptiveSettings.renderQuality,
      color: randomColor,
      opacity: 0.4 + Math.random() * 0.6,
      life: 0,
      maxLife: 1000 + Math.random() * 2000,
      energy: Math.random() * 100,
      isActive: true,
      trailX: [],
      trailY: []
    });

    return particle;
  }, [theme, themeConfig, getFromPool, adaptiveSettings.renderQuality]);

  // Initialize particles with proper pool management
  const initParticles = useCallback(() => {
    particlesRef.current = [];
    for (let i = 0; i < adaptiveSettings.particleCount; i++) {
      particlesRef.current.push(createParticle());
    }
  }, [adaptiveSettings.particleCount, createParticle]);

  // Advanced particle physics and interaction
  const updateParticles = useCallback((deltaTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mouse = mouseRef.current;
    const config = themeConfig[theme];
    const dt = Math.min(deltaTime / 16.67, 2); // Cap delta time

    particlesRef.current.forEach((particle, index) => {
      if (!particle.isActive) return;

      // Update trail
      if (enableTrails && particle.trailX.length > 0) {
        particle.trailX.unshift(particle.x);
        particle.trailY.unshift(particle.y);
        
        if (particle.trailX.length > adaptiveSettings.trailLength) {
          particle.trailX.pop();
          particle.trailY.pop();
        }
      }

      // Enhanced mouse interaction with smooth falloff
      if (mouse.isOver) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * config.magnetism * dt;
          const angle = Math.atan2(dy, dx);
          
          // Attraction with swirl effect
          particle.vx += Math.cos(angle) * force * 0.5;
          particle.vy += Math.sin(angle) * force * 0.5;
          
          // Add swirl component
          const swirl = force * 0.3;
          particle.vx += Math.cos(angle + Math.PI / 2) * swirl;
          particle.vy += Math.sin(angle + Math.PI / 2) * swirl;
          
          particle.energy = Math.min(100, particle.energy + force * 10);
        }
      }

      // Physics update with improved boundary handling
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;

      // Smooth boundary reflection
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Enhanced lifecycle management
      particle.life += deltaTime;
      if (particle.life > particle.maxLife) {
        returnToPool(particle);
        particlesRef.current[index] = createParticle();
      }

      // Energy decay with dynamic effects
      particle.energy = Math.max(0, particle.energy - deltaTime * 0.01);
      particle.size = particle.size * 0.99 + (1.5 + particle.energy * 0.02) * 0.01;
      
      // Velocity damping
      particle.vx *= 0.998;
      particle.vy *= 0.998;
    });
  }, [theme, themeConfig, enableTrails, adaptiveSettings, returnToPool, createParticle]);

  // Optimized rendering with batching and effects
  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Performance-optimized clear
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const config = themeConfig[theme];
    const particles = particlesRef.current.filter(p => p.isActive);

    // Batch rendering by enabling composite operation once
    ctx.globalCompositeOperation = 'screen';

    // Draw connections first (if enabled)
    if (enableConnections && !metrics.isLowEndDevice) {
      ctx.strokeStyle = config.trailColor;
      ctx.lineWidth = 0.5 * adaptiveSettings.renderQuality;
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        if (p1.energy < 30) continue;
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (p2.energy < 30) continue;
          
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < adaptiveSettings.connectionDistance) {
            const opacity = (1 - distance / adaptiveSettings.connectionDistance) * 0.3;
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    // Draw trails
    if (enableTrails) {
      particles.forEach(particle => {
        if (particle.trailX.length < 2) return;
        
        ctx.strokeStyle = config.trailColor;
        ctx.lineWidth = 1 * adaptiveSettings.renderQuality;
        ctx.globalAlpha = particle.opacity * 0.5;
        
        ctx.beginPath();
        ctx.moveTo(particle.trailX[0], particle.trailY[0]);
        
        for (let i = 1; i < particle.trailX.length; i++) {
          const alpha = (1 - i / particle.trailX.length) * particle.opacity * 0.5;
          ctx.globalAlpha = alpha;
          ctx.lineTo(particle.trailX[i], particle.trailY[i]);
        }
        ctx.stroke();
      });
    }

    // Draw particles with glow effect
    particles.forEach(particle => {
      const glowSize = particle.size * (1 + particle.energy * 0.01);
      
      // Glow effect (skip on low-end devices)
      if (!metrics.isLowEndDevice && particle.energy > 50) {
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = config.glowColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Main particle
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
  }, [theme, themeConfig, enableConnections, enableTrails, adaptiveSettings, metrics.isLowEndDevice]);

  // Optimized animation loop using performance enhancer
  const animate = useCallback((currentTime: number) => {
    if (!isActive) return;

    const deltaTime = currentTime - lastFrameTime.current;
    lastFrameTime.current = currentTime;

    // Use performance enhancer for scheduling
    performanceEnhancer.scheduleRender(() => {
      updateParticles(deltaTime);
      drawParticles();
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [isActive, updateParticles, drawParticles]);

  // Enhanced mouse tracking with performance throttling
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isOver: true
      };
    };

    const handleMouseEnter = () => {
      setIsActive(true);
      mouseRef.current.isOver = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isOver = false;
      // Keep particles active briefly after mouse leave
      setTimeout(() => setIsActive(false), 2000);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef]);

  // Canvas setup and resize handling
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Reinitialize particles after resize
      if (particlesRef.current.length > 0) {
        initParticles();
      }
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);
    resizeCanvas();

    return () => resizeObserver.disconnect();
  }, [containerRef, initParticles]);

  // Initialize and start animation
  useEffect(() => {
    initParticles();
    
    if (isActive) {
      lastFrameTime.current = performance.now();
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, initParticles, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none transition-opacity duration-500"
      style={{ 
        opacity: isActive ? 1 : 0.3,
        willChange: 'opacity'
      }}
    />
  );
};

export default React.memo(OptimizedParticles);
