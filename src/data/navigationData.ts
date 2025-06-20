
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
    href: '#home',
    type: 'link' as const
  },
  {
    name: 'Services',
    href: '#services',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Development',
        items: [
          { name: 'Game Development', href: '/game-development', description: 'Unity, Unreal & custom engines' },
          { name: 'Web Applications', href: '/web-applications', description: 'React, Vue, Angular solutions' },
          { name: 'Mobile Apps', href: '/mobile-development', description: 'iOS, Android & cross-platform' },
          { name: 'Desktop Software', href: '/desktop-development', description: 'Windows, Mac & Linux apps' }
        ]
      },
      {
        title: 'Publishing',
        items: [
          { name: 'Digital Books', href: '/digital-publishing', description: 'E-books & technical guides' },
          { name: 'Content Creation', href: '/content-creation', description: 'Blogs, articles & dev logs' },
          { name: 'Documentation', href: '/documentation', description: 'Technical documentation' },
          { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' }
        ]
      },
      {
        title: 'Infrastructure',
        items: [
          { name: 'Cloud Services', href: '/cloud-services', description: 'AWS, Azure & Google Cloud' },
          { name: 'Database Solutions', href: '/database-solutions', description: 'SQL & NoSQL databases' },
          { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security audits & protection' },
          { name: 'DevOps', href: '/devops', description: 'CI/CD & automation' }
        ]
      }
    ]
  },
  {
    name: 'Products',
    href: '#shop',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Digital Products',
        items: [
          { name: 'Games', href: '/shop/games', description: 'Our published games' },
          { name: 'Software Tools', href: '/shop/tools', description: 'Development utilities' },
          { name: 'Templates', href: '/shop/templates', description: 'Code & design templates' },
          { name: 'Assets', href: '/shop/assets', description: 'Graphics & audio assets' }
        ]
      },
      {
        title: 'Learning Materials',
        items: [
          { name: 'E-books', href: '/shop/books', description: 'Technical books & guides' },
          { name: 'Video Courses', href: '/shop/courses', description: 'Online learning content' },
          { name: 'Tutorials', href: '/shop/tutorials', description: 'Step-by-step tutorials' },
          { name: 'Documentation', href: '/shop/docs', description: 'Technical documentation' }
        ]
      }
    ]
  },
  {
    name: 'Resources',
    href: '#blog',
    type: 'dropdown' as const,
    categories: [
      {
        title: 'Content',
        items: [
          { name: 'Blog', href: '/blog', description: 'Latest articles & insights' },
          { name: 'Dev Logs', href: '/dev-logs', description: 'Development progress' },
          { name: 'Case Studies', href: '/case-studies', description: 'Project breakdowns' },
          { name: 'Whitepapers', href: '/whitepapers', description: 'Technical deep dives' }
        ]
      },
      {
        title: 'Community',
        items: [
          { name: 'Forums', href: '/forums', description: 'Developer discussions' },
          { name: 'Discord', href: '/discord', description: 'Real-time chat' },
          { name: 'Newsletter', href: '#newsletter', description: 'Weekly updates' },
          { name: 'Events', href: '/events', description: 'Workshops & meetups' }
        ]
      }
    ]
  },
  {
    name: 'Portfolio',
    href: '#portfolio',
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
