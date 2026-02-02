
import React, { useState } from 'react';
import { ArrowRight, Monitor, Settings, Terminal, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import WebAppCard from './webapps/WebAppCard';
import WebAppDetails from './webapps/WebAppDetails';
import SectionWrapper from './ui/SectionWrapper';
import CTABanner from './ui/CTABanner';

const WebAppsSection = () => {
  const [selectedApp, setSelectedApp] = useState(0);

  const webApps = [
    {
      title: "TaskFlow Enterprise Suite",
      category: "SaaS Platform",
      downloads: "25.2k",
      rating: "4.9",
      tier: "ENTERPRISE",
      description: "Complete project management platform with advanced team collaboration, resource planning, and comprehensive analytics for enterprise teams.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
      features: [
        "Advanced Project Analytics", 
        "Resource Management", 
        "Team Collaboration Hub", 
        "API Integration Suite",
        "Custom Workflow Builder",
        "Real-time Notifications",
        "Advanced Reporting",
        "Multi-tenant Architecture"
      ],
      pricing: "$199",
      users: "1,500+ companies",
      uptime: "99.97%",
      version: "v4.2.1",
      lastUpdate: "2024-01-15"
    },
    {
      title: "CommerceHub Pro Platform",
      category: "E-commerce Solution", 
      downloads: "18.8k",
      rating: "4.8",
      tier: "PROFESSIONAL",
      description: "Full-featured e-commerce platform with multi-vendor support, advanced inventory management, and integrated payment processing.",
      tech: ["Next.js", "Stripe", "MongoDB", "Redis", "Vercel", "Cloudinary"],
      features: [
        "Multi-vendor Marketplace", 
        "Advanced Inventory Sync", 
        "Payment Gateway Integration", 
        "SEO Optimization Suite",
        "Mobile-responsive Design",
        "Analytics Dashboard",
        "Order Management",
        "Customer Support Tools"
      ],
      pricing: "$149",
      users: "800+ stores",
      uptime: "99.94%",
      version: "v3.1.8",
      lastUpdate: "2024-01-12"
    },
    {
      title: "DataViz Analytics Pro",
      category: "Business Intelligence",
      downloads: "12.5k",
      rating: "4.9",
      tier: "PREMIUM",
      description: "Advanced data visualization platform with AI-powered insights, custom dashboard creation, and enterprise-grade analytics capabilities.",
      tech: ["Vue.js", "Python", "D3.js", "TensorFlow", "ClickHouse", "Apache Kafka"],
      features: [
        "AI-powered Insights", 
        "Custom Dashboard Builder", 
        "Real-time Data Processing", 
        "Advanced Visualizations",
        "Team Collaboration",
        "Data Export Suite",
        "Predictive Analytics",
        "Integration APIs"
      ],
      pricing: "$299",
      users: "500+ analysts",
      uptime: "99.99%",
      version: "v2.5.3",
      lastUpdate: "2024-01-14"
    },
    {
      title: "CloudOps Management Hub",
      category: "DevOps Platform",
      downloads: "15.1k",
      rating: "4.7",
      tier: "ENTERPRISE",
      description: "Comprehensive DevOps platform for infrastructure management, deployment automation, and monitoring across multi-cloud environments.",
      tech: ["React", "Python", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
      features: [
        "Multi-cloud Management", 
        "CI/CD Pipeline Automation", 
        "Infrastructure as Code", 
        "Real-time Monitoring",
        "Security Compliance",
        "Cost Optimization",
        "Disaster Recovery",
        "Performance Analytics"
      ],
      pricing: "$399",
      users: "300+ DevOps teams",
      uptime: "99.95%",
      version: "v1.9.2",
      lastUpdate: "2024-01-13"
    }
  ];

  const systemStatus = [
    { label: "API GATEWAY", status: "OPERATIONAL", color: "text-green-400" },
    { label: "DATABASES", status: "OPTIMIZED", color: "text-cyan-400" },
    { label: "LOAD BALANCERS", status: "STABLE", color: "text-green-400" },
    { label: "SECURITY", status: "SECURED", color: "text-green-400" },
    { label: "MONITORING", status: "ACTIVE", color: "text-blue-400" },
    { label: "BACKUPS", status: "CURRENT", color: "text-purple-400" }
  ];

  return (
    <SectionWrapper
      badge={{ icon: Monitor, label: "WEB APPLICATIONS", color: "blue" }}
      title={{ main: "PREMIUM SAAS", accent: "PLATFORMS", accentColor: "blue" }}
      subtitle="Enterprise-grade SaaS platforms, e-commerce solutions, analytics tools, and business applications built for scale and performance"
    >
      {/* Dashboard-Style Layout */}
      <div className="grid lg:grid-cols-12 gap-5 mb-8">
        {/* Left Sidebar: App Navigation */}
        <div className="lg:col-span-4 space-y-4">
          {/* Control Panel Header */}
          <div className="bg-zinc-800/90 border border-zinc-700 p-4">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="w-5 h-5 text-blue-400" />
              <h3 className="text-blue-400 font-black text-base font-mono">APPLICATION DASHBOARD</h3>
            </div>
            
            {/* App Selection */}
            <div className="space-y-2">
              {webApps.map((app, index) => (
                <WebAppCard
                  key={app.title}
                  app={app}
                  isSelected={selectedApp === index}
                  onSelect={() => setSelectedApp(index)}
                />
              ))}
            </div>
          </div>

          {/* System Status Panel */}
          <div className="bg-zinc-800/90 border border-zinc-700 p-4">
            <div className="flex items-center space-x-3 mb-4">
              <Terminal className="w-5 h-5 text-green-400" />
              <h3 className="text-green-400 font-black text-sm font-mono">SYSTEM STATUS</h3>
            </div>
            
            <div className="space-y-2">
              {systemStatus.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-zinc-700 last:border-b-0">
                  <span className="text-zinc-400 text-xs font-bold">{item.label}</span>
                  <span className={`${item.color} text-xs font-black flex items-center space-x-1`}>
                    <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                    <span>{item.status}</span>
                  </span>
                </div>
              ))}
            </div>
            
            {/* Global Stats */}
            <div className="mt-4 pt-4 border-t border-zinc-700">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-green-400 font-black text-lg">99.96%</div>
                  <div className="text-zinc-400 text-xs">Global Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-black text-lg">&lt; 150ms</div>
                  <div className="text-zinc-400 text-xs">Avg Response</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content: Selected App Details */}
        <div className="lg:col-span-8">
          <WebAppDetails app={webApps[selectedApp]} />
        </div>
      </div>

      {/* CTA */}
      <CTABanner
        title={{ prefix: "ENTERPRISE-READY", accent: "SOLUTIONS" }}
        description="Production-tested SaaS platforms and web applications built for enterprise scale. Comprehensive documentation, 24/7 support, and guaranteed uptime."
        primaryAction={{ label: "EXPLORE ALL PLATFORMS", href: "/web-applications", icon: Globe }}
        secondaryAction={{ label: "REQUEST ENTERPRISE DEMO" }}
        accentColor="blue"
      />
    </SectionWrapper>
  );
};

export default WebAppsSection;
