
import React from 'react';
import { ArrowRight, Github, Star, Gamepad2, Code, Zap, Coffee } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Unique Studio Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8 shadow-2xl">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <Coffee className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-white text-sm font-medium tracking-wide">Indie Game & Web Development Studio</span>
          </div>

          {/* Distinctive Typography */}
          <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 tracking-tight">
            <span className="block">JBLinx</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-5xl lg:text-6xl font-light italic">
              Digital Craftsmen
            </span>
          </h1>

          {/* Unique Description */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-xl lg:text-2xl text-gray-300 mb-4 font-light leading-relaxed">
              Crafting immersive survival games, building robust web applications, 
              and sharing our journey through code.
            </p>
            <p className="text-lg text-gray-400 italic">
              "Where creativity meets functionality, and every line of code tells a story."
            </p>
          </div>

          {/* Enhanced Stats with Personality */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 group hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <Gamepad2 className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-white font-bold text-lg">6+</div>
                  <div className="text-gray-400 text-sm">Game Projects</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 group hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <Code className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-white font-bold text-lg">20+</div>
                  <div className="text-gray-400 text-sm">Open Source</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 group hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="text-white font-bold text-lg">24/7</div>
                  <div className="text-gray-400 text-sm">Creating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Unique CTA Design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#portfolio" 
              className="group relative bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 flex items-center space-x-3 transform hover:scale-105"
            >
              <span>Explore Our Creations</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
            
            <a 
              href="https://github.com/orgs/JBLinx-Studio/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center space-x-3 backdrop-blur-sm"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>View Source Code</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
