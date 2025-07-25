import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import { satoshi } from '@/utils/fonts'
import { ThemeModeProvider } from '@/utils/Providers'
import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import '../scss/main.scss'

export const metadata: Metadata = {
  title: 'SmartTask Studios Template',
  description: 'Your description here',
  icons: {
    icon: '/favicon (2).ico', // Default favicon
    shortcut: '/favicon (2).ico', // Shortcut icon
    apple: '/favicon (2).ico', // For iOS home screen (optional)
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScrollProvider>
            <ThemeModeProvider>
              <ThemeSwitcher />
              <CursorPointer />
              {children}
            </ThemeModeProvider>
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  )
}
