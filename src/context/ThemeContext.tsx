import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { storage } from '@/utils/storage'
import { STORAGE_KEYS } from '@/constants'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return storage.get<Theme>(STORAGE_KEYS.THEME) || 'system'
  })

  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = theme === 'dark' || (theme === 'system' && systemDark)
    
    setIsDark(dark)
    root.classList.toggle('dark', dark)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    storage.set(STORAGE_KEYS.THEME, newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
