
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Globe, Users, Zap, Shield, Database, Cloud, Code, TrendingUp, BarChart3 } from 'lucide-react';

const WebAppsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'SaaS', 'E-commerce', 'Analytics', 'Enterprise'];

  const webApps = [
    {
      title: "CodeFusion Studio",
      category: "Development Platform",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
      users: "12k+",
      rating: "4.9",
      status: "Live",
      description: "Professional web-based IDE with real-time collaboration and AI assistance",
      tags: ["SaaS", "IDE", "Collaboration", "AI"],
      price: "Free - $49/mo",
      uptime: "99.9%"
    },
    {
      title: "VitalitySync",
      category: "Health & Wellness",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop",
      users: "8.5k+",
      rating: "4.8",
      status: "Live",
      description: "Comprehensive health tracking platform with personalized insights",
      tags: ["Health", "Analytics", "Mobile", "Wearables"],
      price: "Free - $29/mo",
      uptime: "99.8%"
    },
    {
      title: "NestCore Platform",
      category: "Real Estate Tech",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=300&fit=crop",
      users: "15k+",
      rating: "4.7",
      status: "Live",
      description: "Smart property management with IoT integration and analytics",
      tags: ["PropTech", "IoT", "Analytics", "Enterprise"],
      price: "$99 - $299/mo",
      uptime: "99.9%"
    },
    {
      title: "MindMate Hub",
      category: "Strategy & Planning",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
      users: "6.2k+",
      rating: "4.9",
      status: "Live",
      description: "Strategic planning and decision-making platform for teams",
      tags: ["Strategy", "Planning", "Teams", "Analytics"],
      price: "$19 - $99/mo",
      uptime: "99.7%"
    }
  ];

  const filteredApps = activeCategory === 'All' ? webApps : webApps.slice(0, 3);

  return (
    <section className="py-6 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Header - Same style as Services */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-slate-800/95 border border-green-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Globe className="w-3 h-3 mr-1 text-green-400" />
            <span className="text-green-400 font-black text-xs font-mono tracking-widest">PRIORITY #3: APP USERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            ENTERPRISE <span className="text-green-400">WEB APPS</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-green-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Professional SaaS platforms, e-commerce solutions, and enterprise applications
          </p>

          {/* Stats - Same style as Services */}
          <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
            {[
              { icon: Globe, value: "25+", label: "Apps", color: "text-green-400" },
              { icon: Users, value: "50k+", label: "Users", color: "text-blue-400" },
              { icon: Star, value: "4.8★", label: "Rating", color: "text-yellow-400" },
              { icon: Shield, value: "99.9%", label: "Uptime", color: "text-purple-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/80 border border-slate-700 p-1.5 text-center backdrop-blur-sm">
                  <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter - Same style as Services */}
        <div className="flex flex-wrap justify-center gap-1 mb-5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 text-xs font-black transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-green-500 text-white shadow-lg' 
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 border border-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid - Vertical Layout */}
        <div className="grid lg:grid-cols-2 gap-3 mb-5">
          {filteredApps.map((app, index) => (
            <div key={index} className="bg-slate-800/95 border border-slate-700 transition-all duration-300 cursor-pointer hover:border-green-400/50 p-3">
              {/* Header with Image */}
              <div className="relative h-32 overflow-hidden mb-3">
                <img src={app.image} alt={app.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute top-2 right-2">
                  <div className="bg-green-500 text-white px-2 py-0.5 text-xs font-black">
                    {app.status}
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white font-black text-sm font-mono mb-1">{app.title}</h3>
                  <div className="text-green-400 text-xs font-bold">{app.category}</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-slate-300 text-xs leading-relaxed">{app.description}</p>
                
                {/* App Stats */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center">
                    <div className="text-blue-400 font-black text-xs font-mono">{app.users}</div>
                    <div className="text-slate-500 text-xs">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-black text-xs font-mono">{app.rating}</div>
                    <div className="text-slate-500 text-xs">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-black text-xs font-mono">{app.uptime}</div>
                    <div className="text-slate-500 text-xs">Uptime</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {app.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-0.5 text-xs font-bold border border-green-500/40 bg-green-500/10 text-green-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="text-green-400 font-black text-xs font-mono">{app.price}</div>
                  <button className="flex items-center space-x-1 text-xs font-bold text-green-400 hover:text-green-300 transition-all duration-300">
                    <span>TRY FREE</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Same style as Services */}
        <div className="text-center">
          <button className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm">
            <TrendingUp className="w-3 h-3" />
            <span>VIEW ALL APPS</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
