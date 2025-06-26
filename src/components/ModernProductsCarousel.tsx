
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Zap, Book, Download, Star, Users, TrendingUp, Monitor, Smartphone, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModernProductsCarousel = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const productCategories = [
    {
      category: "Web Applications",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-400/30",
      description: "Full-stack web applications with modern frameworks",
      items: [
        { 
          name: "TaskFlow Pro", 
          downloads: "8.5k", 
          rating: "4.9", 
          tech: "React", 
          description: "Advanced project management with real-time collaboration",
          features: ["Real-time sync", "Team workspaces", "Analytics"],
          price: "$29/mo"
        },
        { 
          name: "DataViz Analytics", 
          downloads: "4.2k", 
          rating: "4.8", 
          tech: "Vue.js", 
          description: "Business intelligence and data visualization platform",
          features: ["Custom dashboards", "Data pipelines", "Export tools"],
          price: "$49/mo"
        },
        { 
          name: "E-Commerce Suite", 
          downloads: "6.7k", 
          rating: "4.9", 
          tech: "Next.js", 
          description: "Complete e-commerce solution with payment integration",
          features: ["Payment gateway", "Inventory sync", "Mobile optimized"],
          price: "$39/mo"
        }
      ]
    },
    {
      category: "Developer Tools",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-400/30",
      description: "Productivity tools and development utilities",
      items: [
        { 
          name: "FastAPI Boilerplate", 
          downloads: "12k", 
          rating: "5.0", 
          tech: "Python", 
          description: "Production-ready FastAPI template with authentication",
          features: ["JWT auth", "Database ORM", "API docs"],
          price: "Free"
        },
        { 
          name: "React Component Library", 
          downloads: "9.3k", 
          rating: "4.8", 
          tech: "TypeScript", 
          description: "Reusable UI components with TypeScript support",
          features: ["50+ components", "Dark mode", "Accessibility"],
          price: "$19/mo"
        },
        { 
          name: "Database Migration Tool", 
          downloads: "5.1k", 
          rating: "4.9", 
          tech: "Node.js", 
          description: "Seamless database schema migrations and versioning",
          features: ["Schema versioning", "Rollback support", "Multi-DB"],
          price: "$15/mo"
        }
      ]
    },
    {
      category: "Digital Content",
      icon: Book,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-400/30",
      description: "Educational content and learning resources",
      items: [
        { 
          name: "Game Development Mastery", 
          downloads: "7.8k", 
          rating: "4.9", 
          tech: "Course", 
          description: "Complete game development course from beginner to pro",
          features: ["40+ hours", "Source code", "Community"],
          price: "$99"
        },
        { 
          name: "Web Dev Bootcamp", 
          downloads: "11.2k", 
          rating: "5.0", 
          tech: "Video", 
          description: "Full-stack web development comprehensive training",
          features: ["Project-based", "Mentorship", "Job placement"],
          price: "$199"
        },
        { 
          name: "Tech Blog Articles", 
          downloads: "15.6k", 
          rating: "4.8", 
          tech: "Blog", 
          description: "In-depth technical articles and tutorials",
          features: ["Weekly posts", "Code examples", "Community"],
          price: "Free"
        }
      ]
    }
  ];

  const productStats = [
    { label: "Products", value: "30+", icon: TrendingUp, color: "cyan" },
    { label: "Downloads", value: "100k+", icon: Download, color: "green" },
    { label: "Rating", value: "4.9★", icon: Star, color: "yellow" },
    { label: "Users", value: "25k+", icon: Users, color: "purple" }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % productCategories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, productCategories.length]);

  const currentCategory = productCategories[activeCategory];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 px-8 py-3 mb-8 backdrop-blur-sm" style={{ borderRadius: '12px' }}>
            <Star className="w-6 h-6 mr-3 text-cyan-400 animate-pulse" />
            <span className="text-lg font-bold text-cyan-300 tracking-wide font-mono">OUR PRODUCTS</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight font-mono mb-6">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-600">BUILD</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Premium digital products developed with cutting-edge technology. 
            Professional tools, applications, and resources for modern developers.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {productStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 text-center hover:border-${stat.color}-400/50 transition-all duration-300 group hover:scale-105`} style={{ borderRadius: '16px' }}>
                <IconComponent className={`w-8 h-8 text-${stat.color}-400 mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <div className="text-3xl font-black text-white font-mono mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-2" style={{ borderRadius: '16px' }}>
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveCategory(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`flex items-center space-x-3 px-6 py-3 font-bold text-sm transition-all duration-300 ${
                    index === activeCategory
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                  style={{ borderRadius: '12px' }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Showcase */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 mb-8" style={{ borderRadius: '20px' }}>
            <div className="text-center mb-8">
              <div className={`inline-flex items-center bg-gradient-to-r ${currentCategory.color} text-white px-6 py-3 mb-4`} style={{ borderRadius: '12px' }}>
                <currentCategory.icon className="w-6 h-6 mr-3" />
                <span className="font-bold text-lg">{currentCategory.category}</span>
              </div>
              <p className="text-slate-300 text-lg">{currentCategory.description}</p>
            </div>

            {/* Products Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {currentCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 border border-slate-600 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group hover:scale-105"
                  style={{ borderRadius: '16px' }}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white font-bold text-lg font-mono group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h4>
                      <span className="bg-slate-700 text-slate-300 px-3 py-1 text-sm font-medium" style={{ borderRadius: '6px' }}>
                        {item.tech}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-xs text-slate-400">
                          <Zap className="w-3 h-3 text-cyan-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Stats & Price */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{item.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span className="text-yellow-400">{item.rating}</span>
                        </div>
                      </div>
                      <div className="text-green-400 font-bold">{item.price}</div>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-bold flex items-center justify-center space-x-2" style={{ borderRadius: '10px' }}>
                      <Monitor className="w-4 h-4" />
                      <span>VIEW DETAILS</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/web-applications" 
            className="inline-flex items-center bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-500 text-white px-10 py-5 font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 space-x-3 hover:scale-105"
            style={{ borderRadius: '16px' }}
          >
            <Code className="w-6 h-6" />
            <span>EXPLORE ALL PRODUCTS</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModernProductsCarousel;
