

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
     </>
   )
}