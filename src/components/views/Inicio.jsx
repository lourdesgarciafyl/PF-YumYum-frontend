import { Container, Row, Button } from "react-bootstrap";
import "../../css/inicio.css";
import CardProductoInicio from "../../components/views/producto/CardProductoInicio";
import Nav from "react-bootstrap/Nav";

const Inicio = () => {
  return (
    <section className="mainSection">
      <div className="imagenBanner">
        <img className="banner" src="" alt="fondo cafe" />
      </div>

      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Hamburguesas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Pizzas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Veggie</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Bebidas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Otros</Nav.Link>
        </Nav.Item>
      </Nav>

      <Container>
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Row className="justify-content-around">
          <CardProductoInicio></CardProductoInicio>
          <CardProductoInicio></CardProductoInicio>
          <CardProductoInicio></CardProductoInicio>
          <CardProductoInicio></CardProductoInicio>
          <CardProductoInicio></CardProductoInicio>
          <CardProductoInicio></CardProductoInicio>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
