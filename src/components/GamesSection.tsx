
import React, { useState } from 'react';
import { ArrowRight, Trophy, Play, Gamepad2, TrendingUp, Bell, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';
import GameCard from './games/GameCard';
import GameAnalytics from './games/GameAnalytics';
import CommunityEngagement from './games/CommunityEngagement';
import DLCUpdatesPanel from './games/DLCUpdatesPanel';

const GamesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredGames = [
    {
      id: 1,
      title: "Survival Horror Chronicles",
      category: "Horror/Survival",
      platform: "PC • Mobile • VR",
      status: "RELEASED",
      releaseDate: "Dec 2024",
      description: "Experience ultimate psychological horror with cutting-edge AI that adapts to your playstyle. Every decision matters in this atmospheric survival experience with immersive VR support.",
      trailer: "https://example.com/trailer1",
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
      ],
      rating: "4.8",
      downloads: "52.3k",
      reviews: 2847,
      price: "$24.99",
      features: ["Advanced AI", "VR Ready", "Multiplayer Co-op", "Dynamic Weather"],
      analytics: {
        dailyPlayers: "8.2k",
        monthlyGrowth: "+34%",
        avgSessionTime: "2.3h",
        retention: "78%",
        wishlistCount: "15.7k",
        streamViews: "1.2M"
      },
      blogPosts: [1, 3, 8]
    },
    {
      id: 2,
      title: "Strategic Conquest RTS",
      category: "Real-Time Strategy",
      platform: "PC • Mac • Linux",
      status: "RELEASED",
      releaseDate: "Nov 2024",
      description: "Command vast armies in epic 64-player battles with advanced AI opponents, complex resource management, and tournament-grade competitive play.",
      trailer: "https://example.com/trailer2",
      images: [
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
      ],
      rating: "4.9",
      downloads: "31.8k",
      reviews: 1563,
      price: "$39.99",
      features: ["64 Player Battles", "Campaign Mode", "Mod Support", "Tournament Mode"],
      analytics: {
        dailyPlayers: "5.1k",
        monthlyGrowth: "+28%",
        avgSessionTime: "1.8h",
        retention: "82%",
        wishlistCount: "9.3k",
        streamViews: "890k"
      },
      blogPosts: [2, 6]
    },
    {
      id: 3,
      title: "Adventure Quest RPG",
      category: "Action/Adventure RPG",
      platform: "Mobile • PC • Console",
      status: "BETA",
      releaseDate: "Q2 2025",
      description: "Embark on an epic cross-platform journey through mystical realms with deep character progression, branching storylines, and guild-based multiplayer adventures.",
      trailer: "https://example.com/trailer3",
      images: [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop"
      ],
      rating: "4.7",
      downloads: "28.5k",
      reviews: 892,
      price: "FREE BETA",
      features: ["Open World", "Cross Platform", "Guild Wars", "Crafting System"],
      analytics: {
        dailyPlayers: "12.7k",
        monthlyGrowth: "+67%",
        avgSessionTime: "3.1h",
        retention: "71%",
        wishlistCount: "47.2k",
        streamViews: "2.8M"
      },
      blogPosts: [5, 9]
    }
  ];

  const gameCategories = [
    { id: 'all', name: 'All Games', count: featuredGames.length },
    { id: 'horror', name: 'Horror', count: 1 },
    { id: 'strategy', name: 'Strategy', count: 1 },
    { id: 'rpg', name: 'RPG', count: 1 },
    { id: 'mobile', name: 'Mobile', count: 2 },
    { id: 'vr', name: 'VR Ready', count: 1 }
  ];

  const analyticsData = {
    totalPlayers: "145.2k",
    activeNow: "26.0k",
    monthlyGrowth: "+43%",
    totalDownloads: "1.2M",
    averageRating: "4.8",
    totalReviews: "5.3k",
    streamingViews: "5.9M",
    communitySize: "89.1k",
    revenue: "$847k",
    conversionRate: "12.4%"
  };

  const communityActivity = [
    {
      type: 'stream',
      user: 'StreamerPro_2024',
      content: 'Just hit a 15-kill streak in Survival Horror! This AI adaptation is insane! 🔥',
      time: '2 mins ago',
      engagement: 127
    },
    {
      type: 'review',
      user: 'RPGMaster_X',
      content: 'Adventure Quest RPG beta exceeded all expectations. The guild system is revolutionary!',
      time: '8 mins ago',
      engagement: 89
    },
    {
      type: 'achievement',
      user: 'StrategyKing',
      content: 'First player to complete Strategic Conquest campaign on Nightmare difficulty!',
      time: '15 mins ago',
      engagement: 203
    },
    {
      type: 'update',
      user: 'JBLinx_DevTeam',
      content: 'Patch 2.1.6 now live! New multiplayer maps and AI improvements based on your feedback.',
      time: '1 hour ago',
      engagement: 445
    }
  ];

  const upcomingEvents = [
    {
      title: 'Horror Chronicles Tournament',
      date: 'Jan 20, 2025 - 8 PM EST',
      type: 'tournament' as const,
      participants: '2.4k'
    },
    {
      title: 'RTS Strategy Stream with Devs',
      date: 'Jan 18, 2025 - 3 PM EST', 
      type: 'stream' as const,
      participants: '890'
    },
    {
      title: 'RPG Beta Update 0.9.5',
      date: 'Jan 25, 2025',
      type: 'update' as const
    },
    {
      title: 'Cross-Platform Beta Launch',
      date: 'Feb 1, 2025',
      type: 'beta' as const,
      participants: '15.2k'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-6 py-3 mb-6 backdrop-blur-sm">
            <Trophy className="w-5 h-5 mr-3 text-purple-400" />
            <span className="text-purple-400 font-black text-lg font-mono tracking-widest">PRIORITY #1: GAMERS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            PREMIUM <span className="text-purple-400">GAMING</span> + <span className="text-pink-400">DEV CONTENT</span>
          </h2>
          
          <div className="w-24 h-0.5 bg-purple-400 mx-auto mb-6"></div>
          
          <p className="text-slate-300 max-w-3xl mx-auto text-lg">
            Professional game development showcasing our premium titles with real-time analytics, 
            community engagement, dev logs, DLC content, and live player feedback
          </p>
        </div>

        {/* Game Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {gameCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-black transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Enhanced Content Panels */}
        <HorizontalDragContainer className="mb-8" showNavigation={true}>
          {/* Panel 1: Featured Games with Analytics */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {featuredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>

          {/* Panel 2: Live Analytics Dashboard */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <GameAnalytics analytics={analyticsData} />
          </div>

          {/* Panel 3: Community Hub & Engagement */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CommunityEngagement 
                recentActivity={communityActivity}
                upcomingEvents={upcomingEvents}
              />
              
              {/* DLC & Updates Panel */}
              <DLCUpdatesPanel 
                dlcs={featuredGames.flatMap(game => game.features.slice(0, 2).map(feature => ({ 
                  name: `${feature} DLC Pack`,
                  price: "$9.99",
                  releaseDate: "Available Now",
                  status: "AVAILABLE",
                  image: game.images[0],
                  description: `Enhanced ${feature.toLowerCase()} experience with new content and features.`
                })))}
                updates={featuredGames.map(game => ({ 
                  version: "2.1.6",
                  date: "3 days ago",
                  notes: `Performance optimizations and ${game.features[0].toLowerCase()} improvements`,
                  downloads: Math.floor(parseInt(game.downloads.replace('k', '')) * 0.8) + "k",
                  rating: game.rating
                }))}
              />
            </div>
          </div>

          {/* Panel 4: Dev Blog Integration */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <div className="bg-slate-800/95 border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Gamepad2 className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-400 font-black text-lg font-mono">DEV CONTENT & UPDATES</span>
                </div>
                <Link to="/blog" className="text-orange-400 hover:text-orange-300 font-bold flex items-center space-x-1">
                  <span>View All</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: 1, title: "Horror AI Deep Dive", type: "DEV LOG", views: "12.3k", engagement: "89%" },
                  { id: 2, title: "RTS Networking Architecture", type: "TECHNICAL", views: "8.7k", engagement: "92%" },
                  { id: 3, title: "RPG Beta Feedback Analysis", type: "UPDATE", views: "15.1k", engagement: "87%" },
                  { id: 4, title: "VR Implementation Guide", type: "TUTORIAL", views: "6.2k", engagement: "94%" },
                  { id: 5, title: "Mobile Optimization Tips", type: "DEV LOG", views: "9.8k", engagement: "85%" },
                  { id: 6, title: "Community Spotlight", type: "FEATURE", views: "11.4k", engagement: "91%" }
                ].map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="bg-slate-900/50 border border-orange-400/30 p-4 hover:border-orange-400 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 text-xs font-black ${
                        post.type === 'DEV LOG' ? 'bg-orange-500 text-black' :
                        post.type === 'TECHNICAL' ? 'bg-red-500 text-white' :
                        post.type === 'UPDATE' ? 'bg-green-500 text-white' :
                        post.type === 'TUTORIAL' ? 'bg-blue-500 text-white' :
                        'bg-purple-500 text-white'
                      }`}>
                        {post.type}
                      </span>
                      <div className="text-xs text-slate-400 flex items-center space-x-2">
                        <span>{post.views} views</span>
                        <TrendingUp className="w-3 h-3 text-green-400" />
                      </div>
                    </div>
                    <div className="text-white font-bold text-sm mb-2 group-hover:text-orange-300 transition-colors">
                      {post.title}
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">2 days ago</span>
                      <span className="text-green-400 font-bold">{post.engagement} engagement</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </HorizontalDragContainer>

        {/* Navigation & CTA */}
        <div className="text-center mb-8">
          <div className="text-slate-500 text-sm font-mono mb-4 flex items-center justify-center space-x-4">
            <Bell className="w-4 h-4" />
            <span>← DRAG OR USE NAVIGATION TO EXPLORE ALL GAMING CONTENT →</span>
            <Users className="w-4 h-4" />
          </div>
          
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-8 py-4 font-black transition-all duration-300 space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Play className="w-5 h-5" />
            <span>EXPLORE ALL PREMIUM GAMES</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
