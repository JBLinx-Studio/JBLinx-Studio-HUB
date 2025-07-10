
import React from 'react';
import { Gamepad2, Trophy, Users, Zap, Target, Crown, Joystick, Rocket } from 'lucide-react';
import SectionCarousel from '../common/SectionCarousel';

const GamesCarouselPanels = () => {
  const gamesPanels = [
    {
      id: 'action-games',
      title: 'Action & Adventure',
      subtitle: 'High-octane experiences',
      icon: Zap,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-red-400">
            <div className="font-semibold text-red-400">Combat Systems</div>
            <div className="text-sm">Advanced physics-based combat</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-orange-400">
            <div className="font-semibold text-orange-400">Open World</div>
            <div className="text-sm">Massive explorable environments</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-yellow-400">
            <div className="font-semibold text-yellow-400">Story Driven</div>
            <div className="text-sm">Immersive narrative experiences</div>
          </div>
        </div>
      )
    },
    {
      id: 'competitive',
      title: 'Competitive Gaming',
      subtitle: 'Esports & tournaments',
      icon: Trophy,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-emerald-400">
            <div className="font-semibold text-emerald-400">Ranked Systems</div>
            <div className="text-sm">Skill-based matchmaking</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-cyan-400">
            <div className="font-semibold text-cyan-400">Tournament Mode</div>
            <div className="text-sm">Professional competition tools</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-blue-400">
            <div className="font-semibold text-blue-400">Spectator Features</div>
            <div className="text-sm">Advanced viewing & analysis</div>
          </div>
        </div>
      )
    },
    {
      id: 'multiplayer',
      title: 'Multiplayer Experiences',
      subtitle: 'Social gaming platforms',
      icon: Users,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-purple-400">
            <div className="font-semibold text-purple-400">Team Building</div>
            <div className="text-sm">Guild & clan systems</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-pink-400">
            <div className="font-semibold text-pink-400">Social Features</div>
            <div className="text-sm">In-game chat & voice systems</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-indigo-400">
            <div className="font-semibold text-indigo-400">Cross-Platform</div>
            <div className="text-sm">Universal multiplayer support</div>
          </div>
        </div>
      )
    },
    {
      id: 'mobile-gaming',
      title: 'Mobile Gaming',
      subtitle: 'Touch-optimized experiences',
      icon: Target,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-green-400">
            <div className="font-semibold text-green-400">Touch Controls</div>
            <div className="text-sm">Intuitive gesture systems</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-teal-400">
            <div className="font-semibold text-teal-400">Quick Sessions</div>
            <div className="text-sm">Perfect for on-the-go gaming</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-lime-400">
            <div className="font-semibold text-lime-400">Offline Mode</div>
            <div className="text-sm">Play anywhere, anytime</div>
          </div>
        </div>
      )
    },
    {
      id: 'vr-gaming',
      title: 'VR & Next-Gen',
      subtitle: 'Immersive technologies',
      icon: Crown,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-violet-400">
            <div className="font-semibold text-violet-400">Virtual Reality</div>
            <div className="text-sm">Full immersion experiences</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-fuchsia-400">
            <div className="font-semibold text-fuchsia-400">AR Integration</div>
            <div className="text-sm">Augmented reality features</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-rose-400">
            <div className="font-semibold text-rose-400">AI Companions</div>
            <div className="text-sm">Smart NPCs & assistants</div>
          </div>
        </div>
      )
    },
    {
      id: 'indie-games',
      title: 'Indie & Creative',
      subtitle: 'Artistic expressions',
      icon: Joystick,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-amber-400">
            <div className="font-semibold text-amber-400">Unique Art Styles</div>
            <div className="text-sm">Hand-crafted visual experiences</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-orange-400">
            <div className="font-semibold text-orange-400">Experimental Gameplay</div>
            <div className="text-sm">Innovative mechanics</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-red-400">
            <div className="font-semibold text-red-400">Community Driven</div>
            <div className="text-sm">Player feedback integration</div>
          </div>
        </div>
      )
    }
  ];

  return <SectionCarousel panels={gamesPanels} className="mt-6" />;
};

export default GamesCarouselPanels;
