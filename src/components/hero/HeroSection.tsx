
import React from 'react';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-orange-500/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              JBLinx Studio
            </h1>
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-slate-300">
              Innovation & Technology Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Crafting the future through cutting-edge game development, web applications, 
              and developer tools. Where innovation meets excellence.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <ProfessionalTerminal />
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105">
              Explore Projects
            </button>
            <button className="px-8 py-4 border border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
