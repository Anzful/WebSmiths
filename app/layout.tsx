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
  title: 'PixelWeb.ge - ხელმისაწვდომი ვებსაიტების შექმნა საქართველოში',
  description: 'პროფესიონალური ვებსაიტები ხელმისაწვდომ ფასად. ჩვენ ვქმნით თანამედროვე, სწრაფ და ხარისხიან ვებსაიტებს თქვენი ბიზნესისთვის.',
  keywords: 'ვებსაიტის შექმნა, ვებ დეველოპმენტი, საქართველო, ხელმისაწვდომი ფასები, PixelWeb',
  authors: [{ name: 'PixelWeb.ge' }],
  openGraph: {
    title: 'PixelWeb.ge - ხელმისაწვდომი ვებსაიტების შექმნა',
    description: 'პროფესიონალური ვებსაიტები ხელმისაწვდომ ფასად',
    type: 'website',
  }
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

