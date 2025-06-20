
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Tag, Eye, BookOpen, FileText, Gamepad2, Code, Star, TrendingUp, Heart } from 'lucide-react';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Game Development: Revolutionary Changes Ahead",
    excerpt: "Exploring how artificial intelligence is revolutionizing game design, procedural generation, and player experiences. From dynamic NPC behavior to procedural world generation, AI is reshaping the gaming landscape in unprecedented ways.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    author: "Alex Chen",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "Dec 20, 2024",
    readTime: "12 min read",
    views: "5.2k",
    likes: "324",
    category: "AI & Gaming",
    tags: ["AI", "Game Development", "Unity", "Future Tech"],
    featured: true,
    premium: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Unity Survival Game Development: Complete Guide",
      excerpt: "Building immersive survival mechanics, resource management systems, and dynamic weather in Unity. Learn advanced techniques for creating engaging survival experiences.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      author: "Sarah Johnson",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "Dec 18, 2024",
      readTime: "15 min read",
      views: "3.8k",
      likes: "256",
      category: "Game Development",
      tags: ["Unity", "Survival", "C#"],
      type: "Dev Log"
    },
    {
      id: 3,
      title: "Horror Game Psychology: Creating Genuine Fear",
      excerpt: "Understanding the psychological principles behind effective horror game design. From audio cues to visual storytelling techniques.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      author: "Mike Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "Dec 16, 2024",
      readTime: "10 min read",
      views: "2.9k",
      likes: "189",
      category: "Game Design",
      tags: ["Horror", "Psychology", "Design"],
      type: "Article"
    },
    {
      id: 4,
      title: "RTS Game Network Architecture: Multiplayer Excellence",
      excerpt: "Deep dive into real-time strategy game networking, synchronization, and anti-cheat systems for competitive gameplay.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      author: "Emma Davis",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "Dec 14, 2024",
      readTime: "18 min read",
      views: "4.1k",
      likes: "312",
      category: "Network Programming",
      tags: ["RTS", "Multiplayer", "Networking"],
      type: "Technical Guide"
    },
    {
      id: 5,
      title: "Space Game Development: Procedural Galaxy Generation",
      excerpt: "Creating infinite, explorable galaxies with procedural generation algorithms. From star systems to planetary surfaces.",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
      author: "David Kim",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      date: "Dec 12, 2024",
      readTime: "14 min read",
      views: "3.5k",
      likes: "267",
      category: "Procedural Generation",
      tags: ["Space", "Procedural", "Algorithm"],
      type: "Dev Log"
    },
    {
      id: 6,
      title: "React Performance Optimization: Advanced Techniques",
      excerpt: "Master React performance with advanced optimization strategies, custom hooks, and rendering patterns for enterprise applications.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      author: "Lisa Wang",
      authorImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      date: "Dec 10, 2024",
      readTime: "11 min read",
      views: "2.7k",
      likes: "198",
      category: "Web Development",
      tags: ["React", "Performance", "Optimization"],
      type: "Technical Guide"
    }
  ];

  const categories = [
    { name: "All", count: 50, icon: FileText },
    { name: "Game Development", count: 15, icon: Gamepad2 },
    { name: "Dev Logs", count: 8, icon: Code },
    { name: "Web Development", count: 12, icon: Code },
    { name: "AI & Gaming", count: 6, icon: Star },
    { name: "Technical Guides", count: 9, icon: BookOpen }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Dev Log': return Code;
      case 'Technical Guide': return BookOpen;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Dev Log': return 'from-green-500 to-emerald-500';
      case 'Technical Guide': return 'from-blue-500 to-cyan-500';
      default: return 'from-purple-500 to-pink-500';
    }
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 mb-8 shadow-2xl">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-4 animate-pulse"></div>
            <span className="text-sm font-semibold text-white/90 tracking-wide uppercase">Latest Insights & Development</span>
            <TrendingUp className="w-5 h-5 ml-4 text-cyan-400" />
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-bold mb-8 text-white leading-tight">
            Knowledge
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Center
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
            Explore our comprehensive collection of development insights, game creation tutorials, 
            technical guides, and behind-the-scenes development logs from our latest projects.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">50+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">15+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Dev Logs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-1">25k+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Readers</div>
            </div>
          </div>
        </div>

        {/* Enhanced Category Navigation */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25 scale-105' 
                      : 'bg-white/10 backdrop-blur-sm text-white/80 hover:bg-white/20 border border-white/20 hover:border-white/40'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`} />
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isActive ? 'bg-white/20' : 'bg-white/10'
                    }`}>
                      {category.count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Premium Featured Post */}
        <div className="mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px] transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Floating badges */}
                  <div className="absolute top-6 left-6 flex flex-col space-y-3">
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl flex items-center space-x-2">
                      <Star className="w-4 h-4" />
                      <span>Featured</span>
                    </span>
                    {featuredPost.premium && (
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl">
                        Premium Content
                      </span>
                    )}
                  </div>

                  {/* Engagement stats */}
                  <div className="absolute bottom-6 left-6 flex space-x-4">
                    <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-full">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm text-white px-3 py-2 rounded-full">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-medium">{featuredPost.likes}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    {featuredPost.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={featuredPost.authorImage} 
                        alt={featuredPost.author}
                        className="w-14 h-14 rounded-full border-2 border-white/30 shadow-lg"
                      />
                      <div>
                        <div className="font-bold text-white text-lg">{featuredPost.author}</div>
                        <div className="flex items-center text-gray-400 text-sm space-x-4">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredPost.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3 group w-fit">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Blog Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => {
            const TypeIcon = getTypeIcon(post.type || 'Article');
            const typeGradient = getTypeColor(post.type || 'Article');
            
            return (
              <article key={post.id} className={`group relative ${
                index === 0 ? 'md:col-span-2 xl:col-span-2' : ''
              }`}>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                        index === 0 ? 'h-80' : 'h-64'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`bg-gradient-to-r ${typeGradient} text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg`}>
                        <TypeIcon className="w-3 h-3" />
                        <span>{post.type || 'Article'}</span>
                      </span>
                    </div>

                    {/* Engagement stats */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <div className="flex items-center bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                        <Heart className="w-3 h-3 mr-1" />
                        {post.likes}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                        {post.category}
                      </span>
                      {post.tags?.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className={`font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors leading-tight ${
                      index === 0 ? 'text-2xl' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          className="w-10 h-10 rounded-full border border-white/30"
                        />
                        <div>
                          <div className="font-semibold text-white text-sm">{post.author}</div>
                          <div className="flex items-center text-gray-400 text-xs space-x-3">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{post.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="text-cyan-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Enhanced Load More Section */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-16 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-2 flex items-center space-x-4 mx-auto group">
            <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Explore More Content</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <p className="text-gray-400 mt-6 text-sm">
            Join 25,000+ developers learning with our content
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
