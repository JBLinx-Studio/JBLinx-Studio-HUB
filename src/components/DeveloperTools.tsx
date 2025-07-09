
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Grid-based Header Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left: Title Section */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center bg-slate-800/50 border border-cyan-500/30 px-4 py-2 rounded-full mb-4">
              <Terminal className="w-4 h-4 mr-2 text-cyan-400" />
              <span className="text-cyan-400 font-bold text-sm tracking-wide">PRIORITY #4: DEVELOPERS</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              DEV <span className="text-cyan-400">TOOLS</span> & <span className="text-blue-400">RESOURCES</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Open-source tools, templates, and educational content for developers
            </p>
          </div>
          
          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Code, value: "50+", label: "Tools", color: "text-cyan-400" },
              { icon: Book, value: "30+", label: "Guides", color: "text-blue-400" },
              { icon: Github, value: "100k+", label: "Downloads", color: "text-green-400" },
              { icon: Star, value: "4.9★", label: "Rating", color: "text-yellow-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/30 border border-slate-700 rounded-lg p-3 text-center">
                  <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
                  <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Development Tools */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Code className="w-5 h-5 mr-2 text-cyan-400" />
              DEVELOPMENT TOOLS
            </h3>
            
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 p-4 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="text-white font-bold">{tool.title}</h4>
                        <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 text-xs font-medium rounded">
                          {tool.category}
                        </span>
                        <span className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-medium rounded">
                          {tool.tech}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">{tool.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {tool.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex} 
                        className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-medium rounded" 
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{tool.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{tool.rating}</span>
                      </div>
                    </div>
                    
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-1">
                      <Github className="w-4 h-4" />
                      <span>VIEW CODE</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Book className="w-5 h-5 mr-2 text-blue-400" />
              LEARNING CONTENT
            </h3>
            
            <div className="space-y-3 mb-6">
              {guides.map((guide, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 hover:border-blue-400/50 transition-all duration-300 p-4 rounded-lg flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-sm mb-2">{guide.title}</h4>
                    <div className="flex items-center space-x-3 text-sm text-slate-500">
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 text-xs font-medium rounded">
                        {guide.type}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{guide.downloads}</span>
                      </div>
                      <div className="text-green-400 font-bold">{guide.price}</div>
                    </div>
                  </div>
                  
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    GET
                  </button>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h4 className="text-lg font-bold text-white mb-2">
                DEV <span className="text-cyan-400">UPDATES</span>
              </h4>
              <p className="text-slate-400 text-sm mb-4">
                Get notified about new tools, templates, and resources
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 bg-slate-700 border border-slate-600 px-3 py-2 text-white text-sm rounded-lg focus:border-cyan-400 focus:outline-none"
                />
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 space-x-2"
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
