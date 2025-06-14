
import React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export default function ThemeMenu({ showThemeMenu, setShowThemeMenu }: {
  showThemeMenu: boolean,
  setShowThemeMenu: (v: boolean) => void,
}) {
  const { theme, setTheme } = useTheme()

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ]

  return (
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
  )
}
