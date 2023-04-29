
"use client";
import {useRouter} from "next/navigation"
import Image from "next/image"
import styleUser from '@/app/components/users.module.css'

 async function Users({users}){
   const router = useRouter()
  return(
       <>
            {
              users.map((user)=>
              <div key={user.id}
                onClick={()=> router.push(`/users/${user.id}`)}
                 >
                 <Image src="/user.png" alt="foto"
                  width={100}
                  height={100}
                  />
                  <p><strong>Nombre: </strong>{user.name}</p>
                </div>
              )
            }
       </>
    )
}
export default Users