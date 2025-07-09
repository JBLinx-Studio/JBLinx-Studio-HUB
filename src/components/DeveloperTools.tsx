
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
    <section className="py-12 bg-slate-950 relative overflow-hidden">
      {/* Background pattern */}
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
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 px-6 py-3 mb-6 rounded-lg">
            <div className="flex items-center justify-center space-x-3">
              <Terminal className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-bold text-sm tracking-wider uppercase">Priority #4: Developers</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            PREMIUM <span className="text-green-400">DEVELOPMENT</span>
            <br />
            <span className="text-2xl lg:text-3xl text-blue-400">PRODUCTS</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-4"></div>
          
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Professional tools, comprehensive guides, and premium resources for modern developers
          </p>
        </div>

        {/* Terminal-Style Layout */}
        <div className="bg-slate-900/90 backdrop-blur-sm border border-green-400/30 rounded-xl min-h-[600px] overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-slate-800/90 border-b border-green-400/30 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-3">
                <Code className="w-5 h-5 text-green-400" />
                <h2 className="text-green-400 font-black text-xl">
                  DEVELOPMENT_TOOLKIT
                </h2>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <span>◉ ONLINE</span>
              <span>|</span>
              <span>DEV-ENV v2.1.0</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6">
            {/* Command Prompt */}
            <div className="mb-6 font-mono">
              <div className="text-green-400 text-sm mb-2">
                <span className="text-slate-500">user@jblinx-studio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~/dev-tools</span>
                <span className="text-white">$ </span>
                <span className="text-green-400">ls -la --premium-tools</span>
              </div>
              <div className="w-2 h-4 bg-green-400 animate-pulse inline-block"></div>
            </div>

            {/* Two-Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Development Tools */}
              <div>
                <h3 className="text-green-400 font-black text-lg mb-6 flex items-center font-mono">
                  <Layers className="w-5 h-5 mr-2" />
                  DEVELOPMENT_TOOLS/
                </h3>
                
                <div className="space-y-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:border-green-400/50 transition-all duration-300 p-5 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-green-400 font-mono text-lg">
                            {index + 1}.
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <FileCode className="w-4 h-4 text-green-400" />
                              <h4 className="text-white font-black text-base">
                                {tool.title}
                              </h4>
                              <span className="bg-green-500/20 text-green-400 px-2 py-1 text-xs font-semibold rounded-md">
                                {tool.category}
                              </span>
                              <span className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-semibold rounded-md">
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
                              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                              <span>{tool.rating}</span>
                            </div>
                          </div>
                          <a 
                            href={`https://github.com/JBLinx-Studio/${tool.repo}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold text-xs rounded-md transition-all duration-300 flex items-center space-x-1"
                          >
                            <Github className="w-3 h-3" />
                            <span>CLONE</span>
                          </a>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="bg-slate-900/50 rounded-lg p-3 font-mono text-xs">
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

              {/* Right Column - Learning Resources & Stats */}
              <div className="space-y-6">
                {/* Learning Resources */}
                <div>
                  <h3 className="text-blue-400 font-black text-lg mb-6 flex items-center font-mono">
                    <Book className="w-5 h-5 mr-2" />
                    LEARNING_RESOURCES/
                  </h3>
                  
                  <div className="space-y-3">
                    {guides.map((guide, index) => (
                      <div key={index} className="flex items-center justify-between bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 p-4 rounded-lg font-mono group">
                        <div className="flex items-center space-x-3">
                          <span className="text-slate-500">├──</span>
                          <div className="flex items-center space-x-2">
                            {guide.type === 'E-book' && <Book className="w-4 h-4 text-blue-400" />}
                            {guide.type === 'Course' && <Globe className="w-4 h-4 text-purple-400" />}
                            {guide.type === 'Guide' && <FileCode className="w-4 h-4 text-orange-400" />}
                            {guide.type === 'Tutorial' && <Terminal className="w-4 h-4 text-green-400" />}
                            
                            <span className="text-white font-semibold text-sm">{guide.title}</span>
                            <span className="text-slate-500 text-xs">[{guide.type}]</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1 text-xs text-slate-400">
                            <Download className="w-3 h-3" />
                            <span>{guide.downloads}</span>
                          </div>
                          <div className="text-green-400 font-bold text-sm">{guide.price}</div>
                          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 font-semibold text-xs rounded-md transition-all duration-300">
                            GET
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Status */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-green-400 font-black text-base font-mono flex items-center">
                      <Server className="w-4 h-4 mr-2" />
                      SYSTEM_STATUS
                    </h4>
                    <div className="text-green-400 text-xs font-mono">◉ ALL SYSTEMS OPERATIONAL</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm font-mono">
                    <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                      <span className="text-slate-400 block text-xs">repositories</span>
                      <span className="text-white text-lg font-bold">47</span>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                      <span className="text-slate-400 block text-xs">downloads</span>
                      <span className="text-green-400 text-lg font-bold">125k+</span>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                      <span className="text-slate-400 block text-xs">active_devs</span>
                      <span className="text-blue-400 text-lg font-bold">2.8k</span>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                      <span className="text-slate-400 block text-xs">uptime</span>
                      <span className="text-yellow-400 text-lg font-bold">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Command Line */}
            <div className="pt-6 border-t border-slate-700/50 mt-8">
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

        {/* CTA */}
        <div className="mt-8 text-center">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 font-bold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 space-x-2 rounded-lg"
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
