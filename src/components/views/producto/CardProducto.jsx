import { Col, Card, Button, Badge } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import React, { useState } from "react";

const CardProducto = () => {
  const [mostrarElementos, setmostrarElementos] = useState(false);

  const handleMouseEnter = () => {
    setmostrarElementos(true);
  };

  const handleMouseLeave = () => {
    setmostrarElementos(false);
  };





  return (
    <Col
      md={6}
      lg={3}
      className="mb-3"
      onMouseEnter={handleMouseEnter}
  
      onMouseLeave={handleMouseLeave}
    >
      <Card className="">
        <Card.Title>Doble Cheese Burger con Bacon</Card.Title>
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383720/yumyum/hamburguesaDobleCheddar_wyifm1.png" className="position-reltive"
        />
        <Card.Body className={mostrarElementos ? "d-block d-lg-block" : "d-none d-lg-none"}>
          <div className="justify-content-around flex-column align-items-center w-100 d-flex">
            <div className="fw-bolder position-absolute precio text-dark"><p>$2999 </p> <p className="detalleLink">Ver Detalle </p></div>
            <Plus className=" verMas shadow"></Plus>{" "}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
