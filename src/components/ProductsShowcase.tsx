
import React from 'react';
import { ArrowRight, Gamepad2, Code, Book, Zap, Download, Star, Users, TrendingUp, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsShowcase = () => {
  const products = [
    {
      category: "Web Applications",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-400/30",
      items: [
        { name: "Task Management Pro", downloads: "8.5k", rating: "4.9", tech: "React", description: "Advanced project management with team collaboration" },
        { name: "Data Analytics Suite", downloads: "4.2k", rating: "4.8", tech: "Next.js", description: "Powerful business intelligence platform" },
        { name: "E-Commerce Platform", downloads: "6.7k", rating: "4.9", tech: "Vue.js", description: "Complete online store solution" }
      ]
    },
    {
      category: "Developer Tools",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-400/30",
      items: [
        { name: "FastAPI Template", downloads: "12k", rating: "5.0", tech: "Python", description: "Production-ready API boilerplate" },
        { name: "React Component Lib", downloads: "9.3k", rating: "4.8", tech: "TypeScript", description: "Reusable UI component library" },
        { name: "DB Migration Tool", downloads: "5.1k", rating: "4.9", tech: "Node.js", description: "Database schema management utility" }
      ]
    },
    {
      category: "Digital Content",
      icon: Book,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-400/30",
      items: [
        { name: "Game Dev Handbook", downloads: "7.8k", rating: "4.9", tech: "eBook", description: "Complete guide to game development" },
        { name: "Web Dev Mastery", downloads: "11.2k", rating: "5.0", tech: "Course", description: "Comprehensive web development course" },
        { name: "Tech Articles", downloads: "15.6k", rating: "4.8", tech: "Blog", description: "Latest insights and tutorials" }
      ]
    }
  ];

  const productStats = [
    { label: "Products", value: "30+", icon: TrendingUp },
    { label: "Downloads", value: "100k+", icon: Download },
    { label: "Rating", value: "4.9★", icon: Star },
    { label: "Users", value: "25k+", icon: Users }
  ];

  return (
    <section className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-4" style={{ borderRadius: '8px' }}>
            <Star className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-300 tracking-wide font-mono">OUR PRODUCTS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            WHAT WE <span className="text-cyan-400">BUILD</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-cyan-400 mx-auto mb-4"></div>
          
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            Premium digital products developed with cutting-edge technology
          </p>

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

        {/* Products Categories */}
        <div className="space-y-8 mb-8">
          {products.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="group">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`} style={{ borderRadius: '8px' }}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors font-mono">
                      {category.category}
                    </h3>
                    <div className="text-sm text-slate-400">{category.items.length} Products Available</div>
                  </div>
                  <div className="flex-1 border-t border-slate-700"></div>
                </div>

                {/* Products List */}
                <div className="space-y-4 ml-16">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group/item">
                      <div className="flex items-center justify-between p-4 hover:bg-slate-800/30 transition-all duration-300" style={{ borderRadius: '8px' }}>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
                            <h4 className="text-lg font-bold text-white group-hover/item:text-cyan-300 transition-colors">
                              {item.name}
                            </h4>
                            <span className="bg-slate-700 text-slate-300 px-3 py-1 text-xs font-medium" style={{ borderRadius: '6px' }}>
                              {item.tech}
                            </span>
                          </div>
                          <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-slate-500">
                            <div className="flex items-center space-x-1">
                              <Download className="w-3 h-3" />
                              <span>{item.downloads}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-yellow-400" />
                              <span className="text-yellow-400">{item.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Monitor className="w-3 h-3" />
                              <Smartphone className="w-3 h-3" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <button className="bg-slate-700 text-white px-4 py-2 hover:bg-cyan-500 transition-all duration-300 text-sm font-bold opacity-0 group-hover/item:opacity-100" style={{ borderRadius: '6px' }}>
                            VIEW
                          </button>
                          <ArrowRight className="w-4 h-4 text-slate-500 group-hover/item:text-cyan-400 group-hover/item:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                      
                      {/* Item Divider */}
                      {itemIndex < category.items.length - 1 && (
                        <div className="ml-4 border-l border-slate-700 h-4"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Category Divider */}
                {categoryIndex < products.length - 1 && (
                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-700"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <div className="bg-slate-950 px-4">
                        <div className="w-8 h-8 bg-slate-800 flex items-center justify-center" style={{ borderRadius: '50%' }}>
                          <div className="w-2 h-2 bg-cyan-400" style={{ borderRadius: '50%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/web-applications" 
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 space-x-2"
            style={{ borderRadius: '8px' }}
          >
            <Code className="w-5 h-5" />
            <span>EXPLORE ALL PRODUCTS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
