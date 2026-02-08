import React, { useState } from 'react';
import { ArrowRight, Download, Star, Code, Terminal, Github, Database, Activity, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './ui/AnimatedSection';

const DeveloperTools = () => {
  const [activeTab, setActiveTab] = useState('tools');

  const tools = [
    { title: "FastAPI MySQL Kit", category: "Backend Framework", downloads: "12.0k", rating: "5.0", description: "Production-ready FastAPI with MySQL, JWT auth, Docker deployment", repo: "fastapi-mysql-template", highlights: ["JWT Auth", "ORM Integration", "Docker Ready", "API Docs"], tech: "Python", status: "STABLE" },
    { title: "React Component Library", category: "Frontend Components", downloads: "9.3k", rating: "4.8", description: "Reusable TypeScript components with Storybook documentation", repo: "react-ui-components", highlights: ["TypeScript", "Storybook", "Unit Tests", "Tree Shakable"], tech: "React", status: "ACTIVE" },
    { title: "Database Migration CLI", category: "DevOps Utilities", downloads: "5.1k", rating: "4.9", description: "Multi-database migration tool with rollback safety mechanisms", repo: "db-migration-cli", highlights: ["Multi-DB Support", "Version Control", "Safe Rollback", "CLI Interface"], tech: "Node.js", status: "MAINTAINED" }
  ];

  const guides = [
    { title: "Unity Game Development Bible", downloads: "7.8k", type: "E-BOOK", price: "$29", category: "Game Dev" },
    { title: "Modern Web Development Course", downloads: "11.2k", type: "COURSE", price: "$49", category: "Web Dev" },
    { title: "API Design Patterns Guide", downloads: "8.9k", type: "GUIDE", price: "$19", category: "Backend" },
    { title: "Database Optimization Mastery", downloads: "6.4k", type: "TUTORIAL", price: "$24", category: "Database" }
  ];

  const systemMetrics = [
    { label: "BUILD STATUS", value: "PASSING", color: "text-green-400", icon: Terminal },
    { label: "TEST COVERAGE", value: "98.5%", color: "text-green-400", icon: Code },
    { label: "CODE QUALITY", value: "A+", color: "text-cyan-400", icon: Database },
    { label: "SECURITY SCAN", value: "CLEAN", color: "text-green-400", icon: Activity }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'STABLE': return 'bg-green-500 text-white';
      case 'ACTIVE': return 'bg-blue-500 text-white';
      case 'MAINTAINED': return 'bg-purple-500 text-white';
      default: return 'bg-secondary text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'E-BOOK': return 'bg-purple-500 text-white';
      case 'COURSE': return 'bg-blue-500 text-white';
      case 'GUIDE': return 'bg-orange-500 text-white';
      case 'TUTORIAL': return 'bg-green-500 text-white';
      default: return 'bg-secondary text-muted-foreground';
    }
  };

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="section-divider-line" />
      <div className="ambient-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="section-header">
            <div className="badge-green">
              <Terminal className="w-4 h-4" />
              <span>DEVELOPER TOOLS</span>
            </div>
            
            <h2 className="text-section-title text-foreground mb-3">
              PREMIUM DEV TOOLS <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">& LEARNING</span>
            </h2>
            
            <div className="section-divider bg-green-400" />
            
            <p className="section-subtitle">
              Open-source tools, templates, and educational content for developers
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="panel-elevated mb-12 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-card border-b border-border px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 bg-red-500 rounded-full" />
                  <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full" />
                  <div className="w-3.5 h-3.5 bg-green-500 rounded-full" />
                </div>
                <span className="text-panel-title text-green-400">JBLINX-STUDIO/DEV-RESOURCES</span>
              </div>
              
              <div className="flex gap-2">
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
                      className={`flex items-center gap-2 px-4 py-1.5 text-label rounded-md transition-all ${
                        activeTab === tab.id
                          ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                          : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                      }`}
                    >
                      <IconComponent className="w-3 h-3" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="card-padding">
              {activeTab === 'tools' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-green-400 font-bold text-mono">$</span>
                    <span className="text-foreground text-mono text-sm">ls -la /development-tools</span>
                  </div>
                  
                  {tools.map((tool, index) => (
                    <motion.div 
                      key={index} 
                      className="panel card-padding hover:border-green-500/30 transition-all"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h4 className="text-card-title text-foreground">{tool.title}</h4>
                            <span className={`px-2 py-0.5 text-xs font-bold rounded-sm ${getStatusColor(tool.status)}`}>
                              {tool.status}
                            </span>
                            <span className="tag tag-default text-xs">{tool.tech}</span>
                          </div>
                          <div className="text-label text-green-400 mb-2">{tool.category}</div>
                          <p className="text-body mb-3">{tool.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tool.highlights.map((highlight, hIndex) => (
                          <span key={hIndex} className="tag bg-green-500/15 border-green-500/40 text-green-400">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center gap-4 text-small">
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            <span className="font-bold">{tool.downloads}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400" />
                            <span className="font-bold">{tool.rating}</span>
                          </div>
                        </div>
                        
                        <a 
                          href={`https://github.com/JBLinx-Studio/${tool.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary bg-green-500 hover:bg-green-600 shadow-green-500/30 text-sm px-3 py-1.5"
                        >
                          <Github className="w-3 h-3" />
                          <span>CLONE</span>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'guides' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-green-400 font-bold text-mono">$</span>
                    <span className="text-foreground text-mono text-sm">cat /learning-resources/index.md</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {guides.map((guide, index) => (
                      <motion.div 
                        key={index} 
                        className="panel card-padding hover:border-green-500/30 transition-all"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.15 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="text-card-title text-foreground mb-2">{guide.title}</h4>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-0.5 text-xs font-bold rounded-sm ${getTypeColor(guide.type)}`}>
                                {guide.type}
                              </span>
                              <span className="tag tag-default text-xs">{guide.category}</span>
                            </div>
                          </div>
                          <div className="text-card-title text-green-400">{guide.price}</div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-border">
                          <div className="flex items-center gap-1 text-small">
                            <Download className="w-3 h-3" />
                            <span className="font-bold">{guide.downloads}</span>
                          </div>
                          <button className="btn-primary bg-blue-500 hover:bg-blue-600 shadow-blue-500/30 text-sm px-3 py-1.5">
                            ACCESS
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-green-400 font-bold text-mono">$</span>
                    <span className="text-foreground text-mono text-sm">systemctl status jblinx-development</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {systemMetrics.map((metric, index) => {
                      const IconComponent = metric.icon;
                      return (
                        <div key={index} className="stat-card">
                          <IconComponent className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
                          <div className={`stat-value ${metric.color}`}>{metric.value}</div>
                          <div className="stat-label">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="panel card-padding">
                    <div className="flex items-center gap-2 mb-4">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      <span className="text-panel-title text-cyan-400">LIVE ACTIVITY</span>
                    </div>
                    <div className="space-y-2 text-mono text-sm">
                      <div className="text-green-400">[SUCCESS] Repository sync completed</div>
                      <div className="text-blue-400">[INFO] New contributor joined: @dev_user_2847</div>
                      <div className="text-yellow-400">[WARN] High memory usage detected</div>
                      <div className="text-green-400">[SUCCESS] Security scan passed</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center" delay={0.3}>
          <p className="text-body text-base max-w-xl mx-auto mb-5">
            Explore our complete collection of open-source tools and templates on GitHub.
          </p>
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-green-500 hover:bg-green-600 shadow-green-500/30"
          >
            <Github className="w-4 h-4" />
            <span>VIEW GITHUB</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DeveloperTools;
