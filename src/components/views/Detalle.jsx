import { Container, Card, Row, Col} from "react-bootstrap";
import "../../css/detalle.css";
import { consultaProducto } from "../helpers/queriesProducto";

const Detalle = () => {
  return (
    <Container className="my-3 mainSection">
      <Card className="cardDetalle">
        <Row>
          <Col lg={6}>
            <Card.Body>
              <Card.Title className="titulo"> {producto.nombreProducto} </Card.Title>
              <hr />
              <Card.Text className="texto">
                {producto.detalle}
                <br />
                <br />
             </Card.Text>
              <div className="d-flex justify-content-evenly">
                <p className="precio">{producto.precio}</p>
                <button type="submit" className="botonDetalle"> AÑADIR AL CARRITO </button>
              </div>
            </Card.Body>
          </Col>
          <Col lg={6} className="fotoDetalle">
          <div className="ocultarImagenDetalle">
              <img
                src={producto.imagen}
                alt= "Imagen descriptiva del producto"
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

