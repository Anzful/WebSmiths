import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import PageLoader from '@/components/PageLoader'
import VisitorTracker from '@/components/VisitorTracker'
import { Analytics } from '@vercel/analytics/react'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import StickyContactBar from '@/components/StickyContactBar'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'PixelWeb.ge - საიტის დამზადება და ვებსაიტების შექმნა საქართველოში',
  description: 'საიტის დამზადება და ვებსაიტების შექმნა საქართველოში ხელმისაწვდომ ფასად. ვქმნით თანამედროვე, სწრაფ და ხარისხიან ვებგვერდებს თქვენი ბიზნესისთვის.',
  keywords: 'საიტის დამზადება, ვებსაიტის შექმნა, საიტის გაკეთება, ვებ დეველოპმენტი, საქართველო, ხელმისაწვდომი ფასები, PixelWeb',
  authors: [{ name: 'PixelWeb.ge' }],
  metadataBase: new URL('https://pixelweb.ge'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'PixelWeb.ge - საიტის დამზადება და ვებსაიტების შექმნა საქართველოში',
    description: 'ვებსაიტების დამზადება, საიტის გაკეთება და თანამედროვე ვებგვერდები ხელმისაწვდომ ფასად.',
    type: 'website',
    url: 'https://pixelweb.ge',
    locale: 'ka_GE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PixelWeb.ge - საიტის დამზადება და ვებსაიტების შექმნა საქართველოში',
    description: 'საიტის დამზადება, თანამედროვე დიზაინი და სწრაფი ვებსაიტები თქვენი ბიზნესისთვის.',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (e) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://pixelweb.ge/#organization',
              name: 'PixelWeb.ge',
              alternateName: 'PixelWeb',
              url: 'https://pixelweb.ge',
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Website Development',
              name: 'ვებსაიტების დამზადება',
              alternateName: [
                'საიტების დამზადება',
                'საიტის გაკეთება',
                'ვებსაიტების დამზადება',
                'ვებგვერდების დამზადება',
                'საიტები იაფად',
                'საიტები სწრაფად',
                'ვებსაიტების დამზადება საქართველოში',
                'ვებსაიტების დამზადება საქართველოში ფასად',
                'ვებსაიტების დამზადება საქართველოში ხელმისაწვდომი ფასები',
                'ვებსაიტების დამზადება საქართველოში ხელმისაწვდომი ფასები',
                'საქართველოში ვებსაიტების დამზადება',
                'ვებდეველოპმენტი',
                'ვებდეველოპერი',
                'ვებდეველოპერი საქართველოში',
              ],
              provider: {
                '@type': 'Organization',
                name: 'PixelWeb.ge',
                url: 'https://pixelweb.ge',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Georgia',
              },
              availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl: 'https://pixelweb.ge/contact',
              },
            }),
          }}
        />
      </head>
    <body>
      <ThemeProvider>
        <PageLoader />
        <VisitorTracker />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTopButton />
        <Suspense fallback={null}>
          <StickyContactBar />
        </Suspense>
        <Analytics />
      </ThemeProvider>
    </body>
    </html>
  )
}

