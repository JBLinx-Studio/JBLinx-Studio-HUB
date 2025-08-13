
import React, { useState } from 'react';
import { 
  Package, 
  Download, 
  Clock, 
  Star, 
  Calendar,
  Zap,
  Gift,
  TrendingUp,
  PlayCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Bug,
  Plus,
  Settings,
  Shield
} from 'lucide-react';

interface DLCUpdatesPanelProps {
  game: {
    dlc: Array<{
      id: number;
      name: string;
      price: string;
      releaseDate: string;
      status: string;
      image: string;
      description: string;
      features: string[];
      downloads?: number;
      preOrders?: number;
    }>;
    updates: Array<{
      version: string;
      date: string;
      title: string;
      notes: string;
      downloads: string;
      rating: number;
      changes: string[];
    }>;
  };
}

const DLCUpdatesPanel: React.FC<DLCUpdatesPanelProps> = ({ game }) => {
  const [expandedUpdate, setExpandedUpdate] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('dlc');

  const toggleUpdate = (version: string) => {
    setExpandedUpdate(expandedUpdate === version ? null : version);
  };

  const getChangeIcon = (change: string) => {
    if (change.toLowerCase().includes('fix') || change.toLowerCase().includes('bug')) {
      return <Bug className="w-3 h-3 text-red-400" />;
    }
    if (change.toLowerCase().includes('add') || change.toLowerCase().includes('new')) {
      return <Plus className="w-3 h-3 text-green-400" />;
    }
    if (change.toLowerCase().includes('improve') || change.toLowerCase().includes('enhance')) {
      return <TrendingUp className="w-3 h-3 text-blue-400" />;
    }
    if (change.toLowerCase().includes('security') || change.toLowerCase().includes('anti-cheat')) {
      return <Shield className="w-3 h-3 text-purple-400" />;
    }
    return <Settings className="w-3 h-3 text-zinc-400" />;
  };

  return (
    <div className="p-6">
      {/* Tab Navigation */}
      <div className="flex border-b border-zinc-700/50 mb-6">
        {[
          { id: 'dlc', label: 'DLC CONTENT', icon: Package },
          { id: 'updates', label: 'GAME UPDATES', icon: Download }
        ].map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-bold transition-colors ${
                activeTab === tab.id
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span className="font-mono">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {activeTab === 'dlc' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Gift className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-black text-lg font-mono">DOWNLOADABLE CONTENT</span>
            </div>
            <span className="text-zinc-400 text-sm font-mono">{game.dlc.length} DLC Packs Available</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {game.dlc.map((dlc) => (
              <div key={dlc.id} className="bg-zinc-900/50 border border-zinc-700/50 overflow-hidden hover:border-zinc-600 transition-colors">
                {/* DLC Image */}
                <div className="aspect-video bg-zinc-800 relative overflow-hidden group">
                  <img 
                    src={dlc.image} 
                    alt={dlc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-xs font-bold ${
                      dlc.status === 'AVAILABLE' ? 'bg-green-500/90 text-white' :
                      dlc.status === 'PRE-ORDER' ? 'bg-blue-500/90 text-white' :
                      'bg-yellow-500/90 text-black'
                    }`}>
                      {dlc.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <button className="bg-purple-500/90 hover:bg-purple-600/90 text-white p-2 backdrop-blur-sm transition-colors">
                      <PlayCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* DLC Content */}
                <div className="p-4 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1">{dlc.name}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{dlc.description}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-purple-400 font-black text-xl">${dlc.price}</div>
                      <div className="text-zinc-400 text-xs font-mono">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        {dlc.releaseDate}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <div className="text-zinc-300 text-xs font-bold mb-2 font-mono">INCLUDED FEATURES</div>
                    <div className="grid grid-cols-2 gap-1">
                      {dlc.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span className="text-zinc-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-700/50">
                    <div className="flex items-center space-x-4 text-xs text-zinc-400 font-mono">
                      {dlc.downloads && (
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{dlc.downloads.toLocaleString()}</span>
                        </div>
                      )}
                      {dlc.preOrders && (
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{dlc.preOrders.toLocaleString()} pre-orders</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-3 py-1 text-xs font-bold font-mono transition-colors">
                        PREVIEW
                      </button>
                      <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 text-xs font-bold font-mono transition-colors">
                        {dlc.status === 'AVAILABLE' ? 'BUY NOW' : 'PRE-ORDER'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-zinc-700/50">
            <button className="bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-purple-400/50 text-white px-6 py-3 font-black transition-all duration-300 font-mono">
              VIEW ALL DLC CONTENT
            </button>
          </div>
        </div>
      )}

      {activeTab === 'updates' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-black text-lg font-mono">GAME UPDATES & CHANGELOGS</span>
            </div>
            <span className="text-zinc-400 text-sm font-mono">Latest Version: {game.updates[0]?.version}</span>
          </div>
          
          <div className="space-y-4">
            {game.updates.map((update) => (
              <div key={update.version} className="bg-zinc-900/50 border border-zinc-700/50 overflow-hidden">
                <div 
                  className="p-4 cursor-pointer hover:bg-zinc-800/30 transition-colors"
                  onClick={() => toggleUpdate(update.version)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-3 py-1 text-sm font-bold font-mono">
                          v{update.version}
                        </span>
                        <h3 className="text-white font-bold text-lg">{update.title}</h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right text-xs text-zinc-400 font-mono">
                        <div className="flex items-center space-x-2 mb-1">
                          <Download className="w-3 h-3" />
                          <span>{update.downloads} downloads</span>
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{update.rating}/5</span>
                        </div>
                        <div>{update.date}</div>
                      </div>
                      {expandedUpdate === update.version ? (
                        <ChevronUp className="w-5 h-5 text-zinc-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-zinc-400" />
                      )}
                    </div>
                  </div>

                  <p className="text-zinc-400 text-sm mt-2">{update.notes}</p>
                </div>

                {/* Expanded Changelog */}
                {expandedUpdate === update.version && (
                  <div className="border-t border-zinc-700/50 p-4 bg-zinc-800/30">
                    <div className="space-y-3">
                      <h4 className="text-white font-bold text-sm font-mono mb-3">DETAILED CHANGELOG</h4>
                      {update.changes.map((change, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          {getChangeIcon(change)}
                          <span className="text-zinc-300 text-sm leading-relaxed">{change}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-zinc-700/50">
                      <div className="text-xs text-zinc-400 font-mono">
                        Released on {update.date}
                      </div>
                      <div className="flex gap-2">
                        <button className="text-cyan-400 hover:text-cyan-300 text-xs font-bold font-mono flex items-center space-x-1">
                          <ExternalLink className="w-3 h-3" />
                          <span>VIEW PATCH NOTES</span>
                        </button>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 text-xs font-bold font-mono transition-colors">
                          UPDATE NOW
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-zinc-700/50">
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-cyan-400/50 text-white px-4 py-3 font-black transition-all duration-300 font-mono text-sm">
                UPDATE HISTORY
              </button>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 font-black transition-all duration-300 font-mono text-sm">
                AUTO-UPDATE SETTINGS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DLCUpdatesPanel;
