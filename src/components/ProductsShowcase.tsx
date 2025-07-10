import React from 'react';
import { Code, Heart, Building2, Rocket } from 'lucide-react';
import ProductsCarouselPanels from './products/ProductsCarouselPanels';

const ProductsShowcase = () => {
  const products = [
    { name: 'CodeFusion', icon: Code, description: 'Advanced code generation platform' },
    { name: 'VitalitySync', icon: Heart, description: 'Health and wellness monitoring app' },
    { name: 'NestCore', icon: Building2, description: 'Smart home automation system' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-red-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Rocket className="w-3 h-3 mr-1 text-red-400" />
            <span className="text-red-400 font-black text-xs font-mono tracking-widest">PRIORITY 2: GENERAL PRODUCTS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-4">
            INNOVATIVE <span className="text-red-400">SOLUTIONS</span> FOR EVERY NEED
          </h2>
          <div className="w-16 h-0.5 bg-red-400 mx-auto mb-3"></div>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Explore our diverse range of products designed to enhance productivity, improve well-being, and simplify your daily life.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="bg-slate-800/95 border border-slate-700 p-5 rounded-md hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <IconComponent className="w-6 h-6 text-red-400" />
                  <h3 className="text-white font-bold text-lg">{product.name}</h3>
                </div>
                <p className="text-slate-400 text-sm">{product.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Add the carousel panels after existing content */}
        <ProductsCarouselPanels />
        
        {/* Bottom CTA */}
        <div className="text-center">
          <a href="#" className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm">
            <span>DISCOVER MORE PRODUCTS</span>
            <Rocket className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
