
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, Mail, Phone, Clock, ArrowRight, HelpCircle, Book, Users } from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "LIVE_CHAT",
      description: "Get instant help from our support team",
      availability: "Mon-Fri 9AM-6PM PST",
      action: "START_CHAT",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Mail,
      title: "EMAIL_SUPPORT",
      description: "Detailed technical assistance via email",
      availability: "24-48 hours response",
      action: "SEND_EMAIL",
      color: "from-emerald-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "PHONE_SUPPORT",
      description: "Direct phone support for urgent issues",
      availability: "Mon-Fri 9AM-5PM PST",
      action: "CALL_NOW",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const resources = [
    {
      icon: Book,
      title: "DOCUMENTATION",
      description: "Comprehensive guides and API references",
      link: "/docs"
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Frequently asked questions and solutions",
      link: "/faq"
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description: "Connect with other developers and users",
      link: "/community"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  SUPPORT_CENTER
                </span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-8"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-mono tracking-tight">
                WE'RE HERE TO HELP
              </h1>
              
              <p className="text-xl text-slate-300 mb-12 leading-relaxed font-mono max-w-3xl mx-auto">
                Get the support you need, when you need it. Our expert team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  GET_HELP
                </span>
                <h2 className="text-4xl font-black text-white font-mono">
                  CHOOSE YOUR SUPPORT CHANNEL
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {supportOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800 border border-slate-700 p-8 hover:border-emerald-400/50 transition-all group"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${option.color} flex items-center justify-center mb-6`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-black text-white mb-4 font-mono">
                        {option.title}
                      </h3>
                      
                      <p className="text-slate-300 font-mono text-sm mb-4">
                        {option.description}
                      </p>
                      
                      <div className="flex items-center text-emerald-400 font-mono text-xs mb-6">
                        <Clock size={14} className="mr-2" />
                        {option.availability}
                      </div>
                      
                      <button className={`w-full bg-gradient-to-r ${option.color} text-white py-3 font-black text-sm font-mono tracking-wider hover:scale-105 transition-transform group/btn flex items-center justify-center space-x-2`}>
                        <span className="group-hover/btn:opacity-0 transition-opacity">
                          {option.action}
                        </span>
                        <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity absolute">
                          &gt;_ {option.action}
                        </span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 bg-black border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  RESOURCES
                </span>
                <h2 className="text-4xl font-black text-white font-mono">
                  SELF-HELP RESOURCES
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {resources.map((resource, index) => {
                  const IconComponent = resource.icon;
                  return (
                    <a
                      key={index}
                      href={resource.link}
                      className="bg-slate-900 border border-slate-700 p-6 hover:border-emerald-400/50 transition-all group block"
                    >
                      <IconComponent className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                      
                      <h3 className="text-lg font-black text-white mb-2 font-mono">
                        {resource.title}
                      </h3>
                      
                      <p className="text-slate-300 font-mono text-sm mb-4">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center text-emerald-400 font-mono text-sm group">
                        <span className="group-hover:opacity-0 transition-opacity">EXPLORE</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute">
                          &gt;_ EXPLORE
                        </span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
