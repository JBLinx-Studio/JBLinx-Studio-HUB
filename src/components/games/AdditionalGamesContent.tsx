
import React from 'react';
import { 
  Gamepad2, 
  Trophy, 
  Zap, 
  Target, 
  Shield, 
  Sword, 
  Skull, 
  Crown,
  Download,
  Star,
  Users,
  Clock,
  Play,
  Heart,
  Share2,
  Award,
  Flame,
  Gem
} from 'lucide-react';

const AdditionalGamesContent = () => {
  const exclusiveGames = [
    {
      title: "Shadow Protocol",
      category: "Stealth Action", 
      downloads: "15.2k",
      rating: "4.9",
      status: "EXCLUSIVE",
      description: "Master the art of infiltration in this tactical stealth masterpiece",
      tech: ["Unity HDRP", "AI Director", "Dolby Atmos", "HDR10"],
      price: "$59.99",
      players: "1-2",
      difficulty: "EXPERT",
      playtime: "40+ hrs",
      image: "/api/placeholder/400/300"
    },
    {
      title: "Neon Velocity",
      category: "Arcade Racing",
      downloads: "22.8k", 
      rating: "4.8",
      status: "HOT",
      description: "High-speed racing through synthwave cityscapes with dynamic beats",
      tech: ["Custom Engine", "Procedural Music", "8K Textures", "RTX"],
      price: "$34.99",
      players: "1-16",
      difficulty: "MEDIUM",
      playtime: "25+ hrs",
      image: "/api/placeholder/400/300"
    }
  ];

  const premiumContent = [
    { title: "VIP Season Pass 2024", type: "SEASON PASS", downloads: "8.5k", price: "$149", icon: Crown },
    { title: "Pro Developer Bundle", type: "TOOLKIT", downloads: "12.3k", price: "$89", icon: Gem },
    { title: "Exclusive Art Collection", type: "DIGITAL ART", downloads: "18.7k", price: "$39", icon: Heart },
    { title: "Soundtrack Mastered", type: "AUDIO", downloads: "25.1k", price: "$19", icon: Play }
  ];

  const achievements = [
    { name: "Gaming Legend", icon: Crown, rarity: "MYTHIC", progress: "95/100", color: "text-red-400" },
    { name: "Speed Demon", icon: Zap, rarity: "LEGENDARY", progress: "78/80", color: "text-yellow-400" },
    { name: "Master Tactician", icon: Target, rarity: "EPIC", progress: "45/50", color: "text-purple-400" },
    { name: "Combat Veteran", icon: Sword, rarity: "RARE", progress: "123/150", color: "text-blue-400" }
  ];

  return (
    <div className="flex space-x-6 min-w-max">
      {/* Exclusive Games Showcase */}
      <div className="bg-slate-900/95 border border-slate-700/50 p-6 min-w-[450px]">
        <div className="flex items-center space-x-2 mb-6">
          <Flame className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-black text-lg font-mono">EXCLUSIVE RELEASES</span>
        </div>
        
        <div className="space-y-6">
          {exclusiveGames.map((game, index) => (
            <div key={index} className="bg-slate-800/80 border border-orange-400/30 overflow-hidden group">
              {/* Game Image */}
              <div className="relative h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-black px-3 py-1 font-black text-xs transition-colors">
                      PREVIEW
                    </button>
                    <div className="flex space-x-1">
                      <button className="bg-black/50 p-1 hover:bg-black/70 transition-colors">
                        <Heart className="w-3 h-3 text-white" />
                      </button>
                      <button className="bg-black/50 p-1 hover:bg-black/70 transition-colors">
                        <Share2 className="w-3 h-3 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 text-xs font-black ${
                    game.status === 'EXCLUSIVE' ? 'bg-orange-500 text-black' : 'bg-red-500 text-white'
                  }`}>
                    {game.status}
                  </span>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-black text-lg font-mono">{game.title}</h3>
                    <div className="text-orange-400 font-bold text-sm">{game.category}</div>
                  </div>
                  <div className="text-green-400 font-black text-lg">{game.price}</div>
                </div>
                
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{game.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {game.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-700/50 text-cyan-400 px-2 py-1 text-xs font-bold border border-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-4 gap-1 mb-4">
                  {[
                    { icon: Users, value: game.players, label: "PLAYERS" },
                    { icon: Clock, value: game.playtime, label: "TIME" },
                    { icon: Shield, value: game.difficulty, label: "LEVEL" },
                    { icon: Star, value: game.rating, label: "RATING" }
                  ].map((stat, statIndex) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={statIndex} className="bg-slate-700/50 border border-slate-600 p-2 text-center">
                        <IconComponent className="w-3 h-3 mx-auto mb-1 text-orange-400" />
                        <div className="text-xs font-black text-white">{stat.value}</div>
                        <div className="text-xs font-bold text-slate-400">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-black px-4 py-2 font-black transition-all duration-300">
                  GET EXCLUSIVE ACCESS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Content */}
      <div className="bg-slate-900/95 border border-slate-700/50 p-6 min-w-[350px]">
        <div className="flex items-center space-x-2 mb-6">
          <Gem className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400 font-black text-lg font-mono">PREMIUM VAULT</span>
        </div>
        
        <div className="space-y-4">
          {premiumContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <div key={index} className="bg-slate-800/80 border border-purple-400/30 p-4 group hover:bg-slate-800 transition-colors">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-purple-500/20 p-2 group-hover:bg-purple-500/30 transition-colors">
                    <IconComponent className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold text-sm">{content.title}</div>
                    <span className="bg-purple-500 text-black px-2 py-1 text-xs font-black mt-1 inline-block">
                      {content.type}
                    </span>
                  </div>
                  <div className="text-purple-400 font-black text-lg">{content.price}</div>
                </div>
                <div className="text-slate-400 text-xs flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{content.downloads} downloads</span>
                  </div>
                  <button className="text-purple-400 hover:text-purple-300 font-bold transition-colors">
                    VIEW →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-4 py-3 font-black transition-all duration-300 mt-6">
          UNLOCK PREMIUM VAULT
        </button>
      </div>

      {/* Achievements Panel */}
      <div className="bg-slate-900/95 border border-slate-700/50 p-6 min-w-[320px]">
        <div className="flex items-center space-x-2 mb-6">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 font-black text-lg font-mono">HALL OF FAME</span>
        </div>
        
        <div className="space-y-4">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const progressArray = achievement.progress.split('/');
            const current = parseInt(progressArray[0]);
            const total = parseInt(progressArray[1]);
            const percentage = (current / total) * 100;
            
            return (
              <div key={index} className="bg-slate-800/80 border border-yellow-400/30 p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-yellow-500/20 p-2">
                    <IconComponent className={`w-5 h-5 ${achievement.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold text-sm">{achievement.name}</div>
                    <span className={`px-2 py-1 text-xs font-black ${
                      achievement.rarity === 'MYTHIC' ? 'bg-red-500 text-white' :
                      achievement.rarity === 'LEGENDARY' ? 'bg-yellow-500 text-black' :
                      achievement.rarity === 'EPIC' ? 'bg-purple-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {achievement.rarity}
                    </span>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Progress: {achievement.progress}</span>
                    <span>{percentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 overflow-hidden">
                    <div 
                      className={`h-2 transition-all duration-700 ${
                        achievement.rarity === 'MYTHIC' ? 'bg-red-400' :
                        achievement.rarity === 'LEGENDARY' ? 'bg-yellow-400' :
                        achievement.rarity === 'EPIC' ? 'bg-purple-400' :
                        'bg-blue-400'
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-4 py-3 font-black transition-all duration-300 mt-6">
          VIEW ALL ACHIEVEMENTS
        </button>
      </div>
    </div>
  );
};

export default AdditionalGamesContent;
