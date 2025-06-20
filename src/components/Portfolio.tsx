
import React, { useState } from 'react';
import { Github, ExternalLink, Star, Gamepad2, Code, Database, Smartphone, Monitor } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Survival Game",
      category: "Game Development",
      type: "Unity Game",
      description: "Open-world survival experience with crafting, building, and dynamic weather systems.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      tech: ["Unity", "C#", "Multiplayer"],
      github: "https://github.com/JBLinx-Studio",
      demo: "#",
      status: "In Development",
      icon: Gamepad2,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Horror Game",
      category: "Game Development", 
      type: "Unity Game",
      description: "Psychological horror experience with advanced AI and atmospheric storytelling.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      tech: ["Unity", "C#", "AI"],
      github: "https://github.com/JBLinx-Studio",
      demo: "#",
      status: "Beta",
      icon: Gamepad2,
      gradient: "from-red-500 to-purple-600"
    },
    {
      id: 3,
      title: "FastAPI MySQL Template",
      category: "Backend",
      type: "API Template",
      description: "Production-ready FastAPI template with MySQL integration and comprehensive documentation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tech: ["FastAPI", "MySQL", "Python"],
      github: "https://github.com/JBLinx-Studio/FastAPI-MySQL-Template",
      demo: "#",
      status: "Live",
      icon: Database,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      id: 4,
      title: "RTS Game",
      category: "Game Development",
      type: "Unity Game", 
      description: "Real-time strategy game with advanced multiplayer networking and competitive gameplay.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      tech: ["Unity", "Networking", "C#"],
      github: "https://github.com/JBLinx-Studio",
      demo: "#",
      status: "In Development",
      icon: Gamepad2,
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "MPFPS Game",
      category: "Game Development",
      type: "Unity Game",
      description: "Multiplayer first-person shooter with advanced anti-cheat and ranking systems.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
      tech: ["Unity", "Multiplayer", "C#"],
      github: "https://github.com/JBLinx-Studio", 
      demo: "#",
      status: "Alpha",
      icon: Gamepad2,
      gradient: "from-gray-500 to-gray-700"
    },
    {
      id: 6,
      title: "Space Open World Game",
      category: "Game Development",
      type: "Unity Game",
      description: "Infinite space exploration with procedural galaxy generation and trading systems.",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
      tech: ["Unity", "Procedural", "C#"],
      github: "https://github.com/JBLinx-Studio",
      demo: "#", 
      status: "Concept",
      icon: Gamepad2,
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 7,
      title: "Flutter Firebase Template",
      category: "Mobile",
      type: "Mobile Template",
      description: "Complete Flutter template with Firebase integration and modern UI components.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tech: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/JBLinx-Studio/Flutter-Firebase-Template",
      demo: "#",
      status: "Live",
      icon: Smartphone,
      gradient: "from-teal-500 to-blue-600"
    },
    {
      id: 8,
      title: "NextJS Ecommerce",
      category: "Web Development",
      type: "Web Template", 
      description: "Full-featured e-commerce platform with payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["Next.js", "Stripe", "React"],
      github: "https://github.com/JBLinx-Studio/NextJS-Ecommerce",
      demo: "#",
      status: "Live",
      icon: Monitor,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const filters = ['All', 'Game Development', 'Web Development', 'Mobile', 'Backend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Beta': return 'bg-blue-500';
      case 'Alpha': return 'bg-yellow-500';
      case 'In Development': return 'bg-orange-500';
      case 'Concept': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-sm font-semibold text-blue-600">Our Latest Work</span>
          </div>
          
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Featured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of games, web applications, and open-source templates.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.demo}
                      className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{project.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-16">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 space-x-3"
          >
            <Github className="w-6 h-6" />
            <span>View All Repositories</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
