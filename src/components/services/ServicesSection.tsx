import React, { useState } from "react";
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Zap, Star, Users, Trophy, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      icon: Gamepad2,
      title: "Gaming Universe", 
      subtitle: "Immersive Digital Experiences",
      description: "Unity-powered survival, horror, and strategy games with cutting-edge graphics and gameplay that transport players to extraordinary realms.",
      link: "/game-development",
      stats: { projects: "15+", rating: 4.9, users: "50k+" },
      features: ["Unity Engine", "Cross-Platform", "VR Ready", "Multiplayer"],
      color: "purple"
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Modern Digital Solutions",
      description: "React, Next.js, and cutting-edge web technologies creating responsive, scalable applications that redefine user interaction.",
      link: "/web-applications",
      stats: { projects: "30+", rating: 5.0, users: "75k+" },
      features: ["React/Next.js", "TypeScript", "Tailwind", "Performance"],
      color: "blue"
    },
    {
      icon: Database,
      title: "Backend Systems",
      subtitle: "Scalable Infrastructure",
      description: "FastAPI, MySQL, and enterprise-grade architectures powering robust digital solutions with high availability.",
      link: "/web-applications",
      stats: { projects: "25+", rating: 4.8, users: "40k+" },
      features: ["FastAPI", "MySQL", "Redis", "Cloud Native"],
      color: "green"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      subtitle: "Cross-Platform Excellence",
      description: "Flutter and React Native applications delivering seamless mobile experiences across iOS and Android platforms.",
      link: "/web-applications",
      stats: { projects: "12+", rating: 4.9, users: "30k+" },
      features: ["Flutter", "React Native", "iOS/Android", "App Store"],
      color: "orange"
    }
  ];
  
  const colorMap: Record<string, { text: string; border: string; bg: string; shadow: string }> = {
    purple: { text: 'text-purple-400', border: 'border-purple-500/50', bg: 'bg-purple-500/15', shadow: 'shadow-purple-500/10' },
    blue: { text: 'text-blue-400', border: 'border-blue-500/50', bg: 'bg-blue-500/15', shadow: 'shadow-blue-500/10' },
    green: { text: 'text-green-400', border: 'border-green-500/50', bg: 'bg-green-500/15', shadow: 'shadow-green-500/10' },
    orange: { text: 'text-orange-400', border: 'border-orange-500/50', bg: 'bg-orange-500/15', shadow: 'shadow-orange-500/10' }
  };

  const achievements = [
    { icon: Trophy, value: "98.7%", label: "Client Satisfaction", color: "text-yellow-400" },
    { icon: Star, value: "4.9/5", label: "Average Rating", color: "text-purple-400" },
    { icon: Users, value: "150k+", label: "Active Users", color: "text-blue-400" },
    { icon: Activity, value: "99.9%", label: "Uptime SLA", color: "text-green-400" }
  ];

  return (
    <section id="services" className="relative section-padding overflow-hidden">
      <div className="section-divider-line" />
      <div className="ambient-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="section-header">
            <div className="badge-emerald">
              <Trophy className="w-4 h-4" />
              <span>OUR SERVICES</span>
            </div>
            
            <h2 className="text-section-title text-foreground mb-3">
              WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">CREATE</span>
            </h2>
            
            <div className="section-divider bg-emerald-400" />
            
            <p className="section-subtitle">
              Professional development services across games, web, mobile, and backend systems
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isActive = activeService === index;
            const colors = colorMap[service.color];
            
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className={`panel card-padding cursor-pointer transition-all duration-300 h-full ${
                    isActive ? `${colors.border} shadow-lg ${colors.shadow}` : 'hover:border-border/80'
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${colors.bg} ${colors.border} border rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div>
                        <h3 className={`text-card-title ${isActive ? colors.text : 'text-foreground'}`}>
                          {service.title}
                        </h3>
                        <p className="text-small">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-card-title text-foreground">{service.stats.rating}</span>
                      </div>
                      <div className={`text-label ${colors.text}`}>{service.stats.projects}</div>
                    </div>
                  </div>

                  <p className="text-body mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className={`tag ${isActive ? `${colors.bg} ${colors.border} ${colors.text}` : 'tag-default'}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-2 text-small">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{service.stats.users}</span>
                    </div>
                    
                    <Link 
                      to={service.link} 
                      className={`flex items-center gap-2 text-label transition-all hover:gap-3 ${
                        isActive ? colors.text : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      <span>EXPLORE</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Achievements */}
        <AnimatedSection delay={0.3}>
          <div className="panel-elevated card-padding mb-12">
            <h3 className="text-card-title text-foreground text-center mb-6">
              PROVEN <span className="text-emerald-400">EXCELLENCE</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="stat-card">
                    <IconComponent className={`w-6 h-6 mx-auto mb-2 ${achievement.color}`} />
                    <div className={`stat-value ${achievement.color}`}>{achievement.value}</div>
                    <div className="stat-label">{achievement.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center" delay={0.4}>
          <p className="text-body text-base max-w-xl mx-auto mb-5">
            Discover how our professional development services can transform your digital vision into reality.
          </p>
          <Link to="/blog" className="btn-primary">
            <Zap className="w-4 h-4" />
            <span>VIEW SERVICES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
