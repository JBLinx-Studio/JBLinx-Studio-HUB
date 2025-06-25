
import React from 'react';
import { ArrowRight, Gamepad2, Code, Book, Zap, Download, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsShowcase = () => {
  const products = [
    {
      category: "Premium Games",
      icon: Gamepad2,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/20",
      items: [
        { name: "Survival Horror Game", downloads: "5.2k", rating: "4.8★" },
        { name: "RTS Strategy Game", downloads: "3.1k", rating: "4.9★" },
        { name: "Action Adventure", downloads: "2.8k", rating: "4.7★" }
      ]
    },
    {
      category: "Web Applications",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
      items: [
        { name: "Task Management Pro", downloads: "8.5k", rating: "4.9★" },
        { name: "Data Analytics Suite", downloads: "4.2k", rating: "4.8★" },
        { name: "E-Commerce Platform", downloads: "6.7k", rating: "4.9★" }
      ]
    },
    {
      category: "Developer Tools",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      items: [
        { name: "FastAPI Template", downloads: "12k", rating: "5.0★" },
        { name: "React Component Library", downloads: "9.3k", rating: "4.8★" },
        { name: "Database Migration Tool", downloads: "5.1k", rating: "4.9★" }
      ]
    },
    {
      category: "Digital Content",
      icon: Book,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/20",
      items: [
        { name: "Game Dev Handbook", downloads: "7.8k", rating: "4.9★" },
        { name: "Web Dev Mastery", downloads: "11.2k", rating: "5.0★" },
        { name: "Technical Articles", downloads: "15.6k", rating: "4.8★" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-6" style={{ borderRadius: '8px' }}>
            <Star className="w-4 h-4 mr-2 text-yellow-400" />
            <span className="text-sm font-bold text-yellow-300 tracking-wide font-mono">OUR PRODUCTS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            WHAT WE <span className="text-cyan-400">BUILD</span>
          </h2>
          
          <div className="w-24 h-0.5 bg-cyan-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Premium digital products developed in-house with cutting-edge technology
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group"
                style={{ borderRadius: '8px' }}
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-700">
                  <div className={`w-12 h-12 ${product.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`} style={{ borderRadius: '8px' }}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors font-mono">
                    {product.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="p-6 space-y-4">
                  {product.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-medium text-sm line-clamp-1">
                          {item.name}
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span>{item.downloads}</span>
                          </div>
                          <span>•</span>
                          <span className="text-yellow-400">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-6 pt-0">
                  <Link 
                    to="/blog" 
                    className="w-full bg-slate-700 text-white px-4 py-3 hover:bg-cyan-500 transition-all duration-300 text-sm font-bold flex items-center justify-center space-x-2 group"
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

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-slate-800 border border-slate-700 p-6" style={{ borderRadius: '8px' }}>
            <div className="text-3xl font-black text-cyan-400 font-mono mb-2">50k+</div>
            <div className="text-slate-400 font-medium">Total Downloads</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6" style={{ borderRadius: '8px' }}>
            <div className="text-3xl font-black text-purple-400 font-mono mb-2">30+</div>
            <div className="text-slate-400 font-medium">Products Released</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6" style={{ borderRadius: '8px' }}>
            <div className="text-3xl font-black text-green-400 font-mono mb-2">4.9★</div>
            <div className="text-slate-400 font-medium">Average Rating</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6" style={{ borderRadius: '8px' }}>
            <div className="text-3xl font-black text-yellow-400 font-mono mb-2">24/7</div>
            <div className="text-slate-400 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
