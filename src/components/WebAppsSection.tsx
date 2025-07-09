
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Monitor, Users, TrendingUp, BarChart3, Database, Shield } from 'lucide-react';
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
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* UNIQUE LAYOUT 1: Side-by-side header with vertical stats */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between mb-8 gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-4 py-2 mb-4">
              <Monitor className="w-4 h-4 mr-2 text-cyan-400" />
              <span className="text-cyan-400 font-bold text-sm">PRIORITY #3: APP USERS</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
              ENTERPRISE <span className="text-cyan-400">WEB APPS</span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              Professional SaaS platforms, e-commerce solutions, and enterprise applications built for modern businesses
            </p>

            {/* Filter Navigation - Horizontal under description */}
            <div className="flex flex-wrap gap-2 mt-4">
              {appFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* VERTICAL STATS COLUMN */}
          <div className="flex lg:flex-col flex-row gap-3 lg:w-auto w-full">
            {[
              { icon: Monitor, value: "25+", label: "Apps", color: "text-cyan-400" },
              { icon: Users, value: "50k+", label: "Users", color: "text-blue-400" },
              { icon: Star, value: "4.8★", label: "Rating", color: "text-yellow-400" },
              { icon: TrendingUp, value: "99.9%", label: "Uptime", color: "text-green-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800 border border-slate-700 p-4 text-center flex-1 lg:w-24">
                  <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-lg font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* COMPACT GRID LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Featured App - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800 border border-slate-700 p-6 h-full hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-700 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-1">{filteredApps[0]?.title}</h3>
                    <div className="text-cyan-400 font-semibold text-sm">[{filteredApps[0]?.category}]</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-cyan-400 font-black text-xl">{filteredApps[0]?.pricing}</div>
                  <div className="flex items-center space-x-1 text-sm text-slate-400">
                    <TrendingUp className="w-3 h-3 text-cyan-400" />
                    <span className="text-cyan-400 font-bold">{filteredApps[0]?.growth}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {filteredApps[0]?.description}
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-slate-700/50 p-3 text-center">
                  <div className="text-cyan-400 font-black text-lg">{filteredApps[0]?.downloads}</div>
                  <div className="text-slate-400 text-xs">downloads</div>
                </div>
                <div className="bg-slate-700/50 p-3 text-center">
                  <div className="text-yellow-400 font-black text-lg flex items-center justify-center">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400" />{filteredApps[0]?.rating}
                  </div>
                  <div className="text-slate-400 text-xs">rating</div>
                </div>
                <div className="bg-slate-700/50 p-3 text-center">
                  <div className="text-blue-400 font-black text-lg">{filteredApps[0]?.users}</div>
                  <div className="text-slate-400 text-xs">users</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {filteredApps[0]?.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 text-xs font-semibold border border-cyan-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 font-bold text-sm hover:shadow-lg transition-all duration-300">
                  LAUNCH APP
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Compact List */}
          <div className="space-y-4">
            <h4 className="text-cyan-400 font-black text-lg flex items-center">
              <Database className="w-5 h-5 mr-2" />
              MORE APPS
            </h4>
            {filteredApps.slice(1, 4).map((app, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700/50 p-4 hover:bg-slate-700/60 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-700 flex items-center justify-center">
                      <Database className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h5 className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors">
                        {app.title}
                      </h5>
                      <div className="text-slate-400 text-xs">[{app.category}]</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 font-bold text-sm">{app.pricing}</div>
                    <div className="flex items-center space-x-1 text-xs">
                      <TrendingUp className="w-3 h-3 text-cyan-400" />
                      <span className="text-cyan-400">{app.growth}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-800 border border-slate-700 p-6 text-center">
          <h3 className="text-xl font-black text-white mb-2">
            <span className="text-cyan-400">ENTERPRISE</span> WEB APPLICATIONS
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Professional SaaS platforms and enterprise solutions for modern businesses.
          </p>
          
          <Link 
            to="/web-applications"
            className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 font-bold transition-all duration-300 space-x-2"
          >
            <Monitor className="w-4 h-4" />
            <span>EXPLORE ALL APPS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
