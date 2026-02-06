import React, { useState } from 'react';
import { ArrowRight, Monitor, Settings, Terminal, Globe, Star, Users, Activity, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

const WebAppsSection = () => {
  const [selectedApp, setSelectedApp] = useState(0);

  const webApps = [
    { title: "TaskFlow Enterprise Suite", category: "SaaS Platform", tier: "ENTERPRISE", description: "Complete project management platform with advanced team collaboration, resource planning, and comprehensive analytics.", tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"], features: ["Advanced Analytics", "Resource Management", "Team Collaboration", "API Integration"], pricing: "$199/mo", users: "1,500+ companies", uptime: "99.97%", rating: 4.9 },
    { title: "CommerceHub Pro Platform", category: "E-commerce Solution", tier: "PROFESSIONAL", description: "Full-featured e-commerce platform with multi-vendor support, inventory management, and payment processing.", tech: ["Next.js", "Stripe", "MongoDB", "Redis", "Vercel"], features: ["Multi-vendor Marketplace", "Inventory Sync", "Payment Gateway", "SEO Suite"], pricing: "$149/mo", users: "800+ stores", uptime: "99.94%", rating: 4.8 },
    { title: "DataViz Analytics Pro", category: "Business Intelligence", tier: "PREMIUM", description: "Advanced data visualization platform with AI-powered insights and custom dashboard creation.", tech: ["Vue.js", "Python", "D3.js", "TensorFlow", "ClickHouse"], features: ["AI Insights", "Custom Dashboards", "Real-time Processing", "Advanced Visualizations"], pricing: "$299/mo", users: "500+ analysts", uptime: "99.99%", rating: 4.9 },
    { title: "CloudOps Management Hub", category: "DevOps Platform", tier: "ENTERPRISE", description: "Comprehensive DevOps platform for infrastructure management, deployment automation, and monitoring.", tech: ["React", "Python", "Kubernetes", "Terraform", "Prometheus"], features: ["Multi-cloud Management", "CI/CD Automation", "Infrastructure as Code", "Real-time Monitoring"], pricing: "$399/mo", users: "300+ DevOps teams", uptime: "99.95%", rating: 4.7 }
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
      case 'ENTERPRISE': return 'bg-purple-500 text-white';
      case 'PROFESSIONAL': return 'bg-blue-500 text-white';
      case 'PREMIUM': return 'bg-amber-500 text-white';
      default: return 'bg-secondary text-muted-foreground';
    }
  };

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="section-divider-line" />
      <div className="ambient-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="section-header">
            <div className="badge-blue">
              <Monitor className="w-4 h-4" />
              <span>WEB APPLICATIONS</span>
            </div>
            
            <h2 className="text-section-title text-foreground mb-3">
              PREMIUM SAAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">PLATFORMS</span>
            </h2>
            
            <div className="section-divider bg-blue-400" />
            
            <p className="section-subtitle">
              Enterprise-grade SaaS platforms, e-commerce solutions, and analytics tools built for scale
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid lg:grid-cols-12 gap-6 mb-12">
            {/* Left Sidebar */}
            <div className="lg:col-span-4 space-y-5">
              <div className="panel card-padding">
                <div className="flex items-center gap-2 mb-4">
                  <Settings className="w-5 h-5 text-blue-400" />
                  <h3 className="text-panel-title text-blue-400">APPLICATION DASHBOARD</h3>
                </div>
                
                <div className="space-y-2">
                  {webApps.map((app, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSelectedApp(index)}
                      className={`w-full text-left panel-padding border rounded-md transition-all ${
                        selectedApp === index
                          ? 'border-blue-500/50 bg-blue-500/15'
                          : 'border-border bg-secondary hover:border-border/80 hover:bg-secondary/80'
                      }`}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`text-card-title line-clamp-1 ${selectedApp === index ? 'text-blue-400' : 'text-foreground'}`}>
                          {app.title}
                        </h4>
                        <span className={`px-2 py-0.5 text-xs font-bold rounded-sm ${getTierColor(app.tier)}`}>
                          {app.tier}
                        </span>
                      </div>
                      <p className="text-small">{app.category}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="panel card-padding">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-5 h-5 text-green-400" />
                  <h3 className="text-panel-title text-green-400">SYSTEM STATUS</h3>
                </div>
                
                <div className="space-y-2">
                  {systemStatus.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="text-label text-muted-foreground">{item.label}</span>
                      <span className={`text-label ${item.color} flex items-center gap-1.5`}>
                        <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')} shadow-lg`} />
                        <span>{item.status}</span>
                      </span>
                    </div>
                  ))}
                </div>
                
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

            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="panel-elevated card-padding h-full">
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-section-title text-foreground">{currentApp.title}</h3>
                      <span className={`px-2 py-1 text-xs font-bold rounded-sm ${getTierColor(currentApp.tier)}`}>
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

                <p className="text-body text-base mb-6">{currentApp.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: Star, value: currentApp.rating, label: "Rating", color: "text-yellow-400" },
                    { icon: Users, value: currentApp.users, label: "Users", color: "text-blue-400", small: true },
                    { icon: Activity, value: currentApp.uptime, label: "Uptime", color: "text-green-400" },
                    { icon: Monitor, value: currentApp.tech.length, label: "Technologies", color: "text-purple-400" }
                  ].map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="stat-card">
                        <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                        <div className={`${stat.small ? 'text-sm' : 'stat-value'} font-bold ${stat.color}`}>{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="mb-6">
                  <h4 className="text-panel-title text-muted-foreground mb-3">TECHNOLOGY STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentApp.tech.map((tech, index) => (
                      <span key={index} className="tag tag-default">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-panel-title text-muted-foreground mb-3">KEY FEATURES</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentApp.features.map((feature, index) => (
                      <div key={index} className="panel panel-padding flex items-center gap-2 hover:border-blue-500/30 transition-all">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-body text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="btn-primary bg-blue-500 hover:bg-blue-600 shadow-blue-500/30">
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
        </AnimatedSection>

        <AnimatedSection className="text-center" delay={0.3}>
          <p className="text-body text-base max-w-xl mx-auto mb-5">
            Production-tested SaaS platforms and web applications built for enterprise scale.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/web-applications" className="btn-primary bg-blue-500 hover:bg-blue-600 shadow-blue-500/30">
              <Globe className="w-4 h-4" />
              <span>EXPLORE ALL PLATFORMS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="btn-secondary">
              REQUEST ENTERPRISE DEMO
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WebAppsSection;
