
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
    name: 'Products',
    href: '#products',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Games',
        items: [
          { name: 'All Games', href: '/games', description: 'Browse our complete game portfolio' },
          { name: 'Survival Horror', href: '/games/horror', description: 'Immersive horror experiences' },
          { name: 'RTS Strategy', href: '/games/strategy', description: 'Real-time strategic combat' },
          { name: 'Adventure RPG', href: '/games/rpg', description: 'Epic quest adventures' }
        ]
      },
      {
        title: 'Web Applications', 
        items: [
          { name: 'All Web Apps', href: '/apps', description: 'Browse our app collection' },
          { name: 'TaskFlow Pro', href: '/apps/taskflow', description: 'Advanced task management' },
          { name: 'DataViz Analytics', href: '/apps/dataviz', description: 'Business intelligence platform' },
          { name: 'ShopLink Commerce', href: '/apps/shoplink', description: 'E-commerce solutions' }
        ]
      },
      {
        title: 'Developer Tools',
        items: [
          { name: 'All Tools', href: '/tools', description: 'Open source repositories' },
          { name: 'FastAPI Template', href: '/tools/fastapi', description: 'Backend development starter' },
          { name: 'React Components', href: '/tools/react', description: 'Reusable UI components' },
          { name: 'Database Tools', href: '/tools/database', description: 'Migration and management' }
        ]
      }
    ]
  },
  {
    name: 'Learn',
    href: '#learn',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Learning',
        items: [
          { name: 'Development Blog', href: '/blog', description: 'Technical articles & tutorials' },
          { name: 'Game Dev Guides', href: '/guides/gamedev', description: 'Unity development tutorials' },
          { name: 'Web Dev Courses', href: '/guides/webdev', description: 'Modern web development' },
          { name: 'API Documentation', href: '/docs', description: 'Technical documentation' }
        ]
      },
      {
        title: 'Community',
        items: [
          { name: 'GitHub Repos', href: 'https://github.com/orgs/JBLinx-Studio/repositories', description: 'Open source projects' },
          { name: 'Developer Discord', href: '/discord', description: 'Join our community' },
          { name: 'Newsletter', href: '/newsletter', description: 'Weekly dev updates' },
          { name: 'Support Forum', href: '/support', description: 'Get help and answers' }
        ]
      }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    type: 'link' as const
  },
  {
    name: 'About',
    href: '/about',
    type: 'link' as const
  },
  {
    name: 'Contact',
    href: '#contact',
    type: 'link' as const
  }
];
