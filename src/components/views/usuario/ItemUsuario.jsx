import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import { Link } from 'react-router-dom';
import {
  borrarUsuario,
  consultaListaUsuarios,
} from "../../helpers/queriesUsuario";

const ItemUsuario = ({ usuario, setUsuarios }) => {
  const borrarUsuarioActual = () => {
    Swal.fire({
      title: `¿Esta seguro de borrar el usuario ${usuario.nombreUsuario}?`,
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //borrar el usuario
        borrarUsuario(usuario._id).then((respuesta) => {
          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(
              "Usuario eliminado",
              `El ${usuario.nombreUsuario} fue eliminado correctamente`,
              "success"
            );
            //actualizar la tabla de usuarios
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
        
        <Link className="btn btn-warning" to={'/administrar/usuarios/editar-usuario/'+ usuario._id}>Editar</Link>
  
      
        <Button variant="danger" className="m-1" onClick={borrarUsuarioActual}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
