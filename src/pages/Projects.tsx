
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, Gamepad2, Code, Globe, Filter } from 'lucide-react'

const allProjects = [
  // Web Applications
  {
    id: '1',
    title: 'CodeFusion Platform',
    description: 'Advanced code collaboration platform with real-time editing, version control, and AI-assisted coding features',
    technologies: ['React', 'Node.js', 'WebSockets', 'AI', 'PostgreSQL'],
    liveUrl: 'https://codefusion.jblinx.dev',
    githubUrl: 'https://github.com/JBLinx-Studio/CodeFusion',
    featured: true,
    category: 'webapp',
    status: 'Live',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'VitalitySync Health',
    description: 'Comprehensive health and wellness tracking with analytics, goal setting, and personalized recommendations',
    technologies: ['React', 'TypeScript', 'Charts.js', 'PWA', 'Firebase'],
    liveUrl: 'https://vitalitysync.jblinx.dev',
    githubUrl: 'https://github.com/JBLinx-Studio/VitalitySync',
    featured: true,
    category: 'webapp',
    status: 'Live',
    createdAt: new Date('2024-02-20')
  },
  {
    id: '3',
    title: 'TaskFlow Pro',
    description: 'AI-powered project management with workflow automation and intelligent task prioritization',
    technologies: ['Next.js', 'AI/ML', 'PostgreSQL', 'Prisma', 'Vercel'],
    liveUrl: 'https://taskflow.jblinx.dev',
    githubUrl: 'https://github.com/JBLinx-Studio/TaskFlow',
    featured: false,
    category: 'webapp',
    status: 'Live',
    createdAt: new Date('2024-03-10')
  },
  
  // Games
  {
    id: '4',
    title: 'Pixel Quest RPG',
    description: 'Classic-style RPG adventure with modern mechanics, engaging storyline, and pixel art graphics',
    technologies: ['Unity', 'C#', 'Pixel Art', '2D Graphics', 'Steam'],
    liveUrl: 'https://pixelquest.jblinx.dev',
    githubUrl: 'https://github.com/JBLinx-Studio/PixelQuest',
    featured: true,
    category: 'game',
    status: 'In Development',
    createdAt: new Date('2024-04-05')
  },
  {
    id: '5',
    title: 'Space Defender',
    description: 'Fast-paced multiplayer space shooter with real-time combat and stunning 3D graphics',
    technologies: ['Godot', 'GDScript', 'Multiplayer', '3D Graphics', 'WebGL'],
    liveUrl: 'https://spacedefender.jblinx.dev',
    githubUrl: 'https://github.com/JBLinx-Studio/SpaceDefender',
    featured: false,
    category: 'game',
    status: 'Beta',
    createdAt: new Date('2024-05-15')
  },
  
  // Programs/Tools
  {
    id: '6',
    title: 'DevToolkit CLI',
    description: 'Comprehensive command-line toolkit for developers with automation scripts and utilities',
    technologies: ['Node.js', 'CLI', 'Automation', 'NPM', 'TypeScript'],
    liveUrl: 'https://npmjs.com/package/devtoolkit-cli',
    githubUrl: 'https://github.com/JBLinx-Studio/DevToolkit',
    featured: false,
    category: 'program',
    status: 'Live',
    createdAt: new Date('2024-06-01')
  },
  {
    id: '7',
    title: 'Code Analyzer Pro',
    description: 'Advanced static code analysis tool with security vulnerability detection and performance insights',
    technologies: ['Rust', 'Static Analysis', 'Security', 'CLI', 'WASM'],
    liveUrl: 'https://codeanalyzer.jblinx.dev',
    githubUrl: 'https://github.com/JBLinx-Studio/CodeAnalyzer',
    featured: true,
    category: 'program',
    status: 'Beta',
    createdAt: new Date('2024-07-10')
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Live': return 'bg-green-500'
    case 'Beta': return 'bg-blue-500'
    case 'In Development': return 'bg-orange-500'
    default: return 'bg-gray-500'
  }
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  const filteredProjects = allProjects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  )

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'recent') return b.createdAt.getTime() - a.createdAt.getTime()
    if (sortBy === 'featured') return b.featured ? 1 : -1
    return a.title.localeCompare(b.title)
  })

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Complete Project Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of web applications, games, and professional software tools
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="webapp" className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                Web
              </TabsTrigger>
              <TabsTrigger value="game" className="flex items-center gap-1">
                <Gamepad2 className="h-3 w-3" />
                Games
              </TabsTrigger>
              <TabsTrigger value="program" className="flex items-center gap-1">
                <Code className="h-3 w-3" />
                Tools
              </TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border rounded-md bg-background text-foreground"
              >
                <option value="recent">Most Recent</option>
                <option value="featured">Featured First</option>
                <option value="alphabetical">A-Z</option>
              </select>
            </div>
          </div>

          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                        {project.category === 'webapp' && <Globe className="h-8 w-8 text-primary" />}
                        {project.category === 'game' && <Gamepad2 className="h-8 w-8 text-primary" />}
                        {project.category === 'program' && <Code className="h-8 w-8 text-primary" />}
                      </div>
                      <p className="text-sm text-muted-foreground">Project Preview</p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        {project.featured && (
                          <Badge variant="secondary" className="text-xs">Featured</Badge>
                        )}
                        <Badge className={`${getStatusColor(project.status)} text-white text-xs`}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {sortedProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
