
import Head from "next/head"
import Link from "next/link"

export const metadata = {
  title: 'Contact',
  description: 'Web',
}

export default function Contact(){
  return (
    <>
     <Head>
        {metadata}
     </Head>
    <h1>Contacto</h1>
    <Link href="https://github.com/JoseGustavoValladaresBarahona">Github</Link><br/><br/>
    <Link href="https://linkedin.com/in/josé-gustavo-valladares-barahona">Linkedln</Link>
    </>
    )
}

