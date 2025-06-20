
import React from 'react';
import { ArrowRight, Github, Star, Gamepad2, Code, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Compact Header */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white text-sm font-medium">Game & Web Development Studio</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            JBLinx
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Studio
            </span>
          </h1>

          {/* Concise Description */}
          <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional game development & web applications. From survival games to enterprise solutions.
          </p>

          {/* Compact Stats */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
              <Gamepad2 className="w-4 h-4 inline mr-1" />
              <span className="text-white text-sm">6 Games</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
              <Code className="w-4 h-4 inline mr-1" />
              <span className="text-white text-sm">20+ Repos</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
              <Github className="w-4 h-4 inline mr-1" />
              <span className="text-white text-sm">Open Source</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#portfolio" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/orgs/JBLinx-Studio/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
