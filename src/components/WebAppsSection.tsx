
import React from 'react';
import { ArrowRight, Download, Star, Code, Zap, Users, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebAppsSection = () => {
  const webApps = [
    {
      title: "TaskFlow Pro",
      category: "Productivity Suite",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      downloads: "8.5k",
      rating: "4.9",
      tier: "Premium",
      description: "Advanced task management with team collaboration features",
      tech: ["React", "FastAPI", "PostgreSQL"],
      features: ["Real-time sync", "Team workspaces", "Analytics dashboard"]
    },
    {
      title: "DataViz Analytics",
      category: "Business Intelligence",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      downloads: "4.2k",
      rating: "4.8",
      tier: "Enterprise",
      description: "Powerful data visualization and analytics platform",
      tech: ["Vue.js", "Python", "MongoDB"],
      features: ["Custom charts", "Data pipelines", "Export tools"]
    },
    {
      title: "ShopLink Commerce",
      category: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      downloads: "6.7k",
      rating: "4.9",
      tier: "Premium",
      description: "Complete e-commerce solution with modern checkout",
      tech: ["Next.js", "Node.js", "Stripe"],
      features: ["Payment gateway", "Inventory sync", "Mobile optimized"]
    }
  ];

  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-6" style={{ borderRadius: '8px' }}>
            <Code className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm font-bold text-blue-300 tracking-wide font-mono">WEB APPLICATIONS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            PREMIUM <span className="text-blue-400">WEB APPS</span>
          </h2>
          
          <div className="w-24 h-0.5 bg-blue-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional web applications with subscription-based access and enterprise features
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {webApps.map((app, index) => (
            <article 
              key={index}
              className="bg-slate-800 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 overflow-hidden group"
              style={{ borderRadius: '8px' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={app.image} 
                  alt={app.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Tier Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-bold ${
                    app.tier === 'Premium' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`} style={{ borderRadius: '6px' }}>
                    {app.tier}
                  </span>
                </div>
                
                {/* Stats */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                    <Download className="w-3 h-3" />
                    <span>{app.downloads}</span>
                  </div>
                  <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{app.rating}</span>
                  </div>
                </div>

                {/* Device Icons */}
                <div className="absolute top-4 right-4 flex gap-1">
                  <Monitor className="w-4 h-4 text-white/70" />
                  <Smartphone className="w-4 h-4 text-white/70" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-blue-400 text-sm font-bold mb-2 font-mono">
                    {app.category}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-blue-300 transition-colors font-mono">
                    {app.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {app.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="text-slate-300 text-xs font-bold mb-2">TECH STACK</div>
                  <div className="flex flex-wrap gap-1">
                    {app.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-medium" 
                        style={{ borderRadius: '4px' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Key Features */}
                <div className="mb-6">
                  <div className="text-slate-300 text-xs font-bold mb-2">KEY FEATURES</div>
                  <div className="space-y-1">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-xs text-slate-400">
                        <Zap className="w-3 h-3 text-blue-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action */}
                <button className="w-full bg-blue-500 text-white px-4 py-3 hover:bg-blue-600 transition-all duration-300 font-bold flex items-center justify-center space-x-2" style={{ borderRadius: '6px' }}>
                  <Monitor className="w-4 h-4" />
                  <span>ACCESS APP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-800 border border-slate-700 p-8 text-center" style={{ borderRadius: '12px' }}>
          <h3 className="text-2xl font-black text-white mb-4 font-mono">
            PREMIUM <span className="text-blue-400">ACCESS</span>
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Subscribe to access our complete library of professional web applications with enterprise-grade features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/blog" 
              className="bg-blue-500 text-white px-8 py-4 font-bold hover:bg-blue-600 transition-all duration-300 flex items-center space-x-2"
              style={{ borderRadius: '8px' }}
            >
              <span>VIEW ALL APPS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 font-bold hover:bg-blue-400 hover:text-white transition-all duration-300" style={{ borderRadius: '8px' }}>
              PRICING PLANS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
