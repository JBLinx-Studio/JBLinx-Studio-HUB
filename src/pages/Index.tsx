
import React from 'react'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection'
import EcwidStore from '@/components/EcwidStore'

export default function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <EcwidStore />
    </div>
  )
}
