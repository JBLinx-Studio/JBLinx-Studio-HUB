
interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

interface DropdownCategory {
  title: string;
  items: DropdownItem[];
}

interface NavigationItem {
  name: string;
  href: string;
  type: 'link' | 'dropdown';
  categories?: DropdownCategory[];
}

export const navigationItems: NavigationItem[] = [
  {
    name: 'Solutions',
    href: '#solutions',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Game Development',
        items: [
          { name: 'Indie Games', href: '/games/indie', description: 'Creative independent gaming experiences' },
          { name: 'Mobile Games', href: '/games/mobile', description: 'Cross-platform mobile gaming solutions' },
          { name: 'Web Games', href: '/games/web', description: 'Browser-based interactive experiences' },
          { name: 'Game Engines', href: '/games/engines', description: 'Custom engine development & Unity expertise' }
        ]
      },
      {
        title: 'Web Applications', 
        items: [
          { name: 'SaaS Platforms', href: '/apps/saas', description: 'Scalable software-as-a-service solutions' },
          { name: 'Enterprise Apps', href: '/apps/enterprise', description: 'Business process automation tools' },
          { name: 'E-commerce', href: '/apps/ecommerce', description: 'Complete online retail platforms' },
          { name: 'Progressive Web Apps', href: '/apps/pwa', description: 'Native-like web experiences' }
        ]
      },
      {
        title: 'Development Services',
        items: [
          { name: 'Custom Development', href: '/services/custom', description: 'Tailored software solutions' },
          { name: 'API Integration', href: '/services/api', description: 'Third-party service connections' },
          { name: 'Cloud Architecture', href: '/services/cloud', description: 'Scalable infrastructure design' },
          { name: 'Technical Consulting', href: '/services/consulting', description: 'Strategic technology guidance' }
        ]
      }
    ]
  },
  {
    name: 'Resources',
    href: '#resources',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Learning Hub',
        items: [
          { name: 'Technical Blog', href: '/blog', description: 'Industry insights & tutorials' },
          { name: 'Case Studies', href: '/case-studies', description: 'Real-world project breakdowns' },
          { name: 'Code Examples', href: '/examples', description: 'Open-source implementations' },
          { name: 'Best Practices', href: '/guides', description: 'Development methodology guides' }
        ]
      },
      {
        title: 'Community',
        items: [
          { name: 'Developer Portal', href: 'https://github.com/orgs/JBLinx-Studio/repositories', description: 'Open source contributions' },
          { name: 'Discord Community', href: '/discord', description: 'Connect with fellow developers' },
          { name: 'Newsletter', href: '/newsletter', description: 'Weekly tech updates & insights' },
          { name: 'Events & Workshops', href: '/events', description: 'Live coding sessions & meetups' }
        ]
      }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    type: 'link' as const
  },
  {
    name: 'Pricing',
    href: '/pricing',
    type: 'link' as const
  }
];
