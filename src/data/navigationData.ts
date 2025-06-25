
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
    name: 'Web Apps',
    href: '#apps',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Premium Applications',
        items: [
          { name: 'Analytics Dashboard', href: '/apps/analytics', description: 'Real-time data insights platform' },
          { name: 'Project Manager Pro', href: '/apps/projects', description: 'Advanced project management suite' },
          { name: 'Developer Tools', href: '/apps/devtools', description: 'Code optimization and debugging' },
          { name: 'Data Visualizer', href: '/apps/dataviz', description: 'Interactive charts and graphs' }
        ]
      },
      {
        title: 'Subscription Plans',
        items: [
          { name: 'Starter Plan', href: '/pricing', description: '$19/month - Essential features' },
          { name: 'Pro Plan', href: '/pricing', description: '$49/month - Advanced tools' },
          { name: 'Enterprise', href: '/pricing', description: '$99/month - Full access' },
          { name: 'Free Trial', href: '/trial', description: '14-day free access' }
        ]
      }
    ]
  },
  {
    name: 'Games',
    href: '#games',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Published Games',
        items: [
          { name: 'Survival Nexus', href: '/games/survival', description: 'Open-world survival adventure' },
          { name: 'Shadow Realm', href: '/games/horror', description: 'Psychological horror experience' },
          { name: 'Command Central', href: '/games/strategy', description: 'Real-time strategy warfare' },
          { name: 'All Games', href: '/games', description: 'Browse our complete portfolio' }
        ]
      },
      {
        title: 'Development',
        items: [
          { name: 'Game Dev Blog', href: '/blog/gamedev', description: 'Behind the scenes updates' },
          { name: 'Unity Assets', href: '/assets', description: 'Downloadable game components' },
          { name: 'Source Code', href: '/github', description: 'Open source projects' }
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
          { name: 'API Documentation', href: '/docs', description: 'Complete API reference' },
          { name: 'GitHub Repos', href: 'https://github.com/orgs/JBLinx-Studio/repositories', description: 'Open source projects' },
          { name: 'Code Examples', href: '/examples', description: 'Implementation guides' },
          { name: 'SDKs & Tools', href: '/tools', description: 'Development utilities' }
        ]
      },
      {
        title: 'Community',
        items: [
          { name: 'Discord Server', href: '/discord', description: 'Join our community' },
          { name: 'Developer Blog', href: '/blog/dev', description: 'Technical articles' },
          { name: 'Contribute', href: '/contribute', description: 'Help improve our tools' }
        ]
      }
    ]
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
