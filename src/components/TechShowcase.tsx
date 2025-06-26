
import React, { useState } from 'react';
import { Code, Database, Smartphone, Globe, Zap, Cpu, Shield, Rocket } from 'lucide-react';

const TechShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const techStacks = [
    {
      category: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', level: 95, projects: 25 },
        { name: 'TypeScript', level: 90, projects: 20 },
        { name: 'Next.js', level: 85, projects: 15 },
        { name: 'Tailwind CSS', level: 92, projects: 30 }
      ]
    },
    {
      category: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'FastAPI', level: 95, projects: 18 },
        { name: 'Node.js', level: 88, projects: 22 },
        { name: 'PostgreSQL', level: 85, projects: 16 },
        { name: 'Redis', level: 80, projects: 12 }
      ]
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'Flutter', level: 90, projects: 8 },
        { name: 'Dart', level: 88, projects: 8 },
        { name: 'Firebase', level: 85, projects: 10 },
        { name: 'React Native', level: 75, projects: 5 }
      ]
    },
    {
      category: 'Game Dev',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      technologies: [
        { name: 'Unity', level: 92, projects: 15 },
        { name: 'C#', level: 90, projects: 18 },
        { name: 'Blender', level: 78, projects: 12 },
        { name: 'Unreal Engine', level: 70, projects: 6 }
      ]
    }
  ];

  const currentStack = techStacks[activeTab];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-gradient-to-r from-green-500/5 to-cyan-500/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/50 border border-slate-700 px-6 py-3 mb-6 backdrop-blur-sm" style={{ borderRadius: '8px' }}>
            <Cpu className="w-5 h-5 text-cyan-400 mr-3" />
            <span className="text-white font-bold font-mono">TECHNOLOGY STACK</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight font-mono mb-6">
            TECH <span className="text-cyan-400">MASTERY</span>
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-800/30 border border-slate-700 p-4 backdrop-blur-sm" style={{ borderRadius: '12px' }}>
            {techStacks.map((stack, index) => {
              const IconComponent = stack.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex flex-col items-center space-y-2 px-6 py-4 font-bold transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${stack.color} text-white shadow-lg`
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                  style={{ borderRadius: '8px' }}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="text-sm">{stack.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Details */}
        <div className={`bg-gradient-to-br ${currentStack.color} p-1 max-w-4xl mx-auto`} style={{ borderRadius: '16px' }}>
          <div className="bg-slate-900/95 backdrop-blur-sm p-8" style={{ borderRadius: '16px' }}>
            <div className="grid md:grid-cols-2 gap-8">
              {currentStack.technologies.map((tech, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 bg-gradient-to-r ${currentStack.color}`} style={{ borderRadius: '50%' }}></div>
                      <span className="text-white font-bold text-lg">{tech.name}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-slate-400">{tech.projects} projects</span>
                      <span className="text-cyan-400 font-bold">{tech.level}%</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-slate-700 h-2" style={{ borderRadius: '6px' }}></div>
                    <div 
                      className={`h-2 bg-gradient-to-r ${currentStack.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        borderRadius: '6px',
                        width: `${tech.level}%`,
                        transition: 'width 1s ease-out'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Category Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 text-center">
              <div className="bg-slate-800/50 border border-slate-700 p-4" style={{ borderRadius: '8px' }}>
                <div className="text-2xl font-black text-white font-mono mb-2">
                  {currentStack.technologies.reduce((acc, tech) => acc + tech.projects, 0)}
                </div>
                <div className="text-slate-400 text-sm">Total Projects</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 p-4" style={{ borderRadius: '8px' }}>
                <div className="text-2xl font-black text-cyan-400 font-mono mb-2">
                  {Math.round(currentStack.technologies.reduce((acc, tech) => acc + tech.level, 0) / currentStack.technologies.length)}%
                </div>
                <div className="text-slate-400 text-sm">Avg Expertise</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 p-4" style={{ borderRadius: '8px' }}>
                <div className="text-2xl font-black text-green-400 font-mono mb-2">
                  {currentStack.technologies.length}
                </div>
                <div className="text-slate-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
