
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  href?: string
  label: string
  submenu?: { href: string, label: string }[]
}

interface DesktopNavProps {
  navItems: NavItem[]
  openSubmenu: string | null
  setOpenSubmenu: (val: string | null) => void
}

export default function DesktopNav({ navItems, openSubmenu, setOpenSubmenu }: DesktopNavProps) {
  const location = useLocation()
  return (
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
    </div>
  )
}
