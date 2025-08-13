
import React, { useState, useEffect } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Zap, Star, Users, Trophy, Activity, Hexagon, Globe, Shield, Rocket, Brain, Cloud, Monitor, Cpu, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnhancedServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate active service for demo effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Gamepad2,
      title: "Game Development", 
      subtitle: "Immersive Digital Worlds",
      description: "Unity-powered survival, horror, and strategy games with cutting-edge graphics, immersive storytelling, and gameplay mechanics that transport players to extraordinary realms of adventure.",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      borderColor: "border-purple-500/50",
      bgColor: "bg-purple-500/20",
      glowColor: "shadow-purple-500/25",
      link: "/game-development",
      stats: {
        projects: "15+",
        rating: 4.9,
        users: "50k+",
        completion: "98%"
      },
      features: ["Unity Engine", "Cross-Platform", "VR Ready", "Multiplayer"],
      accent: "text-purple-400",
      technologies: ["C#", "Unity", "Blender", "Photoshop"]
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Modern Digital Solutions",
      description: "React, Next.js, and cutting-edge web technologies creating responsive, scalable applications with lightning-fast performance that redefine user interaction and experience.",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      borderColor: "border-blue-500/50",
      bgColor: "bg-blue-500/20",
      glowColor: "shadow-blue-500/25",
      link: "/web-applications",
      stats: {
        projects: "30+",
        rating: 5.0,
        users: "75k+",
        completion: "99%"
      },
      features: ["React/Next.js", "TypeScript", "Tailwind", "Performance"],
      accent: "text-blue-400",
      technologies: ["React", "Node.js", "TypeScript", "Tailwind"]
    },
    {
      icon: Database,
      title: "Backend Systems",
      subtitle: "Scalable Infrastructure",
      description: "FastAPI, MySQL, and enterprise-grade architectures powering robust digital solutions with high availability, security, and performance optimization at scale.",
      gradient: "from-emerald-500 via-green-500 to-emerald-600",
      borderColor: "border-emerald-500/50",
      bgColor: "bg-emerald-500/20",
      glowColor: "shadow-emerald-500/25",
      link: "/web-applications",
      stats: {
        projects: "25+",
        rating: 4.8,
        users: "40k+",
        completion: "97%"
      },
      features: ["FastAPI", "MySQL", "Redis", "Cloud Native"],
      accent: "text-emerald-400",
      technologies: ["Python", "FastAPI", "MySQL", "Docker"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      subtitle: "Cross-Platform Excellence",
      description: "Flutter and React Native applications delivering seamless mobile experiences across iOS and Android platforms with native performance and stunning UI/UX design.",
      gradient: "from-orange-500 via-red-500 to-orange-600",
      borderColor: "border-orange-500/50",
      bgColor: "bg-orange-500/20",
      glowColor: "shadow-orange-500/25",
      link: "/web-applications",
      stats: {
        projects: "12+",
        rating: 4.9,
        users: "30k+",
        completion: "96%"
      },
      features: ["Flutter", "React Native", "iOS/Android", "App Store"],
      accent: "text-orange-400",
      technologies: ["Flutter", "Dart", "React Native", "Swift"]
    }
  ];

  const companyHighlights = [
    {
      icon: Trophy,
      value: "98.7%",
      label: "Client Satisfaction",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Average Rating",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30"
    },
    {
      icon: Users,
      value: "150k+",
      label: "Active Users",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30"
    },
    {
      icon: Activity,
      value: "99.9%",
      label: "Uptime SLA",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30"
    }
  ];

  const floatingElements = [
    { icon: Brain, size: 'w-6 h-6', position: 'top-1/4 left-1/6', delay: '0s', color: 'text-purple-400/60' },
    { icon: Cloud, size: 'w-8 h-8', position: 'top-1/3 right-1/4', delay: '2s', color: 'text-blue-400/60' },
    { icon: Shield, size: 'w-5 h-5', position: 'bottom-1/3 left-1/4', delay: '4s', color: 'text-emerald-400/60' },
    { icon: Rocket, size: 'w-7 h-7', position: 'bottom-1/4 right-1/6', delay: '6s', color: 'text-orange-400/60' },
    { icon: Globe, size: 'w-6 h-6', position: 'top-1/2 left-1/8', delay: '1s', color: 'text-cyan-400/60' },
    { icon: Cpu, size: 'w-5 h-5', position: 'top-2/3 right-1/8', delay: '3s', color: 'text-pink-400/60' },
    { icon: Settings, size: 'w-6 h-6', position: 'bottom-1/6 left-1/3', delay: '5s', color: 'text-indigo-400/60' },
    { icon: Monitor, size: 'w-7 h-7', position: 'top-1/6 right-1/3', delay: '7s', color: 'text-yellow-400/60' }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 backdrop-blur-xl border-t border-zinc-800/50 py-20 overflow-hidden">
      {/* Enhanced Dynamic Background with Mouse Interaction */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic gradient orbs that follow mouse */}
        <div 
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/15 to-cyan-500/10 blur-3xl rounded-full transition-all duration-1000 ease-out"
          style={{
            left: `${(mousePosition.x / window.innerWidth) * 20}%`,
            top: `${(mousePosition.y / window.innerHeight) * 20}%`,
          }}
        ></div>
        
        <div 
          className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500/12 to-pink-500/8 blur-3xl rounded-full transition-all duration-1500 ease-out"
          style={{
            right: `${(mousePosition.x / window.innerWidth) * 15}%`,
            bottom: `${(mousePosition.y / window.innerHeight) * 15}%`,
          }}
        ></div>

        <div 
          className="absolute w-[700px] h-[700px] bg-gradient-to-r from-orange-500/10 to-amber-500/6 blur-3xl rounded-full animate-pulse transition-all duration-2000"
          style={{
            left: `${50 + (mousePosition.x / window.innerWidth) * 10}%`,
            top: `${50 + (mousePosition.y / window.innerHeight) * 10}%`,
            transform: 'translate(-50%, -50%)',
          }}
        ></div>

        {/* Animated grid with parallax effect */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div 
            className="w-full h-full transition-transform duration-100"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.4) 1px, transparent 1px),
                linear-gradient(45deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          ></div>
        </div>

        {/* Floating tech elements */}
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon;
          return (
            <div
              key={index}
              className={`absolute ${element.position} ${element.size} ${element.color} animate-pulse border border-current/20 rounded-lg p-1 backdrop-blur-sm`}
              style={{
                animationDelay: element.delay,
                animationDuration: '3s'
              }}
            >
              <IconComponent className="w-full h-full" />
            </div>
          );
        })}

        {/* Enhanced particle trails */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent transform rotate-1 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent transform -rotate-1 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/50 to-transparent transform rotate-2 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-400/50 to-transparent transform -rotate-2 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-zinc-800/90 border border-emerald-500/60 px-6 py-3 mb-6 backdrop-blur-sm hover:bg-zinc-700/90 hover:border-emerald-400/80 transition-all duration-300 group">
            <Hexagon className="w-5 h-5 mr-3 text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-emerald-400 font-black text-sm font-mono tracking-widest">PROFESSIONAL SERVICES ECOSYSTEM</span>
            <div className="ml-3 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">CREATE</span>
          </h2>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent to-emerald-400/60"></div>
            <Trophy className="w-6 h-6 text-emerald-400" />
            <div className="w-24 h-1 bg-gradient-to-l from-transparent to-emerald-400/60"></div>
          </div>
          
          <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            <span className="text-emerald-400 font-bold">Elite development services</span> spanning multiple domains with 
            <span className="text-cyan-400 font-semibold"> cutting-edge technologies</span>, 
            <span className="text-purple-400 font-semibold"> innovative solutions</span>, and 
            <span className="text-orange-400 font-semibold"> unmatched quality</span> that drive business success
          </p>

          {/* Company Highlights */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {companyHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className={`${highlight.bg} ${highlight.border} border backdrop-blur-sm p-4 text-center hover:scale-105 transition-all duration-300 group cursor-pointer hover:shadow-xl ${highlight.value === "99.9%" ? highlight.color.replace('text-', 'hover:shadow-') + '/25' : ''}`}>
                  <IconComponent className={`w-6 h-6 ${highlight.color} mx-auto mb-2 group-hover:scale-125 transition-transform duration-300`} />
                  <div className={`text-lg font-black ${highlight.color} font-mono mb-1`}>{highlight.value}</div>
                  <div className="text-zinc-400 text-xs font-medium">{highlight.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            return (
              <div 
                key={index} 
                className={`relative bg-zinc-800/90 border transition-all duration-500 cursor-pointer p-6 backdrop-blur-sm hover:scale-[1.02] ${
                  isActive 
                    ? `${service.borderColor} ${service.glowColor} shadow-2xl` 
                    : 'border-zinc-700 hover:border-zinc-600'
                }`}
                onMouseEnter={() => setActiveService(index)}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Animated corner accents */}
                {isActive && (
                  <>
                    <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 ${service.borderColor}`}></div>
                    <div className={`absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 ${service.borderColor}`}></div>
                    <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 ${service.borderColor}`}></div>
                    <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${service.borderColor}`}></div>
                  </>
                )}

                {/* Service Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg ${isActive ? 'scale-110' : ''} transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-black font-mono transition-colors duration-300 ${isActive ? service.accent : 'text-white'}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-zinc-400">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-bold text-sm">{service.stats.rating}</span>
                    </div>
                    <div className={`text-sm font-bold ${service.accent}`}>{service.stats.projects}</div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <p className="text-zinc-300 text-sm leading-relaxed">{service.description}</p>
                  
                  {/* Technologies */}
                  <div>
                    <div className="text-zinc-400 text-xs font-bold mb-2">TECH STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`px-2 py-1 text-xs font-bold transition-all duration-300 ${
                            isActive 
                              ? `${service.borderColor} ${service.bgColor} ${service.accent}` 
                              : 'border-zinc-600 bg-zinc-700/50 text-zinc-300'
                          } border`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <div className="text-zinc-400 text-xs font-bold mb-2">KEY FEATURES</div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${isActive ? service.accent.replace('text-', 'bg-') : 'bg-zinc-500'} transition-colors duration-300`}></div>
                          <span className="text-zinc-300 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-700/50">
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-zinc-400" />
                        <span className="text-zinc-300 font-medium">{service.stats.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Activity className="w-3 h-3 text-zinc-400" />
                        <span className="text-zinc-300 font-medium">{service.stats.completion}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={service.link} 
                      className={`flex items-center space-x-2 text-sm font-bold transition-all duration-300 hover:scale-105 group ${
                        isActive ? service.accent : 'text-zinc-400 hover:text-emerald-400'
                      }`}
                    >
                      <span>EXPLORE</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="mb-8">
            <div className="text-zinc-400 text-sm font-mono font-bold tracking-widest mb-3">READY TO START YOUR PROJECT?</div>
            <p className="text-zinc-300 text-lg max-w-2xl mx-auto mb-6">
              Join <span className="text-emerald-400 font-bold">150,000+ satisfied clients</span> who trust JBLinx Studio for their most critical technology needs. 
              From concept to deployment, we deliver <span className="text-cyan-400 font-bold">professional-grade solutions</span>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:via-cyan-400 hover:to-blue-400 text-black px-8 py-4 font-black transition-all duration-300 space-x-3 shadow-xl hover:scale-105 hover:shadow-emerald-500/30 group"
            >
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/about" 
              className="inline-flex items-center bg-zinc-800/80 border border-emerald-400/70 text-emerald-400 hover:bg-zinc-700/80 hover:border-emerald-300 hover:text-emerald-300 px-8 py-4 font-black transition-all duration-300 space-x-3 hover:scale-105"
            >
              <Trophy className="w-5 h-5" />
              <span>LEARN MORE</span>
            </Link>
          </div>
          
          <div className="mt-6 text-xs text-zinc-500 font-mono">
            Professional • Reliable • Innovative • Results-Driven • 24/7 Support
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;
