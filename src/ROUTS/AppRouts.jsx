import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Servicios from "../Pages/Servicios";
import Crear from "../Pages/Crear-usuarios";
import VerUsuarios from "../Pages/VerUsuarios";

const AppRoutes = () => (
  <Router>
    <Routes>
        <Route path="/" element={<Servicios/>} />
        <Route path="/Crear" element={<Crear/>} />
        <Route path="/Usuarios" element={<VerUsuarios/>} />
    </Routes>
  </Router>
);

export default AppRoutes;
