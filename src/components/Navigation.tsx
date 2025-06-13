
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, Monitor, ChevronDown } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

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
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">JB</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              JBLinx Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.submenu ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setOpenSubmenu(item.label)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <button className="flex items-center text-sm font-medium transition-colors hover:text-primary text-muted-foreground">
                      {item.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    
                    {openSubmenu === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className={cn(
                              "block px-3 py-2 text-sm hover:bg-accent transition-colors rounded-lg",
                              location.pathname === subItem.href
                                ? "text-primary bg-accent"
                                : "text-muted-foreground"
                            )}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Theme Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowThemeMenu(!showThemeMenu)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                {theme === 'light' && <Sun className="w-4 h-4" />}
                {theme === 'dark' && <Moon className="w-4 h-4" />}
                {theme === 'system' && <Monitor className="w-4 h-4" />}
              </button>
              
              {showThemeMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg">
                  {themeOptions.map((option) => {
                    const Icon = option.icon
                    return (
                      <button
                        key={option.value}
                        onClick={() => {
                          setTheme(option.value as any)
                          setShowThemeMenu(false)
                        }}
                        className={cn(
                          "w-full flex items-center px-3 py-2 text-sm hover:bg-accent transition-colors",
                          theme === option.value && "bg-accent"
                        )}
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {option.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <div>
                      <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                        {item.label}
                      </div>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block px-6 py-2 rounded-lg text-sm font-medium transition-colors",
                            location.pathname === subItem.href
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.href!}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        location.pathname === item.href
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
