
import React from 'react';
import { ArrowRight, Download, Star, Code, Zap, Github, Book, Terminal, Database, Globe, Package } from 'lucide-react';

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
    <section className="py-6 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-slate-800/90 border border-green-400/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Terminal className="w-3 h-3 mr-1 text-green-400" />
            <span className="text-green-400 font-black text-xs font-mono tracking-widest">DEVELOPER RESOURCES</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            DEV <span className="text-green-400">TOOLS</span> & <span className="text-blue-400">GUIDES</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-green-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Open-source tools, templates, and educational content for developers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Compact Development Tools */}
          <div>
            <h3 className="text-lg font-black text-white mb-3 font-mono flex items-center">
              <Code className="w-4 h-4 mr-2 text-green-400" />
              DEVELOPMENT TOOLS
            </h3>
            
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/90 border border-slate-700 hover:border-green-400/60 transition-all duration-300 p-3"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-white font-black text-sm font-mono">
                          {tool.title}
                        </h4>
                        <span className="bg-green-500/30 text-green-400 px-1.5 py-0.5 text-xs font-bold">
                          {tool.category}
                        </span>
                        <span className="bg-slate-700 text-cyan-400 px-1.5 py-0.5 text-xs font-bold">
                          {tool.tech}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs mb-2">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Compact Highlights */}
                  <div className="flex flex-wrap gap-1 mb-2">
                    {tool.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex} 
                        className="bg-slate-700 text-green-400 px-1.5 py-0.5 text-xs font-medium" 
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-slate-400">
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
                      className="bg-green-500 text-white px-3 py-1.5 hover:bg-green-600 transition-colors flex items-center space-x-1 text-xs font-bold"
                    >
                      <Github className="w-3 h-3" />
                      <span>CODE</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Learning Resources */}
          <div>
            <h3 className="text-lg font-black text-white mb-3 font-mono flex items-center">
              <Book className="w-4 h-4 mr-2 text-blue-400" />
              LEARNING CONTENT
            </h3>
            
            <div className="space-y-2 mb-4">
              {guides.map((guide, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/90 border border-slate-700 hover:border-blue-400/60 transition-all duration-300 p-3 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-sm mb-1">
                      {guide.title}
                    </h4>
                    <div className="flex items-center space-x-3 text-xs text-slate-400">
                      <span className="bg-blue-500/30 text-blue-400 px-1.5 py-0.5 font-medium">
                        {guide.type}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{guide.downloads}</span>
                      </div>
                      <div className="text-green-400 font-bold">{guide.price}</div>
                    </div>
                  </div>
                  
                  <button className="bg-blue-500 text-white px-3 py-1.5 hover:bg-blue-600 transition-colors text-xs font-bold">
                    GET
                  </button>
                </div>
              ))}
            </div>

            {/* Compact Newsletter */}
            <div className="bg-slate-800/90 border border-slate-700 p-4">
              <h4 className="text-lg font-black text-white mb-2 font-mono">
                DEV <span className="text-cyan-400">UPDATES</span>
              </h4>
              <p className="text-slate-400 text-xs mb-3">
                Get notified about new tools, templates, and resources
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 bg-slate-700 border border-slate-600 px-2 py-1.5 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
                <button className="bg-cyan-500 text-white px-3 py-1.5 hover:bg-cyan-600 transition-colors text-xs font-bold">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Compact CTA */}
        <div className="text-center mt-5">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-600 text-white px-5 py-2 font-black hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 space-x-2 text-sm"
          >
            <Github className="w-4 h-4" />
            <span>ALL REPOSITORIES</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
