
import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, Eye, Download, Book, Gamepad2, Code, Database, Monitor, Smartphone } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const products = [
    {
      id: 1,
      title: "Unity Game Development Mastery",
      type: "E-Book",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      category: "Books",
      icon: Book,
      description: "Complete guide to Unity game development with real-world projects and advanced techniques.",
      bestseller: true,
      downloadCount: "5.2k"
    },
    {
      id: 2,
      title: "FastAPI Backend Template",
      type: "Code Template",
      price: 79.99,
      originalPrice: 119.99,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "Templates",
      icon: Database,
      description: "Production-ready FastAPI template with MySQL, authentication, and comprehensive documentation.",
      featured: true,
      downloadCount: "2.8k",
      github: "https://github.com/JBLinx-Studio/FastAPI-MySQL-Template"
    },
    {
      id: 3,
      title: "React Web Development Course",
      type: "Video Course",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "Courses",
      icon: Monitor,
      description: "Master modern React development with TypeScript, Tailwind CSS, and best practices.",
      downloadCount: "1.9k"
    },
    {
      id: 4,
      title: "Horror Game Development Guide",
      type: "Dev Log Series",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      category: "Game Logs",
      icon: Gamepad2,
      description: "Behind-the-scenes development process of our horror game with Unity techniques and secrets.",
      downloadCount: "4.1k"
    },
    {
      id: 5,
      title: "Flutter Mobile App Template",
      type: "Mobile Template",
      price: 59.99,
      originalPrice: 89.99,
      rating: 4.8,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "Templates",
      icon: Smartphone,
      description: "Complete Flutter template with Firebase integration and modern UI components.",
      downloadCount: "3.5k",
      github: "https://github.com/JBLinx-Studio/Flutter-Firebase-Template"
    },
    {
      id: 6,
      title: "Survival Game Dev Insights",
      type: "Dev Log Series",
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.9,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      category: "Game Logs",
      icon: Gamepad2,
      description: "Weekly development updates and insights from our open-world survival game project.",
      downloadCount: "2.3k"
    },
    {
      id: 7,
      title: "AI Tic-Tac-Toe Source Code",
      type: "Source Code",
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.6,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      category: "Source Code",
      icon: Code,
      description: "Complete source code for AI-powered Tic-Tac-Toe game with minimax algorithm implementation.",
      downloadCount: "1.8k",
      github: "https://github.com/JBLinx-Studio/AI-Tic-Tac-Toe"
    },
    {
      id: 8,
      title: "Next.js E-commerce Template",
      type: "Web Template",
      price: 99.99,
      originalPrice: 149.99,
      rating: 4.8,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Templates",
      icon: Monitor,
      description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
      featured: true,
      downloadCount: "4.7k",
      github: "https://github.com/JBLinx-Studio/NextJS-Ecommerce"
    },
    {
      id: 9,
      title: "Space Game Development Series",
      type: "Dev Log Series",
      price: 44.99,
      originalPrice: 64.99,
      rating: 4.7,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
      category: "Game Logs",
      icon: Gamepad2,
      description: "Comprehensive development journey of our space exploration open-world game.",
      downloadCount: "2.1k"
    }
  ];

  const categories = ['All', 'Books', 'Templates', 'Courses', 'Game Logs', 'Source Code'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="shop" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-float delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white shadow-lg rounded-full px-6 py-3 mb-8 border border-gray-100">
            <ShoppingCart className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-gray-700">JBLinx Studio Products</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
            Premium Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">Products & Resources</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover our curated collection of professional development resources, game development insights, 
            templates, and educational content designed to accelerate your projects.
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
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group relative">
              {/* Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                {product.bestseller && (
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Bestseller
                  </span>
                )}
                {product.featured && (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </span>
                )}
              </div>

              {/* Wishlist & Preview */}
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-white transition-all shadow-lg">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-500 hover:bg-white transition-all shadow-lg">
                  <Eye className="w-5 h-5" />
                </button>
              </div>

              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Type & Downloads */}
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

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
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
                  <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                </div>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-4xl font-bold mb-4">Get Access to Exclusive Content</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community and get early access to new products, development insights, and exclusive discounts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-2xl">
                Join Community
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors">
                Browse All Products
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">25k+</div>
                <div className="text-sm text-blue-100 uppercase tracking-wider">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">4.8</div>
                <div className="text-sm text-blue-100 uppercase tracking-wider">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-blue-100 uppercase tracking-wider">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
