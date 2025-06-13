
import React, { useState } from 'react'
import EcwidStore from '@/components/EcwidStore'
import PremiumAppsSection from '@/components/PremiumAppsSection'
import StoreHero from '@/components/StoreHero'
import StoreCategoryFilter from '@/components/StoreCategoryFilter'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ShoppingBag, Zap, Code, Store } from 'lucide-react'

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  
  const categories = ['All', 'Development', 'AI Development', 'Health & Wellness', 'Productivity', 'Data Management', 'Design']

  return (
    <div className="min-h-screen">
      <StoreHero />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="apps" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="apps" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Premium Apps
              </TabsTrigger>
              <TabsTrigger value="shop" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                Online Shop
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="apps">
            <div className="mb-8">
              <StoreCategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
              />
            </div>
            <PremiumAppsSection />
          </TabsContent>
          
          <TabsContent value="shop">
            <EcwidStore />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
