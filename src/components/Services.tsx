
import React, { useState } from 'react';
import { ArrowRight, Crown, Code, Database, Smartphone, Gamepad2, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Premium Web Apps",
      subtitle: "Professional Applications",
      description: "Access our suite of premium web applications with advanced features and analytics",
      color: "from-cyan-500 to-blue-500",
      link: "#products",
      stats: { apps: "4+", users: "5k+" },
      tech: ["React", "FastAPI", "MySQL"],
      hexColor: "bg-cyan-500/20"
    },
    {
      icon: Crown,
      title: "Premium Access",
      subtitle: "Subscription Plans", 
      description: "Flexible subscription plans for individuals, teams, and enterprises",
      color: "from-yellow-500 to-orange-500",
      link: "#premium",
      stats: { plans: "3", from: "$19/mo" },
      tech: ["All Apps", "Priority", "Support"],
      hexColor: "bg-yellow-500/20"
    },
    {
      icon: Gamepad2,
      title: "Game Portfolio",
      subtitle: "Published Games",
      description: "Immersive games we've developed including survival, horror, and strategy titles",
      color: "from-purple-500 to-pink-500",
      link: "#games",
      stats: { games: "3+", downloads: "25k+" },
      tech: ["Unity", "C#", "Cross-Platform"],
      hexColor: "bg-purple-500/20"
    },
    {
      icon: Code,
      title: "Developer Resources",
      subtitle: "Open Source & APIs",
      description: "Documentation, GitHub repositories, and developer tools for integration",
      color: "from-green-500 to-emerald-500",
      link: "#developers",
      stats: { repos: "15+", stars: "200+" },
      tech: ["GitHub", "Docs", "APIs"],
      hexColor: "bg-green-500/20"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-6" style={{ borderRadius: '8px' }}>
            <Zap className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-white/90 font-medium font-mono">WHAT WE OFFER</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            Our <span className="text-cyan-400">Products</span> & <span className="text-purple-400">Services</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Premium web applications, games, and developer resources built by JBLinx Studio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-slate-800 border border-slate-700 p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                style={{ borderRadius: '12px' }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-12 h-12 ${service.hexColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`} style={{ borderRadius: '8px' }}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors font-mono">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-1 text-sm font-medium">
                  {service.subtitle}
                </p>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex space-x-4 text-cyan-400">
                    {Object.entries(service.stats).map(([key, value]) => (
                      <span key={key} className="font-medium">
                        {value} {key}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tech.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-slate-700 text-slate-300 px-2 py-1 text-xs" 
                      style={{ borderRadius: '4px' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-end">
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-slate-800 border border-slate-700 p-8 max-w-2xl mx-auto" style={{ borderRadius: '12px' }}>
            <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-white mb-4 font-mono">
              START YOUR PREMIUM JOURNEY
            </h3>
            <p className="text-slate-300 mb-6">
              Get access to all our premium web applications, games, and developer resources. 
              Choose the plan that fits your needs.
            </p>
            <Link 
              to="#premium" 
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 font-bold transition-all duration-300 hover:shadow-lg"
              style={{ borderRadius: '8px' }}
            >
              <Crown className="w-5 h-5 mr-2" />
              <span>VIEW PREMIUM PLANS</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
