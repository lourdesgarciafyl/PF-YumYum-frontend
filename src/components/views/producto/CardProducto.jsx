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
              <p className="text-center fw-bold fs-1">
                <b className="fw-bolder fs-1">$</b>
                {precio}{" "}
              </p>{" "}
              <span>
                {" "}
                <p className="text-center detalleLink"> Ver Detalle </p>{" "}
              </span>
            </div>
            <Button variant="light" className="rounded-5">
              {" "}
              <Plus className="fs-1"></Plus>{" "}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
