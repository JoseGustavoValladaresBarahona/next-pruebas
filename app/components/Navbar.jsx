
import Link from "next/link"
import styles from "./Navbar.module.css"

export function Navbar(){
  return(
     <nav className={styles.Nav}>
       <Link href="/" className={styles.Link}>Home</Link>
       <Link href="/About" className={styles.Link}>About</Link>
       <Link href="/Contact" className={styles.Link}>Contacto</Link>
     </nav>
    )
}