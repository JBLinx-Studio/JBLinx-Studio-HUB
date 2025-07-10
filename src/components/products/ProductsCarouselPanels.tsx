
import React from 'react';
import { Code, Heart, Building2, Smartphone, Globe, Database, Shield, Cpu } from 'lucide-react';
import SectionCarousel from '../common/SectionCarousel';

const ProductsCarouselPanels = () => {
  const productsPanels = [
    {
      id: 'web-development',
      title: 'Web Development',
      subtitle: 'Modern web solutions',
      icon: Globe,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-blue-400">
            <div className="font-semibold text-blue-400">React Ecosystem</div>
            <div className="text-sm">Next.js, TypeScript, TailwindCSS</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-cyan-400">
            <div className="font-semibold text-cyan-400">Full-Stack Apps</div>
            <div className="text-sm">End-to-end web applications</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-teal-400">
            <div className="font-semibold text-teal-400">Progressive Web Apps</div>
            <div className="text-sm">Offline-first experiences</div>
          </div>
        </div>
      )
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Applications',
      subtitle: 'Cross-platform solutions',
      icon: Smartphone,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-green-400">
            <div className="font-semibold text-green-400">React Native</div>
            <div className="text-sm">iOS & Android from one codebase</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-emerald-400">
            <div className="font-semibold text-emerald-400">Native Features</div>
            <div className="text-sm">Camera, GPS, push notifications</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-lime-400">
            <div className="font-semibold text-lime-400">App Store Ready</div>
            <div className="text-sm">Production deployment support</div>
          </div>
        </div>
      )
    },
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      subtitle: 'Business-grade systems',
      icon: Building2,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-purple-400">
            <div className="font-semibold text-purple-400">CRM Systems</div>
            <div className="text-sm">Customer relationship management</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-indigo-400">
            <div className="font-semibold text-indigo-400">ERP Solutions</div>
            <div className="text-sm">Enterprise resource planning</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-violet-400">
            <div className="font-semibold text-violet-400">Analytics Dashboards</div>
            <div className="text-sm">Real-time business insights</div>
          </div>
        </div>
      )
    },
    {
      id: 'health-wellness',
      title: 'Health & Wellness',
      subtitle: 'Digital health platforms',
      icon: Heart,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-red-400">
            <div className="font-semibold text-red-400">Fitness Tracking</div>
            <div className="text-sm">Comprehensive health monitoring</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-pink-400">
            <div className="font-semibold text-pink-400">Mental Health</div>
            <div className="text-sm">Meditation & wellness tools</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-rose-400">
            <div className="font-semibold text-rose-400">Telemedicine</div>
            <div className="text-sm">Remote healthcare solutions</div>
          </div>
        </div>
      )
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      subtitle: 'AI-powered insights',
      icon: Database,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-yellow-400">
            <div className="font-semibold text-yellow-400">Machine Learning</div>
            <div className="text-sm">Predictive analytics & automation</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-orange-400">
            <div className="font-semibold text-orange-400">Big Data Processing</div>
            <div className="text-sm">Large-scale data pipelines</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-amber-400">
            <div className="font-semibold text-amber-400">Real-time Dashboards</div>
            <div className="text-sm">Live data visualization</div>
          </div>
        </div>
      )
    },
    {
      id: 'security',
      title: 'Security & DevOps',
      subtitle: 'Infrastructure & protection',
      icon: Shield,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-blue-400">
            <div className="font-semibold text-blue-400">Cybersecurity</div>
            <div className="text-sm">Advanced threat protection</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-cyan-400">
            <div className="font-semibold text-cyan-400">CI/CD Pipelines</div>
            <div className="text-sm">Automated deployment systems</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-teal-400">
            <div className="font-semibold text-teal-400">Cloud Infrastructure</div>
            <div className="text-sm">Scalable cloud solutions</div>
          </div>
        </div>
      )
    }
  ];

  return <SectionCarousel panels={productsPanels} className="mt-6" />;
};

export default ProductsCarouselPanels;
