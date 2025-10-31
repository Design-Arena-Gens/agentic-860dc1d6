import './globals.css'
import type { Metadata } from 'next'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: 'Your Name - Data Science & ML Portfolio',
  description: 'Portfolio showcasing data science and machine learning projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-20">
          <div className="max-w-5xl mx-auto px-6 text-center text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
