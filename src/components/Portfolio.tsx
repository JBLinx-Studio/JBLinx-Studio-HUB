
import React, { useState } from 'react';
import { Github, ExternalLink, Gamepad2, Code, Database, Smartphone, Monitor } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    // Games
    {
      id: 1,
      title: "Survival Game",
      category: "Games",
      description: "Open-world survival with crafting and multiplayer systems.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      tech: ["Unity", "C#", "Multiplayer"],
      github: "https://github.com/JBLinx-Studio",
      status: "In Development",
      icon: Gamepad2
    },
    {
      id: 2,
      title: "Horror Game",
      category: "Games", 
      description: "Psychological horror with advanced AI systems.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      tech: ["Unity", "C#", "AI"],
      github: "https://github.com/JBLinx-Studio",
      status: "Beta",
      icon: Gamepad2
    },
    {
      id: 3,
      title: "RTS Game",
      category: "Games",
      description: "Real-time strategy with multiplayer networking.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      tech: ["Unity", "Networking", "C#"],
      github: "https://github.com/JBLinx-Studio",
      status: "Alpha",
      icon: Gamepad2
    },
    // Templates & Apps
    {
      id: 4,
      title: "FastAPI MySQL Template",
      category: "Backend",
      description: "Production-ready API template with authentication.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      tech: ["FastAPI", "MySQL", "Python"],
      github: "https://github.com/JBLinx-Studio/FastAPI-MySQL-Template",
      status: "Live",
      icon: Database
    },
    {
      id: 5,
      title: "Flutter Firebase Template",
      category: "Mobile",
      description: "Complete mobile template with Firebase integration.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      tech: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/JBLinx-Studio/Flutter-Firebase-Template",
      status: "Live",
      icon: Smartphone
    },
    {
      id: 6,
      title: "NextJS Ecommerce",
      category: "Web",
      description: "Full-featured e-commerce with payment integration.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tech: ["Next.js", "Stripe", "React"],
      github: "https://github.com/JBLinx-Studio/NextJS-Ecommerce",
      status: "Live",
      icon: Monitor
    }
  ];

  const filters = ['All', 'Games', 'Backend', 'Mobile', 'Web'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Beta': return 'bg-blue-500'; 
      case 'Alpha': return 'bg-yellow-500';
      case 'In Development': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600">Games, templates, and applications we've built.</p>
        </div>

        {/* Compact Filters */}
        <div className="flex justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Compact Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className={`${getStatusColor(project.status)} text-white px-2 py-1 rounded text-xs font-medium`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-2 right-2 flex space-x-1">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black/90"
                    >
                      <Github className="w-3 h-3" />
                    </a>
                    <a 
                      href={project.github}
                      className="w-7 h-7 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black/90"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <IconComponent className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-gray-600">{project.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact GitHub CTA */}
        <div className="text-center mt-10">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <Github className="w-4 h-4 mr-2" />
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
