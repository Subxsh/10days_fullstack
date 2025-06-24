import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark))
    if (isDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.setProperty('--toast-bg', '#374151')
      document.documentElement.style.setProperty('--toast-color', '#f9fafb')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.setProperty('--toast-bg', '#ffffff')
      document.documentElement.style.setProperty('--toast-color', '#111827')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}