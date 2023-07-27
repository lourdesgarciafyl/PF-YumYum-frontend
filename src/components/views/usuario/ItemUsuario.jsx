import React from "react";
import { Button } from "react-bootstrap";
  // import { Link } from 'react-router-dom';
  import {editarUsuario, borrarUsuario, obtenerUsuario, consultaListaUsuarios} from "../../helpers/queriesUsuario"

const ItemUsuario = ({usuario, setUsuarios}) => {






  return (
    <tr>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>{usuario.estado}</td>
      <td>{usuario.perfil}</td>

      <td className="d-flex justify-content-around">
        
        <Button variant="warning" className="m-1">.
   
          Editar
        </Button>
        <Button variant="danger" className="m-1">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
