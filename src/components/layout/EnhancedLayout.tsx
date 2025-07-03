
import React from 'react';
import { Hexagon, Terminal, Code, Gamepad2, Heart, Building2, Users, Star, Trophy, Award } from 'lucide-react';

interface EnhancedLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  category?: string;
}

const EnhancedLayout: React.FC<EnhancedLayoutProps> = ({ 
  children, 
  title = "JBLinx Studio", 
  subtitle = "Professional Development Ecosystem",
  category = "all"
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Enhanced Header Section */}
      <div className="relative overflow-hidden border-b border-slate-800">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/5 to-cyan-500/5 blur-3xl animate-pulse rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl animate-pulse rounded-full" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          {/* Breadcrumb/Category */}
          <div className="flex items-center space-x-2 mb-6">
            <div className="inline-flex items-center bg-slate-800/50 border border-green-400/30 rounded-lg px-4 py-2">
              <Hexagon className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 font-black text-sm font-mono tracking-wider uppercase">
                {category}
              </span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-4 font-mono leading-tight">
              {title}
            </h1>
            <p className="text-xl text-slate-400 mb-6 font-mono">
              {subtitle}
            </p>

            {/* Quick Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {[
                { icon: Trophy, label: "5 Flagship Products", color: "text-yellow-400" },
                { icon: Users, label: "2,847+ Active Users", color: "text-cyan-400" },
                { icon: Star, label: "1,623+ GitHub Stars", color: "text-orange-400" },
                { icon: Award, label: "98.7% Satisfaction", color: "text-green-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2">
                    <IconComponent className={`w-4 h-4 ${stat.color}`} />
                    <span className="text-slate-300 font-bold text-sm font-mono">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="relative">
        {children}
      </main>
    </div>
  );
};

export default EnhancedLayout;
