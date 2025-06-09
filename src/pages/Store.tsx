
import React from 'react'
import EcwidStore from '@/components/EcwidStore'
import PremiumAppsSection from '@/components/PremiumAppsSection'
import StoreHero from '@/components/StoreHero'

export default function Store() {
  return (
    <div className="min-h-screen">
      <StoreHero />
      <PremiumAppsSection />
      <EcwidStore />
    </div>
  )
}
