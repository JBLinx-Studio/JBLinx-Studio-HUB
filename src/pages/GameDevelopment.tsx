
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Gamepad2, Users, Trophy, Code, Zap, Shield } from 'lucide-react';

const GameDevelopment = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Multi-Platform Development",
      description: "Create games for PC, mobile, console, and web platforms using industry-leading engines."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Multiplayer Integration",
      description: "Build engaging multiplayer experiences with real-time networking and cloud infrastructure."
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      title: "Game Monetization",
      description: "Implement effective monetization strategies including IAP, ads, and subscription models."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Performance Optimization",
      description: "Optimize games for smooth performance across all target devices and platforms."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "Anti-Cheat Systems",
      description: "Implement robust security measures to prevent cheating and protect game integrity."
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-indigo-600" />,
      title: "Game Design Consulting",
      description: "Expert guidance on game mechanics, user experience, and player engagement strategies."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Gamepad2 className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Game Development Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Create immersive gaming experiences that captivate players and drive engagement across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Your Game Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                View Game Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Game Development Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Technologies We Use</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
              <h3 className="font-bold">Unity</h3>
              <p className="text-gray-600 text-sm">Cross-platform game engine</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">UE</span>
              </div>
              <h3 className="font-bold">Unreal Engine</h3>
              <p className="text-gray-600 text-sm">High-fidelity game development</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">C#</span>
              </div>
              <h3 className="font-bold">C# Programming</h3>
              <p className="text-gray-600 text-sm">Primary development language</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">3D</span>
              </div>
              <h3 className="font-bold">3D Graphics</h3>
              <p className="text-gray-600 text-sm">Advanced rendering techniques</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameDevelopment;
