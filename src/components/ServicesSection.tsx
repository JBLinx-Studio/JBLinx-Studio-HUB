
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Smartphone, Monitor, Cloud, Shield, Database, Palette } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies',
    features: ['React/Next.js', 'TypeScript', 'Responsive Design']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    features: ['React Native', 'Flutter', 'Native iOS/Android']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions',
    features: ['AWS/Azure', 'DevOps', 'Microservices']
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust APIs and database solutions for your applications',
    features: ['Node.js/Python', 'PostgreSQL/MongoDB', 'RESTful APIs']
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Comprehensive security audits and implementation',
    features: ['Penetration Testing', 'Security Audits', 'Compliance']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces and experiences',
    features: ['Figma/Adobe XD', 'User Research', 'Prototyping']
  }
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tech solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
