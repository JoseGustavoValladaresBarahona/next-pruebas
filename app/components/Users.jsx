
"use client";
import {useRouter} from "next/navigation"
import Image from "next/image"
import styleUser from '@/app/components/styleUser.module.css'

 async function Users({users}){
   const router = useRouter()
  return(
       <div>
            {
              users.map((user)=>
              <div className={styleUser.card} key={user.id}
                onClick={()=> router.push(`/users/${user.id}`)}
                 >
                 <Image src="/user.png" alt="foto"
                  width={100}
                  height={100}
                  />
                  <p>{user.name}</p>
                </div>
              )
            }
       </div>
    )
}
export default Users