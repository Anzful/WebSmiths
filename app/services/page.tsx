'use client'

import Link from 'next/link'
import { FaCheck, FaTimes, FaRocket, FaShoppingCart, FaBriefcase, FaFileAlt, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import PageTransition from '@/components/PageTransition'

const ServicesPage = () => {
  const services = [
    {
      icon: <FaFileAlt className="text-5xl text-primary-600 dark:text-primary-400" />,
      name: 'Landing Page',
      price: '500-700',
      duration: '3-5 დღე',
      description: 'იდეალური მცირე ბიზნესისთვის ან პროდუქტის წარმოსაჩენად',
      features: [
        '1-3 გვერდი თანამედროვე დიზაინით',
        'სრულად რესპონსიული (მობილური, ტაბლეტი, დესკტოპი)',
        'კონტაქტის ფორმა',
        'Google Maps ინტეგრაცია',
        'სოციალური მედიის ლინკები',
        'ძირითადი SEO ოპტიმიზაცია',
        'ადმინ პანელი'
      ],
      notIncluded: [
        'მონაცემთა ბაზა',
        'მომხმარებლის ავტორიზაცია'
      ],
      marketPrice: '1,000-2,000'
    },
    {
      icon: <FaBriefcase className="text-5xl text-primary-600 dark:text-primary-400" />,
      name: 'საიტი ბიზნესისთვის',
      price: '1,000-2,500',
      duration: '7-10 დღე',
      description: 'სრული ფუნქციონალის საიტი ბიზნესისთვის',
      features: [
        '3-7 გვერდი (მთავარი, შესახებ, სერვისები, პორტფოლიო, კონტაქტი, ბლოგი)',
        'პროფესიონალური და უნიკალური დიზაინი',
        'სრულად რესპონსიული',
        'მომხმარებლის ავტორიზაცია',
        'კონტენტის მართვის სისტემა (CMS)',
        'ბლოგის სექცია',
        'მრავალენოვანი მხარდაჭერა (ქართული/ინგლისური)',
        'სრული SEO ოპტიმიზაცია',
        'სოციალური მედიის ინტეგრაცია',
        'პროდუქტების კატალოგი'
      ],
      notIncluded: [
        'ონლაინ გადახდის სისტემა',
      ],
      marketPrice: '2,000-4,000',
      popular: true
    },
    {
      icon: <FaShoppingCart className="text-5xl text-primary-600 dark:text-primary-400" />,
      name: 'E-Commerce (ელექტრონული კომერცია)',
      price: '3,000-5,000',
      duration: '14-21 დღე',
      description: 'სრული ფუნქციონალის ონლაინ მაღაზია',
      features: [
        'უსასრულო პროდუქტების და კატეგორიების დამატება',
        'პროდუქტის ძიება და ფილტრაცია',
        'კალათა და Checkout პროცესი',
        'მომხმარებლის რეგისტრაცია და პროფილი',
        'შეკვეთების მართვის სისტემა',
        'ინვენტარის მართვა',
        'გადახდის სისტემების ინტეგრაცია',
        'მიწოდების კალკულატორი',
        'ადმინ პანელი სრული კონტროლისთვის',
        'Email შეტყობინებები შეკვეთებზე',
        'ანალიტიკა და რეპორტები',
        'სრული SEO ოპტიმიზაცია',
        '6 თვე უფასო ტექნიკური მხარდაჭერა'
      ],
      notIncluded: [],
      marketPrice: '4,000-6,000+'
    },
    {
      icon: <FaRocket className="text-5xl text-primary-600 dark:text-primary-400" />,
      name: 'მორგებული ვებსაიტი',
      price: 'მოლაპარაკებით',
      duration: 'მოლაპარაკებით',
      description: 'სრულად მორგებული ვებსაიტი თქვენი უნიკალური საჭიროებების მიხედვით',
      features: [
        'სრულად მორგებული ვებსაიტი თქვენი საჭიროებების მიხედვით',
      ],
      notIncluded: [],
    }
  ]

  const additionalServices = [
    {
      name: 'დომენის რეგისტრაცია',
      price: '30-70 ₾/წელი',
      description: '.ge, .com, .net დომენები'
    },
    {
      name: 'ჰოსტინგი',
      price: '120-400 ₾/წელი',
      description: 'სწრაფი და უსაფრთხო ჰოსტინგი'
    },
    {
      name: 'მხარდაჭერა',
      price: 'დამოკიდებულია პროექტისგან',
      description: 'რეგულარული განახლებები და ტექნიკური მხარდაჭერა'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'კონსულტაცია',
      description: 'უფასო კონსულტაცია თქვენი საჭიროებების გასარკვევად'
    },
    {
      step: '02',
      title: 'დაგეგმვა',
      description: 'პროექტის დეტალური გეგმის შედგენა და ფასის დადგენა'
    },
    {
      step: '03',
      title: 'დიზაინი',
      description: 'უნიკალური დიზაინის შექმნა თქვენი ბრენდის შესაბამისად'
    },
    {
      step: '04',
      title: 'დეველოპმენტი',
      description: 'საიტის აგება უახლესი ტექნოლოგიების გამოყენებით'
    },
    {
      step: '05',
      title: 'ტესტირება',
      description: 'სრული ტესტირება ყველა მოწყობილობაზე და ბრაუზერზე'
    },
    {
      step: '06',
      title: 'გაშვება',
      description: 'საიტის გაშვება და უფასო ტრენინგი მართვისთვის'
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              ჩვენი სერვისები და ფასები
            </h1>
            <p className="text-xl text-primary-100">
              გამჭვირვალე ფასები, ხარისხიანი სამუშაო. აირჩიეთ თქვენთვის შესაფერისი პაკეტი.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                  service.popular ? 'ring-4 ring-primary-600' : ''
                }`}
              >
                {service.popular && (
                  <div className="bg-primary-600 text-white text-center py-2 font-semibold">
                    ⭐ ყველაზე პოპულარული
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>{service.icon}</div>
                    {service.marketPrice && service.marketPrice !== 'მოლაპარაკებით' && (
                      <div className="text-right">
                        <div className="text-red-500 text-sm line-through">
                          ბაზარზე: {service.marketPrice} ₾
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">{service.price}</span>
                      {service.price !== 'მოლაპარაკებით' && (
                        <span className="text-gray-600 ml-2">₾</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      ⏱️ მიწოდება: {service.duration}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">რა შედის:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.notIncluded.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">არ შედის:</h4>
                      <ul className="space-y-2">
                        {service.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <FaTimes className="text-red-400 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-500 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href="/contact"
                    className="block text-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg font-semibold"
                  >
                    შეუკვეთეთ ახლავე
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-accent-400 to-accent-500 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-3xl font-bold mb-4">მორგებული პროექტი</h3>
            <p className="text-xl mb-6">
              გჭირდებათ რაღაც უნიკალური? ჩვენ შევქმნით სრულად მორგებულ გადაწყვეტას თქვენი საჭიროებების მიხედვით.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-accent-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold"
            >
              მოითხოვეთ ფასი
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              დამატებითი სერვისები
            </h2>
            <p className="text-xl text-gray-600">
              ყველაფერი რაც გჭირდებათ წარმატებული ვებსაიტისთვის
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                <div className="text-primary-600 dark:text-primary-400 font-bold text-lg">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section removed */}

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              როგორ ვმუშაობთ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              პროფესიონალური და სწრაფი პროცესი დაწყებიდან გაშვებამდე
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <div className="text-5xl font-bold text-primary-100 dark:text-primary-900 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              მზად ხართ დაიწყოთ?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              მიიღეთ უფასო კონსულტაცია და დაზუსტებული ფასი თქვენი პროექტისთვის
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
            >
              დაგვიკავშირდით
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </PageTransition>
  )
}

export default ServicesPage

