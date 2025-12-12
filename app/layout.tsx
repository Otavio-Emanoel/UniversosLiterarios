import type { Metadata } from 'next'
import { Space_Grotesk, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" })
const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-display" })

export const metadata: Metadata = {
  title: 'Atlas dos Mundos Literários',
  description: 'Explore universos icônicos com quizzes, arte e trilhas imersivas.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${playfairDisplay.variable}`}>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
