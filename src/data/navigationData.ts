
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
    name: 'Home',
    href: '/',
    type: 'link' as const
  },
  {
    name: 'Products',
    href: '#products',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Web Applications',
        items: [
          { name: 'Dashboard Suite', href: '/products/dashboard', description: 'Professional analytics dashboard' },
          { name: 'Developer Toolkit', href: '/products/devtools', description: 'Complete development suite' },
          { name: 'Data Platform', href: '/products/analytics', description: 'Enterprise data processing' },
          { name: 'Mobile Companion', href: '/products/mobile', description: 'Cross-platform mobile app' }
        ]
      },
      {
        title: 'Games',
        items: [
          { name: 'Survival World', href: '/games/survival', description: 'Open-world survival game' },
          { name: 'Horror Depths', href: '/games/horror', description: 'Psychological horror experience' },
          { name: 'Strategy Command', href: '/games/rts', description: 'Real-time strategy game' },
          { name: 'All Games', href: '/games', description: 'View our complete game portfolio' }
        ]
      }
    ]
  },
  {
    name: 'Premium',
    href: '#premium',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Subscription Plans',
        items: [
          { name: 'Starter Plan', href: '/premium/starter', description: '$19/month - Individual access' },
          { name: 'Professional Plan', href: '/premium/pro', description: '$49/month - Team features' },
          { name: 'Enterprise Plan', href: '/premium/enterprise', description: '$99/month - Custom solutions' },
          { name: 'Compare Plans', href: '/premium', description: 'See all features and pricing' }
        ]
      },
      {
        title: 'Enterprise',
        items: [
          { name: 'Custom Development', href: '/enterprise/custom', description: 'Tailored solutions' },
          { name: 'White Label', href: '/enterprise/whitelabel', description: 'Branded applications' },
          { name: 'API Access', href: '/enterprise/api', description: 'Direct API integration' },
          { name: 'Contact Sales', href: '/enterprise/contact', description: 'Discuss your needs' }
        ]
      }
    ]
  },
  {
    name: 'Developers',
    href: '#developers',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Resources',
        items: [
          { name: 'Documentation', href: '/docs', description: 'API docs & guides' },
          { name: 'GitHub Repos', href: 'https://github.com/orgs/JBLinx-Studio/repositories', description: 'Open source projects' },
          { name: 'Dev Blog', href: '/blog', description: 'Technical articles' },
          { name: 'Changelog', href: '/changelog', description: 'Latest updates' }
        ]
      },
      {
        title: 'Community',
        items: [
          { name: 'Discord', href: '/discord', description: 'Join our community' },
          { name: 'Forums', href: '/forums', description: 'Discussion & support' },
          { name: 'Feature Requests', href: '/feedback', description: 'Suggest improvements' },
          { name: 'Bug Reports', href: '/issues', description: 'Report problems' }
        ]
      }
    ]
  },
  {
    name: 'Blog',
    href: '/blog',
    type: 'link' as const
  },
  {
    name: 'About',
    href: '#about',
    type: 'link' as const
  },
  {
    name: 'Contact',
    href: '#contact',
    type: 'link' as const
  }
];
