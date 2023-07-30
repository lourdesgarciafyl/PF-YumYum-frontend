import "./../../../css/CardItemCarrito.css";
import { Card, Row, Col } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CardItemCarrito = ({ producto, carrito, setCarrito }) => {
  // Funcion para sumar un producto
  const sumar = (productoSumado) => {
    if (carrito.length < 15) {
      const existeProducto = carrito.find(
        (itemCarrito) => itemCarrito.idProducto === productoSumado.idProducto
      );
      if (existeProducto) {
        const indice = carrito.findIndex(
          (prod) => prod.idProducto === productoSumado.idProducto
        );
        const aux = [...carrito];
        aux[indice].cantidad = aux[indice].cantidad + 1;
        aux[indice].subtotalItem = aux[indice].precio * aux[indice].cantidad;
        setCarrito(aux);
      }
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se agregó producto al carrito.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log("Solo se permite agregar 15 productos al carrito");
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Se permiten máximo 15 productos al carrito",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  // funcion para restar
  const restar = (productoRestar) => {
    console.log(carrito);
    if (
      carrito.length < 15 &&
      carrito.length > 0 &&
      productoRestar.cantidad > 1
    ) {
      const existeProducto = carrito.find(
        (itemCarrito) => itemCarrito.idProducto === productoRestar.idProducto
      );
      if (existeProducto) {
        const indice = carrito.findIndex(
          (prod) => prod.idProducto === productoRestar.idProducto
        );
        const aux = [...carrito];
        aux[indice].cantidad = aux[indice].cantidad - 1;
        aux[indice].subtotalItem = aux[indice].precio * aux[indice].cantidad;
        console.log(aux[indice]);
        setCarrito(aux);
      }
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se eliminó el producto del carrito.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <Card className="letraRoboto mb-3">
      <Card.Body>
        <Row className="p-1">
          <Col xs={12} lg={6}>
            <Row className="align-items-center justify-content-center mb-3 g-5">
              <Col xs={4}>
                <Card.Img
                  variant="top"
                  src={producto.imagen}
                  className="imagenItem"
                />
              </Col>
              <Col xs={8} className="text-end text-lg-start">
                <Card.Title className="letraRoboto mt-1 text-start p-1">
                  {producto.nombreProducto}
                </Card.Title>

                <Card.Link
                  as={Link}
                  to={`/detalle/${producto.idProducto}`}
                  className=" linkDetalle"
                >
                  Ver Detalle
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
                <button
                  className="botonOperarCantidad"
                  onClick={() => restar(producto)}
                >
                  -
                </button>
              </div>
              <span className="mx-1">{producto.cantidad}</span>
              <div>
                <button
                  className="botonOperarCantidad"
                  onClick={() => sumar(producto)}
                >
                  +
                </button>
              </div>
            </div>

            <Trash3Fill
              className="letraRoja iconoEliminar"
              size={25}
            ></Trash3Fill>

            <Card.Text as="h5" className="letraRoboto">
              ${producto.subtotalItem}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardItemCarrito;
