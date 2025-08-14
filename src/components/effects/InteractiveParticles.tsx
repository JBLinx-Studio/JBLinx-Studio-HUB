
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
      colors: ['#10b981', '#059669', '#047857', '#065f46'],
      glowColor: 'rgba(16, 185, 129, 0.3)',
      trailColor: 'rgba(16, 185, 129, 0.6)'
    },
    blue: {
      colors: ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'],
      glowColor: 'rgba(59, 130, 246, 0.3)',
      trailColor: 'rgba(59, 130, 246, 0.6)'
    },
    green: {
      colors: ['#22c55e', '#16a34a', '#15803d', '#166534'],
      glowColor: 'rgba(34, 197, 94, 0.3)',
      trailColor: 'rgba(34, 197, 94, 0.6)'
    },
    orange: {
      colors: ['#f97316', '#ea580c', '#dc2626', '#b91c1c'],
      glowColor: 'rgba(249, 115, 22, 0.3)',
      trailColor: 'rgba(249, 115, 22, 0.6)'
    },
    purple: {
      colors: ['#a855f7', '#9333ea', '#7c3aed', '#6d28d9'],
      glowColor: 'rgba(168, 85, 247, 0.3)',
      trailColor: 'rgba(168, 85, 247, 0.6)'
    }
  };

  const createParticle = (x?: number, y?: number): Particle => {
    const canvas = canvasRef.current;
    if (!canvas) return {} as Particle;

    const colors = themeConfig[theme].colors;
    return {
      id: Math.random(),
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.8 + 0.2,
      life: 0,
      maxLife: Math.random() * 300 + 100,
      trail: []
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
    
    particlesRef.current.forEach((particle, index) => {
      // Update trail
      particle.trail.unshift({ x: particle.x, y: particle.y, opacity: particle.opacity });
      if (particle.trail.length > 10) {
        particle.trail.pop();
      }

      // Mouse interaction
      if (mouse.isOver) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          // Magnetic attraction with swirl effect
          const force = (150 - distance) / 150;
          const angle = Math.atan2(dy, dx) + Math.sin(Date.now() * 0.01 + index) * 0.5;
          particle.vx += Math.cos(angle) * force * 0.5;
          particle.vy += Math.sin(angle) * force * 0.5;
          
          // Increase size and opacity near mouse
          particle.size = Math.min(particle.size * (1 + force * 0.1), 8);
          particle.opacity = Math.min(particle.opacity * (1 + force * 0.5), 1);
          
          // Create sparkle effect
          if (distance < 50 && Math.random() < 0.1) {
            particlesRef.current.push(createParticle(
              particle.x + (Math.random() - 0.5) * 20,
              particle.y + (Math.random() - 0.5) * 20
            ));
          }
        }
      }

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Apply friction
      particle.vx *= 0.98;
      particle.vy *= 0.98;

      // Bounce off edges with energy loss
      if (particle.x <= 0 || particle.x >= canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y <= 0 || particle.y >= canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Update life
      particle.life++;
      if (particle.life > particle.maxLife) {
        particlesRef.current[index] = createParticle();
      }

      // Gradual size and opacity decay
      if (!mouse.isOver || Math.sqrt(Math.pow(mouse.x - particle.x, 2) + Math.pow(mouse.y - particle.y, 2)) > 150) {
        particle.size *= 0.999;
        particle.opacity *= 0.9995;
      }
    });

    // Remove excess particles (from sparkle effects)
    if (particlesRef.current.length > particleCount * 2) {
      particlesRef.current = particlesRef.current.slice(0, particleCount * 2);
    }
  };

  const drawParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particlesRef.current.forEach(particle => {
      // Draw trail
      particle.trail.forEach((trailPoint, index) => {
        const trailOpacity = (trailPoint.opacity * (particle.trail.length - index)) / particle.trail.length * 0.3;
        const trailSize = particle.size * (particle.trail.length - index) / particle.trail.length * 0.5;
        
        ctx.save();
        ctx.globalAlpha = trailOpacity;
        ctx.fillStyle = themeConfig[theme].trailColor;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        ctx.beginPath();
        ctx.arc(trailPoint.x, trailPoint.y, Math.max(trailSize, 0.5), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw main particle with glow
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      // Outer glow
      ctx.shadowBlur = 20;
      ctx.shadowColor = particle.color;
      ctx.fillStyle = themeConfig[theme].glowColor;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();

      // Inner particle
      ctx.shadowBlur = 5;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Core highlight
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff';
      ctx.globalAlpha = particle.opacity * 0.8;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    });

    // Draw connections between nearby particles
    particlesRef.current.forEach((particle, i) => {
      particlesRef.current.slice(i + 1).forEach(otherParticle => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const opacity = (100 - distance) / 100 * 0.2;
          ctx.save();
          ctx.globalAlpha = opacity;
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 5;
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
      const rect = canvas.getBoundingClientRect();
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
      className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
        isActive ? 'opacity-100' : 'opacity-60'
      }`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default InteractiveParticles;
