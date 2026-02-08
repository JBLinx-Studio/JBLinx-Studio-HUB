import React, { useState } from 'react';
import { ArrowRight, Monitor, Settings, Terminal, Globe, Star, Users, Activity, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebAppsSection = () => {
  const [selectedApp, setSelectedApp] = useState(0);

  const webApps = [
    {
      title: "TaskFlow Enterprise Suite",
      category: "SaaS Platform",
      tier: "ENTERPRISE",
      description: "Complete project management platform with advanced team collaboration, resource planning, and comprehensive analytics.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      features: ["Advanced Analytics", "Resource Management", "Team Collaboration", "API Integration"],
      pricing: "$199/mo",
      users: "1,500+ companies",
      uptime: "99.97%",
      rating: 4.9
    },
    {
      title: "CommerceHub Pro Platform",
      category: "E-commerce Solution", 
      tier: "PROFESSIONAL",
      description: "Full-featured e-commerce platform with multi-vendor support, inventory management, and payment processing.",
      tech: ["Next.js", "Stripe", "MongoDB", "Redis", "Vercel"],
      features: ["Multi-vendor Marketplace", "Inventory Sync", "Payment Gateway", "SEO Suite"],
      pricing: "$149/mo",
      users: "800+ stores",
      uptime: "99.94%",
      rating: 4.8
    },
    {
      title: "DataViz Analytics Pro",
      category: "Business Intelligence",
      tier: "PREMIUM",
      description: "Advanced data visualization platform with AI-powered insights and custom dashboard creation.",
      tech: ["Vue.js", "Python", "D3.js", "TensorFlow", "ClickHouse"],
      features: ["AI Insights", "Custom Dashboards", "Real-time Processing", "Advanced Visualizations"],
      pricing: "$299/mo",
      users: "500+ analysts",
      uptime: "99.99%",
      rating: 4.9
    },
    {
      title: "CloudOps Management Hub",
      category: "DevOps Platform",
      tier: "ENTERPRISE",
      description: "Comprehensive DevOps platform for infrastructure management, deployment automation, and monitoring.",
      tech: ["React", "Python", "Kubernetes", "Terraform", "Prometheus"],
      features: ["Multi-cloud Management", "CI/CD Automation", "Infrastructure as Code", "Real-time Monitoring"],
      pricing: "$399/mo",
      users: "300+ DevOps teams",
      uptime: "99.95%",
      rating: 4.7
    }
  ];

  const systemStatus = [
    { label: "API GATEWAY", status: "OPERATIONAL", color: "text-green-400" },
    { label: "DATABASES", status: "OPTIMIZED", color: "text-cyan-400" },
    { label: "LOAD BALANCERS", status: "STABLE", color: "text-green-400" },
    { label: "SECURITY", status: "SECURED", color: "text-green-400" },
    { label: "MONITORING", status: "ACTIVE", color: "text-blue-400" }
  ];

  const currentApp = webApps[selectedApp];

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'ENTERPRISE': return 'bg-purple-500 text-purple-950';
      case 'PROFESSIONAL': return 'bg-blue-500 text-blue-950';
      case 'PREMIUM': return 'bg-amber-500 text-amber-950';
      default: return 'bg-secondary text-muted-foreground';
    }
  };

  return (
    <section className="relative bg-gradient-section section-padding overflow-hidden">
      <div className="ambient-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-blue">
            <Monitor className="w-4 h-4" />
            <span>WEB APPLICATIONS</span>
          </div>
          
          <h2 className="text-section-title text-foreground mb-3">
            PREMIUM SAAS <span className="text-blue-400">PLATFORMS</span>
          </h2>
          
          <div className="section-divider bg-blue-400" />
          
          <p className="section-subtitle">
            Enterprise-grade SaaS platforms, e-commerce solutions, and analytics tools built for scale
          </p>
        </div>

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-12 gap-6 mb-10">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-5">
            {/* App Selection Panel */}
            <div className="panel card-padding">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-5 h-5 text-blue-400" />
                <h3 className="text-panel-title text-blue-400">APPLICATION DASHBOARD</h3>
              </div>
              
              <div className="space-y-2">
                {webApps.map((app, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedApp(index)}
                    className={`w-full text-left panel-padding border transition-all ${
                      selectedApp === index
                        ? 'border-blue-500/40 bg-blue-500/10'
                        : 'border-border bg-secondary hover:border-border/80 hover:bg-secondary/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`text-card-title line-clamp-1 ${selectedApp === index ? 'text-blue-400' : 'text-foreground'}`}>
                        {app.title}
                      </h4>
                      <span className={`px-2 py-0.5 text-xs font-bold ${getTierColor(app.tier)}`}>
                        {app.tier}
                      </span>
                    </div>
                    <p className="text-small">{app.category}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* System Status Panel */}
            <div className="panel card-padding">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-green-400" />
                <h3 className="text-panel-title text-green-400">SYSTEM STATUS</h3>
              </div>
              
              <div className="space-y-2">
                {systemStatus.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="text-label text-muted-foreground">{item.label}</span>
                    <span className={`text-label ${item.color} flex items-center gap-1`}>
                      <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`} />
                      <span>{item.status}</span>
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Global Stats */}
              <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-3">
                <div className="stat-card">
                  <div className="stat-value text-green-400">99.96%</div>
                  <div className="stat-label">Global Uptime</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value text-cyan-400">&lt;150ms</div>
                  <div className="stat-label">Avg Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content: Selected App Details */}
          <div className="lg:col-span-8">
            <div className="panel card-padding h-full">
              {/* App Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-section-title text-foreground">{currentApp.title}</h3>
                    <span className={`px-2 py-1 text-xs font-bold ${getTierColor(currentApp.tier)}`}>
                      {currentApp.tier}
                    </span>
                  </div>
                  <p className="text-small">{currentApp.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-section-title text-blue-400">{currentApp.pricing}</div>
                  <div className="text-small">per month</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-body mb-6">{currentApp.description}</p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="stat-card">
                  <Star className="w-5 h-5 mx-auto mb-2 text-yellow-400" />
                  <div className="stat-value text-yellow-400">{currentApp.rating}</div>
                  <div className="stat-label">Rating</div>
                </div>
                <div className="stat-card">
                  <Users className="w-5 h-5 mx-auto mb-2 text-blue-400" />
                  <div className="stat-value text-blue-400 text-sm">{currentApp.users}</div>
                  <div className="stat-label">Users</div>
                </div>
                <div className="stat-card">
                  <Activity className="w-5 h-5 mx-auto mb-2 text-green-400" />
                  <div className="stat-value text-green-400">{currentApp.uptime}</div>
                  <div className="stat-label">Uptime</div>
                </div>
                <div className="stat-card">
                  <Monitor className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                  <div className="stat-value text-purple-400">{currentApp.tech.length}</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-panel-title text-muted-foreground mb-3">TECHNOLOGY STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {currentApp.tech.map((tech, index) => (
                    <span key={index} className="tag tag-default">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-panel-title text-muted-foreground mb-3">KEY FEATURES</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentApp.features.map((feature, index) => (
                    <div key={index} className="panel-hover panel-padding flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      <span className="text-body">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <button className="btn-primary bg-blue-500 hover:bg-blue-600 shadow-blue-500/25">
                  <Globe className="w-4 h-4" />
                  <span>LAUNCH DEMO</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
                <button className="btn-secondary">
                  REQUEST PRICING
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-card-title text-foreground mb-2">
            ENTERPRISE-READY <span className="text-blue-400">SOLUTIONS</span>
          </h3>
          <p className="text-body max-w-xl mx-auto mb-4">
            Production-tested SaaS platforms and web applications built for enterprise scale.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/web-applications" className="btn-primary bg-blue-500 hover:bg-blue-600 shadow-blue-500/25">
              <Globe className="w-4 h-4" />
              <span>EXPLORE ALL PLATFORMS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="btn-secondary">
              REQUEST ENTERPRISE DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppsSection;
