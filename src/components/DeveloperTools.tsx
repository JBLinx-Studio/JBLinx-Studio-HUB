
import React, { useState } from 'react';
import { Code, Terminal, Database, Cloud, Cpu, Zap, Github, Download, Star, Users, Activity, Rocket, Settings, Lock, Shield, Globe, Monitor, Server, FileCode, GitBranch, Package, Play, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const DeveloperTools = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'ALL TOOLS', icon: Code, count: 12 },
    { id: 'ide', name: 'IDE & EDITORS', icon: Terminal, count: 4 },
    { id: 'backend', name: 'BACKEND', icon: Server, count: 3 },
    { id: 'database', name: 'DATABASE', icon: Database, count: 2 },
    { id: 'cloud', name: 'CLOUD', icon: Cloud, count: 3 }
  ];

  const tools = [
    {
      id: 1,
      name: 'CodeFusion Studio',
      category: 'ide',
      description: 'Next-generation IDE with AI-powered coding assistance',
      version: 'v3.2.1',
      status: 'stable',
      downloads: '2.8M+',
      rating: 4.9,
      tags: ['TypeScript', 'React', 'Node.js', 'AI'],
      features: ['IntelliSense', 'Git Integration', 'Live Preview', 'AI Assistant'],
      icon: Code,
      color: 'emerald'
    },
    {
      id: 2,
      name: 'Terminal Pro',
      category: 'ide',
      description: 'Advanced terminal emulator with modern features',
      version: 'v2.4.0',
      status: 'stable',
      downloads: '1.9M+',
      rating: 4.8,
      tags: ['Shell', 'SSH', 'Scripting'],
      features: ['Split Panes', 'Themes', 'SSH Manager', 'Scripting'],
      icon: Terminal,
      color: 'blue'
    },
    {
      id: 3,
      name: 'DataVault Engine',
      category: 'database',
      description: 'High-performance database management system',
      version: 'v1.8.3',
      status: 'stable',
      downloads: '945K+',
      rating: 4.7,
      tags: ['SQL', 'NoSQL', 'Analytics'],
      features: ['Multi-DB', 'Replication', 'Analytics', 'Backup'],
      icon: Database,
      color: 'purple'
    },
    {
      id: 4,
      name: 'CloudSync Platform',
      category: 'cloud',
      description: 'Enterprise cloud deployment and management',
      version: 'v2.1.0',
      status: 'beta',
      downloads: '1.2M+',
      rating: 4.6,
      tags: ['Docker', 'Kubernetes', 'AWS'],
      features: ['Auto-Scale', 'Monitoring', 'CI/CD', 'Security'],
      icon: Cloud,
      color: 'cyan'
    },
    {
      id: 5,
      name: 'API Gateway Pro',
      category: 'backend',
      description: 'Advanced API management and gateway solution',
      version: 'v1.5.2',
      status: 'stable',
      downloads: '756K+',
      rating: 4.8,
      tags: ['REST', 'GraphQL', 'Microservices'],
      features: ['Rate Limiting', 'Auth', 'Analytics', 'Caching'],
      icon: Server,
      color: 'orange'
    },
    {
      id: 6,
      name: 'DevMetrics Dashboard',
      category: 'all',
      description: 'Real-time development analytics and insights',
      version: 'v1.3.1',
      status: 'stable',
      downloads: '432K+',
      rating: 4.5,
      tags: ['Analytics', 'Metrics', 'Reports'],
      features: ['Real-time', 'Custom Dashboards', 'Alerts', 'Export'],
      icon: Activity,
      color: 'pink'
    }
  ];

  const filteredTools = activeTab === 'all' ? tools : tools.filter(tool => tool.category === activeTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'stable': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30';
      case 'beta': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'alpha': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/30';
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'text-emerald-400 border-emerald-400/40 bg-emerald-400/10',
      blue: 'text-blue-400 border-blue-400/40 bg-blue-400/10',
      purple: 'text-purple-400 border-purple-400/40 bg-purple-400/10',
      cyan: 'text-cyan-400 border-cyan-400/40 bg-cyan-400/10',
      orange: 'text-orange-400 border-orange-400/40 bg-orange-400/10',
      pink: 'text-pink-400 border-pink-400/40 bg-pink-400/10'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section className="py-20 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-zinc-800/50 border border-orange-500/30 px-6 py-3 mb-8 backdrop-blur-sm">
            <Terminal className="w-4 h-4 mr-2 text-orange-400" />
            <span className="text-orange-400 font-bold text-sm font-mono tracking-widest">DEVELOPER ARSENAL</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-cream leading-tight font-mono mb-4">
            PROFESSIONAL <span className="text-orange-400">DEVELOPMENT</span> TOOLS
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-emerald-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-cream-dark max-w-2xl mx-auto mb-8 leading-relaxed">
            Enterprise-grade development tools and platforms designed for professional software engineers
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {[
              { icon: Download, value: '8.2M+', label: 'Downloads', color: 'text-emerald-400' },
              { icon: Star, value: '4.8/5', label: 'Avg Rating', color: 'text-yellow-400' },
              { icon: Users, value: '15K+', label: 'Active Devs', color: 'text-blue-400' },
              { icon: Rocket, value: '12', label: 'Tools', color: 'text-purple-400' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/40 border border-zinc-700/50 p-4 text-center backdrop-blur-sm">
                  <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-lg font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-cream-dark text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 border font-mono text-sm font-bold transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-orange-400/20 border-orange-400/60 text-orange-300'
                      : 'bg-zinc-800/40 border-zinc-700/50 text-zinc-400 hover:border-orange-400/30 hover:text-orange-400'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-60">({category.count})</span>
                </button>
              );
            })}
          </div>

          {/* View Toggle */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 border ${viewMode === 'grid' ? 'bg-orange-400/20 border-orange-400/60 text-orange-300' : 'bg-zinc-800/40 border-zinc-700/50 text-zinc-400'}`}
            >
              <Package className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 border ${viewMode === 'list' ? 'bg-orange-400/20 border-orange-400/60 text-orange-300' : 'bg-zinc-800/40 border-zinc-700/50 text-zinc-400'}`}
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredTools.map(tool => {
            const IconComponent = tool.icon;
            const colorClasses = getColorClasses(tool.color);
            
            return (
              <div key={tool.id} className="bg-zinc-800/50 border border-zinc-700/50 p-6 hover:border-orange-400/30 transition-all duration-300 group backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${colorClasses} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className={`px-3 py-1 border text-xs font-bold font-mono ${getStatusColor(tool.status)}`}>
                    {tool.status.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-cream mb-2 font-mono group-hover:text-orange-300 transition-colors">
                  {tool.name}
                </h3>
                
                <p className="text-cream-dark text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-zinc-700/50 border border-zinc-600/50 text-xs text-cream-dark font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-1 mb-4">
                  {tool.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      <span className="text-cream-dark">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3 text-emerald-400" />
                      <span className="text-cream-dark font-mono">{tool.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-cream-dark font-mono">{tool.rating}</span>
                    </div>
                  </div>
                  <span className="text-zinc-500 font-mono text-xs">{tool.version}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 py-2 px-4 font-black text-sm hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>DOWNLOAD</span>
                  </button>
                  <button className="px-4 py-2 border border-zinc-600/50 text-zinc-400 hover:border-orange-400/50 hover:text-orange-400 transition-all duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-zinc-800/50 border border-zinc-700/50 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-black text-cream mb-4 font-mono">
              JOIN THE <span className="text-orange-400">DEVELOPER</span> COMMUNITY
            </h3>
            <p className="text-cream-dark mb-6 max-w-2xl mx-auto">
              Get early access to new tools, contribute to open source projects, and connect with fellow developers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 px-6 py-3 font-black hover:from-orange-600 hover:to-amber-600 transition-all duration-300 flex items-center space-x-2">
                <Github className="w-4 h-4" />
                <span>VIEW ON GITHUB</span>
              </button>
              <button className="border border-orange-400/60 text-orange-400 px-6 py-3 font-black hover:bg-orange-400/10 transition-all duration-300">
                JOIN COMMUNITY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
