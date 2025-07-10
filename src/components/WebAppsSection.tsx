import React from 'react';
import { Globe, Zap, Users, Palette, ShoppingCart, MessageSquare, Calendar, BarChart } from 'lucide-react';
import WebAppsCarouselPanels from './webapps/WebAppsCarouselPanels';

const WebAppsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-black border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Zap className="w-3 h-3 mr-1 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">
              PRIORITY 3: APP USERS
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-4">
            REVOLUTIONARY <span className="text-purple-400">WEB APPLICATIONS</span>
          </h2>
          <div className="w-16 h-0.5 bg-purple-400 mx-auto mb-3"></div>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Cutting-edge web applications designed to enhance user experiences and drive
            engagement across various platforms.
          </p>
        </div>
        
        {/* Add the carousel panels after existing content */}
        <WebAppsCarouselPanels />
        
      </div>
    </section>
  );
};

export default WebAppsSection;
