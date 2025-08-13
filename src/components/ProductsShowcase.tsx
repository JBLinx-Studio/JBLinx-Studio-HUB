
import React, { useState } from 'react';
import { ArrowRight, ShoppingCart, Package, Download, Star, Users, TrendingUp, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './products/ProductCard';
import ProductFilters from './products/ProductFilters';

const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      name: "React SaaS Starter Kit Pro",
      category: "Premium Web Templates",
      type: "template",
      downloads: "15.2k",
      rating: "4.9",
      price: "$79.99",
      tech: "React + TypeScript",
      description: "Complete SaaS template with authentication, billing, dashboard, and admin panel. Production-ready with modern design.",
      features: ["JWT Authentication", "Stripe Integration", "Admin Dashboard", "Responsive Design", "TypeScript Support", "API Documentation"],
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      tags: ["React", "SaaS", "TypeScript", "Stripe"],
      version: "v3.2.1",
      lastUpdated: "2024-01-15"
    },
    {
      name: "FastAPI Enterprise Backend",
      category: "Backend Templates", 
      type: "template",
      downloads: "11.8k",
      rating: "4.8",
      price: "$59.99",
      tech: "Python + FastAPI",
      description: "Production-ready FastAPI backend with MySQL, Redis, Docker, and comprehensive API documentation.",
      features: ["FastAPI Framework", "MySQL + SQLAlchemy", "Redis Caching", "Docker Compose", "JWT Authentication", "API Testing"],
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
      tags: ["Python", "FastAPI", "Docker", "MySQL"],
      version: "v2.1.0",
      lastUpdated: "2024-01-12"
    },
    {
      name: "Flutter E-Commerce Complete",
      category: "Mobile App Templates",
      type: "template", 
      downloads: "9.3k",
      rating: "4.9",
      price: "$69.99",
      tech: "Flutter + Dart",
      description: "Full-featured e-commerce mobile app with payment integration, inventory management, and admin panel.",
      features: ["Payment Gateway", "Push Notifications", "Inventory Management", "User Authentication", "Order Tracking", "Admin Panel"],
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop",
      tags: ["Flutter", "E-commerce", "Mobile", "Payment"],
      version: "v1.8.5",
      lastUpdated: "2024-01-10"
    },
    {
      name: "Modern Web Development Handbook",
      category: "Programming Guides",
      type: "ebook",
      downloads: "22.1k",
      rating: "5.0", 
      price: "$39.99",
      tech: "600+ Pages",
      description: "Comprehensive guide covering React, Node.js, databases, deployment, and modern development practices.",
      features: ["20 Detailed Chapters", "100+ Code Examples", "Video Tutorials", "Project Templates", "Lifetime Updates", "Community Access"],
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
      tags: ["Programming", "Web Dev", "React", "Node.js"],
      version: "v4.0",
      lastUpdated: "2024-01-08"
    },
    {
      name: "TaskFlow Pro Mobile",
      category: "Productivity Apps",
      type: "mobile",
      downloads: "45.3k",
      rating: "4.7",
      price: "$9.99",
      tech: "iOS + Android",
      description: "Premium task management app with team collaboration, project tracking, and advanced analytics.",
      features: ["Team Collaboration", "Project Analytics", "Offline Sync", "Smart Notifications", "Time Tracking", "Custom Workflows"],
      color: "from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop",
      tags: ["Mobile", "Productivity", "Teams", "Analytics"],
      version: "v2.3.1",
      lastUpdated: "2024-01-14"
    },
    {
      name: "API Documentation Generator Pro",
      category: "Developer Tools",
      type: "tool",
      downloads: "18.7k",
      rating: "4.9",
      price: "$49.99",
      tech: "Node.js CLI",
      description: "Auto-generate beautiful, interactive API documentation with testing capabilities and multiple export formats.",
      features: ["Auto Documentation", "Interactive Testing", "Multiple Themes", "Export Options", "Live Updates", "Team Collaboration"],
      color: "from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
      tags: ["Developer", "API", "Documentation", "CLI"],
      version: "v1.5.2",
      lastUpdated: "2024-01-13"
    }
  ];

  const filteredProducts = React.useMemo(() => {
    let filtered = products.filter(product => {
      if (activeCategory === 'All') return true;
      if (activeCategory === 'Templates') return product.type === 'template';
      if (activeCategory === 'eBooks') return product.type === 'ebook';
      if (activeCategory === 'Mobile Apps') return product.type === 'mobile';
      if (activeCategory === 'Tools') return product.type === 'tool';
      return true;
    });

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return parseFloat(b.rating) - parseFloat(a.rating);
        case 'downloads':
          return parseFloat(b.downloads.replace('k', '')) - parseFloat(a.downloads.replace('k', ''));
        case 'price-low':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
        case 'newest':
          return new Date(b.lastUpdated || '').getTime() - new Date(a.lastUpdated || '').getTime();
        default: // popular
          return parseFloat(b.downloads.replace('k', '')) - parseFloat(a.downloads.replace('k', ''));
      }
    });

    return filtered;
  }, [activeCategory, searchTerm, sortBy]);

  return (
    <section className="py-12 bg-gradient-to-b from-zinc-900 to-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-zinc-800/90 border border-cyan-500/40 px-4 py-2 mb-4 backdrop-blur-sm">
            <ShoppingCart className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-cyan-400 font-black text-sm font-mono tracking-wider">PRIORITY #2: DEVELOPERS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            PREMIUM <span className="text-cyan-400">DEVELOPMENT</span> MARKETPLACE
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          
          <p className="text-base text-zinc-400 max-w-2xl mx-auto mb-6">
            Professional templates, comprehensive guides, mobile applications, and powerful developer tools for modern development teams
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {[
              { icon: Package, value: "50+", label: "Products", color: "text-cyan-400" },
              { icon: Download, value: "200k+", label: "Downloads", color: "text-green-400" },
              { icon: Star, value: "4.9★", label: "Avg Rating", color: "text-yellow-400" },
              { icon: Users, value: "25k+", label: "Developers", color: "text-purple-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/70 border border-zinc-700 p-4 text-center backdrop-blur-sm hover:border-zinc-600 transition-colors">
                  <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-lg font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-zinc-500 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Filters */}
        <ProductFilters
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Products Grid/List */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white font-bold">
              Showing {filteredProducts.length} products
              {searchTerm && <span className="text-cyan-400 ml-2">for "{searchTerm}"</span>}
            </div>
            <div className="text-zinc-400 text-sm">
              Sorted by: <span className="text-cyan-400 font-bold">{sortBy.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
            </div>
          </div>

          <div className={`${
            viewMode === 'grid' 
              ? 'grid lg:grid-cols-3 gap-6' 
              : 'space-y-4'
          }`}>
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.name}
                product={product}
                index={index}
                layoutType={viewMode}
              />
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 border border-zinc-600 p-8 text-center">
          <h3 className="text-2xl font-black text-white mb-3 font-mono">
            <span className="text-cyan-400">EVERYTHING</span> FOR MODERN DEVELOPERS
          </h3>
          <p className="text-base text-zinc-400 mb-6 max-w-2xl mx-auto">
            Complete development toolkit with premium templates, comprehensive guides, mobile applications, and powerful tools. Everything you need to build professional applications faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/web-applications" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 font-black transition-all duration-300 flex items-center justify-center space-x-2 text-base shadow-xl"
            >
              <Package className="w-5 h-5" />
              <span>BROWSE ALL PRODUCTS</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 font-black transition-all duration-300 text-base">
              VIEW PRICING PLANS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
