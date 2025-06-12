import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import StoreDialog from '@/components/StoreDialog'
import { ExternalLink, Code, Activity, Bot, CheckSquare, Sparkles, Database, Palette, Brain } from 'lucide-react'

const premiumApps = [
  {
    name: 'CodeFusion',
    description: 'Advanced code collaboration and development platform with real-time editing, version control, and AI-assisted coding.',
    icon: Code,
    category: 'Development',
    pricing: '$29/month',
    features: ['Real-time Collaboration', 'AI Code Assistant', 'Advanced Git Integration', 'Custom Workflows'],
    url: 'https://codefusion.jblinx.dev',
    status: 'Popular'
  },
  {
    name: 'VitalitySync',
    description: 'Comprehensive health and wellness tracking platform with analytics, goal setting, and personalized recommendations.',
    icon: Activity,
    category: 'Health & Wellness',
    pricing: '$19/month',
    features: ['Health Analytics', 'Goal Tracking', 'Custom Reports', 'Mobile App'],
    url: 'https://vitalitysync.jblinx.dev',
    status: 'New'
  },
  {
    name: 'CodeCraft-AI',
    description: 'AI-powered development assistant that generates, reviews, and optimizes code across multiple programming languages.',
    icon: Bot,
    category: 'AI Development',
    pricing: '$39/month',
    features: ['Multi-language Support', 'Code Generation', 'Security Analysis', 'Performance Optimization'],
    url: 'https://codecraft-ai.jblinx.dev',
    status: 'Featured'
  },
  {
    name: 'TaskFlow',
    description: 'Intelligent project management and workflow automation platform with AI-driven task prioritization.',
    icon: CheckSquare,
    category: 'Productivity',
    pricing: '$24/month',
    features: ['Smart Task Management', 'Workflow Automation', 'Team Collaboration', 'Analytics Dashboard'],
    url: 'https://taskflow.jblinx.dev',
    status: 'Popular'
  },
  {
    name: 'DataVault Pro',
    description: 'Enterprise-grade data management and analytics platform with advanced security and compliance features.',
    icon: Database,
    category: 'Data Management',
    pricing: '$49/month',
    features: ['Data Encryption', 'Compliance Tools', 'Advanced Analytics', 'API Access'],
    url: 'https://datavault.jblinx.dev',
    status: 'Enterprise'
  },
  {
    name: 'DesignForge',
    description: 'Professional design collaboration platform with AI-assisted design generation and brand management.',
    icon: Palette,
    category: 'Design',
    pricing: '$34/month',
    features: ['AI Design Assistant', 'Brand Management', 'Team Collaboration', 'Asset Library'],
    url: 'https://designforge.jblinx.dev',
    status: 'New'
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Popular': return 'bg-green-500'
    case 'New': return 'bg-blue-500'
    case 'Featured': return 'bg-purple-500'
    case 'Enterprise': return 'bg-orange-500'
    default: return 'bg-gray-500'
  }
}

export default function PremiumAppsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl font-bold text-foreground">
              Premium Web Applications
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional-grade applications with monthly subscription plans. 
            Built with cutting-edge technology and backed by our expert support team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumApps.map((app, index) => (
            <StoreDialog key={index} app={app}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <app.icon className="h-10 w-10 text-primary" />
                    <Badge className={`${getStatusColor(app.status)} text-white`}>
                      {app.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{app.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {app.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {app.description}
                  </p>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">{app.pricing}</span>
                      <span className="text-sm text-muted-foreground">per month</span>
                    </div>
                    
                    <Button className="w-full" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </StoreDialog>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All premium applications include 24/7 support, regular updates, and 30-day money-back guarantee
          </p>
          <Button variant="outline" size="lg">
            Compare All Plans
          </Button>
        </div>
      </div>
    </section>
  )
}
