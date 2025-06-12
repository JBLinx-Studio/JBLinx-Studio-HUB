
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2, RefreshCw, Store } from 'lucide-react'

export default function EcwidStore() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  const initializeStore = () => {
    console.log('Initializing Ecwid store...')
    if (window.xProductBrowser) {
      try {
        window.xProductBrowser(
          "categoriesPerRow=4",
          "views=grid(20,4) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          "id=my-store-88971345",
          "showCategories=Y",
          "showDescription=Y",
          "showPrice=Y",
          "showPriceOnButton=Y",
          "showOptionsPanel=Y",
          "showProductBrowser=Y",
          "showSearchBox=Y",
          "enableCenterMode=Y"
        )
        setIsLoading(false)
        setIsError(false)
        console.log('Ecwid store initialized successfully')
      } catch (error) {
        console.error('Error initializing Ecwid store:', error)
        setIsError(true)
        setIsLoading(false)
      }
    } else {
      console.log('xProductBrowser not available yet')
      if (retryCount < 10) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1)
          initializeStore()
        }, 500)
      } else {
        setIsError(true)
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    const loadEcwidScript = () => {
      // Check if script is already loaded
      const existingScript = document.querySelector('script[src*="app.ecwid.com/script.js"]')
      
      if (!existingScript) {
        console.log('Loading Ecwid script...')
        const script = document.createElement('script')
        script.src = 'https://app.ecwid.com/script.js?88971345&data_platform=code&data_date=2025-06-09'
        script.charset = 'utf-8'
        script.setAttribute('data-cfasync', 'false')
        
        script.onload = () => {
          console.log('Ecwid script loaded successfully')
          setTimeout(initializeStore, 100)
        }
        
        script.onerror = () => {
          console.error('Failed to load Ecwid script')
          setIsError(true)
          setIsLoading(false)
        }
        
        document.head.appendChild(script)
      } else {
        console.log('Ecwid script already exists, initializing store...')
        setTimeout(initializeStore, 100)
      }
    }

    loadEcwidScript()

    // Cleanup function
    return () => {
      setIsLoading(true)
      setIsError(false)
      setRetryCount(0)
    }
  }, [])

  const handleRetry = () => {
    setIsLoading(true)
    setIsError(false)
    setRetryCount(0)
    initializeStore()
  }

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Store className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-foreground">
              JBLinx Studio Shop
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of tech products, services, and solutions. 
            Browse by categories, compare products, and find exactly what you need.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {isLoading && (
            <Card className="min-h-[600px] flex items-center justify-center">
              <CardContent className="text-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Loading Store...</h3>
                <p className="text-muted-foreground">
                  Setting up your shopping experience
                </p>
              </CardContent>
            </Card>
          )}

          {isError && (
            <Card className="min-h-[600px] flex items-center justify-center">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Store className="h-8 w-8 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Store Unavailable</h3>
                <p className="text-muted-foreground mb-4">
                  We're having trouble loading the store. Please try again.
                </p>
                <Button onClick={handleRetry} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Retry Loading
                </Button>
              </CardContent>
            </Card>
          )}

          <div 
            id="my-store-88971345" 
            className={`min-h-[600px] transition-opacity duration-300 ${
              isLoading || isError ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            style={{ 
              width: '100%',
              minHeight: '600px'
            }}
          />
        </div>

        {!isLoading && !isError && (
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Secure checkout • Fast shipping • 24/7 support
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
