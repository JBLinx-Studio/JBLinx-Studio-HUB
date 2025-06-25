
import React from 'react';
import { ArrowRight, Code, Github, BookOpen, Users, Download, Star, Terminal } from 'lucide-react';

const DeveloperHub = () => {
  const resources = [
    {
      icon: BookOpen,
      title: 'API Documentation',
      description: 'Complete guides and references for integrating with our web applications.',
      link: '/docs',
      color: 'from-blue-500 to-cyan-500',
      stats: '50+ endpoints'
    },
    {
      icon: Github,
      title: 'Open Source',
      description: 'Explore our GitHub repositories and contribute to our growing ecosystem.',
      link: 'https://github.com/orgs/JBLinx-Studio/repositories',
      color: 'from-purple-500 to-pink-500',
      stats: '15+ repositories'
    },
    {
      icon: Terminal,
      title: 'Developer Tools',
      description: 'SDKs, CLI tools, and utilities to enhance your development workflow.',
      link: '/tools',
      color: 'from-green-500 to-emerald-500',
      stats: '8+ tools'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join our Discord community for discussions, support, and collaboration.',
      link: '/discord',
      color: 'from-orange-500 to-red-500',
      stats: '500+ members'
    }
  ];

  const repositories = [
    {
      name: 'analytics-dashboard',
      description: 'Open-source analytics dashboard with real-time data visualization',
      language: 'TypeScript',
      stars: 234,
      forks: 45,
      updated: '2 days ago'
    },
    {
      name: 'game-engine-utils',
      description: 'Utility library for Unity game development with common tools',
      language: 'C#',
      stars: 189,
      forks: 32,
      updated: '1 week ago'
    },
    {
      name: 'api-toolkit',
      description: 'FastAPI utilities and common patterns for web development',
      language: 'Python',
      stars: 156,
      forks: 28,
      updated: '3 days ago'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-slate-900 to-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-8 py-4 rounded-2xl mb-8">
            <Code className="w-6 h-6 text-green-400 mr-3" />
            <span className="text-white font-bold text-lg tracking-wide">DEVELOPER RESOURCES</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            FOR <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">DEVELOPERS</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Access our APIs, contribute to open source projects, and join our developer community.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 hover:border-green-400/50 transition-all duration-300 group cursor-pointer">
                <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-bold text-sm">{resource.stats}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Repositories */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">Featured Repositories</h3>
            <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
              <Github className="w-5 h-5" />
              <span>View All on GitHub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {repositories.map((repo, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Github className="w-5 h-5 text-slate-400" />
                    <h4 className="font-bold text-white group-hover:text-green-400 transition-colors">{repo.name}</h4>
                  </div>
                  <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-lg">{repo.language}</span>
                </div>
                
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{repo.description}</p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-slate-300">{repo.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-300">{repo.forks}</span>
                    </div>
                  </div>
                  <span className="text-slate-500">{repo.updated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { label: 'API Endpoints', value: '50+', icon: Terminal, color: 'text-blue-400' },
            { label: 'GitHub Stars', value: '580+', icon: Star, color: 'text-yellow-400' },
            { label: 'Contributors', value: '25+', icon: Users, color: 'text-green-400' },
            { label: 'Downloads', value: '15k+', icon: Download, color: 'text-purple-400' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all">
                  <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-12 max-w-4xl mx-auto">
            <Code className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-4xl font-black text-white mb-4">
              START BUILDING
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get access to our APIs, download our SDKs, and join thousands of developers building amazing applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all flex items-center justify-center space-x-2">
                <Code className="w-5 h-5" />
                <span>Get API Access</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center space-x-2">
                <Github className="w-5 h-5" />
                <span>Browse GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperHub;
