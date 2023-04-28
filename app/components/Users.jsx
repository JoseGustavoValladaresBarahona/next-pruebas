
"use client";
import {useRouter} from "next/navigation"
import Image from "next/image"
 async function Users({users}){
   const router = useRouter()
  return(
       <>
            {
              users.map((user)=>
              <div key={user.id}
                onClick={()=> router.push(`/users/${user.id}`)}
                 >
                 <Image src="/promoglobal.png" alt="foto"
                  width={200}
                  height={210}
                  />
                  <p><strong>Nombre: </strong>{user.name}</p>
                </div>
              )
            }
       </>
    )
}
export default Users