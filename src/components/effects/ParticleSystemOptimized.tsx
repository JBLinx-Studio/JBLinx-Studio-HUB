
import React, { useRef, useEffect, useMemo, useCallback } from 'react';
import { useAnimationFrame } from '../../hooks/useAnimationFrame';
import { useAdvancedPerformance } from '../../hooks/useAdvancedPerformance';

interface OptimizedParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
  opacity: number;
  active: boolean;
}

interface ParticleSystemOptimizedProps {
  particleCount?: number;
  theme: 'emerald' | 'blue' | 'green' | 'orange' | 'purple';
  containerRef: React.RefObject<HTMLDivElement>;
}

const ParticleSystemOptimized: React.FC<ParticleSystemOptimizedProps> = ({
  particleCount = 20,
  theme,
  containerRef
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<OptimizedParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const poolRef = useRef<OptimizedParticle[]>([]);
  const { isLowPerformance } = useAdvancedPerformance();

  // Adaptive particle count based on performance
  const adaptiveParticleCount = useMemo(() => {
    return isLowPerformance ? Math.max(8, particleCount * 0.6) : particleCount;
  }, [isLowPerformance, particleCount]);

  const themeConfig = useMemo(() => ({
    emerald: { colors: ['#10b981', '#059669', '#34d399'], magnetism: 3.5 },
    blue: { colors: ['#3b82f6', '#2563eb', '#60a5fa'], magnetism: 3.2 },
    green: { colors: ['#22c55e', '#16a34a', '#4ade80'], magnetism: 3.8 },
    orange: { colors: ['#f97316', '#ea580c', '#fb923c'], magnetism: 4.0 },
    purple: { colors: ['#a855f7', '#9333ea', '#c084fc'], magnetism: 3.6 }
  }), []);

  const config = themeConfig[theme];

  // Optimized particle creation with object pooling
  const createParticle = useCallback((x?: number, y?: number): OptimizedParticle => {
    const canvas = canvasRef.current;
    if (!canvas) return {} as OptimizedParticle;

    const particle = poolRef.current.pop() || {} as OptimizedParticle;
    const colors = config.colors;
    
    Object.assign(particle, {
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 0.5) * 6,
      size: Math.random() * 2 + 1,
      life: 0,
      maxLife: Math.random() * 200 + 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.8 + 0.2,
      active: true
    });

    return particle;
  }, [config]);

  // High-performance update loop
  const updateParticles = useCallback((deltaTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dt = Math.min(deltaTime * 0.06, 2);
    const mouse = mouseRef.current;
    const particles = particlesRef.current;
    const magnetism = config.magnetism;
    const interactionRadius = 150;

    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      if (!particle.active) continue;

      // Enhanced mouse interaction with shooting effect
      if (mouse.isActive) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < interactionRadius && distance > 0) {
          const force = ((interactionRadius - distance) / interactionRadius) ** 2;
          const angle = Math.atan2(dy, dx);
          
          // Super responsive shooting effect
          const shootingForce = force * magnetism * dt * 0.8;
          particle.vx += Math.cos(angle) * shootingForce;
          particle.vy += Math.sin(angle) * shootingForce;
          
          // Dynamic visual effects
          particle.size = Math.min(particle.size * (1 + force * 0.5), 4);
          particle.opacity = Math.min(particle.opacity + force * 0.3, 1);
        }
      }

      // Physics with enhanced momentum
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vx *= 0.95;
      particle.vy *= 0.95;

      // Efficient boundary collision
      const margin = particle.size;
      if (particle.x <= margin || particle.x >= canvas.width - margin) {
        particle.vx *= -0.8;
        particle.x = Math.max(margin, Math.min(canvas.width - margin, particle.x));
      }
      if (particle.y <= margin || particle.y >= canvas.height - margin) {
        particle.vy *= -0.8;
        particle.y = Math.max(margin, Math.min(canvas.height - margin, particle.y));
      }

      // Lifecycle management
      particle.life++;
      if (particle.life > particle.maxLife) {
        particle.active = false;
        poolRef.current.push(particle);
        particles[i] = createParticle();
      }

      // Gradual restoration
      if (!mouse.isActive || Math.sqrt((mouse.x - particle.x) ** 2 + (mouse.y - particle.y) ** 2) > interactionRadius) {
        particle.size *= 0.98;
        particle.opacity *= 0.995;
      }
    }
  }, [config, createParticle]);

  // Optimized rendering with batch operations
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: false, desynchronized: true });
    if (!canvas || !ctx) return;

    // Clear with solid color for better performance
    ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const particles = particlesRef.current;
    
    // Batch render by color
    const particlesByColor = new Map<string, OptimizedParticle[]>();
    particles.forEach(particle => {
      if (!particle.active) return;
      if (!particlesByColor.has(particle.color)) {
        particlesByColor.set(particle.color, []);
      }
      particlesByColor.get(particle.color)!.push(particle);
    });

    // Render particles in batches
    particlesByColor.forEach((colorParticles, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      
      colorParticles.forEach(particle => {
        ctx.globalAlpha = particle.opacity;
        ctx.shadowBlur = particle.size * 2;
        ctx.shadowColor = color;
        
        ctx.moveTo(particle.x + particle.size, particle.y);
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      });
      
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
  }, []);

  // Animation loop with performance monitoring
  useAnimationFrame((deltaTime) => {
    updateParticles(deltaTime);
    render();
  }, [updateParticles, render]);

  // Initialize particles
  useEffect(() => {
    particlesRef.current = Array.from({ length: adaptiveParticleCount }, () => createParticle());
  }, [adaptiveParticleCount, createParticle]);

  // Setup canvas and event handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => mouseRef.current.isActive = true;
    const handleMouseLeave = () => mouseRef.current.isActive = false;

    resizeCanvas();
    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-90"
      style={{ 
        mixBlendMode: 'screen',
        transform: 'translateZ(0)',
        willChange: 'contents'
      }}
    />
  );
};

export default ParticleSystemOptimized;
