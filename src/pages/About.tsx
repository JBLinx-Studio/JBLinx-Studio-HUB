
import React from 'react'
import { Users, Target, Award, Heart } from 'lucide-react'

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About JBLinx Studio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of innovators dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded with a vision to bridge the gap between technology and human needs, 
              JBLinx Studio has been at the forefront of digital innovation for years.
            </p>
            <p className="text-muted-foreground">
              We believe in the power of technology to transform businesses and lives, 
              and we're committed to delivering solutions that not only meet but exceed expectations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Users, title: 'Team Collaboration', description: 'Working together to achieve excellence' },
            { icon: Target, title: 'Goal Oriented', description: 'Focused on delivering measurable results' },
            { icon: Award, title: 'Quality First', description: 'Committed to the highest standards' },
            { icon: Heart, title: 'Passion Driven', description: 'Love for what we do drives us forward' }
          ].map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
