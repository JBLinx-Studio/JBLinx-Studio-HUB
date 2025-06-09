
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Smartphone, Monitor, Cloud, Shield, Database, Palette, Brain, Code, Zap, Globe } from 'lucide-react'

const serviceCategories = [
  {
    title: 'Web Development',
    icon: Monitor,
    description: 'Custom websites and web applications built with modern technologies',
    services: [
      { name: 'React/Next.js Applications', price: 'From $2,500' },
      { name: 'E-commerce Solutions', price: 'From $3,500' },
      { name: 'Progressive Web Apps', price: 'From $4,000' },
      { name: 'API Development', price: 'From $1,500' }
    ],
    badge: 'Most Popular'
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'Native and cross-platform mobile applications for iOS and Android',
    services: [
      { name: 'React Native Apps', price: 'From $5,000' },
      { name: 'Native iOS Development', price: 'From $6,000' },
      { name: 'Native Android Development', price: 'From $6,000' },
      { name: 'App Store Deployment', price: 'From $500' }
    ],
    badge: 'High Demand'
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Intelligent solutions powered by artificial intelligence and ML algorithms',
    services: [
      { name: 'Custom AI Models', price: 'From $8,000' },
      { name: 'Data Analysis Solutions', price: 'From $3,000' },
      { name: 'Automation Systems', price: 'From $4,500' },
      { name: 'Predictive Analytics', price: 'From $5,500' }
    ],
    badge: 'Premium'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Scalable infrastructure and deployment solutions for modern applications',
    services: [
      { name: 'AWS/Azure Setup', price: 'From $2,000' },
      { name: 'CI/CD Pipelines', price: 'From $1,800' },
      { name: 'Container Orchestration', price: 'From $2,500' },
      { name: 'Performance Monitoring', price: 'From $1,200' }
    ],
    badge: 'Enterprise'
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    description: 'Beautiful and intuitive user interfaces with exceptional user experience',
    services: [
      { name: 'User Research & Analysis', price: 'From $1,500' },
      { name: 'Wireframing & Prototyping', price: 'From $2,000' },
      { name: 'Design System Creation', price: 'From $3,500' },
      { name: 'Usability Testing', price: 'From $1,200' }
    ],
    badge: 'Creative'
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    description: 'Comprehensive security solutions and audits to protect your digital assets',
    services: [
      { name: 'Security Audits', price: 'From $2,500' },
      { name: 'Penetration Testing', price: 'From $3,000' },
      { name: 'Compliance Implementation', price: 'From $4,000' },
      { name: 'Security Training', price: 'From $800' }
    ],
    badge: 'Critical'
  }
]

const getBadgeColor = (badge: string) => {
  switch (badge) {
    case 'Most Popular': return 'bg-green-500'
    case 'High Demand': return 'bg-blue-500'
    case 'Premium': return 'bg-purple-500'
    case 'Enterprise': return 'bg-orange-500'
    case 'Creative': return 'bg-pink-500'
    case 'Critical': return 'bg-red-500'
    default: return 'bg-gray-500'
  }
}

export default function ServicesSection() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-foreground">Professional Services</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology services to bring your vision to life. 
            From concept to deployment, we deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <category.icon className="h-10 w-10 text-primary" />
                  <Badge className={`${getBadgeColor(category.badge)} text-white text-xs`}>
                    {category.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription className="text-sm">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm font-medium">{service.name}</span>
                      <span className="text-sm text-primary font-semibold">{service.price}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card border rounded-lg p-8 max-w-2xl mx-auto">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Custom Enterprise Solutions</h3>
            <p className="text-muted-foreground mb-6">
              Need something unique? We specialize in building custom enterprise solutions 
              tailored to your specific business requirements and industry needs.
            </p>
            <Button size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
