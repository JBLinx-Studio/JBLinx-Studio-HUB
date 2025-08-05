
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
      title: "Tactical Strike Force",
      category: "Multiplayer First-Person Shooter",
      platform: "PC • Console",
      status: "RELEASED",
      releaseDate: "Dec 2024",
      description: "Competitive tactical FPS with team-based gameplay. Advanced weapon customization and strategic map control in intense 5v5 battles.",
      trailer: "https://example.com/tactical-strike-trailer",
      images: [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
      ],
      rating: "4.8",
      downloads: "15.2k",
      reviews: 892,
      price: "$39.99",
      features: ["Team-Based Combat", "Weapon Customization", "Ranked Matches", "Anti-Cheat"],
      dlcs: [
        { name: "Urban Warfare Pack", price: "$14.99", releaseDate: "Jan 2025", status: "PRE-ORDER" },
        { name: "Elite Operator Skins", price: "$9.99", releaseDate: "Available", status: "AVAILABLE" }
      ],
      updates: [
        { version: "3.2.1", date: "2 days ago", notes: "Weapon balance updates and new map rotation" },
        { version: "3.2.0", date: "1 week ago", notes: "Added new competitive mode and performance improvements" }
      ],
      blogPosts: [1, 3, 8]
    },
    {
      id: 2,
      title: "Empire Conquest RTS",
      category: "Real-Time Strategy",
      platform: "PC • Mac",
      status: "RELEASED",
      releaseDate: "Nov 2024",
      description: "Build massive civilizations and command epic battles across land, sea, and air. Advanced AI and complex resource management create deep strategic gameplay.",
      trailer: "https://example.com/empire-conquest-trailer",
      images: [
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
      ],
      rating: "4.9",
      downloads: "8.7k",
      reviews: 456,
      price: "$49.99",
      features: ["Base Building", "Epic Battles", "Campaign Mode", "Multiplayer"],
      dlcs: [
        { name: "Ancient Dynasties", price: "$19.99", releaseDate: "Feb 2025", status: "COMING SOON" },
        { name: "Naval Warfare Expansion", price: "$12.99", releaseDate: "Available", status: "AVAILABLE" }
      ],
      updates: [
        { version: "2.4.3", date: "1 week ago", notes: "Balance changes and new units added" },
        { version: "2.4.2", date: "2 weeks ago", notes: "UI improvements and bug fixes" }
      ],
      blogPosts: [2, 6]
    },
    {
      id: 3,
      title: "Last Haven Survival",
      category: "Survival Horror",
      platform: "PC • Console",
      status: "EARLY ACCESS",
      releaseDate: "Q1 2025",
      description: "Survive in a post-apocalyptic world filled with dangers. Craft, build, and fight for resources while managing hunger, thirst, and sanity.",
      trailer: "https://example.com/last-haven-trailer",
      images: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=600&h=400&fit=crop"
      ],
      rating: "4.6",
      downloads: "12.1k",
      reviews: 723,
      price: "$29.99",
      features: ["Base Building", "Crafting System", "Day/Night Cycle", "Co-op Mode"],
      dlcs: [
        { name: "Winter Wasteland", price: "$15.99", releaseDate: "Mar 2025", status: "COMING SOON" }
      ],
      updates: [
        { version: "0.8.5", date: "3 days ago", notes: "New crafting recipes and performance optimization" },
        { version: "0.8.4", date: "1 week ago", notes: "Added new enemy types and improved AI" }
      ],
      blogPosts: [5, 9]
    },
    {
      id: 4,
      title: "Stellar Frontier",
      category: "Top-Down Space Exploration",
      platform: "PC • Mobile",
      status: "BETA",
      releaseDate: "Q2 2025",
      description: "Explore vast galaxies, trade with alien civilizations, and build your space empire. Procedurally generated worlds with endless possibilities.",
      trailer: "https://example.com/stellar-frontier-trailer",
      images: [
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600&h=400&fit=crop"
      ],
      rating: "4.7",
      downloads: "6.3k",
      reviews: 234,
      price: "FREE BETA",
      features: ["Procedural Worlds", "Space Trading", "Fleet Combat", "Planet Colonies"],
      dlcs: [
        { name: "Alien Races Pack", price: "$11.99", releaseDate: "Apr 2025", status: "COMING SOON" }
      ],
      updates: [
        { version: "0.6.2", date: "4 days ago", notes: "New star systems and improved trading mechanics" },
        { version: "0.6.1", date: "10 days ago", notes: "Beta optimization and UI improvements" }
      ],
      blogPosts: [4, 7]
    },
    {
      id: 5,
      title: "Pocket Heroes Quest",
      category: "Mobile RPG Adventure",
      platform: "Mobile • Tablet",
      status: "RELEASED",
      releaseDate: "Oct 2024",
      description: "Epic mobile RPG with stunning visuals and deep character progression. Collect heroes, explore dungeons, and engage in strategic turn-based combat.",
      trailer: "https://example.com/pocket-heroes-trailer",
      images: [
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&h=400&fit=crop"
      ],
      rating: "4.5",
      downloads: "45.7k",
      reviews: 1203,
      price: "FREE",
      features: ["Hero Collection", "Turn-Based Combat", "Daily Quests", "PvP Arena"],
      dlcs: [
        { name: "Legendary Heroes Pack", price: "$7.99", releaseDate: "Available", status: "AVAILABLE" },
        { name: "Premium Adventure Pass", price: "$4.99", releaseDate: "Available", status: "AVAILABLE" }
      ],
      updates: [
        { version: "1.5.2", date: "1 day ago", notes: "New heroes added and balance improvements" },
        { version: "1.5.1", date: "5 days ago", notes: "Bug fixes and performance optimization" }
      ],
      blogPosts: [8, 10]
    },
    {
      id: 6,
      title: "Web Warriors Arena",
      category: "Browser-Based Strategy",
      platform: "Web • Cross-Platform",
      status: "RELEASED",
      releaseDate: "Sep 2024",
      description: "Fast-paced web-based strategy game playable directly in your browser. No downloads required. Build armies and conquer territories online.",
      trailer: "https://example.com/web-warriors-trailer",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
      ],
      rating: "4.4",
      downloads: "23.8k",
      reviews: 567,
      price: "FREE",
      features: ["No Download Required", "Cross-Platform", "Real-time PvP", "Clan System"],
      dlcs: [
        { name: "Premium Commander Pack", price: "$9.99", releaseDate: "Available", status: "AVAILABLE" }
      ],
      updates: [
        { version: "2.1.8", date: "6 days ago", notes: "New maps and improved matchmaking" },
        { version: "2.1.7", date: "2 weeks ago", notes: "Performance improvements and new features" }
      ],
      blogPosts: [6, 9]
    }
  ];

  const gameCategories = [
    { id: 'all', name: 'All Games', count: featuredGames.length },
    { id: 'fps', name: 'FPS/Shooter', count: 1 },
    { id: 'rts', name: 'RTS/Strategy', count: 2 },
    { id: 'survival', name: 'Survival', count: 1 },
    { id: 'space', name: 'Space/Sci-Fi', count: 1 },
    { id: 'mobile', name: 'Mobile Games', count: 2 },
    { id: 'web', name: 'Web Games', count: 1 }
  ];

  const upcomingReleases = [
    { title: "Tactical Strike DLC", date: "Jan 15, 2025", platform: "PC", type: "DLC" },
    { title: "Last Haven Full Release", date: "Mar 1, 2025", platform: "All", type: "Full Release" },
    { title: "Stellar Frontier Beta 2", date: "Feb 15, 2025", platform: "Mobile", type: "Beta" },
    { title: "Empire Conquest Expansion", date: "Apr 10, 2025", platform: "PC", type: "Expansion" }
  ];

  const communityStats = [
    { label: "ACTIVE PLAYERS", value: "127.3k", change: "+18%" },
    { label: "TOTAL DOWNLOADS", value: "2.1M", change: "+32%" },
    { label: "AVERAGE RATING", value: "4.7★", change: "+0.3" },
    { label: "MONTHLY REVENUE", value: "$485k", change: "+24%" }
  ];

  const sampleReviews = [
    {
      id: 1,
      username: "TacticalGamer99",
      rating: 5,
      date: "1 day ago",
      comment: "Tactical Strike Force is incredible! The team coordination mechanics are perfectly balanced.",
      helpful: 42,
      platform: "PC",
      verified: true
    },
    {
      id: 2,
      username: "RTSMaster",
      rating: 5,
      date: "2 days ago",
      comment: "Empire Conquest brings back the golden age of RTS games with modern polish.",
      helpful: 38,
      platform: "PC",
      verified: true
    },
    {
      id: 3,
      username: "SurvivalFan",
      rating: 4,
      date: "3 days ago",
      comment: "Last Haven's atmosphere is amazing, can't wait for full release!",
      helpful: 29,
      platform: "Console",
      verified: true
    },
    {
      id: 4,
      username: "SpaceExplorer",
      rating: 5,
      date: "1 week ago",
      comment: "Stellar Frontier's procedural generation creates endless possibilities.",
      helpful: 15,
      platform: "Mobile",
      verified: false
    }
  ];

  const reviewStats = {
    totalReviews: 4075,
    averageRating: 4.7,
    ratingBreakdown: { 5: 2845, 4: 823, 3: 285, 2: 87, 1: 35 }
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
            Professional game library featuring FPS, RTS, Survival, Space Exploration, Mobile RPGs, and Web Games with dev insights
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
          {/* Panel 1: Featured Games Library */}
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
                {[
                  { id: 1, title: "Tactical Strike: Weapon Balance Design", category: "FPS Development" },
                  { id: 2, title: "Empire Conquest: AI Behavior Systems", category: "RTS Engineering" },
                  { id: 3, title: "Last Haven: Procedural World Generation", category: "Survival Tech" },
                  { id: 4, title: "Stellar Frontier: Galaxy Creation Pipeline", category: "Space Simulation" },
                  { id: 5, title: "Mobile Optimization: Cross-Platform Performance", category: "Mobile Development" },
                  { id: 6, title: "Web Warriors: Browser Engine Performance", category: "Web Technology" }
                ].map((article) => (
                  <Link
                    key={article.id}
                    to={`/blog/${article.id}`}
                    className="bg-slate-900/50 border border-orange-400/30 p-4 hover:border-orange-400 transition-all duration-300 group"
                  >
                    <div className="text-white font-bold text-sm mb-2 group-hover:text-orange-300 transition-colors">
                      {article.title}
                    </div>
                    <div className="text-slate-400 text-xs mb-2">
                      Technical insights from our development team
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="bg-orange-500 text-black px-2 py-1 text-xs font-bold">{article.category}</span>
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
