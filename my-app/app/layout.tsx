import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import ClientThemeWrapper from '@/context/ClientThemeWrapper'
import Dropdown from '@/components/Dropdown'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task Manager App',
  description: 'CMSC447 Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en">
      
      <body  className={inter.className}>{children}</body>
       

    </html>
  )
}
