
import React, { useState } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Sparkles, Zap, Hexagon, Heart, Building2, Brain, Monitor, Globe, ExternalLink, Trophy, Users, Star, CheckCircle, Shield, Rocket, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Gamepad2,
      title: "GAME DEVELOPMENT",
      subtitle: "STRATEGIC GAMING ECOSYSTEM",
      description: "Strategic board games, chess tournaments, and multiplayer experiences with comprehensive tutorials and competitive play",
      color: "from-purple-500 to-pink-500",
      link: "/game-development",
      stats: { projects: "15+", rating: "4.9★", users: "25k+" },
      tech: ["Unity", "Multiplayer", "Tournaments"],
      hexColor: "bg-purple-500/20",
      features: ["♟️ Chess Academy", "🎮 Strategy Games", "🏆 Tournaments", "📚 Tutorials"]
    },
    {
      icon: Heart,
      title: "HEALTH & FITNESS",
      subtitle: "SMART WELLNESS TECHNOLOGY", 
      description: "Advanced health tracking, nutrition analysis, and fitness planning with AI-powered insights - Superior FatSecret alternative",
      color: "from-green-500 to-emerald-500",
      link: "/health",
      stats: { projects: "25+", rating: "4.9★", users: "60k+" },
      tech: ["AI Analytics", "Nutrition", "Fitness"],
      hexColor: "bg-green-500/20",
      features: ["💚 Health Tracking", "🍎 Nutrition AI", "💪 Fitness Plans", "📊 Analytics"]
    },
    {
      icon: Code,
      title: "DEVELOPMENT TOOLS",
      subtitle: "AI-POWERED CODE ECOSYSTEM",
      description: "Advanced IDE platforms, AI coding assistants, and fullstack development tools - Superior CodePen & Lovable alternatives",
      color: "from-cyan-500 to-blue-500", 
      link: "/tools",
      stats: { projects: "30+", rating: "4.8★", users: "50k+" },
      tech: ["AI Coding", "IDE", "Fullstack"],
      hexColor: "bg-cyan-500/20",
      features: ["⚡ CodeFusion IDE", "🤖 AI Assistant", "🛠️ Dev Tools", "🚀 Deployment"]
    },
    {
      icon: Building2,
      title: "REAL ESTATE TECH",
      subtitle: "COMPLETE PROPERTY ECOSYSTEM",
      description: "All-in-one real estate platform for property owners, agents, lawyers, and management companies with AI analytics",
      color: "from-orange-500 to-red-500",
      link: "/realestate", 
      stats: { projects: "12+", rating: "4.8★", users: "15k+" },
      tech: ["PropTech", "CRM", "Legal"],
      hexColor: "bg-orange-500/20",
      features: ["🏢 Property Management", "⚖️ Legal Tools", "📊 Market Analytics", "🔐 Secure Transactions"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800/95 to-slate-700/95 border-2 border-cyan-400/60 rounded-xl px-8 py-3 mb-8 backdrop-blur-sm hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/25">
            <Hexagon className="w-6 h-6 text-cyan-400 mr-3 animate-spin" style={{animationDuration: '6s'}} />
            <span className="text-cyan-400 font-black text-lg font-mono tracking-widest">PROFESSIONAL SERVICES</span>
            <div className="w-3 h-3 bg-green-400 rounded-full ml-4 animate-pulse shadow-lg shadow-green-400/50"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 font-mono">
            DEVELOPMENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">ECOSYSTEM</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Professional development services across gaming, health tech, development tools, and real estate technology. 
            <span className="text-cyan-400 font-bold"> 5 flagship applications </span> serving 
            <span className="text-green-400 font-bold"> 50k+ active users </span> worldwide.
          </p>
        </div>

        {/* Enhanced Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-slate-800/60 border-2 border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm hover:bg-slate-700/80 overflow-hidden"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color}/5 opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${service.hexColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors font-mono">
                    {service.title}
                  </h3>
                  
                  <h4 className="text-sm font-bold text-slate-400 mb-4 tracking-wider">
                    {service.subtitle}
                  </h4>
                  
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6 text-xs">
                    <div className="text-center">
                      <div className="text-cyan-400 font-black">{service.stats.projects}</div>
                      <div className="text-slate-500">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 font-black">{service.stats.rating}</div>
                      <div className="text-slate-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-black">{service.stats.users}</div>
                      <div className="text-slate-500">Users</div>
                    </div>
                  </div>
                  
                  {/* Action Area */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {service.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs font-bold rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-slate-800/60 border-2 border-slate-700/50 rounded-2xl p-8 mb-16 backdrop-blur-sm">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Trophy, value: "5", label: "FLAGSHIP APPLICATIONS", color: "text-cyan-400" },
              { icon: Users, value: "50k+", label: "ACTIVE USERS", color: "text-green-400" },
              { icon: Star, value: "892+", label: "GITHUB STARS", color: "text-orange-400" },
              { icon: Shield, value: "99.9%", label: "UPTIME GUARANTEE", color: "text-purple-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group">
                  <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-125 transition-transform duration-300`} />
                  <div className={`text-3xl font-black ${stat.color} font-mono mb-2`}>{stat.value}</div>
                  <div className="text-slate-400 text-sm font-bold tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            <Link 
              to="/blog" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 font-black text-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 flex items-center space-x-3 hover:scale-105 transform rounded-xl"
            >
              <Rocket className="w-5 h-5" />
              <span>EXPLORE ALL SERVICES</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a 
              href="https://github.com/orgs/JBLinx-Studio/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 px-10 py-4 font-black text-lg transition-all duration-300 flex items-center space-x-3 hover:scale-105 transform rounded-xl"
            >
              <Target className="w-5 h-5" />
              <span>VIEW SOURCE CODE</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-orange-500/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Services;
