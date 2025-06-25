
import React, { useState } from 'react';
import { ArrowRight, Star, Play, Code, BarChart3, Settings, Database, Zap, Crown } from 'lucide-react';

const WebAppsShowcase = () => {
  const [activeApp, setActiveApp] = useState(0);

  const webApps = [
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard Pro',
      description: 'Real-time data visualization and business intelligence platform with advanced reporting capabilities.',
      features: ['Real-time Analytics', 'Custom Reports', 'Data Export', 'Team Collaboration'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tech: ['React', 'D3.js', 'FastAPI', 'PostgreSQL'],
      status: 'live',
      users: '2.5k+',
      rating: 4.9,
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'project-manager',
      name: 'Project Manager Pro',
      description: 'Advanced project management suite with task automation, team coordination, and progress tracking.',
      features: ['Task Automation', 'Team Chat', 'Timeline View', 'Resource Planning'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      status: 'live',
      users: '1.8k+',
      rating: 4.8,
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'developer-tools',
      name: 'Developer Tools Suite',
      description: 'Complete development environment with code analysis, debugging tools, and performance monitoring.',
      features: ['Code Analysis', 'Debug Tools', 'Performance Monitor', 'API Testing'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
      tech: ['TypeScript', 'Electron', 'Python', 'Redis'],
      status: 'beta',
      users: '950+',
      rating: 4.7,
      icon: Code,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'data-visualizer',
      name: 'Data Visualizer',
      description: 'Interactive data visualization platform for creating stunning charts, graphs, and dashboards.',
      features: ['Interactive Charts', 'Custom Themes', 'Data Import', 'Export Options'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tech: ['React', 'Chart.js', 'FastAPI', 'MySQL'],
      status: 'live',
      users: '1.2k+',
      rating: 4.6,
      icon: Database,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-slate-900 to-black relative">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-8 py-4 rounded-2xl mb-8">
            <Zap className="w-6 h-6 text-cyan-400 mr-3" />
            <span className="text-white font-bold text-lg tracking-wide">OUR WEB APPLICATIONS</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            PREMIUM <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">WEB APPS</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Professional web applications built by JBLinx Studio. Access powerful tools through our subscription plans.
          </p>
        </div>

        {/* App Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* App Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={webApps[activeApp].image} 
                  alt={webApps[activeApp].name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    webApps[activeApp].status === 'live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                  }`}>
                    {webApps[activeApp].status.toUpperCase()}
                  </span>
                </div>

                {/* Premium badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Crown className="w-4 h-4 mr-2" />
                    PREMIUM
                  </div>
                </div>

                {/* Play button */}
                <div className="absolute bottom-4 right-4">
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </button>
                </div>
              </div>

              {/* App info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-white font-bold">{webApps[activeApp].rating}</span>
                    <span className="text-slate-400">({webApps[activeApp].users} users)</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    {webApps[activeApp].tech.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white">{webApps[activeApp].name}</h3>
                <p className="text-slate-300 leading-relaxed">{webApps[activeApp].description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {webApps[activeApp].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2">
                  <span>Access App</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* App List */}
          <div className="space-y-4">
            {webApps.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <div
                  key={app.id}
                  onClick={() => setActiveApp(index)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    activeApp === index
                      ? 'bg-gradient-to-r from-slate-800 to-slate-700 border-cyan-400 shadow-lg shadow-cyan-400/25'
                      : 'bg-slate-800/50 border-slate-700 hover:border-slate-600 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${app.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-1">{app.name}</h4>
                      <p className="text-slate-400 text-sm">{app.description.substring(0, 80)}...</p>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-bold text-sm">{app.rating}</span>
                      </div>
                      <span className="text-slate-400 text-xs">{app.users}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-12 max-w-4xl mx-auto">
            <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-4xl font-black text-white mb-4">
              GET PREMIUM ACCESS
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Subscribe to access all our premium web applications with advanced features, priority support, and regular updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2">
                <Crown className="w-5 h-5" />
                <span>View Pricing Plans</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebAppsShowcase;
