
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, Star, Users, Download, Play, Code, Gamepad2, Monitor, Database, Book, Zap, Heart, Building2, Rocket, Eye, Trophy, Crown, Diamond, Flame } from 'lucide-react';

interface ShowcaseItem {
  id: string;
  title: string;
  category: string;
  type: 'flagship' | 'webapp' | 'game' | 'devlog' | 'tutorial' | 'service';
  status: 'live' | 'beta' | 'development' | 'coming-soon';
  description: string;
  image: string;
  link?: string;
  github?: string;
  stats: {
    users?: string;
    rating?: number;
    downloads?: string;
    version?: string;
  };
  tags: string[];
  featured: boolean;
  tier: 'free' | 'premium' | 'enterprise';
}

const UnifiedShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'cards' | 'showcase'>('showcase');

  const categories = [
    { id: 'ALL', label: 'ALL PRODUCTS', icon: Crown, color: 'from-purple-500 to-pink-500', count: '47+' },
    { id: 'FLAGSHIP', label: 'FLAGSHIP SUITE', icon: Diamond, color: 'from-cyan-500 to-blue-500', count: '5' },
    { id: 'WEBAPPS', label: 'WEB APPLICATIONS', icon: Monitor, color: 'from-emerald-500 to-green-500', count: '15+' },
    { id: 'GAMES', label: 'GAMING UNIVERSE', icon: Gamepad2, color: 'from-orange-500 to-red-500', count: '12+' },
    { id: 'DEVLOGS', label: 'DEVELOPMENT LOGS', icon: Code, color: 'from-blue-500 to-indigo-500', count: '25+' },
    { id: 'TUTORIALS', label: 'LEARNING HUB', icon: Book, color: 'from-violet-500 to-purple-500', count: '30+' },
    { id: 'SERVICES', label: 'STUDIO SERVICES', icon: Rocket, color: 'from-pink-500 to-rose-500', count: '8' }
  ];

  const showcaseItems: ShowcaseItem[] = [
    {
      id: 'codefusion',
      title: 'CodeFusion Studio',
      category: 'FLAGSHIP',
      type: 'flagship',
      status: 'live',
      description: 'Advanced web-based IDE platform with real-time collaboration, AI assistance, and professional development tools.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      link: 'https://github.com/JBLinx-Studio/CodeFusion',
      github: 'https://github.com/JBLinx-Studio/CodeFusion',
      stats: { users: '50k+', rating: 4.9, downloads: '125k+', version: 'v2.1' },
      tags: ['IDE', 'Collaboration', 'AI-Powered', 'Professional'],
      featured: true,
      tier: 'free'
    },
    {
      id: 'vitalitysync',
      title: 'VitalitySync Pro',
      category: 'FLAGSHIP',
      type: 'flagship',
      status: 'live',
      description: 'Comprehensive health tracking platform with advanced analytics, personalized insights, and wellness coaching.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      link: 'https://github.com/JBLinx-Studio/VitalitySync',
      github: 'https://github.com/JBLinx-Studio/VitalitySync',
      stats: { users: '85k+', rating: 4.9, downloads: '200k+', version: 'v3.2' },
      tags: ['Health', 'Analytics', 'Wellness', 'Mobile'],
      featured: true,
      tier: 'premium'
    },
    {
      id: 'mindmate',
      title: 'MindMate Gaming Hub',
      category: 'GAMES',
      type: 'game',
      status: 'live',
      description: 'Strategic board gaming platform featuring chess, tutorials, multiplayer lobbies, and competitive tournaments.',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop',
      link: 'https://github.com/JBLinx-Studio/MindMate',
      github: 'https://github.com/JBLinx-Studio/MindMate',
      stats: { users: '42k+', rating: 4.8, downloads: '95k+', version: 'v1.8' },
      tags: ['Chess', 'Strategy', 'Multiplayer', 'Tournaments'],
      featured: true,
      tier: 'free'
    },
    {
      id: 'nestcore',
      title: 'NestCore Platform',
      category: 'FLAGSHIP',
      type: 'webapp',
      status: 'live',
      description: 'Complete real estate ecosystem for property owners, agents, lawyers, and all real estate stakeholders.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      link: 'https://github.com/JBLinx-Studio/NestCore',
      github: 'https://github.com/JBLinx-Studio/NestCore',
      stats: { users: '12k+', rating: 4.9, downloads: '35k+', version: 'v2.0' },
      tags: ['Real Estate', 'Enterprise', 'Property Management', 'Professional'],
      featured: true,
      tier: 'enterprise'
    },
    {
      id: 'codecraftai',
      title: 'CodeCraftAI Pro',
      category: 'FLAGSHIP',
      type: 'flagship',
      status: 'beta',
      description: 'AI-powered fullstack development assistant that builds complete applications with intelligent code generation.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      link: 'https://github.com/JBLinx-Studio/CodeCraftAI',
      github: 'https://github.com/JBLinx-Studio/CodeCraftAI',
      stats: { users: '25k+', rating: 4.8, downloads: '67k+', version: 'v1.0-beta' },
      tags: ['AI', 'Fullstack', 'Code Generation', 'Development'],
      featured: true,
      tier: 'premium'
    },
    // Additional showcase items
    {
      id: 'unity-horror-series',
      title: 'Unity Horror Series',
      category: 'DEVLOGS',
      type: 'devlog',
      status: 'development',
      description: 'Development blog series covering advanced Unity horror game development techniques and best practices.',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop',
      link: '/blog/unity-horror',
      stats: { users: '15k+', rating: 4.7 },
      tags: ['Unity', 'Horror', 'Game Dev', 'Tutorial'],
      featured: false,
      tier: 'free'
    },
    {
      id: 'react-masterclass',
      title: 'React Development Masterclass',
      category: 'TUTORIALS',
      type: 'tutorial',
      status: 'live',
      description: 'Comprehensive React development course covering modern patterns, hooks, and advanced techniques.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      link: '/tutorials/react-masterclass',
      stats: { users: '8k+', rating: 4.9 },
      tags: ['React', 'JavaScript', 'Frontend', 'Course'],
      featured: false,
      tier: 'premium'
    }
  ];

  const filteredItems = activeCategory === 'ALL' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === activeCategory);

  const featuredItems = filteredItems.filter(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  const getStatusBadge = (status: string) => {
    const badges = {
      live: { label: 'LIVE', color: 'bg-green-500 text-white' },
      beta: { label: 'BETA', color: 'bg-blue-500 text-white' },
      development: { label: 'DEV', color: 'bg-orange-500 text-white' },
      'coming-soon': { label: 'SOON', color: 'bg-purple-500 text-white' }
    };
    return badges[status as keyof typeof badges] || badges.live;
  };

  const getTierBadge = (tier: string) => {
    const badges = {
      free: { label: 'FREE', color: 'bg-emerald-500 text-white' },
      premium: { label: 'PREMIUM', color: 'bg-gradient-to-r from-orange-500 to-red-500 text-white' },
      enterprise: { label: 'ENTERPRISE', color: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' }
    };
    return badges[tier as keyof typeof badges] || badges.free;
  };

  const renderShowcaseView = () => (
    <div className="space-y-8">
      {/* Featured Items - Hero Grid */}
      {featuredItems.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Crown className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-black text-white font-mono">FLAGSHIP SHOWCASE</h3>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-yellow-400 to-transparent"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {featuredItems.slice(0, 2).map((item) => (
              <div key={item.id} className="group relative bg-slate-800/90 border border-slate-700 hover:border-cyan-400/60 transition-all duration-300 overflow-hidden rounded-xl">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  
                  {/* Status & Tier Badges */}
                  <div className="absolute top-3 left-3 flex space-x-2">
                    <span className={`px-2 py-1 text-xs font-black ${getStatusBadge(item.status).color} rounded-full`}>
                      {getStatusBadge(item.status).label}
                    </span>
                    <span className={`px-2 py-1 text-xs font-black ${getTierBadge(item.tier).color} rounded-full`}>
                      {getTierBadge(item.tier).label}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 text-xs font-black rounded-full flex items-center space-x-1">
                      <Crown className="w-3 h-3" />
                      <span>FLAGSHIP</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-white font-black text-lg font-mono group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <div className="text-cyan-400 text-sm font-bold">{item.category}</div>
                    </div>
                    <div className="text-right">
                      {item.stats.rating && (
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-slate-300 font-bold">{item.stats.rating}</span>
                        </div>
                      )}
                      <div className="text-slate-400 text-xs">{item.stats.users}</div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-slate-700/80 text-cyan-400 px-2 py-1 text-xs font-bold rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats & Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{item.stats.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{item.stats.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Code className="w-3 h-3" />
                        <span>{item.stats.version}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {item.github && (
                        <a href={item.github} target="_blank" rel="noopener noreferrer"
                           className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                           className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-bold text-xs transition-colors flex items-center space-x-1">
                          <span>LAUNCH</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining featured items in smaller grid */}
          {featuredItems.length > 2 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredItems.slice(2).map((item) => (
                <div key={item.id} className="bg-slate-800/90 border border-slate-700 hover:border-cyan-400/60 transition-all duration-300 rounded-xl overflow-hidden">
                  <div className="relative h-32 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute top-2 left-2 flex space-x-1">
                      <span className={`px-1.5 py-0.5 text-xs font-black ${getStatusBadge(item.status).color} rounded`}>
                        {getStatusBadge(item.status).label}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-black text-sm font-mono mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Users className="w-3 h-3" />
                        <span>{item.stats.users}</span>
                      </div>
                      {item.link && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer"
                           className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded text-xs font-bold transition-colors">
                          VIEW
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Regular Items */}
      {regularItems.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Monitor className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-black text-white font-mono">MORE PRODUCTS</h3>
            <div className="h-0.5 flex-1 bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regularItems.map((item) => (
              <div key={item.id} className="bg-slate-800/90 border border-slate-700 hover:border-blue-400/60 transition-all duration-300 rounded-xl overflow-hidden">
                <div className="relative h-32 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-2 left-2 flex space-x-1">
                    <span className={`px-1.5 py-0.5 text-xs font-black ${getStatusBadge(item.status).color} rounded`}>
                      {getStatusBadge(item.status).label}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-black text-sm font-mono mb-1">{item.title}</h4>
                  <div className="text-blue-400 text-xs font-bold mb-2">{item.category}</div>
                  <p className="text-slate-400 text-xs mb-3 line-clamp-2">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-slate-700/60 text-slate-300 px-1.5 py-0.5 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-slate-400">
                      {item.stats.users && (
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{item.stats.users}</span>
                        </div>
                      )}
                      {item.stats.rating && (
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{item.stats.rating}</span>
                        </div>
                      )}
                    </div>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                         className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold transition-colors">
                        VIEW
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/90 border border-purple-400/40 px-4 py-2 mb-4 backdrop-blur-sm rounded-xl">
            <Crown className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-wider">JBLINX STUDIO UNIVERSE</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            COMPLETE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SHOWCASE HUB</span>
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-4"></div>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Flagship products, web applications, games, development logs, tutorials, and professional services
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative flex items-center px-4 py-3 text-sm font-black transition-all duration-300 group rounded-xl ${
                    activeCategory === category.id 
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105` 
                      : 'bg-slate-800/80 text-slate-400 hover:bg-slate-700/80 border border-slate-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  <div className="text-center">
                    <div className="text-xs font-black">{category.label}</div>
                    <div className="text-xs opacity-80">{category.count}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-slate-800/80 border border-slate-600 rounded-lg p-1 flex">
              {[
                { id: 'showcase', label: 'SHOWCASE', icon: Crown },
                { id: 'grid', label: 'GRID', icon: Monitor },
                { id: 'cards', label: 'CARDS', icon: Database }
              ].map((mode) => {
                const IconComponent = mode.icon;
                return (
                  <button
                    key={mode.id}
                    onClick={() => setViewMode(mode.id as any)}
                    className={`flex items-center px-3 py-2 text-xs font-bold transition-all duration-300 rounded ${
                      viewMode === mode.id
                        ? 'bg-cyan-500 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-3 h-3 mr-1" />
                    {mode.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-8">
          {renderShowcaseView()}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 p-6 text-center rounded-xl">
          <h3 className="text-2xl font-black text-white mb-3 font-mono">
            EXPLORE <span className="text-cyan-400">EVERYTHING</span>
          </h3>
          <p className="text-slate-400 mb-6">
            From flagship products to development tutorials, discover the complete JBLinx Studio ecosystem
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/orgs/JBLinx-Studio/repositories" target="_blank" rel="noopener noreferrer"
               className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 font-black transition-all duration-300 flex items-center justify-center space-x-2 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25">
              <Github className="w-4 h-4" />
              <span>VIEW ALL REPOSITORIES</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 font-black transition-all duration-300 rounded-xl">
              CONTACT STUDIO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedShowcase;
