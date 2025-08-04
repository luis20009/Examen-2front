import Menu from "../components/Menu";
import ListaUsuarios from "../components/ListaUsuarios";

const VerUsuarios = ({ user }) => {
  return (
    <div>
      <Menu user={user} />
      <ListaUsuarios user={user} />
    </div>
  );
};

export default VerUsuarios;
