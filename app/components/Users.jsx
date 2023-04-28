
"use client";
import {useRouter} from "next/navigation"

 async function Users({users}){
   const router = useRouter()
  return(
       <>
            {
              users.map((user)=>
              <div key={user.id}
                onClick={()=> router.push(`/users/${user.id}`)}
                 >
                 <img src="/promoglobal.png" alt="foto"
                  width={200}
                  />
                  <p><strong>Nombre: </strong>{user.name}</p>
                </div>
              )
            }
       </>
    )
}
export default Users