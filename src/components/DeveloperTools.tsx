
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Code, Terminal, Github, Database, Zap, Settings, Monitor, Activity, Cpu, Globe, Package } from 'lucide-react';

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
      status: "STABLE"
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
      status: "ACTIVE"
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
      status: "MAINTAINED"
    }
  ];

  const guides = [
    { title: "Unity Game Development Bible", downloads: "7.8k", type: "E-BOOK", price: "$29", category: "Game Dev" },
    { title: "Modern Web Development Course", downloads: "11.2k", type: "COURSE", price: "$49", category: "Web Dev" },
    { title: "API Design Patterns Guide", downloads: "8.9k", type: "GUIDE", price: "$19", category: "Backend" },
    { title: "Database Optimization Mastery", downloads: "6.4k", type: "TUTORIAL", price: "$24", category: "Database" }
  ];

  const systemMetrics = [
    { label: "BUILD STATUS", value: "PASSING", color: "text-emerald-500", icon: Settings },
    { label: "TEST COVERAGE", value: "98.5%", color: "text-emerald-500", icon: Monitor },
    { label: "CODE QUALITY", value: "A+", color: "text-orange-500", icon: Code },
    { label: "SECURITY SCAN", value: "CLEAN", color: "text-emerald-500", icon: Database }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/50 to-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-orange-500/10 to-amber-500/8 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-teal-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-card/95 border border-primary/20 px-4 py-2 mb-4 backdrop-blur-sm rounded-lg">
            <Terminal className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary font-bold text-sm tracking-wide">DEVELOPER RESOURCES</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Premium <span className="text-primary">Development Tools</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Open-source tools, comprehensive guides, and educational content for modern developers
          </p>
        </div>

        {/* Professional Terminal Interface */}
        <div className="bg-card/95 border border-border rounded-xl shadow-xl backdrop-blur-sm mb-8 overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-muted/80 border-b border-border px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-primary font-bold text-sm">~/JBLINX-STUDIO/DEV-RESOURCES</span>
            </div>
            
            {/* Enhanced Tab Navigation */}
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
                    className={`px-4 py-2 text-xs font-bold transition-all duration-300 flex items-center space-x-2 rounded-lg ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8">
            {/* Tools Tab */}
            {activeTab === 'tools' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-primary font-bold text-sm">$</span>
                  <span className="text-foreground text-sm font-mono">ls -la /development-tools</span>
                </div>
                
                <div className="grid gap-4">
                  {tools.map((tool, index) => (
                    <div key={index} className="bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300 p-6 rounded-lg hover:shadow-lg">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h4 className="text-foreground font-bold text-lg">{tool.title}</h4>
                            <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                              tool.status === 'STABLE' ? 'bg-emerald-500 text-white' :
                              tool.status === 'ACTIVE' ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white'
                            }`}>
                              {tool.status}
                            </span>
                            <span className="bg-card border border-border text-primary px-3 py-1 text-xs font-bold rounded-full">
                              {tool.tech}
                            </span>
                          </div>
                          <div className="text-primary font-semibold text-sm mb-2">{tool.category}</div>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{tool.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tool.highlights.map((highlight, hIndex) => (
                          <span key={hIndex} className="bg-card border border-primary/20 text-foreground px-3 py-1 text-xs font-medium rounded-md">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Download className="w-4 h-4" />
                            <span className="font-semibold">{tool.downloads}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-semibold">{tool.rating}</span>
                          </div>
                        </div>
                        
                        <a 
                          href={`https://github.com/JBLinx-Studio/${tool.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm font-bold transition-all duration-300 flex items-center space-x-2 rounded-lg shadow-md hover:shadow-lg"
                        >
                          <Github className="w-4 h-4" />
                          <span>CLONE REPO</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Guides Tab */}
            {activeTab === 'guides' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-primary font-bold text-sm">$</span>
                  <span className="text-foreground text-sm font-mono">cat /learning-resources/index.md</span>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-4">
                  {guides.map((guide, index) => (
                    <div key={index} className="bg-muted/50 border border-border hover:border-accent/50 transition-all duration-300 p-6 rounded-lg hover:shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-foreground font-bold text-lg mb-2">{guide.title}</h4>
                          <div className="flex items-center space-x-2 text-sm">
                            <span className={`px-3 py-1 font-bold rounded-full ${
                              guide.type === 'E-BOOK' ? 'bg-purple-500 text-white' :
                              guide.type === 'COURSE' ? 'bg-blue-500 text-white' :
                              guide.type === 'GUIDE' ? 'bg-orange-500 text-white' : 'bg-emerald-500 text-white'
                            }`}>
                              {guide.type}
                            </span>
                            <span className="bg-card border border-border text-accent px-3 py-1 font-semibold rounded-full">
                              {guide.category}
                            </span>
                          </div>
                        </div>
                        <div className="text-primary font-bold text-2xl">{guide.price}</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Download className="w-4 h-4" />
                          <span className="font-semibold">{guide.downloads}</span>
                        </div>
                        <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 text-sm font-bold transition-all duration-300 rounded-lg shadow-md hover:shadow-lg">
                          ACCESS NOW
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Tab */}
            {activeTab === 'metrics' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-6">
                  <span className="text-primary font-bold text-sm">$</span>
                  <span className="text-foreground text-sm font-mono">systemctl status jblinx-development</span>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {systemMetrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="bg-muted/50 border border-border p-6 text-center rounded-lg hover:shadow-lg transition-all duration-300">
                        <IconComponent className={`w-8 h-8 mx-auto mb-3 ${metric.color}`} />
                        <div className={`${metric.color} font-bold text-xl mb-1`}>{metric.value}</div>
                        <div className="text-muted-foreground text-xs font-medium">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Live Activity */}
                <div className="bg-muted/50 border border-border p-6 rounded-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <Activity className="w-5 h-5 text-accent" />
                    <span className="text-accent font-bold">LIVE ACTIVITY FEED</span>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-emerald-500 flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>[SUCCESS] Repository sync completed</div>
                    <div className="text-blue-500 flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>[INFO] New contributor joined: @dev_user_2847</div>
                    <div className="text-yellow-500 flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>[WARN] High memory usage detected</div>
                    <div className="text-emerald-500 flex items-center"><span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>[SUCCESS] Security scan passed</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 font-bold transition-all duration-300 space-x-2 shadow-lg hover:shadow-xl rounded-lg hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>ACCESS ALL REPOSITORIES</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
