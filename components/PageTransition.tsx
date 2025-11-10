'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const prefersReducedMotion = useReducedMotion()
  const duration = prefersReducedMotion ? 0 : 0.4
  const initialY = prefersReducedMotion ? 0 : 20
  const exitY = prefersReducedMotion ? 0 : -20

  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: exitY }}
      transition={{
        duration,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
 
