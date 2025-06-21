
import React, { useState } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Gamepad2,
      title: "Game Universe",
      subtitle: "Immersive Digital Worlds",
      description: "Unity-powered survival, horror, and strategy games that transport players to extraordinary realms",
      color: "from-purple-500 to-pink-500",
      link: "/game-development",
      stats: { projects: "15+", rating: "4.9★" },
      tech: ["Unity", "C#", "Blender"]
    },
    {
      icon: Code,
      title: "Web Alchemy",
      subtitle: "Modern Digital Experiences", 
      description: "React, Next.js, and cutting-edge web solutions that redefine user interaction",
      color: "from-blue-500 to-cyan-500",
      link: "/web-applications",
      stats: { projects: "30+", rating: "5.0★" },
      tech: ["React", "Next.js", "TypeScript"]
    },
    {
      icon: Database,
      title: "Backend Architecture",
      subtitle: "Scalable Infrastructure",
      description: "FastAPI, MySQL, and enterprise-grade architectures that never sleep",
      color: "from-green-500 to-emerald-500", 
      link: "/web-applications",
      stats: { projects: "25+", rating: "4.8★" },
      tech: ["FastAPI", "MySQL", "Redis"]
    },
    {
      icon: Smartphone,
      title: "Mobile Revolution",
      subtitle: "Cross-Platform Excellence",
      description: "Flutter applications that blur the line between mobile and desktop experiences",
      color: "from-orange-500 to-red-500",
      link: "/web-applications", 
      stats: { projects: "12+", rating: "4.9★" },
      tech: ["Flutter", "Dart", "Firebase"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Unique background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent)] opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Revolutionary header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-white/90 font-medium">Our Craft Domains</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 ml-4">
              Mastery
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't follow trends. We create them. Each domain represents years of 
            expertise distilled into revolutionary solutions.
          </p>
        </div>

        {/* Service selector tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeService === index
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-xl'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Services showcase - asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Main featured service */}
          <div className="lg:col-span-8">
            <Link
              to={services[activeService].link}
              className="group block bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${services[activeService].color} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <services[activeService].icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="text-right">
                    <div className="text-white/60 text-sm">{services[activeService].stats.projects} Projects</div>
                    <div className="text-cyan-400 font-bold">{services[activeService].stats.rating}</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <h3 className="text-3xl font-black text-white">{services[activeService].title}</h3>
                  <div className="text-cyan-400 font-semibold">{services[activeService].subtitle}</div>
                  <p className="text-gray-300 text-lg leading-relaxed">{services[activeService].description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {services[activeService].tech.map((tech, i) => (
                      <span key={i} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Side stats and mini cards */}
          <div className="lg:col-span-4 space-y-6">
            {services.slice(0, 3).map((service, index) => (
              index !== activeService && (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{service.title}</h4>
                      <p className="text-gray-400 text-sm">{service.subtitle}</p>
                    </div>
                  </div>
                </div>
              )
            ))}

            {/* Stats card */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6">
              <div className="text-center space-y-2">
                <Zap className="w-8 h-8 text-cyan-400 mx-auto" />
                <div className="text-2xl font-black text-white">100+</div>
                <div className="text-gray-300 text-sm">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Revolutionary CTA */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-3xl font-bold text-xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 group cursor-pointer">
            <span>Begin Your Digital Journey</span>
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
