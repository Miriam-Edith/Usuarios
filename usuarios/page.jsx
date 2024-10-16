import Link from "next/link";
import axios from "axios";
async function getUsuarios(){
  const url="https://jsonplaceholder.typicode.com/users"
  const usuarios=await axios.get(url);
  //console.log(universidades.data);
  return usuarios.data;
}
export default async function Usuarios(){
  const Usuarios=await getUsuarios();  
  return(
        <>
          <h1>Usuarios</h1>
          <table className="table">
            <thead>
                <tr>
                  <th>id</th>
                  <th>Usuarios</th>
                  <th>Sitio web</th>
                </tr>
            </thead>
            <tbody>
                {
                   Usuarios.map((user, i) => (
                    <tr key={user.id}> 
                        <td>{i + 1}</td>
                        <td><Link href={`/usuarios/${user.id}`}> {user.name}</Link></td>
                        <td>{user.email}</td>
                    </tr>
                  ))
                }
            </tbody>
          </table>
        </>
    );
}