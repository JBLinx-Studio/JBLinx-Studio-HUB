
import React, { useState } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Sparkles, Zap, Hexagon, Star, Users, Trophy, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalLayout from './layout/ProfessionalLayout';
import ProfessionalHeader from './common/ProfessionalHeader';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Gamepad2,
      title: "Gaming Universe",
      subtitle: "Immersive Digital Experiences",
      description: "Unity-powered survival, horror, and strategy games that transport players to extraordinary realms with cutting-edge graphics and gameplay.",
      color: "from-purple-500 to-pink-500",
      link: "/game-development",
      stats: { projects: "15+", rating: "4.9★", users: "50k+" },
      tech: ["Unity", "C#", "Blender"],
      hexColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Modern Digital Solutions", 
      description: "React, Next.js, and cutting-edge web technologies creating responsive, scalable applications that redefine user interaction and experience.",
      color: "from-blue-500 to-cyan-500",
      link: "/web-applications",
      stats: { projects: "30+", rating: "5.0★", users: "75k+" },
      tech: ["React", "Next.js", "TypeScript"],
      hexColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Database,
      title: "Backend Systems",
      subtitle: "Scalable Infrastructure",
      description: "FastAPI, MySQL, and enterprise-grade architectures powering robust digital solutions with high availability and performance.",
      color: "from-green-500 to-emerald-500", 
      link: "/web-applications",
      stats: { projects: "25+", rating: "4.8★", users: "40k+" },
      tech: ["FastAPI", "MySQL", "Redis"],
      hexColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      subtitle: "Cross-Platform Excellence",
      description: "Flutter and React Native applications delivering seamless mobile experiences across iOS and Android platforms.",
      color: "from-orange-500 to-red-500",
      link: "/web-applications", 
      stats: { projects: "12+", rating: "4.9★", users: "30k+" },
      tech: ["Flutter", "React Native", "Firebase"],
      hexColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30"
    }
  ];

  const achievements = [
    { icon: Trophy, value: "98.7%", label: "Client Satisfaction" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Users, value: "150k+", label: "Active Users" },
    { icon: Activity, value: "99.9%", label: "Uptime SLA" }
  ];

  return (
    <ProfessionalLayout background="gradient" padding="xl">
      {/* Professional Header */}
      <ProfessionalHeader
        badge="Our Services"
        title="What We Create"
        description="Professional development services across games, web, mobile, and backend systems. Building the future with cutting-edge technology and innovative solutions."
        className="mb-16"
      />

      {/* Enhanced Service Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Link
              key={index}
              to={service.link}
              className={`group relative bg-white/5 border ${service.borderColor} backdrop-blur-sm rounded-xl p-6 hover:border-opacity-70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`w-14 h-14 ${service.hexColor} border ${service.borderColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              {/* Service Stats */}
              <div className="flex items-center justify-between text-xs mb-4">
                <span className="text-emerald-400 font-medium">{service.stats.projects}</span>
                <span className="text-yellow-400 font-medium">{service.stats.rating}</span>
                <span className="text-cyan-400 font-medium">{service.stats.users}</span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 mb-4">
                {service.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-md border border-slate-700/50">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-end">
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </div>

              {/* Hover Effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl pointer-events-none"></div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Professional Achievements Section */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Proven Excellence
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-emerald-400" />
                </div>
                
                <div className="text-2xl font-bold text-white mb-1">
                  {achievement.value}
                </div>
                
                <div className="text-slate-400 text-sm">
                  {achievement.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Join thousands of satisfied clients who trust us to deliver exceptional digital solutions.
          </p>
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-black px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </ProfessionalLayout>
  );
};

export default Services;
