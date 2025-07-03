
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Crown, Code, Monitor, Gamepad2, Building2, Heart, Rocket, ExternalLink, Trophy, Users, Star, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [liveStats, setLiveStats] = useState({
    activeUsers: 2847,
    githubStars: 1623,
    totalProjects: 47,
    satisfaction: 98.7
  });

  const terminalCommands = [
    {
      command: 'ls -la /jblinx-studio/',
      output: [
        'total 5 flagship products + ecosystem',
        'drwxr-xr-x  codefusion-studio/     # Advanced IDE Platform',
        'drwxr-xr-x  vitalitysync-pro/      # Health & Wellness Suite',
        'drwxr-xr-x  mindmate-gaming/       # Strategic Gaming Hub',
        'drwxr-xr-x  nestcore-platform/     # Real Estate Ecosystem',
        'drwxr-xr-x  codecraftai-pro/       # AI Development Assistant',
        'drwxr-xr-x  webapps/               # 15+ Production Apps',
        'drwxr-xr-x  games/                 # 12+ Gaming Projects',
        'drwxr-xr-x  tutorials/             # 30+ Learning Resources'
      ]
    },
    {
      command: 'cat /jblinx-studio/flagship-status.json',
      output: [
        '{',
        '  "codefusion_studio": {',
        '    "status": "LIVE",',
        '    "users": "50,000+",',
        '    "rating": "4.9/5"',
        '  },',
        '  "vitalitysync_pro": {',
        '    "status": "LIVE",',
        '    "users": "85,000+",',
        '    "rating": "4.9/5"',
        '  },',
        '  "mindmate_gaming": {',
        '    "status": "LIVE",',
        '    "users": "42,000+",',
        '    "rating": "4.8/5"',
        '  }',
        '}'
      ]
    },
    {
      command: 'systemctl status jblinx-ecosystem',
      output: [
        '● jblinx-ecosystem.service - Professional Studio',
        '   Loaded: loaded (/etc/systemd/system/jblinx.service)',
        '   Active: active (running) since 2024',
        '   Status: "All systems operational"',
        '   Main PID: 1337 (flagship-suite)',
        '   Memory: Optimized for performance',
        '   CGroup: /system.slice/jblinx-ecosystem.service',
        '           ├─ 5 flagship products',
        '           ├─ 15+ web applications',
        '           ├─ 12+ gaming projects',
        '           └─ 30+ tutorials & resources'
      ]
    }
  ];

  // Terminal typewriter effect
  useEffect(() => {
    const typeCommand = async () => {
      if (currentCommand >= terminalCommands.length) {
        setCurrentCommand(0);
        setTerminalText('');
        return;
      }

      setIsTyping(true);
      const cmd = terminalCommands[currentCommand];
      
      // Clear and type command
      setTerminalText('');
      const commandText = `jblinx@studio:~$ ${cmd.command}`;
      
      for (let i = 0; i <= commandText.length; i++) {
        setTerminalText(commandText.slice(0, i) + (i < commandText.length ? '█' : ''));
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show output
      setTerminalText(commandText);
      for (let i = 0; i < cmd.output.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 150));
        setTerminalText(prev => prev + '\n' + cmd.output[i]);
      }
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      setCurrentCommand(prev => prev + 1);
      setIsTyping(false);
    };

    const interval = setInterval(typeCommand, 12000);
    typeCommand();
    return () => clearInterval(interval);
  }, [currentCommand]);

  // Live stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        githubStars: prev.githubStars + Math.floor(Math.random() * 2),
        totalProjects: prev.totalProjects,
        satisfaction: Math.min(99.9, prev.satisfaction + (Math.random() - 0.5) * 0.1)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl animate-pulse rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 blur-3xl animate-pulse rounded-full" style={{animationDelay: '2s'}}></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 800px 800px, 600px 600px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center py-8">
        <div className="grid lg:grid-cols-12 gap-8 w-full">
          {/* Left Content - Streamlined */}
          <div className="lg:col-span-7 space-y-6">
            {/* Studio Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-slate-800/90 to-slate-700/90 border border-cyan-400/60 backdrop-blur-sm px-6 py-3 rounded-xl hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
              <Crown className="w-5 h-5 text-cyan-400 mr-3 animate-pulse" />
              <span className="text-cyan-400 font-black text-sm font-mono tracking-wider">PROFESSIONAL DEVELOPMENT STUDIO</span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
            </div>

            {/* Main Branding */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-none font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400">JBLinx</span>
                <br />
                <span className="text-white">Studio</span>
              </h1>
              
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400">
                Complete Development Ecosystem
              </p>
              
              <div className="text-lg font-bold text-slate-300 font-mono flex flex-wrap items-center gap-3">
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400">5 Flagship Products</span>
                </div>
                <span className="text-slate-500">•</span>
                <div className="flex items-center space-x-2">
                  <Monitor className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">15+ Web Apps</span>
                </div>
                <span className="text-slate-500">•</span>
                <div className="flex items-center space-x-2">
                  <Gamepad2 className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400">12+ Games</span>
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-2xl text-lg">
              Professional-grade development solutions spanning advanced IDEs, AI-powered tools, 
              health platforms, strategic gaming, and complete real estate ecosystems.
            </p>
            
            {/* Compact Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
              {[
                { value: "47+", label: "Total Projects", icon: Trophy, color: "text-cyan-400" },
                { value: liveStats.activeUsers.toLocaleString(), label: "Active Users", icon: Users, color: "text-emerald-400", live: true },
                { value: liveStats.githubStars.toLocaleString(), label: "GitHub Stars", icon: Star, color: "text-orange-400", live: true },
                { value: `${liveStats.satisfaction.toFixed(1)}%`, label: "Satisfaction", icon: Award, color: "text-purple-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/80 border border-slate-700/50 p-4 text-center backdrop-blur-sm hover:border-slate-600 transition-all duration-300 group hover:bg-slate-700/90 rounded-xl">
                    <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`text-lg font-black ${stat.color} font-mono flex items-center justify-center space-x-1`}>
                      <span>{stat.value}</span>
                      {stat.live && <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>}
                    </div>
                    <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 font-black transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 flex items-center space-x-3 hover:scale-105 transform rounded-xl text-lg"
              >
                <Rocket className="w-5 h-5" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 font-black transition-all duration-300 flex items-center space-x-3 hover:scale-105 transform rounded-xl text-lg"
              >
                <Github className="w-5 h-5" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Panel - Enhanced Terminal */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/95 border border-slate-700/50 backdrop-blur-sm relative overflow-hidden group hover:border-slate-600 transition-all duration-300 rounded-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400"></div>
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-400 text-sm font-mono font-bold">JBLINX ECOSYSTEM TERMINAL</div>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm min-h-[400px] relative">
                <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
                  {terminalText}
                </pre>
                {isTyping && (
                  <div className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="flex items-center justify-between p-4 border-t border-slate-700/50 bg-slate-900/60">
                <div className="flex items-center space-x-4 text-xs text-slate-400">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-bold">ALL SYSTEMS OPERATIONAL</span>
                  </div>
                </div>
                
                <a 
                  href="https://github.com/orgs/JBLinx-Studio/repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg text-white px-4 py-2 text-xs font-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 rounded-lg"
                >
                  <Github className="w-3 h-3" />
                  <span>VIEW ALL REPOS</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
