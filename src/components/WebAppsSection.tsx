
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Code, Zap, Users, Monitor, Smartphone, Database, Globe, Settings, BarChart3, TrendingUp, Shield, Clock } from 'lucide-react';
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
      users: "500+ companies",
      growth: "+127%"
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
      users: "200+ stores",
      growth: "+89%"
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
      users: "300+ analysts",
      growth: "+156%"
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
      users: "150+ teams",
      growth: "+78%"
    }
  ];

  const filteredApps = activeFilter === 'All' ? webApps : webApps.filter(app => 
    activeFilter === 'SaaS' ? app.type === 'saas' :
    activeFilter === 'E-commerce' ? app.type === 'ecommerce' :
    activeFilter === 'Analytics' ? app.type === 'analytics' :
    activeFilter === 'Enterprise' ? app.type === 'enterprise' : true
  );

  return (
    <section className="py-8 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/20 border-t border-slate-800 relative overflow-hidden">
      {/* Dashboard-style Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Dashboard Header - Left Aligned */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="text-left mb-4 lg:mb-0">
            <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/40 px-4 py-2 mb-3 backdrop-blur-sm">
              <Monitor className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-blue-400 font-black text-sm font-mono tracking-wider">PRIORITY #3: APP USERS</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-2">
              ENTERPRISE <span className="text-blue-400">WEB APPS</span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mb-3"></div>
            
            <p className="text-slate-300 max-w-xl">
              Professional SaaS platforms, e-commerce solutions, analytics tools, and enterprise applications
            </p>
          </div>

          {/* Dashboard Controls - Right Side */}
          <div className="flex flex-col items-end space-y-3">
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <Clock className="w-4 h-4" />
              <span>Last updated: 2 min ago</span>
            </div>
            <div className="flex space-x-2">
              {appFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-bold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                      : 'bg-slate-800/60 text-slate-400 hover:bg-slate-700 border border-slate-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard Layout - Asymmetric Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column - Main Featured App */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/90 border border-blue-400/30 p-6 h-full hover:border-blue-400/60 transition-all duration-500">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white font-mono">{filteredApps[0]?.title}</h3>
                    <div className="text-blue-400 text-sm font-bold">{filteredApps[0]?.category}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-black text-2xl">{filteredApps[0]?.pricing}</div>
                  <div className="flex items-center space-x-1 text-sm text-slate-400">
                    <TrendingUp className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-bold">{filteredApps[0]?.growth}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">{filteredApps[0]?.description}</p>

              {/* Dashboard Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-700/50 p-3 text-center">
                  <div className="text-blue-400 font-black text-lg">{filteredApps[0]?.downloads}</div>
                  <div className="text-slate-400 text-xs">Downloads</div>
                </div>
                <div className="bg-slate-700/50 p-3 text-center">
                  <div className="text-yellow-400 font-black text-lg flex items-center justify-center">
                    <Star className="w-4 h-4 mr-1" />{filteredApps[0]?.rating}
                  </div>
                  <div className="text-slate-400 text-xs">Rating</div>
                </div>
                <div className="bg-slate-700/50 p-3 text-center">
                  <div className="text-green-400 font-black text-lg">{filteredApps[0]?.users}</div>
                  <div className="text-slate-400 text-xs">Active Users</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {filteredApps[0]?.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-blue-500/20 text-blue-400 px-2 py-1 text-xs font-bold border border-blue-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 font-black text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  VIEW DEMO
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - App Grid & Stats */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Stats Panel */}
            <div className="bg-gradient-to-r from-slate-800/80 to-blue-900/20 border border-slate-700 p-4">
              <h4 className="text-white font-black text-sm font-mono mb-3 flex items-center">
                <BarChart3 className="w-4 h-4 mr-2 text-blue-400" />
                LIVE METRICS
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-blue-400 font-black text-xl">25+</div>
                  <div className="text-slate-400 text-xs">Active Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-green-400 font-black text-xl">50k+</div>
                  <div className="text-slate-400 text-xs">Total Users</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-400 font-black text-xl">4.8★</div>
                  <div className="text-slate-400 text-xs">Avg Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-black text-xl">99.9%</div>
                  <div className="text-slate-400 text-xs">Uptime</div>
                </div>
              </div>
            </div>

            {/* Compact App List */}
            <div className="space-y-3">
              {filteredApps.slice(1, 4).map((app, index) => (
                <div key={index} className="bg-slate-800/70 border border-slate-700 p-4 hover:bg-slate-700/80 transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center">
                        <Database className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-sm group-hover:text-blue-300 transition-colors">
                          {app.title}
                        </h5>
                        <div className="text-slate-400 text-xs">{app.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-sm">{app.pricing}</div>
                      <div className="flex items-center space-x-1 text-xs">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-green-400">{app.growth}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Panel */}
            <div className="bg-slate-800/90 border border-blue-400/30 p-4">
              <h4 className="text-white font-black text-sm font-mono mb-3">ENTERPRISE SOLUTIONS</h4>
              <p className="text-slate-400 text-xs mb-4">
                Scalable, secure, and performance-optimized applications for modern businesses.
              </p>
              <div className="space-y-2">
                <Link 
                  to="/blog" 
                  className="block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 font-black text-xs text-center hover:shadow-lg transition-all duration-300"
                >
                  VIEW ALL APPS
                </Link>
                <button className="w-full border border-blue-400/60 text-blue-400 hover:bg-blue-400/10 px-4 py-2 font-bold text-xs transition-all duration-300">
                  ENTERPRISE PRICING
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
