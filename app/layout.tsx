import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Do It Up Unisex Salon | Premium Hair Salon by Nagesh Sonawane',
  description: 'Experience premium grooming at Do It Up Unisex Salon. Expert haircuts, styling, coloring, and bridal services for men and women by Nagesh Sonawane.',
  keywords: ['unisex salon', 'haircut', 'hair coloring', 'bridal makeup', 'men haircut', 'women haircut', 'do it up salon', 'nagesh sonawane'],
  openGraph: {
    title: 'Do It Up Unisex Salon | Premium Hair Salon',
    description: 'Experience premium grooming at Do It Up Unisex Salon. Expert haircuts, styling, coloring, and bridal services for men and women.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0B0B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${bebasNeue.variable} bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-background text-foreground selection:bg-[#D4AF37]/30 selection:text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
