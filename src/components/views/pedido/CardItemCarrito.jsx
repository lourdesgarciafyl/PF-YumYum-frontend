import './../../../css/CardItemCarrito.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Trash3Fill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const CardItemCarrito = ({producto}) => {
  return (
    <Card className="letraRoboto mb-3">
      <Card.Body>
        <Row className="p-1">
          <Col xs={12} lg={6}>
            <Row className="align-items-center justify-content-center mb-3 g-5">
              <Col xs={4}>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383720/yumyum/hamburguesaDobleCheddar_wyifm1.png"
                  className="imagenItem"
                />
              </Col>
              <Col xs={8} className="text-end text-lg-start">
                <Card.Title className="letraMono mt-1 text-start p-1">
                  Doble Cheese Burger con Bacon
                </Card.Title>

                <Card.Link href="#" className=" linkDetalle">
                  Ver Detalles
                </Card.Link>
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="d-flex justify-content-between align-items-center gap-2"
          >
            <div className="itemCantidad letraRoboto">
              <div>
                <button className="botonOperarCantidad">-</button>
              </div>
              <span className="mx-1">1</span>
              <div>
                <button className="botonOperarCantidad">+</button>
              </div>
            </div>

            <Trash3Fill
              className="letraRoja iconoEliminar"
              size={25}
            ></Trash3Fill>

            <Card.Text as="h5" className="letraRoboto">
              $ 2900
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardItemCarrito;
