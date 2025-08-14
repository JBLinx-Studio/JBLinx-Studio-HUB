
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Monitor, BarChart3, Users, Zap, Settings, Database, Globe, Cpu, Terminal, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebAppsSection = () => {
  const [selectedApp, setSelectedApp] = useState(0);

  const webApps = [
    {
      title: "TaskFlow Pro Suite",
      category: "SaaS Platform",
      downloads: "15.2k",
      rating: "4.9",
      tier: "PREMIUM",
      description: "Complete project management platform with team collaboration",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      features: ["Real-time Sync", "Advanced Analytics", "API Integration", "Mobile App"],
      pricing: "$29/month",
      users: "500+ companies",
      uptime: "99.9%"
    },
    {
      title: "CommerceHub Platform",
      category: "E-commerce Solution", 
      downloads: "12.8k",
      rating: "4.8",
      tier: "ENTERPRISE",
      description: "Full-featured e-commerce platform with inventory management",
      tech: ["Next.js", "Stripe", "MongoDB", "AWS"],
      features: ["Multi-vendor", "Payment Gateway", "Inventory Sync", "SEO Optimized"],
      pricing: "$99/month",
      users: "200+ stores",
      uptime: "99.8%"
    },
    {
      title: "DataViz Analytics Pro",
      category: "Business Intelligence",
      downloads: "9.5k",
      rating: "4.9",
      tier: "PROFESSIONAL",
      description: "Advanced data visualization with custom dashboards",
      tech: ["Vue.js", "Python", "D3.js", "TensorFlow"],
      features: ["Custom Dashboards", "AI Insights", "Data Export", "Team Sharing"],
      pricing: "$149/month",
      users: "300+ analysts",
      uptime: "99.7%"
    }
  ];

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Header - Matching Hero Style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-blue-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Monitor className="w-3 h-3 mr-1 text-blue-400" />
            <span className="text-blue-400 font-black text-xs font-mono tracking-widest">PRIORITY #3: APP USERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            PREMIUM <span className="text-blue-400">SAAS PLATFORMS</span> + <span className="text-cyan-400">WEB SOLUTIONS</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-blue-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Professional SaaS platforms, e-commerce solutions, analytics tools, and enterprise applications
          </p>
        </div>

        {/* Unique Layout: Dashboard-Style with Sidebar Navigation */}
        <div className="flex gap-3 mb-8">
          {/* Left Sidebar: App Navigation */}
          <div className="w-64 bg-slate-800/95 border border-slate-700 p-4">
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-black text-sm font-mono">APP DASHBOARD</span>
            </div>

            {/* App List */}
            <div className="space-y-2 mb-6">
              {webApps.map((app, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedApp(index)}
                  className={`w-full text-left p-3 border transition-all duration-300 ${
                    selectedApp === index 
                      ? 'border-blue-400 bg-blue-500/20' 
                      : 'border-slate-600 bg-slate-900/50 hover:border-blue-400/50'
                  }`}
                >
                  <div className="text-white font-bold text-sm">{app.title}</div>
                  <div className="text-blue-400 text-xs mt-1">{app.category}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`px-2 py-1 text-xs font-bold ${
                      app.tier === 'PREMIUM' ? 'bg-purple-500 text-black' :
                      app.tier === 'ENTERPRISE' ? 'bg-orange-500 text-black' : 'bg-green-500 text-black'
                    }`}>
                      {app.tier}
                    </span>
                    <div className="text-green-400 font-black text-xs">{app.pricing}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* System Status */}
            <div className="bg-slate-900/80 border border-slate-600 p-3">
              <div className="flex items-center space-x-2 mb-3">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-black text-sm font-mono">SYSTEM STATUS</span>
              </div>
              <div className="space-y-2">
                {[
                  { label: "SERVERS", status: "ONLINE", color: "text-green-400" },
                  { label: "API", status: "STABLE", color: "text-green-400" },
                  { label: "DATABASE", status: "OPTIMIZED", color: "text-cyan-400" },
                  { label: "SECURITY", status: "SECURE", color: "text-green-400" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs font-bold">{item.label}</span>
                    <span className={`${item.color} text-xs font-black`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content: Selected App Details */}
          <div className="flex-1 bg-slate-800/95 border border-slate-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-white font-black text-xl font-mono">{webApps[selectedApp].title}</h3>
                <div className="text-blue-400 font-bold text-sm">{webApps[selectedApp].category}</div>
              </div>
              <div className="text-green-400 font-black text-2xl">{webApps[selectedApp].pricing}</div>
            </div>

            <p className="text-slate-300 text-sm mb-6">{webApps[selectedApp].description}</p>

            {/* App Metrics Grid */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {[
                { icon: Users, value: webApps[selectedApp].users, label: "ACTIVE USERS", color: "text-blue-400" },
                { icon: Star, value: webApps[selectedApp].rating, label: "RATING", color: "text-yellow-400" },
                { icon: Download, value: webApps[selectedApp].downloads, label: "DOWNLOADS", color: "text-green-400" },
                { icon: Shield, value: webApps[selectedApp].uptime, label: "UPTIME", color: "text-purple-400" }
              ].map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="bg-slate-900/80 border border-slate-600 p-3 text-center">
                    <IconComponent className={`w-4 h-4 mx-auto mb-2 ${metric.color}`} />
                    <div className="text-white font-black text-sm">{metric.value}</div>
                    <div className="text-slate-400 text-xs font-bold">{metric.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Tech Stack */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 font-black text-sm font-mono">TECH STACK</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {webApps[selectedApp].tech.map((tech, index) => (
                  <span key={index} className="bg-slate-700 text-cyan-400 px-3 py-1 text-xs font-bold border border-cyan-400/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-3">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-black text-sm font-mono">KEY FEATURES</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {webApps[selectedApp].features.map((feature, index) => (
                  <div key={index} className="bg-slate-900/50 border border-slate-600 p-2">
                    <div className="text-white font-bold text-sm">{feature}</div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-black px-4 py-3 font-black transition-colors">
              LAUNCH APPLICATION
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/web-applications" 
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Globe className="w-3 h-3" />
            <span>VIEW ALL WEB APPLICATIONS</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
