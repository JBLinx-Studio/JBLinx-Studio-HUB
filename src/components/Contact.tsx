
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock, Globe, Terminal, Code, Zap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "EMAIL_US",
      description: "Send us an email anytime",
      contact: "hello@jblinxstudio.com",
      color: "from-emerald-500/20 to-cyan-500/20",
      borderColor: "border-emerald-500/30"
    },
    {
      icon: Phone,
      title: "CALL_US",
      description: "Mon-Fri from 8am to 5pm",
      contact: "+1 (555) 123-4567",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30"
    },
    {
      icon: MapPin,
      title: "VISIT_US",
      description: "Come say hello at our HQ",
      contact: "123 Innovation Street, Tech City, TC 12345",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Globe,
      title: "FOLLOW_US",
      description: "Connect on social media",
      contact: "@jblinxstudio",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    }
  ];

  const offices = [
    {
      city: "NEW_YORK",
      address: "123 Innovation Street, NYC 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@jblinxstudio.com"
    },
    {
      city: "SAN_FRANCISCO",
      address: "456 Tech Valley, SF 94105",
      phone: "+1 (555) 987-6543",
      email: "sf@jblinxstudio.com"
    },
    {
      city: "LONDON",
      address: "789 Digital Lane, London SW1A 1AA",
      phone: "+44 20 7946 0958",
      email: "london@jblinxstudio.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-orange-500/5 blur-3xl rounded-full"></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/60 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 px-8 py-4 mb-8 hover:bg-slate-800/80 transition-all duration-300">
            <Terminal size={18} className="mr-3" />
            <span className="font-black text-sm font-mono tracking-[0.2em]">CONTACT_PROTOCOL</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 font-mono tracking-wider leading-tight">
            LET'S START YOUR NEXT
            <span className="block text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text mt-2">
              DIGITAL JOURNEY
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto font-mono leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss 
            how we can help bring your vision to life with cutting-edge technology solutions.
          </p>
        </div>

        <Separator className="bg-emerald-500/30 mb-16" />

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <div key={index} className={`bg-slate-800/60 backdrop-blur-sm border ${method.borderColor} p-8 hover:bg-slate-800/80 transition-all duration-300 group hover:scale-105 hover:border-emerald-400/50`}>
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} border ${method.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <method.icon className="text-emerald-400" size={24} />
              </div>
              <h3 className="font-black text-emerald-400 mb-3 font-mono text-base tracking-[0.15em]">{method.title}</h3>
              <p className="text-slate-400 text-sm mb-4 font-mono leading-relaxed">{method.description}</p>
              <p className="text-cyan-300 font-bold font-mono text-base break-all">{method.contact}</p>
            </div>
          ))}
        </div>

        <Separator className="bg-emerald-500/30 mb-16" />

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 p-10 hover:border-emerald-500/30 transition-all duration-300">
            <div className="flex items-center mb-8">
              <Code className="mr-4 text-emerald-400" size={28} />
              <h3 className="text-3xl font-black text-white font-mono tracking-wider">SEND_MESSAGE</h3>
            </div>
            
            <Separator className="bg-emerald-500/20 mb-8" />
            
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-emerald-400 mb-3 font-mono tracking-[0.1em]">FIRST_NAME *</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all font-mono placeholder:text-slate-500"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-emerald-400 mb-3 font-mono tracking-[0.1em]">LAST_NAME *</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all font-mono placeholder:text-slate-500"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black text-emerald-400 mb-3 font-mono tracking-[0.1em]">EMAIL_ADDRESS *</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all font-mono placeholder:text-slate-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-black text-emerald-400 mb-3 font-mono tracking-[0.1em]">PHONE_NUMBER</label>
                <input 
                  type="tel" 
                  className="w-full px-5 py-4 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all font-mono placeholder:text-slate-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-emerald-400 mb-3 font-mono tracking-[0.1em]">SERVICE_NEEDED</label>
                <select className="w-full px-5 py-4 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all font-mono">
                  <option>Select a service</option>
                  <option>Game Development</option>
                  <option>Mobile Applications</option>
                  <option>Web Development</option>
                  <option>Custom Software</option>
                  <option>Database Solutions</option>
                  <option>Cybersecurity</option>
                  <option>Cloud Services</option>
                  <option>Digital Publishing</option>
                  <option>Content Creation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black text-emerald-400 mb-3 font-mono tracking-[0.1em]">PROJECT_BUDGET</label>
                <select className="w-full px-5 py-4 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all font-mono">
                  <option>Select budget range</option>
                  <option>Under $5,000</option>
                  <option>$5,000 - $15,000</option>
                  <option>$15,000 - $30,000</option>
                  <option>$30,000 - $50,000</option>
                  <option>$50,000+</option>
                  <option>Enterprise Level</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black text-emerald-400 mb-3 font-mono tracking-[0.1em]">PROJECT_DETAILS *</label>
                <textarea 
                  rows={6}
                  className="w-full px-5 py-4 bg-slate-900/60 border border-slate-600/50 text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none font-mono placeholder:text-slate-500"
                  placeholder="Tell us about your project requirements, timeline, and any specific technologies you'd like us to use..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black py-5 px-8 font-black transition-all duration-300 font-mono tracking-[0.1em] hover:from-emerald-600 hover:to-cyan-600 flex items-center justify-center group hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/25"
              >
                SEND_MESSAGE
                <Send className="ml-4 group-hover:translate-x-1 transition-transform" size={22} />
              </button>
            </form>
          </div>

          {/* Contact Information & Actions */}
          <div className="space-y-10">
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 p-10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center mb-6">
                <Zap className="mr-4 text-emerald-400" size={28} />
                <h3 className="text-3xl font-black text-white font-mono tracking-wider">GET_IN_TOUCH</h3>
              </div>
              
              <Separator className="bg-emerald-500/20 mb-8" />
              
              <p className="text-lg text-slate-300 mb-10 font-mono leading-relaxed">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll 
                respond as soon as possible.
              </p>

              {/* Quick Actions */}
              <div className="space-y-5 mb-10">
                <button className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-black py-5 px-8 transition-all duration-300 font-black font-mono tracking-[0.1em] hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/25 group">
                  <MessageCircle className="mr-4 group-hover:scale-110 transition-transform" size={22} />
                  START_LIVE_CHAT
                </button>
                
                <button className="w-full flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-black py-5 px-8 transition-all duration-300 font-black font-mono tracking-[0.1em] hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 group">
                  <Calendar className="mr-4 group-hover:scale-110 transition-transform" size={22} />
                  SCHEDULE_MEETING
                </button>

                <button className="w-full flex items-center justify-center border-2 border-slate-600 hover:border-emerald-400 bg-slate-800/40 hover:bg-slate-800/60 text-slate-300 hover:text-emerald-400 py-5 px-8 transition-all duration-300 font-black font-mono tracking-[0.1em] hover:scale-[1.02] group">
                  <Phone className="mr-4 group-hover:scale-110 transition-transform" size={22} />
                  REQUEST_CALLBACK
                </button>
              </div>

              <Separator className="bg-emerald-500/20 mb-8" />

              {/* Office Hours */}
              <div className="bg-slate-900/60 border border-emerald-500/30 p-8">
                <h4 className="font-black text-white mb-6 flex items-center font-mono tracking-[0.1em] text-lg">
                  <Clock className="mr-3 text-emerald-400" size={22} />
                  OFFICE_HOURS
                </h4>
                <div className="space-y-3 font-mono text-base">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">MONDAY - FRIDAY</span>
                    <span className="font-bold text-emerald-400">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">SATURDAY</span>
                    <span className="font-bold text-emerald-400">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">SUNDAY</span>
                    <span className="font-bold text-slate-500">CLOSED</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-emerald-500/30" />

            {/* Multiple Offices */}
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-600/50 p-10 hover:border-emerald-500/30 transition-all duration-300">
              <h4 className="font-black text-white mb-8 font-mono tracking-[0.1em] text-2xl">OUR_OFFICES</h4>
              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="bg-slate-900/60 border border-slate-700/50 p-8 hover:border-emerald-500/30 transition-all duration-300 hover:scale-[1.02] group">
                    <h5 className="font-black text-xl text-emerald-400 mb-5 font-mono tracking-[0.1em] group-hover:text-emerald-300 transition-colors">{office.city}</h5>
                    <div className="space-y-3 font-mono text-base">
                      <div className="flex items-start">
                        <MapPin className="text-slate-500 mr-4 mt-1 group-hover:text-emerald-400 transition-colors" size={18} />
                        <span className="text-slate-300">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="text-slate-500 mr-4 group-hover:text-emerald-400 transition-colors" size={18} />
                        <span className="text-slate-300">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-slate-500 mr-4 group-hover:text-emerald-400 transition-colors" size={18} />
                        <span className="text-cyan-300 group-hover:text-cyan-200 transition-colors">{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
