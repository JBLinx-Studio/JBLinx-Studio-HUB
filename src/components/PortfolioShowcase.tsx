
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, Gamepad2, Code, Globe, Smartphone, Brain, Database } from 'lucide-react'

const portfolioProjects = {
  webapps: [
    {
      name: 'CodeFusion',
      description: 'Advanced code collaboration platform with real-time editing and AI assistance',
      tech: ['React', 'Node.js', 'WebSockets', 'AI'],
      status: 'Live',
      url: 'https://codefusion.jblinx.dev',
      github: 'https://github.com/JBLinx-Studio/CodeFusion',
      image: '/api/placeholder/400/250',
      category: 'Development Tools'
    },
    {
      name: 'VitalitySync',
      description: 'Comprehensive health tracking with analytics and personalized recommendations',
      tech: ['React', 'TypeScript', 'Charts.js', 'PWA'],
      status: 'Live',
      url: 'https://vitalitysync.jblinx.dev',
      github: 'https://github.com/JBLinx-Studio/VitalitySync',
      image: '/api/placeholder/400/250',
      category: 'Health & Wellness'
    },
    {
      name: 'TaskFlow Pro',
      description: 'AI-powered project management with workflow automation',
      tech: ['Next.js', 'AI/ML', 'PostgreSQL', 'Prisma'],
      status: 'Live',
      url: 'https://taskflow.jblinx.dev',
      github: 'https://github.com/JBLinx-Studio/TaskFlow',
      image: '/api/placeholder/400/250',
      category: 'Productivity'
    }
  ],
  games: [
    {
      name: 'Pixel Quest RPG',
      description: 'Classic-style RPG with modern mechanics and engaging storyline',
      tech: ['Unity', 'C#', 'Pixel Art', '2D'],
      status: 'In Development',
      url: 'https://pixelquest.jblinx.dev',
      github: 'https://github.com/JBLinx-Studio/PixelQuest',
      image: '/api/placeholder/400/250',
      category: 'RPG'
    },
    {
      name: 'Space Defender',
      description: 'Fast-paced space shooter with multiplayer capabilities',
      tech: ['Godot', 'GDScript', 'Multiplayer', '3D'],
      status: 'Beta',
      url: 'https://spacedefender.jblinx.dev',
      github: 'https://github.com/JBLinx-Studio/SpaceDefender',
      image: '/api/placeholder/400/250',
      category: 'Action'
    },
    {
      name: 'Mind Puzzle',
      description: 'Brain training puzzle game with progressive difficulty',
      tech: ['React Native', 'JavaScript', 'Mobile', 'Puzzles'],
      status: 'Live',
      url: 'https://mindpuzzle.jblinx.dev',
      github: 'https://github.com/JBLinx-Studio/MindPuzzle',
      image: '/api/placeholder/400/250',
      category: 'Puzzle'
    }
  ],
  programs: [
    {
      name: 'DevToolkit CLI',
      description: 'Command-line toolkit for developers with automation scripts',
      tech: ['Node.js', 'CLI', 'Automation', 'Scripts'],
      status: 'Live',
      url: 'https://npmjs.com/package/devtoolkit-cli',
      github: 'https://github.com/JBLinx-Studio/DevToolkit',
      image: '/api/placeholder/400/250',
      category: 'Developer Tools'
    },
    {
      name: 'File Organizer Pro',
      description: 'Smart file organization tool with AI-powered categorization',
      tech: ['Python', 'AI/ML', 'Desktop', 'Automation'],
      status: 'Live',
      url: 'https://fileorganizer.jblinx.dev',
      github: 'https://github.com/JBLinx-Studio/FileOrganizer',
      image: '/api/placeholder/400/250',
      category: 'Utilities'
    },
    {
      name: 'Code Analyzer',
      description: 'Static code analysis tool with security vulnerability detection',
      tech: ['Rust', 'Static Analysis', 'Security', 'CLI'],
      status: 'Beta',
      url: 'https://codeanalyzer.jblinx.dev',
      github: 'https://github.com/JBLinx-Studio/CodeAnalyzer',
      image: '/api/placeholder/400/250',
      category: 'Security Tools'
    }
  ]
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Live': return 'bg-green-500'
    case 'Beta': return 'bg-blue-500'
    case 'In Development': return 'bg-orange-500'
    default: return 'bg-gray-500'
  }
}

const getCategoryIcon = (category: string) => {
  const iconMap: { [key: string]: any } = {
    'Development Tools': Code,
    'Health & Wellness': Brain,
    'Productivity': Database,
    'RPG': Gamepad2,
    'Action': Gamepad2,
    'Puzzle': Gamepad2,
    'Developer Tools': Code,
    'Utilities': Code,
    'Security Tools': Code
  }
  return iconMap[category] || Code
}

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState('webapps')

  const renderProjectGrid = (projects: any[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => {
        const IconComponent = getCategoryIcon(project.category)
        return (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
            <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center">
                <IconComponent className="h-16 w-16 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Preview</p>
              </div>
            </div>
            
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <Badge className={`${getStatusColor(project.status)} text-white`}>
                  {project.status}
                </Badge>
              </div>
              <CardDescription className="text-sm">
                {project.category}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech: string, idx: number) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Complete Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of projects spanning web applications, games, and professional software tools
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="webapps" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Web Apps
              </TabsTrigger>
              <TabsTrigger value="games" className="flex items-center gap-2">
                <Gamepad2 className="h-4 w-4" />
                Games
              </TabsTrigger>
              <TabsTrigger value="programs" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Programs
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="webapps">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Web Applications</h3>
              <p className="text-muted-foreground">Professional web applications with subscription services</p>
            </div>
            {renderProjectGrid(portfolioProjects.webapps)}
          </TabsContent>

          <TabsContent value="games">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Games & Interactive Media</h3>
              <p className="text-muted-foreground">Engaging games across multiple platforms and genres</p>
            </div>
            {renderProjectGrid(portfolioProjects.games)}
          </TabsContent>

          <TabsContent value="programs">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">Software & Tools</h3>
              <p className="text-muted-foreground">Professional software tools and utilities for developers</p>
            </div>
            {renderProjectGrid(portfolioProjects.programs)}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more projects or collaborate on something new?
          </p>
          <Button size="lg">
            Contact Us for Custom Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
