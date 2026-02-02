
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Trophy, Users, Star, Activity, Code, Terminal, Zap } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import StatGrid from './ui/StatGrid';
import ContentPanel from './ui/ContentPanel';

const Contact = () => {
  const contactMethods = [
    { icon: Mail, title: "EMAIL", contact: "hello@jblinxstudio.com", color: "text-emerald-400" },
    { icon: Phone, title: "PHONE", contact: "+1 (555) 123-4567", color: "text-blue-400" },
    { icon: MapPin, title: "LOCATION", contact: "123 Innovation Street, Tech City", color: "text-purple-400" },
    { icon: MessageCircle, title: "CHAT", contact: "Live Support Available", color: "text-orange-400" }
  ];

  const quickActions = [
    { icon: MessageCircle, label: "START CHAT", color: "from-emerald-500 to-cyan-500" },
    { icon: Calendar, label: "BOOK MEETING", color: "from-blue-500 to-purple-500" },
    { icon: Phone, label: "REQUEST CALL", color: "from-orange-500 to-red-500" }
  ];

  const statsData = [
    { icon: Trophy, value: "98.7%", label: "Satisfaction", color: "yellow" as const },
    { icon: Users, value: "150+", label: "Clients", color: "blue" as const },
    { icon: Star, value: "4.9/5", label: "Rating", color: "purple" as const },
    { icon: Activity, value: "24/7", label: "Support", color: "green" as const }
  ];

  return (
    <SectionWrapper
      id="contact"
      badge={{ icon: Terminal, label: "CONTACT US", color: "orange" }}
      title={{ main: "LET'S BUILD", accent: "TOGETHER", accentColor: "orange" }}
      subtitle="Ready to transform your ideas into exceptional digital experiences? Connect with our expert team."
    >
      {/* Stats Grid */}
      <StatGrid stats={statsData} columns={4} className="max-w-xl mx-auto mb-8" />

      {/* Contact Methods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon;
          return (
            <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-4 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-10 h-10 bg-zinc-700/50 border border-zinc-600/50 flex items-center justify-center">
                  <IconComponent className={`w-4 h-4 ${method.color}`} />
                </div>
                <div className="text-center">
                  <h3 className="text-label text-white mb-1">{method.title}</h3>
                  <p className={`text-xs font-bold ${method.color} font-mono break-all`}>{method.contact}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* Contact Form */}
        <ContentPanel title="SEND MESSAGE" icon={Code} accentColor="orange">
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-label text-orange-400 mb-1.5 block">NAME *</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none transition-all font-mono text-sm placeholder:text-zinc-500" 
                  placeholder="John Doe" 
                  required 
                />
              </div>
              <div>
                <label className="text-label text-orange-400 mb-1.5 block">EMAIL *</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none transition-all font-mono text-sm placeholder:text-zinc-500" 
                  placeholder="john@example.com" 
                  required 
                />
              </div>
            </div>

            <div>
              <label className="text-label text-orange-400 mb-1.5 block">SERVICE</label>
              <select className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none transition-all font-mono text-sm">
                <option>Game Development</option>
                <option>Web Applications</option>
                <option>Mobile Development</option>
                <option>Backend Systems</option>
              </select>
            </div>

            <div>
              <label className="text-label text-orange-400 mb-1.5 block">MESSAGE *</label>
              <textarea 
                rows={4} 
                className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none transition-all resize-none font-mono text-sm placeholder:text-zinc-500" 
                placeholder="Tell us about your project..." 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 py-3 px-4 font-black transition-all duration-300 font-mono text-sm tracking-wider hover:from-orange-600 hover:to-amber-600 flex items-center justify-center shadow-lg hover:scale-[1.02]"
            >
              SEND MESSAGE
              <Send className="ml-2" size={14} />
            </button>
          </form>
        </ContentPanel>

        {/* Quick Actions & Office Hours */}
        <div className="space-y-4">
          <ContentPanel title="QUICK ACTIONS" icon={Zap} accentColor="orange">
            <div className="space-y-2">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <button 
                    key={index} 
                    className={`w-full flex items-center justify-center bg-gradient-to-r ${action.color} text-zinc-950 py-3 px-4 transition-all duration-300 font-black font-mono text-sm tracking-wider shadow-lg hover:scale-[1.02]`}
                  >
                    <IconComponent className="mr-2" size={14} />
                    {action.label}
                  </button>
                );
              })}
            </div>
          </ContentPanel>

          <ContentPanel title="OFFICE HOURS" icon={Terminal} accentColor="orange">
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between items-center py-2 border-b border-zinc-700/50">
                <span className="text-zinc-500">MON - FRI</span>
                <span className="font-bold text-orange-400">8AM - 6PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-zinc-700/50">
                <span className="text-zinc-500">SATURDAY</span>
                <span className="font-bold text-orange-400">9AM - 4PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-zinc-500">SUNDAY</span>
                <span className="font-bold text-zinc-600">CLOSED</span>
              </div>
            </div>
          </ContentPanel>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
