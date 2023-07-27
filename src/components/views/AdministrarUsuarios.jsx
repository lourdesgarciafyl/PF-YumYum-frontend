import React from "react";
import { useState, useEffect } from 'react';
import { Table } from "react-bootstrap";
import ItemUsuario from "./usuario/ItemUsuario";
import { Link } from "react-router-dom";
import { consultaListaUsuarios } from "../helpers/queriesUsuario"

const AdministradorUsuarios = () => {

  const [usuarios, setUsuarios] = useState([]);

   useEffect(() => {
    consultaListaUsuarios()
      .then((repuesta) => {
        setUsuarios(repuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="container mainSection my-4">
      <section>
        <div className="d-flex justify-content-between align-items-center mt-5 mb-2">
          <h1 className="display-4 letraAmarilla">Usuarios</h1>

          <Link
            className="btn btn btn-warning"
            to="/administrar/usuarios/agregar-usuario"
          >
            Agregar
          </Link>
        </div>

        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Estado</th>
              <th>Perfil</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <ItemUsuario key={usuario._id} usuario={usuario} setUsuarios={setUsuarios}></ItemUsuario>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default AdministradorUsuarios;
