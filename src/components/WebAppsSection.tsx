
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

  // Unique presentation for each category
  const renderCategoryContent = () => {
    if (activeFilter === 'SaaS') {
      // Dashboard-style layout for SaaS
      return (
        <div className="space-y-4">
          {filteredApps.map((app, index) => (
            <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-blue-400/60 transition-all duration-300 p-5">
              <div className="flex items-start space-x-5">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Settings className="w-12 h-12 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-black text-lg font-mono">{app.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-500 text-white px-2 py-1 text-xs font-black">SAAS</span>
                      <span className="bg-green-500 text-white px-2 py-1 text-xs font-black">{app.tier}</span>
                    </div>
                  </div>
                  <div className="text-blue-400 text-sm font-bold mb-2">{app.category}</div>
                  <p className="text-slate-300 text-sm mb-4">{app.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                        <Zap className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-sm text-slate-400">
                        <Users className="w-4 h-4" />
                        <span>{app.users}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-slate-400">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{app.rating}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {app.tech.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="bg-slate-700 text-blue-400 px-2 py-1 text-xs font-bold">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-black text-xl">{app.pricing}</div>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-black text-sm transition-all duration-300 mt-1">
                        START TRIAL
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeFilter === 'E-commerce') {
      // Store-focused layout
      return (
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredApps.map((app, index) => (
            <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-green-400/60 transition-all duration-300 overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <Globe className="w-16 h-16 text-green-400" />
                <div className="absolute top-3 left-3">
                  <span className="bg-green-500 text-white px-2 py-1 text-xs font-black">E-COMMERCE</span>
                </div>
                <div className="absolute top-3 right-3 flex gap-1">
                  <div className="bg-black/70 text-white px-2 py-1 text-xs font-bold flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{app.downloads}</span>
                  </div>
                  <div className="bg-black/70 text-white px-2 py-1 text-xs font-bold flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{app.rating}</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-black text-lg font-mono mb-1">{app.title}</h3>
                <div className="text-green-400 text-sm font-bold mb-3">{app.category}</div>
                <p className="text-slate-300 text-sm mb-4">{app.description}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {app.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-1 text-xs text-slate-400">
                      <Globe className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400 text-sm font-bold">{app.users}</div>
                    <div className="flex flex-wrap gap-1">
                      {app.tech.slice(0, 2).map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-700 text-green-400 px-1.5 py-0.5 text-xs font-bold">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-black text-lg">{app.pricing}</div>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-black text-xs transition-all duration-300">
                      GET STARTED
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeFilter === 'Analytics') {
      // Chart-focused layout
      return (
        <div className="space-y-6">
          {filteredApps.map((app, index) => (
            <div key={index} className="bg-gradient-to-r from-slate-800/90 to-purple-900/20 border border-slate-700 hover:border-purple-400/60 transition-all duration-300 p-6">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <BarChart3 className="w-10 h-10 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-black text-xl font-mono">{app.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-500 text-white px-3 py-1 text-sm font-black">ANALYTICS</span>
                      <div className="text-purple-400 font-black text-lg">{app.pricing}</div>
                    </div>
                  </div>
                  <div className="text-purple-400 text-base font-bold mb-3">{app.category}</div>
                  <p className="text-slate-300 text-base mb-4">{app.description}</p>
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    {app.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                        <BarChart3 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-1 text-sm text-slate-400">
                        <Users className="w-4 h-4" />
                        <span>{app.users}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-slate-400">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{app.rating}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {app.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-slate-700 text-purple-400 px-2 py-1 text-xs font-bold">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 font-black text-sm transition-all duration-300">
                      VIEW ANALYTICS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeFilter === 'Enterprise') {
      // Corporate-focused layout
      return (
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredApps.map((app, index) => (
            <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-orange-400/60 transition-all duration-300 p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center">
                  <Database className="w-8 h-8 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-black text-lg font-mono">{app.title}</h3>
                    <span className="bg-orange-500 text-white px-2 py-1 text-xs font-black">ENTERPRISE</span>
                  </div>
                  <div className="text-orange-400 text-sm font-bold mb-2">{app.category}</div>
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
              </div>
              <p className="text-slate-300 text-sm mb-4">{app.description}</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {app.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-1 text-xs text-slate-400">
                    <Database className="w-3 h-3 text-orange-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {app.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-slate-700 text-orange-400 px-2 py-1 text-xs font-bold">{tech}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-orange-400 font-black text-xl">{app.pricing}</div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 font-black text-sm transition-all duration-300">
                  CONTACT SALES
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Default grid for 'All'
    return (
      <div className="grid lg:grid-cols-3 gap-4">
        {filteredApps.map((app, index) => {
          const TypeIcon = getTypeIcon(app.type);
          return (
            <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-blue-400/60 transition-all duration-300 overflow-hidden">
              <div className="relative h-36 overflow-hidden">
                <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <div className="bg-slate-900/90 text-white px-2 py-1 text-xs font-black flex items-center space-x-1">
                    <TypeIcon className="w-3 h-3" />
                    <span>{app.type.toUpperCase()}</span>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white font-black text-sm font-mono mb-1">{app.title}</h3>
                  <div className="flex justify-between items-center">
                    <div className="text-blue-400 text-xs font-bold">{app.category}</div>
                    <div className="text-green-400 font-black text-sm">{app.pricing}</div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-slate-400 text-xs mb-2">{app.description}</p>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 font-black text-xs transition-all duration-300 flex items-center justify-center space-x-1">
                  <Monitor className="w-3 h-3" />
                  <span>TRY DEMO</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Ultra Compact Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-slate-800/90 border border-blue-400/40 px-4 py-1.5 mb-3 backdrop-blur-sm">
            <Monitor className="w-3 h-3 mr-1.5 text-blue-400" />
            <span className="text-blue-400 font-black text-xs font-mono tracking-wider">PRIORITY #3: APP USERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-2">
            ENTERPRISE <span className="text-blue-400">WEB APPS</span>
          </h2>
          
          <div className="w-12 h-0.5 bg-blue-400 mx-auto mb-3"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-4">
            Professional SaaS platforms, e-commerce solutions, analytics tools, and enterprise applications
          </p>

          {/* Ultra Compact Category Filter */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {appFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 text-xs font-black transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-blue-500 text-white shadow-lg' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Ultra Compact App Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto mb-6">
            {[
              { icon: Monitor, value: "25+", label: "Web Apps", color: "text-blue-400" },
              { icon: Users, value: "50k+", label: "Active Users", color: "text-green-400" },
              { icon: Star, value: "4.8★", label: "Avg Rating", color: "text-yellow-400" },
              { icon: Database, value: "99.9%", label: "Uptime", color: "text-purple-400" }
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

        {/* Dynamic Category Content */}
        <div className="mb-6">
          {renderCategoryContent()}
        </div>

        {/* Ultra Compact CTA Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 p-5 text-center">
          <h3 className="text-xl font-black text-white mb-2 font-mono">
            ENTERPRISE <span className="text-blue-400">SOLUTIONS</span>
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            From SaaS platforms to enterprise applications, built with scalability, security, and performance in mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link 
              to="/blog" 
              className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-5 py-2.5 font-black transition-all duration-300 flex items-center justify-center space-x-1.5 text-sm"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>VIEW ALL APPS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-5 py-2.5 font-black transition-all duration-300 text-sm">
              ENTERPRISE PRICING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
