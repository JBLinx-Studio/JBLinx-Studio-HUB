
import React from 'react';
import { Code, Terminal, Package, BookOpen, Download, Star, Github, Zap, Database, Globe } from 'lucide-react';

export const DeveloperCarouselContent = () => {
  const carouselPanels = [
    {
      id: 'development-tools',
      title: 'DEVELOPMENT TOOLS',
      icon: Terminal,
      color: 'text-green-400',
      tools: [
        { name: 'Code Generator Pro', rating: '4.9', downloads: '8.5k', price: '$49.99', tech: 'Node.js CLI', features: ['Template Engine', 'Custom Scaffolds', 'Git Integration'] },
        { name: 'API Documentation Builder', rating: '4.8', downloads: '6.2k', price: '$34.99', tech: 'TypeScript', features: ['Auto-generation', 'Interactive Docs', 'Export Formats'] },
        { name: 'Database Migration Tool', rating: '4.9', downloads: '7.1k', price: '$39.99', tech: 'Python', features: ['Multi-DB Support', 'Version Control', 'Rollback Safety'] }
      ]
    },
    {
      id: 'frameworks-kits',
      title: 'FRAMEWORK KITS',
      icon: Package,
      color: 'text-blue-400',
      tools: [
        { name: 'React Component Library', rating: '4.9', downloads: '12.3k', price: '$59.99', tech: 'React + TS', features: ['50+ Components', 'Storybook', 'Theme System'] },
        { name: 'Vue.js Starter Kit', rating: '4.8', downloads: '9.7k', price: '$44.99', tech: 'Vue 3 + Vite', features: ['Composition API', 'TypeScript', 'PWA Ready'] },
        { name: 'Angular Enterprise Kit', rating: '4.9', downloads: '8.1k', price: '$69.99', tech: 'Angular 17', features: ['Nx Workspace', 'Micro-frontends', 'Testing Suite'] }
      ]
    },
    {
      id: 'devops-automation',
      title: 'DEVOPS & AUTOMATION',
      icon: Zap,
      color: 'text-yellow-400',
      tools: [
        { name: 'CI/CD Pipeline Builder', rating: '4.9', downloads: '5.8k', price: '$79.99', tech: 'Docker + K8s', features: ['Pipeline Templates', 'Multi-cloud', 'Monitoring'] },
        { name: 'Infrastructure as Code', rating: '4.8', downloads: '4.6k', price: '$89.99', tech: 'Terraform', features: ['Cloud Templates', 'State Management', 'Cost Optimization'] },
        { name: 'Monitoring Stack Pro', rating: '4.9', downloads: '6.3k', price: '$99.99', tech: 'Prometheus', features: ['Custom Metrics', 'Alerting', 'Grafana Dashboards'] }
      ]
    },
    {
      id: 'learning-resources',
      title: 'LEARNING RESOURCES',
      icon: BookOpen,
      color: 'text-purple-400',
      tools: [
        { name: 'Full Stack Mastery Course', rating: '5.0', downloads: '15.2k', price: '$149.99', tech: '40+ Hours', features: ['Video Tutorials', 'Code Exercises', 'Certificate'] },
        { name: 'System Design Interview Guide', rating: '4.9', downloads: '11.8k', price: '$79.99', tech: '300+ Pages', features: ['Case Studies', 'Mock Interviews', 'Cheat Sheets'] },
        { name: 'DevOps Certification Path', rating: '4.8', downloads: '9.4k', price: '$199.99', tech: '60+ Hours', features: ['Hands-on Labs', 'Practice Exams', 'Career Support'] }
      ]
    }
  ];

  return (
    <>
      {carouselPanels.map((panel) => {
        const IconComponent = panel.icon;
        return (
          <div key={panel.id} className="w-full bg-slate-800/95 border border-slate-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <IconComponent className={`w-5 h-5 ${panel.color}`} />
              <span className={`${panel.color} font-black text-lg font-mono`}>{panel.title}</span>
            </div>
            
            <div className="space-y-4">
              {panel.tools.map((tool, index) => (
                <div key={index} className="bg-slate-900/80 border border-slate-600 hover:border-green-400/50 transition-all duration-300 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-white font-black text-base font-mono mb-1">{tool.name}</h4>
                      <div className="text-green-400 text-sm font-bold mb-2">{tool.tech}</div>
                      <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{tool.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{tool.downloads}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-green-400 font-black text-lg">{tool.price}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {tool.features.map((feature, fIndex) => (
                      <span key={fIndex} className="bg-slate-700 text-green-400 px-2 py-1 text-xs font-bold border border-green-400/30">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-black px-4 py-2 font-black text-sm transition-colors">
                      GET TOOL
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 font-black text-sm transition-colors flex items-center space-x-1">
                      <Github className="w-3 h-3" />
                      <span>VIEW</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
