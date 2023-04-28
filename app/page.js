
import styles from './page.module.css'
import Link from "next/link"
import style from './globals.css'
import Users from "@/app/components/Users"
import Head from "next/head"

 export const metadata = {
  title: 'Home',
  description: 'Web',
}

 async function fetchposts(){
   const datos = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    return datos
 }
 
  export default async function Home() {
    const users = await fetchposts()
  return (
    <>
     <Head>
        {metadata}
     </Head>
    <main className={style.main}>
        <h2>Datos de usuario</h2>
        <hr />
        <Users users={users} />
    </main>
    </>
  )
}
