
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Code, Zap, Users, Monitor, Smartphone, Database, Globe, Settings, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebAppsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const appFilters = ['All', 'SaaS', 'E-commerce', 'Analytics', 'Enterprise'];

  const webApps = [
    {
      title: "TaskFlow Pro Suite",
      category: "SaaS Platform",
      type: "saas",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      downloads: "15.2k",
      rating: "4.9",
      tier: "Premium",
      description: "Complete project management platform with team collaboration, time tracking, and advanced analytics",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      features: ["Real-time Collaboration", "Advanced Analytics", "API Integration", "Mobile App"],
      pricing: "$29/month",
      users: "500+ companies"
    },
    {
      title: "CommerceHub Platform",
      category: "E-commerce Solution", 
      type: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      downloads: "12.8k",
      rating: "4.8",
      tier: "Enterprise",
      description: "Full-featured e-commerce platform with inventory management, payment processing, and analytics",
      tech: ["Next.js", "Stripe", "MongoDB", "AWS"],
      features: ["Multi-vendor Support", "Payment Gateway", "Inventory Sync", "SEO Optimized"],
      pricing: "$99/month",
      users: "200+ stores"
    },
    {
      title: "DataViz Analytics Pro",
      category: "Business Intelligence",
      type: "analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", 
      downloads: "9.5k",
      rating: "4.9",
      tier: "Professional",
      description: "Advanced data visualization platform with custom dashboards, reports, and AI-powered insights",
      tech: ["Vue.js", "Python", "D3.js", "TensorFlow"],
      features: ["Custom Dashboards", "AI Insights", "Data Export", "Team Sharing"],
      pricing: "$149/month",
      users: "300+ analysts"
    },
    {
      title: "CRM Enterprise Suite",
      category: "Customer Management",
      type: "enterprise", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      downloads: "8.1k",
      rating: "4.7",
      tier: "Enterprise",
      description: "Comprehensive CRM solution with sales pipeline, customer support, and marketing automation",
      tech: ["Angular", "FastAPI", "MySQL", "Docker"],
      features: ["Sales Pipeline", "Support Tickets", "Email Marketing", "Mobile CRM"],
      pricing: "$199/month", 
      users: "150+ teams"
    },
    {
      title: "DevOps Dashboard",
      category: "Developer Tools",
      type: "saas",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      downloads: "6.7k", 
      rating: "4.8",
      tier: "Professional",
      description: "Complete DevOps monitoring and management platform with CI/CD integration and alerts",
      tech: ["React", "Go", "Kubernetes", "Prometheus"],
      features: ["CI/CD Integration", "Real-time Monitoring", "Alert System", "Team Management"],
      pricing: "$79/month",
      users: "400+ developers"
    },
    {
      title: "Learning Management Pro",
      category: "Education Platform",
      type: "saas",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      downloads: "11.3k",
      rating: "4.9", 
      tier: "Premium",
      description: "Advanced LMS with course creation, student tracking, assessments, and certification management",
      tech: ["React", "Node.js", "MongoDB", "WebRTC"],
      features: ["Course Builder", "Live Classes", "Assessments", "Certificates"],
      pricing: "$59/month",
      users: "800+ educators"
    }
  ];

  const filteredApps = activeFilter === 'All' 
    ? webApps
    : activeFilter === 'SaaS'
    ? webApps.filter(app => app.type === 'saas')
    : activeFilter === 'E-commerce'
    ? webApps.filter(app => app.type === 'ecommerce')
    : activeFilter === 'Analytics'
    ? webApps.filter(app => app.type === 'analytics')
    : activeFilter === 'Enterprise'
    ? webApps.filter(app => app.type === 'enterprise')
    : webApps;

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'saas': return Settings;
      case 'ecommerce': return Globe;
      case 'analytics': return BarChart3;
      case 'enterprise': return Database;
      default: return Code;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'saas': return 'from-blue-500 to-cyan-500';
      case 'ecommerce': return 'from-green-500 to-emerald-500';
      case 'analytics': return 'from-purple-500 to-pink-500';
      case 'enterprise': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-6" style={{ borderRadius: '8px' }}>
            <Monitor className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm font-bold text-blue-300 tracking-wide font-mono">WEB APPLICATIONS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            ENTERPRISE <span className="text-blue-400">WEB APPS</span>
          </h2>
          
          <div className="w-24 h-0.5 bg-blue-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-6">
            Professional SaaS platforms, e-commerce solutions, analytics tools, and enterprise applications 
            built with modern technologies and best practices
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {appFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-500 text-white' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
                style={{ borderRadius: '6px' }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* App Stats */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-slate-800/50 border border-slate-700 p-3 text-center" style={{ borderRadius: '6px' }}>
              <Monitor className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white font-mono">25+</div>
              <div className="text-slate-400 text-xs">Web Apps</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-3 text-center" style={{ borderRadius: '6px' }}>
              <Users className="w-5 h-5 text-green-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white font-mono">50k+</div>
              <div className="text-slate-400 text-xs">Active Users</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-3 text-center" style={{ borderRadius: '6px' }}>
              <Star className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white font-mono">4.8★</div>
              <div className="text-slate-400 text-xs">Avg Rating</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-3 text-center" style={{ borderRadius: '6px' }}>
              <Database className="w-5 h-5 text-purple-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white font-mono">99.9%</div>
              <div className="text-slate-400 text-xs">Uptime</div>
            </div>
          </div>
        </div>

        {/* Enhanced Apps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {filteredApps.map((app, index) => {
            const TypeIcon = getTypeIcon(app.type);
            return (
              <article 
                key={index}
                className="bg-slate-800 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 overflow-hidden group"
                style={{ borderRadius: '8px' }}
              >
                {/* Enhanced Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Enhanced Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 text-xs font-bold ${
                      app.tier === 'Premium' 
                        ? 'bg-blue-500 text-white' 
                        : app.tier === 'Enterprise'
                        ? 'bg-purple-500 text-white'
                        : 'bg-green-500 text-white'
                    }`} style={{ borderRadius: '6px' }}>
                      {app.tier}
                    </span>
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                      <TypeIcon className="w-3 h-3" />
                      <span>{app.type.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Stats */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1">
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                      <Download className="w-3 h-3" />
                      <span>{app.downloads}</span>
                    </div>
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{app.rating}</span>
                    </div>
                  </div>

                  {/* Enhanced Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-blue-400 text-xs font-bold mb-2 font-mono">
                          {app.category}
                        </div>
                        <h3 className="text-white font-black text-lg group-hover:text-blue-300 transition-colors font-mono leading-tight">
                          {app.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-sm">{app.pricing}</div>
                        <div className="text-slate-400 text-xs">{app.users}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Content */}
                <div className="p-6">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {app.description}
                  </p>

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
                  
                  {/* Enhanced Key Features */}
                  <div className="mb-6">
                    <div className="text-slate-300 text-xs font-bold mb-2">KEY FEATURES</div>
                    <div className="grid grid-cols-2 gap-1">
                      {app.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-xs text-slate-400">
                          <Zap className="w-3 h-3 text-blue-400 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-3 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-bold flex items-center justify-center space-x-2" style={{ borderRadius: '6px' }}>
                      <Monitor className="w-4 h-4" />
                      <span>TRY DEMO</span>
                    </button>
                    <button className="bg-slate-700 text-white px-4 py-3 hover:bg-slate-600 transition-all duration-300 flex items-center justify-center" style={{ borderRadius: '6px' }}>
                      <Smartphone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border border-slate-600 p-8" style={{ borderRadius: '12px' }}>
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-black text-white mb-4 font-mono">
              ENTERPRISE <span className="text-blue-400">SOLUTIONS</span>
            </h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              From SaaS platforms to enterprise applications, our web apps are built with scalability, 
              security, and performance in mind. Join thousands of companies already using our solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-2xl font-black text-white font-mono">50k+</div>
                <div className="text-slate-400 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-2xl font-black text-white font-mono">99.9%</div>
                <div className="text-slate-400 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-2xl font-black text-white font-mono">24/7</div>
                <div className="text-slate-400 text-sm">Support</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                style={{ borderRadius: '8px' }}
              >
                <Monitor className="w-5 h-5" />
                <span>VIEW ALL APPS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 font-bold hover:bg-blue-400 hover:text-white transition-all duration-300" style={{ borderRadius: '8px' }}>
                ENTERPRISE PRICING
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
