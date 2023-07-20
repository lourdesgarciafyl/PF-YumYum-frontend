import { Col, Card, Button } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import React, { useState } from "react";

const CardProducto = ({ producto }) => {
  const [mostrarElementos, setmostrarElementos] = useState(false);
  const handleMouseEnter = () => {
    setmostrarElementos(true);
  };
  const handleMouseLeave = () => {
    setmostrarElementos(false);
  };

  const { nombreProducto, precio, imagen, _id } = producto;

  return (
    <Col
      md={6}
      lg={3}
      className="mb-3 letraRoboto d-flex justify-content-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="letraRoboto">
        <Card.Title>{nombreProducto}</Card.Title>
        <Card.Img variant="top" src={imagen} className="position-relative" />
        <Card.Body
          className={
            mostrarElementos ? "d-block d-lg-block" : "d-none d-lg-none"
          }
        >
          <div className="justify-content-around flex-column align-items-center w-100 d-flex">
            <div className="fw-bolder position-absolute precio">
              <p className="text-center fw-bold">${precio} </p>{" "}
              <p className="detalleLink">Ver Detalle </p>
            </div>
            <Button className=" rounded-5 btnAgregar">
              {" "}
              <Plus className=" shadow fs-1 p-0 m-0"></Plus>{" "}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
