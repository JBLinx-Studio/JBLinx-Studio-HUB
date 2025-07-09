
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
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/5 to-cyan-500/5 blur-3xl rounded-full"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-full px-8 py-4 mb-8">
            <Hexagon className="w-6 h-6 text-emerald-400 mr-3" />
            <span className="text-emerald-400 font-bold text-lg">Our Services</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Create</span>
          </h2>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Professional development services across games, web, mobile, and backend systems. 
            Building the future with cutting-edge technology and innovative solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  isActive 
                    ? `${service.bgColor} ${service.borderColor} border-2 shadow-2xl` 
                    : 'bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/80'
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-gradient-to-r ${service.gradient}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-bold">{service.stats.rating}</span>
                    </div>
                    <div className={`text-sm font-bold ${service.accent}`}>{service.stats.projects}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className={`text-2xl font-black mb-2 transition-colors duration-300 ${
                      isActive ? service.accent : 'text-white group-hover:text-emerald-300'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-semibold mb-3">{service.subtitle}</p>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className={`px-3 py-1 text-xs font-bold rounded-full border transition-all duration-300 ${
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
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-300 font-medium">{service.stats.users}</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={service.link}
                      className={`flex items-center space-x-2 font-bold transition-all duration-300 hover:scale-105 ${
                        isActive ? service.accent : 'text-slate-400 hover:text-emerald-400'
                      }`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-3xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Excellence</span>
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-20 h-20 bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-500/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:border-emerald-400/50 transition-all duration-300">
                    <IconComponent className={`w-10 h-10 ${achievement.color} group-hover:text-emerald-400 transition-colors duration-300`} />
                  </div>
                  
                  <div className="text-3xl font-black text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {achievement.value}
                  </div>
                  
                  <div className="text-slate-400 font-medium">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
            <Zap className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Amazing?</span>
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Join thousands of satisfied clients who trust us to deliver exceptional digital solutions.
            </p>
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-12 py-6 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 transform"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
