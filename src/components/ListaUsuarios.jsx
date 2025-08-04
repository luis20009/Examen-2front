import { useEffect, useState } from "react"
import userService from "../services/userService"
import Menu from "../components/Menu"
import "./css/usuarios.css"

const ListaUsuarios = ({ user }) => {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const datos = await userService.getAll()
      setUsuarios(datos)
    }
    fetchUsers()
  }, [])

  return (
    <div className="usuarios-container">
      <h2 className="usuarios-title">Usuarios Registrados</h2>
      {usuarios.length === 0
        ? <p className="usuarios-empty">No hay usuarios aún.</p>
        : (
          <ul className="usuarios-list">
            {usuarios.map(u => (
              <li key={u.id}>
                <span className="usuarios-username">Usuario: {u.username}</span>
                <span className="usuarios-name">Nombre: {u.name}</span>
                <span className="usuarios-rol">Rol: {u.Rol || "Sin rol"}</span>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default ListaUsuarios
