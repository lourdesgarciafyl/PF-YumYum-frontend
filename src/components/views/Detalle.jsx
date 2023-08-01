import { Container, Card, Row, Col } from "react-bootstrap";
import "../../css/detalle.css";
import { useEffect, useState } from "react";
import { consultaProducto } from "../helpers/queriesProducto";
import { useParams, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import sumarProducto from "../helpers/funcionSumarCarrito";

const Detalle = ({
  usuarioLogueado,
  setusuarioLogueado,
  carrito,
  setCarrito,
  totalProductos,
}) => {
  const { id } = useParams();
  const navegacion = useNavigate();
  const [producto, setProducto] = useState({});
  const [existeProducto, setExisteProducto] = useState(true);

  useEffect(() => {
    consultaProducto(id).then((respuesta) => {
      setProducto(respuesta);
    });
  }, []);

  const sumarProductoCarrito = (productoSumado) => {
    if (
      usuarioLogueado.perfil === "Cliente" ||
      usuarioLogueado.perfil === "Administrador"
    ) {
      if (totalProductos < 15) {
        const productoConIdProducto = {
          idProducto: productoSumado._id,
        };
        const existeProducto = carrito.find(
          (itemCarrito) =>
            itemCarrito.idProducto === productoConIdProducto.idProducto
        );
        if (existeProducto) {
          setCarrito(
            sumarProducto(productoConIdProducto, carrito, totalProductos)
          );
        } else {
          const nuevoProducto = {
            idProducto: productoConIdProducto.idProducto,
            imagen: productoSumado.imagen,
            nombreProducto: productoSumado.nombreProducto,
            cantidad: 1,
            precio: productoSumado.precio,
            subtotalItem: productoSumado.precio,
          };
          setCarrito([...carrito, nuevoProducto]);
        }
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se agregó producto al carrito.",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Se permiten máximo 15 productos al carrito",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } else if (!usuarioLogueado.perfil) {
      navegacion("/login");
    }
  };

  return (
    <>
      {existeProducto ? (
        <Container className="mt-3 mainSection">
          <Card className="cardDetalle">
            <Row>
              <Col lg={6}>
                <Card.Body className="card-body-detalles">
                  <Card.Title className="titulo fs-1">
                    {producto.nombreProducto}
                  </Card.Title>
                  <hr />
                  <Card.Text className="texto">{producto.detalle}</Card.Text>
                  <section>
                    <div className="ordenDetallesPrecio">
                      <p className="fs-1"> ${producto.precio} </p>
                      <button
                        type="submit"
                        className="botonDetalle"
                        onClick={() => sumarProductoCarrito(producto)}
                      >
                        Añadir al carrito
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
          <button className="btn botonVolver letraRoboto my-2">
            Volver al menú
          </button>
        </Link>
      </div>
    </>
  );
};

export default Detalle;
