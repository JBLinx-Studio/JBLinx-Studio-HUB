import React from 'react';
import { Gamepad2, Trophy, Users, Zap, Target, Crown, Joystick, Rocket } from 'lucide-react';
import GamesCarouselPanels from './games/GamesCarouselPanels';

const GamesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-red-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Gamepad2 className="w-3 h-3 mr-1 text-red-400" />
            <span className="text-red-400 font-black text-xs font-mono tracking-widest">GAMING DIVISION</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-4">
            NEXT-GEN <span className="text-red-400">GAMING</span> + <span className="text-orange-400">ESPORTS</span> ECOSYSTEM
          </h2>
          <div className="w-16 h-0.5 bg-red-400 mx-auto mb-3"></div>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Immersive gaming experiences and competitive esports platforms, designed for players and creators alike.
          </p>
        </div>
        
        {/* Add the carousel panels after existing content */}
        <GamesCarouselPanels />
        
      </div>
    </section>
  );
};

export default GamesSection;
