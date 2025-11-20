import type { Metadata } from 'next'
import Link from 'next/link'
import { FaCheck, FaClock, FaMoneyBillWave, FaRocket } from 'react-icons/fa'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'საიტის დამზადება | ვებსაიტების შექმნა საქართველოში | PixelWeb',
  description:
    'საიტის დამზადება საუკეთესო ფასად. პროფესიონალური ვებსაიტების შექმნა, Landing Page, ინტერნეტ მაღაზია. სწრაფი და ხარისხიანი მომსახურება საქართველოში.',
  keywords:
    'საიტის დამზადება, საიტის გაკეთება, ვებსაიტების დამზადება, ვებგვერდების დამზადება, საიტების შექმნა, ვებ დეველოპმენტი, იაფი საიტები, სწრაფი საიტები',
  alternates: {
    canonical: 'https://pixelweb.ge/saitis-damzadeba',
  },
  openGraph: {
    title: 'საიტის დამზადება | ვებსაიტების შექმნა | PixelWeb',
    description:
      'გსურთ საიტის დამზადება? ჩვენ გთავაზობთ უმაღლესი ხარისხის ვებგვერდებს ხელმისაწვდომ ფასად. დაგვიკავშირდით დღესვე.',
    url: 'https://pixelweb.ge/saitis-damzadeba',
  },
}

export default function SaitisDamzadebaPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section Optimized for Keyword */}
        <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              საიტის დამზადება
              <span className="block text-primary-300 mt-2 text-2xl sm:text-4xl">
                თქვენი ბიზნესისთვის
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              გჭირდებათ <strong>საიტის დამზადება</strong> სწრაფად და ხარისხიანად? ჩვენ გთავაზობთ
              სრულ ვებ მომსახურებას: Landing Page, კორპორატიული საიტები და ონლაინ მაღაზიები.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:scale-105 inline-block"
            >
              შეუკვეთე საიტი
            </Link>
          </div>
        </section>

        {/* Content Section with Keywords */}
        <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-primary-600 dark:text-primary-400">
              რატომ არის საიტის დამზადება მნიშვნელოვანი?
            </h2>
            <div className="prose dark:prose-invert lg:prose-lg max-w-none space-y-4">
              <p>
                ციფრულ ეპოქაში <strong>საიტის დამზადება</strong> ნებისმიერი ბიზნესის წარმატების
                საწინდარია. მომხმარებლების 80%-ზე მეტი ინფორმაციას ეძებს Google-ში, და თუ თქვენი
                კომპანია არ ჩანს ძიების შედეგებში, თქვენ კარგავთ პოტენციურ კლიენტებს.
              </p>
              <p>
                ჩვენ ვთავაზობთ <strong>ვებსაიტების დამზადებას</strong> უახლესი ტექნოლოგიებით
                (Next.js, React), რაც უზრუნველყოფს საიტის სისწრაფეს, უსაფრთხოებას და SEO
                ოპტიმიზაციას.
              </p>
              <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                ჩვენი უპირატესობები
              </h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    <strong>სწრაფი საიტები:</strong> Google პრიორიტეტს ანიჭებს სწრაფ საიტებს.
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    <strong>მობილური ადაპტაცია:</strong> სრულად რესპონსიული დიზაინი ყველა
                    მოწყობილობისთვის.
                  </span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    <strong>SEO ოპტიმიზაცია:</strong> საიტის სტრუქტურა მორგებულია Google-ის
                    მოთხოვნებს.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Snippet */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 dark:text-white">საიტის დამზადების ფასები</h2>
              <p className="text-gray-600 dark:text-gray-300">
                ჩვენი ფასები გამჭვირვალეა და მორგებულია ქართულ ბაზარს.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border-t-4 border-primary-500">
                <FaRocket className="text-4xl text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">Landing Page</h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">400 ₾-დან</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  იდეალურია სარეკლამო კამპანიებისთვის.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border-t-4 border-primary-600 transform scale-105">
                <FaMoneyBillWave className="text-4xl text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">ბიზნეს საიტი</h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">1000 ₾-დან</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  სრული კორპორატიული ვებგვერდი.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border-t-4 border-primary-700">
                <FaClock className="text-4xl text-primary-700 mb-4" />
                <h3 className="text-xl font-bold mb-2 dark:text-white">E-commerce</h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">3000 ₾-დან</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ონლაინ მაღაზია გადახდის სისტემით.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">მზად ხართ შეუკვეთოთ საიტის დამზადება?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
              ნუ დაკარგავთ დროს. მიიღეთ უფასო კონსულტაცია და გაიგეთ ზუსტი ფასი.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all inline-block"
            >
              დაგვიკავშირდით
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

