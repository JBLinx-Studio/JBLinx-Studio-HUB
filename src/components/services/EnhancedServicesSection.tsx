
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Zap, Star, Users, Trophy, Activity, Hexagon, Globe, Shield, Rocket, Brain, Cloud, Monitor, Cpu, Settings, Eye, Target, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnhancedServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Enhanced mouse tracking with ripple effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({ 
          x: ((e.clientX - rect.left) / rect.width) * 100, 
          y: ((e.clientY - rect.top) / rect.height) * 100 
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const newRipple = {
          id: Date.now(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
        setRipples(prev => [...prev, newRipple]);
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Auto-rotate with pause on hover
  useEffect(() => {
    if (hoveredCard === null) {
      const interval = setInterval(() => {
        setActiveService(prev => (prev + 1) % 4);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [hoveredCard]);

  const services = [
    {
      icon: Gamepad2,
      title: "Game Development", 
      subtitle: "Immersive Worlds",
      description: "Unity-powered experiences with cutting-edge graphics and innovative gameplay mechanics.",
      gradient: "from-purple-600 via-pink-500 to-purple-700",
      borderColor: "border-purple-400/60",
      bgColor: "bg-purple-500/15",
      glowColor: "shadow-purple-500/30",
      link: "/game-development",
      stats: { projects: "15+", rating: 4.9, users: "50k+", completion: "98%" },
      features: ["Unity Engine", "Cross-Platform", "VR Ready", "Multiplayer"],
      accent: "text-purple-400",
      technologies: ["C#", "Unity", "Blender", "Photoshop"],
      color: "purple"
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Digital Solutions",
      description: "React and Next.js applications with lightning-fast performance and modern design.",
      gradient: "from-blue-600 via-cyan-500 to-blue-700",
      borderColor: "border-blue-400/60",
      bgColor: "bg-blue-500/15",
      glowColor: "shadow-blue-500/30",
      link: "/web-applications",
      stats: { projects: "30+", rating: 5.0, users: "75k+", completion: "99%" },
      features: ["React/Next.js", "TypeScript", "Tailwind", "Performance"],
      accent: "text-blue-400",
      technologies: ["React", "Node.js", "TypeScript", "Tailwind"],
      color: "blue"
    },
    {
      icon: Database,
      title: "Backend Systems",
      subtitle: "Scalable Infrastructure",
      description: "FastAPI and MySQL architectures with enterprise-grade security and performance.",
      gradient: "from-emerald-600 via-green-500 to-emerald-700",
      borderColor: "border-emerald-400/60",
      bgColor: "bg-emerald-500/15",
      glowColor: "shadow-emerald-500/30",
      link: "/web-applications",
      stats: { projects: "25+", rating: 4.8, users: "40k+", completion: "97%" },
      features: ["FastAPI", "MySQL", "Redis", "Cloud Native"],
      accent: "text-emerald-400",
      technologies: ["Python", "FastAPI", "MySQL", "Docker"],
      color: "emerald"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      subtitle: "Cross-Platform",
      description: "Flutter and React Native applications with seamless iOS/Android experiences.",
      gradient: "from-orange-600 via-red-500 to-orange-700",
      borderColor: "border-orange-400/60",
      bgColor: "bg-orange-500/15",
      glowColor: "shadow-orange-500/30",
      link: "/web-applications",
      stats: { projects: "12+", rating: 4.9, users: "30k+", completion: "96%" },
      features: ["Flutter", "React Native", "iOS/Android", "App Store"],
      accent: "text-orange-400",
      technologies: ["Flutter", "Dart", "React Native", "Swift"],
      color: "orange"
    }
  ];

  const compactHighlights = [
    { icon: Trophy, value: "98.7%", label: "Satisfaction", color: "text-yellow-400", bg: "bg-yellow-500/10" },
    { icon: Star, value: "4.9/5", label: "Rating", color: "text-purple-400", bg: "bg-purple-500/10" },
    { icon: Users, value: "150k+", label: "Users", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: Activity, value: "99.9%", label: "Uptime", color: "text-emerald-400", bg: "bg-emerald-500/10" }
  ];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 py-16 overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Interactive gradient orbs following mouse */}
        <div 
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-blue-500/10 blur-3xl rounded-full transition-all duration-700 ease-out"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%) scale(1.2)',
          }}
        />
        
        <div 
          className="absolute w-[300px] h-[300px] bg-gradient-to-l from-purple-500/15 via-pink-500/10 to-orange-500/8 blur-2xl rounded-full transition-all duration-1000 ease-out"
          style={{
            right: `${100 - mousePosition.x}%`,
            bottom: `${100 - mousePosition.y}%`,
            transform: 'translate(50%, 50%) scale(0.8)',
          }}
        />

        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full transition-transform duration-300"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
                radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(139, 92, 246, 0.12) 0%, transparent 50%),
                radial-gradient(circle at ${mousePosition.x + 20}% ${mousePosition.y - 20}%, rgba(59, 130, 246, 0.10) 0%, transparent 40%)
              `
            }}
          />
        </div>

        {/* Interactive grid with mouse parallax */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div 
            className="w-full h-full transition-transform duration-200"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.6) 1px, transparent 1px),
                linear-gradient(45deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px, 60px 60px, 30px 30px',
              transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px) rotate(${mousePosition.x * 0.01}deg)`
            }}
          />
        </div>

        {/* Click ripple effects */}
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="absolute pointer-events-none"
            style={{ left: ripple.x, top: ripple.y }}
          >
            <div className="w-2 h-2 bg-emerald-400/50 rounded-full animate-ping transform -translate-x-1 -translate-y-1" />
            <div className="absolute w-8 h-8 border border-emerald-400/30 rounded-full animate-pulse transform -translate-x-4 -translate-y-4" />
          </div>
        ))}

        {/* Floating tech particles */}
        {[Brain, Cloud, Shield, Rocket, Globe, Cpu, Settings, Monitor].map((Icon, i) => (
          <div
            key={i}
            className={`absolute w-6 h-6 text-emerald-400/40 animate-pulse transition-all duration-1000`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + Math.sin(i) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${i * 45}deg)`
            }}
          >
            <Icon className="w-full h-full" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-zinc-800/90 border border-emerald-500/60 px-4 py-2 mb-4 backdrop-blur-sm group hover:bg-emerald-500/10 transition-all duration-300">
            <Hexagon className="w-4 h-4 mr-2 text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-emerald-400 font-black text-xs font-mono tracking-widest">ELITE SERVICES</span>
            <div className="ml-2 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse">CREATE</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4" />
          
          <p className="text-sm text-zinc-300 max-w-2xl mx-auto mb-6">
            Professional development services with <span className="text-emerald-400 font-bold">cutting-edge technology</span> and <span className="text-cyan-400 font-bold">innovative solutions</span>
          </p>

          {/* Compact Highlights Strip */}
          <div className="flex justify-center gap-2 mb-8">
            {compactHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className={`${highlight.bg} border border-zinc-700/50 px-3 py-2 text-center hover:scale-105 transition-all duration-300 group cursor-pointer backdrop-blur-sm`}>
                  <div className="flex items-center gap-2">
                    <IconComponent className={`w-3 h-3 ${highlight.color} group-hover:scale-125 transition-transform duration-300`} />
                    <div>
                      <div className={`text-xs font-black ${highlight.color} font-mono`}>{highlight.value}</div>
                      <div className="text-zinc-400 text-xs">{highlight.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Services Grid */}
        <div className="grid lg:grid-cols-2 gap-4 mb-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            const isHovered = hoveredCard === index;
            
            return (
              <div 
                key={index} 
                className={`relative bg-zinc-800/90 border transition-all duration-500 cursor-pointer p-4 backdrop-blur-sm group ${
                  isActive || isHovered
                    ? `${service.borderColor} ${service.glowColor} shadow-xl scale-[1.02]` 
                    : 'border-zinc-700/50 hover:border-zinc-600/70'
                }`}
                onMouseEnter={() => {
                  setActiveService(index);
                  setHoveredCard(index);
                }}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Interactive corner indicators */}
                {(isActive || isHovered) && (
                  <>
                    <div className={`absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br ${service.gradient} animate-pulse`} />
                    <div className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-bl ${service.gradient} animate-pulse`} style={{animationDelay: '0.1s'}} />
                    <div className={`absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-tr ${service.gradient} animate-pulse`} style={{animationDelay: '0.2s'}} />
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-tl ${service.gradient} animate-pulse`} style={{animationDelay: '0.3s'}} />
                  </>
                )}

                {/* Compact Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg transition-transform duration-300 ${(isActive || isHovered) ? 'scale-110 rotate-6' : ''}`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-black font-mono transition-colors duration-300 ${(isActive || isHovered) ? service.accent : 'text-white'}`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-400">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-bold text-xs">{service.stats.rating}</span>
                  </div>
                </div>

                {/* Compact Content */}
                <p className="text-zinc-300 text-xs leading-relaxed mb-3">{service.description}</p>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {service.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`px-2 py-0.5 text-xs font-bold transition-all duration-300 ${
                        (isActive || isHovered)
                          ? `${service.borderColor} ${service.bgColor} ${service.accent}` 
                          : 'border-zinc-600/50 bg-zinc-700/30 text-zinc-300'
                      } border`}
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="text-zinc-500 text-xs">+{service.technologies.length - 3}</span>
                  )}
                </div>
                
                {/* Compact Stats Row */}
                <div className="flex items-center justify-between pt-3 border-t border-zinc-700/30">
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-zinc-400" />
                      <span className="text-zinc-300">{service.stats.users}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="w-3 h-3 text-zinc-400" />
                      <span className="text-zinc-300">{service.stats.completion}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={service.link} 
                    className={`flex items-center gap-1 text-xs font-bold transition-all duration-300 hover:scale-105 group ${
                      (isActive || isHovered) ? service.accent : 'text-zinc-400 hover:text-emerald-400'
                    }`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>VIEW</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                </div>

                {/* Progress indicator */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-zinc-700/50 w-full">
                  <div 
                    className={`h-full bg-gradient-to-r ${service.gradient} transition-all duration-500 ${
                      (isActive || isHovered) ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact CTA */}
        <div className="text-center">
          <div className="mb-6">
            <p className="text-zinc-300 text-sm max-w-xl mx-auto mb-4">
              Ready to transform your ideas into reality? <span className="text-emerald-400 font-bold">150,000+ clients</span> trust our expertise.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:via-cyan-400 hover:to-blue-400 text-black px-6 py-3 font-black text-sm transition-all duration-300 gap-2 shadow-xl hover:scale-105 hover:shadow-emerald-500/25 group"
            >
              <Zap className="w-4 h-4 group-hover:animate-bounce" />
              <span>EXPLORE SERVICES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/about" 
              className="inline-flex items-center bg-zinc-800/80 border border-emerald-400/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-300 px-6 py-3 font-black text-sm transition-all duration-300 gap-2 hover:scale-105"
            >
              <Trophy className="w-4 h-4" />
              <span>LEARN MORE</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;
