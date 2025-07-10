import React, { useState } from 'react';
import { ArrowRight, Code, Book, Zap, Download, Star, Users, TrendingUp, Smartphone, Database, Monitor, Globe, ShoppingCart, Package, Layers, FileCode, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HorizontalCarousel } from '@/components/ui/horizontal-carousel';
import { ProductsCarouselContent } from './products/ProductsCarouselContent';

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
      description: "Complete SaaS template with auth, billing, dashboard",
      features: ["JWT Auth", "Stripe Integration", "Admin Dashboard", "Responsive Design"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    },
    {
      name: "FastAPI Production Kit",
      category: "Backend Templates", 
      type: "template",
      downloads: "8.3k",
      rating: "4.8",
      price: "$39.99",
      tech: "Python + FastAPI",
      description: "Production-ready FastAPI with MySQL, Redis, Docker",
      features: ["JWT Auth", "Database ORM", "API Docs", "Docker Ready"],
      icon: Database,
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop"
    },
    {
      name: "Flutter Cross-Platform Kit",
      category: "Mobile Templates",
      type: "template", 
      downloads: "6.7k",
      rating: "4.9",
      price: "$44.99",
      tech: "Flutter + Dart",
      description: "Complete mobile template with Firebase integration",
      features: ["Firebase Auth", "Push Notifications", "Offline Support", "Material Design"],
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop"
    },
    {
      name: "Full Stack Development Bible",
      category: "Programming eBooks",
      type: "ebook",
      downloads: "15.2k",
      rating: "5.0", 
      price: "$29.99",
      tech: "500+ Pages",
      description: "Ultimate guide covering React, Node.js, databases",
      features: ["16 Chapters", "Code Examples", "Video Supplements", "Project Templates"],
      icon: Book,
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop"
    },
    {
      name: "TaskFlow Pro Mobile",
      category: "Productivity Apps",
      type: "mobile",
      downloads: "25.1k",
      rating: "4.8",
      price: "$4.99",
      tech: "iOS + Android",
      description: "Premium task management with team collaboration",
      features: ["Real-time Collaboration", "Team Workspaces", "Offline Mode", "Smart Notifications"],
      icon: Smartphone,
      color: "from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop"
    },
    {
      name: "API Documentation Generator",
      category: "Developer Tools",
      type: "tool",
      downloads: "9.4k",
      rating: "4.9",
      price: "$24.99",
      tech: "Node.js CLI",
      description: "Auto-generate beautiful, interactive API documentation",
      features: ["Auto-Generation", "Export Formats", "Custom Themes", "One-Click Deploy"],
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop"
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

  // Unique presentation for each category
  const renderCategoryContent = () => {
    if (activeCategory === 'Templates') {
      // Code-focused layout for templates
      return (
        <div className="space-y-4">
          {filteredProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-cyan-400/60 transition-all duration-300 p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-black text-base font-mono">{product.name}</h3>
                      <div className="text-green-400 font-black text-lg">{product.price}</div>
                    </div>
                    <div className="text-cyan-400 text-sm font-bold mb-2">{product.category}</div>
                    <p className="text-slate-300 text-sm mb-3">{product.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-1 text-xs text-slate-400">
                          <Code className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-xs text-slate-400">
                          <Download className="w-3 h-3" />
                          <span>{product.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-slate-400">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                        <div className="text-cyan-400 text-xs font-bold">{product.tech}</div>
                      </div>
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 font-black text-xs transition-all duration-300">
                        GET TEMPLATE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (activeCategory === 'eBooks') {
      // Book-focused layout
      return (
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800/90 to-slate-700/50 border border-slate-600 hover:border-orange-400/60 transition-all duration-300 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-20 bg-gradient-to-b from-orange-500/30 to-red-500/30 flex items-center justify-center">
                  <Book className="w-8 h-8 text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-black text-lg font-mono mb-2">{product.name}</h3>
                  <div className="text-orange-400 text-sm font-bold mb-2">{product.category}</div>
                  <p className="text-slate-300 text-sm mb-4">{product.description}</p>
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-1 text-xs text-slate-400">
                        <BookOpen className="w-3 h-3 text-orange-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Download className="w-3 h-3" />
                        <span>{product.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{product.rating}</span>
                      </div>
                      <div className="text-orange-400 text-xs font-bold">{product.tech}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-black text-lg mb-1">{product.price}</div>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 font-black text-xs transition-all duration-300">
                        BUY EBOOK
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

    if (activeCategory === 'Mobile Apps') {
      // Mobile-focused layout
      return (
        <div className="grid lg:grid-cols-3 gap-4">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-purple-400/60 transition-all duration-300 overflow-hidden">
              <div className="relative h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-purple-400" />
                <div className="absolute top-2 right-2">
                  <div className="bg-purple-500 text-white px-2 py-1 text-xs font-black">MOBILE</div>
                </div>
                <div className="absolute bottom-2 left-2">
                  <div className="text-purple-400 text-xs font-bold">{product.tech}</div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-black text-sm font-mono mb-1">{product.name}</h3>
                <div className="text-purple-400 text-xs font-bold mb-2">{product.category}</div>
                <p className="text-slate-400 text-xs mb-3">{product.description}</p>
                <div className="space-y-1 mb-3">
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-1 text-xs text-slate-400">
                      <Smartphone className="w-3 h-3 text-purple-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <Download className="w-3 h-3" />
                      <span>{product.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <div className="text-green-400 font-black text-sm">{product.price}</div>
                </div>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 font-black text-xs transition-all duration-300">
                  DOWNLOAD APP
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeCategory === 'Tools') {
      // Tools-focused layout
      return (
        <div className="grid lg:grid-cols-2 gap-4">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-yellow-400/60 transition-all duration-300 p-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-black text-base font-mono">{product.name}</h3>
                  <div className="text-yellow-400 text-sm font-bold">{product.category}</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-black text-lg">{product.price}</div>
                  <div className="text-yellow-400 text-xs font-bold">{product.tech}</div>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">{product.description}</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {product.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-1 text-xs text-slate-400">
                    <Zap className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-xs text-slate-400">
                    <Download className="w-3 h-3" />
                    <span>{product.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-slate-400">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 font-black text-xs transition-all duration-300">
                  GET TOOL
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
        {filteredProducts.map((product, index) => {
          const IconComponent = product.icon;
          return (
            <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <div className="bg-slate-900/90 text-white px-2 py-1 text-xs font-black flex items-center space-x-1">
                    <IconComponent className="w-3 h-3" />
                    <span>{product.type.toUpperCase()}</span>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white font-black text-sm font-mono mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <div className="text-cyan-400 text-xs font-bold">{product.category}</div>
                    <div className="text-green-400 font-black text-sm">{product.price}</div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-slate-400 text-xs mb-2">{product.description}</p>
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 font-black text-xs transition-all duration-300 flex items-center justify-center space-x-1">
                  <ShoppingCart className="w-3 h-3" />
                  <span>BUY NOW</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-8 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Ultra Compact Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-slate-800/90 border border-cyan-500/40 px-4 py-1.5 mb-3 backdrop-blur-sm">
            <ShoppingCart className="w-3 h-3 mr-1.5 text-cyan-400" />
            <span className="text-cyan-400 font-black text-xs font-mono tracking-wider">PRIORITY #2: DEVELOPERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-2">
            PREMIUM <span className="text-cyan-400">DEVELOPMENT</span> PRODUCTS
          </h2>
          
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mb-3"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-4">
            Professional templates, programming guides, mobile apps, and developer tools
          </p>

          {/* Ultra Compact Category Filter */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 text-xs font-black transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-cyan-500 text-white shadow-lg' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Ultra Compact Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto mb-6">
            {[
              { icon: Package, value: "50+", label: "Products", color: "text-cyan-400" },
              { icon: Download, value: "200k+", label: "Downloads", color: "text-green-400" },
              { icon: Star, value: "4.9★", label: "Rating", color: "text-yellow-400" },
              { icon: Users, value: "15k+", label: "Users", color: "text-purple-400" }
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

        {/* NEW: Horizontal Carousel for Additional Content */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <Package className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-black text-sm font-mono">EXPLORE MORE DEVELOPMENT PRODUCTS</span>
          </div>
          
          <HorizontalCarousel className="h-96" itemClassName="min-w-full">
            <ProductsCarouselContent />
          </HorizontalCarousel>
        </div>

        {/* Ultra Compact CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 p-5 text-center">
          <h3 className="text-xl font-black text-white mb-2 font-mono">
            <span className="text-cyan-400">EVERYTHING</span> FOR DEVELOPERS
          </h3>
          <p className="text-sm text-slate-400 mb-3">
            Complete toolkit for developers and creators - templates, guides, apps, and tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link 
              to="/web-applications" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-5 py-2.5 font-black transition-all duration-300 flex items-center justify-center space-x-1.5 text-sm"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>BROWSE ALL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-5 py-2.5 font-black transition-all duration-300 text-sm">
              VIEW PRICING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
