'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Aguarda montagem do componente no client para evitar mismatch
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    setTheme(savedTheme)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  if (!mounted) return null // Evita renderização no SSR

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-yellow-400 hover:text-yellow-300 transition px-2"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
