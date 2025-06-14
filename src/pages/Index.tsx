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
import AnnouncementBanner from "@/components/index/AnnouncementBanner";
import FeaturedAnnounceSection from "@/components/index/FeaturedAnnounceSection";
import HeroGrid from "@/components/index/HeroGrid";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Announcement banner */}
      <AnnouncementBanner />
      
      {/* Hero Section */}
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
            <HeroGrid />
          </div>
        </div>
      </section>
      {/* Featured Updates */}
      <FeaturedAnnounceSection />

      <ProjectStats />
      <PortfolioShowcase />
      <PremiumAppsSection />
      <TechStack />
      <ServicesSection />
    </div>
  )
}
