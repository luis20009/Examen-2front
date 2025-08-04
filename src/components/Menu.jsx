import { Link, useLocation } from "react-router-dom";
import "./css/menu.css";
const Menu = ({ user, handleLogout }) => {
  const location = useLocation();

  return (
    <nav className="nav-menu">
      {location.pathname !== "/Crear" && location.pathname !== "/Usuarios" && (
        <button className="nav-link-1" onClick={handleLogout}>
          SALIR
        </button>
      )}
      
      <div className="nav-center">
        <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
          Servicios
        </Link>
        {user?.Rol === "admin" && (
          <>
            <Link to="/Crear" className={`nav-link ${location.pathname === "/Crear" ? "active" : ""}`}>
              Crear Usuario
            </Link>
            <Link to="/Usuarios" className={`nav-link ${location.pathname === "/Usuarios" ? "active" : ""}`}>
              Ver Usuarios
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Menu;
