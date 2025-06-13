
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const techCategories = [
  {
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Svelte'],
    color: 'bg-blue-500'
  },
  {
    category: 'Backend',
    technologies: ['Node.js', 'Python', 'Rust', 'PostgreSQL', 'MongoDB', 'Redis'],
    color: 'bg-green-500'
  },
  {
    category: 'Mobile',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'PWA'],
    color: 'bg-purple-500'
  },
  {
    category: 'Game Dev',
    technologies: ['Unity', 'Godot', 'Unreal Engine', 'C#', 'GDScript', 'Blender'],
    color: 'bg-orange-500'
  },
  {
    category: 'AI/ML',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Hugging Face', 'Scikit-learn', 'Pandas'],
    color: 'bg-pink-500'
  },
  {
    category: 'DevOps',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'GitHub Actions', 'Nginx'],
    color: 'bg-gray-500'
  }
]

export default function TechStack() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable solutions across all platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${category.color}`} />
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Always exploring new technologies to stay ahead of the curve
          </p>
        </div>
      </div>
    </section>
  )
}
