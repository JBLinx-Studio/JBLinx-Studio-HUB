
import React from 'react';
import { ArrowRight, Download, Star, Code, Zap, Github, Book, Terminal } from 'lucide-react';

const DeveloperTools = () => {
  const tools = [
    {
      title: "FastAPI MySQL Template",
      category: "Backend Template",
      downloads: "12.0k",
      rating: "5.0",
      description: "Production-ready FastAPI template with MySQL integration",
      repo: "fastapi-mysql-template",
      highlights: ["JWT Auth", "Database ORM", "API Documentation", "Docker Ready"]
    },
    {
      title: "React Component Library",
      category: "Frontend Library",
      downloads: "9.3k",
      rating: "4.8",
      description: "Reusable React components with TypeScript support",
      repo: "react-ui-components",
      highlights: ["TypeScript", "Storybook", "Testing Suite", "Tree Shaking"]
    },
    {
      title: "Database Migration CLI",
      category: "DevOps Tool",
      downloads: "5.1k",
      rating: "4.9",
      description: "Powerful database migration and schema management tool",
      repo: "db-migration-cli",
      highlights: ["Multi-DB Support", "Version Control", "Rollback Safe", "CLI Interface"]
    }
  ];

  const guides = [
    { title: "Game Development with Unity", downloads: "7.8k", type: "E-book" },
    { title: "Modern Web Development", downloads: "11.2k", type: "Course" },
    { title: "Backend API Design Patterns", downloads: "8.9k", type: "Guide" },
    { title: "Database Optimization Techniques", downloads: "6.4k", type: "Tutorial" }
  ];

  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-6" style={{ borderRadius: '8px' }}>
            <Zap className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-sm font-bold text-green-300 tracking-wide font-mono">DEVELOPER RESOURCES</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            TOOLS & <span className="text-green-400">GUIDES</span>
          </h2>
          
          <div className="w-24 h-0.5 bg-green-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Open-source tools, templates, and educational content for developers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Developer Tools */}
          <div>
            <h3 className="text-2xl font-black text-white mb-6 font-mono">
              <Terminal className="w-6 h-6 inline mr-2 text-green-400" />
              DEVELOPMENT TOOLS
            </h3>
            
            <div className="space-y-6">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-slate-800 border border-slate-700 hover:border-green-400/50 transition-all duration-300 p-6"
                  style={{ borderRadius: '8px' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-lg font-black text-white font-mono">
                          {tool.title}
                        </h4>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 text-xs font-medium" style={{ borderRadius: '4px' }}>
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex} 
                        className="bg-slate-700 text-green-400 px-2 py-1 text-xs font-medium" 
                        style={{ borderRadius: '4px' }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{tool.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{tool.rating}</span>
                      </div>
                    </div>
                    
                    <a 
                      href={`https://github.com/JBLinx-Studio/${tool.repo}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 transition-colors flex items-center space-x-2 text-sm font-medium"
                      style={{ borderRadius: '6px' }}
                    >
                      <Github className="w-4 h-4" />
                      <span>VIEW CODE</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div>
            <h3 className="text-2xl font-black text-white mb-6 font-mono">
              <Book className="w-6 h-6 inline mr-2 text-orange-400" />
              LEARNING CONTENT
            </h3>
            
            <div className="space-y-4 mb-8">
              {guides.map((guide, index) => (
                <div 
                  key={index}
                  className="bg-slate-800 border border-slate-700 hover:border-orange-400/50 transition-all duration-300 p-4 flex items-center justify-between"
                  style={{ borderRadius: '8px' }}
                >
                  <div className="flex-1">
                    <h4 className="text-white font-bold mb-1">
                      {guide.title}
                    </h4>
                    <div className="flex items-center space-x-3 text-sm text-slate-400">
                      <span className="bg-orange-500/20 text-orange-400 px-2 py-1 text-xs font-medium" style={{ borderRadius: '4px' }}>
                        {guide.type}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{guide.downloads}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-orange-500 text-white px-3 py-2 hover:bg-orange-600 transition-colors text-sm font-medium" style={{ borderRadius: '4px' }}>
                    READ
                  </button>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-slate-800 border border-slate-700 p-6" style={{ borderRadius: '8px' }}>
              <h4 className="text-xl font-black text-white mb-3 font-mono">
                DEV <span className="text-cyan-400">UPDATES</span>
              </h4>
              <p className="text-slate-400 text-sm mb-4">
                Get notified about new tools, templates, and learning resources
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 bg-slate-700 border border-slate-600 px-3 py-2 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  style={{ borderRadius: '6px' }}
                />
                <button className="bg-cyan-500 text-white px-4 py-2 hover:bg-cyan-600 transition-colors text-sm font-bold" style={{ borderRadius: '6px' }}>
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 font-bold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 space-x-3"
            style={{ borderRadius: '8px' }}
          >
            <Github className="w-5 h-5" />
            <span>EXPLORE ALL REPOSITORIES</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
