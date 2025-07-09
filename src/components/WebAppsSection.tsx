
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
    <section className="py-12 bg-slate-950 relative overflow-hidden">
      {/* Subtle background pattern */}
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
        {/* Header Section - Compact Design */}
        <div className="text-center mb-12">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 px-6 py-3 mb-6 rounded-lg">
            <div className="flex items-center justify-center space-x-3">
              <Monitor className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-bold text-sm tracking-wider uppercase">Priority #3: App Users</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            ENTERPRISE <span className="text-blue-400">WEB APPS</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
          
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Professional SaaS platforms, e-commerce solutions, and enterprise applications built for modern businesses
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-slate-800/50 backdrop-blur-sm p-2 rounded-lg border border-slate-600/50">
            {appFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-sm font-bold rounded-md transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-slate-400 hover:text-blue-400 hover:bg-slate-700/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard-Style Layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column - Featured App */}
          <div className="lg:col-span-8">
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 h-full hover:border-blue-400/50 transition-all duration-500 group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">{filteredApps[0]?.title}</h3>
                    <div className="text-blue-400 font-semibold">{filteredApps[0]?.category}</div>
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

              <p className="text-slate-300 mb-6 leading-relaxed text-lg">{filteredApps[0]?.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-blue-400 font-black text-xl">{filteredApps[0]?.downloads}</div>
                  <div className="text-slate-400 text-sm">Downloads</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-yellow-400 font-black text-xl flex items-center justify-center">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400" />{filteredApps[0]?.rating}
                  </div>
                  <div className="text-slate-400 text-sm">Rating</div>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <div className="text-green-400 font-black text-xl">{filteredApps[0]?.users}</div>
                  <div className="text-slate-400 text-sm">Active Users</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {filteredApps[0]?.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-blue-500/20 text-blue-400 px-3 py-1 text-sm font-semibold rounded-md border border-blue-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
                  VIEW DEMO
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Apps */}
          <div className="lg:col-span-4 space-y-6">
            {/* Live Stats Panel */}
            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6">
              <h4 className="text-white font-black text-lg mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
                LIVE METRICS
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-blue-400 font-black text-2xl">25+</div>
                  <div className="text-slate-400 text-sm">Apps</div>
                </div>
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-green-400 font-black text-2xl">50k+</div>
                  <div className="text-slate-400 text-sm">Users</div>
                </div>
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-yellow-400 font-black text-2xl">4.8★</div>
                  <div className="text-slate-400 text-sm">Rating</div>
                </div>
                <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                  <div className="text-purple-400 font-black text-2xl">99.9%</div>
                  <div className="text-slate-400 text-sm">Uptime</div>
                </div>
              </div>
            </div>

            {/* Compact App List */}
            <div className="space-y-3">
              {filteredApps.slice(1, 4).map((app, index) => (
                <div key={index} className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/30 rounded-lg p-4 hover:bg-slate-700/60 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-md flex items-center justify-center">
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
            <div className="bg-slate-800/80 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
              <h4 className="text-white font-black text-lg mb-3">ENTERPRISE SOLUTIONS</h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Scalable, secure, and performance-optimized applications for modern businesses.
              </p>
              <div className="space-y-3">
                <Link 
                  to="/web-applications" 
                  className="block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-3 font-bold text-center rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  VIEW ALL APPS
                </Link>
                <button className="w-full border border-blue-400/60 text-blue-400 hover:bg-blue-400/10 px-4 py-3 font-semibold rounded-lg transition-all duration-300">
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
