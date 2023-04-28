

import Link from "next/link"
import Head from "next/head"
 
 export const metadata = {
  title: 'About',
  description: 'Web',
}
 
export default function About(){
   return (
     <>
     <Head>
       {metadata} 
     </Head>
     <h1>About</h1>
     <p>Esta es una web simple de aprendizaje de Nextjs 13 con nuevas caracteristicas y funciones las cuales estan en fase beta, puedes visitar el sitio oficial de <Link href="https://nextjs.org/blog/next-13"> Nextjs</Link>. </p>
      <p>Entre los cuales pongo en práctica: rutas estáticas, dinamicas, metadatas, api route, fetch, async, await, useRouter, rutas anidadas,paralelas,page de carga, use client, rutas ordenadas, componentes del lado del cliente y servidor.</p>
     </>
   )
}