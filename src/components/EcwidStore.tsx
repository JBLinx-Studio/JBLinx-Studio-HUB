
import React, { useEffect } from 'react'

export default function EcwidStore() {
  useEffect(() => {
    // Load Ecwid script if not already loaded
    if (!document.querySelector('script[src*="app.ecwid.com/script.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://app.ecwid.com/script.js?88971345&data_platform=code&data_date=2025-06-09'
      script.charset = 'utf-8'
      script.setAttribute('data-cfasync', 'false')
      document.head.appendChild(script)

      script.onload = () => {
        // Initialize the store after script loads
        if (window.xProductBrowser) {
          window.xProductBrowser(
            "categoriesPerRow=3",
            "views=grid(20,3) list(60) table(60)",
            "categoryView=grid",
            "searchView=list",
            "id=my-store-88971345"
          )
        }
      }
    } else {
      // Script already loaded, just initialize
      if (window.xProductBrowser) {
        window.xProductBrowser(
          "categoriesPerRow=3",
          "views=grid(20,3) list(60) table(60)",
          "categoryView=grid",
          "searchView=list",
          "id=my-store-88971345"
        )
      }
    }
  }, [])

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            JBLinx Studio Shop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of tech products, services, and solutions
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div id="my-store-88971345" className="min-h-[600px]"></div>
        </div>
      </div>
    </section>
  )
}
