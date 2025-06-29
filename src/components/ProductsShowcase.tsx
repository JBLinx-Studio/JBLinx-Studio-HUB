
import React, { useState } from 'react';
import { ArrowRight, Code, Book, Zap, Download, Star, Users, TrendingUp, Smartphone, Database, Monitor, Globe, ShoppingCart, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const productCategories = ['All', 'Templates', 'eBooks', 'Mobile Apps', 'Dev Tools'];

  const products = [
    // Developer Templates - Priority for developers
    {
      name: "React SaaS Starter Kit",
      category: "Web Templates",
      type: "template",
      downloads: "12.5k",
      rating: "4.9",
      price: "$49.99",
      tech: "React + TypeScript",
      description: "Complete SaaS application template with authentication, billing, dashboard, and deployment ready",
      features: ["JWT Authentication", "Stripe Integration", "Admin Dashboard", "Responsive Design"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      name: "FastAPI Production Kit",
      category: "Backend Templates", 
      type: "template",
      downloads: "8.3k",
      rating: "4.8",
      price: "$39.99",
      tech: "Python + FastAPI",
      description: "Production-ready FastAPI template with MySQL, Redis, Docker, and comprehensive testing suite",
      features: ["JWT Authentication", "Database ORM", "API Documentation", "Docker Ready"],
      icon: Database,
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      name: "Flutter Cross-Platform Kit",
      category: "Mobile Templates",
      type: "template", 
      downloads: "6.7k",
      rating: "4.9",
      price: "$44.99",
      tech: "Flutter + Dart",
      description: "Complete cross-platform mobile template with Firebase integration and offline capabilities",
      features: ["Firebase Authentication", "Push Notifications", "Offline Support", "Material Design"],
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    },

    // Educational eBooks
    {
      name: "Full Stack Development Bible",
      category: "Programming eBooks",
      type: "ebook",
      downloads: "15.2k",
      rating: "5.0", 
      price: "$29.99",
      tech: "500+ Pages",
      description: "The ultimate guide covering React, Node.js, databases, deployment, and modern development practices",
      features: ["16 Comprehensive Chapters", "Real Code Examples", "Video Supplements", "Project Templates"],
      icon: Book,
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop"
    },
    {
      name: "Game Development Mastery Course",
      category: "Game Dev eBooks",
      type: "ebook",
      downloads: "11.8k",
      rating: "4.9",
      price: "$34.99", 
      tech: "Unity + C#",
      description: "Master Unity game development from basics to advanced techniques with real-world projects",
      features: ["Unity Fundamentals", "Advanced C# Scripting", "AI & Physics Systems", "Multiplayer Networking"],
      icon: Book,
      color: "from-purple-500 to-indigo-500", 
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop"
    },

    // Mobile Apps
    {
      name: "TaskFlow Pro Mobile",
      category: "Productivity Apps",
      type: "mobile",
      downloads: "25.1k",
      rating: "4.8",
      price: "$4.99",
      tech: "iOS + Android",
      description: "Premium task management app with team collaboration, time tracking, and advanced analytics",
      features: ["Real-time Collaboration", "Team Workspaces", "Offline Mode", "Smart Notifications"],
      icon: Smartphone,
      color: "from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      name: "CodeSnap Mobile Editor",
      category: "Developer Tools",
      type: "mobile",
      downloads: "18.7k", 
      rating: "4.7",
      price: "$6.99",
      tech: "React Native",
      description: "Professional mobile code editor with syntax highlighting, Git integration, and cloud sync",
      features: ["50+ Programming Languages", "Git Integration", "Cloud Synchronization", "Custom Themes"],
      icon: Code,
      color: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },

    // Developer Tools
    {
      name: "API Documentation Generator Pro",
      category: "Developer Tools",
      type: "tool",
      downloads: "9.4k",
      rating: "4.9",
      price: "$24.99",
      tech: "Node.js CLI",
      description: "Automatically generate beautiful, interactive API documentation from your codebase with deployment",
      features: ["Auto-Generation", "Multiple Export Formats", "Custom Themes", "One-Click Deploy"],
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products
    : activeCategory === 'Templates'
    ? products.filter(p => p.type === 'template')
    : activeCategory === 'eBooks' 
    ? products.filter(p => p.type === 'ebook')
    : activeCategory === 'Mobile Apps'
    ? products.filter(p => p.type === 'mobile')
    : activeCategory === 'Dev Tools'
    ? products.filter(p => p.type === 'tool')
    : products;

  const productStats = [
    { label: "Total Products", value: "50+", icon: Package },
    { label: "Downloads", value: "200k+", icon: Download },
    { label: "Avg Rating", value: "4.9★", icon: Star },
    { label: "Active Users", value: "15k+", icon: Users }
  ];

  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Enhanced Header - Square Design */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border-2 border-slate-700 px-8 py-3 mb-6">
            <ShoppingCart className="w-5 h-5 mr-3 text-cyan-400" />
            <span className="text-lg font-black text-cyan-300 tracking-wide font-mono">DEVELOPER MARKETPLACE</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            PREMIUM <span className="text-cyan-400">DEVELOPMENT</span> PRODUCTS
          </h2>
          
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6"></div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Professional templates, comprehensive programming guides, mobile applications, and developer tools to accelerate your development workflow
          </p>

          {/* Category Filter - Square Design */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-black transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Stats Grid - Square Panels */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {productStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/70 border-2 border-slate-700 p-6 text-center">
                  <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl font-black text-white font-mono">{stat.value}</div>
                  <div className="text-slate-400 text-sm font-bold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Products Grid - Square Panels */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <article
                key={index}
                className="bg-slate-800/90 border-2 border-slate-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group backdrop-blur-sm"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Type Badge - Square */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-slate-900/90 text-white px-3 py-2 text-xs font-black flex items-center space-x-2 backdrop-blur-sm">
                      <IconComponent className="w-4 h-4" />
                      <span>{product.type.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  {/* Stats - Square */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-slate-900/90 text-white px-3 py-2 text-xs font-bold backdrop-blur-sm flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{product.downloads}</span>
                    </div>
                    <div className="bg-slate-900/90 text-white px-3 py-2 text-xs font-bold backdrop-blur-sm flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-cyan-400 text-sm font-bold font-mono mb-2">
                          {product.category}
                        </div>
                        <h3 className="text-white font-black text-lg font-mono leading-tight">
                          {product.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-black text-lg">{product.price}</div>
                        <div className="text-slate-400 text-sm font-bold">{product.tech}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <div className="text-slate-300 text-xs font-black mb-3 uppercase tracking-wide">Key Features</div>
                    <div className="grid grid-cols-1 gap-2">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-sm text-slate-400">
                          <Zap className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions - Square */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-3 font-black transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25">
                      <ShoppingCart className="w-5 h-5" />
                      <span>BUY NOW</span>
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 transition-all duration-300 flex items-center justify-center">
                      <Monitor className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Enhanced Call to Action - Square */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-slate-600 p-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-black text-white mb-6 font-mono">
              <span className="text-cyan-400">EVERYTHING</span> YOU NEED TO BUILD AMAZING PROJECTS
            </h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              From game development to full-stack applications, mobile apps to comprehensive learning resources - 
              we provide the complete toolkit for developers and creators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/web-applications" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-4 font-black text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg shadow-cyan-500/25"
              >
                <Globe className="w-6 h-6" />
                <span>BROWSE ALL PRODUCTS</span>
                <ArrowRight className="w-6 h-6" />
              </Link>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-10 py-4 font-black text-lg transition-all duration-300">
                VIEW PRICING PLANS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
