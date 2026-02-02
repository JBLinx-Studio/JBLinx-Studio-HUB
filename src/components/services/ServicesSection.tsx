
import React, { useState } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Zap, Star, Users, Trophy, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../ui/SectionWrapper';
import StatGrid from '../ui/StatGrid';
import CTABanner from '../ui/CTABanner';

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
      stats: {
        projects: "15+",
        rating: 4.9,
        users: "50k+"
      },
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
      stats: {
        projects: "30+",
        rating: 5.0,
        users: "75k+"
      },
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
      stats: {
        projects: "25+",
        rating: 4.8,
        users: "40k+"
      },
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
      stats: {
        projects: "12+",
        rating: 4.9,
        users: "30k+"
      },
      features: ["Flutter", "React Native", "iOS/Android", "App Store"],
      accent: "text-orange-400"
    }
  ];
  
  const statsData = [
    { icon: Gamepad2, value: "15+", label: "Games", color: "purple" as const },
    { icon: Code, value: "30+", label: "Web Apps", color: "blue" as const },
    { icon: Database, value: "25+", label: "Backend", color: "green" as const },
    { icon: Smartphone, value: "12+", label: "Mobile", color: "orange" as const }
  ];

  const achievements = [
    { icon: Trophy, value: "98.7%", label: "Client Satisfaction", color: "yellow" as const },
    { icon: Star, value: "4.9/5", label: "Average Rating", color: "purple" as const },
    { icon: Users, value: "150k+", label: "Active Users", color: "blue" as const },
    { icon: Activity, value: "99.9%", label: "Uptime SLA", color: "green" as const }
  ];

  return (
    <SectionWrapper
      id="services"
      badge={{ icon: Trophy, label: "OUR SERVICES", color: "emerald" }}
      title={{ main: "WHAT WE", accent: "CREATE", accentColor: "emerald" }}
      subtitle="Professional development services across games, web, mobile, and backend systems"
    >
      {/* Stats Grid */}
      <StatGrid stats={statsData} columns={4} compact className="max-w-xl mx-auto mb-8" />

      {/* Services Grid */}
      <div className="grid lg:grid-cols-2 gap-4 mb-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          const isActive = activeService === index;
          return (
            <div 
              key={index} 
              className={`bg-zinc-800/90 border transition-all duration-300 cursor-pointer p-4 backdrop-blur-sm ${
                isActive ? `${service.borderColor} shadow-lg` : 'border-zinc-700 hover:border-zinc-600'
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-card-title ${isActive ? service.accent : 'text-white'}`}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-400">{service.subtitle}</p>
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
              <div className="space-y-3">
                <p className="text-card-body">{service.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex} 
                      className={`px-2 py-1 text-xs font-bold border transition-all duration-300 ${
                        isActive 
                          ? `${service.borderColor} ${service.bgColor} ${service.accent}` 
                          : 'border-zinc-600 bg-zinc-700/50 text-zinc-300'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Stats & CTA */}
                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center space-x-2 text-xs">
                    <Users className="w-3 h-3 text-zinc-400" />
                    <span className="text-zinc-300 font-medium">{service.stats.users}</span>
                  </div>
                  
                  <Link 
                    to={service.link} 
                    className={`flex items-center space-x-1 text-xs font-bold transition-all duration-300 hover:scale-105 ${
                      isActive ? service.accent : 'text-zinc-400 hover:text-emerald-400'
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

      {/* Achievements */}
      <div className="bg-zinc-800/80 border border-zinc-600/50 p-5 mb-8 backdrop-blur-sm">
        <h3 className="text-base font-bold text-white text-center mb-4 font-mono">
          PROVEN <span className="text-emerald-400">EXCELLENCE</span>
        </h3>
        <StatGrid stats={achievements} columns={4} />
      </div>

      {/* CTA */}
      <CTABanner
        title={{ prefix: "EXPLORE ALL", accent: "SERVICES" }}
        description="Discover how our professional development services can transform your digital vision into reality."
        primaryAction={{ label: "VIEW SERVICES", href: "/blog", icon: Zap }}
        accentColor="emerald"
      />
    </SectionWrapper>
  );
};

export default ServicesSection;
