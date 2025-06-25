
import React from 'react';
import { Crown, Zap, Shield, Star, Users, Globe, Code, Database } from 'lucide-react';

const PremiumServices = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$19',
      period: 'month',
      description: 'Perfect for individual developers and small projects',
      features: [
        'Access to 3 premium web apps',
        'Basic analytics dashboard',
        'Email support',
        'Standard API limits',
        'Monthly feature updates'
      ],
      popular: false,
      color: 'from-slate-600 to-slate-700',
      icon: Code
    },
    {
      name: 'Professional',
      price: '$49',
      period: 'month',
      description: 'Best value for growing teams and businesses',
      features: [
        'Access to ALL premium web apps',
        'Advanced analytics & reporting',
        'Priority support',
        'Unlimited API requests',
        'Early access to new features',
        'Team collaboration tools',
        'Custom integrations'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-600',
      icon: Crown
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'month',
      description: 'For large organizations with custom needs',
      features: [
        'Everything in Professional',
        'White-label solutions',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees',
        'On-premise deployment',
        'Advanced security features'
      ],
      popular: false,
      color: 'from-purple-600 to-pink-600',
      icon: Shield
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access our web applications from anywhere in the world with 99.9% uptime'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized applications with lightning-fast load times and responsive design'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security with encryption, backups, and compliance'
    },
    {
      icon: Users,
      title: 'Team Features',
      description: 'Collaboration tools, user management, and team analytics'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500/10 border border-yellow-500/30 px-6 py-3 mb-6" style={{ borderRadius: '8px' }}>
            <Crown className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-bold text-yellow-300 tracking-wide font-mono">PREMIUM SUBSCRIPTIONS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            UNLOCK <span className="text-yellow-400">PREMIUM</span> ACCESS
          </h2>
          
          <div className="w-24 h-0.5 bg-yellow-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Choose the perfect plan to access our premium web applications, 
            advanced features, and professional tools.
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative bg-slate-800 border overflow-hidden group transition-all duration-500 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400 shadow-lg shadow-cyan-500/25' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
                style={{ borderRadius: '12px' }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 text-sm font-bold">
                    <Star className="w-4 h-4 inline mr-1" />
                    MOST POPULAR
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`} style={{ borderRadius: '8px' }}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-black text-white mb-2 font-mono">
                    {plan.name}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 mt-2" style={{ borderRadius: '2px' }}></div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-3 font-bold text-white transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:shadow-lg' 
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`} style={{ borderRadius: '8px' }}>
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-slate-800 border border-slate-700 group-hover:border-cyan-400/50 mx-auto mb-4 flex items-center justify-center transition-all duration-300" style={{ borderRadius: '12px' }}>
                  <IconComponent className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 font-mono">
                  {benefit.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PremiumServices;
