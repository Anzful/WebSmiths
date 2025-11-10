'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ImageSlider from '@/components/ImageSlider'
import ProjectModal from '@/components/ProjectModal'
import PageTransition from '@/components/PageTransition'

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'AndCook - რეცეპტების აპლიკაცია',
      category: 'mobile',
      images: ['/images/AndCook.jpg', '/images/AndCook2.jpg'],
      description: 'თანამედროვე მობილური აპლიკაცია კულინარიული რეცეპტების აღმოსაჩენად და გაზიარებისთვის',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      features: ['რეცეპტების ბაზა', 'ძიების ფუნქცია', 'სოციალური ფუნქციები', 'ოფლაინ რეჟიმი'],
      liveUrl: 'https://andcook.vercel.app'
    },
    {
      id: 2,
      title: 'AndScore - სპორტული აპლიკაცია',
      category: 'mobile',
      images: ['/images/AndScore.jpg', '/images/AndScore2.jpg'],
      description: 'ფუნქციური სპორტული აპლიკაცია ლაივ სქორების და სტატისტიკის თვალთვალისთვის',
      technologies: ['React Native', 'REST API', 'Redux'],
      features: ['ლაივ სქორები', 'სტატისტიკა', 'შეტყობინებები', 'ფავორიტების სისტემა'],
      liveUrl: 'https://andscore.site'
    },
    {
      id: 3,
      title: 'AndCode - საგანმანათლებო პლატფორმა',
      category: 'education',
      images: ['/images/andcode.jpg', '/images/andcode2.jpg'],
      description: 'ინტერაქტიული საგანმანათლებო პლატფორმა პროგრამირების შესასწავლად',
      technologies: ['Next.js', 'TypeScript', 'MongoDB'],
      features: ['ვიდეო გაკვეთილები', 'კოდის რედაქტორი', 'ტესტები', 'სერტიფიკატები'],
      liveUrl: 'https://andcode.vercel.app'
    },
    {
      id: 4,
      title: 'AndWatch - სმარტ საათის აპი',
      category: 'mobile',
      images: ['/images/andwatch.jpg', '/images/Andwatch2.jpg'],
      description: 'ჯანმრთელობის მონიტორინგის აპლიკაცია სმარტ საათებისთვის',
      technologies: ['React Native', 'Health API', 'Firebase'],
      features: ['ნაბიჯების დათვლა', 'პულსის მონიტორინგი', 'ძილის ანალიზი', 'ვარჯიშის ტრეკერი'],
      liveUrl: 'https://andwatch.vercel.app'
    },
    {
      id: 5,
      title: 'TypingY - ტექსტის სისწრაფის ტრენერი',
      category: 'education',
      images: ['/images/TypingY.png'],
      description: 'საგანმანათლებო ვებ აპლიკაცია ბეჭდვის სისწრაფისა და სიზუსტის გასაუმჯობესებლად',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      features: ['სავარჯიშოები', 'სტატისტიკა', 'რეიტინგი', 'მრავალენოვანი'],
      liveUrl: 'https://typingy.live'
    },
    {
      id: 6,
      title: 'Furniture Store - ავეჯის ონლაინ მაღაზია',
      category: 'ecommerce',
      images: ['/images/Furniture1.jpg', '/images/Furniture2.jpg', '/images/Furniture3.jpg'],
      description: 'თანამედროვე E-commerce პლატფორმა ავეჯის გაყიდვისთვის',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      features: ['პროდუქტების კატალოგი', 'გადახდის სისტემა', '3D პრევიუ', 'ინვენტარის მართვა']
    },
    {
      id: 7,
      title: 'Restaurant Website - რესტორნის ვებსაიტი',
      category: 'restaurant',
      images: ['/images/Restauran1.jpg', '/images/Restauran2.jpg'],
      description: 'ელეგანტური ვებსაიტი რესტორნისთვის თანამედროვე დიზაინით და ფუნქციონალით',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      features: ['მენიუს გალერეა', 'დაჯავშნის სისტემა', 'რესპონსიული დიზაინი', 'ფოტო გალერეა']
    },
    {
      id: 8,
      title: 'FIB Unit - GTA 5 RP Server',
      category: 'gaming',
      images: ['/images/FIB.jpg', '/images/FIB2.jpg'],
      description: 'ვებსაიტი GTA 5 Roleplay სერვერისთვის - რეკრუტმენტის და ინფორმაციის სისტემით',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Discord Integration'],
      features: ['სერვერის ინფორმაცია', 'რეკრუტმენტის სისტემა', 'Discord ინტეგრაცია', 'თამაშის წესები'],
      liveUrl: 'https://fib-unit-rp.vercel.app'
    },

  ]

  const handleProjectClick = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const categories = [
    { id: 'all', label: 'ყველა' },
    { id: 'mobile', label: 'მობილური აპლიკაციები' },
    { id: 'education', label: 'საგანმანათლებო' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'restaurant', label: 'რესტორანი' },
    { id: 'gaming', label: 'თამაშები' },
    { id: 'portfolio', label: 'პორტფოლიო' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              ჩვენი პროექტები
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-primary-100">
              გაიგეთ მეტი ჩვენი პროექტების შესახებ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">10+</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">დასრულებული პროექტი</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">წარმატების მაჩვენებელი</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600">მხარდაჭერა</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 sm:py-6 md:py-8 bg-white/80 dark:bg-gray-900/70 backdrop-blur-sm sticky top-16 sm:top-20 z-40 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-105'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleProjectClick(project)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 cursor-pointer"
              >
                {/* Image with Slider */}
                <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <ImageSlider images={project.images} alt={project.title} />
                  {/* View hint overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 z-20 pointer-events-none">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300 text-white text-lg font-semibold">
                      დააჭირე სანახავად
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary-50 text-primary-700 px-2.5 sm:px-3 py-1 rounded-full hover:bg-primary-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          <span className="text-green-500 dark:text-green-400 mr-1">✓</span> {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">ამ კატეგორიაში პროექტები არ მოიძებნა</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject || projects[0]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              მზად ხართ შექმნათ თქვენი საიტი?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              დაგვიკავშირდით და მიიღეთ უფასო კონსულტაცია
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
            >
              დაიწყეთ პროექტი
            </a>
          </motion.div>
        </div>
      </section>
      </div>
    </PageTransition>
  )
}

export default PortfolioPage

