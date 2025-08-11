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
  return <section id="contact" className="bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 px-0 bg-inherit rounded-full my-0 mx-0 py-[120px]">
      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-slate-800/95 border border-emerald-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Terminal className="w-3 h-3 mr-1 text-emerald-400" />
            <span className="text-emerald-400 font-black text-xs font-mono tracking-widest">CONTACT PROTOCOL</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            LET'S START YOUR <span className="text-emerald-400">NEXT PROJECT</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Ready to transform your ideas? Get in touch with our expert team
          </p>

          {/* Contact Stats */}
          <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
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
            return <div key={index} className="bg-slate-800/80 border border-slate-700 p-1.5 text-center backdrop-blur-sm">
                  <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>;
          })}
          </div>
        </div>

        {/* Contact Methods Grid - Compact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {contactMethods.map((method, index) => {
          const IconComponent = method.icon;
          return <div key={index} className="bg-slate-800/95 border border-slate-700 p-3 hover:border-emerald-400/50 transition-all duration-300 group hover:scale-[1.02]">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-slate-700 border border-slate-600 flex items-center justify-center group-hover:border-emerald-400/50 transition-all duration-300">
                    <IconComponent className={`w-4 h-4 ${method.color} group-hover:text-emerald-400 transition-colors duration-300`} />
                  </div>
                  <h3 className="font-black text-white text-sm font-mono tracking-[0.1em] group-hover:text-emerald-300 transition-colors duration-300">
                    {method.title}
                  </h3>
                </div>
                <p className={`text-xs font-bold ${method.color} font-mono break-all group-hover:text-emerald-300 transition-colors duration-300`}>
                  {method.contact}
                </p>
              </div>;
        })}
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Contact Form - Compact */}
          <div className="bg-slate-800/80 border border-slate-600/50 p-5 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Code className="mr-2 text-emerald-400" size={20} />
              <h3 className="text-lg font-black text-white font-mono tracking-wider">SEND_MESSAGE</h3>
            </div>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-black text-emerald-400 mb-1 font-mono tracking-[0.1em]">NAME *</label>
                  <input type="text" className="w-full px-3 py-2 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all font-mono text-sm placeholder:text-slate-500" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-xs font-black text-emerald-400 mb-1 font-mono tracking-[0.1em]">EMAIL *</label>
                  <input type="email" className="w-full px-3 py-2 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all font-mono text-sm placeholder:text-slate-500" placeholder="john@example.com" required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-emerald-400 mb-1 font-mono tracking-[0.1em]">SERVICE</label>
                <select className="w-full px-3 py-2 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all font-mono text-sm">
                  <option>Game Development</option>
                  <option>Web Applications</option>
                  <option>Mobile Development</option>
                  <option>Backend Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-emerald-400 mb-1 font-mono tracking-[0.1em]">MESSAGE *</label>
                <textarea rows={4} className="w-full px-3 py-2 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-all resize-none font-mono text-sm placeholder:text-slate-500" placeholder="Tell us about your project..." required></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black py-3 px-4 font-black transition-all duration-300 font-mono text-sm tracking-[0.1em] hover:from-emerald-600 hover:to-cyan-600 flex items-center justify-center group hover:scale-[1.02]">
                SEND_MESSAGE
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </form>
          </div>

          {/* Quick Actions - Compact */}
          <div className="space-y-3">
            <div className="bg-slate-800/80 border border-slate-600/50 p-5 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Zap className="mr-2 text-emerald-400" size={20} />
                <h3 className="text-lg font-black text-white font-mono tracking-wider">QUICK_ACTIONS</h3>
              </div>
              
              <div className="space-y-2">
                {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return <button key={index} className={`w-full flex items-center justify-center bg-gradient-to-r ${action.color} text-black py-3 px-4 transition-all duration-300 font-black font-mono text-sm tracking-[0.1em] hover:scale-[1.02] group`}>
                      <IconComponent className="mr-2 group-hover:scale-110 transition-transform" size={16} />
                      {action.label}
                    </button>;
              })}
              </div>
            </div>

            {/* Office Hours - Compact */}
            <div className="bg-slate-800/80 border border-slate-600/50 p-5">
              <h4 className="font-black text-white mb-3 flex items-center font-mono tracking-[0.1em] text-sm">
                <Terminal className="mr-2 text-emerald-400" size={16} />
                OFFICE_HOURS
              </h4>
              <div className="space-y-1 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">MON-FRI</span>
                  <span className="font-bold text-emerald-400">8AM-6PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">SAT</span>
                  <span className="font-bold text-emerald-400">9AM-4PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">SUN</span>
                  <span className="font-bold text-slate-500">CLOSED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;