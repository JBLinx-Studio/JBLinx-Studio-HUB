
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Vertical Layout Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/50 border border-green-500/30 px-4 py-2 rounded-full mb-4">
            <Globe className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-green-400 font-bold text-sm tracking-wide">PRIORITY #3: APP USERS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            ENTERPRISE <span className="text-green-400">WEB APPS</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Professional SaaS platforms, e-commerce solutions, and enterprise applications built for modern businesses
          </p>
          
          {/* Vertical Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { icon: Globe, value: "25+", label: "Apps", color: "text-green-400" },
              { icon: Users, value: "50k+", label: "Users", color: "text-blue-400" },
              { icon: Star, value: "4.8★", label: "Rating", color: "text-yellow-400" },
              { icon: Shield, value: "99.9%", label: "Uptime", color: "text-purple-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/30 border border-slate-700 rounded-lg p-4 text-center">
                  <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-green-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 border border-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {filteredApps.map((app, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-green-400/50 transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img src={app.image} alt={app.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {app.status}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-1">{app.title}</h3>
                  <div className="text-green-400 text-sm font-medium">{app.category}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm mb-4">{app.description}</p>
                
                {/* App Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-sm">{app.users}</div>
                    <div className="text-slate-500 text-xs">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold text-sm">{app.rating}</div>
                    <div className="text-slate-500 text-xs">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-bold text-sm">{app.uptime}</div>
                    <div className="text-slate-500 text-xs">Uptime</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-slate-700 text-green-400 px-2 py-1 text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-green-400 font-bold">{app.price}</div>
                  <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-medium transition-colors duration-300">
                    TRY FREE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 space-x-2">
            <TrendingUp className="w-5 h-5" />
            <span>VIEW ALL WEB APPLICATIONS</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
