
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
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 px-6 py-3 mb-6 rounded-lg">
            <div className="flex items-center justify-center space-x-3">
              <Monitor className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-bold text-sm tracking-wider uppercase">Priority #3: App Users</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            ENTERPRISE <span className="text-green-400">WEB APPS</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-4"></div>
          
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Professional SaaS platforms, e-commerce solutions, and enterprise applications built for modern businesses
          </p>
        </div>

        {/* Terminal-Style Layout */}
        <div className="bg-slate-900/90 backdrop-blur-sm border border-green-400/30 rounded-xl min-h-[600px] overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-slate-800/90 border-b border-green-400/30 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3">
                <Monitor className="w-5 h-5 text-green-400" />
                <h2 className="text-green-400 font-black text-xl font-mono">
                  WEB_APPLICATIONS_DASHBOARD
                </h2>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <span>◉ ONLINE</span>
              <span>|</span>
              <span>APP-ENV v3.2.1</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6">
            {/* Command Prompt */}
            <div className="mb-6 font-mono">
              <div className="text-green-400 text-sm mb-2">
                <span className="text-slate-500">user@jblinx-studio</span>
                <span className="text-white">:</span>
                <span className="text-cyan-400">~/web-apps</span>
                <span className="text-white">$ </span>
                <span className="text-green-400">ls -la --premium-apps</span>
              </div>
              <div className="w-2 h-4 bg-green-400 animate-pulse inline-block"></div>
            </div>

            {/* Filter Navigation - Terminal Style */}
            <div className="mb-6">
              <div className="text-green-400 font-mono text-sm mb-3">
                $ filter --category:
              </div>
              <div className="flex flex-wrap gap-2 ml-4">
                {appFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 text-sm font-bold font-mono rounded-md transition-all duration-300 ${
                      activeFilter === filter
                        ? 'bg-green-500 text-white shadow-lg shadow-green-500/25' 
                        : 'bg-slate-800/50 text-slate-400 hover:text-green-400 hover:bg-slate-700/50'
                    }`}
                  >
                    --{filter.toLowerCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid lg:grid-cols-12 gap-6">
              {/* Left Column - Featured App */}
              <div className="lg:col-span-8">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 h-full hover:border-green-400/50 transition-all duration-500 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1 font-mono">{filteredApps[0]?.title}</h3>
                        <div className="text-green-400 font-semibold font-mono">[{filteredApps[0]?.category}]</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-black text-2xl font-mono">{filteredApps[0]?.pricing}</div>
                      <div className="flex items-center space-x-1 text-sm text-slate-400">
                        <TrendingUp className="w-3 h-3 text-green-400" />
                        <span className="text-green-400 font-bold font-mono">{filteredApps[0]?.growth}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 rounded-lg p-3 font-mono text-sm mb-6">
                    <div className="text-slate-500 mb-1">$ app --description:</div>
                    <div className="text-slate-300"># {filteredApps[0]?.description}</div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="text-green-400 font-black text-xl font-mono">{filteredApps[0]?.downloads}</div>
                      <div className="text-slate-400 text-sm font-mono">downloads</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="text-yellow-400 font-black text-xl font-mono flex items-center justify-center">
                        <Star className="w-4 h-4 mr-1 fill-yellow-400" />{filteredApps[0]?.rating}
                      </div>
                      <div className="text-slate-400 text-sm font-mono">rating</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="text-cyan-400 font-black text-xl font-mono">{filteredApps[0]?.users}</div>
                      <div className="text-slate-400 text-sm font-mono">active_users</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {filteredApps[0]?.tech.slice(0, 3).map((tech, index) => (
                        <span key={index} className="bg-green-500/20 text-green-400 px-3 py-1 text-sm font-semibold font-mono rounded-md border border-green-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-bold font-mono rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group-hover:scale-105">
                      LAUNCH_APP
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Apps */}
              <div className="lg:col-span-4 space-y-6">
                {/* Live Stats Panel */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                  <h4 className="text-green-400 font-black text-lg mb-4 flex items-center font-mono">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    SYSTEM_METRICS
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-green-400 font-black text-2xl font-mono">25+</div>
                      <div className="text-slate-400 text-sm font-mono">apps</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-cyan-400 font-black text-2xl font-mono">50k+</div>
                      <div className="text-slate-400 text-sm font-mono">users</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-yellow-400 font-black text-2xl font-mono">4.8★</div>
                      <div className="text-slate-400 text-sm font-mono">rating</div>
                    </div>
                    <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                      <div className="text-green-400 font-black text-2xl font-mono">99.9%</div>
                      <div className="text-slate-400 text-sm font-mono">uptime</div>
                    </div>
                  </div>
                </div>

                {/* Compact App List */}
                <div className="space-y-3">
                  <h4 className="text-green-400 font-black text-lg font-mono flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    APP_REGISTRY/
                  </h4>
                  {filteredApps.slice(1, 4).map((app, index) => (
                    <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4 hover:bg-slate-700/60 transition-all duration-300 group cursor-pointer font-mono">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-slate-500">├──</span>
                          <div className="w-8 h-8 bg-slate-700/50 rounded-md flex items-center justify-center">
                            <Database className="w-4 h-4 text-green-400" />
                          </div>
                          <div>
                            <h5 className="text-white font-bold text-sm group-hover:text-green-300 transition-colors">
                              {app.title}
                            </h5>
                            <div className="text-slate-400 text-xs">[{app.category}]</div>
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

                {/* System Status */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6">
                  <h4 className="text-green-400 font-black text-base font-mono mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    ENTERPRISE_ACCESS
                  </h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed font-mono">
                    # Scalable, secure applications for modern businesses
                  </p>
                  <div className="space-y-3">
                    <Link 
                      to="/web-applications" 
                      className="block bg-green-500 hover:bg-green-600 text-white px-4 py-3 font-bold text-center rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-mono"
                    >
                      VIEW_ALL_APPS
                    </Link>
                    <button className="w-full border border-green-400/60 text-green-400 hover:bg-green-400/10 px-4 py-3 font-semibold rounded-lg transition-all duration-300 font-mono">
                      ENTERPRISE_PRICING
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Command Line */}
            <div className="pt-6 border-t border-slate-700/50 mt-8">
              <div className="text-green-400 font-mono text-sm flex items-center space-x-2">
                <span className="text-slate-500">user@jblinx-studio</span>
                <span className="text-white">:</span>
                <span className="text-cyan-400">~/web-apps</span>
                <span className="text-white">$</span>
                <Link 
                  to="/web-applications"
                  className="text-green-400 hover:text-green-300 underline decoration-dashed transition-colors"
                >
                  explore --all-applications
                </Link>
              </div>
              <div className="w-2 h-4 bg-green-400 animate-pulse inline-block mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
