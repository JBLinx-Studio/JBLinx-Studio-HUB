
import React from 'react'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import PremiumAppsSection from '@/components/PremiumAppsSection'

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <PremiumAppsSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  )
}
