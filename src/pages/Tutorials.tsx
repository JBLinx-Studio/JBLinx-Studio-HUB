
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Play, Clock, Users, Star, Filter, BookOpen } from 'lucide-react'

const tutorials = [
  {
    id: '1',
    title: 'Building a Real-time Chat App with React & WebSockets',
    description: 'Step-by-step tutorial on creating a modern chat application',
    instructor: 'JBLinx Team',
    duration: '2h 45m',
    level: 'Intermediate',
    students: 1250,
    rating: 4.8,
    category: 'Web Development',
    tags: ['React', 'WebSockets', 'Node.js'],
    thumbnail: '/api/placeholder/400/225',
    lessons: 12,
    type: 'Video Series',
    price: 'Free'
  },
  {
    id: '2',
    title: 'Unity Game Development: Creating Your First RPG',
    description: 'Complete guide to building an RPG game from scratch',
    instructor: 'Game Dev Team',
    duration: '4h 30m',
    level: 'Beginner',
    students: 890,
    rating: 4.9,
    category: 'Game Development',
    tags: ['Unity', 'C#', 'RPG', 'Game Design'],
    thumbnail: '/api/placeholder/400/225',
    lessons: 18,
    type: 'Video Series',
    price: '$19.99'
  },
  {
    id: '3',
    title: 'AI Integration with OpenAI API',
    description: 'Learn to integrate AI capabilities into your applications',
    instructor: 'AI Research Team',
    duration: '3h 15m',
    level: 'Advanced',
    students: 650,
    rating: 4.7,
    category: 'Artificial Intelligence',
    tags: ['OpenAI', 'API', 'JavaScript', 'AI'],
    thumbnail: '/api/placeholder/400/225',
    lessons: 15,
    type: 'Interactive Tutorial',
    price: '$29.99'
  }
]

export default function Tutorials() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  
  const categories = ['All', 'Web Development', 'Game Development', 'Artificial Intelligence', 'Mobile Development']
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredTutorials = tutorials.filter(tutorial => {
    const categoryMatch = selectedCategory === 'All' || tutorial.category === selectedCategory
    const levelMatch = selectedLevel === 'All' || tutorial.level === selectedLevel
    return categoryMatch && levelMatch
  })

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Developer Tutorials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from our team's expertise with comprehensive tutorials covering web development, game development, AI, and more.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm font-medium text-muted-foreground self-center">Category:</span>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm font-medium text-muted-foreground self-center">Level:</span>
            {levels.map((level) => (
              <Button
                key={level}
                variant={selectedLevel === level ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLevel(level)}
              >
                {level}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial) => (
            <Card key={tutorial.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                <Play className="h-16 w-16 text-primary" />
                <div className="absolute top-2 right-2">
                  <Badge variant={tutorial.price === 'Free' ? 'secondary' : 'default'}>
                    {tutorial.price}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{tutorial.type}</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{tutorial.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{tutorial.title}</CardTitle>
                <CardDescription>{tutorial.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {tutorial.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {tutorial.lessons} lessons
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {tutorial.students} students
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {tutorial.level}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {tutorial.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  {tutorial.price === 'Free' ? 'Start Learning' : 'Enroll Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            <BookOpen className="w-4 h-4 mr-2" />
            Request a Tutorial Topic
          </Button>
        </div>
      </div>
    </div>
  )
}
