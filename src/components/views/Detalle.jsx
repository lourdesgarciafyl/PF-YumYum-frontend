import { Container, Card, Row, Col } from "react-bootstrap";
import "../../css/detalle.css";
import { useEffect, useState } from "react";
import { consultaProducto } from "../helpers/queriesProducto";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";


const Detalle = ({usuarioLogueado, setusuarioLogueado}) => {
  const { id } = useParams();
  const navegacion = useNavigate();
  const [producto, setProducto] = useState({});
  const [existeProducto, setExisteProducto] = useState(true);

  useEffect(() =>{
    consultaProducto(id).then((respuesta) =>{
      setProducto(respuesta)
    })
  }, [])

  
  return (
    <>
      {existeProducto ? (
        <Container className="mt-3 mainSection">
          <Card className="cardDetalle">
            <Row>
              <Col lg={6}>
                <Card.Body className="card-body-detalles">
                  <Card.Title className="titulo">
                    {producto.nombreProducto}
                  </Card.Title>
                  <hr />
                  <Card.Text className="texto">{producto.detalle}</Card.Text>
                  <section>
                    <div className="ordenDetallesPrecio">
                      <p className="fs-1"> ${producto.precio} </p>
                      <button type="submit" className="botonDetalle">
                        AÑADIR AL CARRITO
                      </button>
                    </div>
                  </section>
                </Card.Body>
              </Col>
              <Col lg={6} className="fotoDetalle">
                <div className="ocultarImagenDetalle">
                  <img
                    src={producto.imagen}
                    alt="Imagen descriptiva del producto"
                    className="fijarImagenDetalle"
                  />
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      ) : (
        navegacion("/404")
      )}
      <div className="mb-4 texto container fs-2 text-center">
        <Link className="text-decoration-none letraAmarilla" to={"/"}>
          {" "}
          <button className="btn botonVolver">Volver al menú</button>
        </Link>
      </div>
    </>
  );
};

export default Detalle;
