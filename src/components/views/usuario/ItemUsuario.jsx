import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {borrarUsuario,consultaListaUsuarios } from "../../helpers/queriesUsuario";
import "../../../css/itemUsuario.css"
const ItemUsuario = ({ usuario, setUsuarios }) => {
  const borrarUsuarioActual = () => {
    Swal.fire({
      title: `¿Esta seguro de borrar el usuario ${usuario.nombreUsuario}?`,
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f5ad28",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarUsuario(usuario._id).then((respuesta) => {
          if (respuesta.status === 200) {
            Swal.fire({
             title: "Usuario eliminado",
             text: `El ${usuario.nombreUsuario} fue eliminado correctamente`,
              icon: "success",
              confirmButtonColor: ' #d8572a'
          });
            consultaListaUsuarios().then((respuesta) => setUsuarios(respuesta));
          } else {
            Swal.fire(
              "Ocurrio un error",
              `Intente realizar esta operación nuevamente mas tarde`,
              "success"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>{usuario.estado}</td>
      <td>{usuario.perfil}</td>

      <td className="d-flex justify-content-around">  
        <Button className="fondoAmarillo py-1 btnEditarUsuario" as={Link} to={`editar-usuario/${usuario._id}`}>Editar</Button>
        <Button  className="fondoRojo btnBorrarUsuario" onClick={borrarUsuarioActual}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
