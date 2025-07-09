
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Code, Zap, Users, Monitor, Smartphone, Database, Globe, Settings, BarChart3, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebAppsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const appFilters = ['All', 'SaaS', 'E-commerce', 'Analytics', 'Enterprise'];

  const webApps = [
    {
      title: "TaskFlow Pro Suite",
      category: "SaaS Platform",
      type: "saas",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
      downloads: "15.2k",
      rating: "4.9",
      tier: "Premium",
      description: "Complete project management platform with team collaboration",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      features: ["Real-time Collaboration", "Advanced Analytics", "API Integration", "Mobile App"],
      pricing: "$29/month",
      users: "500+ companies"
    },
    {
      title: "CommerceHub Platform",
      category: "E-commerce Solution", 
      type: "ecommerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
      downloads: "12.8k",
      rating: "4.8",
      tier: "Enterprise",
      description: "Full-featured e-commerce platform with inventory management",
      tech: ["Next.js", "Stripe", "MongoDB", "AWS"],
      features: ["Multi-vendor Support", "Payment Gateway", "Inventory Sync", "SEO Optimized"],
      pricing: "$99/month",
      users: "200+ stores"
    },
    {
      title: "DataViz Analytics Pro",
      category: "Business Intelligence",
      type: "analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop", 
      downloads: "9.5k",
      rating: "4.9",
      tier: "Professional",
      description: "Advanced data visualization with custom dashboards",
      tech: ["Vue.js", "Python", "D3.js", "TensorFlow"],
      features: ["Custom Dashboards", "AI Insights", "Data Export", "Team Sharing"],
      pricing: "$149/month",
      users: "300+ analysts"
    },
    {
      title: "CRM Enterprise Suite",
      category: "Customer Management",
      type: "enterprise", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      downloads: "8.1k",
      rating: "4.7",
      tier: "Enterprise",
      description: "Comprehensive CRM with sales pipeline and marketing automation",
      tech: ["Angular", "FastAPI", "MySQL", "Docker"],
      features: ["Sales Pipeline", "Support Tickets", "Email Marketing", "Mobile CRM"],
      pricing: "$199/month", 
      users: "150+ teams"
    }
  ];

  const filteredApps = activeFilter === 'All' 
    ? webApps
    : webApps.filter(app => 
        activeFilter === 'SaaS' ? app.type === 'saas' :
        activeFilter === 'E-commerce' ? app.type === 'ecommerce' :
        activeFilter === 'Analytics' ? app.type === 'analytics' :
        activeFilter === 'Enterprise' ? app.type === 'enterprise' : true
      );

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header - Matching Style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-4 py-2 mb-4 rounded-lg">
            <Monitor className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-blue-400 font-semibold text-sm tracking-wider">PRIORITY #3: APP USERS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            PREMIUM <span className="text-blue-400">DEVELOPMENT</span> PRODUCTS
          </h2>
          
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Professional SaaS platforms, e-commerce solutions, analytics tools, and enterprise applications
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Settings className="w-5 h-5 text-blue-400" />
              <h3 className="text-white font-semibold">SELECT CATEGORY</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {appFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {filteredApps.map((app, index) => (
            <div key={index} className="bg-slate-800 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 rounded-lg overflow-hidden group">
              <div className="flex">
                {/* Image */}
                <div className="w-48 h-48 flex-shrink-0 relative overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 text-xs font-bold rounded-lg">
                      {app.tier}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-semibold text-xl group-hover:text-blue-300 transition-colors">
                      {app.title}
                    </h3>
                    <div className="text-green-400 font-bold text-lg">{app.pricing}</div>
                  </div>
                  
                  <div className="text-blue-400 font-medium mb-2">{app.category}</div>
                  <p className="text-slate-300 text-sm mb-4">{app.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {app.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{app.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{app.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-semibold rounded-lg transition-colors">
                    LAUNCH APP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link 
            to="/web-applications" 
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 space-x-2 shadow-lg"
          >
            <Monitor className="w-5 h-5" />
            <span>VIEW ALL APPLICATIONS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
