import { Container, Card, Row, Col } from "react-bootstrap";
import "../../css/detalle.css";
import { useEffect, useState } from "react";
import { consultaProducto } from "../helpers/queriesProducto";
import { useParams, useNavigate, Link } from "react-router-dom";
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
          Swal.fire(
            "Ocurrió un error",
            `No pudimos encontrar el producto que buscas`,
            "error"
          );
          setExisteProducto(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        Swal.fire(
          "Ocurrió un error",
          `No pudimos encontrar el producto que buscas`,
          "error"
        );
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
                  <Card.Title className="titulo">
                    {producto.nombreProducto}
                  </Card.Title>
                  <hr />
                  <Card.Text className="texto">{producto.detalle}</Card.Text>
                  <div className="ordenDetallesPrecio">
                    <p className="fs-1"> ${producto.precio} </p>
                    <button type="submit" className="botonDetalle">
                      AÑADIR AL CARRITO
                    </button>
                  </div>
                  <div className="mt-5 texto">
                    <Link
                      className="text-decoration-none letraAmarilla botonLevantado"
                      to={"/"}
                    >
                      {" "}
                      <p>
                        <i className="bi bi-arrow-left-circle p-1"></i> Volver
                        al menú{" "}
                      </p>
                    </Link>
                  </div>
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
    </>
  );
};

export default Detalle;
