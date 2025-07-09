
import React from 'react';
import { ArrowRight, Download, Star, Code, Terminal, Database, Github, Book, Zap, Package, Cpu, Globe } from 'lucide-react';

const DeveloperTools = () => {
  const tools = [
    {
      title: "FastAPI MySQL Kit",
      category: "Backend",
      downloads: "12.0k",
      rating: "5.0",
      description: "Production-ready FastAPI with MySQL, JWT auth, Docker",
      highlights: ["JWT Auth", "ORM", "Docker", "Docs"],
      tech: "Python"
    },
    {
      title: "React Component Library",
      category: "Frontend",
      downloads: "9.3k",
      rating: "4.8",
      description: "Reusable TypeScript components with Storybook",
      highlights: ["TypeScript", "Storybook", "Testing", "Tree Shake"],
      tech: "React"
    },
    {
      title: "Database Migration CLI",
      category: "DevOps",
      downloads: "5.1k",
      rating: "4.9",
      description: "Multi-database migration with rollback safety",
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
    <section className="py-6 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Header - Same style as Services */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-slate-800/95 border border-cyan-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Terminal className="w-3 h-3 mr-1 text-cyan-400" />
            <span className="text-cyan-400 font-black text-xs font-mono tracking-widest">PRIORITY #4: DEVELOPERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            DEV <span className="text-cyan-400">TOOLS</span> & <span className="text-blue-400">RESOURCES</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Open-source tools, templates, and educational content for developers
          </p>

          {/* Stats - Same style as Services */}
          <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
            {[
              { icon: Code, value: "50+", label: "Tools", color: "text-cyan-400" },
              { icon: Book, value: "30+", label: "Guides", color: "text-blue-400" },
              { icon: Github, value: "100k+", label: "Downloads", color: "text-green-400" },
              { icon: Star, value: "4.9★", label: "Rating", color: "text-yellow-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/80 border border-slate-700 p-1.5 text-center backdrop-blur-sm">
                  <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Grid - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-6 mb-5">
          {/* Development Tools */}
          <div>
            <h3 className="text-sm font-black text-white mb-3 flex items-center font-mono">
              <Code className="w-3 h-3 mr-1 text-cyan-400" />
              DEVELOPMENT TOOLS
            </h3>
            
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/95 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 p-3"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-white font-black text-xs font-mono">{tool.title}</h4>
                        <span className="bg-cyan-500/20 text-cyan-400 px-1 py-0.5 text-xs font-bold">
                          {tool.category}
                        </span>
                        <span className="bg-slate-700 text-cyan-400 px-1 py-0.5 text-xs font-bold">
                          {tool.tech}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs mb-2">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {tool.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex} 
                        className="bg-slate-700 text-cyan-400 px-1 py-0.5 text-xs font-medium" 
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{tool.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{tool.rating}</span>
                      </div>
                    </div>
                    
                    <button className="flex items-center space-x-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-all duration-300">
                      <Github className="w-3 h-3" />
                      <span>VIEW CODE</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div>
            <h3 className="text-sm font-black text-white mb-3 flex items-center font-mono">
              <Book className="w-3 h-3 mr-1 text-blue-400" />
              LEARNING CONTENT
            </h3>
            
            <div className="space-y-2 mb-4">
              {guides.map((guide, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/95 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 p-3 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h4 className="text-white font-black text-xs font-mono mb-1">{guide.title}</h4>
                    <div className="flex items-center space-x-2 text-xs text-slate-500">
                      <span className="bg-blue-500/20 text-blue-400 px-1 py-0.5 text-xs font-bold">
                        {guide.type}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{guide.downloads}</span>
                      </div>
                      <div className="text-green-400 font-black font-mono">{guide.price}</div>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-all duration-300">
                    <span>GET</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-slate-800/95 border border-slate-700 p-3">
              <h4 className="text-sm font-black text-white mb-1 font-mono">
                DEV <span className="text-cyan-400">UPDATES</span>
              </h4>
              <p className="text-slate-400 text-xs mb-3">
                Get notified about new tools and resources
              </p>
              <div className="flex gap-1">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 bg-slate-700 border border-slate-600 px-2 py-1 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 font-black text-xs transition-colors duration-300">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Same style as Services */}
        <div className="text-center">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Github className="w-3 h-3" />
            <span>ALL REPOSITORIES</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
