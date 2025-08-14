
import React, { useEffect, useRef, useState } from 'react';

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
  trail: { x: number; y: number; opacity: number }[];
  originalSize: number;
  energy: number;
}

interface InteractiveParticlesProps {
  theme: 'emerald' | 'blue' | 'green' | 'orange' | 'purple';
  particleCount?: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const InteractiveParticles: React.FC<InteractiveParticlesProps> = ({ 
  theme, 
  particleCount = 50,
  containerRef 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isOver: false });
  const [isActive, setIsActive] = useState(false);

  const themeConfig = {
    emerald: {
      colors: ['#10b981', '#059669', '#047857', '#34d399', '#6ee7b7'],
      glowColor: 'rgba(16, 185, 129, 0.4)',
      trailColor: 'rgba(16, 185, 129, 0.7)',
      magnetism: 1.2
    },
    blue: {
      colors: ['#3b82f6', '#2563eb', '#1d4ed8', '#60a5fa', '#93c5fd'],
      glowColor: 'rgba(59, 130, 246, 0.4)',
      trailColor: 'rgba(59, 130, 246, 0.7)',
      magnetism: 1.0
    },
    green: {
      colors: ['#22c55e', '#16a34a', '#15803d', '#4ade80', '#86efac'],
      glowColor: 'rgba(34, 197, 94, 0.4)',
      trailColor: 'rgba(34, 197, 94, 0.7)',
      magnetism: 1.3
    },
    orange: {
      colors: ['#f97316', '#ea580c', '#dc2626', '#fb923c', '#fdba74'],
      glowColor: 'rgba(249, 115, 22, 0.4)',
      trailColor: 'rgba(249, 115, 22, 0.7)',
      magnetism: 1.5
    },
    purple: {
      colors: ['#a855f7', '#9333ea', '#7c3aed', '#c084fc', '#ddd6fe'],
      glowColor: 'rgba(168, 85, 247, 0.4)',
      trailColor: 'rgba(168, 85, 247, 0.7)',
      magnetism: 0.8
    }
  };

  const createParticle = (x?: number, y?: number): Particle => {
    const canvas = canvasRef.current;
    if (!canvas) return {} as Particle;

    const colors = themeConfig[theme].colors;
    const size = Math.random() * 4 + 2;
    return {
      id: Math.random(),
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      size,
      originalSize: size,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.9 + 0.1,
      life: 0,
      maxLife: Math.random() * 400 + 200,
      trail: [],
      energy: Math.random() * 100 + 50
    };
  };

  const initParticles = () => {
    particlesRef.current = Array.from({ length: particleCount }, () => createParticle());
  };

  const updateParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const mouse = mouseRef.current;
    const config = themeConfig[theme];
    
    particlesRef.current.forEach((particle, index) => {
      // Update trail with enhanced effects
      particle.trail.unshift({ 
        x: particle.x, 
        y: particle.y, 
        opacity: particle.opacity * particle.energy / 100 
      });
      if (particle.trail.length > 15) {
        particle.trail.pop();
      }

      // Advanced mouse interaction with sophisticated physics
      if (mouse.isOver) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          // Dynamic magnetic field with energy transfer
          const force = (200 - distance) / 200;
          const magnetism = config.magnetism;
          
          // Create swirling motion with time-based variance
          const time = Date.now() * 0.001;
          const swirl = Math.sin(time + index * 0.5) * 0.3;
          const angle = Math.atan2(dy, dx) + swirl;
          
          // Apply sophisticated force calculations
          const forceX = Math.cos(angle) * force * magnetism;
          const forceY = Math.sin(angle) * force * magnetism;
          
          particle.vx += forceX * 0.8;
          particle.vy += forceY * 0.8;
          
          // Energy and size increase with proximity
          particle.energy = Math.min(particle.energy + force * 20, 200);
          particle.size = particle.originalSize * (1 + force * 1.5);
          particle.opacity = Math.min(particle.opacity + force * 0.5, 1);
          
          // Create spectacular sparkle explosions
          if (distance < 80 && Math.random() < 0.15) {
            for (let i = 0; i < 3; i++) {
              particlesRef.current.push(createParticle(
                particle.x + (Math.random() - 0.5) * 40,
                particle.y + (Math.random() - 0.5) * 40
              ));
            }
          }
          
          // Particle-to-particle chain reactions
          if (distance < 50) {
            particlesRef.current.forEach((otherParticle, otherIndex) => {
              if (index !== otherIndex) {
                const otherDx = particle.x - otherParticle.x;
                const otherDy = particle.y - otherParticle.y;
                const otherDistance = Math.sqrt(otherDx * otherDx + otherDy * otherDy);
                
                if (otherDistance < 60) {
                  otherParticle.energy += 10;
                  otherParticle.vx += otherDx * 0.01;
                  otherParticle.vy += otherDy * 0.01;
                }
              }
            });
          }
        }
      }

