'use client'

import { Suspense, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import PageTransition from '@/components/PageTransition'

const PHONE_E164 = '+995591410914'
const WHATSAPP_INTL = '995591410914'

function buildWhatsAppHref(search: string) {
  const base = `https://wa.me/${WHATSAPP_INTL}`
  const message = `გამარჯობა, TikTok-იდან გწერთ. მაინტერესებს ვებსაიტი PixelWeb.ge-ზე.${search ? `\nUTM: ${search}` : ''}`
  const params = new URLSearchParams({ text: message })
  return `${base}?${params.toString()}`
}

function TikTokContent() {
  const searchParams = useSearchParams()
  const search = useMemo(() => searchParams?.toString() || '', [searchParams])
  const waHref = useMemo(() => buildWhatsAppHref(search), [search])
  const callHref = `tel:${PHONE_E164}`

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (submitStatus !== 'idle') {
      const t = setTimeout(() => setSubmitStatus('idle'), 5000)
      return () => clearTimeout(t)
    }
  }, [submitStatus])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: '',
          company: '',
          service: 'Landing Page (TikTok)',
          budget: '',
          message: `${formData.message}${search ? `\n\nUTM: ${search}` : ''}`,
        }),
      })
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    '3–5 დღეში მიწოდება',
    'სუფთა, სწრაფი, მობილურზე იდეალური',
    'ფასები 500 ₾-დან',
  ]

  const plans = [
    { name: 'Landing Page', price: '500–700 ₾', time: '3–5 დღე' },
    { name: 'ბიზნეს საიტი', price: '1,000–2,500 ₾', time: '7–10 დღე' },
    { name: 'E‑commerce', price: '3,000–5,000 ₾', time: '14–21 დღე' },
  ]

  const showcase = [
    { title: 'AndCook', img: '/images/AndCook.jpg' },
    { title: 'AndWatch', img: '/images/andwatch.jpg' },
    { title: 'Furniture Store', img: '/images/Furniture1.jpg' },
  ]

  return (
    <>
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-6 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
            >
              Landing Page 3–5 დღეში
              <span className="block text-primary-600 dark:text-primary-400 mt-2">ფასები 500 ₾-დან</span>
            </motion.h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-4">
              შევქმნით თქვენს ლენდინგს სწრაფად და ხარისხიანად.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6">
              <a href={waHref} className="bg-green-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-green-600 transition-all font-semibold inline-flex items-center justify-center">
                <FaWhatsapp className="mr-2" /> WhatsApp
              </a>
              <a href={callHref} className="bg-primary-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-primary-700 transition-all font-semibold inline-flex items-center justify-center">
                <FaPhone className="mr-2" /> დარეკვა
              </a>
              <Link href="#quick-form" className="bg-white text-primary-600 border-2 border-primary-600 px-6 sm:px-8 py-3 rounded-lg hover:bg-primary-50 transition-all font-semibold inline-flex items-center justify-center">
                მოთხოვნის გაგზავნა <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="flex flex-wrap justify_center gap-3 mt-6">
              {benefits.map((b) => (
                <span key={b} className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-1.5">
                  <FaCheckCircle className="text-green-500" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-10 sm:py-12 md:py-14 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">ბოლო ნამუშევრები</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {showcase.map((s, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-gray-50 dark:bg_gray-800 border border-gray-100 dark:border-gray-700">
                <div className="relative pt-[60%] bg-gray-200 dark:bg-gray-700">
                  <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center font-semibold text-gray-900 dark:text-white">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-10 sm:py-12 md:py-14 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">პაკეტები და ვადები</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((p, i) => (
              <div key={i} className={`rounded-xl shadow-lg p-6 bg-white dark:bg-gray-800 border ${i === 0 ? 'ring-4 ring-primary-600/20 border-primary-200 dark:border-primary-900/30' : 'border-gray-100 dark:border-gray-700'}`}>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">{p.name}</div>
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">{p.price}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">მიწოდება: {p.time}</div>
                <Link href={waHref} className="inline-block bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition-all font-semibold">
                  კონსულტაცია
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Form */}
      <section id="quick-form" className="py-10 sm:py-12 md:py-14 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">მოგვწერეთ სწრაფად</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">ვუპასუხებთ მაქსიმალურად სწრაფად და დავაზუსტებთ დეტალებს.</p>

            {submitStatus === 'success' && (
              <div className="mb-4 p-3 rounded-lg border border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                ✅ შეტყობინება მიღებულია! დაგიკავშირდებით მალე.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 rounded-lg border border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                ❌ დაფიქსირდა შეცდომა. სცადეთ ხელახლა ან გამოიყენეთ WhatsApp/ზარი ან კონტაქტის ფორმა.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">სახელი *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="თქვენი სახელი"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">ელ-ფოსტა *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">შეტყობინება *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg_white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="მოგვიყევით მოკლედ რას ეძებთ..."
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? 'იგზავნება...' : 'გაგზავნა'}
                </button>
                <a href={waHref} className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
                  <FaWhatsapp /> WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ + Final CTA */}
      <section className="py-10 sm:py-12 md:py-14 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">ხშირი კითხვები</h2>
          <div className="max-w-3xl mx-auto text-primary-100 mb-6 space-y-2">
            <p><strong>რამდენი ხანი სჭირდება?</strong> Landing Page – 3–5 დღე, ბიზნეს საიტი – 7–10 დღე.</p>
            <p><strong>შეგიძლიათ ეტაპობრივი გადახდა?</strong> დიახ, 50% წინასწარ და 50% გაშვებისას.</p>
            <p><strong>ჰოსტინგი/დომენი შედის?</strong> ცალკეა, შეგვიძლია სრულად მოვაწყოთ.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waHref} className="bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold inline-flex items-center justify-center">
              <FaWhatsapp className="mr-2" /> დაიწყეთ WhatsApp-ით
            </a>
            <a href={callHref} className="bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-all font-semibold inline-flex items-center justify-center">
              <FaPhone className="mr-2" /> დარეკვა
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default function TikTokLanding() {
  return (
    <PageTransition>
      <Suspense fallback={null}>
        <TikTokContent />
      </Suspense>
    </PageTransition>
  )
}


