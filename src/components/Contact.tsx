
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Trophy, Users, Star, Activity, Code, Terminal, Zap } from 'lucide-react';

const Contact = () => {
  const contactMethods = [{
    icon: Mail,
    title: "EMAIL",
    contact: "hello@jblinxstudio.com",
    color: "text-emerald-400"
  }, {
    icon: Phone,
    title: "PHONE",
    contact: "+1 (555) 123-4567",
    color: "text-blue-400"
  }, {
    icon: MapPin,
    title: "LOCATION",
    contact: "123 Innovation Street, Tech City",
    color: "text-purple-400"
  }, {
    icon: MessageCircle,
    title: "CHAT",
    contact: "Live Support Available",
    color: "text-orange-400"
  }];

  const quickActions = [{
    icon: MessageCircle,
    label: "START CHAT",
    color: "from-emerald-500 to-cyan-500"
  }, {
    icon: Calendar,
    label: "BOOK MEETING",
    color: "from-blue-500 to-purple-500"
  }, {
    icon: Phone,
    label: "REQUEST CALL",
    color: "from-orange-500 to-red-500"
  }];

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 py-16 overflow-hidden">
      {/* Enhanced Background Effects - Similar to Services */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {/* Primary ambient lighting */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/10 to-amber-500/8 blur-3xl rounded-full animate-pulse transform -rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/10 to-teal-500/8 blur-3xl rounded-full animate-pulse transform rotate-45" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-400/8 to-orange-400/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary layers */}
        <div className="absolute top-1/6 right-1/3 w-[300px] h-[300px] bg-gradient-to-l from-orange-300/8 to-emerald-300/6 blur-2xl rounded-full animate-pulse transform rotate-12" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/6 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-teal-400/6 to-amber-400/5 blur-2xl rounded-full animate-pulse transform -rotate-12" style={{animationDelay: '3s'}}></div>
        
        {/* Enhanced grid overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute top-1/3 left-1/6 w-6 h-6 bg-orange-400/30 transform rotate-45 animate-pulse border border-orange-400/20"></div>
        <div className="absolute top-1/5 right-1/4 w-4 h-4 bg-emerald-400/30 rounded-full animate-pulse border border-emerald-400/20" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-amber-400/25 animate-pulse border border-amber-400/15 transform rotate-12" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/5 right-1/6 w-6 h-6 bg-teal-400/25 transform rotate-30 animate-pulse border border-teal-400/15" style={{animationDelay: '6s'}}></div>

        {/* Accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Header - Similar to Services */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-zinc-800/95 border border-orange-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
            <Terminal className="w-4 h-4 mr-2 text-orange-400" />
            <span className="text-orange-400 font-black text-sm font-mono tracking-widest">CONTACT US</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            LET'S BUILD <span className="text-orange-400">TOGETHER</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-emerald-400 mx-auto mb-4"></div>
          
          <p className="text-base text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Ready to transform your ideas into exceptional digital experiences? Connect with our expert team.
          </p>

          {/* Compact Contact Stats */}
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
            {[{
              icon: Trophy,
              value: "98.7%",
              label: "Satisfaction",
              color: "text-yellow-400"
            }, {
              icon: Users,
              value: "150+",
              label: "Clients",
              color: "text-blue-400"
            }, {
              icon: Star,
              value: "4.9/5",
              label: "Rating",
              color: "text-purple-400"
            }, {
              icon: Activity,
              value: "24/7",
              label: "Support",
              color: "text-green-400"
            }].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-3 text-center backdrop-blur-sm hover:border-orange-400/30 transition-all duration-300 group">
                  <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  <div className={`text-lg font-black ${stat.color} font-mono mb-1`}>{stat.value}</div>
                  <div className="text-slate-400 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Contact Methods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-4 hover:border-orange-400/50 transition-all duration-300 group hover:scale-[1.02] backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-10 h-10 bg-zinc-700/50 border border-zinc-600/50 flex items-center justify-center group-hover:border-orange-400/50 transition-all duration-300">
                    <IconComponent className={`w-4 h-4 ${method.color} group-hover:text-orange-400 transition-colors duration-300`} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-black text-white text-sm font-mono tracking-wider group-hover:text-orange-300 transition-colors duration-300 mb-1">
                      {method.title}
                    </h3>
                    <p className={`text-xs font-bold ${method.color} font-mono break-all group-hover:text-orange-300 transition-colors duration-300`}>
                      {method.contact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Compact Contact Form */}
          <div className="bg-zinc-800/80 border border-zinc-600/50 p-6 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Code className="mr-3 text-orange-400" size={20} />
              <h3 className="text-lg font-black text-white font-mono tracking-wider">SEND MESSAGE</h3>
            </div>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-orange-400 mb-1 font-mono tracking-wider">NAME *</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all font-mono text-sm placeholder:text-zinc-500" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-orange-400 mb-1 font-mono tracking-wider">EMAIL *</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all font-mono text-sm placeholder:text-zinc-500" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-orange-400 mb-1 font-mono tracking-wider">SERVICE</label>
                <select className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all font-mono text-sm">
                  <option>Game Development</option>
                  <option>Web Applications</option>
                  <option>Mobile Development</option>
                  <option>Backend Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-orange-400 mb-1 font-mono tracking-wider">MESSAGE *</label>
                <textarea 
                  rows={4} 
                  className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all resize-none font-mono text-sm placeholder:text-zinc-500" 
                  placeholder="Tell us about your project..." 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 py-3 px-4 font-black transition-all duration-300 font-mono text-sm tracking-wider hover:from-orange-600 hover:to-amber-600 flex items-center justify-center group hover:scale-[1.02] shadow-lg"
              >
                SEND MESSAGE
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </form>
          </div>

          {/* Compact Quick Actions & Office Hours */}
          <div className="space-y-4">
            <div className="bg-zinc-800/80 border border-zinc-600/50 p-6 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Zap className="mr-3 text-orange-400" size={20} />
                <h3 className="text-lg font-black text-white font-mono tracking-wider">QUICK ACTIONS</h3>
              </div>
              
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button 
                      key={index} 
                      className={`w-full flex items-center justify-center bg-gradient-to-r ${action.color} text-zinc-950 py-3 px-4 transition-all duration-300 font-black font-mono text-sm tracking-wider hover:scale-[1.02] group shadow-lg`}
                    >
                      <IconComponent className="mr-2 group-hover:scale-110 transition-transform" size={16} />
                      {action.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Compact Office Hours */}
            <div className="bg-zinc-800/80 border border-zinc-600/50 p-6 backdrop-blur-sm">
              <h4 className="font-black text-white mb-4 flex items-center font-mono tracking-wider text-base">
                <Terminal className="mr-3 text-orange-400" size={18} />
                OFFICE HOURS
              </h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between items-center py-2 border-b border-zinc-700/50">
                  <span className="text-slate-400">MON - FRI</span>
                  <span className="font-bold text-orange-400">8AM - 6PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-700/50">
                  <span className="text-slate-400">SATURDAY</span>
                  <span className="font-bold text-orange-400">9AM - 4PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">SUNDAY</span>
                  <span className="font-bold text-zinc-500">CLOSED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
