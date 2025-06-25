
import React from 'react';
import { Check, Crown, Star, Zap, Shield, Code } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$19',
      period: 'month',
      description: 'Perfect for individual developers getting started',
      features: [
        'Access to 2 premium web apps',
        'Basic analytics dashboard',
        'Email support',
        'Monthly updates',
        'Standard API limits'
      ],
      popular: false,
      color: 'from-slate-600 to-slate-700',
      icon: Code,
      buttonText: 'Start Free Trial'
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
        'Weekly updates',
        'Unlimited API requests',
        'Team collaboration tools',
        'Custom integrations'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-600',
      icon: Crown,
      buttonText: 'Start Free Trial'
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
        'Advanced security features',
        'Custom training'
      ],
      popular: false,
      color: 'from-purple-600 to-pink-600',
      icon: Shield,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-slate-900 to-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-500/10 border border-yellow-500/30 backdrop-blur-sm px-8 py-4 rounded-2xl mb-8">
            <Crown className="w-6 h-6 mr-3 text-yellow-400" />
            <span className="text-yellow-300 font-bold text-lg tracking-wide">SUBSCRIPTION PLANS</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            CHOOSE YOUR <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">PLAN</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Access our premium web applications with flexible subscription plans designed for individuals, teams, and enterprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border overflow-hidden transition-all duration-500 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 ring-2 ring-cyan-400/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-0 left-0 right-0 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 text-sm font-bold">
                    <Star className="w-4 h-4 inline mr-2" />
                    MOST POPULAR
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Info */}
                  <h3 className="text-3xl font-black text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline mb-2">
                      <span className="text-5xl font-black text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-3 text-lg">/{plan.period}</span>
                    </div>
                    <p className="text-slate-500 text-sm">Billed monthly, cancel anytime</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 font-bold text-lg rounded-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105' 
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.buttonText}
                  </button>

                  {plan.popular && (
                    <p className="text-center text-slate-400 text-sm mt-4">
                      14-day free trial included
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Comparison */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white text-center mb-8">What's Included</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'High Performance',
                description: 'Lightning-fast loading times and optimized user experience across all applications.',
                color: 'text-yellow-400'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level encryption, secure data storage, and compliance with industry standards.',
                color: 'text-green-400'
              },
              {
                icon: Crown,
                title: 'Premium Support',
                description: 'Priority customer support with fast response times and dedicated assistance.',
                color: 'text-purple-400'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-slate-700/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
