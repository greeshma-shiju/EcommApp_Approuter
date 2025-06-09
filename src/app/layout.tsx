import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapLoader from './BootstrapLoader'
import Nav from './components/nav/Nav'
import Footer from "./components/footer/Footer";
import './globals.css'
import { CartProvider } from './context/CartContext'


const inter = Inter({ subsets: ['latin'] })
   export const metadata: Metadata = {
  title: 'Quick eComm1',
  description: 'Greeshma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapLoader /> 
        
        <CartProvider>
          <Nav/>
        {children}
        </CartProvider>
       <Footer/>
       
        </body>
    </html>
  )
}
