
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Gamepad2, Users, Trophy, Code, Zap, Shield, Play, Star, ArrowRight, CheckCircle, Globe, Smartphone, Monitor, Headphones } from 'lucide-react';

const GameDevelopment = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Multi-Platform Development",
      description: "Create games for PC, mobile, console, and web platforms using industry-leading engines like Unity and Unreal Engine.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Multiplayer Integration",
      description: "Build engaging multiplayer experiences with real-time networking, cloud infrastructure, and seamless matchmaking.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      title: "Game Monetization",
      description: "Implement effective monetization strategies including IAP, ads, subscription models, and premium content.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Performance Optimization",
      description: "Optimize games for smooth 60+ FPS performance across all target devices and platforms with advanced techniques.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: "Anti-Cheat Systems",
      description: "Implement robust security measures to prevent cheating, protect game integrity, and ensure fair gameplay.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-white" />,
      title: "Game Design Consulting",
      description: "Expert guidance on game mechanics, user experience, player engagement strategies, and market analysis.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const platforms = [
    { icon: <Monitor className="w-8 h-8" />, name: "PC Gaming", desc: "Windows, Mac, Linux" },
    { icon: <Smartphone className="w-8 h-8" />, name: "Mobile", desc: "iOS & Android" },
    { icon: <Globe className="w-8 h-8" />, name: "Web Games", desc: "HTML5 & WebGL" },
    { icon: <Headphones className="w-8 h-8" />, name: "VR/AR", desc: "Immersive Experiences" }
  ];

  const gameTypes = [
    { title: "Action Games", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=300&fit=crop", tags: ["Shooters", "Fighting", "Platformers"] },
    { title: "Strategy Games", image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop", tags: ["RTS", "Turn-based", "Tower Defense"] },
    { title: "RPG Games", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop", tags: ["Adventure", "MMORPG", "Indie RPG"] },
    { title: "Casual Games", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop", tags: ["Puzzle", "Arcade", "Hyper-casual"] }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-500/20 rounded-full animate-float delay-700 blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/20 rounded-full animate-float delay-300 blur-xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-on-scroll fade-in-left">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Gamepad2 className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm font-semibold">Game Development Excellence</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Create
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Epic Games
                </span>
                That Captivate
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
                Transform your vision into immersive gaming experiences with our expert game development services. From concept to launch, we create games that engage, entertain, and exceed expectations.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Cross-Platform Games",
                  "Advanced Graphics",
                  "Multiplayer Support",
                  "Game Analytics"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group">
                  Start Your Game Project
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm">
                  <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  View Game Portfolio
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-400">Games Developed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">2M+</div>
                  <div className="text-sm text-gray-400">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">4.9</div>
                  <div className="text-sm text-gray-400">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Side - Game Showcase */}
            <div className="relative animate-on-scroll fade-in-right">
              <div className="relative w-full max-w-2xl mx-auto">
                {/* Main Game Screenshot */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl">
                  <div className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop" 
                      alt="Game Development" 
                      className="w-full h-80 object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Game UI Elements */}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-white text-sm font-medium">LIVE</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-white font-semibold">Epic Adventure Game</h4>
                            <p className="text-gray-300 text-sm">Unity • Multiplayer • Action RPG</p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white text-sm">4.9</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Game Icons */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg animate-float delay-500">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                
                <div className="absolute top-1/2 -right-8 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-6 py-3 mb-6">
              <Code className="w-5 h-5 mr-2" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Game Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From indie games to AAA productions, we deliver comprehensive game development solutions that bring your creative vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Multi-Platform Development</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create games that reach players everywhere with our cross-platform development expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-white">
                  {platform.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Types Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Game Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the diverse range of games we've created across different genres and platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gameTypes.map((game, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{game.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {game.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technologies We Master</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cutting-edge game engines and tools for creating next-generation gaming experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gray-900 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Unity 3D</h3>
              <p className="text-gray-600">Industry-leading game engine</p>
            </div>

            <div className="group text-center p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">UE</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Unreal Engine</h3>
              <p className="text-gray-600">High-fidelity game development</p>
            </div>

            <div className="group text-center p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-green-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">C#</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">C# Programming</h3>
              <p className="text-gray-600">Primary development language</p>
            </div>

            <div className="group text-center p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">3D</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">3D Graphics</h3>
              <p className="text-gray-600">Advanced rendering & VFX</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Create Your Next Hit Game?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's bring your game concept to life with our expert development team and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                Start Your Project Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameDevelopment;
