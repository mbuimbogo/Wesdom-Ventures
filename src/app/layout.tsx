import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: ' Wesdom Ventures',
  description: 'With us, all your land matters are sorted',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='relative'>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
