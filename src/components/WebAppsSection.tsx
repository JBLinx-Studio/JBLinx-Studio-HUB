
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
    <section className="py-8 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Header matching Services section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-slate-800/90 border border-emerald-500/40 px-4 py-1.5 mb-3 backdrop-blur-sm">
            <Monitor className="w-3 h-3 mr-1.5 text-emerald-400" />
            <span className="text-emerald-400 font-black text-xs font-mono tracking-wider">PRIORITY #3: APP USERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-2">
            ENTERPRISE <span className="text-emerald-400">WEB APPS</span>
          </h2>
          
          <div className="w-12 h-0.5 bg-emerald-400 mx-auto mb-3"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-4">
            Professional SaaS platforms, e-commerce solutions, and enterprise applications built for modern businesses
          </p>

          {/* Filter Navigation */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {appFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-xs font-black transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-emerald-500 text-white shadow-lg' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto mb-6">
            {[
              { icon: Monitor, value: "25+", label: "Apps", color: "text-emerald-400" },
              { icon: Users, value: "50k+", label: "Users", color: "text-cyan-400" },
              { icon: Star, value: "4.8★", label: "Rating", color: "text-yellow-400" },
              { icon: TrendingUp, value: "99.9%", label: "Uptime", color: "text-purple-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/70 border border-slate-700 p-2 text-center backdrop-blur-sm">
                  <IconComponent className={`w-4 h-4 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-sm font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 mb-6">
          {/* Featured App - Left Column */}
          <div className="lg:col-span-8">
            <div className="bg-slate-800/70 border border-slate-700 p-6 h-full hover:border-emerald-400/50 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-700/50 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1 font-mono">{filteredApps[0]?.title}</h3>
                    <div className="text-emerald-400 font-semibold font-mono">[{filteredApps[0]?.category}]</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-emerald-400 font-black text-2xl font-mono">{filteredApps[0]?.pricing}</div>
                  <div className="flex items-center space-x-1 text-sm text-slate-400">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 font-bold font-mono">{filteredApps[0]?.growth}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 p-3 font-mono text-sm mb-6">
                <div className="text-slate-500 mb-1"># Description:</div>
                <div className="text-slate-300">{filteredApps[0]?.description}</div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-700/30 p-4 text-center">
                  <div className="text-emerald-400 font-black text-xl font-mono">{filteredApps[0]?.downloads}</div>
                  <div className="text-slate-400 text-sm font-mono">downloads</div>
                </div>
                <div className="bg-slate-700/30 p-4 text-center">
                  <div className="text-yellow-400 font-black text-xl font-mono flex items-center justify-center">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400" />{filteredApps[0]?.rating}
                  </div>
                  <div className="text-slate-400 text-sm font-mono">rating</div>
                </div>
                <div className="bg-slate-700/30 p-4 text-center">
                  <div className="text-cyan-400 font-black text-xl font-mono">{filteredApps[0]?.users}</div>
                  <div className="text-slate-400 text-sm font-mono">active_users</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {filteredApps[0]?.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 text-sm font-semibold font-mono border border-emerald-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-bold font-mono hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-105">
                  LAUNCH APP
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Apps */}
          <div className="lg:col-span-4 space-y-6">
            {/* Live Stats Panel */}
            <div className="bg-slate-800/70 border border-slate-700 p-6">
              <h4 className="text-emerald-400 font-black text-lg mb-4 flex items-center font-mono">
                <BarChart3 className="w-5 h-5 mr-2" />
                SYSTEM METRICS
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-700/30">
                  <div className="text-emerald-400 font-black text-2xl font-mono">25+</div>
                  <div className="text-slate-400 text-sm font-mono">apps</div>
                </div>
                <div className="text-center p-3 bg-slate-700/30">
                  <div className="text-cyan-400 font-black text-2xl font-mono">50k+</div>
                  <div className="text-slate-400 text-sm font-mono">users</div>
                </div>
                <div className="text-center p-3 bg-slate-700/30">
                  <div className="text-yellow-400 font-black text-2xl font-mono">4.8★</div>
                  <div className="text-slate-400 text-sm font-mono">rating</div>
                </div>
                <div className="text-center p-3 bg-slate-700/30">
                  <div className="text-emerald-400 font-black text-2xl font-mono">99.9%</div>
                  <div className="text-slate-400 text-sm font-mono">uptime</div>
                </div>
              </div>
            </div>

            {/* Compact App List */}
            <div className="space-y-3">
              <h4 className="text-emerald-400 font-black text-lg font-mono flex items-center">
                <Database className="w-5 h-5 mr-2" />
                APP REGISTRY
              </h4>
              {filteredApps.slice(1, 4).map((app, index) => (
                <div key={index} className="bg-slate-800/30 border border-slate-700/30 p-4 hover:bg-slate-700/60 transition-all duration-300 group cursor-pointer font-mono">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-slate-700/50 flex items-center justify-center">
                        <Database className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <h5 className="text-white font-bold text-sm group-hover:text-emerald-300 transition-colors">
                          {app.title}
                        </h5>
                        <div className="text-slate-400 text-xs">[{app.category}]</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold text-sm">{app.pricing}</div>
                      <div className="flex items-center space-x-1 text-xs">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">{app.growth}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enterprise Access */}
            <div className="bg-slate-800/70 border border-emerald-400/30 p-6">
              <h4 className="text-emerald-400 font-black text-base font-mono mb-3 flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                ENTERPRISE ACCESS
              </h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed font-mono">
                Scalable, secure applications for modern businesses
              </p>
              <div className="space-y-3">
                <Link 
                  to="/web-applications" 
                  className="block bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 font-bold text-center hover:shadow-lg transition-all duration-300 hover:scale-105 font-mono"
                >
                  VIEW ALL APPS
                </Link>
                <button className="w-full border border-emerald-400/60 text-emerald-400 hover:bg-emerald-400/10 px-4 py-3 font-semibold transition-all duration-300 font-mono">
                  ENTERPRISE PRICING
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 p-5 text-center">
          <h3 className="text-xl font-black text-white mb-2 font-mono">
            <span className="text-emerald-400">ENTERPRISE</span> WEB APPLICATIONS
          </h3>
          <p className="text-sm text-slate-400 mb-3">
            Professional SaaS platforms and enterprise solutions for modern businesses.
          </p>
          
          <Link 
            to="/web-applications"
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white px-5 py-2.5 font-black transition-all duration-300 space-x-1.5 text-sm"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>EXPLORE ALL APPS</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
