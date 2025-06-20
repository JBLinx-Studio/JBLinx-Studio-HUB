
import React, { useState } from 'react';
import { ShoppingCart, Star, Download, Book, Gamepad2, Code, Database } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const products = [
    {
      id: 1,
      title: "Unity Game Dev Guide",
      type: "E-Book",
      price: 29.99,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop",
      category: "Books",
      icon: Book,
      description: "Complete Unity game development guide covering survival, horror, and RTS games.",
      downloads: "3.2k"
    },
    {
      id: 2,
      title: "FastAPI Template",
      type: "Template",
      price: 39.99,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      category: "Templates",
      icon: Database,
      description: "Production-ready FastAPI template with MySQL integration.",
      downloads: "1.8k",
      github: "https://github.com/JBLinx-Studio/FastAPI-MySQL-Template"
    },
    {
      id: 3,
      title: "Flutter Template",
      type: "Template",
      price: 34.99,
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      category: "Templates",
      icon: Code,
      description: "Complete Flutter template with Firebase and modern UI.",
      downloads: "2.1k"
    },
    {
      id: 4,
      title: "Game Dev Course",
      type: "Course",
      price: 79.99,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
      category: "Courses",
      icon: Gamepad2,
      description: "Master Unity game development with comprehensive video tutorials.",
      downloads: "896"
    }
  ];

  const categories = ['All', 'Templates', 'Books', 'Courses'];
  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600">Templates, guides, and courses to accelerate your projects.</p>
        </div>

        {/* Compact Category Filter */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Compact Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {product.type}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <product.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-xs text-gray-600">{product.category}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Download className="w-3 h-3 mr-1" />
                    {product.downloads}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>

                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center space-x-1">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Buy</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
