import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Chiara daSilva Santos | Portfolio',
  description: 'Personal portfolio showcasing web development and information systems projects by Chiara daSilva Santos.',
  keywords: 'web development, portfolio, information systems, NJIT, Chiara daSilva Santos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#e7e3f1]">
        {children}
      </body>
    </html>
  )
}
