
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Trophy, Users, Star, Activity, Code, Terminal, Zap, Clock, Shield, Globe } from 'lucide-react';

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

  return (
    <section id="contact" className="py-20 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        {/* Professional Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-zinc-800/50 border border-orange-500/30 px-6 py-3 mb-6 backdrop-blur-sm">
            <Terminal className="w-4 h-4 mr-2 text-orange-400" />
            <span className="text-orange-400 font-bold text-sm font-mono tracking-widest">CONTACT PROTOCOL</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-cream leading-tight font-mono mb-4">
            LET'S START YOUR <span className="text-orange-400">NEXT PROJECT</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-emerald-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-cream-dark max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into exceptional digital experiences? Get in touch with our expert team.
          </p>
        </div>

        {/* Compact Contact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {[
            { icon: Trophy, value: "98.7%", label: "Client Satisfaction", color: "text-yellow-400" },
            { icon: Users, value: "150+", label: "Happy Clients", color: "text-blue-400" },
            { icon: Star, value: "4.9/5", label: "Average Rating", color: "text-purple-400" },
            { icon: Activity, value: "24/7", label: "Support Available", color: "text-green-400" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-zinc-800/40 border border-zinc-700/50 p-4 text-center backdrop-blur-sm hover:border-orange-400/30 transition-all duration-300 group">
                <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                <div className={`text-lg font-black ${stat.color} font-mono`}>{stat.value}</div>
                <div className="text-cream-dark text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Contact Methods - Compact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-zinc-800/50 border border-zinc-700/50 p-4 hover:border-orange-400/50 transition-all duration-300 group backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-zinc-700/50 border border-zinc-600/50 flex items-center justify-center group-hover:border-orange-400/50 transition-all duration-300">
                    <IconComponent className={`w-4 h-4 ${method.color} group-hover:text-orange-400 transition-colors duration-300`} />
                  </div>
                  <h3 className="font-black text-cream text-sm font-mono tracking-wider group-hover:text-orange-300 transition-colors duration-300">
                    {method.title}
                  </h3>
                </div>
                <p className={`text-xs font-bold ${method.color} font-mono break-all group-hover:text-orange-300 transition-colors duration-300`}>
                  {method.contact}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Form - Enhanced */}
          <div className="lg:col-span-2 bg-zinc-800/40 border border-zinc-600/50 p-6 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <Code className="mr-3 text-orange-400" size={20} />
              <h3 className="text-lg font-black text-cream font-mono tracking-wider">SEND_MESSAGE</h3>
            </div>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-orange-400 mb-2 font-mono tracking-wider">NAME *</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-cream focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all font-mono text-sm" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-orange-400 mb-2 font-mono tracking-wider">EMAIL *</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-cream focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all font-mono text-sm" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-orange-400 mb-2 font-mono tracking-wider">SERVICE</label>
                <select className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-cream focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all font-mono text-sm">
                  <option>Game Development</option>
                  <option>Web Applications</option>
                  <option>Mobile Development</option>
                  <option>Backend Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-orange-400 mb-2 font-mono tracking-wider">MESSAGE *</label>
                <textarea 
                  rows={4} 
                  className="w-full px-3 py-2 bg-zinc-900/60 border border-zinc-600/50 text-cream focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all resize-none font-mono text-sm" 
                  placeholder="Tell us about your project..." 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 py-3 px-6 font-black transition-all duration-300 font-mono text-sm tracking-wider hover:from-orange-600 hover:to-amber-600 flex items-center justify-center group hover:scale-[1.02] shadow-lg"
              >
                SEND_MESSAGE
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </form>
          </div>

          {/* Right Panel - Quick Actions & Office Hours */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-zinc-800/40 border border-zinc-600/50 p-6 hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Zap className="mr-2 text-orange-400" size={20} />
                <h3 className="text-lg font-black text-cream font-mono tracking-wider">QUICK_ACTIONS</h3>
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

            {/* Office Hours - Compact */}
            <div className="bg-zinc-800/40 border border-zinc-600/50 p-6 backdrop-blur-sm">
              <h4 className="font-black text-cream mb-4 flex items-center font-mono tracking-wider text-base">
                <Clock className="mr-2 text-orange-400" size={18} />
                OFFICE_HOURS
              </h4>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between items-center py-1 border-b border-zinc-700/50">
                  <span className="text-cream-dark">MON - FRI</span>
                  <span className="font-bold text-orange-400">8AM - 6PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-zinc-700/50">
                  <span className="text-cream-dark">SATURDAY</span>
                  <span className="font-bold text-orange-400">9AM - 4PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-cream-dark">SUNDAY</span>
                  <span className="font-bold text-zinc-500">CLOSED</span>
                </div>
              </div>
            </div>

            {/* Security & Support */}
            <div className="bg-zinc-800/40 border border-zinc-600/50 p-6 backdrop-blur-sm">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span className="text-cream text-sm font-mono">SSL Secured Forms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span className="text-cream text-sm font-mono">Global Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-purple-400" />
                  <span className="text-cream text-sm font-mono">24/7 Monitoring</span>
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
