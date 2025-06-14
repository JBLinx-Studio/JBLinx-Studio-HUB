
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface NavItem {
  href?: string
  label: string
  submenu?: { href: string, label: string }[]
}

interface MobileNavProps {
  navItems: NavItem[]
  isOpen: boolean
  setIsOpen: (v: boolean) => void
}

export default function MobileNav({ navItems, isOpen, setIsOpen }: MobileNavProps) {
  const location = useLocation()
  if (!isOpen) return null
  return (
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
  )
}
