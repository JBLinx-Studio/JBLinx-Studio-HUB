
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
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* UNIQUE LAYOUT 3: Diagonal/asymmetric header with corner stats */}
        <div className="relative mb-8">
          <div className="lg:flex lg:items-start justify-between">
            <div>
              <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-4 py-2 mb-4">
                <Terminal className="w-4 h-4 mr-2 text-orange-400" />
                <span className="text-orange-400 font-bold text-sm">PRIORITY #4: DEVELOPERS</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
                PREMIUM <span className="text-orange-400">DEVELOPMENT</span> PRODUCTS
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-6">
                Professional tools, comprehensive guides, and premium resources for modern developers
              </p>
            </div>

            {/* CORNER STATS - Positioned top right */}
            <div className="grid grid-cols-2 gap-3 lg:w-64 w-full">
              {[
                { icon: Code, value: "47", label: "Repos", color: "text-orange-400" },
                { icon: Download, value: "125k+", label: "Downloads", color: "text-red-400" },
                { icon: Star, value: "4.9★", label: "Rating", color: "text-yellow-400" },
                { icon: Terminal, value: "2.8k", label: "Devs", color: "text-purple-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800 border border-slate-700 p-3 text-center">
                    <IconComponent className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
                    <div className={`text-sm font-black ${stat.color}`}>{stat.value}</div>
                    <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* COMPACT TWO-COLUMN LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Development Tools */}
          <div>
            <h3 className="text-orange-400 font-black text-xl mb-6 flex items-center">
              <FileCode className="w-6 h-6 mr-2" />
              DEVELOPMENT TOOLS
            </h3>
            
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-slate-800 border border-slate-700 hover:border-orange-400/50 transition-all duration-300 p-5 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-orange-400 text-lg font-bold">
                        {index + 1}.
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <FileCode className="w-4 h-4 text-orange-400" />
                          <h4 className="text-white font-black text-base">
                            {tool.title}
                          </h4>
                          <span className="bg-orange-500/20 text-orange-400 px-2 py-1 text-xs font-semibold">
                            {tool.category}
                          </span>
                          <span className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-semibold">
                            {tool.tech}
                          </span>
                        </div>
                        <p className="text-slate-400 text-sm mb-2">
                          {tool.description}
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
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 font-bold text-xs transition-all duration-300 flex items-center space-x-1"
                      >
                        <Github className="w-3 h-3" />
                        <span>CLONE</span>
                      </a>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="bg-slate-900/50 p-3 text-xs">
                    <div className="text-slate-500 mb-1">Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {tool.highlights.map((highlight, hIndex) => (
                        <span key={hIndex} className="text-orange-400">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Learning Resources & System Status */}
          <div className="space-y-6">
            {/* Learning Resources */}
            <div>
              <h3 className="text-blue-400 font-black text-xl mb-6 flex items-center">
                <Book className="w-6 h-6 mr-2" />
                LEARNING RESOURCES
              </h3>
              
              <div className="space-y-3">
                {guides.map((guide, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-800 hover:bg-slate-700/60 transition-all duration-300 p-4 group">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        {guide.type === 'E-book' && <Book className="w-4 h-4 text-blue-400" />}
                        {guide.type === 'Course' && <Terminal className="w-4 h-4 text-purple-400" />}
                        {guide.type === 'Guide' && <FileCode className="w-4 h-4 text-orange-400" />}
                        {guide.type === 'Tutorial' && <Code className="w-4 h-4 text-green-400" />}
                        
                        <span className="text-white font-semibold text-sm">{guide.title}</span>
                        <span className="text-slate-500 text-xs">[{guide.type}]</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Download className="w-3 h-3" />
                        <span>{guide.downloads}</span>
                      </div>
                      <div className="text-orange-400 font-bold text-sm">{guide.price}</div>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 font-semibold text-xs transition-all duration-300">
                        GET
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-slate-800 border border-orange-400/30 p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-orange-400 font-black text-base flex items-center">
                  <Server className="w-4 h-4 mr-2" />
                  SYSTEM STATUS
                </h4>
                <div className="text-green-400 text-xs">◉ ALL SYSTEMS OPERATIONAL</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-700/30 p-3 text-center">
                  <span className="text-slate-400 block text-xs">repositories</span>
                  <span className="text-white text-lg font-bold">47</span>
                </div>
                <div className="bg-slate-700/30 p-3 text-center">
                  <span className="text-slate-400 block text-xs">downloads</span>
                  <span className="text-orange-400 text-lg font-bold">125k+</span>
                </div>
                <div className="bg-slate-700/30 p-3 text-center">
                  <span className="text-slate-400 block text-xs">active_devs</span>
                  <span className="text-blue-400 text-lg font-bold">2.8k</span>
                </div>
                <div className="bg-slate-700/30 p-3 text-center">
                  <span className="text-slate-400 block text-xs">uptime</span>
                  <span className="text-green-400 text-lg font-bold">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-800 border border-slate-700 p-6 text-center">
          <h3 className="text-xl font-black text-white mb-2">
            <span className="text-orange-400">EVERYTHING</span> FOR DEVELOPERS
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Complete toolkit for developers and creators - templates, guides, apps, and tools.
          </p>
          
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-bold transition-all duration-300 space-x-2"
          >
            <Terminal className="w-4 h-4" />
            <span>EXPLORE ALL REPOSITORIES</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
