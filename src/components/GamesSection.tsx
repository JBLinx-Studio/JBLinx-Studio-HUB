
import React, { useState } from 'react';
import { 
  Gamepad2, 
  Play, 
  Download, 
  Star, 
  Users, 
  Trophy,
  TrendingUp,
  Zap,
  ArrowRight,
  Eye,
  Clock,
  Target,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GameCard from './games/GameCard';
import FeaturedGameHero from './games/FeaturedGameHero';
import GameDetailsPanel from './games/GameDetailsPanel';
import DLCUpdatesPanel from './games/DLCUpdatesPanel';
import DeveloperInsights from './games/DeveloperInsights';
import AdditionalGamesContent from './games/AdditionalGamesContent';
import { gamesData, gameStats } from '../data/gamesData';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [selectedPanel, setSelectedPanel] = useState('details');

  const currentGame = gamesData[activeGame];

  const getIconComponent = (iconName: string) => {
    const icons = { Gamepad2, Users, Star, Trophy };
    return icons[iconName as keyof typeof icons] || Gamepad2;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 py-24 overflow-hidden">
      {/* Gaming-themed unique background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Primary gaming ambient lighting with circuit-like patterns */}
        <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-gradient-conic from-purple-500/10 via-cyan-500/8 to-pink-500/6 blur-3xl rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-conic from-blue-500/12 via-violet-500/8 to-purple-500/6 blur-3xl rounded-full animate-spin" style={{animationDelay: '10s', animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Gaming matrix-style grid overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(45deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 60px 60px, 40px 40px, 40px 40px'
          }}></div>
        </div>

        {/* Floating gaming elements - pixelated and gaming-themed */}
        <div className="absolute top-1/3 left-1/6 w-6 h-6 bg-purple-400/60 animate-bounce border-2 border-purple-400/80 shadow-lg shadow-purple-400/40" style={{clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)', animationDelay: '0s'}}></div>
        <div className="absolute top-1/5 right-1/4 w-8 h-8 bg-cyan-400/50 animate-bounce border border-cyan-400/70 shadow-lg shadow-cyan-400/30" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-pink-400/40 animate-bounce border border-pink-400/60 shadow-lg shadow-pink-400/20" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/5 right-1/6 w-12 h-4 bg-violet-400/50 animate-bounce border border-violet-400/70 shadow-lg shadow-violet-400/30" style={{animationDelay: '6s'}}></div>

        {/* Gaming accent lines - more dynamic */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400/60 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-400/60 to-transparent animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Games Header - styled like Services */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-zinc-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Gamepad2 className="w-3 h-3 mr-1 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">GAME UNIVERSE</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            WHAT WE <span className="text-purple-400">PLAY</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-purple-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Immersive gaming experiences across multiple platforms and genres
          </p>

          {/* Game Stats */}
          <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
            {gameStats.map((stat, index) => {
              const IconComponent = getIconComponent(stat.icon);
              return (
                <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-1.5 text-center backdrop-blur-sm">
                  <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Game Selection Grid */}
        <div className="grid lg:grid-cols-4 gap-3 mb-5">
          {gamesData.map((game, index) => {
            const isActive = activeGame === index;
            return (
              <div 
                key={index} 
                className={`bg-zinc-800/95 border transition-all duration-300 cursor-pointer p-3 backdrop-blur-sm ${
                  isActive ? 'border-purple-500/50 shadow-lg' : 'border-zinc-700 hover:border-zinc-600'
                }`}
                onMouseEnter={() => setActiveGame(index)}
              >
                {/* Game Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center`}>
                      <Gamepad2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-black font-mono ${isActive ? 'text-purple-400' : 'text-white'}`}>
                        {game.title}
                      </h3>
                      <p className="text-xs text-slate-400">{game.category}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-bold text-xs">{game.rating}</span>
                    </div>
                    <div className={`text-xs font-bold ${isActive ? 'text-purple-400' : 'text-slate-400'}`}>
                      {game.playerCount}
                    </div>
                  </div>
                </div>

                {/* Game Content */}
                <div className="space-y-2">
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{game.description}</p>
                  
                  {/* Genres */}
                  <div className="flex flex-wrap gap-1">
                    {game.genres.slice(0, 3).map((genre, genreIndex) => (
                      <span 
                        key={genreIndex} 
                        className={`px-2 py-0.5 text-xs font-bold border transition-all duration-300 ${
                          isActive 
                            ? 'border-purple-500/40 bg-purple-500/10 text-purple-400' 
                            : 'border-zinc-600 bg-zinc-700/50 text-slate-300'
                        }`}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-xs">
                      <Users className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-300 font-medium">{game.stats.peakPlayers}k</span>
                    </div>
                    
                    <Link 
                      to={`/game/${game.id}`} 
                      className={`flex items-center space-x-1 text-xs font-bold transition-all duration-300 hover:scale-105 ${
                        isActive ? 'text-purple-400' : 'text-slate-400 hover:text-purple-400'
                      }`}
                    >
                      <span>PLAY</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panel Navigation */}
        <div className="bg-zinc-800/80 border border-zinc-600/50 p-3 mb-4 backdrop-blur-sm">
          <div className="flex justify-center space-x-2">
            {[
              { id: 'details', label: 'GAME DETAILS', icon: Target },
              { id: 'dlc', label: 'DLC & UPDATES', icon: Download },
              { id: 'insights', label: 'DEV INSIGHTS', icon: Eye },
              { id: 'community', label: 'COMMUNITY', icon: Users }
            ].map((panel) => {
              const IconComponent = panel.icon;
              return (
                <button
                  key={panel.id}
                  onClick={() => setSelectedPanel(panel.id)}
                  className={`flex items-center space-x-1 px-3 py-2 text-xs font-bold transition-all duration-300 ${
                    selectedPanel === panel.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-zinc-700/50 text-slate-400 hover:bg-zinc-600/50 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-3 h-3" />
                  <span>{panel.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Panel Content */}
        <div className="bg-zinc-800/80 border border-zinc-600/50 backdrop-blur-sm mb-4">
          {selectedPanel === 'details' && <GameDetailsPanel game={currentGame} />}
          {selectedPanel === 'dlc' && <DLCUpdatesPanel dlcs={currentGame.dlc} updates={[]} />}
          {selectedPanel === 'insights' && <DeveloperInsights games={gamesData} />}
          {selectedPanel === 'community' && (
            <div className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-white font-black text-xl mb-2">JOIN THE COMMUNITY</h3>
              <p className="text-slate-400 mb-4">Connect with players, share strategies, and get the latest updates</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-900/50 border border-purple-400/30 p-4 text-center">
                  <div className="text-purple-400 font-black text-xl">150k+</div>
                  <div className="text-slate-400 text-sm">Active Players</div>
                </div>
                <div className="bg-zinc-900/50 border border-blue-400/30 p-4 text-center">
                  <div className="text-blue-400 font-black text-xl">50+</div>
                  <div className="text-slate-400 text-sm">Tournaments</div>
                </div>
                <div className="bg-zinc-900/50 border border-cyan-400/30 p-4 text-center">
                  <div className="text-cyan-400 font-black text-xl">24/7</div>
                  <div className="text-slate-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Zap className="w-3 h-3" />
            <span>EXPLORE ALL GAMES</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
