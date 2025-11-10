'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    images: string[]
    description: string
    technologies: string[]
    features: string[]
    liveUrl?: string
  }
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // 1 for next, -1 for prev

  // Reset to first image when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
      setDirection(0)
    }
  }, [isOpen, project])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  // Keyboard navigation and body scroll lock while modal open
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }
    window.addEventListener('keydown', handleKeyDown)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[85vh] sm:max-h-[88vh] md:max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 bg-white/95 dark:bg-gray-800/95 text-gray-800 dark:text-white p-2.5 sm:p-3 md:p-3.5 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all shadow-lg backdrop-blur-sm"
              aria-label="Close modal"
            >
              <FaTimes className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
              <div className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] w-full">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
                    transition={{ 
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={project.images[currentIndex]}
                        alt={`${project.title} - ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                        style={{ objectPosition: 'center' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                        priority={currentIndex === 0}
                        loading={currentIndex === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-gray-800/95 text-gray-800 dark:text-white p-2.5 sm:p-3 md:p-4 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all z-20 shadow-xl active:scale-95"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-gray-800/95 text-gray-800 dark:text-white p-2.5 sm:p-3 md:p-4 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all z-20 shadow-xl active:scale-95"
                      aria-label="Next image"
                    >
                      <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-1.5 sm:bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 md:gap-2 z-10 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1)
                            setCurrentIndex(index)
                          }}
                          className={`rounded-full transition-all ${
                            index === currentIndex
                              ? 'bg-white w-3 sm:w-4 md:w-6 lg:w-8 h-1.5 sm:h-2 md:h-2.5'
                              : 'bg-white/50 hover:bg-white/75 w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Image Counter */}
                    <div className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-6 md:left-8 bg-black/60 backdrop-blur-sm text-white px-3 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium z-20">
                      {currentIndex + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="flex flex-col gap-2 sm:gap-3 mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pr-12 sm:pr-14 md:pr-16 leading-tight">
                  {project.title}
                </h2>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 dark:bg-primary-500 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all font-semibold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto active:scale-95"
                  >
                    <FaExternalLinkAlt className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                    ვებსაიტის ნახვა
                  </a>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-3 sm:mb-4 md:mb-6">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-2.5 md:mb-3">
                  გამოყენებული ტექნოლოგიები
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-2.5 md:mb-3">
                  მთავარი ფუნქციები
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base">
                      <span className="text-green-500 dark:text-green-400 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0 text-sm sm:text-base">✓</span>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal

