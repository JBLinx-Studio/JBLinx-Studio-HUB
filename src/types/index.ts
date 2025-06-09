
export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: ProjectCategory
  createdAt: Date
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  pricing?: {
    basic: number
    premium: number
    enterprise: number
  }
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  tags: string[]
  readTime: number
}

export type ProjectCategory = 
  | 'web-development'
  | 'mobile-app'
  | 'ai-ml'
  | 'blockchain'
  | 'devops'
  | 'design'

export type ThemeMode = 'light' | 'dark' | 'system'
