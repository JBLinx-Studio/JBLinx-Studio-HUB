
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
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full px-6 py-3 mb-6 shadow-2xl backdrop-blur-xl">
            <Sparkles className="w-5 h-5 mr-2 text-cyan-400 animate-pulse" />
            <span className="text-sm font-bold text-cyan-300 tracking-wide">Development Chronicles</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Dev
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 italic font-light">
              Stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            Behind-the-scenes insights, technical deep-dives, and lessons learned 
            from our development adventures.
          </p>
        </div>

        {/* Enhanced Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transform scale-105' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10 hover:border-white/30 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Enhanced Featured Post */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500 group">
          <div className="grid lg:grid-cols-2">
            <div className="relative overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ✨ Featured Story
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-10">
              <div className="text-cyan-400 text-sm font-bold mb-3 uppercase tracking-wide">{featuredPost.category}</div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{featuredPost.title}</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold">{featuredPost.author}</div>
                    <div className="flex items-center text-gray-400 text-sm space-x-3">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime} read</span>
                      <span>•</span>
                      <span>{featuredPost.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105">
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:bg-white/10 transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="font-medium">{post.date}</span>
                  <div className="flex items-center space-x-3">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.views} views</span>
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
