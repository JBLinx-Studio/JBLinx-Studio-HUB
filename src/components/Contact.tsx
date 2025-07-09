
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock, Globe, Terminal, Code, Zap } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-orange-500/5 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800 border border-emerald-500/30 text-emerald-400 px-6 py-3 mb-6">
            <Terminal size={16} className="mr-3" />
            <span className="font-black text-xs font-mono tracking-widest">CONTACT_US</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 font-mono tracking-wider">
            LET'S START YOUR NEXT
            <span className="block text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text">
              DIGITAL JOURNEY
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto font-mono leading-relaxed">
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss 
            how we can help bring your vision to life with cutting-edge technology solutions.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className={`bg-slate-900 border ${method.borderColor} p-6 hover:bg-slate-800 transition-all duration-300 group hover:scale-105`}>
              <div className={`w-12 h-12 bg-gradient-to-r ${method.color} border ${method.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="text-emerald-400" size={20} />
              </div>
              <h3 className="font-black text-emerald-400 mb-2 font-mono text-sm tracking-widest">{method.title}</h3>
              <p className="text-slate-500 text-xs mb-3 font-mono">{method.description}</p>
              <p className="text-cyan-400 font-bold font-mono text-sm">{method.contact}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-700 p-8">
            <h3 className="text-2xl font-black text-white mb-6 font-mono tracking-wider flex items-center">
              <Code className="mr-3 text-emerald-400" size={24} />
              SEND_MESSAGE
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-black text-emerald-400 mb-2 font-mono tracking-wider">FIRST_NAME *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white focus:border-emerald-400 focus:outline-none transition-all font-mono"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-black text-emerald-400 mb-2 font-mono tracking-wider">LAST_NAME *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white focus:border-emerald-400 focus:outline-none transition-all font-mono"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black text-emerald-400 mb-2 font-mono tracking-wider">EMAIL_ADDRESS *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white focus:border-emerald-400 focus:outline-none transition-all font-mono"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-black text-emerald-400 mb-2 font-mono tracking-wider">PHONE_NUMBER</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white focus:border-emerald-400 focus:outline-none transition-all font-mono"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-emerald-400 mb-2 font-mono tracking-wider">SERVICE_NEEDED</label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white focus:border-emerald-400 focus:outline-none transition-all font-mono">
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
                <label className="block text-sm font-black text-emerald-400 mb-2 font-mono tracking-wider">PROJECT_BUDGET</label>
                <select className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white focus:border-emerald-400 focus:outline-none transition-all font-mono">
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
                <label className="block text-sm font-black text-emerald-400 mb-2 font-mono tracking-wider">PROJECT_DETAILS *</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white focus:border-emerald-400 focus:outline-none transition-all resize-none font-mono"
                  placeholder="Tell us about your project requirements, timeline, and any specific technologies you'd like us to use..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black py-4 px-6 font-black transition-all duration-300 font-mono tracking-wider hover:from-emerald-600 hover:to-cyan-600 flex items-center justify-center group hover:scale-105"
              >
                SEND_MESSAGE
                <Send className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-white mb-6 font-mono tracking-wider flex items-center">
                <Zap className="mr-3 text-emerald-400" size={24} />
                GET_IN_TOUCH
              </h3>
              <p className="text-lg text-slate-400 mb-8 font-mono leading-relaxed">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll 
                respond as soon as possible.
              </p>

              {/* Quick Actions */}
              <div className="space-y-4 mb-8">
                <button className="w-full flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-black py-4 px-6 transition-colors font-black font-mono tracking-wider hover:scale-105 duration-300">
                  <MessageCircle className="mr-3" size={20} />
                  START_LIVE_CHAT
                </button>
                
                <button className="w-full flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-black py-4 px-6 transition-colors font-black font-mono tracking-wider hover:scale-105 duration-300">
                  <Calendar className="mr-3" size={20} />
                  SCHEDULE_MEETING
                </button>

                <button className="w-full flex items-center justify-center border-2 border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 py-4 px-6 transition-colors font-black font-mono tracking-wider hover:scale-105 duration-300">
                  <Phone className="mr-3" size={20} />
                  REQUEST_CALLBACK
                </button>
              </div>

              {/* Office Hours */}
              <div className="bg-slate-900 border border-emerald-500/30 p-6">
                <h4 className="font-black text-white mb-4 flex items-center font-mono tracking-wider">
                  <Clock className="mr-3 text-emerald-400" size={20} />
                  OFFICE_HOURS
                </h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-400">MONDAY - FRIDAY</span>
                    <span className="font-bold text-emerald-400">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">SATURDAY</span>
                    <span className="font-bold text-emerald-400">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">SUNDAY</span>
                    <span className="font-bold text-slate-400">CLOSED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Multiple Offices */}
            <div>
              <h4 className="font-black text-white mb-6 font-mono tracking-wider">OUR_OFFICES</h4>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-700 p-6 hover:border-emerald-500/30 transition-all duration-300 hover:scale-105">
                    <h5 className="font-black text-lg text-emerald-400 mb-3 font-mono tracking-wider">{office.city}</h5>
                    <div className="space-y-2 text-sm font-mono">
                      <div className="flex items-start">
                        <MapPin className="text-slate-500 mr-3 mt-0.5" size={16} />
                        <span className="text-slate-400">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="text-slate-500 mr-3" size={16} />
                        <span className="text-slate-400">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-slate-500 mr-3" size={16} />
                        <span className="text-cyan-400">{office.email}</span>
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
