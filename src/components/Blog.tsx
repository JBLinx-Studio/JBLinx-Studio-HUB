
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Eye, BookOpen, Gamepad2, Code, Sparkles } from 'lucide-react';

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
    <section id="blog" className="py-16 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Simplified background - removed heavy animations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-100 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Simplified Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-5 py-2 mb-4">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Development Chronicles</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Dev <span className="text-blue-600">Stories</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Behind-the-scenes insights, technical deep-dives, and lessons learned 
            from our development adventures.
          </p>
        </div>

        {/* Simplified Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Optimized Featured Post */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-10 shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="text-blue-600 text-sm font-semibold mb-2 uppercase tracking-wide">
                {featuredPost.category}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium text-sm">{featuredPost.author}</div>
                    <div className="flex items-center text-gray-500 text-xs space-x-2">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                      <span>•</span>
                      <span>{featuredPost.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Optimized Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-medium">{post.date}</span>
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
