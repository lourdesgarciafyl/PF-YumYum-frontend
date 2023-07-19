import { Container, Card, Row, Col} from "react-bootstrap";
import "../../css/detalle.css";

const Detalle = () => {
  return (
    <Container className="my-3 mainSection">
      <Card className="cardDetalle">
        <Row>
          <Col lg={6}>
            <Card.Body>
              <Card.Title className="titulo">DOBLE CHEESEBURGER</Card.Title>
              <hr />
              <Card.Text className="texto">
                La Doble Cheeseburger incluye dos patties 100% carne. Vienen cubierta con crujientes pepinillos, cebolla picada, ketchup, mostaza y dos rebanadas de queso americano.
                <br />
                <br />
              
              </Card.Text>

              <div className="d-flex justify-content-evenly">
                <p className="precio"> $2000</p>
                <button type="submit" className="botonDetalle"> AÑADIR AL CARRITO </button>
              </div>
            </Card.Body>
          </Col>
          <Col lg={6} className="fotoDetalle">
          <div className="ocultarImagenDetalle">
              <img
                src="../../src/assets/hamburguesaDobleCheddar.png"
                alt="Imagen del producto"
                className="fijarImagenDetalle"
              />
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Detalle;

