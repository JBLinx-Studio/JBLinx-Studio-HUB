
import React, { useState } from 'react';
import { ShoppingCart, Star, Heart, Eye, Download, Book, Gamepad2, Code, Database } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const products = [
    {
      id: 1,
      title: "Advanced React Development Guide",
      type: "E-Book",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "Books",
      icon: Book,
      description: "Complete guide to mastering React with advanced patterns and best practices.",
      bestseller: true,
      downloadCount: "5.2k"
    },
    {
      id: 2,
      title: "Indie Game Development Toolkit",
      type: "Software Package",
      price: 199.99,
      originalPrice: 299.99,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      category: "Games",
      icon: Gamepad2,
      description: "Complete toolkit for indie game developers with assets, scripts, and tutorials.",
      featured: true,
      downloadCount: "2.8k"
    },
    {
      id: 3,
      title: "Database Design Mastery Course",
      type: "Video Course",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "Courses",
      icon: Database,
      description: "Learn advanced database design principles and optimization techniques.",
      downloadCount: "1.9k"
    },
    {
      id: 4,
      title: "Web Development Starter Kit",
      type: "Template Bundle",
      price: 79.99,
      originalPrice: 119.99,
      rating: 4.6,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      category: "Templates",
      icon: Code,
      description: "Professional website templates and components for modern web development.",
      downloadCount: "4.1k"
    },
    {
      id: 5,
      title: "Mobile App UI Kit",
      type: "Design Assets",
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Design",
      icon: Code,
      description: "Beautiful mobile app UI components and design systems.",
      downloadCount: "3.5k"
    },
    {
      id: 6,
      title: "DevOps Automation Scripts",
      type: "Script Collection",
      price: 59.99,
      originalPrice: 89.99,
      rating: 4.9,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "Tools",
      icon: Code,
      description: "Ready-to-use automation scripts for CI/CD and deployment workflows.",
      downloadCount: "2.3k"
    }
  ];

  const categories = ['All', 'Books', 'Games', 'Courses', 'Templates', 'Design', 'Tools'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="shop" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
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
            <span className="text-sm font-semibold text-gray-700">Digital Products & Resources</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
            Premium Tech
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"> Products</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover our curated collection of professional development resources, tools, and assets designed to accelerate your projects and enhance your skills.
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
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3 mx-auto">
            <span>View All Products</span>
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
