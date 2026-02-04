import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Trophy, Users, Star, Activity, Terminal, Zap } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    { icon: Mail, title: "EMAIL", contact: "hello@jblinxstudio.com", color: "text-emerald-400" },
    { icon: Phone, title: "PHONE", contact: "+1 (555) 123-4567", color: "text-blue-400" },
    { icon: MapPin, title: "LOCATION", contact: "123 Innovation Street, Tech City", color: "text-purple-400" },
    { icon: MessageCircle, title: "CHAT", contact: "Live Support Available", color: "text-orange-400" }
  ];

  const quickActions = [
    { icon: MessageCircle, label: "START CHAT", color: "bg-emerald-500 hover:bg-emerald-600" },
    { icon: Calendar, label: "BOOK MEETING", color: "bg-blue-500 hover:bg-blue-600" },
    { icon: Phone, label: "REQUEST CALL", color: "bg-orange-500 hover:bg-orange-600" }
  ];

  const statsData = [
    { icon: Trophy, value: "98.7%", label: "Satisfaction", color: "text-yellow-400" },
    { icon: Users, value: "150+", label: "Clients", color: "text-blue-400" },
    { icon: Star, value: "4.9/5", label: "Rating", color: "text-purple-400" },
    { icon: Activity, value: "24/7", label: "Support", color: "text-green-400" }
  ];

  return (
    <section id="contact" className="relative bg-gradient-section section-padding overflow-hidden">
      <div className="ambient-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-orange">
            <Terminal className="w-4 h-4" />
            <span>CONTACT US</span>
          </div>
          
          <h2 className="text-section-title text-foreground mb-3">
            LET'S BUILD <span className="text-orange-400">TOGETHER</span>
          </h2>
          
          <div className="section-divider bg-orange-400" />
          
          <p className="section-subtitle">
            Ready to transform your ideas into exceptional digital experiences? Connect with our expert team.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="stat-card">
                <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                <div className={`stat-value ${stat.color}`}>{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="panel card-padding hover:border-orange-500/40 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-secondary border border-border flex items-center justify-center mb-3">
                    <IconComponent className={`w-5 h-5 ${method.color}`} />
                  </div>
                  <h3 className="text-label text-foreground mb-1">{method.title}</h3>
                  <p className={`text-small font-bold ${method.color} break-all`}>{method.contact}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="panel card-padding">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-5 h-5 text-orange-400" />
              <h3 className="text-panel-title text-orange-400">SEND MESSAGE</h3>
            </div>
            
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-label text-orange-400 mb-2 block">NAME *</label>
                  <input 
                    type="text" 
                    className="input-base" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div>
                  <label className="text-label text-orange-400 mb-2 block">EMAIL *</label>
                  <input 
                    type="email" 
                    className="input-base" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="text-label text-orange-400 mb-2 block">SERVICE</label>
                <select className="input-base">
                  <option>Game Development</option>
                  <option>Web Applications</option>
                  <option>Mobile Development</option>
                  <option>Backend Systems</option>
                </select>
              </div>

              <div>
                <label className="text-label text-orange-400 mb-2 block">MESSAGE *</label>
                <textarea 
                  rows={4} 
                  className="input-base resize-none" 
                  placeholder="Tell us about your project..." 
                  required
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full bg-orange-500 hover:bg-orange-600 shadow-orange-500/25"
              >
                SEND MESSAGE
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Quick Actions & Office Hours */}
          <div className="space-y-5">
            <div className="panel card-padding">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-orange-400" />
                <h3 className="text-panel-title text-orange-400">QUICK ACTIONS</h3>
              </div>
              
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button 
                      key={index} 
                      className={`btn-base w-full text-foreground ${action.color}`}
                    >
                      <IconComponent className="w-4 h-4" />
                      {action.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="panel card-padding">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-orange-400" />
                <h3 className="text-panel-title text-orange-400">OFFICE HOURS</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-small">MON - FRI</span>
                  <span className="text-card-title text-orange-400">8AM - 6PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-small">SATURDAY</span>
                  <span className="text-card-title text-orange-400">9AM - 4PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-small">SUNDAY</span>
                  <span className="text-card-title text-muted-foreground">CLOSED</span>
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
