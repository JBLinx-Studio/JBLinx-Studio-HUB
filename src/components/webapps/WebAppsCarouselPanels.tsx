
import React from 'react';
import { Globe, Zap, Users, Palette, ShoppingCart, MessageSquare, Calendar, BarChart } from 'lucide-react';
import SectionCarousel from '../common/SectionCarousel';

const WebAppsCarouselPanels = () => {
  const webAppsPanels = [
    {
      id: 'ecommerce',
      title: 'E-Commerce Platforms',
      subtitle: 'Online retail solutions',
      icon: ShoppingCart,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-green-400">
            <div className="font-semibold text-green-400">Payment Integration</div>
            <div className="text-sm">Stripe, PayPal, crypto payments</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-emerald-400">
            <div className="font-semibold text-emerald-400">Inventory Management</div>
            <div className="text-sm">Real-time stock tracking</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-teal-400">
            <div className="font-semibold text-teal-400">Multi-vendor Support</div>
            <div className="text-sm">Marketplace functionality</div>
          </div>
        </div>
      )
    },
    {
      id: 'social-platforms',
      title: 'Social Platforms',
      subtitle: 'Community-driven apps',
      icon: Users,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-blue-400">
            <div className="font-semibold text-blue-400">Social Networking</div>
            <div className="text-sm">User profiles & connections</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-purple-400">
            <div className="font-semibold text-purple-400">Content Sharing</div>
            <div className="text-sm">Media uploads & streaming</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-pink-400">
            <div className="font-semibold text-pink-400">Community Features</div>
            <div className="text-sm">Groups, forums, messaging</div>
          </div>
        </div>
      )
    },
    {
      id: 'productivity',
      title: 'Productivity Tools',
      subtitle: 'Work & collaboration',
      icon: Calendar,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-yellow-400">
            <div className="font-semibold text-yellow-400">Project Management</div>
            <div className="text-sm">Task tracking & team coordination</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-orange-400">
            <div className="font-semibold text-orange-400">Document Collaboration</div>
            <div className="text-sm">Real-time editing & sharing</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-red-400">
            <div className="font-semibold text-red-400">Time Tracking</div>
            <div className="text-sm">Automated productivity metrics</div>
          </div>
        </div>
      )
    },
    {
      id: 'communication',
      title: 'Communication Apps',
      subtitle: 'Messaging & collaboration',
      icon: MessageSquare,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-cyan-400">
            <div className="font-semibold text-cyan-400">Real-time Chat</div>
            <div className="text-sm">Instant messaging & notifications</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-blue-400">
            <div className="font-semibold text-blue-400">Video Conferencing</div>
            <div className="text-sm">HD video calls & screen sharing</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-indigo-400">
            <div className="font-semibold text-indigo-400">File Sharing</div>
            <div className="text-sm">Secure document exchange</div>
          </div>
        </div>
      )
    },
    {
      id: 'creative-tools',
      title: 'Creative Tools',
      subtitle: 'Design & media apps',
      icon: Palette,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-purple-400">
            <div className="font-semibold text-purple-400">Image Editing</div>
            <div className="text-sm">Professional photo manipulation</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-pink-400">
            <div className="font-semibold text-pink-400">Vector Graphics</div>
            <div className="text-sm">Scalable design creation</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-rose-400">
            <div className="font-semibold text-rose-400">Animation Studio</div>
            <div className="text-sm">Motion graphics & video</div>
          </div>
        </div>
      )
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboards',
      subtitle: 'Data visualization',
      icon: BarChart,
      content: (
        <div className="space-y-3">
          <div className="bg-slate-700/50 p-3 border-l-2 border-green-400">
            <div className="font-semibold text-green-400">Custom Charts</div>
            <div className="text-sm">Interactive data visualization</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-emerald-400">
            <div className="font-semibold text-emerald-400">Real-time Metrics</div>
            <div className="text-sm">Live data monitoring</div>
          </div>
          <div className="bg-slate-700/50 p-3 border-l-2 border-teal-400">
            <div className="font-semibold text-teal-400">Report Generation</div>
            <div className="text-sm">Automated insights & exports</div>
          </div>
        </div>
      )
    }
  ];

  return <SectionCarousel panels={webAppsPanels} className="mt-6" />;
};

export default WebAppsCarouselPanels;
