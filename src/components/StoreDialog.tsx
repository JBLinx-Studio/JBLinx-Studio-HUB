
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Star, Shield, Zap } from 'lucide-react'

interface StoreDialogProps {
  children: React.ReactNode
  app: {
    name: string
    description: string
    category: string
    pricing: string
    features: string[]
    url: string
    status: string
    icon: React.ComponentType<{ className?: string }>
  }
}

export default function StoreDialog({ children, app }: StoreDialogProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Popular': return 'bg-green-500'
      case 'New': return 'bg-blue-500'
      case 'Featured': return 'bg-purple-500'
      case 'Enterprise': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-background border">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
              <app.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl">{app.name}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {app.category}
              </DialogDescription>
              <Badge className={`${getStatusColor(app.status)} text-white mt-2`}>
                {app.status}
              </Badge>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">
            {app.description}
          </p>
          
          <div>
            <h4 className="font-semibold mb-3 flex items-center">
              <Star className="w-4 h-4 mr-2 text-primary" />
              Key Features
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {app.features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-3xl font-bold text-primary">{app.pricing}</span>
                <span className="text-muted-foreground ml-2">per month</span>
              </div>
              <div className="text-right">
                <div className="flex items-center text-sm text-muted-foreground mb-1">
                  <Shield className="w-4 h-4 mr-1" />
                  30-day money-back guarantee
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 mr-1" />
                  24/7 support included
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Button className="w-full" asChild>
                <a href={app.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Launch {app.name}
                </a>
              </Button>
              <Button variant="outline" className="w-full">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
