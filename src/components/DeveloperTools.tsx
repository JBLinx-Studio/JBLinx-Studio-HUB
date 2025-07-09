
import React from 'react';
import { ArrowRight, Download, Star, Code, Zap, Github, Book, Terminal, Database, Globe, Package, Settings, Monitor, Cpu } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Section Header - Exact Same Style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-4 py-2 mb-4 rounded-lg">
            <Terminal className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-green-400 font-semibold text-sm tracking-wider">PRIORITY #4: DEVELOPERS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            PREMIUM <span className="text-green-400">DEVELOPMENT</span> PRODUCTS
          </h2>
          
          <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Open-source tools, templates, and educational content for developers
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Development Tools */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Code className="w-5 h-5 text-green-400" />
              <h3 className="text-white font-semibold text-lg">DEVELOPMENT TOOLS</h3>
            </div>
            
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div key={index} className="bg-slate-900 border border-slate-700 hover:border-green-400/50 transition-all duration-300 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="text-white font-semibold">{tool.title}</h4>
                        <span className="bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
                          {tool.category}
                        </span>
                        <span className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-medium rounded">
                          {tool.tech}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tool.highlights.map((highlight, hIndex) => (
                      <span key={hIndex} className="bg-slate-700 text-green-400 px-2 py-1 text-xs rounded">
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
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
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center space-x-2"
                    >
                      <Github className="w-4 h-4" />
                      <span>CODE</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Book className="w-5 h-5 text-blue-400" />
              <h3 className="text-white font-semibold text-lg">LEARNING CONTENT</h3>
            </div>
            
            <div className="space-y-3 mb-6">
              {guides.map((guide, index) => (
                <div key={index} className="bg-slate-900 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-sm mb-1">{guide.title}</h4>
                      <div className="flex items-center space-x-3 text-xs text-slate-400">
                        <span className="bg-blue-500 text-white px-2 py-1 font-medium rounded">
                          {guide.type}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{guide.downloads}</span>
                        </div>
                        <div className="text-green-400 font-semibold">{guide.price}</div>
                      </div>
                    </div>
                    
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-xs font-semibold rounded-lg transition-colors">
                      GET
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* System Status */}
            <div className="bg-slate-900 border border-slate-600 rounded-lg p-4 mb-4">
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Settings className="w-4 h-4 mr-2 text-cyan-400" />
                SYSTEM STATUS
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Build", status: "PASSING", color: "text-green-400" },
                  { label: "Tests", status: "100%", color: "text-green-400" },
                  { label: "Coverage", status: "95%", color: "text-yellow-400" },
                  { label: "Security", status: "SECURE", color: "text-green-400" }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-800 rounded p-2 text-center">
                    <div className="text-slate-400 text-xs">{item.label}</div>
                    <div className={`font-semibold text-xs ${item.color}`}>{item.status}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-slate-900 border border-slate-600 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">DEV UPDATES</h4>
              <p className="text-slate-400 text-sm mb-3">Get notified about new tools and resources</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="dev@email.com"
                  className="flex-1 bg-slate-700 border border-slate-600 px-3 py-2 text-white text-sm rounded focus:border-cyan-400 focus:outline-none"
                />
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 text-sm font-semibold rounded-lg transition-colors">
                  SYNC
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>ALL REPOSITORIES</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
