
import React from 'react';
import { Monitor, Users, BarChart3, ShoppingCart, Download, Star, Database, Globe, Cpu, Shield } from 'lucide-react';

export const WebAppsCarouselContent = () => {
  const carouselPanels = [
    {
      id: 'saas-platforms',
      title: 'SAAS PLATFORMS',
      icon: Monitor,
      color: 'text-blue-400',
      apps: [
        { name: 'ProjectFlow Enterprise', rating: '4.9', users: '1200+ companies', price: '$49/month', features: ['Team Collaboration', 'Advanced Reporting', 'API Access', 'Custom Workflows'] },
        { name: 'CustomerHub Pro', rating: '4.8', users: '800+ businesses', price: '$39/month', features: ['CRM Integration', 'Support Tickets', 'Live Chat', 'Analytics'] },
        { name: 'InvoiceForge Plus', rating: '4.9', users: '650+ freelancers', price: '$19/month', features: ['Automated Billing', 'Tax Calculation', 'Multi-currency', 'Reports'] }
      ]
    },
    {
      id: 'ecommerce-solutions',
      title: 'E-COMMERCE SOLUTIONS',
      icon: ShoppingCart,
      color: 'text-green-400',
      apps: [
        { name: 'ShopBuilder Pro', rating: '4.9', users: '450+ stores', price: '$79/month', features: ['Multi-vendor', 'Inventory Management', 'Payment Gateway', 'SEO Tools'] },
        { name: 'MarketPlace Elite', rating: '4.8', users: '320+ vendors', price: '$99/month', features: ['Vendor Dashboard', 'Commission System', 'Order Management', 'Analytics'] },
        { name: 'DropShip Master', rating: '4.7', users: '280+ retailers', price: '$59/month', features: ['Supplier Integration', 'Auto-fulfillment', 'Profit Calculator', 'Marketing Tools'] }
      ]
    },
    {
      id: 'analytics-platforms',
      title: 'ANALYTICS & BI',
      icon: BarChart3,
      color: 'text-purple-400',
      apps: [
        { name: 'DataViz Studio Pro', rating: '4.9', users: '600+ analysts', price: '$129/month', features: ['Custom Dashboards', 'Real-time Data', 'AI Insights', 'Export Tools'] },
        { name: 'MetricsFlow Enterprise', rating: '4.8', users: '400+ teams', price: '$89/month', features: ['KPI Tracking', 'Automated Reports', 'Team Collaboration', 'Data Alerts'] },
        { name: 'TrendScope Advanced', rating: '4.9', users: '350+ companies', price: '$149/month', features: ['Predictive Analytics', 'Machine Learning', 'API Integration', 'White-label'] }
      ]
    },
    {
      id: 'enterprise-tools',
      title: 'ENTERPRISE TOOLS',
      icon: Database,
      color: 'text-cyan-400',
      apps: [
        { name: 'WorkFlow Automation', rating: '4.9', users: '200+ enterprises', price: '$199/month', features: ['Process Builder', 'Integration Hub', 'Compliance Tools', 'Audit Trails'] },
        { name: 'SecureVault Enterprise', rating: '4.8', users: '150+ organizations', price: '$299/month', features: ['Data Encryption', 'Access Control', 'Backup Systems', 'Compliance'] },
        { name: 'CloudSync Pro', rating: '4.9', users: '300+ businesses', price: '$149/month', features: ['Multi-cloud Sync', 'Version Control', 'Team Access', 'Security'] }
      ]
    }
  ];

  return (
    <>
      {carouselPanels.map((panel) => {
        const IconComponent = panel.icon;
        return (
          <div key={panel.id} className="w-full bg-slate-800/95 border border-slate-700 p-6">
            <div className="flex items-center space-x-2 mb-6">
              <IconComponent className={`w-5 h-5 ${panel.color}`} />
              <span className={`${panel.color} font-black text-lg font-mono`}>{panel.title}</span>
            </div>
            
            <div className="space-y-4">
              {panel.apps.map((app, index) => (
                <div key={index} className="bg-slate-900/80 border border-slate-600 hover:border-blue-400/50 transition-all duration-300 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-white font-black text-base font-mono mb-1">{app.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{app.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{app.users}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-green-400 font-black text-lg">{app.price}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1 mb-4">
                    {app.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-1 text-xs text-slate-400">
                        <Shield className="w-3 h-3 text-blue-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 font-black text-sm transition-colors">
                    LAUNCH APP
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};
