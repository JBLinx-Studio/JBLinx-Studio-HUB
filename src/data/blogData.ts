
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: 'devlogs' | 'games' | 'tutorials' | 'ebooks' | 'technical' | 'articles';
  type: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  downloads?: number;
  tags: string[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  downloadUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Unity Survival Game Development Guide",
    excerpt: "Complete walkthrough of building a survival game from scratch using Unity Engine with advanced mechanics and systems.",
    category: 'devlogs',
    type: 'Dev Log',
    author: 'JBLinx Team',
    date: '2024-01-15',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop',
    featured: true,
    downloads: 256,
    tags: ['Unity', 'C#', 'Game Development', 'Survival'],
    difficulty: 'Intermediate'
  },
  {
    id: 2,
    title: "FastAPI Backend Architecture eBook",
    excerpt: "Comprehensive 150-page guide to building scalable backend systems with FastAPI, MySQL, and modern deployment strategies.",
    category: 'ebooks',
    type: 'eBook',
    author: 'Backend Team',
    date: '2024-01-12',
    readTime: '45 min',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
    featured: true,
    downloads: 189,
    tags: ['FastAPI', 'Python', 'Backend', 'Architecture'],
    difficulty: 'Advanced',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: "Horror Game Psychology Tutorial",
    excerpt: "Understanding fear mechanics and implementing psychological triggers in horror game design for maximum player engagement.",
    category: 'tutorials',
    type: 'Tutorial',
    author: 'Game Designer',
    date: '2024-01-10',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
    featured: false,
    downloads: 134,
    tags: ['Game Design', 'Psychology', 'Horror', 'UX'],
    difficulty: 'Intermediate'
  },
  {
    id: 4,
    title: "React Component Library Mastery",
    excerpt: "Building production-ready, reusable UI components with React, TypeScript, and Tailwind CSS best practices.",
    category: 'technical',
    type: 'Technical Guide',
    author: 'Frontend Team',
    date: '2024-01-08',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    featured: true,
    downloads: 167,
    tags: ['React', 'TypeScript', 'Components', 'UI'],
    difficulty: 'Intermediate'
  },
  {
    id: 5,
    title: "Mobile Game Development with Flutter",
    excerpt: "Cross-platform mobile game development using Flutter and Dart with performance optimization techniques.",
    category: 'games',
    type: 'Game Project',
    author: 'Mobile Team',
    date: '2024-01-05',
    readTime: '20 min',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop',
    featured: false,
    downloads: 98,
    tags: ['Flutter', 'Mobile', 'Game Dev', 'Cross-platform'],
    difficulty: 'Advanced'
  },
  {
    id: 6,
    title: "RTS Game Multiplayer Systems",
    excerpt: "Implementing real-time strategy multiplayer networking, synchronization, and lag compensation techniques.",
    category: 'devlogs',
    type: 'Dev Log',
    author: 'Network Team',
    date: '2024-01-03',
    readTime: '18 min',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop',
    featured: false,
    downloads: 123,
    tags: ['RTS', 'Networking', 'Multiplayer', 'Systems'],
    difficulty: 'Advanced'
  },
  {
    id: 7,
    title: "Database Design Patterns eBook",
    excerpt: "Master database architecture with proven patterns, optimization techniques, and real-world case studies.",
    category: 'ebooks',
    type: 'eBook',
    author: 'Database Team',
    date: '2024-01-01',
    readTime: '60 min',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop',
    featured: false,
    downloads: 145,
    tags: ['Database', 'MySQL', 'Architecture', 'Performance'],
    difficulty: 'Advanced',
    downloadUrl: '#'
  },
  {
    id: 8,
    title: "Game AI Behavior Trees",
    excerpt: "Creating intelligent NPCs using behavior trees, state machines, and advanced AI decision-making systems.",
    category: 'articles',
    type: 'Article',
    author: 'AI Specialist',
    date: '2023-12-28',
    readTime: '14 min',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    featured: false,
    downloads: 89,
    tags: ['AI', 'Game Development', 'Behavior Trees', 'NPCs'],
    difficulty: 'Advanced'
  },
  {
    id: 9,
    title: "Progressive Web App Development",
    excerpt: "Building modern PWAs with offline capabilities, push notifications, and native app-like experiences.",
    category: 'tutorials',
    type: 'Tutorial',
    author: 'Web Team',
    date: '2023-12-25',
    readTime: '22 min',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
    featured: false,
    downloads: 156,
    tags: ['PWA', 'Web Development', 'Service Workers', 'Mobile'],
    difficulty: 'Intermediate'
  },
  {
    id: 10,
    title: "Indie Game Marketing Guide",
    excerpt: "Essential strategies for marketing your indie game on a budget, from social media to influencer outreach.",
    category: 'articles',
    type: 'Article',
    author: 'Marketing Team',
    date: '2023-12-20',
    readTime: '16 min',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop',
    featured: false,
    downloads: 203,
    tags: ['Marketing', 'Indie Games', 'Social Media', 'Strategy'],
    difficulty: 'Beginner'
  }
];

export const categories = [
  { id: 'all', name: 'All Content', icon: 'FileText', count: blogPosts.length, color: 'text-blue-400' },
  { id: 'devlogs', name: 'Dev Logs', icon: 'Code', count: blogPosts.filter(p => p.category === 'devlogs').length, color: 'text-green-400' },
  { id: 'games', name: 'Game Projects', icon: 'Gamepad2', count: blogPosts.filter(p => p.category === 'games').length, color: 'text-purple-400' },
  { id: 'tutorials', name: 'Tutorials', icon: 'BookOpen', count: blogPosts.filter(p => p.category === 'tutorials').length, color: 'text-orange-400' },
  { id: 'ebooks', name: 'eBooks', icon: 'Download', count: blogPosts.filter(p => p.category === 'ebooks').length, color: 'text-cyan-400' },
  { id: 'technical', name: 'Technical', icon: 'Database', count: blogPosts.filter(p => p.category === 'technical').length, color: 'text-red-400' },
  { id: 'articles', name: 'Articles', icon: 'Sparkles', count: blogPosts.filter(p => p.category === 'articles').length, color: 'text-yellow-400' }
];
