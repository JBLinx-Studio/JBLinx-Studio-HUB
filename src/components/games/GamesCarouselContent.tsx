
import React from 'react';
import { Download, Star, Trophy, Play, Users, Clock, Shield, Gamepad2, Zap, Code, Target, Sword, Skull, Crown } from 'lucide-react';

export const GamesCarouselContent = () => {
  const carouselPanels = [
    {
      id: 'horror-games',
      title: 'HORROR & SURVIVAL',
      icon: Skull,
      color: 'text-red-400',
      games: [
        { name: 'Midnight Terror', rating: '4.9', downloads: '8.2k', price: '$24.99', features: ['Psychological Horror', 'VR Support', 'Multiplayer Co-op'] },
        { name: 'Abandoned Asylum', rating: '4.7', downloads: '6.1k', price: '$19.99', features: ['First Person', 'Jump Scares', 'Story Mode'] },
        { name: 'Forest of Shadows', rating: '4.8', downloads: '9.3k', price: '$29.99', features: ['Open World', 'Crafting System', 'Day/Night Cycle'] }
      ]
    },
    {
      id: 'strategy-games',
      title: 'STRATEGY & RTS',
      icon: Crown,
      color: 'text-yellow-400',
      games: [
        { name: 'Empire Builder Pro', rating: '4.9', downloads: '12.5k', price: '$34.99', features: ['Real-time Combat', '32 Players', 'Campaign Mode'] },
        { name: 'Galactic Conquest', rating: '4.8', downloads: '8.7k', price: '$39.99', features: ['Space Strategy', 'Fleet Management', 'Diplomacy'] },
        { name: 'Medieval Kingdoms', rating: '4.7', downloads: '11.2k', price: '$27.99', features: ['City Building', 'Resource Management', 'Multiplayer'] }
      ]
    },
    {
      id: 'action-games',
      title: 'ACTION & ADVENTURE',
      icon: Sword,
      color: 'text-orange-400',
      games: [
        { name: 'Cyber Warrior 2077', rating: '4.9', downloads: '15.3k', price: '$49.99', features: ['Cyberpunk Setting', 'RPG Elements', 'Open World'] },
        { name: 'Dragon Quest Legends', rating: '4.8', downloads: '13.1k', price: '$44.99', features: ['Fantasy RPG', 'Character Classes', 'Epic Storyline'] },
        { name: 'Neon Racer X', rating: '4.7', downloads: '9.8k', price: '$29.99', features: ['High Speed Racing', 'Customization', 'Online Tournaments'] }
      ]
    },
    {
      id: 'development-tools',
      title: 'GAME DEV TOOLS',
      icon: Code,
      color: 'text-cyan-400',
      games: [
        { name: 'Level Design Studio', rating: '4.9', downloads: '5.2k', price: '$79.99', features: ['Visual Editor', 'Asset Library', 'Export Tools'] },
        { name: 'Audio Engine Pro', rating: '4.8', downloads: '3.8k', price: '$59.99', features: ['3D Audio', 'Dynamic Music', 'Sound Effects'] },
        { name: 'AI Behavior Toolkit', rating: '4.9', downloads: '4.1k', price: '$69.99', features: ['NPC AI', 'Pathfinding', 'Decision Trees'] }
      ]
    }
  ];

  return (
    <>
      {carouselPanels.map((panel) => {
        const IconComponent = panel.icon;
        return (
          <div key={panel.id} className="w-full bg-slate-800/95 border border-slate-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <IconComponent className={`w-5 h-5 ${panel.color}`} />
              <span className={`${panel.color} font-black text-lg font-mono`}>{panel.title}</span>
            </div>
            
            <div className="space-y-4">
              {panel.games.map((game, index) => (
                <div key={index} className="bg-slate-900/80 border border-slate-600 hover:border-purple-400/50 transition-all duration-300 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-white font-black text-base font-mono mb-1">{game.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{game.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{game.downloads}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-green-400 font-black text-lg">{game.price}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {game.features.map((feature, fIndex) => (
                      <span key={fIndex} className="bg-slate-700 text-purple-400 px-2 py-1 text-xs font-bold">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-black px-4 py-2 font-black text-sm transition-colors">
                    ACCESS GAME
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
