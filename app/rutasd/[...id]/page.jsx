
 /*export default function ({params}){
  return <h1>Rutas Dinamicas extendidas</h1>
}*/


async function getUsers(id){
   const datos = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
    return datos
 }
 
   async function UserPage({params}){
   const user = await getUsers(params.id)
  return (
    <div>
        <h1>Detalle</h1>
        <ul>
            {
               <li key={user.id}>
                <div>
                  <p>{user.name}</p>
                  <p>{user.username}</p>
                </div>
                </li>
            }
       </ul>
    </div>
    )
}
export default UserPage