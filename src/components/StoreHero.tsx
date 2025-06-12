
import React from 'react'
import { Button } from '@/components/ui/button'
import { ShoppingBag, Star, Shield, Zap } from 'lucide-react'

export default function StoreHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <ShoppingBag className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-5xl font-bold text-foreground">
              JBLinx Studio Store
            </h1>
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover our premium web applications and professional services. 
            From AI-powered development tools to productivity solutions - 
            everything you need to accelerate your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border">
              <Star className="h-6 w-6 text-primary" />
              <span className="font-semibold">Premium Quality</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold">Secure & Reliable</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-card rounded-lg border">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-semibold">Monthly Updates</span>
            </div>
          </div>

          <Button size="lg" className="mr-4">
            Explore Premium Apps
          </Button>
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
