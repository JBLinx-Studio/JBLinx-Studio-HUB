
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Code, Users, Star, Zap } from 'lucide-react'

const stats = [
  {
    icon: Code,
    value: '50+',
    label: 'Projects Completed',
    description: 'Across web apps, games, and software tools'
  },
  {
    icon: Users,
    value: '10K+',
    label: 'Active Users',
    description: 'Using our premium applications daily'
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Client Rating',
    description: 'Based on project reviews and feedback'
  },
  {
    icon: Zap,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable service across all platforms'
  }
]

export default function ProjectStats() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
          <p className="text-muted-foreground">
            Our track record speaks for itself
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
