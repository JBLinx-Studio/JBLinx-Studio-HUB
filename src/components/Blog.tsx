
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Eye, BookOpen, FileText, Gamepad2, Code } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = {
    id: 1,
    title: "Building Immersive Survival Games with Unity",
    excerpt: "Deep dive into our survival game development process, covering advanced mechanics, multiplayer systems, and performance optimization techniques.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop",
    author: "JBLinx Team",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    views: "2.1k",
    category: "Game Development",
    tags: ["Unity", "Survival", "Multiplayer"]
  };

  const posts = [
    {
      id: 2,
      title: "FastAPI MySQL Template: Production Ready",
      excerpt: "Complete guide to our open-source FastAPI template with MySQL integration and best practices.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      author: "Dev Team",
      date: "Dec 18, 2024", 
      readTime: "5 min",
      views: "1.8k",
      category: "Backend",
      type: "Tutorial"
    },
    {
      id: 3,
      title: "Horror Game Psychology & Design",
      excerpt: "Understanding fear mechanics and atmospheric design in our horror game development.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      author: "Game Designer",
      date: "Dec 15, 2024",
      readTime: "6 min", 
      views: "1.5k",
      category: "Game Design",
      type: "Dev Log"
    },
    {
      id: 4,
      title: "RTS Multiplayer Networking",
      excerpt: "Technical deep-dive into real-time strategy game networking and synchronization.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop",
      author: "Network Engineer",
      date: "Dec 12, 2024",
      readTime: "7 min",
      views: "1.2k", 
      category: "Technical",
      type: "Guide"
    },
    {
      id: 5,
      title: "Flutter Firebase Template Launch",
      excerpt: "Announcing our comprehensive Flutter template with Firebase integration and modern UI.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      author: "Mobile Team",
      date: "Dec 10, 2024",
      readTime: "4 min",
      views: "2.3k",
      category: "Mobile",
      type: "Release"
    }
  ];

  const categories = [
    { name: "All", icon: FileText },
    { name: "Game Development", icon: Gamepad2 },
    { name: "Backend", icon: Code },
    { name: "Mobile", icon: Code },
    { name: "Technical", icon: BookOpen }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <BookOpen className="w-5 h-5 text-cyan-400 mr-3" />
            <span className="text-white font-semibold">Latest Insights</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-6">
            Development
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Blog
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Behind-the-scenes insights, tutorials, and development logs from our projects.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg' 
                    : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/20'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                    {featuredPost.category}
                  </span>
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{featuredPost.author}</div>
                      <div className="flex items-center text-gray-400 text-sm space-x-3">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {featuredPost.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 w-fit">
                  <span>Read Article</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
                    {post.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3 mx-auto">
            <BookOpen className="w-5 h-5" />
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
