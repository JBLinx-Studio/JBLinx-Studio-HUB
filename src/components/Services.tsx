
import React, { useState } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Sparkles, Zap, Star, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Gamepad2,
      title: "Divine Gaming Realms",
      subtitle: "Sacred Digital Experiences",
      description: "Unity-powered spiritual journeys and mystical gaming experiences that transcend ordinary reality",
      color: "from-purple-600 via-indigo-600 to-blue-600",
      link: "/game-development",
      stats: { projects: "15+", rating: "★★★★★" },
      tech: ["Unity", "C#", "Sacred Geometry"],
      bgPattern: "bg-purple-600/10"
    },
    {
      icon: Code,
      title: "Sacred Web Architecture",
      subtitle: "Divine Digital Foundations", 
      description: "React, Next.js, and blessed web solutions that create sanctified digital experiences",
      color: "from-blue-600 via-cyan-600 to-teal-600",
      link: "/web-applications",
      stats: { projects: "30+", rating: "★★★★★" },
      tech: ["React", "Next.js", "Divine Code"],
      bgPattern: "bg-blue-600/10"
    },
    {
      icon: Database,
      title: "Holy Data Sanctuaries",
      subtitle: "Blessed Backend Systems",
      description: "FastAPI, MySQL, and consecrated architectures that serve divine digital purposes",
      color: "from-green-600 via-emerald-600 to-teal-600", 
      link: "/web-applications",
      stats: { projects: "25+", rating: "★★★★★" },
      tech: ["FastAPI", "MySQL", "Sacred APIs"],
      bgPattern: "bg-green-600/10"
    },
    {
      icon: Smartphone,
      title: "Mobile Sanctification",
      subtitle: "Portable Divine Experiences",
      description: "Flutter applications that bring sacred digital experiences to every device",
      color: "from-orange-600 via-red-600 to-pink-600",
      link: "/web-applications", 
      stats: { projects: "12+", rating: "★★★★★" },
      tech: ["Flutter", "Dart", "Mobile Sacred"],
      bgPattern: "bg-orange-600/10"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Orthodox Sacred Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 border border-yellow-400/20 rotate-45"
              style={{
                left: `${(i * 25) % 100}%`,
                top: `${(i * 15) % 100}%`,
                borderRadius: '20%',
                animation: `pulse ${3 + (i % 3)}s infinite`
              }}
            />
          ))}
        </div>
        
        {/* Sacred Light Rays */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-yellow-400/30 via-transparent to-transparent transform -translate-x-1/2"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-blue-400/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-purple-400/20 via-transparent to-transparent"></div>
        
        {/* Orthodox Cross Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Sacred Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-purple-500/20 backdrop-blur-xl border border-yellow-500/30 rounded-full px-8 py-4 mb-10 group hover:scale-105 transition-all duration-300">
            <Crown className="w-6 h-6 text-yellow-400 mr-4 animate-pulse" />
            <span className="text-white/90 font-semibold tracking-wide">Sacred Digital Ministries</span>
            <Sparkles className="w-5 h-5 text-purple-400 ml-4" />
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight relative">
            <span className="relative inline-block">
              Divine
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Craftsmanship
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Where sacred tradition meets digital innovation, creating blessed experiences 
            that elevate the spirit and sanctify technology.
          </p>
        </div>

        {/* Sacred Services Grid */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Featured Sacred Service */}
            <div className="relative">
              <Link
                to={services[activeService].link}
                className="group block relative transform hover:scale-105 transition-all duration-700"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${services[activeService].color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className="relative">
                        <div className={`w-24 h-24 bg-gradient-to-br ${services[activeService].color} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-2xl`}>
                          {React.createElement(services[activeService].icon, { className: "w-12 h-12 text-white" })}
                        </div>
                        <div className="absolute -top-2 -right-2">
                          <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="text-white/60 text-sm font-medium">{services[activeService].stats.projects} Sacred Works</div>
                        <div className="text-yellow-400 font-bold text-xl">{services[activeService].stats.rating}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <h3 className="text-4xl font-black text-white group-hover:text-yellow-300 transition-colors duration-300">
                        {services[activeService].title}
                      </h3>
                      <div className="text-yellow-400 font-bold text-lg">{services[activeService].subtitle}</div>
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
                      
                      <div className="flex items-center text-yellow-400 group-hover:text-white transition-colors">
                        <span className="mr-3 font-semibold">Explore Sacred Work</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Sacred Navigation Grid */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                    activeService === index 
                      ? 'bg-gradient-to-r from-yellow-500/20 to-purple-500/20 border-2 border-yellow-400/50 shadow-xl' 
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-6">
                    <div className={`relative w-16 h-16 ${service.bgPattern} rounded-2xl flex items-center justify-center transition-transform duration-300 ${activeService === index ? 'scale-110' : 'hover:scale-105'}`}>
                      {React.createElement(service.icon, { className: "w-8 h-8 text-white" })}
                      {activeService === index && (
                        <div className="absolute -top-1 -right-1">
                          <Crown className="w-6 h-6 text-yellow-400 animate-pulse" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`text-xl font-bold mb-1 transition-colors ${activeService === index ? 'text-yellow-300' : 'text-white'}`}>
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

              {/* Sacred Collective Stats */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-purple-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="w-10 h-10 text-yellow-400 mr-3" />
                  <Crown className="w-8 h-8 text-purple-400 animate-pulse" />
                </div>
                <div className="text-4xl font-black text-white mb-2">100+</div>
                <div className="text-yellow-300 font-semibold">Sacred Creations</div>
                <div className="text-gray-400 text-sm mt-1">Blessed & Active</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Call-to-Action */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70"></div>
            <button className="relative bg-gradient-to-r from-yellow-500 to-purple-600 text-white px-12 py-6 rounded-3xl font-bold text-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-500 transform hover:scale-105 border border-white/20">
              <div className="flex items-center space-x-4">
                <Crown className="w-6 h-6 animate-pulse" />
                <span>Begin Sacred Digital Journey</span>
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
