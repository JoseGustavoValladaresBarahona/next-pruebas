
import Head from "next/head"

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
    </>
    )
}