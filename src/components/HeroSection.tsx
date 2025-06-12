
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Code, Zap, Globe } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            JBLinx Studio
            <span className="block text-primary">HUB</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your premier tech company hub for innovative solutions, cutting-edge projects, and professional services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-3">
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              View Services
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground text-center">Modern web & mobile solutions</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-center">Cutting-edge technology stack</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground text-center">Worldwide client solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
