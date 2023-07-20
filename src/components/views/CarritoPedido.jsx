import './../../css/carritoPedido.css';
import { Container, Row, Col } from 'react-bootstrap';
import CardItemCarrito from './carritoPedido/CardItemCarrito';

const CarritoPedido = () => {
  return (
    <>
      <section className="mainSection letraRoboto mb-3">
        <Container>
          <h1 className="display-4 mt-3 letraSpace text-center text-md-start text-light">
            Mi pedido
          </h1>
          <hr className="colorHr" />
          <Row>
            <Col
              lg={9}
              className="justify-content-around borderDerechoContenidoCarrito-lg"
            >
              <CardItemCarrito></CardItemCarrito>
              <CardItemCarrito></CardItemCarrito>
            </Col>

            <Col lg={3} className="justify-content-around my-3">
              <h2>Total, Envio y Botón Generar Pedido</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CarritoPedido;
