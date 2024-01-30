import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Proverbs Private College ',
  description: 'This is the school website of Proverbs Private College',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-100">
      <link rel="icon" href="/images/school-badge.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
