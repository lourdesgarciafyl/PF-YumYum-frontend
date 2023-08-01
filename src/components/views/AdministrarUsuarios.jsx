import React from "react";
import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import ItemUsuario from "./usuario/ItemUsuario";
import { Link } from "react-router-dom";
import { consultaListaUsuarios } from "../helpers/queriesUsuario";

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
    <div className="container mainSection">
      <section>
        <div className="d-flex justify-content-between align-items-center flex-column">
          <h1 className="text-center letraSpace letraAmarilla fs-1 mt-md-4 mt-lg-5 mb-2">
            Administrar Usuarios
          </h1>

          <div className="mb-3">
            <Button
              className="btnAgregarProducto"
              as={Link}
              to={"/administrar/usuarios/agregar-usuario"}
            >
              Agregar nuevo usuario
            </Button>
          </div>
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
              <ItemUsuario
                key={usuario._id}
                usuario={usuario}
                setUsuarios={setUsuarios}
              ></ItemUsuario>
            ))}
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default AdministradorUsuarios;
