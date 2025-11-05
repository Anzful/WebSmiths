'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const navLinks = [
    { href: '/', label: 'მთავარი' },
    { href: '/services', label: 'სერვისები' },
    { href: '/portfolio', label: 'პორტფოლიო' },
    { href: '/about', label: 'ჩვენ შესახებ' },
    { href: '/contact', label: 'კონტაქტი' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg py-3 sm:py-4' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-4 sm:py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
              <span className="text-primary-600 dark:text-primary-400">Web</span>
              <span className="text-gray-800 dark:text-white">Smiths</span>
              <span className="text-accent-500 dark:text-accent-400">.btw</span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet, shown on lg+ */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 xl:px-4 py-2 font-medium text-sm xl:text-base transition-all duration-300 rounded-lg group ${
                  isActive(link.href)
                    ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
                {/* Active indicator line */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300 ${
                    isActive(link.href) ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 xl:ml-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all hover:shadow-lg hover:shadow-primary-500/50 transform hover:-translate-y-0.5 text-sm xl:text-base font-semibold"
            >
              დაგვიკავშირდით
            </Link>
            <div className="ml-3 xl:ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile/Tablet Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 text-2xl p-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu - Enhanced Design */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative font-medium py-3 px-4 rounded-lg transition-all ${
                      isActive(link.href)
                        ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {link.label}
                      {isActive(link.href) && (
                        <span className="w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-400 animate-pulse" />
                      )}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all text-center font-semibold mt-2 hover:shadow-lg"
                >
                  დაგვიკავშირდით
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

