
import React from 'react';
import { ArrowRight, Download, Star, Code, Zap, Github, Book, Terminal, Database, FileCode, Server } from 'lucide-react';

const DeveloperTools = () => {
  const tools = [
    {
      title: "FastAPI MySQL Kit",
      category: "Backend",
      downloads: "12.0k",
      rating: "5.0",
      description: "Production-ready FastAPI with MySQL, JWT auth, Docker",
      repo: "fastapi-mysql-template",
      highlights: ["JWT Auth", "ORM", "Docker", "Docs"],
      tech: "Python"
    },
    {
      title: "React Component Library",
      category: "Frontend",
      downloads: "9.3k",
      rating: "4.8",
      description: "Reusable TypeScript components with Storybook",
      repo: "react-ui-components",
      highlights: ["TypeScript", "Storybook", "Testing", "Tree Shake"],
      tech: "React"
    },
    {
      title: "Database Migration CLI",
      category: "DevOps",
      downloads: "5.1k",
      rating: "4.9",
      description: "Multi-database migration with rollback safety",
      repo: "db-migration-cli",
      highlights: ["Multi-DB", "Version Control", "Rollback", "CLI"],
      tech: "Node.js"
    }
  ];

  const guides = [
    { title: "Unity Game Development Bible", downloads: "7.8k", type: "E-book", price: "$29" },
    { title: "Modern Web Development Course", downloads: "11.2k", type: "Course", price: "$49" },
    { title: "API Design Patterns Guide", downloads: "8.9k", type: "Guide", price: "$19" },
    { title: "Database Optimization Mastery", downloads: "6.4k", type: "Tutorial", price: "$24" }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Header matching Services section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-slate-800/90 border border-emerald-500/40 px-4 py-1.5 mb-3 backdrop-blur-sm">
            <Terminal className="w-3 h-3 mr-1.5 text-emerald-400" />
            <span className="text-emerald-400 font-black text-xs font-mono tracking-wider">PRIORITY #4: DEVELOPERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-2">
            PREMIUM <span className="text-emerald-400">DEVELOPMENT</span> PRODUCTS
          </h2>
          
          <div className="w-12 h-0.5 bg-emerald-400 mx-auto mb-3"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-4">
            Professional tools, comprehensive guides, and premium resources for modern developers
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto mb-6">
            {[
              { icon: Code, value: "47", label: "Repos", color: "text-emerald-400" },
              { icon: Download, value: "125k+", label: "Downloads", color: "text-cyan-400" },
              { icon: Star, value: "4.9★", label: "Rating", color: "text-yellow-400" },
              { icon: Terminal, value: "2.8k", label: "Devs", color: "text-purple-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/70 border border-slate-700 p-2 text-center backdrop-blur-sm">
                  <IconComponent className={`w-4 h-4 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-sm font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-6">
          {/* Left Column - Development Tools */}
          <div>
            <h3 className="text-emerald-400 font-black text-lg mb-6 flex items-center font-mono">
              <FileCode className="w-5 h-5 mr-2" />
              DEVELOPMENT TOOLS
            </h3>
            
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-slate-800/70 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 p-5 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-emerald-400 font-mono text-lg">
                        {index + 1}.
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <FileCode className="w-4 h-4 text-emerald-400" />
                          <h4 className="text-white font-black text-base font-mono">
                            {tool.title}
                          </h4>
                          <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 text-xs font-semibold">
                            {tool.category}
                          </span>
                          <span className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-semibold">
                            {tool.tech}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mb-2 font-mono">
                          # {tool.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-3 text-xs text-slate-400 mb-2">
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{tool.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{tool.rating}</span>
                        </div>
                      </div>
                      <a 
                        href={`https://github.com/JBLinx-Studio/${tool.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 font-bold text-xs transition-all duration-300 flex items-center space-x-1"
                      >
                        <Github className="w-3 h-3" />
                        <span>CLONE</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="bg-slate-900/50 p-3 font-mono text-xs">
                    <div className="text-slate-500 mb-1"># Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {tool.highlights.map((highlight, hIndex) => (
                        <span key={hIndex} className="text-emerald-400">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Learning Resources */}
          <div className="space-y-6">
            {/* Learning Resources */}
            <div>
              <h3 className="text-cyan-400 font-black text-lg mb-6 flex items-center font-mono">
                <Book className="w-5 h-5 mr-2" />
                LEARNING RESOURCES
              </h3>
              
              <div className="space-y-3">
                {guides.map((guide, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-800/30 hover:bg-slate-800/60 transition-all duration-300 p-4 font-mono group">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        {guide.type === 'E-book' && <Book className="w-4 h-4 text-cyan-400" />}
                        {guide.type === 'Course' && <Terminal className="w-4 h-4 text-purple-400" />}
                        {guide.type === 'Guide' && <FileCode className="w-4 h-4 text-orange-400" />}
                        {guide.type === 'Tutorial' && <Code className="w-4 h-4 text-emerald-400" />}
                        
                        <span className="text-white font-semibold text-sm">{guide.title}</span>
                        <span className="text-slate-500 text-xs">[{guide.type}]</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Download className="w-3 h-3" />
                        <span>{guide.downloads}</span>
                      </div>
                      <div className="text-emerald-400 font-bold text-sm">{guide.price}</div>
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 font-semibold text-xs transition-all duration-300">
                        GET
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-slate-800/70 border border-emerald-400/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-emerald-400 font-black text-base font-mono flex items-center">
                  <Server className="w-4 h-4 mr-2" />
                  SYSTEM STATUS
                </h4>
                <div className="text-emerald-400 text-xs font-mono">◉ ALL SYSTEMS OPERATIONAL</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                <div className="bg-slate-700/30 p-3 text-center">
                  <span className="text-slate-400 block text-xs">repositories</span>
                  <span className="text-white text-lg font-bold">47</span>
                </div>
                <div className="bg-slate-700/30 p-3 text-center">
                  <span className="text-slate-400 block text-xs">downloads</span>
                  <span className="text-emerald-400 text-lg font-bold">125k+</span>
                </div>
                <div className="bg-slate-700/30 p-3 text-center">
                  <span className="text-slate-400 block text-xs">active_devs</span>
                  <span className="text-cyan-400 text-lg font-bold">2.8k</span>
                </div>
                <div className="bg-slate-700/30 p-3 text-center">
                  <span className="text-slate-400 block text-xs">uptime</span>
                  <span className="text-yellow-400 text-lg font-bold">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 p-5 text-center">
          <h3 className="text-xl font-black text-white mb-2 font-mono">
            <span className="text-emerald-400">EVERYTHING</span> FOR DEVELOPERS
          </h3>
          <p className="text-sm text-slate-400 mb-3">
            Complete toolkit for developers and creators - templates, guides, apps, and tools.
          </p>
          
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white px-5 py-2.5 font-black transition-all duration-300 space-x-1.5 text-sm"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>EXPLORE ALL REPOSITORIES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
