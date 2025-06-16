
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Mobile Gaming Platform",
      category: "Game Development",
      description: "Multiplayer mobile game with real-time synchronization and advanced graphics.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      tags: ["Unity", "Mobile", "Multiplayer"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "E-Commerce Web App",
      category: "Web Development",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile App",
      description: "Cross-platform fitness app with workout tracking and nutrition planning.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase", "API"],
      gradient: "from-green-500 to-blue-600"
    },
    {
      title: "AI-Powered Analytics",
      category: "Enterprise Solution",
      description: "Business intelligence platform with machine learning insights and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Python", "AI/ML", "Dashboard"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Educational Platform",
      category: "EdTech",
      description: "Interactive learning platform with video courses and progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["Vue.js", "Video", "LMS"],
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "Smart Home Control",
      category: "IoT Solution",
      description: "IoT-based home automation system with mobile and web interfaces.",
      image: "https://images.unsplash.com/photo-1558618047-3c8676c46deb?w=600&h=400&fit=crop",
      tags: ["IoT", "Mobile", "Cloud"],
      gradient: "from-teal-500 to-green-600"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of successful projects across various industries and technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 hover:scale-110 transition-transform">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
