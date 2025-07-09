
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const Privacy = () => {
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
                  PRIVACY_POLICY
                </span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-8"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-mono tracking-tight">
                YOUR PRIVACY MATTERS
              </h1>
              
              <p className="text-xl text-slate-300 mb-12 leading-relaxed font-mono max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring transparency in how we handle your data.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none">
                <div className="space-y-12">
                  <div className="bg-slate-800 border border-slate-700 p-8">
                    <div className="flex items-center mb-6">
                      <Shield className="w-8 h-8 text-emerald-400 mr-4" />
                      <h2 className="text-2xl font-black text-white font-mono">DATA_PROTECTION</h2>
                    </div>
                    <p className="text-slate-300 font-mono leading-relaxed">
                      We implement industry-standard security measures to protect your personal information. 
                      Your data is encrypted both in transit and at rest, and we regularly audit our security practices.
                    </p>
                  </div>

                  <div className="bg-slate-800 border border-slate-700 p-8">
                    <div className="flex items-center mb-6">
                      <Eye className="w-8 h-8 text-emerald-400 mr-4" />
                      <h2 className="text-2xl font-black text-white font-mono">INFORMATION_COLLECTION</h2>
                    </div>
                    <p className="text-slate-300 font-mono leading-relaxed">
                      We only collect information that is necessary to provide our services. This includes contact information, 
                      project requirements, and usage analytics to improve our platform.
                    </p>
                  </div>

                  <div className="bg-slate-800 border border-slate-700 p-8">
                    <div className="flex items-center mb-6">
                      <Lock className="w-8 h-8 text-emerald-400 mr-4" />
                      <h2 className="text-2xl font-black text-white font-mono">DATA_USAGE</h2>
                    </div>
                    <p className="text-slate-300 font-mono leading-relaxed">
                      Your information is used solely to deliver our services, communicate with you about projects, 
                      and improve our offerings. We never sell or share your data with third parties without your consent.
                    </p>
                  </div>

                  <div className="bg-slate-800 border border-slate-700 p-8">
                    <div className="flex items-center mb-6">
                      <Users className="w-8 h-8 text-emerald-400 mr-4" />
                      <h2 className="text-2xl font-black text-white font-mono">YOUR_RIGHTS</h2>
                    </div>
                    <p className="text-slate-300 font-mono leading-relaxed">
                      You have the right to access, update, or delete your personal information at any time. 
                      Contact us to exercise these rights or if you have any questions about our privacy practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
