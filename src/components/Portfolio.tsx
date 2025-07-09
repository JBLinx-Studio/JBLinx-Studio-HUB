
import React from 'react';
import { ExternalLink, Github, Star, Calendar, Code, Users } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "FastAPI-MySQL-Template",
      category: "Backend Development",
      description: "A robust FastAPI template with MySQL integration, featuring authentication, CRUD operations, and comprehensive API documentation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tags: ["FastAPI", "MySQL", "Python", "REST API"],
      github: "https://github.com/JBLinx-Studio/FastAPI-MySQL-Template",
      demo: "#",
      stars: 15,
      language: "Python",
      updated: "2024"
    },
    {
      title: "AI Tic-Tac-Toe",
      category: "Game Development",
      description: "An intelligent Tic-Tac-Toe game with AI opponent using minimax algorithm and modern web technologies.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      tags: ["JavaScript", "AI", "Game Logic", "Web"],
      github: "https://github.com/JBLinx-Studio/AI-Tic-Tac-Toe",
      demo: "#",
      stars: 8,
      language: "JavaScript",
      updated: "2024"
    },
    {
      title: "UnitySDK-Template",
      category: "Unity Development",
      description: "A comprehensive Unity SDK template providing essential tools and frameworks for rapid game development.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["Unity", "C#", "SDK", "Game Development"],
      github: "https://github.com/JBLinx-Studio/UnitySDK-Template",
      demo: "#",
      stars: 22,
      language: "C#",
      updated: "2024"
    },
    {
      title: "React-Tailwind-Template",
      category: "Web Development",
      description: "Modern React application template with Tailwind CSS, TypeScript, and best practices for scalable web apps.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["React", "Tailwind", "TypeScript", "Vite"],
      github: "https://github.com/JBLinx-Studio/React-Tailwind-Template",
      demo: "#",
      stars: 31,
      language: "TypeScript",
      updated: "2024"
    },
    {
      title: "Flutter-Firebase-Template",
      category: "Mobile Development",
      description: "Complete Flutter template with Firebase integration for authentication, database, and cloud functions.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["Flutter", "Firebase", "Dart", "Mobile"],
      github: "https://github.com/JBLinx-Studio/Flutter-Firebase-Template",
      demo: "#",
      stars: 18,
      language: "Dart",
      updated: "2024"
    },
    {
      title: "Next.js-E-commerce",
      category: "E-commerce",
      description: "Full-featured e-commerce platform built with Next.js, featuring payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["Next.js", "Stripe", "MongoDB", "Commerce"],
      github: "https://github.com/JBLinx-Studio/NextJS-Ecommerce",
      demo: "#",
      stars: 42,
      language: "TypeScript",
      updated: "2024"
    }
  ];

  const categories = ["All", "Web Development", "Game Development", "Mobile Development", "Backend Development", "Unity Development", "E-commerce"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <Code size={16} className="mr-2" />
            <span className="text-sm font-semibold">OUR PROJECTS</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects &
            <span className="block text-blue-600">Open Source Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects, open-source contributions, 
            and innovative solutions across various technologies and industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
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
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:scale-110 transition-transform"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={18} />
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
                    <Star size={14} className="mr-1" />
                    {project.stars}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
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

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Code className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Open Source Projects</div>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">GitHub Stars</div>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Contributors</div>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Github className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Commits/Month</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always open to exciting new projects and partnerships. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                View All Projects
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
