'use client'

import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    setTheme(savedTheme || 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    
    // Update DOM
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Prevent rendering until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 dark:from-indigo-500 dark:via-purple-600 dark:to-indigo-700 transition-all duration-500 hover:shadow-lg hover:shadow-amber-400/50 dark:hover:shadow-purple-500/50"
      aria-label="Toggle theme"
    >
      {/* Sliding toggle circle */}
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center z-10"
        animate={{
          x: theme === 'dark' ? 32 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.div
          initial={false}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: theme === 'dark' ? 0 : 180 
          }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'light' ? (
            <FaSun className="text-amber-500 text-sm" />
          ) : (
            <FaMoon className="text-indigo-400 text-sm" />
          )}
        </motion.div>
      </motion.div>
    </button>
  )
}

export default ThemeToggle

