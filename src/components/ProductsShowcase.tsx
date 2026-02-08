import React, { useState } from 'react';
import { ArrowRight, Code, Book, Smartphone, Zap, Filter, Grid3X3, List, Eye, Star, Package, ShoppingCart, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

const ProductsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [layoutType, setLayoutType] = useState<'grid' | 'list'>('grid');

  const products = [
    { name: "CodeCraft Pro Template", category: "Web Templates", type: "template", downloads: "15.2k", rating: "4.9", price: "$79", tech: "React", description: "Professional React dashboard template with 50+ components and dark/light themes.", features: ["50+ Components", "Dark/Light Theme", "Responsive", "TypeScript"], color: "emerald" },
    { name: "Mobile UI Kit Pro", category: "Mobile Development", type: "mobile", downloads: "8.7k", rating: "4.8", price: "$59", tech: "Flutter", description: "Complete Flutter UI kit with 100+ screens for beautiful mobile applications.", features: ["100+ Screens", "Custom Widgets", "Animation Library", "Cross-platform"], color: "blue" },
    { name: "DevOps Mastery Guide", category: "E-books", type: "ebook", downloads: "12.1k", rating: "4.9", price: "$29", tech: "PDF", description: "Comprehensive 300-page guide covering DevOps practices and CI/CD.", features: ["300+ Pages", "Practical Examples", "Case Studies", "Bonus Resources"], color: "purple" },
    { name: "API Testing Toolkit", category: "Developer Tools", type: "tool", downloads: "6.3k", rating: "4.7", price: "$49", tech: "Python", description: "Advanced API testing suite with automated test generation.", features: ["Auto Test Gen", "REST/GraphQL", "CI/CD Integration", "Reports"], color: "orange" },
    { name: "E-commerce Template Suite", category: "Web Templates", type: "template", downloads: "9.8k", rating: "4.8", price: "$99", tech: "Vue.js", description: "Complete e-commerce solution with payment integration.", features: ["Payment Gateway", "Inventory System", "Admin Panel", "Mobile Ready"], color: "green" },
    { name: "Cloud Architecture Guide", category: "E-books", type: "ebook", downloads: "7.4k", rating: "4.9", price: "$39", tech: "PDF", description: "Expert-level guide to designing scalable cloud architectures.", features: ["Multi-cloud Focus", "Architecture Patterns", "Best Practices", "Implementation"], color: "cyan" }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length, icon: Package },
    { id: 'templates', name: 'Web Templates', count: products.filter(p => p.category === 'Web Templates').length, icon: Code },
    { id: 'mobile', name: 'Mobile Dev', count: products.filter(p => p.category === 'Mobile Development').length, icon: Smartphone },
    { id: 'ebooks', name: 'E-books', count: products.filter(p => p.category === 'E-books').length, icon: Book },
    { id: 'tools', name: 'Dev Tools', count: products.filter(p => p.category === 'Developer Tools').length, icon: Zap }
  ];

  const colorMap: Record<string, { text: string; border: string; bg: string }> = {
    emerald: { text: 'text-emerald-400', border: 'border-emerald-500/50', bg: 'bg-emerald-500/15' },
    blue: { text: 'text-blue-400', border: 'border-blue-500/50', bg: 'bg-blue-500/15' },
    purple: { text: 'text-purple-400', border: 'border-purple-500/50', bg: 'bg-purple-500/15' },
    orange: { text: 'text-orange-400', border: 'border-orange-500/50', bg: 'bg-orange-500/15' },
    green: { text: 'text-green-400', border: 'border-green-500/50', bg: 'bg-green-500/15' },
    cyan: { text: 'text-cyan-400', border: 'border-cyan-500/50', bg: 'bg-cyan-500/15' }
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => {
        switch(selectedCategory) {
          case 'templates': return product.category === 'Web Templates';
          case 'mobile': return product.category === 'Mobile Development';
          case 'ebooks': return product.category === 'E-books';
          case 'tools': return product.category === 'Developer Tools';
          default: return true;
        }
      });

  const totalStats = {
    products: products.length,
    downloads: products.reduce((sum, p) => sum + parseFloat(p.downloads.replace('k', '')) * 1000, 0),
    avgRating: (products.reduce((sum, p) => sum + parseFloat(p.rating), 0) / products.length).toFixed(1)
  };

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="section-divider-line" />
      <div className="ambient-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="section-header">
            <div className="badge-orange">
              <Package className="w-4 h-4" />
              <span>DEVELOPER PRODUCTS</span>
            </div>
            
            <h2 className="text-section-title text-foreground mb-3">
              PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">DIGITAL ASSETS</span>
            </h2>
            
            <div className="section-divider bg-orange-400" />
            
            <p className="section-subtitle">
              Professional templates, mobile UI kits, developer tools, and comprehensive guides
            </p>
          </div>
        </AnimatedSection>

        {/* Dashboard Layout */}
        <AnimatedSection delay={0.2}>
          <div className="grid lg:grid-cols-12 gap-6 mb-12">
            {/* Left Sidebar */}
            <div className="lg:col-span-3 space-y-5">
              <div className="panel card-padding">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-orange-400" />
                  <h3 className="text-panel-title text-orange-400">CATEGORIES</h3>
                </div>
                
                <div className="space-y-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left panel-padding border rounded-md transition-all ${
                          selectedCategory === category.id
                            ? 'border-orange-500/50 bg-orange-500/15 text-orange-400'
                            : 'border-border bg-secondary text-muted-foreground hover:border-border/80 hover:bg-secondary/80'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <IconComponent className={`w-4 h-4 ${selectedCategory === category.id ? 'text-orange-400' : ''}`} />
                            <span className="text-card-title">{category.name}</span>
                          </div>
                          <span className="text-label">{category.count}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="panel card-padding">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-panel-title text-yellow-400">PORTFOLIO STATS</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { label: 'TOTAL PRODUCTS', value: totalStats.products, color: 'text-orange-400' },
                    { label: 'TOTAL DOWNLOADS', value: `${Math.round(totalStats.downloads / 1000)}k+`, color: 'text-green-400' },
                    { label: 'AVERAGE RATING', value: `${totalStats.avgRating}★`, color: 'text-yellow-400' }
                  ].map((stat, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="text-label text-muted-foreground">{stat.label}</span>
                      <span className={`text-card-title ${stat.color}`}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="panel panel-padding mb-5">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-cyan-400" />
                      <span className="text-label text-cyan-400">LAYOUT</span>
                    </div>
                    <div className="flex border border-border rounded-md overflow-hidden">
                      {[
                        { type: 'grid', icon: Grid3X3 },
                        { type: 'list', icon: List }
                      ].map((layout) => {
                        const IconComponent = layout.icon;
                        return (
                          <button
                            key={layout.type}
                            onClick={() => setLayoutType(layout.type as 'grid' | 'list')}
                            className={`px-3 py-2 transition-all ${
                              layoutType === layout.type
                                ? 'bg-cyan-500 text-white'
                                : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                            }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="text-small">
                    Showing <span className="text-foreground font-bold">{filteredProducts.length}</span> products
                  </div>
                </div>
              </div>

              <div className={`${
                layoutType === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4' 
                  : 'space-y-4'
              }`}>
                {filteredProducts.map((product, index) => {
                  const colors = colorMap[product.color];
                  return (
                    <motion.div 
                      key={index} 
                      className={`panel card-padding hover:border-border/80 transition-all ${layoutType === 'list' ? 'flex gap-5' : ''}`}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={layoutType === 'list' ? 'flex-1' : ''}>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`tag ${colors.bg} ${colors.border} ${colors.text}`}>
                            {product.tech}
                          </span>
                          <span className={`text-card-title ${colors.text}`}>{product.price}</span>
                        </div>
                        
                        <h3 className="text-card-title text-foreground mb-1">{product.name}</h3>
                        <p className="text-small mb-3">{product.category}</p>
                        <p className="text-body line-clamp-2 mb-3">{product.description}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.features.slice(0, 3).map((feature, fIndex) => (
                            <span key={fIndex} className="tag tag-default text-xs">{feature}</span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <div className="flex items-center gap-3 text-small">
                            <div className="flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              <span>{product.downloads}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                              <span>{product.rating}</span>
                            </div>
                          </div>
                          <button className={`btn-base text-xs px-3 py-1.5 rounded-md ${colors.bg} ${colors.border} border ${colors.text} hover:opacity-80`}>
                            VIEW
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center" delay={0.3}>
          <p className="text-body text-base max-w-xl mx-auto mb-5">
            Hand-crafted templates, tools, and resources designed by developers for developers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/shop" className="btn-primary bg-orange-500 hover:bg-orange-600 shadow-orange-500/30">
              <ShoppingCart className="w-4 h-4" />
              <span>BROWSE ALL PRODUCTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="btn-secondary">
              REQUEST CUSTOM WORK
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductsShowcase;
