
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Eye, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = {
    id: 1,
    title: "Building Survival Games with Unity",
    excerpt: "Deep dive into our survival game development process and advanced mechanics that create immersive player experiences.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
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
      excerpt: "Complete guide to our production-ready FastAPI template with authentication and database management.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      author: "Dev Team",
      date: "Dec 18, 2024", 
      readTime: "5 min",
      views: "1.8k",
      category: "Backend"
    },
    {
      id: 3,
      title: "Horror Game Design Psychology",
      excerpt: "Understanding fear mechanics and psychological elements in horror game development.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      author: "Game Designer",
      date: "Dec 15, 2024",
      readTime: "6 min", 
      views: "1.5k",
      category: "Game Design"
    },
    {
      id: 4,
      title: "RTS Multiplayer Networking",
      excerpt: "Technical deep-dive into real-time strategy networking and synchronization challenges.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Development Chronicles</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black mb-6">
              Dev Stories
            </h1>
            
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Behind-the-scenes insights, technical deep-dives, and lessons learned 
              from our development adventures.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Post */}
            <div className="bg-white rounded-3xl overflow-hidden mb-16 shadow-xl border border-gray-100">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="text-indigo-600 text-sm font-semibold mb-2 uppercase tracking-wide">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-gray-900 font-medium">{featuredPost.author}</div>
                        <div className="flex items-center text-gray-500 text-sm space-x-2">
                          <span>{featuredPost.date}</span>
                          <span>•</span>
                          <span>{featuredPost.readTime}</span>
                          <span>•</span>
                          <span>{featuredPost.views} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors duration-200 flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-md text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
