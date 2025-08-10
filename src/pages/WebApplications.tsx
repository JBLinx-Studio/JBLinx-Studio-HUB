
import React from 'react';
import { ArrowRight, Download, Star, Code, Monitor, Smartphone, Zap, Users, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WebApplications = () => {
  const webApps = [
    {
      title: "TaskFlow Pro",
      description: "Advanced task management platform with team collaboration and real-time sync",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      downloads: "8.5k",
      rating: "4.9",
      tier: "Premium",
      tech: ["React", "FastAPI", "PostgreSQL"],
      features: ["Real-time Collaboration", "Analytics Dashboard", "API Integration"],
      github: "https://github.com/JBLinx-Studio/taskflow-pro",
      demo: "https://taskflow.jblinxstudio.com"
    },
    {
      title: "DataViz Analytics",
      description: "Business intelligence platform with custom charts and data pipeline management",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      downloads: "4.2k",
      rating: "4.8",
      tier: "Enterprise",
      tech: ["Vue.js", "Python", "MongoDB"],
      features: ["Custom Visualizations", "Data Pipelines", "Export Tools"],
      github: "https://github.com/JBLinx-Studio/dataviz-analytics",
      demo: "https://dataviz.jblinxstudio.com"
    },
    {
      title: "ShopLink Commerce",
      description: "Complete e-commerce solution with modern checkout and inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      downloads: "6.7k",
      rating: "4.9",
      tier: "Premium",
      tech: ["Next.js", "Node.js", "Stripe"],
      features: ["Payment Gateway", "Inventory Sync", "Mobile Optimized"],
      github: "https://github.com/JBLinx-Studio/shoplink-commerce",
      demo: "https://shoplink.jblinxstudio.com"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: ["Access to 3 web apps", "Basic support", "Regular updates", "Community access"],
      popular: false
    },
    {
      name: "Premium",
      price: "$49",
      period: "/month", 
      description: "Best for growing businesses",
      features: ["Access to all web apps", "Priority support", "Advanced features", "API access", "Custom integrations"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: ["Everything in Premium", "Dedicated support", "Custom development", "SLA guarantee", "White-label options"],
      popular: false
    }
  ];

  const appStats = [
    { label: "Web Apps", value: "8+", icon: Code },
    { label: "Active Users", value: "25k+", icon: Users },
    { label: "Uptime", value: "99.9%", icon: Monitor },
    { label: "API Calls/Day", value: "1M+", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-3 mb-6" style={{ borderRadius: '8px' }}>
              <Code className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-white/90 font-bold font-mono">PREMIUM WEB APPLICATIONS</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight font-mono mb-6">
              <span className="text-blue-400">PROFESSIONAL</span> WEB APPS
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Subscription-based access to our premium web applications built with modern technologies. 
              From productivity tools to business intelligence platforms.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {appStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800 border border-slate-700 p-6 text-center" style={{ borderRadius: '8px' }}>
                    <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-2xl font-black text-white font-mono mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Web Apps Portfolio */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4 font-mono">
              OUR <span className="text-blue-400">APPLICATIONS</span>
            </h2>
            <div className="w-24 h-0.5 bg-blue-400 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {webApps.map((app, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 overflow-hidden group" style={{ borderRadius: '8px' }}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold ${
                      app.tier === 'Premium' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-black'
                    }`} style={{ borderRadius: '6px' }}>
                      {app.tier}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                      <Download className="w-3 h-3" />
                      <span>{app.downloads}</span>
                    </div>
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{app.rating}</span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-1">
                    <Monitor className="w-4 h-4 text-white/70" />
                    <Smartphone className="w-4 h-4 text-white/70" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-blue-300 transition-colors font-mono">
                    {app.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {app.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="text-slate-300 text-xs font-bold mb-2">TECH STACK</div>
                    <div className="flex flex-wrap gap-1">
                      {app.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-medium" style={{ borderRadius: '4px' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-slate-300 text-xs font-bold mb-2">KEY FEATURES</div>
                    <div className="space-y-1">
                      {app.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-xs text-slate-400">
                          <Zap className="w-3 h-3 text-blue-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <a 
                      href={app.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-500 text-white px-4 py-3 hover:bg-blue-600 transition-all duration-300 font-bold flex items-center justify-center space-x-2"
                      style={{ borderRadius: '6px' }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>DEMO</span>
                    </a>
                    <a 
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700 text-white px-4 py-3 hover:bg-slate-600 transition-all duration-300 flex items-center justify-center"
                      style={{ borderRadius: '6px' }}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4 font-mono">
              SUBSCRIPTION <span className="text-blue-400">PLANS</span>
            </h3>
            <div className="w-24 h-0.5 bg-blue-400 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800 border-2 ${plan.popular ? 'border-blue-400' : 'border-slate-700'} hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden`} style={{ borderRadius: '8px' }}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <h4 className="text-2xl font-black text-white mb-2 font-mono">{plan.name}</h4>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-black text-blue-400">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-400 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 font-bold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`} style={{ borderRadius: '6px' }}>
                    {plan.name === 'Enterprise' ? 'CONTACT SALES' : 'GET STARTED'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebApplications;
