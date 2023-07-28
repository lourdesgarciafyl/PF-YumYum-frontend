import './../../css/carritoPedido.css';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import CardItemCarrito from './pedido/CardItemCarrito';
import { crearPedido } from "../helpers/queriesPedido"
import { subtotal, sumaCantidad } from '../helpers/queriesCarrito';
import { useEffect } from 'react';

const CarritoPedido = ({usuario, carrito, setCarrito, totalProductos}) => {
  
  // useEffect(()=>{
  //   setCarrito(carrito)
  // },[carrito])
  
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
              className="justify-content-around borderDerechoContenidoCarrito-lg mb-3"
            >
               {carrito.map((item) => (
                    <CardItemCarrito
                      producto={item}
                      key={item._id}
                      carrito={carrito}
                      setCarrito={setCarrito}
                      usuario={usuario}
                    ></CardItemCarrito>
                  ))}
              <Button
                variant="light"
                type="submit"
                className="mt-2 mb-3 botonVaciarCarrito"
              >
                Vaciar Carrito
              </Button>
            </Col>

            <Col lg={3} className="justify-content-around">
              <ListGroup className="mb-2">
                <ListGroup.Item className="border-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="letra-roboto tamanioLetra">Total:</span>
                    <span className="letra-roboto tamanioLetra">$5800</span>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="letra-roboto tamanioLetra">Envío:</span>
                    <span className="letra-roboto tamanioLetra">Gratis</span>
                  </div>
                </ListGroup.Item>
              </ListGroup>
              <Button
                variant="primary"
                type="submit"
                className="mt-2 mb-1 botonGenerarPedido"
              >
                Generar Pedido
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CarritoPedido;
