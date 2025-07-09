
import React, { useState, useEffect } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Zap, Star, Users, Trophy, Activity, Hexagon, Sparkles, Timer, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [statsAnimation, setStatsAnimation] = useState(false);

  // Auto-rotate active service
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Stats animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setStatsAnimation(true), 1000);
    return () => clearTimeout(timer);
  }, []);

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
      stats: { projects: "15+", rating: 4.9, users: "50k+", delivery: "8 weeks" },
      features: ["Unity Engine", "Cross-Platform", "VR Ready", "Multiplayer", "Real-time Physics", "Advanced AI"],
      accent: "text-purple-400",
      description2: "From concept to deployment, we create games that captivate and engage audiences worldwide."
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
      stats: { projects: "30+", rating: 5.0, users: "75k+", delivery: "4 weeks" },
      features: ["React/Next.js", "TypeScript", "Tailwind", "Performance", "SEO Optimized", "PWA Ready"],
      accent: "text-blue-400",
      description2: "Building the future of web with performance, accessibility, and user experience at the forefront."
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
      stats: { projects: "25+", rating: 4.8, users: "40k+", delivery: "6 weeks" },
      features: ["FastAPI", "MySQL", "Redis", "Cloud Native", "Microservices", "Auto-scaling"],
      accent: "text-green-400",
      description2: "Robust, secure, and scalable backend solutions that grow with your business needs."
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
      stats: { projects: "12+", rating: 4.9, users: "30k+", delivery: "10 weeks" },
      features: ["Flutter", "React Native", "iOS/Android", "App Store", "Push Notifications", "Offline Support"],
      accent: "text-orange-400",
      description2: "Native-quality mobile apps that provide exceptional user experiences on every device."
    }
  ];

  const achievements = [
    { icon: Trophy, value: "98.7%", label: "Client Satisfaction", color: "text-yellow-400", description: "Happy clients worldwide" },
    { icon: Star, value: "4.9/5", label: "Average Rating", color: "text-purple-400", description: "Consistent excellence" },
    { icon: Users, value: "150k+", label: "Active Users", color: "text-blue-400", description: "Daily active users" },
    { icon: Activity, value: "99.9%", label: "Uptime SLA", color: "text-green-400", description: "Reliable infrastructure" }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Services Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/95 border border-emerald-500/50 px-4 py-2 mb-3 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300 group">
            <Trophy className="w-4 h-4 mr-2 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-emerald-400 font-black text-sm font-mono tracking-widest">OUR SERVICES</span>
            <Sparkles className="w-4 h-4 ml-2 text-emerald-400 group-hover:rotate-180 transition-transform duration-500" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            WHAT WE <span className="text-emerald-400">CREATE</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4 animate-pulse"></div>
          
          <p className="text-base text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Professional development services across games, web, mobile, and backend systems with cutting-edge technology
          </p>

          {/* Enhanced Services Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto mb-6">
            {[
              { icon: Gamepad2, value: "15+", label: "Games", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-400/30" },
              { icon: Code, value: "30+", label: "Web Apps", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-400/30" },
              { icon: Database, value: "25+", label: "Backend", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-400/30" },
              { icon: Smartphone, value: "12+", label: "Mobile", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-400/30" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className={`${stat.bg} border ${stat.border} p-3 text-center backdrop-blur-sm hover:scale-110 transition-all duration-300 cursor-pointer group`}>
                  <IconComponent className={`w-4 h-4 ${stat.color} mx-auto mb-1 group-hover:scale-125 transition-transform`} />
                  <div className={`text-sm font-black ${stat.color} font-mono transition-all duration-300 ${statsAnimation ? 'animate-pulse' : ''}`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid lg:grid-cols-2 gap-4 mb-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            
            return (
              <div
                key={index}
                className={`bg-slate-800/95 border transition-all duration-500 cursor-pointer p-6 relative overflow-hidden ${
                  isActive 
                    ? `${service.borderColor} shadow-2xl scale-105` 
                    : 'border-slate-700 hover:border-slate-600 hover:scale-102'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 transition-opacity duration-500 ${isActive ? 'opacity-10' : ''}`}></div>
                
                {/* Service Header */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} flex items-center justify-center relative overflow-hidden group`}>
                      <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      {isActive && (
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      )}
                    </div>
                    <div>
                      <h3 className={`text-lg font-black font-mono transition-colors duration-300 ${isActive ? service.accent : 'text-white'}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-400">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-bold text-sm">{service.stats.rating}</span>
                    </div>
                    <div className={`text-xs font-bold ${service.accent}`}>{service.stats.projects}</div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="space-y-4 relative z-10">
                  <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
                  
                  {isActive && (
                    <p className="text-slate-400 text-xs leading-relaxed animate-fade-in">
                      {service.description2}
                    </p>
                  )}
                  
                  {/* Enhanced Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center space-x-2 px-2 py-1 border transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? `${service.borderColor} ${service.bgColor} ${service.accent}` 
                            : 'border-slate-600 bg-slate-700/50 text-slate-300 hover:border-emerald-400/30'
                        }`}
                        onMouseEnter={() => setHoveredFeature(featureIndex)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                        <CheckCircle className="w-3 h-3 flex-shrink-0" />
                        <span className="text-xs font-bold">{feature}</span>
                        {hoveredFeature === featureIndex && (
                          <Sparkles className="w-3 h-3 animate-spin" />
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-slate-400" />
                        <span className="text-slate-300 font-medium">{service.stats.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Timer className="w-3 h-3 text-slate-400" />
                        <span className="text-slate-300 font-medium">{service.stats.delivery}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={service.link}
                      className={`flex items-center space-x-1 text-xs font-bold transition-all duration-300 hover:scale-105 group ${
                        isActive ? service.accent : 'text-slate-400 hover:text-emerald-400'
                      }`}
                    >
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Achievements */}
        <div className="bg-slate-800/80 border border-slate-600/50 p-6 mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5"></div>
          
          <h3 className="text-lg font-bold text-white text-center mb-6 font-mono relative z-10">
            PROVEN <span className="text-emerald-400">EXCELLENCE</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 bg-slate-700 border border-slate-500/50 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:border-emerald-400/50 transition-all duration-500 relative overflow-hidden">
                    <IconComponent className={`w-6 h-6 ${achievement.color} group-hover:text-emerald-400 transition-colors duration-300 group-hover:scale-110`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  
                  <div className="text-lg font-black text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300 font-mono">
                    {achievement.value}
                  </div>
                  
                  <div className="text-slate-400 font-medium text-sm mb-1">
                    {achievement.label}
                  </div>
                  
                  <div className="text-slate-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {achievement.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 text-black px-8 py-4 font-black transition-all duration-500 space-x-3 shadow-lg text-base hover:scale-110 hover:shadow-2xl group relative overflow-hidden"
            style={{
              backgroundSize: '200% 100%',
              animation: 'gradient-x 3s ease infinite'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Zap className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
            <span className="relative z-10">EXPLORE ALL SERVICES</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
