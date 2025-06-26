
import React from 'react';
import { ArrowRight, Gamepad2, Code, Book, Zap, Download, Star, Users, TrendingUp } from 'lucide-react';
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
        { name: "Task Management Pro", downloads: "8.5k", rating: "4.9", tech: "React" },
        { name: "Data Analytics Suite", downloads: "4.2k", rating: "4.8", tech: "Next.js" },
        { name: "E-Commerce Platform", downloads: "6.7k", rating: "4.9", tech: "Vue.js" }
      ]
    },
    {
      category: "Developer Tools",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-400/30",
      items: [
        { name: "FastAPI Template", downloads: "12k", rating: "5.0", tech: "Python" },
        { name: "React Component Lib", downloads: "9.3k", rating: "4.8", tech: "TypeScript" },
        { name: "DB Migration Tool", downloads: "5.1k", rating: "4.9", tech: "Node.js" }
      ]
    },
    {
      category: "Digital Content",
      icon: Book,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-400/30",
      items: [
        { name: "Game Dev Handbook", downloads: "7.8k", rating: "4.9", tech: "eBook" },
        { name: "Web Dev Mastery", downloads: "11.2k", rating: "5.0", tech: "Course" },
        { name: "Tech Articles", downloads: "15.6k", rating: "4.8", tech: "Blog" }
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

        {/* Products Grid - More Compact */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className={`bg-slate-800 border border-slate-700 hover:${product.borderColor} transition-all duration-300 overflow-hidden group`}
                style={{ borderRadius: '8px' }}
              >
                {/* Header */}
                <div className="p-4 border-b border-slate-700">
                  <div className={`w-10 h-10 ${product.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`} style={{ borderRadius: '6px' }}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-black text-white mb-1 group-hover:text-cyan-300 transition-colors font-mono">
                    {product.category}
                  </h3>
                  <div className="text-xs text-slate-400">{product.items.length} Products</div>
                </div>

                {/* Items - More Compact */}
                <div className="p-4 space-y-3">
                  {product.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-slate-900/50 border border-slate-600 p-3 hover:border-slate-500 transition-colors" style={{ borderRadius: '6px' }}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-white font-medium text-sm line-clamp-1">
                          {item.name}
                        </div>
                        <span className="bg-slate-700 text-slate-300 px-2 py-1 text-xs font-medium" style={{ borderRadius: '4px' }}>
                          {item.tech}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span>{item.downloads}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400" />
                            <span className="text-yellow-400">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 pt-0">
                  <Link 
                    to="/web-applications" 
                    className="w-full bg-slate-700 text-white px-4 py-2 hover:bg-cyan-500 transition-all duration-300 text-sm font-bold flex items-center justify-center space-x-2 group"
                    style={{ borderRadius: '6px' }}
                  >
                    <span>VIEW ALL</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
