import styles from '@/app/users/[id]/page.module.css'
import Image from "next/image"

  async function getUsers(id){
   const datos = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
    return datos
 }
 
   async function UserPage({params}){
   const user = await getUsers(params.id)
  return (
    <div className={styles.div}>
        <h1>Detalle</h1>
            {
               <div key={user.id}>
                <div>
              <Image src="/user.png" alt="foto"
                  width={100}
                  height={100}
                  />
                  <p><strong>Nombre: </strong>{user.name}</p>
                   <p><strong>Nombre de usuario: </strong>{user.username}</p>
                   <p><strong>Email: </strong>{user.email}</p>
                   <p><strong>Dirección: </strong>{user.address.city}</p>
                   <p><strong>Teléfono: </strong>{user.phone}</p>
                   <p><strong>Website: </strong>{user.website}</p>
                   <p><strong>Empresa: </strong>{user.company.name}</p>
                </div>
              </div>
            }
    </div>
    )
}
export default UserPage