
export const mainServices = [
  {
    id: 'game-development',
    title: 'Game Development',
    description: 'Create immersive gaming experiences with cutting-edge technology',
    icon: 'Gamepad2',
    gradient: 'from-purple-600 via-purple-500 to-indigo-600',
    bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
    features: ['Unity & Unreal Engine', 'Cross-Platform Gaming', 'VR/AR Experiences', 'Multiplayer Integration'],
    stats: { projects: '25+', rating: '4.9', clients: '15+' },
    link: '/game-development',
    price: 'From $5,000',
    duration: '4-8 weeks',
    subcategories: [
      { name: 'Mobile Games', description: 'iOS & Android gaming apps' },
      { name: 'Web Games', description: 'Browser-based gaming experiences' },
      { name: 'VR Games', description: 'Virtual reality gaming' },
      { name: 'AR Games', description: 'Augmented reality experiences' }
    ]
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    description: 'Build responsive, scalable web applications with modern frameworks',
    icon: 'Monitor',
    gradient: 'from-blue-600 via-blue-500 to-cyan-600',
    bgImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    features: ['React & Next.js', 'Full-Stack Solutions', 'E-commerce Platforms', 'Progressive Web Apps'],
    stats: { projects: '40+', rating: '4.8', clients: '30+' },
    link: '/web-applications',
    price: 'From $3,000',
    duration: '3-6 weeks',
    subcategories: [
      { name: 'E-commerce', description: 'Online store solutions' },
      { name: 'SaaS Platforms', description: 'Software as a Service applications' },
      { name: 'Corporate Websites', description: 'Professional business websites' },
      { name: 'Portfolio Sites', description: 'Creative showcase websites' }
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Develop native and cross-platform mobile applications',
    icon: 'Smartphone',
    gradient: 'from-green-600 via-green-500 to-emerald-600',
    bgImage: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop',
    features: ['iOS & Android', 'Flutter & React Native', 'App Store Optimization', 'Performance Optimization'],
    stats: { projects: '20+', rating: '4.9', clients: '18+' },
    link: '/mobile-development',
    price: 'From $4,000',
    duration: '5-10 weeks',
    subcategories: [
      { name: 'Native iOS', description: 'Swift & SwiftUI applications' },
      { name: 'Native Android', description: 'Kotlin & Java applications' },
      { name: 'Cross-Platform', description: 'React Native & Flutter apps' },
      { name: 'Hybrid Apps', description: 'Cordova & Ionic applications' }
    ]
  },
  {
    id: 'digital-publishing',
    title: 'Digital Publishing',
    description: 'Comprehensive publishing services for books and digital content',
    icon: 'Book',
    gradient: 'from-orange-600 via-orange-500 to-red-600',
    bgImage: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop',
    features: ['Book Writing & Editing', 'E-book Creation', 'Content Strategy', 'Distribution Networks'],
    stats: { projects: '15+', rating: '4.7', clients: '12+' },
    link: '/digital-publishing',
    price: 'From $2,000',
    duration: '2-4 weeks',
    subcategories: [
      { name: 'Technical Books', description: 'Programming & tech guides' },
      { name: 'E-books', description: 'Digital book publishing' },
      { name: 'Documentation', description: 'Technical documentation' },
      { name: 'Tutorials', description: 'Step-by-step learning guides' }
    ]
  }
];

export const additionalServices = [
  {
    id: 'content-creation',
    title: 'Content Creation',
    icon: 'PenTool',
    description: 'Engaging blogs, articles, and dev logs',
    subcategories: [
      { name: 'Technical Writing', description: 'Code documentation & guides' },
      { name: 'Blog Management', description: 'Regular content updates' },
      { name: 'Dev Logs', description: 'Development progress updates' },
      { name: 'SEO Content', description: 'Search-optimized articles' }
    ]
  },
  {
    id: 'database-solutions',
    title: 'Database Solutions',
    icon: 'Database',
    description: 'Robust database architectures and management',
    subcategories: [
      { name: 'SQL Databases', description: 'PostgreSQL, MySQL, SQL Server' },
      { name: 'NoSQL Solutions', description: 'MongoDB, Firebase, DynamoDB' },
      { name: 'Data Migration', description: 'Seamless data transfers' },
      { name: 'Performance Tuning', description: 'Database optimization' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'Shield',
    description: 'Comprehensive security audits and protection',
    subcategories: [
      { name: 'Security Audits', description: 'Vulnerability assessments' },
      { name: 'Penetration Testing', description: 'Ethical hacking services' },
      { name: 'Compliance', description: 'GDPR, HIPAA, SOC2 compliance' },
      { name: 'Security Training', description: 'Team security education' }
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    icon: 'Cloud',
    description: 'Scalable cloud infrastructure solutions',
    subcategories: [
      { name: 'AWS Solutions', description: 'Amazon Web Services' },
      { name: 'Azure Platform', description: 'Microsoft Azure services' },
      { name: 'DevOps', description: 'CI/CD pipelines & automation' },
      { name: 'Cloud Migration', description: 'Move to cloud infrastructure' }
    ]
  }
];
