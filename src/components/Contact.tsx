
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
    <section id="contact" className="relative bg-zinc-950 border-t border-zinc-800 py-32 overflow-hidden">
      {/* Professional Tech Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950"></div>
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" className="w-full h-full">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <g stroke="rgb(251 146 60)" strokeWidth="0.5" fill="none">
                  <path d="M20,20 L80,20 L80,80 L20,80 Z" />
                  <circle cx="20" cy="20" r="2" fill="rgb(251 146 60)" />
                  <circle cx="80" cy="80" r="2" fill="rgb(16 185 129)" />
                  <path d="M50,0 L50,100" />
                  <path d="M0,50 L100,50" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Sophisticated gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-orange-500/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-emerald-500/8 to-transparent blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-amber-500/5 to-transparent blur-3xl"></div>
        </div>

        {/* Professional tech lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-400/40 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-400/40 to-transparent"></div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/6 left-1/6 w-8 h-8 border border-orange-400/30 transform rotate-45 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 border border-emerald-400/30 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 border border-amber-400/30 transform rotate-12 animate-pulse" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-1/6 right-1/6 w-10 h-10 border border-orange-400/25 transform rotate-45 animate-pulse" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Data stream effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-zinc-800/50 border border-orange-500/30 px-6 py-3 mb-8 backdrop-blur-sm">
            <Terminal className="w-4 h-4 mr-2 text-orange-400" />
            <span className="text-orange-400 font-bold text-sm font-mono tracking-widest">CONTACT PROTOCOL</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-cream leading-tight font-mono mb-4">
            LET'S START YOUR <span className="text-orange-400">NEXT PROJECT</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-emerald-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-cream-dark max-w-2xl mx-auto mb-8 leading-relaxed">
            Ready to transform your ideas into exceptional digital experiences? Get in touch with our expert team.
          </p>

          {/* Enhanced Contact Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[{
              icon: Trophy,
              value: "98.7%",
              label: "Client Satisfaction",
              color: "text-yellow-400"
            }, {
              icon: Users,
              value: "150+",
              label: "Happy Clients",
              color: "text-blue-400"
            }, {
              icon: Star,
              value: "4.9/5",
              label: "Average Rating",
              color: "text-purple-400"
            }, {
              icon: Activity,
              value: "24/7",
              label: "Support Available",
              color: "text-green-400"
            }].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/40 border border-zinc-700/50 p-6 text-center backdrop-blur-sm hover:border-orange-400/30 transition-all duration-300 group">
                  <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                  <div className={`text-xl font-black ${stat.color} font-mono mb-1`}>{stat.value}</div>
                  <div className="text-cream-dark text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 p-6 hover:border-orange-400/50 transition-all duration-300 group hover:scale-[1.02] backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-zinc-700/50 border border-zinc-600/50 flex items-center justify-center group-hover:border-orange-400/50 transition-all duration-300">
                    <IconComponent className={`w-5 h-5 ${method.color} group-hover:text-orange-400 transition-colors duration-300`} />
                  </div>
                  <h3 className="font-black text-cream text-base font-mono tracking-wider group-hover:text-orange-300 transition-colors duration-300">
                    {method.title}
                  </h3>
                </div>
                <p className={`text-sm font-bold ${method.color} font-mono break-all group-hover:text-orange-300 transition-colors duration-300`}>
                  {method.contact}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enhanced Contact Form */}
          <div className="bg-zinc-800/40 border border-zinc-600/50 p-8 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Code className="mr-3 text-orange-400" size={24} />
              <h3 className="text-xl font-black text-cream font-mono tracking-wider">SEND_MESSAGE</h3>
            </div>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-orange-400 mb-2 font-mono tracking-wider">NAME *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-600/50 text-cream focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all font-mono text-sm placeholder:text-zinc-500" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-orange-400 mb-2 font-mono tracking-wider">EMAIL *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-600/50 text-cream focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all font-mono text-sm placeholder:text-zinc-500" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-orange-400 mb-2 font-mono tracking-wider">SERVICE</label>
                <select className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-600/50 text-cream focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all font-mono text-sm">
                  <option>Game Development</option>
                  <option>Web Applications</option>
                  <option>Mobile Development</option>
                  <option>Backend Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-orange-400 mb-2 font-mono tracking-wider">MESSAGE *</label>
                <textarea 
                  rows={5} 
                  className="w-full px-4 py-3 bg-zinc-900/60 border border-zinc-600/50 text-cream focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all resize-none font-mono text-sm placeholder:text-zinc-500" 
                  placeholder="Tell us about your project..." 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 py-4 px-6 font-black transition-all duration-300 font-mono text-sm tracking-wider hover:from-orange-600 hover:to-amber-600 flex items-center justify-center group hover:scale-[1.02] shadow-lg"
              >
                SEND_MESSAGE
                <Send className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </form>
          </div>

          {/* Enhanced Quick Actions */}
          <div className="space-y-6">
            <div className="bg-zinc-800/40 border border-zinc-600/50 p-8 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Zap className="mr-3 text-orange-400" size={24} />
                <h3 className="text-xl font-black text-cream font-mono tracking-wider">QUICK_ACTIONS</h3>
              </div>
              
              <div className="space-y-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button 
                      key={index} 
                      className={`w-full flex items-center justify-center bg-gradient-to-r ${action.color} text-zinc-950 py-4 px-6 transition-all duration-300 font-black font-mono text-sm tracking-wider hover:scale-[1.02] group shadow-lg`}
                    >
                      <IconComponent className="mr-3 group-hover:scale-110 transition-transform" size={18} />
                      {action.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Enhanced Office Hours */}
            <div className="bg-zinc-800/40 border border-zinc-600/50 p-8 backdrop-blur-sm">
              <h4 className="font-black text-cream mb-6 flex items-center font-mono tracking-wider text-base">
                <Terminal className="mr-3 text-orange-400" size={20} />
                OFFICE_HOURS
              </h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between items-center py-2 border-b border-zinc-700/50">
                  <span className="text-cream-dark">MONDAY - FRIDAY</span>
                  <span className="font-bold text-orange-400">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-zinc-700/50">
                  <span className="text-cream-dark">SATURDAY</span>
                  <span className="font-bold text-orange-400">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-cream-dark">SUNDAY</span>
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
