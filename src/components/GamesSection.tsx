
import React, { useState } from 'react';
import { Play, Github, Download, Star, Users, Trophy, Code, Gamepad2, ExternalLink, Zap } from 'lucide-react';
import HorizontalDragContainer from './ui/HorizontalDragContainer';

const GamesSection = () => {
  const [currentPanel, setCurrentPanel] = useState(0);

  const games = [
    {
      id: 1,
      title: "Neural Combat",
      subtitle: "AI-Powered Strategy",
      description: "Advanced tactical warfare with machine learning opponents",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      status: "Live",
      players: "2.5k+",
      rating: 4.8,
      downloads: "15k+",
      tech: ["Unity", "AI", "Multiplayer"],
      category: "Strategy"
    },
    {
      id: 2,
      title: "Void Runner",
      subtitle: "Cyberpunk Adventure",
      description: "Immersive sci-fi exploration with dynamic storylines",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      status: "Beta",
      players: "1.8k+",
      rating: 4.9,
      downloads: "12k+",
      tech: ["Unreal", "VR", "Narrative"],
      category: "Adventure"
    },
    {
      id: 3,
      title: "Quantum Breach",
      subtitle: "Tactical Shooter",
      description: "Competitive FPS with quantum mechanics gameplay",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      status: "Live",
      players: "5.2k+",
      rating: 4.7,
      downloads: "28k+",
      tech: ["Unity", "Networking", "Physics"],
      category: "Shooter"
    }
  ];

  const devTools = [
    {
      icon: Code,
      title: "Game Engine",
      description: "Custom Unity extensions and frameworks"
    },
    {
      icon: Zap,
      title: "AI Systems",
      description: "Machine learning for game mechanics"
    },
    {
      icon: Users,
      title: "Multiplayer",
      description: "Scalable networking solutions"
    },
    {
      icon: Trophy,
      title: "Analytics",
      description: "Player behavior and performance tracking"
    }
  ];

  const staticContent = (
    <div className="w-full h-full bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-sm">
      <div className="p-6 h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Gamepad2 className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-xs font-mono text-purple-400 tracking-wider">GAMING STUDIO</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Premium Gaming</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Professional game development with cutting-edge technology and immersive experiences.
          </p>
        </div>

        {/* Dev Tools Grid */}
        <div className="mb-6 flex-1">
          <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center">
            <Code className="w-4 h-4 mr-2 text-purple-400" />
            Development Stack
          </h4>
          <div className="space-y-3">
            {devTools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="p-3 bg-slate-800/50 border border-slate-700/30 hover:border-purple-400/30 transition-colors group">
                  <div className="flex items-start space-x-3">
                    <IconComponent className="w-4 h-4 text-purple-400 mt-0.5 group-hover:text-purple-300 transition-colors" />
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-purple-200 transition-colors">
                        {tool.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">
                        {tool.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Studio Stats */}
        <div className="border-t border-slate-700/50 pt-4">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-2">
              <div className="text-lg font-bold text-purple-400">15+</div>
              <div className="text-xs text-slate-400">Games</div>
            </div>
            <div className="p-2">
              <div className="text-lg font-bold text-purple-400">50k+</div>
              <div className="text-xs text-slate-400">Players</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const movingPanels = games.map((game) => (
    <div key={game.id} className="w-full h-full p-6 bg-slate-950">
      <div className="max-w-4xl mx-auto h-full">
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
          {/* Game Image */}
          <div className="relative">
            <div className="aspect-video bg-slate-800 border border-slate-700 overflow-hidden group">
              <img 
                src={game.image} 
                alt={game.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-2 py-1 text-xs font-bold ${
                  game.status === 'Live' 
                    ? 'bg-green-500/90 text-white' 
                    : 'bg-yellow-500/90 text-black'
                } backdrop-blur-sm`}>
                  {game.status}
                </span>
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-purple-500 hover:bg-purple-600 text-white p-4 transition-colors">
                  <Play className="w-8 h-8" />
                </button>
              </div>
            </div>
            
            {/* Game Stats */}
            <div className="flex space-x-4 mt-4">
              <div className="flex items-center space-x-1 text-sm text-slate-400">
                <Download className="w-4 h-4" />
                <span>{game.downloads}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-slate-400">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{game.rating}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-slate-400">
                <Users className="w-4 h-4" />
                <span>{game.players}</span>
              </div>
            </div>
          </div>

          {/* Game Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-purple-400 font-mono mb-2 uppercase tracking-wider">
                {game.category}
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {game.title}
              </h3>
              <p className="text-lg text-purple-300 font-medium mb-4">
                {game.subtitle}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {game.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {game.tech.map((tech, index) => (
                  <span key={index} className="bg-slate-800 border border-slate-700 text-purple-400 px-3 py-1 text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 pt-4">
              <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 font-semibold transition-colors flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Play Game</span>
              </button>
              <button className="bg-slate-800 border border-slate-700 hover:border-purple-400 text-white px-6 py-3 transition-colors flex items-center justify-center">
                <Github className="w-4 h-4" />
              </button>
              <button className="bg-slate-800 border border-slate-700 hover:border-purple-400 text-white px-6 py-3 transition-colors flex items-center justify-center">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="w-full gaming-panel-height bg-slate-950">
      <div className="container mx-auto px-0 h-full">
        {/* Section Header */}
        <div className="px-6 py-4 border-b border-slate-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Gamepad2 className="w-6 h-6 text-purple-400" />
              <div>
                <h2 className="text-xl font-bold text-white">Premium Gaming + Dev Content</h2>
                <p className="text-sm text-slate-400">Professional game development showcase</p>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              {currentPanel + 1} of {games.length}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="h-full">
          <HorizontalDragContainer
            staticPanels={[staticContent]}
            movingPanels={movingPanels}
            currentPanel={currentPanel}
            onPanelChange={setCurrentPanel}
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
