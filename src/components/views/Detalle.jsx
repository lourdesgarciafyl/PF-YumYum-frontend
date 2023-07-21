import { Container, Card, Row, Col } from "react-bootstrap";
import "../../css/detalle.css";
import { useEffect, useState } from "react";
import { consultaProducto } from "../helpers/queriesProducto";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Detalle = () => {
  const { id } = useParams();
  const navegacion = useNavigate();
  const [producto, setProducto] = useState();
  const [existeProducto, setExisteProducto] = useState(true);

  useEffect(() => {
    consultaProducto(id)
      .then((respuesta) => {
        if (respuesta.id) {
          setExisteProducto(true);
          setProducto(respuesta);
        } else {
          Swal.fire("Ocurrió un error", `No pudimos encontrar el producto que buscas`, "error");
          setExisteProducto(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        Swal.fire("Ocurrió un error", `No pudimos encontrar el producto que buscas`, "error");
        setExisteProducto(false);
      });
  }, [id]);

  if (!producto) {
    return null;
  }

  return (
    <>
      {existeProducto ? (
        <Container className="my-3 mainSection">
          <Card className="cardDetalle">
            <Row>
              <Col lg={6}>
                <Card.Body>
                  <Card.Title className="titulo">{producto.nombreProducto}</Card.Title>
                  <hr />
                  <Card.Text className="texto">{producto.detalle}</Card.Text>
                  <div className="d-flex justify-content-evenly">
                    <p className="precio">{producto.precio}</p>
                    <button type="submit" className="botonDetalle">
                      AÑADIR AL CARRITO
                    </button>
                  </div>
                </Card.Body>
              </Col>
              <Col lg={6} className="fotoDetalle">
                <div className="ocultarImagenDetalle">
                  <img src={producto.imagen} alt="Imagen descriptiva del producto" className="fijarImagenDetalle" />
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      ) : (
        navegacion("/404")
      )}
    </>
  );
};

export default Detalle;
