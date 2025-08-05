
import React from 'react';
import { Calendar, Download, Zap, Package, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameUpdatesPanelProps {
  games: Array<{
    id: number;
    title: string;
    images: { hero: string };
    dlc: Array<{ name: string; price: number; status: string }>;
  }>;
}

const GameUpdatesPanel: React.FC<GameUpdatesPanelProps> = ({ games }) => {
  const recentUpdates = [
    {
      id: 1,
      game: games[0],
      version: '3.2.1',
      date: '2 days ago',
      title: 'Weapon Balance & New Map',
      description: 'Major weapon rebalancing, new competitive map "Urban District", and anti-cheat improvements.',
      type: 'update',
      downloads: '12.5K',
      rating: '4.9'
    },
    {
      id: 2,
      game: games[1],
      version: '2.4.3',
      date: '1 week ago',
      title: 'New Units & AI Improvements',
      description: 'Added 5 new unit types, improved AI behavior, and enhanced multiplayer stability.',
      type: 'update',
      downloads: '8.2K',
      rating: '4.8'
    },
    {
      id: 3,
      game: games[2],
      version: '0.8.5',
      date: '3 days ago',
      title: 'Survival Mechanics Overhaul',
      description: 'Redesigned hunger/thirst system, new crafting recipes, and performance optimizations.',
      type: 'update',
      downloads: '15.1K',
      rating: '4.7'
    }
  ];

  const upcomingDLC = games.flatMap(game => 
    game.dlc.filter(dlc => dlc.status !== 'available').map(dlc => ({
      ...dlc,
      game,
      releaseDate: dlc.status === 'preorder' ? 'Jan 15, 2025' : 'Mar 2025'
    }))
  );

  return (
    <div className="bg-slate-800/95 border border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-black text-lg font-mono">LATEST UPDATES</span>
        </div>
        <Link to="/blog" className="text-green-400 hover:text-green-300 text-sm font-bold">
          View All Updates →
        </Link>
      </div>

      {/* Recent Updates */}
      <div className="space-y-4 mb-8">
        {recentUpdates.map((update) => (
          <div key={update.id} className="bg-slate-900/50 border border-green-400/30 p-4 hover:border-green-400 transition-colors">
            <div className="flex items-start gap-4">
              <img 
                src={update.game.images.hero} 
                alt={update.game.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-white font-bold text-sm">{update.title}</div>
                    <div className="text-green-400 text-xs">
                      {update.game.title} v{update.version}
                    </div>
                  </div>
                  <div className="text-slate-400 text-xs">{update.date}</div>
                </div>
                
                <p className="text-slate-400 text-xs mb-3 line-clamp-2">
                  {update.description}
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-xs text-slate-400">
                    <Download className="w-3 h-3" />
                    <span>{update.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-slate-400">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{update.rating}</span>
                  </div>
                  <Link 
                    to={`/blog/update-${update.id}`}
                    className="text-green-400 hover:text-green-300 text-xs font-bold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming DLC */}
      <div className="border-t border-slate-700 pt-6">
        <div className="flex items-center space-x-2 mb-4">
          <Package className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 font-black text-sm font-mono">UPCOMING DLC</span>
        </div>

        <div className="space-y-3">
          {upcomingDLC.slice(0, 3).map((dlc, index) => (
            <div key={index} className="bg-slate-900/50 border border-yellow-400/30 p-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-white font-bold text-sm">{dlc.name}</div>
                  <div className="text-yellow-400 text-xs">{dlc.game.title}</div>
                </div>
                <div className="text-yellow-400 font-black text-sm">${dlc.price}</div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 text-xs font-bold ${
                  dlc.status === 'preorder' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-black'
                }`}>
                  {dlc.status.toUpperCase()}
                </span>
                <div className="text-slate-400 text-xs flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{dlc.releaseDate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 font-black transition-colors mt-4">
          VIEW ALL DLC & UPDATES
        </button>
      </div>
    </div>
  );
};

export default GameUpdatesPanel;
