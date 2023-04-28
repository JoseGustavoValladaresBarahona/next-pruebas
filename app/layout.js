import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Link from "next/link"
import { Navbar } from "./components/Navbar"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body>
       <Navbar />
       {children}
      <footer>
       <p>Desarrollado por Jose Gustavo Valladares Barahona</p>
     </footer>
     </body>
    </html>
  )
}
