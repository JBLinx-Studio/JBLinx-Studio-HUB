
import React from 'react';
import { ArrowRight, Github, Terminal, Coffee, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Minimal animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Studio Badge */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              <Terminal className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-white/90 text-sm font-medium">Digital Artisans</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                JBLinx
              </h1>
              <div className="text-2xl lg:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                Code. Create. Conquer.
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              We craft immersive games and robust applications. 
              Every pixel tells a story, every line of code serves a purpose.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/portfolio" 
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Explore Creations</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Github className="w-5 h-5" />
                <span>View Code</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Terminal */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4">~/jblinx-studio</span>
              </div>
              
              <div className="font-mono text-sm space-y-2">
                <div className="text-green-400">$ whoami</div>
                <div className="text-white">JBLinx Digital Studio</div>
                <div className="text-green-400">$ ls projects/</div>
                <div className="text-cyan-400">survival-game/  horror-game/  fastapi-template/</div>
                <div className="text-green-400">$ status</div>
                <div className="text-yellow-400">Building the future, one commit at a time...</div>
                <div className="text-green-400 animate-pulse">█</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6">
          <div className="flex items-center space-x-2 text-white/70">
            <Coffee className="w-4 h-4" />
            <span className="text-sm">6+ Games</span>
          </div>
          <div className="flex items-center space-x-2 text-white/70">
            <Zap className="w-4 h-4" />
            <span className="text-sm">20+ Templates</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
