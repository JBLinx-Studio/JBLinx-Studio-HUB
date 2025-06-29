
import React, { useState } from 'react';
import { ArrowRight, Code, Book, Zap, Download, Star, Users, TrendingUp, Smartphone, Database, Monitor, Globe, ShoppingCart, Package, Layers, FileCode } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const productCategories = ['All', 'Templates', 'eBooks', 'Mobile Apps', 'Tools'];

  const products = [
    {
      name: "React SaaS Starter Kit",
      category: "Web Templates",
      type: "template",
      downloads: "12.5k",
      rating: "4.9",
      price: "$49.99",
      tech: "React + TypeScript",
      description: "Complete SaaS template with auth, billing, dashboard, and deployment ready",
      features: ["JWT Auth", "Stripe Integration", "Admin Dashboard", "Responsive Design"],
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
      description: "Production-ready FastAPI with MySQL, Redis, Docker, testing suite",
      features: ["JWT Auth", "Database ORM", "API Docs", "Docker Ready"],
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
      description: "Complete mobile template with Firebase and offline capabilities",
      features: ["Firebase Auth", "Push Notifications", "Offline Support", "Material Design"],
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    },
    {
      name: "Full Stack Development Bible",
      category: "Programming eBooks",
      type: "ebook",
      downloads: "15.2k",
      rating: "5.0", 
      price: "$29.99",
      tech: "500+ Pages",
      description: "Ultimate guide covering React, Node.js, databases, deployment practices",
      features: ["16 Chapters", "Code Examples", "Video Supplements", "Project Templates"],
      icon: Book,
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop"
    },
    {
      name: "TaskFlow Pro Mobile",
      category: "Productivity Apps",
      type: "mobile",
      downloads: "25.1k",
      rating: "4.8",
      price: "$4.99",
      tech: "iOS + Android",
      description: "Premium task management with team collaboration and analytics",
      features: ["Real-time Collaboration", "Team Workspaces", "Offline Mode", "Smart Notifications"],
      icon: Smartphone,
      color: "from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      name: "API Documentation Generator",
      category: "Developer Tools",
      type: "tool",
      downloads: "9.4k",
      rating: "4.9",
      price: "$24.99",
      tech: "Node.js CLI",
      description: "Auto-generate beautiful, interactive API documentation with deployment",
      features: ["Auto-Generation", "Export Formats", "Custom Themes", "One-Click Deploy"],
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
    : activeCategory === 'Tools'
    ? products.filter(p => p.type === 'tool')
    : products;

  return (
    <section className="py-12 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/80 border border-cyan-500/30 px-6 py-2 mb-4 backdrop-blur-sm">
            <ShoppingCart className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-cyan-400 font-black text-sm font-mono tracking-wide">PRIORITY #2: DEVELOPERS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            PREMIUM <span className="text-cyan-400">DEVELOPMENT</span> PRODUCTS
          </h2>
          
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mb-4"></div>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Professional templates, programming guides, mobile apps, and developer tools
          </p>

          {/* Compact Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-black transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Compact Stats */}
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
            {[
              { icon: Package, value: "50+", label: "Products", color: "text-cyan-400" },
              { icon: Download, value: "200k+", label: "Downloads", color: "text-green-400" },
              { icon: Star, value: "4.9★", label: "Rating", color: "text-yellow-400" },
              { icon: Users, value: "15k+", label: "Users", color: "text-purple-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/60 border border-slate-700 p-3 text-center backdrop-blur-sm">
                  <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
                  <div className={`text-lg font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Products Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <article
                key={index}
                className="bg-slate-800/80 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group backdrop-blur-sm"
              >
                {/* Compact Image Section */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-2 left-2">
                    <div className="bg-slate-900/90 text-white px-2 py-1 text-xs font-black flex items-center space-x-1 backdrop-blur-sm">
                      <IconComponent className="w-3 h-3" />
                      <span>{product.type.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="bg-black/60 text-white px-2 py-1 text-xs font-bold backdrop-blur-sm flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{product.downloads}</span>
                    </div>
                    <div className="bg-black/60 text-white px-2 py-1 text-xs font-bold backdrop-blur-sm flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-cyan-400 text-xs font-bold font-mono mb-1">
                          {product.category}
                        </div>
                        <h3 className="text-white font-black text-sm font-mono leading-tight">
                          {product.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-black text-sm">{product.price}</div>
                        <div className="text-slate-400 text-xs font-bold">{product.tech}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Compact Content */}
                <div className="p-4">
                  <p className="text-slate-400 text-sm mb-3">
                    {product.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-3">
                    <div className="text-slate-300 text-xs font-black mb-2 uppercase">Features</div>
                    <div className="grid grid-cols-2 gap-1">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-1 text-xs text-slate-400">
                          <Zap className="w-2 h-2 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Compact Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-3 py-2 font-black text-xs transition-all duration-300 flex items-center justify-center space-x-1">
                      <ShoppingCart className="w-3 h-3" />
                      <span>BUY NOW</span>
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 transition-all duration-300">
                      <Monitor className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Compact CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 p-6 text-center">
          <h3 className="text-2xl font-black text-white mb-3 font-mono">
            <span className="text-cyan-400">EVERYTHING</span> FOR DEVELOPERS
          </h3>
          <p className="text-lg text-slate-400 mb-4">
            Complete toolkit for developers and creators - templates, guides, apps, and tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/web-applications" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 font-black transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Globe className="w-4 h-4" />
              <span>BROWSE ALL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 font-black transition-all duration-300">
              VIEW PRICING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
