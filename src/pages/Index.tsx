
import React from 'react'
import HeroSection from '@/components/HeroSection'
import PortfolioShowcase from '@/components/PortfolioShowcase'
import ProjectStats from '@/components/ProjectStats'
import TechStack from '@/components/TechStack'
import PremiumAppsSection from '@/components/PremiumAppsSection'
import ServicesSection from '@/components/ServicesSection'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Zap, Rocket, Star, Code } from 'lucide-react'

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* HUGE VISIBLE CHANGE - New announcement banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Rocket className="w-6 h-6 animate-bounce" />
            <span className="text-lg font-bold">🚀 WEBSITE UPDATED! NEW FEATURES LIVE NOW! 🚀</span>
            <Star className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </div>

      <HeroSection />
      
      {/* ANOTHER VISIBLE CHANGE - New featured section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-green-500 text-white text-lg px-6 py-2">
              ✨ LATEST UPDATES ✨
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-green-600">
              🎉 JBLinx Studio is Now Live with New Features! 🎉
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-green-400 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-green-500" />
                  Dev Logs Added
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Track our development journey with detailed project logs and updates!</p>
                <Button className="mt-4 bg-green-500 hover:bg-green-600">
                  View Dev Logs
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-400 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-blue-500" />
                  Digital Store
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Browse our premium apps, templates, and digital products!</p>
                <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
                  Visit Store
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-400 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-purple-500" />
                  New Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore our complete collection of web apps, games, and tools!</p>
                <Button className="mt-4 bg-purple-500 hover:bg-purple-600">
                  View Projects
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ProjectStats />
      <PortfolioShowcase />
      <PremiumAppsSection />
      <TechStack />
      <ServicesSection />
    </div>
  )
}
