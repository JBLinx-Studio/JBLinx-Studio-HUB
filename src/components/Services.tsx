
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
      description: "Unity-powered survival, horror, and strategy games that transport players to extraordinary realms",
      color: "from-purple-500 to-pink-500",
      link: "/game-development",
      stats: { projects: "15+", rating: "4.9★" },
      tech: ["Unity", "C#", "Blender"],
      hexColor: "bg-purple-500/20"
    },
    {
      icon: Code,
      title: "Web Development",
      subtitle: "Modern Digital Experiences", 
      description: "React, Next.js, and cutting-edge web solutions that redefine user interaction",
      color: "from-blue-500 to-cyan-500",
      link: "/web-applications",
      stats: { projects: "30+", rating: "5.0★" },
      tech: ["React", "Next.js", "TypeScript"],
      hexColor: "bg-blue-500/20"
    },
    {
      icon: Database,
      title: "Backend Systems",
      subtitle: "Scalable Infrastructure",
      description: "FastAPI, MySQL, and enterprise-grade architectures that power digital solutions",
      color: "from-green-500 to-emerald-500", 
      link: "/web-applications",
      stats: { projects: "25+", rating: "4.8★" },
      tech: ["FastAPI", "MySQL", "Redis"],
      hexColor: "bg-green-500/20"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      subtitle: "Cross-Platform Excellence",
      description: "Flutter applications that deliver seamless mobile experiences",
      color: "from-orange-500 to-red-500",
      link: "/web-applications", 
      stats: { projects: "12+", rating: "4.9★" },
      tech: ["Flutter", "Dart", "Firebase"],
      hexColor: "bg-orange-500/20"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative">
      <div className="container mx-auto px-6">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Hexagon className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-white/90 font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What We <span className="text-cyan-400">Create</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional development services across games, web, mobile, and backend systems.
          </p>
        </div>

        {/* Compact Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-12 h-12 ${service.hexColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cyan-400 font-medium">{service.stats.projects}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
