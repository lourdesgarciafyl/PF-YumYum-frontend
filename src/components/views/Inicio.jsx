import { Container, Row, Button, Carousel } from "react-bootstrap";
import "../../css/inicio.css";
import CardProducto from "../../components/views/producto/CardProducto";
import Nav from "react-bootstrap/Nav";
import banner2 from "../../assets/img/Banner2.jpg";
import banner3 from "../../assets/img/Banner3.jpg";
import banner4 from "../../assets/img/Banner4.jpg";

const Inicio = () => {
  return (
    <section className="mainSection letraRoboto mb-3">
      <Carousel fade className="Carrusel-MD-LG">
        <Carousel.Item>
          <img src={banner2} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner3} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner4} />
        </Carousel.Item>
      </Carousel>
      ;
      <Container>
        <h1 className="display-4 text-center text-white mt-3 letraSpace">
          Menú
        </h1>
        <hr />
        <Nav className="justify-content-center my-4 menuBuscador  ">
        <Nav.Item>
            <Nav.Link href="">Todo</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="">Hamburguesas</Nav.Link>
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
        <hr />
        <Row className="justify-content-around">
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          <CardProducto></CardProducto>
          
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
