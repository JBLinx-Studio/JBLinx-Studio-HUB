
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Gamepad2, Users, Calendar, Play, Github, Trophy, BookOpen, FileText, Zap, Shield, Cpu, Globe, Filter, Search, Grid, List, SortAsc, SortDesc, Eye, Heart, Clock, Award, Target, Rocket, Flame, Crown, Diamond, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const GamesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: 47, icon: Globe },
    { id: 'games', name: 'Games', count: 15, icon: Gamepad2 },
    { id: 'tutorials', name: 'Tutorials', count: 18, icon: Play },
    { id: 'guides', name: 'Dev Guides', count: 12, icon: BookOpen },
    { id: 'devlogs', name: 'Dev Logs', count: 8, icon: FileText },
    { id: 'betas', name: 'Beta Access', count: 4, icon: Zap }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured', icon: Star },
    { id: 'newest', name: 'Newest', icon: Clock },
    { id: 'popular', name: 'Most Popular', icon: Flame },
    { id: 'rating', name: 'Highest Rated', icon: Award },
    { id: 'downloads', name: 'Most Downloaded', icon: Download }
  ];

  const games = [
    {
      id: 1,
      title: "Survival Horror Chronicles",
      category: "games",
      subcategory: "Horror/Survival",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
      downloads: "5.2k",
      rating: "4.8",
      status: "Released",
      description: "Immersive horror with advanced AI-driven scares and atmospheric design",
      tags: ["Unity", "Multiplayer", "VR", "Horror"],
      price: "$19.99",
      players: "1-4",
      type: "game",
      gameplayTime: "25+ hrs",
      difficulty: "Hard",
      featured: true,
      releaseDate: "2024-01-15",
      popularity: 95
    },
    {
      id: 2,
      title: "Strategic Conquest RTS",
      category: "games",
      subcategory: "Real-Time Strategy", 
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=300&fit=crop",
      downloads: "3.1k",
      rating: "4.9",
      status: "Released",
      description: "Command armies in epic 32-player battles with advanced AI and physics",
      tags: ["Multiplayer", "Campaign", "AI", "Strategy"],
      price: "$24.99",
      players: "1-32",
      type: "game",
      gameplayTime: "100+ hrs",
      difficulty: "Medium",
      featured: true,
      releaseDate: "2024-02-20",
      popularity: 88
    },
    {
      id: 3,
      title: "Adventure Quest RPG",
      category: "games",
      subcategory: "Action/Adventure",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop",
      downloads: "2.8k",
      rating: "4.7",
      status: "Beta",
      description: "Epic quest through mystical realms with deep character progression",
      tags: ["Open World", "Crafting", "Magic", "RPG"],
      price: "Free Beta",
      players: "1",
      type: "game",
      gameplayTime: "80+ hrs",
      difficulty: "Medium",
      featured: false,
      releaseDate: "2024-03-01",
      popularity: 76
    },
    {
      id: 4,
      title: "Game Development Mastery",
      category: "guides",
      subcategory: "Complete Guide",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=300&fit=crop",
      downloads: "8.5k",
      rating: "4.9",
      status: "Available",
      description: "Comprehensive Unity guide covering mechanics, AI, and optimization",
      tags: ["Unity", "C#", "Design", "AI"],
      price: "$29.99",
      players: "N/A",
      type: "ebook",
      gameplayTime: "N/A",
      difficulty: "N/A",
      featured: true,
      releaseDate: "2023-12-10",
      popularity: 92
    },
    {
      id: 5,
      title: "Horror Game Dev Series",
      category: "tutorials",
      subcategory: "Video Course",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      downloads: "6.2k",
      rating: "5.0",
      status: "Available",
      description: "Step-by-step tutorials for creating atmospheric horror experiences",
      tags: ["Unity", "Horror", "Atmosphere", "Tutorial"],
      price: "$49.99",
      players: "N/A",
      type: "tutorial",
      gameplayTime: "N/A",
      difficulty: "N/A",
      featured: true,
      releaseDate: "2024-01-05",
      popularity: 85
    },
    {
      id: 6,
      title: "RTS Development Blog",
      category: "devlogs",
      subcategory: "Dev Log Series",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      downloads: "12.1k",
      rating: "4.8",
      status: "Weekly Updates",
      description: "Behind-the-scenes development process and technical insights",
      tags: ["Development", "Process", "Insights", "RTS"],
      price: "Free",
      players: "N/A",
      type: "devlog",
      gameplayTime: "N/A",
      difficulty: "N/A",
      featured: false,
      releaseDate: "2024-02-15",
      popularity: 73
    }
  ];

  const filteredContent = games.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch(sortBy) {
      case 'newest':
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      case 'popular':
        return b.popularity - a.popularity;
      case 'rating':
        return parseFloat(b.rating) - parseFloat(a.rating);
      case 'downloads':
        return parseFloat(b.downloads.replace('k', '')) - parseFloat(a.downloads.replace('k', ''));
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const getIcon = (type: string) => {
    switch(type) {
      case 'ebook': return BookOpen;
      case 'tutorial': return Play;
      case 'devlog': return FileText;
      default: return Gamepad2;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Released': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Beta': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
      case 'Available': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default: return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
    }
  };

  return (
    <section className="py-8 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-4 py-2 mb-4 backdrop-blur-sm rounded-lg">
            <Trophy className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest">JBLINX ECOSYSTEM</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-2">
            GAMES • GUIDES • TUTORIALS • DEVLOGS
          </h2>
          
          <div className="w-20 h-0.5 bg-purple-400 mx-auto mb-4"></div>
          
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            Discover our complete ecosystem of games, development resources, tutorials, and insights
          </p>
        </div>

        {/* Enhanced Filters & Controls */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 mb-8 backdrop-blur-sm rounded-lg">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search games, tutorials, guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-600 text-white pl-10 pr-4 py-3 rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-purple-500 text-white shadow-lg border border-purple-400' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-slate-900/50 text-xs px-2 py-1 rounded">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sort & View Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 text-sm font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-700 border border-slate-600 text-white px-3 py-1 rounded-lg text-sm focus:border-purple-400 focus:outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-slate-400 text-sm font-medium">View:</span>
              <div className="flex border border-slate-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-slate-700 text-slate-300'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'bg-slate-700 text-slate-300'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-slate-400 text-sm">
            Showing <span className="text-white font-bold">{sortedContent.length}</span> results
            {activeCategory !== 'all' && (
              <span> in <span className="text-purple-400 font-bold">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </span></span>
            )}
          </div>
        </div>

        {/* Content Grid/List */}
        <div className={`mb-8 ${viewMode === 'grid' ? 'grid lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {sortedContent.map((item, index) => {
            const IconComponent = getIcon(item.type);
            
            if (viewMode === 'list') {
              return (
                <div key={item.id} className="bg-slate-800/95 border border-slate-700 hover:border-purple-400/70 transition-all duration-300 p-4 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-24 h-16 overflow-hidden rounded-lg">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-white font-black text-base font-mono">{item.title}</h3>
                        {item.featured && <Crown className="w-4 h-4 text-yellow-400" />}
                      </div>
                      <div className="text-purple-400 text-sm font-bold mb-1">{item.subcategory}</div>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-300">{item.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-slate-300">{item.rating}</span>
                      </div>
                      <div className={`px-3 py-1 text-xs font-bold border rounded ${getStatusColor(item.status)}`}>
                        {item.status}
                      </div>
                      <div className="text-green-400 font-black">{item.price}</div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={item.id} className="bg-slate-800/95 border border-slate-700 hover:border-purple-400/70 transition-all duration-300 overflow-hidden group rounded-lg">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  {/* Status & Featured Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-2">
                    <div className={`px-2 py-1 text-xs font-black border rounded ${getStatusColor(item.status)}`}>
                      {item.status}
                    </div>
                    {item.featured && (
                      <div className="bg-yellow-500 text-black px-2 py-1 text-xs font-black rounded flex items-center space-x-1">
                        <Crown className="w-3 h-3" />
                        <span>FEATURED</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Stats */}
                  <div className="absolute top-3 right-3 flex flex-col space-y-1">
                    <div className="bg-black/80 text-white px-2 py-1 text-xs font-bold flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="bg-black/80 text-white px-2 py-1 text-xs font-bold flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Title & Price */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-black text-base font-mono mb-1">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-purple-400 text-sm font-bold">{item.subcategory}</div>
                      <div className="text-green-400 font-black text-sm">{item.price}</div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                  
                  {/* Game Details */}
                  {item.type === 'game' && (
                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                      <div className="flex items-center space-x-1 text-slate-400">
                        <Users className="w-3 h-3 text-cyan-400" />
                        <span>{item.players} Players</span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-400">
                        <Calendar className="w-3 h-3 text-orange-400" />
                        <span>{item.gameplayTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Shield className={`w-3 h-3 ${getDifficultyColor(item.difficulty)}`} />
                        <span className={`${getDifficultyColor(item.difficulty)} font-bold`}>{item.difficulty}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-slate-400">
                        <Cpu className="w-3 h-3 text-green-400" />
                        <span>Optimized</span>
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-slate-700 text-purple-400 px-2 py-1 text-xs font-bold rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2 rounded-lg">
                    <IconComponent className="w-4 h-4" />
                    <span>{item.type === 'game' ? 'PLAY NOW' : item.type === 'tutorial' ? 'WATCH NOW' : 'ACCESS NOW'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 font-black transition-all duration-300 space-x-2 shadow-lg text-base rounded-lg hover:scale-105 transform"
          >
            <Rocket className="w-5 h-5" />
            <span>EXPLORE COMPLETE ECOSYSTEM</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
