import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QR Code Genrator And Scan QR Code',
  description: 'QR Code Genrator and Scan QR Code and get link | URL to QR code | Text to QR code ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
      <Nav/>
      {children}
      <Footer/>
      </body>
   
    </html>
  )
}
