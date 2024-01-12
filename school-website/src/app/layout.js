import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saint Paul Highschool',
  description: 'This is the school website Green valley high',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="bg-gray-100">
      <link rel="icon" href="favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
