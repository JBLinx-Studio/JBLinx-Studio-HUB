
import React from 'react';
import { ArrowRight, Download, Star, Code, Zap, Github, Book, Terminal, Database, Globe, Package, Cpu, Layers, FileCode, Server, Wrench } from 'lucide-react';

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
    <section className="py-8 bg-slate-950 border-t border-green-500/30 relative overflow-hidden">
      {/* Terminal/IDE Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(34, 197, 94, 0.3) 0px,
              transparent 1px,
              transparent 20px,
              rgba(34, 197, 94, 0.3) 21px
            )
          `
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-slate-800 border border-green-400/50 px-4 py-2">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <Terminal className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-green-400 font-black text-sm font-mono">PRIORITY #4: DEVELOPERS</span>
            </div>
          </div>
          <div className="text-green-400 font-mono text-sm">~/jblinx-studio/dev-tools</div>
        </div>

        {/* Terminal Window Layout */}
        <div className="bg-slate-900 border border-green-400/30 min-h-[600px]">
          {/* Terminal Title Bar */}
          <div className="bg-slate-800 border-b border-green-400/30 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Code className="w-5 h-5 text-green-400" />
              <h2 className="text-green-400 font-black text-xl font-mono">
                PREMIUM DEVELOPMENT PRODUCTS
              </h2>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
              <span>◉ ONLINE</span>
              <span>|</span>
              <span>DEV-ENV v2.1.0</span>
            </div>
          </div>

          {/* Terminal Content - Vertical Layout */}
          <div className="p-6">
            {/* Command Prompt Style */}
            <div className="mb-6">
              <div className="text-green-400 font-mono text-sm mb-2">
                <span className="text-slate-500">user@jblinx-studio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/dev-tools</span>
                <span className="text-white">$ </span>
                <span className="text-green-400">ls -la --premium-tools</span>
              </div>
              <div className="w-2 h-4 bg-green-400 animate-pulse inline-block"></div>
            </div>

            {/* File/Tool Listing - IDE Style */}
            <div className="space-y-4">
              {/* Development Tools Section */}
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="text-green-400 font-black text-lg font-mono mb-4 flex items-center">
                  <Layers className="w-5 h-5 mr-2" />
                  DEVELOPMENT_TOOLS/
                </h3>
                
                <div className="space-y-3">
                  {tools.map((tool, index) => (
                    <div key={index} className="bg-slate-800/50 border border-slate-700 hover:border-green-400/50 transition-all duration-300 p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="text-green-400 font-mono text-lg">
                            {index + 1}.
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <FileCode className="w-4 h-4 text-green-400" />
                              <h4 className="text-white font-black text-base font-mono">
                                {tool.title}
                              </h4>
                              <span className="bg-green-500/20 text-green-400 px-2 py-1 text-xs font-bold">
                                {tool.category}
                              </span>
                              <span className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                                {tool.tech}
                              </span>
                            </div>
                            <p className="text-slate-400 text-sm mb-2 font-mono">
                              // {tool.description}
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
                              <Star className="w-3 h-3 text-yellow-400" />
                              <span>{tool.rating}</span>
                            </div>
                          </div>
                          <a 
                            href={`https://github.com/JBLinx-Studio/${tool.repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-black text-xs transition-all duration-300 flex items-center space-x-1"
                          >
                            <Github className="w-3 h-3" />
                            <span>CLONE</span>
                          </a>
                        </div>
                      </div>
                      
                      {/* Command Line Style Features */}
                      <div className="bg-slate-900/50 p-3 font-mono text-xs">
                        <div className="text-slate-500 mb-1">$ npm install features --include:</div>
                        <div className="flex flex-wrap gap-2">
                          {tool.highlights.map((highlight, hIndex) => (
                            <span key={hIndex} className="text-green-400">
                              --{highlight.toLowerCase().replace(' ', '-')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Resources Section - File Tree Style */}
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-blue-400 font-black text-lg font-mono mb-4 flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  LEARNING_RESOURCES/
                </h3>
                
                <div className="space-y-2">
                  {guides.map((guide, index) => (
                    <div key={index} className="flex items-center justify-between bg-slate-800/30 hover:bg-slate-800/60 transition-all duration-300 p-3 font-mono">
                      <div className="flex items-center space-x-3">
                        <span className="text-slate-500">├──</span>
                        <div className="flex items-center space-x-2">
                          {guide.type === 'E-book' && <Book className="w-4 h-4 text-blue-400" />}
                          {guide.type === 'Course' && <Globe className="w-4 h-4 text-purple-400" />}
                          {guide.type === 'Guide' && <FileCode className="w-4 h-4 text-orange-400" />}
                          {guide.type === 'Tutorial' && <Terminal className="w-4 h-4 text-green-400" />}
                          
                          <span className="text-white font-bold text-sm">{guide.title}</span>
                          <span className="text-slate-500 text-xs">[{guide.type}]</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 text-xs text-slate-400">
                          <Download className="w-3 h-3" />
                          <span>{guide.downloads}</span>
                        </div>
                        <div className="text-green-400 font-bold text-sm">{guide.price}</div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 font-bold text-xs transition-all duration-300">
                          GET
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Info Panel */}
              <div className="bg-slate-800/50 border border-green-400/30 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-green-400 font-black text-base font-mono flex items-center">
                    <Server className="w-4 h-4 mr-2" />
                    SYSTEM_STATUS
                  </h4>
                  <div className="text-green-400 text-xs font-mono">◉ ALL SYSTEMS OPERATIONAL</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                  <div>
                    <span className="text-slate-400">repositories:</span>
                    <span className="text-white ml-2">47</span>
                  </div>
                  <div>
                    <span className="text-slate-400">total_downloads:</span>
                    <span className="text-green-400 ml-2">125k+</span>
                  </div>
                  <div>
                    <span className="text-slate-400">active_devs:</span>
                    <span className="text-blue-400 ml-2">2.8k</span>
                  </div>
                  <div>
                    <span className="text-slate-400">uptime:</span>
                    <span className="text-yellow-400 ml-2">99.9%</span>
                  </div>
                </div>
              </div>

              {/* Terminal Command Line */}
              <div className="pt-4">
                <div className="text-green-400 font-mono text-sm flex items-center space-x-2">
                  <span className="text-slate-500">user@jblinx-studio</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~/dev-tools</span>
                  <span className="text-white">$</span>
                  <a 
                    href="https://github.com/orgs/JBLinx-Studio/repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 underline decoration-dashed transition-colors"
                  >
                    git clone --recursive https://github.com/JBLinx-Studio
                  </a>
                </div>
                <div className="w-2 h-4 bg-green-400 animate-pulse inline-block mt-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-6 text-center">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-600 text-white px-6 py-3 font-black hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 space-x-2 font-mono"
          >
            <Terminal className="w-4 h-4" />
            <span>EXPLORE_ALL_REPOSITORIES</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
