
import React from 'react';
import { Calendar, Download, Zap, Package, TrendingUp, Star, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameUpdatesPanelProps {
  game: {
    id: number;
    title: string;
    images: { hero: string };
    dlc: Array<{ name: string; price: number; status: string }>;
  };
}

const GameUpdatesPanel: React.FC<GameUpdatesPanelProps> = ({ game }) => {
  // Generate game-specific updates based on game ID
  const getGameUpdates = (gameId: number) => {
    const baseUpdates = [
      {
        id: 1,
        version: '3.2.1',
        date: '2 days ago',
        title: 'Major Balance Update',
        description: 'Comprehensive gameplay balancing, new content additions, and performance optimizations.',
        type: 'update',
        downloads: '12.5K',
        rating: '4.9',
        changelog: [
          'Weapon damage rebalancing across all categories',
          'New competitive map: Urban District',
          'Anti-cheat system improvements',
          'Network optimization for better latency'
        ]
      },
      {
        id: 2,
        version: '3.1.8',
        date: '1 week ago',
        title: 'Content Expansion',
        description: 'New features, improved AI behavior, and enhanced multiplayer stability.',
        type: 'update',
        downloads: '8.2K',
        rating: '4.8',
        changelog: [
          'Added 5 new gameplay elements',
          'Enhanced AI decision-making',
          'Improved server stability',
          'New customization options'
        ]
      },
      {
        id: 3,
        version: '3.1.5',
        date: '3 weeks ago',
        title: 'Quality of Life Improvements',
        description: 'User interface enhancements, bug fixes, and performance optimizations.',
        type: 'update',
        downloads: '15.1K',
        rating: '4.7',
        changelog: [
          'Redesigned user interface elements',
          'Fixed critical gameplay bugs',
          'Improved loading times',
          'Enhanced graphics quality'
        ]
      }
    ];

    // Customize updates based on game type
    return baseUpdates.map(update => ({
      ...update,
      gameSpecific: true
    }));
  };

  const recentUpdates = getGameUpdates(game.id);

  const upcomingDLC = game.dlc.filter(dlc => dlc.status !== 'available').map(dlc => ({
    ...dlc,
    releaseDate: dlc.status === 'preorder' ? 'Jan 15, 2025' : 'Mar 2025'
  }));

  const futurePlans = [
    {
      title: 'Season 2 Content Drop',
      description: 'Major content expansion with new maps, modes, and features',
      timeline: 'Q2 2025',
      status: 'In Development'
    },
    {
      title: 'Mobile Version',
      description: 'Cross-platform mobile adaptation with cloud save sync',
      timeline: 'Q3 2025',
      status: 'Planning Phase'
    },
    {
      title: 'VR Support Beta',
      description: 'Experimental VR mode for immersive gameplay experience',
      timeline: 'Q4 2025',
      status: 'Research Phase'
    }
  ];

  return (
    <div className="bg-slate-800/95 border border-slate-700 h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-black font-mono">UPDATES & ROADMAP</span>
          </div>
          <Link to="/blog" className="text-green-400 hover:text-green-300 text-xs font-bold">
            View All →
          </Link>
        </div>
        <div className="text-slate-400 text-xs">
          {game.title} - Latest Updates
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-4 space-y-6">
          {/* Recent Updates */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Zap className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-bold text-sm">RECENT UPDATES</span>
            </div>
            
            <div className="space-y-3">
              {recentUpdates.map((update) => (
                <div key={update.id} className="bg-slate-900/50 border border-green-400/30 p-4 hover:border-green-400 transition-colors">
                  <div className="flex items-start gap-3">
                    <img 
                      src={game.images.hero} 
                      alt={game.title}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-white font-bold text-sm">{update.title}</div>
                          <div className="text-green-400 text-xs">
                            Version {update.version}
                          </div>
                        </div>
                        <div className="text-slate-400 text-xs">{update.date}</div>
                      </div>
                      
                      <p className="text-slate-400 text-xs mb-3">
                        {update.description}
                      </p>

                      {/* Changelog */}
                      <div className="mb-3">
                        <div className="text-white text-xs font-bold mb-1">Key Changes:</div>
                        <ul className="text-slate-400 text-xs space-y-1">
                          {update.changelog.slice(0, 2).map((change, index) => (
                            <li key={index} className="flex items-start space-x-1">
                              <span className="text-green-400">•</span>
                              <span>{change}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-xs text-slate-400">
                            <Download className="w-3 h-3" />
                            <span>{update.downloads}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-slate-400">
                            <Star className="w-3 h-3 text-yellow-400" />
                            <span>{update.rating}</span>
                          </div>
                        </div>
                        <Link 
                          to={`/blog/update-${update.id}`}
                          className="text-green-400 hover:text-green-300 text-xs font-bold flex items-center space-x-1"
                        >
                          <FileText className="w-3 h-3" />
                          <span>Full Notes</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming DLC */}
          {upcomingDLC.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <Package className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm">UPCOMING DLC</span>
              </div>

              <div className="space-y-2">
                {upcomingDLC.map((dlc, index) => (
                  <div key={index} className="bg-slate-900/50 border border-yellow-400/30 p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="text-white font-bold text-sm">{dlc.name}</div>
                        <div className="text-yellow-400 text-xs">Downloadable Content</div>
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
            </div>
          )}

          {/* Future Plans */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-bold text-sm">DEVELOPMENT ROADMAP</span>
            </div>

            <div className="space-y-2">
              {futurePlans.map((plan, index) => (
                <div key={index} className="bg-slate-900/50 border border-purple-400/30 p-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">{plan.title}</div>
                      <p className="text-slate-400 text-xs mt-1">{plan.description}</p>
                    </div>
                    <div className="text-right ml-3">
                      <div className="text-purple-400 text-xs font-bold">{plan.timeline}</div>
                      <div className="text-slate-400 text-xs">{plan.status}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <button className="w-full bg-green-500 hover:bg-green-600 text-black px-4 py-2 font-black transition-colors">
          VIEW COMPLETE ROADMAP
        </button>
      </div>
    </div>
  );
};

export default GameUpdatesPanel;
