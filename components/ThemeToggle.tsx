'use client'

import { useEffect, useState, useRef } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)
  const [slideDistance, setSlideDistance] = useState(44)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    // Get theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    setTheme(savedTheme || 'dark')
  }, [])

  useEffect(() => {
    const calculateSlideDistance = () => {
      if (buttonRef.current && circleRef.current) {
        const buttonWidth = buttonRef.current.offsetWidth
        const circleWidth = circleRef.current.offsetWidth
        const margin = 8 // 4px left + 4px right
        setSlideDistance(buttonWidth - circleWidth - margin)
      }
    }

    calculateSlideDistance()
    window.addEventListener('resize', calculateSlideDistance)
    return () => window.removeEventListener('resize', calculateSlideDistance)
  }, [mounted])

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
      <div className="relative w-20 sm:w-20 md:w-24 lg:w-24 h-9 sm:h-9 md:h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex-shrink-0" />
    )
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className="relative w-20 sm:w-20 md:w-24 lg:w-24 h-9 sm:h-9 md:h-10 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 dark:from-indigo-500 dark:via-purple-600 dark:to-indigo-700 transition-all duration-500 hover:shadow-lg hover:shadow-amber-400/50 dark:hover:shadow-purple-500/50 flex-shrink-0"
      aria-label="Toggle theme"
    >
      {/* Sliding toggle circle */}
      <motion.div
        ref={circleRef}
        className="absolute top-1 left-1 w-7 sm:w-7 md:w-8 h-7 sm:h-7 md:h-8 rounded-full bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center z-10"
        animate={{
          x: theme === 'dark' ? slideDistance : 0,
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
            <FaSun className="text-amber-500 text-sm md:text-base" />
          ) : (
            <FaMoon className="text-indigo-400 text-sm md:text-base" />
          )}
        </motion.div>
      </motion.div>
    </button>
  )
}

export default ThemeToggle

