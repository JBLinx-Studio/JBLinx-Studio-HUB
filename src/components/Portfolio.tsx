
import React from 'react';
import { ExternalLink, Github, Star, Calendar, Code, Users, Gamepad2, Monitor, Smartphone, Book } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "FastAPI-MySQL-Template",
      category: "Backend Development",
      description: "A robust FastAPI template with MySQL integration, featuring authentication, CRUD operations, and comprehensive API documentation for rapid backend development.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["FastAPI", "MySQL", "Python", "REST API", "Authentication"],
      github: "https://github.com/JBLinx-Studio/FastAPI-MySQL-Template",
      demo: "#",
      stars: 15,
      language: "Python",
      updated: "2024",
      featured: true
    },
    {
      title: "AI Tic-Tac-Toe",
      category: "Game Development",
      description: "An intelligent Tic-Tac-Toe game with AI opponent using minimax algorithm and modern web technologies. Perfect example of game AI implementation.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      tags: ["JavaScript", "AI", "Game Logic", "Minimax", "Web"],
      github: "https://github.com/JBLinx-Studio/AI-Tic-Tac-Toe",
      demo: "#",
      stars: 8,
      language: "JavaScript",
      updated: "2024"
    },
    {
      title: "UnitySDK-Template",
      category: "Unity Development",
      description: "A comprehensive Unity SDK template providing essential tools and frameworks for rapid game development. Includes modular systems and best practices.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["Unity", "C#", "SDK", "Game Development", "Modular"],
      github: "https://github.com/JBLinx-Studio/UnitySDK-Template",
      demo: "#",
      stars: 22,
      language: "C#",
      updated: "2024",
      bestseller: true
    },
    {
      title: "React-Tailwind-Template",
      category: "Web Development",
      description: "Modern React application template with Tailwind CSS, TypeScript, and best practices for scalable web applications. Production-ready setup.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind", "TypeScript", "Vite", "Modern"],
      github: "https://github.com/JBLinx-Studio/React-Tailwind-Template",
      demo: "#",
      stars: 31,
      language: "TypeScript",
      updated: "2024"
    },
    {
      title: "Flutter-Firebase-Template",
      category: "Mobile Development",
      description: "Complete Flutter template with Firebase integration for authentication, database, and cloud functions. Cross-platform mobile development made easy.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["Flutter", "Firebase", "Dart", "Mobile", "Cross-platform"],
      github: "https://github.com/JBLinx-Studio/Flutter-Firebase-Template",
      demo: "#",
      stars: 18,
      language: "Dart",
      updated: "2024"
    },
    {
      title: "Next.js-E-commerce",
      category: "E-commerce",
      description: "Full-featured e-commerce platform built with Next.js, featuring payment integration, admin dashboard, and modern design patterns.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Next.js", "Stripe", "MongoDB", "Commerce", "Admin"],
      github: "https://github.com/JBLinx-Studio/NextJS-Ecommerce",
      demo: "#",
      stars: 42,
      language: "TypeScript",
      updated: "2024",
      featured: true
    }
  ];

  const gameDevLogs = [
    {
      title: "Survival Game",
      status: "In Development",
      progress: 65,
      description: "Open-world survival experience with crafting, building, and dynamic weather systems.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      features: ["Crafting System", "Base Building", "Weather Dynamics", "Multiplayer"],
      lastUpdate: "Week 12"
    },
    {
      title: "Horror Game",
      status: "Alpha Testing",
      progress: 80,
      description: "Psychological horror game with immersive storytelling and atmospheric sound design.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      features: ["Atmospheric Audio", "Dynamic Lighting", "Story-driven", "VR Support"],
      lastUpdate: "Week 15"
    },
    {
      title: "RTS Game",
      status: "Pre-Production",
      progress: 25,
      description: "Real-time strategy game with complex unit management and tactical gameplay.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      features: ["Unit Management", "Resource System", "AI Opponents", "Campaign Mode"],
      lastUpdate: "Week 4"
    },
    {
      title: "MPFPS Game",
      status: "Concept",
      progress: 15,
      description: "Multiplayer first-person shooter with competitive gameplay and ranking systems.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      features: ["Multiplayer", "Ranking System", "Custom Maps", "Competitive"],
      lastUpdate: "Week 2"
    },
    {
      title: "Top-down Game",
      status: "Design Phase",
      progress: 35,
      description: "Top-down action RPG with character progression and procedural dungeons.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      features: ["Character Progression", "Procedural Dungeons", "Loot System", "Co-op"],
      lastUpdate: "Week 6"
    },
    {
      title: "Space Open-world Game",
      status: "Prototyping",
      progress: 45,
      description: "Vast space exploration game with trading, combat, and colony building.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      features: ["Space Exploration", "Trading System", "Colony Building", "Ship Customization"],
      lastUpdate: "Week 8"
    }
  ];

  const categories = ["All", "Web Development", "Game Development", "Mobile Development", "Backend Development", "Unity Development", "E-commerce"];
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [activeTab, setActiveTab] = React.useState("projects");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-float delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white shadow-lg rounded-full px-6 py-3 mb-8 border border-gray-100">
            <Code size={16} className="mr-3 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">Our Work Portfolio</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Featured Projects &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">Game Development</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects, innovative games in development, 
            and open-source contributions across various technologies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "projects"
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Open Source Projects
            </button>
            <button
              onClick={() => setActiveTab("games")}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "games"
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Game Dev Logs
            </button>
          </div>
        </div>

        {activeTab === "projects" && (
          <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Featured
                        </span>
                      )}
                      {project.bestseller && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl py-3 px-4 text-gray-800 hover:bg-white transition-all shadow-lg flex items-center justify-center font-semibold"
                        >
                          <Github size={18} className="mr-2" />
                          GitHub
                        </a>
                        <a
                          href={project.demo}
                          className="flex-1 bg-blue-600/90 backdrop-blur-sm rounded-xl py-3 px-4 text-white hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center font-semibold"
                        >
                          <ExternalLink size={18} className="mr-2" />
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Star size={14} className="mr-1 text-yellow-500" />
                        {project.stars}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                        {project.language}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {project.updated}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "games" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {gameDevLogs.map((game, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
              >
                {/* Game Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                      game.status === 'In Development' ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' :
                      game.status === 'Alpha Testing' ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' :
                      game.status === 'Pre-Production' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' :
                      'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                    }`}>
                      {game.status}
                    </span>
                  </div>

                  {/* Progress indicator */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white text-sm font-semibold mb-2">Progress: {game.progress}%</div>
                    <div className="w-full bg-black/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${game.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Game Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {game.title}
                    </h3>
                    <div className="text-sm text-gray-500">
                      {game.lastUpdate}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{game.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-semibold text-gray-700">Key Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {game.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dev log action */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                    View Dev Log
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Code className="text-white" size={36} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Open Source Projects</div>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Star className="text-white" size={36} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600 font-medium">GitHub Stars</div>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Gamepad2 className="text-white" size={36} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">6</div>
              <div className="text-gray-600 font-medium">Games in Development</div>
            </div>
            <div className="group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="text-white" size={36} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Community Contributors</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We're always open to exciting new projects and partnerships. Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors shadow-2xl">
                  Start a Project
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors">
                  View All Repositories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
