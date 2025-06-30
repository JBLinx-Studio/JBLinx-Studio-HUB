
import React, { useState } from 'react';
import { ArrowRight, Code, Book, Zap, Download, Star, Users, TrendingUp, Smartphone, Database, Monitor, Globe, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const productCategories = ['All', 'Templates', 'eBooks', 'Mobile Apps', 'Tools'];

  const products = [
    // Web App Templates
    {
      name: "React SaaS Template",
      category: "Web Templates",
      type: "template",
      downloads: "12.5k",
      rating: "4.9",
      price: "$49.99",
      tech: "React + TypeScript",
      description: "Complete SaaS application template with authentication, billing, and dashboard",
      features: ["Authentication", "Stripe Integration", "Admin Dashboard", "Responsive Design"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      name: "FastAPI Backend Kit",
      category: "Backend Templates", 
      type: "template",
      downloads: "8.3k",
      rating: "4.8",
      price: "$39.99",
      tech: "Python + FastAPI",
      description: "Production-ready FastAPI template with MySQL, Redis, and Docker setup",
      features: ["JWT Auth", "Database ORM", "API Documentation", "Docker Ready"],
      icon: Database,
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      name: "Flutter Mobile Kit",
      category: "Mobile Templates",
      type: "template", 
      downloads: "6.7k",
      rating: "4.9",
      price: "$44.99",
      tech: "Flutter + Dart",
      description: "Cross-platform mobile app template with Firebase integration",
      features: ["Firebase Auth", "Push Notifications", "Offline Support", "Material Design"],
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    },

    // eBooks
    {
      name: "Full Stack Development Guide",
      category: "Programming eBooks",
      type: "ebook",
      downloads: "15.2k",
      rating: "5.0", 
      price: "$29.99",
      tech: "500+ Pages",
      description: "Comprehensive guide covering React, Node.js, databases, and deployment",
      features: ["14 Chapters", "Code Examples", "Video Supplements", "Project Templates"],
      icon: Book,
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop"
    },
    {
      name: "Game Development Mastery",
      category: "Game Dev eBooks",
      type: "ebook",
      downloads: "11.8k",
      rating: "4.9",
      price: "$34.99", 
      tech: "Unity + C#",
      description: "Master Unity game development with real-world projects and techniques",
      features: ["Unity Basics", "Advanced Scripting", "AI Systems", "Multiplayer"],
      icon: Book,
      color: "from-purple-500 to-indigo-500", 
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop"
    },

    // Mobile Apps
    {
      name: "TaskFlow Mobile",
      category: "Productivity Apps",
      type: "mobile",
      downloads: "25.1k",
      rating: "4.8",
      price: "$4.99",
      tech: "iOS + Android",
      description: "Premium task management app with team collaboration features",
      features: ["Real-time Sync", "Team Workspaces", "Offline Mode", "Smart Notifications"],
      icon: Smartphone,
      color: "from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      name: "CodeSnap Editor",
      category: "Developer Tools",
      type: "mobile",
      downloads: "18.7k", 
      rating: "4.7",
      price: "$6.99",
      tech: "React Native",
      description: "Mobile code editor with syntax highlighting and Git integration",
      features: ["50+ Languages", "Git Integration", "Cloud Sync", "Themes"],
      icon: Code,
      color: "from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop"
    },

    // Developer Tools
    {
      name: "API Documentation Generator",
      category: "Developer Tools",
      type: "tool",
      downloads: "9.4k",
      rating: "4.9",
      price: "$24.99",
      tech: "Node.js CLI",
      description: "Automatically generate beautiful API documentation from your code",
      features: ["Auto-Generate", "Multiple Formats", "Custom Themes", "Deploy Ready"],
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

  const productStats = [
    { label: "Products", value: "50+", icon: TrendingUp },
    { label: "Downloads", value: "200k+", icon: Download },
    { label: "Rating", value: "4.9★", icon: Star },
    { label: "Developers", value: "15k+", icon: Users }
  ];

  return (
    <section className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-4" style={{ borderRadius: '8px' }}>
            <ShoppingCart className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-300 tracking-wide font-mono">DIGITAL MARKETPLACE</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            PREMIUM <span className="text-cyan-400">PRODUCTS</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-cyan-400 mx-auto mb-4"></div>
          
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Professional templates, comprehensive guides, mobile apps, and developer tools to accelerate your projects
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
                style={{ borderRadius: '6px' }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {productStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/50 border border-slate-700 p-3 text-center" style={{ borderRadius: '6px' }}>
                  <IconComponent className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                  <div className="text-lg font-black text-white font-mono">{stat.value}</div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {filteredProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <article
                key={index}
                className="bg-slate-800 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group"
                style={{ borderRadius: '8px' }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs font-bold flex items-center space-x-1 backdrop-blur-sm" style={{ borderRadius: '4px' }}>
                      <IconComponent className="w-3 h-3" />
                      <span>{product.type.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                      <Download className="w-3 h-3" />
                      <span>{product.downloads}</span>
                    </div>
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>

                  {/* Price & Category */}
                  <div className="absolute bottom-3 left-3 right-3">
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
                        <div className="text-green-400 font-bold text-sm">{product.price}</div>
                        <div className="text-slate-400 text-xs">{product.tech}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <div className="text-slate-300 text-xs font-bold mb-2">KEY FEATURES</div>
                    <div className="grid grid-cols-2 gap-1">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-1 text-xs text-slate-400">
                          <Zap className="w-2 h-2 text-cyan-400" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-bold flex items-center justify-center space-x-2 text-sm" style={{ borderRadius: '6px' }}>
                      <ShoppingCart className="w-4 h-4" />
                      <span>BUY NOW</span>
                    </button>
                    <button className="bg-slate-700 text-white px-3 py-2 hover:bg-slate-600 transition-all duration-300 flex items-center justify-center" style={{ borderRadius: '6px' }}>
                      <Monitor className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Enhanced Call to Action */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 p-8 text-center" style={{ borderRadius: '12px' }}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-black text-white mb-4 font-mono">
              <span className="text-cyan-400">EVERYTHING</span> YOU NEED TO BUILD
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              From game development to full-stack web applications, mobile apps to comprehensive learning resources - 
              we've got everything covered to accelerate your development journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/web-applications" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                style={{ borderRadius: '8px' }}
              >
                <Globe className="w-5 h-5" />
                <span>BROWSE ALL PRODUCTS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 font-bold hover:bg-cyan-400 hover:text-white transition-all duration-300" style={{ borderRadius: '8px' }}>
                SUBSCRIPTION PLANS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
