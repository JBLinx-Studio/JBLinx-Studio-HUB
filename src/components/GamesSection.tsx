
import React, { useState } from 'react';
import { ArrowRight, Trophy, Play, Gamepad2, Calendar, Users, Download, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';
import GameShowcase from './games/GameShowcase';
import DLCUpdatesPanel from './games/DLCUpdatesPanel';
import UserFeedback from './games/UserFeedback';

const GamesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredGames = [
    {
      id: 1,
      title: "Survival Horror Chronicles",
      category: "Horror/Survival",
      platform: "PC • Mobile",
      status: "RELEASED",
      releaseDate: "Dec 2024",
      description: "Experience the ultimate psychological horror with cutting-edge AI that adapts to your playstyle. Every decision matters in this atmospheric survival experience.",
      trailer: "https://example.com/trailer1",
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop"
      ],
      rating: "4.8",
      downloads: "5.2k",
      reviews: 234,
      price: "$24.99",
      features: ["Advanced AI", "VR Ready", "Multiplayer Co-op", "Dynamic Weather"],
      dlcs: [
        { name: "Nightmare Expansion", price: "$9.99", releaseDate: "Jan 2025", status: "PRE-ORDER" },
        { name: "Character Pack", price: "$4.99", releaseDate: "Available", status: "AVAILABLE" }
      ],
      updates: [
        { version: "2.1.5", date: "1 week ago", notes: "Fixed lighting issues and improved performance" },
        { version: "2.1.4", date: "2 weeks ago", notes: "Added new multiplayer modes and bug fixes" }
      ],
      blogPosts: [1, 3, 8]
    },
    {
      id: 2,
      title: "Strategic Conquest RTS",
      category: "Real-Time Strategy",
      platform: "PC • Web",
      status: "RELEASED",
      releaseDate: "Nov 2024",
      description: "Command vast armies in epic 32-player battles. Advanced AI opponents and complex resource management create the ultimate strategy experience.",
      trailer: "https://example.com/trailer2",
      images: [
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
      ],
      rating: "4.9",
      downloads: "3.1k",
      reviews: 156,
      price: "$29.99",
      features: ["32 Player Battles", "Campaign Mode", "Mod Support", "Spectator Mode"],
      dlcs: [
        { name: "Ancient Civilizations", price: "$14.99", releaseDate: "Feb 2025", status: "COMING SOON" },
        { name: "Map Pack Vol. 1", price: "$7.99", releaseDate: "Available", status: "AVAILABLE" }
      ],
      updates: [
        { version: "1.8.2", date: "3 days ago", notes: "Balance updates for unit damage and new maps" },
        { version: "1.8.1", date: "1 week ago", notes: "Performance optimizations and UI improvements" }
      ],
      blogPosts: [2, 6]
    },
    {
      id: 3,
      title: "Adventure Quest RPG",
      category: "Action/Adventure",
      platform: "Mobile • PC",
      status: "BETA",
      releaseDate: "Q2 2025",
      description: "Embark on an epic journey through mystical realms. Deep character progression and branching storylines create endless possibilities.",
      trailer: "https://example.com/trailer3",
      images: [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop"
      ],
      rating: "4.7",
      downloads: "2.8k",
      reviews: 89,
      price: "FREE BETA",
      features: ["Open World", "Character Customization", "Crafting System", "Guild Wars"],
      dlcs: [],
      updates: [
        { version: "0.9.1", date: "5 days ago", notes: "Beta balance changes and new quest lines" },
        { version: "0.9.0", date: "2 weeks ago", notes: "Major beta update with new regions" }
      ],
      blogPosts: [5, 9]
    }
  ];

  const gameCategories = [
    { id: 'all', name: 'All Games', count: featuredGames.length },
    { id: 'horror', name: 'Horror', count: 1 },
    { id: 'strategy', name: 'Strategy', count: 1 },
    { id: 'rpg', name: 'RPG', count: 1 },
    { id: 'mobile', name: 'Mobile', count: 2 },
    { id: 'web', name: 'Web Games', count: 1 }
  ];

  const upcomingReleases = [
    { title: "Cyber Warfare Pro", date: "Jan 15, 2025", platform: "PC", type: "Full Release" },
    { title: "Racing Legends Mobile", date: "Feb 2, 2025", platform: "Mobile", type: "Beta" },
    { title: "Mystic Realms DLC", date: "Mar 10, 2025", platform: "All", type: "DLC" }
  ];

  const communityStats = [
    { label: "ACTIVE PLAYERS", value: "45.2k", change: "+12%" },
    { label: "TOTAL DOWNLOADS", value: "890k", change: "+25%" },
    { label: "USER RATING", value: "4.8★", change: "+0.2" },
    { label: "MONTHLY REVENUE", value: "$125k", change: "+18%" }
  ];

  const sampleReviews = [
    {
      id: 1,
      username: "GamerPro2024",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely incredible! The graphics and gameplay are top-notch. Best horror game I've played this year.",
      helpful: 24,
      platform: "PC",
      verified: true
    },
    {
      id: 2,
      username: "StrategyMaster",
      rating: 5,
      date: "1 week ago",
      comment: "The RTS game exceeded all expectations. Complex mechanics but very rewarding gameplay.",
      helpful: 18,
      platform: "PC",
      verified: true
    },
    {
      id: 3,
      username: "MobilePlayer",
      rating: 4,
      date: "3 days ago",
      comment: "Great mobile port! Runs smoothly on my device. Looking forward to more updates.",
      helpful: 12,
      platform: "Mobile",
      verified: false
    },
    {
      id: 4,
      username: "RPGFan",
      rating: 4,
      date: "5 days ago",
      comment: "Beta is very promising. Love the character customization and story depth.",
      helpful: 8,
      platform: "PC",
      verified: true
    }
  ];

  const reviewStats = {
    totalReviews: 1247,
    averageRating: 4.8,
    ratingBreakdown: { 5: 867, 4: 245, 3: 89, 2: 32, 1: 14 }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
            <Trophy className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest">PRIORITY #1: GAMERS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-2">
            PREMIUM <span className="text-purple-400">GAMING</span> + <span className="text-pink-400">DEV CONTENT</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-purple-400 mx-auto mb-4"></div>
          
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional game development, showcases, trailers, dev logs, DLC content, updates, and community feedback
          </p>
        </div>

        {/* Game Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {gameCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-slate-800/95 border border-slate-700 p-4 text-center">
              <div className="text-xl font-black text-white font-mono">{stat.value}</div>
              <div className="text-slate-400 text-sm mb-1">{stat.label}</div>
              <div className="text-green-400 text-xs font-bold">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Main Gaming Content */}
        <HorizontalDragContainer className="mb-8" showNavigation={true}>
          {/* Panel 1: Featured Games Showcase */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredGames.map((game) => (
                <GameShowcase key={game.id} game={game} />
              ))}
            </div>
          </div>

          {/* Panel 2: DLC & Updates */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <DLCUpdatesPanel 
              dlcs={featuredGames.flatMap(game => game.dlcs.map(dlc => ({ 
                ...dlc, 
                image: game.images[0],
                description: `Expand your ${game.title} experience with new content and features.`
              })))}
              updates={featuredGames.flatMap(game => game.updates.map(update => ({ 
                ...update, 
                downloads: Math.floor(Math.random() * 1000 + 500) + "",
                rating: (4.5 + Math.random() * 0.5).toFixed(1)
              })))}
            />
          </div>

          {/* Panel 3: Community Feedback */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <UserFeedback reviews={sampleReviews} stats={reviewStats} />
              
              {/* Upcoming Releases */}
              <div className="bg-slate-800/95 border border-slate-700 p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-black text-sm font-mono">UPCOMING RELEASES</span>
                </div>
                
                <div className="space-y-3">
                  {upcomingReleases.map((release, index) => (
                    <div key={index} className="bg-slate-900/50 border border-cyan-400/30 p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="text-white font-bold text-sm">{release.title}</div>
                          <div className="text-cyan-400 text-xs">{release.platform}</div>
                        </div>
                        <span className="bg-cyan-500 text-black px-2 py-1 text-xs font-bold">
                          {release.type}
                        </span>
                      </div>
                      <div className="text-slate-400 text-xs flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{release.date}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 font-black transition-colors mt-4">
                  VIEW RELEASE CALENDAR
                </button>
              </div>
            </div>
          </div>

          {/* Panel 4: Dev Logs & Articles */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <div className="bg-slate-800/95 border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <Gamepad2 className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-400 font-black text-lg font-mono">DEV LOGS & ARTICLES</span>
                </div>
                <Link to="/blog" className="text-orange-400 hover:text-orange-300 text-sm font-bold">
                  View All →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((id) => (
                  <Link
                    key={id}
                    to={`/blog/${id}`}
                    className="bg-slate-900/50 border border-orange-400/30 p-4 hover:border-orange-400 transition-all duration-300 group"
                  >
                    <div className="text-white font-bold text-sm mb-2 group-hover:text-orange-300 transition-colors">
                      Game Development Blog #{id}
                    </div>
                    <div className="text-slate-400 text-xs mb-2 line-clamp-2">
                      Behind the scenes development insights and technical deep-dives
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="bg-orange-500 text-black px-2 py-1 text-xs font-bold">DEV LOG</span>
                      <div className="text-slate-400 text-xs">2 days ago</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </HorizontalDragContainer>

        {/* Navigation Hint */}
        <div className="text-center mb-6">
          <div className="text-slate-500 text-sm font-mono">
            ← DRAG OR USE NAVIGATION TO EXPLORE GAMING CONTENT →
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-6 py-3 font-black transition-all duration-300 space-x-2 shadow-lg"
          >
            <Play className="w-4 h-4" />
            <span>EXPLORE ALL GAMING CONTENT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
