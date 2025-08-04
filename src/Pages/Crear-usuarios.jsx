// src/pages/Crear.jsx
import { useState } from "react"
import userService from "../services/userService"
import Menu from "../components/Menu"
import ListaUsuarios from "../components/ListaUsuarios"
import "../components/css/crearusuario.css"

const Crear = ({ user }) => {
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [Rol, setRol] = useState("user")
  const [message, setMessage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newUser = { username, name, password, Rol }
      await userService.createUser(newUser)
      setMessage("✅ Usuario creado correctamente")
      setUsername("")
      setName("")
      setPassword("")
      setRol("user")
    } catch (error) {
      console.error(error.response?.data || error.message)
      setMessage(`❌ Error: ${error.response?.data?.error || "al crear usuario"}`)
    }

    setTimeout(() => setMessage(null), 4000)
  }

  return (
    <div>
      <Menu user={user} />
      <div className="crear-container">
        <h2 className="crear-title">Crear Usuario</h2>
        {message && <p className="crear-message">{message}</p>}
        <form className="crear-form" onSubmit={handleSubmit}>
          <div>
            <label>Usuario: </label>
            <center>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            </center>
          </div>
          <div>
            <label>Nombre: </label>
            <center>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            </center>
          </div>
          <div>
            <label>Contraseña: </label>
            <center>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            </center>
          </div>
          <div>
            <label>Rol: </label>
            <center>
            <select value={Rol} onChange={e => setRol(e.target.value)}>
              <option value="user">Usuario</option>
              <option value="admin">Administrador</option>
            </select>
            </center>
          </div>
          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  )
}

export default Crear