      // Enhanced physics with energy decay
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Sophisticated friction with energy consideration
      const friction = 0.97 - (particle.energy / 1000);
      particle.vx *= friction;
      particle.vy *= friction;

      // Advanced boundary collision with energy transfer
      if (particle.x <= particle.size || particle.x >= canvas.width - particle.size) {
        particle.vx *= -0.7;
        particle.x = Math.max(particle.size, Math.min(canvas.width - particle.size, particle.x));
        particle.energy *= 0.8;
      }
      if (particle.y <= particle.size || particle.y >= canvas.height - particle.size) {
        particle.vy *= -0.7;
        particle.y = Math.max(particle.size, Math.min(canvas.height - particle.size, particle.y));
        particle.energy *= 0.8;
      }

      // Life cycle management
      particle.life++;
      if (particle.life > particle.maxLife) {
        particlesRef.current[index] = createParticle();
      }

      // Natural energy decay and size normalization
      if (!mouse.isOver || Math.sqrt(Math.pow(mouse.x - particle.x, 2) + Math.pow(mouse.y - particle.y, 2)) > 200) {
        particle.energy = Math.max(particle.energy * 0.995, 50);
        particle.size = Math.max(particle.size * 0.99, particle.originalSize);
        particle.opacity = Math.max(particle.opacity * 0.998, 0.1);
      }
    });

    // Intelligent particle management
    if (particlesRef.current.length > particleCount * 3) {
      particlesRef.current = particlesRef.current
        .sort((a, b) => b.energy - a.energy)
        .slice(0, particleCount * 2);
    }
  };

  const drawParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const config = themeConfig[theme];

    // Enhanced particle rendering
    particlesRef.current.forEach(particle => {
      // Sophisticated trail rendering with energy-based effects
      particle.trail.forEach((trailPoint, index) => {
        const trailOpacity = (trailPoint.opacity * (particle.trail.length - index)) / particle.trail.length * 0.4;
        const trailSize = particle.size * (particle.trail.length - index) / particle.trail.length * 0.6;
        
        ctx.save();
        ctx.globalAlpha = trailOpacity;
        ctx.fillStyle = config.trailColor;
        ctx.shadowBlur = 15 + particle.energy / 10;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(trailPoint.x, trailPoint.y, Math.max(trailSize, 0.5), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Multi-layered particle rendering with energy effects
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      // Outer energy glow (largest)
      ctx.shadowBlur = 25 + particle.energy / 5;
      ctx.shadowColor = particle.color;
      ctx.fillStyle = config.glowColor;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();

      // Middle glow layer
      ctx.shadowBlur = 15 + particle.energy / 8;
      ctx.fillStyle = particle.color + '80';
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Core particle with energy-based brightness
      ctx.shadowBlur = 10;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Energy core highlight
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = (particle.opacity * particle.energy) / 200;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.4, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });

    // Enhanced connection system with energy-based rendering
    particlesRef.current.forEach((particle, i) => {
      particlesRef.current.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const opacity = ((120 - distance) / 120) * 0.3 * (particle.energy + otherParticle.energy) / 200;
          const lineWidth = 1 + (particle.energy + otherParticle.energy) / 300;
          
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = lineWidth;
          ctx.shadowBlur = 8 + (particle.energy + otherParticle.energy) / 50;
          ctx.shadowColor = particle.color;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
          ctx.restore();
        }
      });
    });
  };

  const animate = () => {
    updateParticles();
    drawParticles();
    animationRef.current = requestAnimationFrame(animate);
  };

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

    // Properly attach mouse events to the container
    container.addEventListener('mousemove', handleMouseMove);
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
  }, [theme, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
        isActive ? 'opacity-100' : 'opacity-70'
      }`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default InteractiveParticles;
