
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email anytime",
      contact: "hello@jblinxstudio.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      contact: "+1 (555) 123-4567",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our HQ",
      contact: "123 Innovation Street, Tech City, TC 12345",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Follow Us",
      description: "Connect on social media",
      contact: "@jblinxstudio",
      color: "from-orange-500 to-red-500"
    }
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Innovation Street, NYC 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@jblinxstudio.com"
    },
    {
      city: "San Francisco",
      address: "456 Tech Valley, SF 94105",
      phone: "+1 (555) 987-6543",
      email: "sf@jblinxstudio.com"
    },
    {
      city: "London",
      address: "789 Digital Lane, London SW1A 1AA",
      phone: "+44 20 7946 0958",
      email: "london@jblinxstudio.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <MessageCircle size={16} className="mr-2" />
            <span className="text-sm font-semibold">CONTACT US</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Start Your Next
            <span className="block text-blue-600">Digital Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss 
            how we can help bring your vision to life with cutting-edge technology solutions.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <p className="text-blue-600 font-semibold">{method.contact}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Budget</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white">
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-white"
                  placeholder="Tell us about your project requirements, timeline, and any specific technologies you'd like us to use..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>
          </div>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-600 mb-8">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll 
                respond as soon as possible.
              </p>

              {/* Quick Actions */}
              <div className="space-y-4 mb-8">
                <button className="w-full flex items-center justify-center bg-blue-600 text-white py-4 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                  <MessageCircle className="mr-3" size={20} />
                  Start Live Chat
                </button>
                
                <button className="w-full flex items-center justify-center bg-green-600 text-white py-4 px-6 rounded-xl hover:bg-green-700 transition-colors shadow-lg">
                  <Calendar className="mr-3" size={20} />
                  Schedule a Meeting
                </button>

                <button className="w-full flex items-center justify-center border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors">
                  <Phone className="mr-3" size={20} />
                  Request a Call Back
                </button>
              </div>

              {/* Office Hours */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="mr-2 text-blue-600" size={20} />
                  Office Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Multiple Offices */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">Our Offices</h4>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <h5 className="font-bold text-lg text-gray-900 mb-3">{office.city}</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <MapPin className="text-gray-400 mr-2 mt-0.5" size={16} />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="text-gray-400 mr-2" size={16} />
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="text-gray-400 mr-2" size={16} />
                        <span className="text-blue-600">{office.email}</span>
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
