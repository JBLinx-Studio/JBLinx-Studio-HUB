
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Code, Terminal, Github, Database, Zap, Settings, Monitor, Activity, Cpu, Globe, Package, Users, Trophy } from 'lucide-react';

const DeveloperTools = () => {
  const [activeTab, setActiveTab] = useState('tools');

  const tools = [
    {
      title: "FastAPI MySQL Kit",
      category: "Backend Framework",
      downloads: "12.0k",
      rating: "5.0",
      description: "Production-ready FastAPI with MySQL, JWT auth, Docker deployment",
      repo: "fastapi-mysql-template",
      highlights: ["JWT Auth", "ORM Integration", "Docker Ready", "API Docs"],
      tech: "Python",
      status: "STABLE",
      accent: "text-purple-400",
      borderColor: "border-purple-500/40",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "React Component Library",
      category: "Frontend Components",
      downloads: "9.3k",
      rating: "4.8",
      description: "Reusable TypeScript components with Storybook documentation",
      repo: "react-ui-components",
      highlights: ["TypeScript", "Storybook", "Unit Tests", "Tree Shakable"],
      tech: "React",
      status: "ACTIVE",
      accent: "text-blue-400",
      borderColor: "border-blue-500/40",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Database Migration CLI",
      category: "DevOps Utilities",
      downloads: "5.1k",
      rating: "4.9",
      description: "Multi-database migration tool with rollback safety mechanisms",
      repo: "db-migration-cli",
      highlights: ["Multi-DB Support", "Version Control", "Safe Rollback", "CLI Interface"],
      tech: "Node.js",
      status: "MAINTAINED",
      accent: "text-green-400",
      borderColor: "border-green-500/40",
      bgColor: "bg-green-500/10"
    }
  ];

  const guides = [
    { title: "Unity Game Development Bible", downloads: "7.8k", type: "E-BOOK", price: "$29", category: "Game Dev", accent: "text-purple-400" },
    { title: "Modern Web Development Course", downloads: "11.2k", type: "COURSE", price: "$49", category: "Web Dev", accent: "text-blue-400" },
    { title: "API Design Patterns Guide", downloads: "8.9k", type: "GUIDE", price: "$19", category: "Backend", accent: "text-green-400" },
    { title: "Database Optimization Mastery", downloads: "6.4k", type: "TUTORIAL", price: "$24", category: "Database", accent: "text-orange-400" }
  ];

  const systemMetrics = [
    { label: "BUILD STATUS", value: "PASSING", color: "text-green-400", icon: Settings },
    { label: "TEST COVERAGE", value: "98.5%", color: "text-green-400", icon: Monitor },
    { label: "CODE QUALITY", value: "A+", color: "text-cyan-400", icon: Code },
    { label: "SECURITY SCAN", value: "CLEAN", color: "text-green-400", icon: Database }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 py-16 overflow-hidden">
      {/* Enhanced paradoxical background effects - matching ServicesSection */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {/* Primary ambient lighting with paradoxical movement */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/12 to-amber-500/8 blur-3xl rounded-full animate-pulse transform -rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/12 to-teal-500/8 blur-3xl rounded-full animate-pulse transform rotate-45" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-amber-400/8 to-orange-400/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Paradoxical secondary layers */}
        <div className="absolute top-1/6 right-1/3 w-[400px] h-[400px] bg-gradient-to-l from-orange-300/10 to-emerald-300/6 blur-2xl rounded-full animate-pulse transform rotate-12" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/6 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-teal-400/8 to-amber-400/6 blur-2xl rounded-full animate-pulse transform -rotate-12" style={{animationDelay: '3s'}}></div>
        
        {/* Enhanced paradoxical grid overlay */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px),
              linear-gradient(45deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(245, 158, 11, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px'
          }}></div>
        </div>

        {/* Floating geometric paradoxical shapes */}
        <div className="absolute top-1/3 left-1/6 w-8 h-8 bg-orange-400/40 transform rotate-45 animate-pulse border border-orange-400/30 shadow-lg shadow-orange-400/20"></div>
        <div className="absolute top-1/5 right-1/4 w-6 h-6 bg-emerald-400/40 rounded-full animate-pulse border border-emerald-400/30 shadow-lg shadow-emerald-400/20" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-amber-400/35 animate-pulse border border-amber-400/25 shadow-lg shadow-amber-400/20 transform rotate-12" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/5 right-1/6 w-12 h-12 bg-teal-400/30 transform rotate-30 animate-pulse border border-teal-400/20 shadow-lg shadow-teal-400/20" style={{animationDelay: '6s'}}></div>

        {/* Enhanced paradoxical accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent transform rotate-1"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent transform -rotate-1"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-400/40 to-transparent transform rotate-2"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-400/40 to-transparent transform -rotate-2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Header - Matching ServicesSection */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-zinc-800/95 border border-emerald-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Terminal className="w-3 h-3 mr-1 text-emerald-400" />
            <span className="text-emerald-400 font-black text-xs font-mono tracking-widest">DEVELOPER RESOURCES</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            PREMIUM <span className="text-emerald-400">DEV TOOLS</span> + <span className="text-cyan-400">LEARNING</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Open-source tools, templates, and educational content for developers
          </p>

          {/* Developer Stats - Compact */}
          <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
            {[
              { icon: Code, value: "15+", label: "Tools", color: "text-purple-400" },
              { icon: Package, value: "8+", label: "Guides", color: "text-blue-400" },
              { icon: Download, value: "50k+", label: "Downloads", color: "text-green-400" },
              { icon: Star, value: "4.9", label: "Rating", color: "text-orange-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-1.5 text-center backdrop-blur-sm">
                  <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tab Navigation - Compact Style */}
        <div className="bg-zinc-800/80 border border-zinc-600/50 mb-4 backdrop-blur-sm">
          <div className="flex items-center justify-between bg-zinc-900/80 border-b border-zinc-700 px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-emerald-400 font-black text-sm font-mono">DEV-RESOURCES</span>
            </div>
            
            <div className="flex space-x-1">
              {[
                { id: 'tools', label: 'TOOLS', icon: Code },
                { id: 'guides', label: 'GUIDES', icon: Package },
                { id: 'metrics', label: 'METRICS', icon: Activity }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1 text-xs font-bold transition-all duration-300 flex items-center space-x-1 ${
                      activeTab === tab.id
                        ? 'bg-emerald-500 text-black'
                        : 'bg-zinc-700 text-slate-300 hover:bg-zinc-600'
                    }`}
                  >
                    <IconComponent className="w-3 h-3" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-4">
            {/* Tools Tab */}
            {activeTab === 'tools' && (
              <div className="space-y-3">
                {tools.map((tool, index) => (
                  <div key={index} className={`bg-zinc-800/95 border transition-all duration-300 cursor-pointer p-3 backdrop-blur-sm ${tool.borderColor} hover:shadow-lg`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-zinc-700 border border-zinc-500/50 flex items-center justify-center">
                          <Code className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <h3 className={`text-sm font-black font-mono ${tool.accent}`}>
                            {tool.title}
                          </h3>
                          <p className="text-xs text-slate-400">{tool.category}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span className="text-white font-bold text-xs">{tool.rating}</span>
                        </div>
                        <div className={`text-xs font-bold px-2 py-1 ${
                          tool.status === 'STABLE' ? 'bg-green-500 text-black' :
                          tool.status === 'ACTIVE' ? 'bg-blue-500 text-black' : 'bg-purple-500 text-black'
                        }`}>
                          {tool.status}
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 text-xs leading-relaxed mb-2">{tool.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {tool.highlights.map((highlight, hIndex) => (
                        <span key={hIndex} className={`px-2 py-0.5 text-xs font-bold border transition-all duration-300 ${tool.borderColor} ${tool.bgColor} ${tool.accent}`}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs">
                        <Download className="w-3 h-3 text-slate-400" />
                        <span className="text-slate-300 font-medium">{tool.downloads}</span>
                      </div>
                      
                      <a 
                        href={`https://github.com/JBLinx-Studio/${tool.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500 hover:bg-emerald-600 text-black px-3 py-1 text-xs font-black transition-colors flex items-center space-x-1"
                      >
                        <Github className="w-3 h-3" />
                        <span>CLONE</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Guides Tab */}
            {activeTab === 'guides' && (
              <div className="grid lg:grid-cols-2 gap-3">
                {guides.map((guide, index) => (
                  <div key={index} className="bg-zinc-800/95 border border-zinc-600 hover:border-blue-400/50 transition-all duration-300 p-3 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="text-white font-black text-sm font-mono mb-1 line-clamp-1">{guide.title}</h4>
                        <div className="flex items-center space-x-2 text-xs">
                          <span className={`px-2 py-1 font-bold ${
                            guide.type === 'E-BOOK' ? 'bg-purple-500 text-black' :
                            guide.type === 'COURSE' ? 'bg-blue-500 text-black' :
                            guide.type === 'GUIDE' ? 'bg-orange-500 text-black' : 'bg-green-500 text-black'
                          }`}>
                            {guide.type}
                          </span>
                          <span className={`bg-zinc-700 px-2 py-1 font-bold ${guide.accent}`}>
                            {guide.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-emerald-400 font-black text-lg">{guide.price}</div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Download className="w-3 h-3" />
                        <span className="font-bold">{guide.downloads}</span>
                      </div>
                      <button className="bg-blue-500 hover:bg-blue-600 text-black px-3 py-1 text-xs font-black transition-colors">
                        ACCESS
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Metrics Tab */}
            {activeTab === 'metrics' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {systemMetrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="bg-zinc-800/95 border border-zinc-600 p-3 text-center backdrop-blur-sm">
                        <IconComponent className={`w-5 h-5 mx-auto mb-2 ${metric.color}`} />
                        <div className={`${metric.color} font-black text-lg font-mono`}>{metric.value}</div>
                        <div className="text-slate-400 text-xs font-bold mt-1">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-zinc-800/95 border border-zinc-600 p-3 backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-3">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 font-black text-sm font-mono">LIVE ACTIVITY</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="text-green-400">[SUCCESS] Repository sync completed</div>
                    <div className="text-blue-400">[INFO] New contributor joined: @dev_user_2847</div>
                    <div className="text-yellow-400">[WARN] High memory usage detected</div>
                    <div className="text-green-400">[SUCCESS] Security scan passed</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA - Matching style */}
        <div className="text-center">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Github className="w-3 h-3" />
            <span>ACCESS ALL REPOSITORIES</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
