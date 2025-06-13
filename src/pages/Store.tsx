
import React, { useState } from 'react'
import EcwidStore from '@/components/EcwidStore'
import PremiumAppsSection from '@/components/PremiumAppsSection'
import StoreHero from '@/components/StoreHero'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShoppingBag, Zap, Code, Store, BookOpen,  Download } from 'lucide-react'

const digitalProducts = [
  {
    id: '1',
    name: 'Web Development Starter Kit',
    description: 'Complete boilerplate with React, TypeScript, and Tailwind CSS',
    price: 49.99,
    originalPrice: 79.99,
    category: 'Templates',
    tags: ['React', 'TypeScript', 'Tailwind'],
    downloads: 1200,
    rating: 4.9,
    type: 'Digital Download'
  },
  {
    id: '2',
    name: 'Unity Game Development Course',
    description: 'Complete video course with source code and assets',
    price: 89.99,
    originalPrice: 129.99,
    category: 'Courses',
    tags: ['Unity', 'C#', 'Game Dev'],
    downloads: 850,
    rating: 4.8,
    type: 'Video Course'
  },
  {
    id: '3',
    name: 'AI Integration Toolkit',
    description: 'Ready-to-use AI components and API integrations',
    price: 129.99,
    originalPrice: 199.99,
    category: 'Tools',
    tags: ['AI', 'OpenAI', 'APIs'],
    downloads: 650,
    rating: 4.9,
    type: 'Code Package'
  }
]

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Templates', 'Courses', 'Tools', 'Books']

  return (
    <div className="min-h-screen">
      <StoreHero />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="digital" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-lg grid-cols-3">
              <TabsTrigger value="digital" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Digital Products
              </TabsTrigger>
              <TabsTrigger value="apps" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Premium Apps
              </TabsTrigger>
              <TabsTrigger value="shop" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                Physical Store
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="digital">
            <div className="mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Digital Products & Downloads</h2>
                <p className="text-muted-foreground">Instant access to our premium templates, courses, and tools</p>
              </div>
              
              <div className="flex justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge variant="outline">{product.type}</Badge>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">${product.price}</div>
                          {product.originalPrice > product.price && (
                            <div className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice}
                            </div>
                          )}
                        </div>
                      </div>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                        <span>{product.downloads} downloads</span>
                        <span>★ {product.rating}/5</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Buy Now
                        </Button>
                        <Button variant="outline">
                          Preview
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="apps">
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
