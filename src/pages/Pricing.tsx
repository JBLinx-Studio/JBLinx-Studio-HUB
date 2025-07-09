
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, ArrowRight, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "STARTER",
      icon: Zap,
      price: "$999",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "Custom Web Application",
        "Responsive Design",
        "Basic SEO Optimization",
        "3 Months Support",
        "Source Code Included",
        "Mobile Optimization"
      ],
      popular: false,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "PROFESSIONAL",
      icon: Crown,
      price: "$2,499",
      period: "per project",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Everything in Starter",
        "Advanced Animations",
        "Database Integration",
        "Payment Processing",
        "6 Months Support",
        "Performance Optimization",
        "Analytics Integration",
        "Admin Dashboard"
      ],
      popular: true,
      color: "from-emerald-500 to-cyan-500"
    },
    {
      name: "ENTERPRISE",
      icon: Rocket,
      price: "$5,999",
      period: "per project",
      description: "Complete solution for large-scale applications",
      features: [
        "Everything in Professional",
        "Custom Game Development",
        "Advanced Backend Systems",
        "Third-party Integrations",
        "12 Months Support",
        "Scalable Architecture",
        "Security Auditing",
        "Dedicated Project Manager",
        "Priority Support"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
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
                  PRICING_PLANS
                </span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-8"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 font-mono tracking-tight">
                CHOOSE YOUR PLAN
              </h1>
              
              <p className="text-xl text-slate-300 mb-12 leading-relaxed font-mono max-w-3xl mx-auto">
                Transparent pricing for every project size. No hidden fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => {
                  const IconComponent = plan.icon;
                  return (
                    <div
                      key={index}
                      className={`relative bg-slate-800 border ${
                        plan.popular ? 'border-emerald-400' : 'border-slate-700'
                      } overflow-hidden hover:border-emerald-400/50 transition-all group`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black text-center py-2">
                          <span className="font-black text-xs font-mono tracking-wider">
                            MOST_POPULAR
                          </span>
                        </div>
                      )}
                      
                      <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                        <div className="flex items-center mb-6">
                          <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} flex items-center justify-center mr-4`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-black text-white font-mono">
                              {plan.name}
                            </h3>
                            <p className="text-slate-400 font-mono text-sm">
                              {plan.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="mb-8">
                          <div className="flex items-baseline">
                            <span className="text-4xl font-black text-white font-mono">
                              {plan.price}
                            </span>
                            <span className="text-slate-400 font-mono text-sm ml-2">
                              {plan.period}
                            </span>
                          </div>
                        </div>
                        
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-300 font-mono text-sm">
                              <Check className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 font-black text-sm font-mono tracking-wider hover:scale-105 transition-transform group/btn flex items-center justify-center space-x-2`}>
                          <span className="group-hover/btn:opacity-0 transition-opacity">
                            GET_STARTED
                          </span>
                          <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity absolute">
                            &gt;_ GET_STARTED
                          </span>
                          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-black border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                FAQ
              </span>
              <h2 className="text-4xl font-black text-white mb-12 font-mono">
                QUESTIONS? WE HAVE ANSWERS
              </h2>
              
              <div className="text-slate-300 font-mono space-y-4">
                <p>Need a custom quote? Contact us for personalized pricing.</p>
                <div className="flex items-center justify-center space-x-2 text-emerald-400 text-sm group cursor-pointer">
                  <span className="group-hover:opacity-0 transition-opacity">CONTACT_US</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute">
                    &gt;_ CONTACT_US
                  </span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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

export default Pricing;
