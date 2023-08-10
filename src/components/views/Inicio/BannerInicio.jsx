import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgBanner from "../../../assets/ImagenBannerPromo.png"

function BannerInicio() {
  return (
    <Container className="mt-3 p-3">
      <Row>
        <Col sm={12} md={6} className="d-flex justify-content-center align-items-center flex-column  text-white">
          <h3 className="text-center fs-1">PROMO LANZAMIENTO! </h3>
          <p>Sin excusas para disfrutar. ¡Envío gratis en cada pedido!</p>
        </Col>
        <Col sm={12} md={6}>
          <img src={imgBanner}  width={400} className="img-fluid" alt="Imagen Logo YumYum" />
        </Col>
      </Row>
    </Container>
  );
}

export default BannerInicio;
