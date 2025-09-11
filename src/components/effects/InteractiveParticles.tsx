
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
  particleCount = 25, // Reduced from 50
  containerRef 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isOver: false });
  const [isActive, setIsActive] = useState(false);
  const lastFrameTime = useRef(0);
  const poolRef = useRef<Particle[]>([]);

  const themeConfig = {
    emerald: {
      colors: ['#10b981', '#059669', '#047857', '#34d399'],
      glowColor: 'rgba(16, 185, 129, 0.3)',
      trailColor: 'rgba(16, 185, 129, 0.5)',
      magnetism: 1.0
    },
    blue: {
      colors: ['#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa'],
      glowColor: 'rgba(59, 130, 246, 0.3)',
      trailColor: 'rgba(59, 130, 246, 0.5)',
      magnetism: 0.8
    },
    green: {
      colors: ['#22c55e', '#16a34a', '#15803d', '#4ade80'],
      glowColor: 'rgba(34, 197, 94, 0.3)',
      trailColor: 'rgba(34, 197, 94, 0.5)',
      magnetism: 1.1
    },
    orange: {
      colors: ['#f97316', '#ea580c', '#dc2626', '#fb923c'],
      glowColor: 'rgba(249, 115, 22, 0.3)',
      trailColor: 'rgba(249, 115, 22, 0.5)',
      magnetism: 1.2
    },
    purple: {
      colors: ['#a855f7', '#9333ea', '#7c3aed', '#c084fc'],
      glowColor: 'rgba(168, 85, 247, 0.3)',
      trailColor: 'rgba(168, 85, 247, 0.5)',
      magnetism: 0.9
    }
  };

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

    const colors = themeConfig[theme].colors;
    const size = Math.random() * 1.5 + 0.8; // Much smaller particles
    const particle = getFromPool();
    
    Object.assign(particle, {
      id: Math.random(),
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size,
      originalSize: size,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.8 + 0.2,
      life: 0,
      maxLife: Math.random() * 300 + 150,
      energy: Math.random() * 80 + 40,
      isActive: true
    });

    return particle;
  }, [theme, getFromPool]);

  const initParticles = useCallback(() => {
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle());
  }, [particleCount, createParticle]);

  const updateParticles = useCallback((deltaTime: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mouse = mouseRef.current;
    const config = themeConfig[theme];
    const dt = Math.min(deltaTime, 16.67); // Cap at 60fps equivalent
    
    particlesRef.current.forEach((particle, index) => {
      if (!particle.isActive) return;

      // Mouse interaction with optimized calculations
      if (mouse.isOver) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distanceSquared = dx * dx + dy * dy;
        const interactionRadius = 150;
        
        if (distanceSquared < interactionRadius * interactionRadius) {
          const distance = Math.sqrt(distanceSquared);
          const force = (interactionRadius - distance) / interactionRadius;
          const magnetism = config.magnetism;
          
          // Smooth magnetic attraction
          const time = Date.now() * 0.002;
          const swirl = Math.sin(time + index * 0.3) * 0.2;
          const angle = Math.atan2(dy, dx) + swirl;
          
          const forceX = Math.cos(angle) * force * magnetism * dt * 0.1;
          const forceY = Math.sin(angle) * force * magnetism * dt * 0.1;
          
          particle.vx += forceX;
          particle.vy += forceY;
          
          // Energy boost and size increase
          particle.energy = Math.min(particle.energy + force * 15, 150);
          particle.size = particle.originalSize * (1 + force * 0.8);
          particle.opacity = Math.min(particle.opacity + force * 0.3, 1);
          
          // Reduced sparkle generation for performance
          if (distance < 60 && Math.random() < 0.05) {
            if (particlesRef.current.length < particleCount * 1.5) {
              particlesRef.current.push(createParticle(
                particle.x + (Math.random() - 0.5) * 20,
                particle.y + (Math.random() - 0.5) * 20
              ));
            }
          }
        }
      }

      // Physics update with delta time
      particle.x += particle.vx * dt * 0.1;
      particle.y += particle.vy * dt * 0.1;

      // Enhanced friction
      const friction = 0.95;
      particle.vx *= friction;
      particle.vy *= friction;

      // Boundary collision
      if (particle.x <= particle.size || particle.x >= canvas.width - particle.size) {
        particle.vx *= -0.6;
        particle.x = Math.max(particle.size, Math.min(canvas.width - particle.size, particle.x));
        particle.energy *= 0.7;
      }
      if (particle.y <= particle.size || particle.y >= canvas.height - particle.size) {
        particle.vy *= -0.6;
        particle.y = Math.max(particle.size, Math.min(canvas.height - particle.size, particle.y));
        particle.energy *= 0.7;
      }

      // Life cycle
      particle.life++;
      if (particle.life > particle.maxLife) {
        returnToPool(particle);
        particlesRef.current[index] = createParticle();
      }

      // Energy decay
      if (!mouse.isOver || Math.sqrt(Math.pow(mouse.x - particle.x, 2) + Math.pow(mouse.y - particle.y, 2)) > 150) {
        particle.energy = Math.max(particle.energy * 0.98, 40);
        particle.size = Math.max(particle.size * 0.985, particle.originalSize);
        particle.opacity = Math.max(particle.opacity * 0.99, 0.2);
      }
    });

    // Clean up inactive particles and maintain count
    particlesRef.current = particlesRef.current.filter(p => p.isActive);
    while (particlesRef.current.length < particleCount) {
      particlesRef.current.push(createParticle());
    }
  }, [theme, particleCount, createParticle, returnToPool]);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const config = themeConfig[theme];

    // Batch rendering for better performance
    particlesRef.current.forEach(particle => {
      if (!particle.isActive) return;

      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      // Simplified rendering - single layer with glow
      const glowIntensity = 8 + particle.energy / 10;
      ctx.shadowBlur = glowIntensity;
      ctx.shadowColor = particle.color;
      ctx.fillStyle = particle.color;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Core highlight
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = (particle.opacity * particle.energy) / 300;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });

    // Optimized connections - only draw between nearby particles
    ctx.save();
    particlesRef.current.forEach((particle, i) => {
      if (!particle.isActive) return;
      
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const other = particlesRef.current[j];
        if (!other.isActive) continue;
        
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distanceSquared = dx * dx + dy * dy;
        const maxDistance = 80;
        
        if (distanceSquared < maxDistance * maxDistance) {
          const distance = Math.sqrt(distanceSquared);
          const opacity = ((maxDistance - distance) / maxDistance) * 0.15;
          
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
        }
      }
    });
    ctx.restore();
  }, [theme]);

  const animate = useCallback((currentTime: number) => {
    const deltaTime = currentTime - lastFrameTime.current;
    lastFrameTime.current = currentTime;

    updateParticles(deltaTime);
    drawParticles();
    animationRef.current = requestAnimationFrame(animate);
  }, [updateParticles, drawParticles]);

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
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resizeCanvas);

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
        isActive ? 'opacity-100' : 'opacity-80'
      }`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default InteractiveParticles;
