import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Monitor, ChevronDown } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import Logo from './navigation/Logo'
import DesktopNav from './navigation/DesktopNav'
import MobileNav from './navigation/MobileNav'
import ThemeMenu from './navigation/ThemeMenu'

const navItems = [
  { href: '/', label: 'Home' },
  { 
    label: 'Portfolio',
    submenu: [
      { href: '/projects', label: 'Projects' },
      { href: '/dev-logs', label: 'Dev Logs' },
    ]
  },
  { 
    label: 'Learning',
    submenu: [
      { href: '/blog', label: 'Blog' },
      { href: '/tutorials', label: 'Tutorials' },
      { href: '/books', label: 'Books' },
    ]
  },
  { href: '/services', label: 'Services' },
  { href: '/store', label: 'Store' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const location = useLocation()

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <DesktopNav
            navItems={navItems}
            openSubmenu={openSubmenu}
            setOpenSubmenu={setOpenSubmenu}
          />
          <ThemeMenu showThemeMenu={showThemeMenu} setShowThemeMenu={setShowThemeMenu} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        <MobileNav navItems={navItems} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  )
}
