
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, ExternalLink, ArrowRight, Hexagon, CheckCircle, Users, Trophy, Star, Zap, Rocket, Heart, Code, Building2, Gamepad2, Brain } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    { value: 'game-development', label: '🎮 Game Development - MindMate Gaming', icon: Gamepad2 },
    { value: 'health-tech', label: '💚 Health Tech - VitalitySync Platform', icon: Heart },
    { value: 'development-tools', label: '⚡ Development Tools - CodeFusion IDE', icon: Code },
    { value: 'real-estate', label: '🏢 Real Estate Tech - NestCore Platform', icon: Building2 },
    { value: 'ai-development', label: '🤖 AI Development - CodeCraftAI Builder', icon: Brain },
    { value: 'consultation', label: '💼 Technical Consultation', icon: Zap },
    { value: 'custom', label: '🛠️ Custom Development Project', icon: Rocket }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "PROFESSIONAL EMAIL",
      value: "contact@jblinx-studio.com",
      description: "Business inquiries & partnerships",
      color: "text-cyan-400"
    },
    {
      icon: Github,
      title: "DEVELOPMENT HUB",
      value: "JBLinx-Studio",
      description: "Open source projects & repositories",
      color: "text-purple-400",
      link: "https://github.com/orgs/JBLinx-Studio/repositories"
    },
    {
      icon: MapPin,
      title: "GLOBAL OPERATIONS",
      value: "Remote-First Studio",
      description: "Worldwide development services",
      color: "text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800/95 to-slate-700/95 border-2 border-cyan-400/60 rounded-xl px-8 py-3 mb-8 backdrop-blur-sm hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/25">
            <Hexagon className="w-6 h-6 text-cyan-400 mr-3 animate-spin" style={{animationDuration: '6s'}} />
            <span className="text-cyan-400 font-black text-lg font-mono tracking-widest">PROFESSIONAL CONTACT</span>
            <div className="w-3 h-3 bg-green-400 rounded-full ml-4 animate-pulse shadow-lg shadow-green-400/50"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 font-mono">
            START YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">PROJECT</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Ready to transform your ideas into professional applications? Connect with our development team for 
            <span className="text-cyan-400 font-bold"> custom solutions </span> and 
            <span className="text-green-400 font-bold"> enterprise partnerships</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/60 border-2 border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-2 font-mono">PROJECT CONSULTATION</h3>
                <p className="text-slate-400">Tell us about your project requirements and technical needs</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 font-bold mb-2 text-sm tracking-wider">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:border-slate-600"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-300 font-bold mb-2 text-sm tracking-wider">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:border-slate-600"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-2 text-sm tracking-wider">
                    SERVICE CATEGORY *
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:border-slate-600"
                  >
                    <option value="">Select a service category</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-2 text-sm tracking-wider">
                    PROJECT SUBJECT *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:border-slate-600"
                    placeholder="Brief project title or focus area"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-2 text-sm tracking-wider">
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-900/50 border-2 border-slate-700 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none transition-all duration-300 hover:border-slate-600 resize-none"
                    placeholder="Describe your project requirements, timeline, budget range, and any specific technical needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full ${
                    submitted 
                      ? 'bg-green-500 border-green-400' 
                      : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border-transparent'
                  } text-white px-8 py-4 font-black text-lg border-2 transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-3 rounded-xl`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>SENDING PROJECT REQUEST...</span>
                    </>
                  ) : submitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>PROJECT REQUEST SENT!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>SEND PROJECT REQUEST</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & Stats */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-slate-800/60 border-2 border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-black text-sm tracking-wider mb-1">{info.title}</h4>
                        <div className={`${info.color} font-bold text-lg mb-1`}>
                          {info.link ? (
                            <a href={info.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center space-x-2">
                              <span>{info.value}</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : (
                            info.value
                          )}
                        </div>
                        <p className="text-slate-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Studio Stats */}
            <div className="bg-slate-800/60 border-2 border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-white font-black text-lg mb-6 font-mono">STUDIO METRICS</h4>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Trophy, value: "5", label: "FLAGSHIP APPS", color: "text-cyan-400" },
                  { icon: Users, value: "50k+", label: "ACTIVE USERS", color: "text-green-400" },
                  { icon: Star, value: "892+", label: "GITHUB STARS", color: "text-orange-400" },
                  { icon: CheckCircle, value: "99.9%", label: "UPTIME", color: "text-purple-400" }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-2 group-hover:scale-125 transition-transform duration-300`} />
                      <div className={`text-2xl font-black ${stat.color} font-mono mb-1`}>{stat.value}</div>
                      <div className="text-slate-400 text-xs font-bold tracking-wider">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Featured Services Quick Links */}
            <div className="bg-slate-800/60 border-2 border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-white font-black text-lg mb-6 font-mono">FEATURED SERVICES</h4>
              <div className="space-y-3">
                {[
                  { name: "CodeFusion Studio", desc: "Advanced IDE Platform", color: "text-cyan-400" },
                  { name: "VitalitySync Health", desc: "Smart Wellness Tech", color: "text-green-400" },
                  { name: "MindMate Gaming", desc: "Strategic Gaming Hub", color: "text-purple-400" },
                  { name: "NestCore RealEstate", desc: "Property Platform", color: "text-orange-400" }
                ].map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300">
                    <div>
                      <div className={`${service.color} font-bold text-sm`}>{service.name}</div>
                      <div className="text-slate-400 text-xs">{service.desc}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-orange-500/10 blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
    </section>
  );
};

export default Contact;
