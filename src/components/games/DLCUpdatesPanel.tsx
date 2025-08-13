
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
  ChevronDown,
  ChevronUp,
  Bug,
  Plus,
  Settings,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface DLCUpdatesPanelProps {
  dlcs: Array<{
    name: string;
    price: string;
    releaseDate: string;
    status: string;
    image: string;
    description: string;
  }>;
  updates: Array<{
    version: string;
    date: string;
    notes: string;
    downloads: string;
    rating: string;
    changelog?: string[];
  }>;
}

const DLCUpdatesPanel: React.FC<DLCUpdatesPanelProps> = ({ dlcs, updates }) => {
  const [expandedUpdate, setExpandedUpdate] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('dlc');

  // Enhanced updates with changelog data
  const enhancedUpdates = updates.length === 0 ? [
    {
      version: "2.1.4",
      date: "2024-01-10",
      notes: "Major weapon balancing update with improved AI behavior and new matchmaking system",
      downloads: "15.2k",
      rating: "4.8",
      type: "Major Update",
      changelog: [
        "Assault rifles damage reduced by 8% across all variants",
        "Sniper rifles now feature realistic bullet drop physics",
        "AI enemies utilize cover mechanics more intelligently",
        "Implemented new skill-based matchmaking algorithm",
        "Fixed critical memory leak in 32-player multiplayer mode",
        "Enhanced anti-cheat detection and reporting system",
        "Improved server stability during peak hours",
        "Added colorblind accessibility options"
      ]
    },
    {
      version: "2.1.3", 
      date: "2024-01-05",
      notes: "Critical security patch with anti-cheat improvements and performance optimizations",
      downloads: "18.7k",
      rating: "4.9",
      type: "Security Update",
      changelog: [
        "Updated BattlEye anti-cheat to version 3.2",
        "Patched exploit allowing wallhack through texture glitches",
        "Optimized rendering pipeline for GTX 1060 and similar hardware",
        "Reduced game loading times by up to 25%",
        "Fixed rare crash on AMD Ryzen processors",
        "Improved network latency compensation",
        "Enhanced texture streaming for better performance"
      ]
    },
    {
      version: "2.1.2",
      date: "2023-12-28", 
      notes: "Holiday event with seasonal content, cosmetics, and gameplay improvements",
      downloads: "22.1k",
      rating: "4.7",
      type: "Content Update",
      changelog: [
        "Added Winter Warfare event with exclusive rewards",
        "New seasonal weapon skins and character customizations",
        "Improved hit registration for projectile weapons",
        "Added hardcore game mode with reduced HUD",
        "Fixed spawn camping issues on three maps",
        "Balanced explosive damage in confined spaces",
        "Added new achievement system with 50+ achievements"
      ]
    }
  ] : updates;

  const getUpdateTypeColor = (type: string) => {
    switch (type) {
      case 'Major Update':
        return 'bg-purple-500/20 border-purple-400/30 text-purple-400';
      case 'Security Update':
        return 'bg-red-500/20 border-red-400/30 text-red-400';
      case 'Content Update':
        return 'bg-blue-500/20 border-blue-400/30 text-blue-400';
      case 'Hotfix':
        return 'bg-orange-500/20 border-orange-400/30 text-orange-400';
      default:
        return 'bg-green-500/20 border-green-400/30 text-green-400';
    }
  };

  const getChangelogIcon = (change: string) => {
    if (change.toLowerCase().includes('fix') || change.toLowerCase().includes('patch')) {
      return <Bug className="w-3 h-3 text-red-400" />;
    } else if (change.toLowerCase().includes('add') || change.toLowerCase().includes('new')) {
      return <Plus className="w-3 h-3 text-green-400" />;
    } else if (change.toLowerCase().includes('improve') || change.toLowerCase().includes('optim')) {
      return <Zap className="w-3 h-3 text-blue-400" />;
    } else if (change.toLowerCase().includes('balanc') || change.toLowerCase().includes('adjust')) {
      return <Settings className="w-3 h-3 text-yellow-400" />;
    }
    return <CheckCircle className="w-3 h-3 text-cyan-400" />;
  };

  return (
    <div className="p-6">
      {/* Section Toggle */}
      <div className="flex mb-6 bg-zinc-800/50 border border-zinc-600/50 p-1">
        <button
          onClick={() => setActiveSection('dlc')}
          className={`flex-1 px-4 py-2 text-sm font-bold font-mono transition-all duration-300 ${
            activeSection === 'dlc'
              ? 'bg-purple-500 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          DLC CONTENT
        </button>
        <button
          onClick={() => setActiveSection('updates')}
          className={`flex-1 px-4 py-2 text-sm font-bold font-mono transition-all duration-300 ${
            activeSection === 'updates'
              ? 'bg-cyan-500 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          GAME UPDATES
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* DLC Section */}
        {activeSection === 'dlc' && (
          <div className="lg:col-span-2">
            <div className="bg-zinc-900/50 border border-zinc-700/50 p-4 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-4">
                <Package className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 font-black text-sm font-mono tracking-wider">DOWNLOADABLE CONTENT</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dlcs.map((dlc, index) => (
                  <div key={index} className="bg-zinc-800/80 border border-zinc-600/50 p-4 hover:border-purple-400/30 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <img 
                        src={dlc.image} 
                        alt={dlc.name}
                        className="w-20 h-16 object-cover border border-zinc-600 group-hover:border-purple-400/50 transition-colors"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-white font-bold text-sm mb-1 group-hover:text-purple-300 transition-colors">{dlc.name}</h3>
                          <div className="text-purple-400 font-black text-sm">${dlc.price}</div>
                        </div>
                        <p className="text-zinc-400 text-xs leading-relaxed mb-3">{dlc.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs font-bold border ${
                              dlc.status === 'AVAILABLE' ? 'bg-green-500/20 border-green-500/30 text-green-400' :
                              dlc.status === 'PRE-ORDER' ? 'bg-blue-500/20 border-blue-500/30 text-blue-400' :
                              'bg-yellow-500/20 border-yellow-500/30 text-yellow-400'
                            }`}>
                              {dlc.status}
                            </span>
                            <div className="text-zinc-400 text-xs flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{dlc.releaseDate}</span>
                            </div>
                          </div>
                          <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1 text-xs font-bold transition-colors">
                            {dlc.status === 'AVAILABLE' ? 'BUY NOW' : 'PRE-ORDER'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-purple-400/50 text-white px-4 py-3 font-black transition-all duration-300 mt-6">
                <div className="flex items-center justify-center space-x-2">
                  <Gift className="w-4 h-4" />
                  <span className="font-mono text-sm">BROWSE ALL DLC</span>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* Updates Section */}
        {activeSection === 'updates' && (
          <div className="lg:col-span-2">
            <div className="bg-zinc-900/50 border border-zinc-700/50 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-black text-sm font-mono tracking-wider">LATEST UPDATES & CHANGELOGS</span>
                </div>
                <div className="text-xs text-zinc-400 font-mono">Auto-updates enabled</div>
              </div>
              
              <div className="space-y-4">
                {enhancedUpdates.map((update, index) => (
                  <div key={index} className="bg-zinc-800/80 border border-zinc-600/50 hover:border-cyan-400/30 transition-all duration-300">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-white font-bold text-lg font-mono">v{update.version}</div>
                          {update.type && (
                            <span className={`px-2 py-1 text-xs font-bold border ${getUpdateTypeColor(update.type)}`}>
                              {update.type.toUpperCase()}
                            </span>
                          )}
                        </div>
                        <div className="text-cyan-400 text-sm font-mono">{update.date}</div>
                      </div>
                      
                      <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{update.notes}</p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <div className="text-zinc-400 text-xs flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span>{update.downloads} downloads</span>
                          </div>
                          <div className="text-zinc-400 text-xs flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span>{update.rating} rating</span>
                          </div>
                        </div>
                        {update.changelog && (
                          <button
                            onClick={() => setExpandedUpdate(expandedUpdate === index ? null : index)}
                            className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 text-xs font-bold transition-colors"
                          >
                            <span>FULL CHANGELOG</span>
                            {expandedUpdate === index ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          </button>
                        )}
                      </div>

                      {/* Expandable Changelog */}
                      {update.changelog && expandedUpdate === index && (
                        <div className="border-t border-zinc-700 pt-4 mt-4">
                          <h4 className="text-white font-bold text-sm mb-3 font-mono">DETAILED CHANGELOG:</h4>
                          <div className="space-y-2">
                            {update.changelog.map((change, changeIndex) => (
                              <div key={changeIndex} className="flex items-start space-x-3 p-2 bg-zinc-900/50 border border-zinc-700/30">
                                {getChangelogIcon(change)}
                                <span className="text-zinc-300 text-xs leading-relaxed flex-1">{change}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-cyan-400/50 text-white px-4 py-3 font-black transition-all duration-300 font-mono text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>UPDATE HISTORY</span>
                  </div>
                </button>
                <button className="bg-cyan-600 hover:bg-cyan-500 border border-cyan-500 text-white px-4 py-3 font-black transition-all duration-300 font-mono text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>REPORT BUG</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DLCUpdatesPanel;
