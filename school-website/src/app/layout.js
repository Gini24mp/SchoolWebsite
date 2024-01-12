import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saint Paul Highschool',
  description: 'This is the school website of Saint Paul Highschool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="bg-gray-100">
      <link rel="icon" href="/images/school-badge.svg" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
