
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingSpinner from '@/components/LoadingSpinner'

// Lazy load pages for better performance
const Index = lazy(() => import('@/pages/Index'))
const Projects = lazy(() => import('@/pages/Projects'))
const Services = lazy(() => import('@/pages/Services'))
const Store = lazy(() => import('@/pages/Store'))
const Blog = lazy(() => import('@/pages/Blog'))
const DevLogs = lazy(() => import('@/pages/DevLogs'))
const Books = lazy(() => import('@/pages/Books'))
const Tutorials = lazy(() => import('@/pages/Tutorials'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {/* VERY VISIBLE CHANGE - Debug banner */}
            <div className="bg-red-500 text-white text-center py-2 font-bold text-lg">
              🔥 JBLINX STUDIO - WEBSITE SUCCESSFULLY UPDATED! 🔥
            </div>
            
            <Navigation />
            <main className="flex-grow">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/dev-logs" element={<DevLogs />} />
                  <Route path="/books" element={<Books />} />
                  <Route path="/tutorials" element={<Tutorials />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
