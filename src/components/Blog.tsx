
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Eye, BookOpen, Gamepad2, Code } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = {
    id: 1,
    title: "Building Survival Games with Unity",
    excerpt: "Deep dive into our survival game development process and advanced mechanics.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop",
    author: "JBLinx Team",
    date: "Dec 20, 2024",
    readTime: "8 min",
    views: "2.1k",
    category: "Game Development"
  };

  const posts = [
    {
      id: 2,
      title: "FastAPI MySQL Template Guide",
      excerpt: "Complete guide to our production-ready FastAPI template.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop",
      author: "Dev Team",
      date: "Dec 18, 2024", 
      readTime: "5 min",
      views: "1.8k",
      category: "Backend"
    },
    {
      id: 3,
      title: "Horror Game Design Psychology",
      excerpt: "Understanding fear mechanics in horror game development.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
      author: "Game Designer",
      date: "Dec 15, 2024",
      readTime: "6 min", 
      views: "1.5k",
      category: "Game Design"
    },
    {
      id: 4,
      title: "RTS Multiplayer Networking",
      excerpt: "Technical deep-dive into real-time strategy networking.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop",
      author: "Network Engineer",
      date: "Dec 12, 2024",
      readTime: "7 min",
      views: "1.2k", 
      category: "Technical"
    }
  ];

  const categories = ['All', 'Game Development', 'Backend', 'Technical'];
  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <section id="blog" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white mb-3">
            Dev <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Blog</span>
          </h2>
          <p className="text-lg text-gray-300">Insights and tutorials from our development projects.</p>
        </div>

        {/* Compact Categories */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeCategory === category
                  ? 'bg-cyan-500 text-white' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden mb-8 hover:shadow-xl transition-all duration-300">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-6 lg:p-8">
              <div className="text-cyan-400 text-sm font-medium mb-2">{featuredPost.category}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{featuredPost.title}</h3>
              <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{featuredPost.author}</div>
                    <div className="flex items-center text-gray-400 text-xs space-x-2">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                      <span>•</span>
                      <span>{featuredPost.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan-600 transition-colors flex items-center space-x-2">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-xs">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{post.date}</span>
                  <div className="flex items-center space-x-2">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
