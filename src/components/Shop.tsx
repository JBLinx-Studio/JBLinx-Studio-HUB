
import React, { useState } from 'react';
import { ShoppingCart, Star, Download, Book, Gamepad2, Code, Database, Monitor } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const products = [
    {
      id: 1,
      title: "Unity Game Development Guide",
      type: "E-Book",
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      category: "Books",
      icon: Book,
      description: "Complete guide covering survival, horror, and RTS game development with Unity.",
      downloadCount: "3.2k",
      featured: true
    },
    {
      id: 2,
      title: "FastAPI MySQL Template",
      type: "Template",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "Templates",
      icon: Database,
      description: "Production-ready FastAPI template with MySQL and authentication.",
      downloadCount: "1.8k",
      github: "https://github.com/JBLinx-Studio/FastAPI-MySQL-Template"
    },
    {
      id: 3,
      title: "Flutter Firebase Template",
      type: "Template",
      price: 34.99,
      originalPrice: 54.99,
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "Templates",
      icon: Monitor,
      description: "Complete Flutter template with Firebase integration and modern UI.",
      downloadCount: "2.1k",
      github: "https://github.com/JBLinx-Studio/Flutter-Firebase-Template"
    },
    {
      id: 4,
      title: "Game Development Course",
      type: "Course",
      price: 79.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      category: "Courses",
      icon: Gamepad2,
      description: "Master Unity game development with our comprehensive video course.",
      downloadCount: "896",
      bestseller: true
    },
    {
      id: 5,
      title: "Horror Game Dev Logs",
      type: "Dev Log",
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.6,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      category: "Dev Logs",
      icon: Code,
      description: "Behind-the-scenes development process of our horror game project.",
      downloadCount: "1.5k"
    },
    {
      id: 6,
      title: "NextJS E-commerce Template",
      type: "Template",
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.8,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Templates", 
      icon: Monitor,
      description: "Full-featured e-commerce platform with payment integration.",
      downloadCount: "2.7k",
      github: "https://github.com/JBLinx-Studio/NextJS-Ecommerce"
    }
  ];

  const categories = ['All', 'Templates', 'Books', 'Courses', 'Dev Logs'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="shop" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-8">
            <ShoppingCart className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-blue-600">Digital Products</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Resources</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional templates, guides, and courses to accelerate your development projects.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group relative">
              {/* Badges */}
              {(product.bestseller || product.featured) && (
                <div className="absolute top-4 left-4 z-10">
                  {product.bestseller && (
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Bestseller
                    </span>
                  )}
                  {product.featured && (
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                  )}
                </div>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <product.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600">{product.type}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Download className="w-4 h-4 mr-1" />
                    {product.downloadCount}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                {/* GitHub link if available */}
                {product.github && (
                  <div className="mb-4">
                    <a 
                      href={product.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Code className="w-4 h-4 mr-1" />
                      View on GitHub
                    </a>
                  </div>
                )}

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews})</span>
                </div>

                {/* Price & Purchase */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Buy</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get access to exclusive content, development insights, and early releases.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">15k+</div>
              <div className="text-sm text-blue-100">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4.8★</div>
              <div className="text-sm text-blue-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-sm text-blue-100">Happy Customers</div>
            </div>
          </div>

          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Browse All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
