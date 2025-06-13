
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, Code, ArrowRight, Filter } from 'lucide-react'

const devLogs = [
  {
    id: '1',
    title: 'Building CodeFusion: Real-time Collaboration Challenges',
    excerpt: 'Deep dive into implementing WebSocket-based real-time editing with conflict resolution',
    content: '',
    project: 'CodeFusion',
    author: 'JBLinx Team',
    publishedAt: new Date('2024-01-15'),
    tags: ['WebSockets', 'Real-time', 'Collaboration'],
    readTime: 8,
    category: 'Development'
  },
  {
    id: '2',
    title: 'Game Development Update: Pixel Quest RPG Progress',
    excerpt: 'Weekly update on character system implementation and level design progress',
    content: '',
    project: 'Pixel Quest RPG',
    author: 'Game Dev Team',
    publishedAt: new Date('2024-02-01'),
    tags: ['Unity', 'RPG', 'Game Design'],
    readTime: 5,
    category: 'Game Development'
  },
  {
    id: '3',
    title: 'AI Integration in TaskFlow Pro: Lessons Learned',
    excerpt: 'How we integrated machine learning for intelligent task prioritization',
    content: '',
    project: 'TaskFlow Pro',
    author: 'AI Team',
    publishedAt: new Date('2024-02-10'),
    tags: ['AI/ML', 'Productivity', 'Automation'],
    readTime: 6,
    category: 'AI Development'
  }
]

export default function DevLogs() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Development', 'Game Development', 'AI Development', 'UI/UX']

  const filteredLogs = selectedCategory === 'All' 
    ? devLogs 
    : devLogs.filter(log => log.category === selectedCategory)

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Development Logs</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow our journey as we build amazing projects. Get insights into our development process, challenges, and solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLogs.map((log) => (
            <Card key={log.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{log.project}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {log.readTime} min
                  </div>
                </div>
                <CardTitle className="text-lg hover:text-primary cursor-pointer">
                  {log.title}
                </CardTitle>
                <CardDescription>{log.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {log.publishedAt.toLocaleDateString()}
                  </div>
                  <Badge variant="secondary">{log.category}</Badge>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {log.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Read Full Log
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">
            <Code className="w-4 w-4 mr-2" />
            Submit Your Dev Log
          </Button>
        </div>
      </div>
    </div>
  )
}
