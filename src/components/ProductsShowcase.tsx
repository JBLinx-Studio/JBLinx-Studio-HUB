
import React, { useState } from 'react';
import { 
  Code, 
  Heart, 
  Gamepad2, 
  Building2, 
  Globe, 
  Smartphone, 
  Monitor, 
  ArrowRight, 
  Star, 
  Users, 
  Download,
  ExternalLink,
  Github,
  Play,
  Zap
} from 'lucide-react';

const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'CodeFusion',
      category: 'development',
      description: 'Advanced code collaboration platform with real-time editing and AI assistance',
      icon: Code,
      color: 'emerald',
      status: 'Live',
      users: '12.5K',
      rating: 4.9,
      platforms: ['Web', 'Desktop', 'Mobile'],
      features: ['Real-time Collaboration', 'AI Code Assistant', 'Version Control', 'Cloud Sync'],
      links: {
        demo: '#',
        github: '#',
        download: '#'
      }
    },
    {
      id: 2,
      name: 'VitalitySync',
      category: 'health',
      description: 'Comprehensive health and wellness tracking with smart analytics',
      icon: Heart,
      color: 'red',
      status: 'Beta',
      users: '8.2K',
      rating: 4.7,
      platforms: ['Mobile', 'Web', 'Wearables'],
      features: ['Health Tracking', 'Smart Analytics', 'Goal Setting', 'Social Features'],
      links: {
        demo: '#',
        github: '#',
        download: '#'
      }
    },
    {
      id: 3,
      name: 'MindMate',
      category: 'gaming',
      description: 'AI-powered puzzle games that adapt to enhance cognitive abilities',
      icon: Gamepad2,
      color: 'purple',
      status: 'Live',
      users: '25.1K',
      rating: 4.8,
      platforms: ['PC', 'Mobile', 'Web'],
      features: ['Adaptive AI', 'Cognitive Training', 'Progress Tracking', 'Multiplayer'],
      links: {
        demo: '#',
        github: '#',
        download: '#'
      }
    },
    {
      id: 4,
      name: 'NestCore',
      category: 'enterprise',
      description: 'Enterprise resource planning with intelligent automation and analytics',
      icon: Building2,
      color: 'orange',
      status: 'Live',
      users: '5.8K',
      rating: 4.9,
      platforms: ['Web', 'Desktop', 'Mobile'],
      features: ['Resource Planning', 'Automation', 'Analytics', 'Integration APIs'],
      links: {
        demo: '#',
        github: '#',
        download: '#'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'ALL PRODUCTS', icon: Globe },
    { id: 'development', name: 'DEVELOPMENT', icon: Code },
    { id: 'gaming', name: 'GAMING', icon: Gamepad2 },
    { id: 'health', name: 'HEALTH', icon: Heart },
    { id: 'enterprise', name: 'ENTERPRISE', icon: Building2 }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: 'text-emerald-400 border-emerald-400/30 bg-emerald-500/10',
      red: 'text-red-400 border-red-400/30 bg-red-500/10',
      purple: 'text-purple-400 border-purple-400/30 bg-purple-500/10',
      orange: 'text-orange-400 border-orange-400/30 bg-orange-500/10'
    };
    return colorMap[color] || colorMap.emerald;
  };

  const getStatusColor = (status: string) => {
    return status === 'Live' 
      ? 'bg-green-500/20 border-green-500/30 text-green-400'
      : 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400';
  };

  return (
    <section className="py-16 bg-zinc-950 relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
        
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-400/40 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 border border-purple-400/30 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-zinc-800/90 border border-purple-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
            <Building2 className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest">FLAGSHIP PRODUCTS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 font-mono">
            INNOVATIVE <span className="text-purple-400">SOFTWARE SOLUTIONS</span>
          </h2>
          
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
          
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Cutting-edge applications designed to enhance productivity, creativity, and user experience across multiple platforms
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 font-bold text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-500/20 border border-purple-400/50 text-purple-400'
                    : 'bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 hover:text-white hover:border-zinc-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-mono">{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => {
            const IconComponent = product.icon;
            return (
              <div key={product.id} className="group bg-zinc-900/50 border border-zinc-700/50 backdrop-blur-sm overflow-hidden hover:border-zinc-600 transition-all duration-300 hover:scale-105">
                {/* Product Header */}
                <div className="p-6 border-b border-zinc-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 border ${getColorClasses(product.color)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`px-2 py-1 text-xs font-bold font-mono ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-black text-xl mb-2 font-mono">{product.name}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{product.description}</p>
                </div>

                {/* Product Stats */}
                <div className="p-4 border-b border-zinc-700/50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-white font-bold text-sm">{product.users}</div>
                      <div className="text-zinc-400 text-xs font-mono">USERS</div>
                    </div>
                    <div>
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white font-bold text-sm">{product.rating}</span>
                      </div>
                      <div className="text-zinc-400 text-xs font-mono">RATING</div>
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">{product.platforms.length}</div>
                      <div className="text-zinc-400 text-xs font-mono">PLATFORMS</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-4 border-b border-zinc-700/50">
                  <div className="space-y-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                        <span className="text-zinc-300 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-4 space-y-2">
                  <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2">
                    <Play className="w-4 h-4" />
                    <span>TRY NOW</span>
                  </button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button className="border border-zinc-600 text-zinc-400 hover:text-white hover:border-zinc-500 px-3 py-1 text-xs font-bold transition-all duration-300 flex items-center justify-center space-x-1">
                      <Github className="w-3 h-3" />
                      <span>CODE</span>
                    </button>
                    <button className="border border-zinc-600 text-zinc-400 hover:text-white hover:border-zinc-500 px-3 py-1 text-xs font-bold transition-all duration-300 flex items-center justify-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>DOWNLOAD</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="inline-flex items-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 font-black transition-all duration-300 space-x-2 shadow-lg">
            <Zap className="w-4 h-4" />
            <span>EXPLORE ALL PRODUCTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
