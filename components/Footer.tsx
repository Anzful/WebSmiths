import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-300">
      <div className="h-1 w-full bg-gradient-to-r from-primary-600/25 via-accent-400/25 to-primary-600/25" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="PixelWeb logo"
              width={200}
              height={60}
              unoptimized
              className="h-10 sm:h-12 w-auto mb-4 object-contain dark:brightness-150 dark:saturate-200 dark:contrast-125"
            />
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              პროფესიონალური ვებსაიტები ხელმისაწვდომ ფასად. გთავაზობთ საუკეთესო ხარისხს ხელმისაწვდომ ფასად საქართველოში
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">სწრაფი ბმულები</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  მთავარი
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  სერვისები
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  პორტფოლიო
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  ჩვენ შესახებ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  კონტაქტი
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">სერვისები</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                Landing Page
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                საწარმოს ვებსაიტი
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                ელექტრონული კომერცია
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                პორტფოლიო საიტი
              </li>
              <li className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                საბაზრო ადგილი
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">კონტაქტი</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400 mt-1" />
                <span>თბილისი, საქართველო</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary-600 dark:text-primary-400" />
                <span>+995 591 410 914</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-600 dark:text-primary-400" />
                <span>pixelweb2026@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} PixelWeb.ge. ყველა უფლება დაცულია.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

