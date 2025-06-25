
import React, { useState } from 'react';
import { ArrowRight, Star, Crown, Zap, Shield, Globe, Code, Database, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 'web-dashboard',
      title: 'Professional Dashboard Suite',
      category: 'webapp',
      type: 'Premium Web App',
      description: 'Advanced analytics and management dashboard with real-time data visualization and reporting tools.',
      features: ['Real-time Analytics', 'Custom Reports', 'Team Collaboration', 'API Integration'],
      pricing: '$29/month',
      status: 'live',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['React', 'FastAPI', 'MySQL'],
      rating: 4.8,
      users: '2.5k+',
      icon: Globe
    },
    {
      id: 'dev-tools',
      title: 'Developer Toolkit Pro',
      category: 'webapp',
      type: 'Premium Web App',
      description: 'Comprehensive development tools suite with code generation, testing utilities, and deployment automation.',
      features: ['Code Generator', 'Testing Suite', 'CI/CD Tools', 'Performance Monitor'],
      pricing: '$19/month',
      status: 'live',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tech: ['TypeScript', 'Node.js', 'Docker'],
      rating: 4.9,
      users: '1.8k+',
      icon: Code
    },
    {
      id: 'data-platform',
      title: 'Data Analytics Platform',
      category: 'webapp',
      type: 'Premium Web App',
      description: 'Enterprise-grade data processing and visualization platform with machine learning capabilities.',
      features: ['ML Models', 'Data Pipeline', 'Visualization', 'API Access'],
      pricing: '$49/month',
      status: 'beta',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['Python', 'PostgreSQL', 'Redis'],
      rating: 4.7,
      users: '890+',
      icon: Database
    },
    {
      id: 'mobile-companion',
      title: 'Mobile Companion App',
      category: 'mobile',
      type: 'Mobile Application',
      description: 'Cross-platform mobile app that syncs with our web applications for on-the-go access.',
      features: ['Offline Sync', 'Push Notifications', 'Biometric Auth', 'Cross-Platform'],
      pricing: 'Included',
      status: 'development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      tech: ['Flutter', 'Firebase', 'SQLite'],
      rating: 4.6,
      users: 'Coming Soon',
      icon: Smartphone
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Zap },
    { id: 'webapp', name: 'Web Apps', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'tools', name: 'Dev Tools', icon: Code }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-3 mb-6" style={{ borderRadius: '8px' }}>
            <Crown className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-bold text-yellow-300 tracking-wide font-mono">OUR PRODUCTS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            PREMIUM <span className="text-cyan-400">APPLICATIONS</span>
          </h2>
          
          <div className="w-24 h-0.5 bg-cyan-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Professional web applications and tools built by JBLinx Studio. 
            Subscribe to access our premium features and advanced functionality.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 font-bold text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg transform scale-105' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
                style={{ borderRadius: '8px' }}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product) => {
            const IconComponent = product.icon;
            return (
              <div 
                key={product.id}
                className="bg-slate-800 border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden group"
                style={{ borderRadius: '12px' }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold ${
                      product.status === 'live' ? 'bg-green-500 text-white' :
                      product.status === 'beta' ? 'bg-yellow-500 text-black' :
                      'bg-purple-500 text-white'
                    }`} style={{ borderRadius: '6px' }}>
                      {product.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500 text-black px-3 py-1 text-xs font-bold" style={{ borderRadius: '6px' }}>
                      <Crown className="w-3 h-3 inline mr-1" />
                      PREMIUM
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-slate-300">({product.users})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-cyan-500/20 flex items-center justify-center" style={{ borderRadius: '6px' }}>
                      <IconComponent className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
                      {product.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2 font-mono">
                    {product.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400" style={{ borderRadius: '2px' }}></div>
                        <span className="text-xs text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tech.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-slate-700 text-slate-300 px-2 py-1 text-xs" 
                        style={{ borderRadius: '4px' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div>
                      <div className="text-2xl font-black text-white">{product.pricing}</div>
                      {product.pricing !== 'Included' && product.pricing !== 'Coming Soon' && (
                        <div className="text-xs text-slate-400">per user</div>
                      )}
                    </div>
                    
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 font-bold text-sm transition-all duration-300 flex items-center space-x-2" style={{ borderRadius: '6px' }}>
                      <span>{product.status === 'development' ? 'Preview' : 'Access'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-slate-800 border border-slate-700 p-8 max-w-2xl mx-auto" style={{ borderRadius: '12px' }}>
            <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-black text-white mb-4 font-mono">
              PREMIUM ACCESS
            </h3>
            <p className="text-slate-300 mb-6">
              Get unlimited access to all our premium web applications and tools. 
              Professional features for serious developers and businesses.
            </p>
            <Link 
              to="/premium" 
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 font-bold transition-all duration-300 hover:shadow-lg"
              style={{ borderRadius: '8px' }}
            >
              <Crown className="w-5 h-5 mr-2" />
              <span>VIEW PREMIUM PLANS</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
