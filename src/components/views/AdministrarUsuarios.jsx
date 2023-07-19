import React from "react";
import { Table } from "react-bootstrap";
import ItemUsuario from "./usuario/ItemUsuario";

const AdministradorUsuarios = () => {
  const usuarios = [
    {
      _id: 1,
      nombreUsuario: "Juan",
      apellidoUsuario: "Perez",
      email: "juanperez@gmail.com",
    },
  ];

  return (
    <div className="container mainSection my-4">
      <section>
        <div className="d-flex justify-content-between align-items-center mt-5">
          <h1 className="display-4 letraAmarilla">Usuarios</h1>
          <button className="btn btn-warning">Agregar</button>
        </div>
        <hr />
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Perfil</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <ItemUsuario key={usuario._id} usuario={usuario}></ItemUsuario>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default AdministradorUsuarios;
