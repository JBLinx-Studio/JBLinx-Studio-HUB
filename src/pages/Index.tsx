
import React from 'react'
import HeroSection from '@/components/HeroSection'
import PortfolioShowcase from '@/components/PortfolioShowcase'
import ProjectStats from '@/components/ProjectStats'
import TechStack from '@/components/TechStack'
import PremiumAppsSection from '@/components/PremiumAppsSection'
import ServicesSection from '@/components/ServicesSection'

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectStats />
      <PortfolioShowcase />
      <PremiumAppsSection />
      <TechStack />
      <ServicesSection />
    </div>
  )
}
