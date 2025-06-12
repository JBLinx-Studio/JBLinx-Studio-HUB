
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and admin dashboard',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '/api/placeholder/400/250',
    liveUrl: '#',
    githubUrl: '#',
    status: 'Completed'
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Plaid API'],
    image: '/api/placeholder/400/250',
    liveUrl: '#',
    githubUrl: '#',
    status: 'In Progress'
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Real-time analytics dashboard with machine learning insights',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
    image: '/api/placeholder/400/250',
    liveUrl: '#',
    githubUrl: '#',
    status: 'Planning'
  }
]

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our latest work and innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl font-bold text-primary">{project.title.charAt(0)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Project Preview</p>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant={project.status === 'Completed' ? 'default' : project.status === 'In Progress' ? 'secondary' : 'outline'}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
