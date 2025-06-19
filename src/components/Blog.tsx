
import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag, Eye } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Game Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing game design, procedural generation, and player experiences in 2024.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      author: "Alex Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      views: "2.3k",
      category: "AI & Gaming",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with React",
      excerpt: "Best practices and architectural patterns for creating maintainable and performant React applications at enterprise scale.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      author: "Sarah Johnson",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      views: "1.8k",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Database Optimization Techniques",
      excerpt: "Advanced strategies for optimizing database performance, indexing, and query optimization for modern applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      author: "Mike Rodriguez",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      views: "1.5k",
      category: "Database"
    },
    {
      id: 4,
      title: "Cybersecurity Best Practices 2024",
      excerpt: "Essential security measures every developer should implement to protect applications and user data.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      author: "Emma Davis",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      views: "3.1k",
      category: "Security"
    },
    {
      id: 5,
      title: "Mobile App Development Trends",
      excerpt: "Latest trends in mobile development including cross-platform frameworks, performance optimization, and UX design.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      author: "David Kim",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      views: "2.0k",
      category: "Mobile"
    },
    {
      id: 6,
      title: "Cloud Infrastructure Management",
      excerpt: "Comprehensive guide to managing cloud resources, cost optimization, and deployment strategies.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      author: "Lisa Wang",
      date: "Dec 3, 2024",
      readTime: "11 min read",
      views: "1.7k",
      category: "Cloud"
    }
  ];

  const categories = ["All", "AI & Gaming", "Web Development", "Database", "Security", "Mobile", "Cloud"];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white shadow-lg rounded-full px-6 py-3 mb-8 border border-gray-100">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700">Tech Insights & Updates</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
            Latest from Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"> Tech Blog</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Stay ahead with cutting-edge insights, tutorials, and industry trends from our team of expert developers and tech enthusiasts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 0 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px] transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Eye className="w-4 h-4 mr-1" />
                    {blogPosts[0].views}
                  </div>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{blogPosts[0].author}</div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {blogPosts[0].date}
                        <Clock className="w-4 h-4 ml-3 mr-1" />
                        {blogPosts[0].readTime}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
                  <Eye className="w-3 h-3 mr-1" />
                  {post.views}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{post.author}</div>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                        <Clock className="w-3 h-3 ml-2 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-blue-600 hover:text-purple-600 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3 mx-auto">
            <span>Load More Articles</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
