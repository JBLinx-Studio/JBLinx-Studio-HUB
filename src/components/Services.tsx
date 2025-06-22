
import React, { useState } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Sparkles, Zap, Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Gamepad2,
      title: "Game Universe",
      subtitle: "Immersive Digital Worlds",
      description: "Unity-powered survival, horror, and strategy games that transport players to extraordinary realms of possibility and wonder",
      color: "from-purple-500 to-pink-500",
      link: "/game-development",
      stats: { projects: "15+", rating: "4.9★" },
      tech: ["Unity", "C#", "Blender"],
      hexColor: "bg-purple-500/20"
    },
    {
      icon: Code,
      title: "Web Alchemy",
      subtitle: "Modern Digital Experiences", 
      description: "React, Next.js, and cutting-edge web solutions that redefine user interaction and digital engagement",
      color: "from-blue-500 to-cyan-500",
      link: "/web-applications",
      stats: { projects: "30+", rating: "5.0★" },
      tech: ["React", "Next.js", "TypeScript"],
      hexColor: "bg-blue-500/20"
    },
    {
      icon: Database,
      title: "Backend Architecture",
      subtitle: "Scalable Infrastructure",
      description: "FastAPI, MySQL, and enterprise-grade architectures that power the digital revolution with unwavering reliability",
      color: "from-green-500 to-emerald-500", 
      link: "/web-applications",
      stats: { projects: "25+", rating: "4.8★" },
      tech: ["FastAPI", "MySQL", "Redis"],
      hexColor: "bg-green-500/20"
    },
    {
      icon: Smartphone,
      title: "Mobile Revolution",
      subtitle: "Cross-Platform Excellence",
      description: "Flutter applications that blur the line between mobile and desktop experiences in revolutionary ways",
      color: "from-orange-500 to-red-500",
      link: "/web-applications", 
      stats: { projects: "12+", rating: "4.9★" },
      tech: ["Flutter", "Dart", "Firebase"],
      hexColor: "bg-orange-500/20"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Hexagonal Beehive Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <Hexagon 
              key={i}
              className={`absolute w-20 h-20 text-cyan-500/10 animate-pulse`}
              style={{
                left: `${(i * 15) % 100}%`,
                top: `${(i * 8) % 100}%`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent)] opacity-80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.15),transparent)] opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Unified Header with Hexagonal Elements */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full px-8 py-4 mb-10 group hover:scale-105 transition-all duration-300">
            <div className="relative">
              <Hexagon className="w-6 h-6 text-cyan-400 mr-4 animate-pulse" />
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"></div>
            </div>
            <span className="text-white/90 font-semibold tracking-wide">Digital Consciousness Grid</span>
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight relative">
            <span className="relative inline-block">
              Collective
              <div className="absolute -top-6 -right-6 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Intelligence
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Where individual expertise merges into a unified digital consciousness, 
            creating solutions that transcend conventional boundaries.
          </p>
        </div>

        {/* Hexagonal Service Grid */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Featured Service - Hexagonal Design */}
            <div className="relative">
              <Link
                to={services[activeService].link}
                className="group block relative transform hover:scale-105 transition-all duration-700"
              >
                {/* Hexagonal border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                  
                  {/* Hexagonal icon container */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="relative">
                        <div className={`w-24 h-24 bg-gradient-to-br ${services[activeService].color} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-2xl`}>
                          <services[activeService].icon className="w-12 h-12 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2">
                          <Hexagon className="w-8 h-8 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="text-white/60 text-sm font-medium">{services[activeService].stats.projects} Projects</div>
                        <div className="text-cyan-400 font-bold text-xl">{services[activeService].stats.rating}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <h3 className="text-4xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300">
                        {services[activeService].title}
                      </h3>
                      <div className="text-cyan-400 font-bold text-lg">{services[activeService].subtitle}</div>
                      <p className="text-gray-300 text-xl leading-relaxed">{services[activeService].description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-3">
                        {services[activeService].tech.map((tech, i) => (
                          <span key={i} className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-cyan-400 group-hover:text-white transition-colors">
                        <span className="mr-3 font-semibold">Explore</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service Navigation Grid */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    activeService === index 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-2 border-cyan-400/50 shadow-xl' 
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`relative w-16 h-16 ${service.hexColor} rounded-2xl flex items-center justify-center transition-transform duration-300 ${activeService === index ? 'scale-110' : 'hover:scale-105'}`}>
                      <service.icon className="w-8 h-8 text-white" />
                      {activeService === index && (
                        <div className="absolute -top-1 -right-1">
                          <Hexagon className="w-6 h-6 text-cyan-400 animate-pulse" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold mb-1 transition-colors ${activeService === index ? 'text-cyan-300' : 'text-white'}`}>
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{service.subtitle}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs">
                        <span className="text-gray-500">{service.stats.projects}</span>
                        <span className="text-yellow-400">{service.stats.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Collective Stats */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-10 h-10 text-cyan-400 mr-3" />
                  <Hexagon className="w-8 h-8 text-purple-400 animate-pulse" />
                </div>
                <div className="text-4xl font-black text-white mb-2">100+</div>
                <div className="text-cyan-300 font-semibold">Consciousness Nodes</div>
                <div className="text-gray-400 text-sm mt-1">Connected & Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Unified Call-to-Action */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70"></div>
            <button className="relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-12 py-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 border border-white/20">
              <div className="flex items-center space-x-4">
                <Hexagon className="w-6 h-6 animate-spin" style={{ animationDuration: '2s' }} />
                <span>Join The Digital Consciousness</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
