// app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // optional CSS variable
})

export const metadata = {
  title: 'AI Corp',
  description: 'Next.js 15 project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark bg-[#020817] antialiased`}>
        {children}
      </body>
    </html>
  )
}
