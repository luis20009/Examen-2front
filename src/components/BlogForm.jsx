import { useState } from "react"
import "./css/Blogtest.css"

const BlogForm = ({ createBlog, onCancel }) => {
  const [title, setNewTitle] = useState('')
  const [author, setNewAuthor] = useState('')
  const [url, setNewUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({ title, author, url }, title, author)
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

  return (
    <form onSubmit={addBlog}>
      <div className="form-group">
        <label htmlFor="title" className="input-label">Título 🔥</label>
        <input
          id="title"
          type="text"
          className="input-field"
          placeholder="Escribe un título encendido..."
          value={title}
          onChange={(e) => setNewTitle(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <label htmlFor="author" className="input-label">Nota 💬</label>
        <input
          id="author"
          type="text"
          className="input-field"
          placeholder="¿Quién lo escribió con pasión?"
          value={author}
          onChange={(e) => setNewAuthor(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="form-group">
        <label htmlFor="url" className="input-label">Publicación 🌐</label>
        <input
          id="url"
          type="text"
          className="input-field"
          placeholder="Enlace sabrosón..."
          value={url}
          onChange={(e) => setNewUrl(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="form-group form-actions">
        <button type="submit" className="btn-create">🔥 Crear blog 🔥</button>
        <button type="button" className="btn-cancel" onClick={onCancel}>Cancelar</button>
      </div>
    </form>
  )
}

export default BlogForm
