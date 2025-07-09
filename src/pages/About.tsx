
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Users, Trophy, Zap, ArrowRight } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Lead Developer",
      expertise: "Full-Stack Development",
      experience: "8+ years"
    },
    {
      name: "Sarah Kim",
      role: "Game Designer",
      expertise: "Unity & Unreal Engine",
      experience: "6+ years"
    },
    {
      name: "Marcus Johnson",
      role: "UI/UX Designer",
      expertise: "Modern Web Design",
      experience: "5+ years"
    }
  ];

  const achievements = [
    { icon: Trophy, value: "98.7%", label: "Client Satisfaction", color: "text-yellow-400" },
    { icon: Code, value: "150+", label: "Projects Delivered", color: "text-blue-400" },
    { icon: Users, value: "200+", label: "Happy Clients", color: "text-purple-400" },
    { icon: Zap, value: "99.9%", label: "System Uptime", color: "text-green-400" }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(8,145,178,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  ABOUT_US
                </span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-8"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-mono tracking-tight">
                WHO WE ARE
              </h1>
              
              <p className="text-xl text-slate-300 mb-12 leading-relaxed font-mono max-w-3xl mx-auto">
                We're a team of passionate developers, designers, and innovators dedicated to creating 
                cutting-edge digital experiences that push the boundaries of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-black text-white mb-6 font-mono">
                    OUR_MISSION
                  </h2>
                  <p className="text-slate-300 mb-6 font-mono leading-relaxed">
                    To deliver innovative, high-quality digital solutions that empower businesses 
                    and delight users. We combine cutting-edge technology with creative design 
                    to build products that make a real impact.
                  </p>
                  <div className="flex items-center space-x-2 text-emerald-400 font-mono text-sm group cursor-pointer">
                    <span className="group-hover:opacity-0 transition-opacity">LEARN_MORE</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute">
                      &gt;_ LEARN_MORE
                    </span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="bg-slate-800 border border-slate-700 p-6 hover:border-emerald-400/50 transition-all group">
                        <IconComponent className={`w-8 h-8 ${achievement.color} mb-4 group-hover:scale-110 transition-transform`} />
                        <div className="text-2xl font-black text-white mb-1 font-mono">
                          {achievement.value}
                        </div>
                        <div className="text-sm text-slate-400 font-mono">
                          {achievement.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-black border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  OUR_TEAM
                </span>
                <h2 className="text-4xl font-black text-white font-mono">
                  MEET THE EXPERTS
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-700 p-6 hover:border-emerald-400/50 transition-all group">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-4 flex items-center justify-center">
                      <span className="text-black font-black text-lg font-mono">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2 font-mono">
                      {member.name}
                    </h3>
                    <p className="text-emerald-400 font-bold text-sm mb-2 font-mono">
                      {member.role}
                    </p>
                    <p className="text-slate-300 text-sm mb-1 font-mono">
                      {member.expertise}
                    </p>
                    <p className="text-slate-400 text-xs font-mono">
                      {member.experience}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
