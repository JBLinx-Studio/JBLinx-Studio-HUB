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
  const frameCount = useRef(0);
  const frameInterval = useRef(1000 / 60);

  const themeConfig = {
    emerald: {
      colors: ['#10b981', '#059669', '#047857', '#34d399'],
      glowColor: 'rgba(16, 185, 129, 0.5)',
      trailColor: 'rgba(16, 185, 129, 0.7)',
      magnetism: 1.8 // Increased magnetism
    },
    blue: {
      colors: ['#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa'],
      glowColor: 'rgba(59, 130, 246, 0.5)',
      trailColor: 'rgba(59, 130, 246, 0.7)',
      magnetism: 1.6
    },
    green: {
      colors: ['#22c55e', '#16a34a', '#15803d', '#4ade80'],
      glowColor: 'rgba(34, 197, 94, 0.5)',
      trailColor: 'rgba(34, 197, 94, 0.7)',
      magnetism: 1.9
    },
    orange: {
      colors: ['#f97316', '#ea580c', '#dc2626', '#fb923c'],
      glowColor: 'rgba(249, 115, 22, 0.5)',
      trailColor: 'rgba(249, 115, 22, 0.7)',
      magnetism: 2.0
    },
    purple: {
      colors: ['#a855f7', '#9333ea', '#7c3aed', '#c084fc'],
      glowColor: 'rgba(168, 85, 247, 0.5)',
      trailColor: 'rgba(168, 85, 247, 0.7)',
      magnetism: 1.7
    }
  };

  const configRef = useRef(themeConfig[theme]);
  const interactionRadiusSquared = useRef(120 * 120); // Increased interaction radius
  const maxDistanceSquared = useRef(80 * 80);

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
    const size = Math.random() * 1.5 + 0.8; // Slightly larger for better visibility
    const particle = getFromPool();
    
    Object.assign(particle, {
      id: Math.random(),
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 3, // Increased base speed
      vy: (Math.random() - 0.5) * 3,
      size,
      originalSize: size,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.8 + 0.4,
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
    const config = configRef.current;
    const dt = Math.min(deltaTime * 0.08, 1.2); // Increased time multiplier for faster movement
    
    const particles = particlesRef.current;
    const particleCount = particles.length;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = particles[i];
      if (!particle.isActive) continue;

      if (mouse.isOver) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distanceSquared = dx * dx + dy * dy;
        
        if (distanceSquared < interactionRadiusSquared.current) {
          const distance = Math.sqrt(distanceSquared);
          const normalizedDistance = distance / 120;
          const force = (1 - normalizedDistance) * normalizedDistance;
          const magnetism = config.magnetism;
          
          // Enhanced swirling with faster, more dynamic motion
          const time = Date.now() * 0.003; // Increased time multiplier
          const swirl = Math.sin(time + i * 0.8) * 0.6; // Increased swirl intensity
          const angle = Math.atan2(dy, dx) + swirl;
          
          const forceMultiplier = force * magnetism * dt * 0.25; // Increased force
          particle.vx += Math.cos(angle) * forceMultiplier;
          particle.vy += Math.sin(angle) * forceMultiplier;
          
          // More responsive energy and size changes
          const energyBoost = force * 35;
          particle.energy = Math.min(particle.energy + energyBoost, 150);
          particle.size = particle.originalSize * (1 + force * 1.8);
          particle.opacity = Math.min(particle.opacity + force * 0.5, 1);
          
          // More frequent sparkle generation for playfulness
          if (distance < 50 && Math.random() < 0.04 && particles.length < particleCount * 1.5) {
            particles.push(createParticle(
              particle.x + (Math.random() - 0.5) * 20,
              particle.y + (Math.random() - 0.5) * 20
            ));
          }
        }
      }

      // Faster physics with less friction for more playful movement
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vx *= 0.94; // Reduced friction for faster movement
      particle.vy *= 0.94;

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

      particle.life++;
      if (particle.life > particle.maxLife) {
        returnToPool(particle);
        particles[i] = createParticle();
        continue;
      }

      if (!mouse.isOver || Math.sqrt(Math.pow(mouse.x - particle.x, 2) + Math.pow(mouse.y - particle.y, 2)) > 100) {
        particle.energy = Math.max(particle.energy * 0.985, 30);
        particle.size = Math.max(particle.size * 0.99, particle.originalSize);
        particle.opacity = Math.max(particle.opacity * 0.995, 0.3);
      }
    }

    particlesRef.current = particles.filter(p => p.isActive);
    
    const currentCount = particlesRef.current.length;
    if (currentCount < particleCount) {
      const needed = particleCount - currentCount;
      for (let i = 0; i < needed; i++) {
        particlesRef.current.push(createParticle());
      }
    }
  }, [theme, particleCount, createParticle, returnToPool]);

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { 
      alpha: true, 
      willReadFrequently: false,
      desynchronized: true // Enable GPU acceleration
    });
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const config = configRef.current;
    const particles = particlesRef.current;
    
    ctx.save();
    
    const particlesByColor = new Map<string, Particle[]>();
    
    particles.forEach(particle => {
      if (!particle.isActive) return;
      
      if (!particlesByColor.has(particle.color)) {
        particlesByColor.set(particle.color, []);
      }
      particlesByColor.get(particle.color)!.push(particle);
    });
    
    particlesByColor.forEach((colorParticles, color) => {
      ctx.fillStyle = color;
      
      colorParticles.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        
        const glowSize = 6 + particle.energy * 0.08;
        ctx.shadowBlur = glowSize;
        ctx.shadowColor = color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
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
    
    ctx.globalAlpha = 0.15;
    ctx.lineWidth = 0.5;
    
    for (let i = 0; i < particles.length; i++) {
      const particle = particles[i];
      if (!particle.isActive || particle.energy < 50) continue;
      
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

  const animate = useCallback((currentTime: number) => {
    const deltaTime = currentTime - lastFrameTime.current;
    
    if (deltaTime < frameInterval.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    
    lastFrameTime.current = currentTime;
    frameCount.current++;
    
    if (frameCount.current % 120 === 0) {
      const actualFPS = 1000 / deltaTime;
      if (actualFPS < 50) {
        interactionRadiusSquared.current = 80 * 80;
        maxDistanceSquared.current = 40 * 40;
      } else if (actualFPS > 55) {
        interactionRadiusSquared.current = 120 * 120;
        maxDistanceSquared.current = 80 * 80;
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
