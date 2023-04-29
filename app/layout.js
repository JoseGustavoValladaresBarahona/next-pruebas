import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"
import { Navbar } from "./components/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata= {
  title: 'Home',
  description: 'Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={inter.className}>
       <Navbar />
       {children}
      <footer>
       <p>Desarrollado por Jose Gustavo Valladares Barahona</p>
      </footer>
     </body>
    </html>
  )
}
