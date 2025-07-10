
import React from 'react';
import { Code, Book, Smartphone, Zap, Download, Star, Package, Globe, Database, Terminal } from 'lucide-react';

export const ProductsCarouselContent = () => {
  const carouselPanels = [
    {
      id: 'web-templates',
      title: 'WEB TEMPLATES',
      icon: Globe,
      color: 'text-blue-400',
      products: [
        { name: 'E-commerce Starter', rating: '4.9', downloads: '15.2k', price: '$59.99', tech: 'Next.js + Stripe', features: ['Payment Integration', 'Admin Panel', 'SEO Optimized'] },
        { name: 'SaaS Dashboard Kit', rating: '4.8', downloads: '12.8k', price: '$49.99', tech: 'React + TypeScript', features: ['Auth System', 'Analytics', 'Billing'] },
        { name: 'Portfolio Template Pro', rating: '4.9', downloads: '8.3k', price: '$29.99', tech: 'React + Tailwind', features: ['Responsive Design', 'Contact Forms', 'Gallery'] }
      ]
    },
    {
      id: 'backend-templates',
      title: 'BACKEND SOLUTIONS',
      icon: Database,
      color: 'text-green-400',
      products: [
        { name: 'REST API Boilerplate', rating: '4.9', downloads: '9.7k', price: '$39.99', tech: 'Node.js + Express', features: ['JWT Auth', 'Rate Limiting', 'Docker Ready'] },
        { name: 'GraphQL Server Kit', rating: '4.8', downloads: '7.2k', price: '$44.99', tech: 'Apollo + Prisma', features: ['Schema Generation', 'Caching', 'Subscriptions'] },
        { name: 'Microservices Template', rating: '4.9', downloads: '6.1k', price: '$69.99', tech: 'Docker + K8s', features: ['Service Mesh', 'Load Balancing', 'Monitoring'] }
      ]
    },
    {
      id: 'mobile-templates',
      title: 'MOBILE APPS',
      icon: Smartphone,
      color: 'text-purple-400',
      products: [
        { name: 'Social Media App', rating: '4.9', downloads: '11.3k', price: '$54.99', tech: 'React Native', features: ['Real-time Chat', 'Media Upload', 'Push Notifications'] },
        { name: 'Fitness Tracker Pro', rating: '4.8', downloads: '8.9k', price: '$39.99', tech: 'Flutter', features: ['Health Integration', 'Workout Plans', 'Progress Tracking'] },
        { name: 'Food Delivery App', rating: '4.7', downloads: '9.5k', price: '$64.99', tech: 'React Native', features: ['GPS Tracking', 'Payment Gateway', 'Admin Dashboard'] }
      ]
    },
    {
      id: 'ebooks-guides',
      title: 'LEARNING CONTENT',
      icon: Book,
      color: 'text-orange-400',
      products: [
        { name: 'React Mastery Guide', rating: '5.0', downloads: '18.2k', price: '$29.99', tech: '400+ Pages', features: ['Code Examples', 'Video Tutorials', 'Project Templates'] },
        { name: 'Backend Architecture Bible', rating: '4.9', downloads: '14.7k', price: '$39.99', tech: '500+ Pages', features: ['System Design', 'Best Practices', 'Case Studies'] },
        { name: 'Mobile Dev Handbook', rating: '4.8', downloads: '12.1k', price: '$34.99', tech: '350+ Pages', features: ['Cross-platform', 'Performance Tips', 'Deployment Guide'] }
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
              {panel.products.map((product, index) => (
                <div key={index} className="bg-slate-900/80 border border-slate-600 hover:border-cyan-400/50 transition-all duration-300 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-white font-black text-base font-mono mb-1">{product.name}</h4>
                      <div className="text-cyan-400 text-sm font-bold mb-2">{product.tech}</div>
                      <div className="flex items-center space-x-4 text-sm text-slate-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{product.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{product.downloads}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-green-400 font-black text-lg">{product.price}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.map((feature, fIndex) => (
                      <span key={fIndex} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 font-black text-sm transition-colors">
                    GET PRODUCT
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
