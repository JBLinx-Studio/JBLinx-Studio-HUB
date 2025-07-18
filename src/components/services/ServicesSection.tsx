
import React, { useState } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Zap, Star, Users, Trophy, Activity, Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Gamepad2,
      title: "Gaming Universe",
      subtitle: "Immersive Digital Experiences",
      description: "Unity-powered survival, horror, and strategy games with cutting-edge graphics and gameplay that transport players to extraordinary realms.",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      borderColor: "border-purple-500/40",
      bgColor: "bg-purple-500/10",
      link: "/game-development",
      stats: { projects: "15+", rating: 4.9, users: "50k+" },
      features: ["Unity Engine", "Cross-Platform", "VR Ready", "Multiplayer"],
      accent: "text-purple-400"
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Modern Digital Solutions", 
      description: "React, Next.js, and cutting-edge web technologies creating responsive, scalable applications that redefine user interaction.",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      borderColor: "border-blue-500/40",
      bgColor: "bg-blue-500/10",
      link: "/web-applications",
      stats: { projects: "30+", rating: 5.0, users: "75k+" },
      features: ["React/Next.js", "TypeScript", "Tailwind", "Performance"],
      accent: "text-blue-400"
    },
    {
      icon: Database,
      title: "Backend Systems",
      subtitle: "Scalable Infrastructure",
      description: "FastAPI, MySQL, and enterprise-grade architectures powering robust digital solutions with high availability.",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      borderColor: "border-green-500/40",
      bgColor: "bg-green-500/10",
      link: "/web-applications",
      stats: { projects: "25+", rating: 4.8, users: "40k+" },
      features: ["FastAPI", "MySQL", "Redis", "Cloud Native"],
      accent: "text-green-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      subtitle: "Cross-Platform Excellence",
      description: "Flutter and React Native applications delivering seamless mobile experiences across iOS and Android platforms.",
      gradient: "from-orange-500 via-red-500 to-orange-600",
      borderColor: "border-orange-500/40",
      bgColor: "bg-orange-500/10",
      link: "/web-applications", 
      stats: { projects: "12+", rating: 4.9, users: "30k+" },
      features: ["Flutter", "React Native", "iOS/Android", "App Store"],
      accent: "text-orange-400"
    }
  ];

  const achievements = [
    { icon: Trophy, value: "98.7%", label: "Client Satisfaction", color: "text-yellow-400" },
    { icon: Star, value: "4.9/5", label: "Average Rating", color: "text-purple-400" },
    { icon: Users, value: "150k+", label: "Active Users", color: "text-blue-400" },
    { icon: Activity, value: "99.9%", label: "Uptime SLA", color: "text-green-400" }
  ];

  return (
    <section className="py-6 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Services Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-slate-800/95 border border-emerald-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1 text-emerald-400" />
            <span className="text-emerald-400 font-black text-xs font-mono tracking-widest">OUR SERVICES</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            WHAT WE <span className="text-emerald-400">CREATE</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Professional development services across games, web, mobile, and backend systems
          </p>

          {/* Services Stats */}
          <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
            {[
              { icon: Gamepad2, value: "15+", label: "Games", color: "text-purple-400" },
              { icon: Code, value: "30+", label: "Web Apps", color: "text-blue-400" },
              { icon: Database, value: "25+", label: "Backend", color: "text-green-400" },
              { icon: Smartphone, value: "12+", label: "Mobile", color: "text-orange-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/80 border border-slate-700 p-1.5 text-center backdrop-blur-sm">
                  <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Grid - Compact */}
        <div className="grid lg:grid-cols-2 gap-3 mb-5">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            
            return (
              <div
                key={index}
                className={`bg-slate-800/95 border transition-all duration-300 cursor-pointer p-3 ${
                  isActive 
                    ? `${service.borderColor} shadow-lg` 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Service Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-black font-mono ${isActive ? service.accent : 'text-white'}`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-bold text-xs">{service.stats.rating}</span>
                    </div>
                    <div className={`text-xs font-bold ${service.accent}`}>{service.stats.projects}</div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="space-y-2">
                  <p className="text-slate-300 text-xs leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className={`px-2 py-0.5 text-xs font-bold border transition-all duration-300 ${
                          isActive 
                            ? `${service.borderColor} ${service.bgColor} ${service.accent}` 
                            : 'border-slate-600 bg-slate-700/50 text-slate-300'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-xs">
                      <Users className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-300 font-medium">{service.stats.users}</span>
                    </div>
                    
                    <Link 
                      to={service.link}
                      className={`flex items-center space-x-1 text-xs font-bold transition-all duration-300 hover:scale-105 ${
                        isActive ? service.accent : 'text-slate-400 hover:text-emerald-400'
                      }`}
                    >
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements - Compact */}
        <div className="bg-slate-800/80 border border-slate-600/50 p-3 mb-4">
          <h3 className="text-sm font-bold text-white text-center mb-3 font-mono">
            PROVEN <span className="text-emerald-400">EXCELLENCE</span>
          </h3>
          
          <div className="grid grid-cols-4 gap-2">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-12 h-12 bg-slate-700 border border-slate-500/50 flex items-center justify-center mx-auto mb-1 group-hover:scale-110 group-hover:border-emerald-400/50 transition-all duration-300">
                    <IconComponent className={`w-4 h-4 ${achievement.color} group-hover:text-emerald-400 transition-colors duration-300`} />
                  </div>
                  
                  <div className="text-sm font-black text-white mb-0.5 group-hover:text-emerald-300 transition-colors duration-300 font-mono">
                    {achievement.value}
                  </div>
                  
                  <div className="text-slate-400 font-medium text-xs">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Zap className="w-3 h-3" />
            <span>EXPLORE ALL SERVICES</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
