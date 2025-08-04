import { useState } from "react"
import "./css/Blog.css"

const Blog = ({ blog, updateBlog, deleteBlog, user }) => {
  const [info, setInfo] = useState(false)
  const [likes, setLikes] = useState(blog.likes)
  const [category, setCategory] = useState("")

  const handleLikes = () => {
    const newLikes = likes + 1
    setLikes(newLikes)
    updateBlog(blog.id, { likes: newLikes })

    if (newLikes >= 29) {
      setCategory("Popular")
    } else if (newLikes > 8) {
      setCategory("Moderate")
    } else {
      setCategory("matese")
    }
  }

  const handleDisLikes = ({user}) => {
    if (likes >= 1) {
      const newLikes = likes - 1
      setLikes(newLikes)
      updateBlog(blog.id, { likes: newLikes })

      if (newLikes >= 32) {
        setCategory("Popular")
      } else if (newLikes > 10) {
        setCategory("Moderate")
      } else {
        setCategory("matese")
      }
    } else {
      alert("No puedes restar más likes, el mínimo es 0")
    }
  }

  const toggleView = () => setInfo(!info)

  const handleDelete = () => {
    if (window.confirm(`Delete ${blog.title} by ${blog.author}?`)) {
      deleteBlog(blog.id)
    }
  }

  const isOwner = user?.username === blog?.user?.username

  return (
    <div className="blog">
      {!info ? (
        <div className="blog-summary">
          <span className="blog-title">{blog.title}</span> by <span className="blog-author">{blog.author}</span>
          <button onClick={toggleView} className="btn-view">👁️</button>
        </div>
      ) : (
        <div className="blog-summary">
          <div>
            <span className="blog-title">Title: {blog.title}</span>
            <button onClick={toggleView} className="btn-hide">🙈</button>
          </div>
          <div className="blog-nota">Nota: {blog.author}</div>
          <div className="blog-publicacion">Publicacion: {blog.url}</div>
          <div className="blog-likes">
            Likes: <span className="likes">{likes}</span>
            <button onClick={handleLikes} className="btn-like">❤️</button>
            <button onClick={handleDisLikes} className="btn-dislike">💔</button>
          </div>
          <div className={`badge ${category}`}>Categoria: {category}</div>
          <div className="blog-user">{blog.user.name}</div>
          {isOwner && <button onClick={handleDelete} className="btn-delete">🗑️</button>}
        </div>
      )}
    </div>
  )
}

export default Blog
