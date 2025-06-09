
import React from 'react'
import { Code, Smartphone, Brain, Palette, Server, Shield } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Full-stack web applications using modern technologies',
    features: ['React/Next.js', 'Node.js/Express', 'Database Design', 'API Development']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    features: ['React Native', 'iOS/Android', 'App Store Deployment', 'Push Notifications']
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence',
    features: ['Custom AI Models', 'Data Analysis', 'Automation', 'Predictive Analytics']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user experience design',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
  },
  {
    icon: Server,
    title: 'DevOps & Cloud',
    description: 'Scalable infrastructure and deployment solutions',
    features: ['AWS/Azure/GCP', 'CI/CD Pipelines', 'Monitoring', 'Security']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions and audits',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Training']
  }
]

export default function Services() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
