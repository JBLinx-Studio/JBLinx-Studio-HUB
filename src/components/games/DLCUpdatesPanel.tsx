
import React from 'react';
import { 
  Package, 
  Download, 
  Clock, 
  Star, 
  Calendar,
  Zap,
  Gift,
  TrendingUp
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
  }>;
}

const DLCUpdatesPanel: React.FC<DLCUpdatesPanelProps> = ({ dlcs, updates }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
      {/* DLC Section */}
      <div className="bg-slate-800/95 border border-slate-700 p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Package className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 font-black text-sm font-mono">DOWNLOADABLE CONTENT</span>
        </div>
        
        <div className="space-y-3">
          {dlcs.map((dlc, index) => (
            <div key={index} className="bg-slate-900/50 border border-yellow-400/30 p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="text-white font-bold text-sm">{dlc.name}</div>
                  <div className="text-slate-400 text-xs mt-1 line-clamp-2">{dlc.description}</div>
                </div>
                <div className="text-yellow-400 font-black text-sm ml-2">{dlc.price}</div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-bold ${
                    dlc.status === 'AVAILABLE' ? 'bg-green-500 text-white' :
                    dlc.status === 'PRE-ORDER' ? 'bg-blue-500 text-white' :
                    'bg-yellow-500 text-black'
                  }`}>
                    {dlc.status}
                  </span>
                  <div className="text-slate-400 text-xs flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{dlc.releaseDate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 font-black transition-colors mt-4">
          <div className="flex items-center justify-center space-x-2">
            <Gift className="w-4 h-4" />
            <span>VIEW ALL DLC</span>
          </div>
        </button>
      </div>

      {/* Updates Section */}
      <div className="bg-slate-800/95 border border-slate-700 p-4">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-black text-sm font-mono">LATEST UPDATES</span>
        </div>
        
        <div className="space-y-3">
          {updates.map((update, index) => (
            <div key={index} className="bg-slate-900/50 border border-green-400/30 p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="text-white font-bold text-sm">Version {update.version}</div>
                <div className="text-green-400 text-xs">{update.date}</div>
              </div>
              
              <p className="text-slate-400 text-xs mb-2 line-clamp-2">{update.notes}</p>
              
              <div className="flex items-center space-x-4">
                <div className="text-slate-400 text-xs flex items-center space-x-1">
                  <Download className="w-3 h-3" />
                  <span>{update.downloads}</span>
                </div>
                <div className="text-slate-400 text-xs flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span>{update.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-black px-4 py-2 font-black transition-colors mt-4">
          <div className="flex items-center justify-center space-x-2">
            <Zap className="w-4 h-4" />
            <span>UPDATE HISTORY</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DLCUpdatesPanel;
