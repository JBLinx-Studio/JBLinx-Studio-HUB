
import React from 'react';
import { Trophy, Gamepad2, Users, Clock, Star, Download, Play, Zap, Target, Shield } from 'lucide-react';

export const GamesCarouselContent = () => {
  const carouselPanels = [
    {
      id: 'horror-survival',
      title: 'HORROR & SURVIVAL',
      subtitle: 'Spine-Chilling Experiences',
      bgColor: 'bg-gradient-to-br from-red-900/20 to-black/40',
      borderColor: 'border-red-500/30',
      items: [
        { name: 'Nightmare Chronicles', downloads: '8.2k', rating: '4.9', status: 'NEW', price: '$24.99' },
        { name: 'Survival Protocol', downloads: '6.1k', rating: '4.8', status: 'HOT', price: '$19.99' },
        { name: 'Dark Asylum', downloads: '4.3k', rating: '4.7', status: 'SALE', price: '$14.99' },
        { name: 'Zombie Outbreak', downloads: '9.5k', rating: '4.9', status: 'POPULAR', price: '$29.99' }
      ]
    },
    {
      id: 'strategy-rts',
      title: 'STRATEGY & RTS',
      subtitle: 'Command & Conquer',
      bgColor: 'bg-gradient-to-br from-blue-900/20 to-indigo-900/40',
      borderColor: 'border-blue-500/30',
      items: [
        { name: 'Empire Builder Pro', downloads: '12.1k', rating: '4.9', status: 'BESTSELLER', price: '$39.99' },
        { name: 'Galactic Conquest', downloads: '7.8k', rating: '4.8', status: 'NEW', price: '$34.99' },
        { name: 'Medieval Kingdoms', downloads: '5.9k', rating: '4.7', status: 'FEATURED', price: '$24.99' },
        { name: 'Space Command', downloads: '8.4k', rating: '4.8', status: 'TRENDING', price: '$29.99' }
      ]
    },
    {
      id: 'rpg-adventure',
      title: 'RPG & ADVENTURE',
      subtitle: 'Epic Quest Awaits',
      bgColor: 'bg-gradient-to-br from-purple-900/20 to-pink-900/40',
      borderColor: 'border-purple-500/30',
      items: [
        { name: 'Dragon Quest Legends', downloads: '15.3k', rating: '4.9', status: 'EPIC', price: '$49.99' },
        { name: 'Mystic Realm', downloads: '11.2k', rating: '4.8', status: 'ADVENTURE', price: '$39.99' },
        { name: 'Hero\'s Journey', downloads: '8.7k', rating: '4.7', status: 'QUEST', price: '$34.99' },
        { name: 'Fantasy World', downloads: '9.9k', rating: '4.8', status: 'MAGIC', price: '$44.99' }
      ]
    },
    {
      id: 'action-fps',
      title: 'ACTION & FPS',
      subtitle: 'High-Octane Combat',
      bgColor: 'bg-gradient-to-br from-orange-900/20 to-red-900/40',
      borderColor: 'border-orange-500/30',
      items: [
        { name: 'Combat Elite', downloads: '18.7k', rating: '4.9', status: 'ELITE', price: '$59.99' },
        { name: 'Tactical Strike', downloads: '14.2k', rating: '4.8', status: 'TACTICAL', price: '$49.99' },
        { name: 'Urban Warfare', downloads: '10.5k', rating: '4.7', status: 'URBAN', price: '$39.99' },
        { name: 'Sniper Mission', downloads: '12.8k', rating: '4.8', status: 'PRECISION', price: '$44.99' }
      ]
    },
    {
      id: 'simulation',
      title: 'SIMULATION & BUILDING',
      subtitle: 'Create & Manage',
      bgColor: 'bg-gradient-to-br from-green-900/20 to-emerald-900/40',
      borderColor: 'border-green-500/30',
      items: [
        { name: 'City Builder Pro', downloads: '13.4k', rating: '4.9', status: 'BUILDER', price: '$39.99' },
        { name: 'Farm Simulator', downloads: '9.8k', rating: '4.8', status: 'SIM', price: '$29.99' },
        { name: 'Transport Tycoon', downloads: '7.6k', rating: '4.7', status: 'TYCOON', price: '$34.99' },
        { name: 'Space Colony', downloads: '11.1k', rating: '4.8', status: 'SPACE', price: '$44.99' }
      ]
    },
    {
      id: 'indie-arcade',
      title: 'INDIE & ARCADE',
      subtitle: 'Unique Experiences',
      bgColor: 'bg-gradient-to-br from-cyan-900/20 to-teal-900/40',
      borderColor: 'border-cyan-500/30',
      items: [
        { name: 'Pixel Adventures', downloads: '16.2k', rating: '4.9', status: 'INDIE', price: '$19.99' },
        { name: 'Retro Runner', downloads: '12.7k', rating: '4.8', status: 'RETRO', price: '$14.99' },
        { name: 'Neon Nights', downloads: '8.9k', rating: '4.7', status: 'NEON', price: '$24.99' },
        { name: 'Quantum Puzzle', downloads: '10.3k', rating: '4.8', status: 'PUZZLE', price: '$16.99' }
      ]
    }
  ];

  return (
    <>
      {carouselPanels.map((panel, panelIndex) => (
        <div key={panel.id} className="w-full h-full p-6 content-visible">
          <div className={`${panel.bgColor} ${panel.borderColor} border rounded-lg p-6 h-full min-h-[400px]`}>
            {/* Panel Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Gamepad2 className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-black text-white font-mono">{panel.title}</h3>
                </div>
                <p className="text-purple-300 text-sm font-bold">{panel.subtitle}</p>
              </div>
              <div className="text-right">
                <div className="text-purple-400 text-xs font-bold">PANEL {panelIndex + 1}/6</div>
                <div className="text-slate-400 text-xs">PREMIUM COLLECTION</div>
              </div>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              {panel.items.map((game, index) => (
                <div key={index} className="bg-slate-800/80 border border-slate-600 hover:border-purple-400/50 transition-all duration-300 p-4 rounded">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-sm mb-1">{game.name}</h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-bold ${
                          game.status === 'NEW' ? 'bg-green-500 text-black' :
                          game.status === 'HOT' ? 'bg-red-500 text-white' :
                          game.status === 'SALE' ? 'bg-yellow-500 text-black' :
                          'bg-purple-500 text-white'
                        }`}>
                          {game.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-green-400 font-black text-sm">{game.price}</div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{game.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{game.rating}</span>
                      </div>
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-600 text-black px-3 py-1 font-bold transition-colors">
                      PLAY
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Panel Stats */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: Trophy, label: 'AWARDS', value: '12+', color: 'text-yellow-400' },
                { icon: Users, label: 'PLAYERS', value: '50k+', color: 'text-blue-400' },
                { icon: Clock, label: 'HOURS', value: '100+', color: 'text-green-400' },
                { icon: Shield, label: 'RATING', value: 'M+', color: 'text-red-400' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/60 border border-slate-600 p-3 text-center rounded">
                    <IconComponent className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
                    <div className="text-white font-black text-sm">{stat.value}</div>
                    <div className="text-slate-400 text-xs font-bold">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
