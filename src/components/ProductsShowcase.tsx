
import React, { useState, useEffect } from 'react';
import { ArrowRight, Gamepad2, Code, Book, Zap, Download, Star, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsShowcase = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section className="relative py-20 overflow-hidden">
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop')`,
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/30 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        
        {/* Floating Code Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-sm animate-pulse"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${15 + (i * 15) % 70}%`,
              animationDelay: `${i * 0.8}s`,
              transform: `translateY(${scrollY * (0.05 + i * 0.01)}px)`
            }}
          >
            {['<div>', '</div>', '{ }', '( )', '[ ]', '=>', '&&', '||'][i]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 px-6 py-3 mb-6 shadow-lg" style={{ borderRadius: '8px' }}>
            <Star className="w-5 h-5 mr-3 text-cyan-400 animate-pulse" />
            <span className="text-sm font-bold text-cyan-300 tracking-wide font-mono">OUR PRODUCTS</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight font-mono mb-4">
            WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">BUILD</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Premium digital products developed with cutting-edge technology
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {productStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 text-center shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105" style={{ borderRadius: '12px' }}>
                  <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-2xl font-black text-white font-mono">{stat.value}</div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Products Grid - Enhanced Visual Design */}
        <div className="space-y-12 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="relative">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${product.bgColor} backdrop-blur-sm flex items-center justify-center mr-6 shadow-lg`} style={{ borderRadius: '16px' }}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-2 font-mono">
                      {product.category}
                    </h3>
                    <div className={`w-full h-1 bg-gradient-to-r ${product.color} rounded-full`}></div>
                  </div>
                  <div className="text-slate-400 text-sm font-mono">
                    {product.items.length} Products
                  </div>
                </div>

                {/* Products List */}
                <div className="grid lg:grid-cols-3 gap-6">
                  {product.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-slate-500/70 transition-all duration-300 p-6 shadow-lg hover:shadow-xl transform hover:scale-105"
                      style={{ borderRadius: '12px' }}
                    >
                      {/* Product Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                            {item.name}
                          </h4>
                          <span className={`inline-block bg-gradient-to-r ${product.color} text-white px-3 py-1 text-xs font-bold`} style={{ borderRadius: '6px' }}>
                            {item.tech}
                          </span>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span className="font-medium">{item.downloads}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-yellow-400 font-medium">{item.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button className={`w-full bg-gradient-to-r ${product.color} text-white px-4 py-3 font-bold text-sm hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg`} style={{ borderRadius: '8px' }}>
                        <span>VIEW DETAILS</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/web-applications" 
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-10 py-4 font-bold text-lg hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 space-x-3 transform hover:scale-105"
            style={{ borderRadius: '12px' }}
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

export default ProductsShowcase;
