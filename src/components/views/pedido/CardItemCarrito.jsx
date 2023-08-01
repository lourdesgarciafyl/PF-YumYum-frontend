import "../../../css/cardItemCarrito.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Trash3Fill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import sumarProducto from "../../helpers/funcionSumarCarrito";

const CardItemCarrito = ({ producto, carrito, setCarrito, totalProductos }) => {
  const sumar = (productoSumado) => {
    setCarrito(sumarProducto(productoSumado, carrito, totalProductos));
  };

  const restar = (productoRestar) => {
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
        setCarrito(aux);
      }
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Se eliminó 1 ${productoRestar.nombreProducto} del carrito`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const eliminarProducto = (idProducto) => {
    Swal.fire({
      title: `¿Seguro que deseas eliminar ${producto.nombreProducto}?`,
      text: "Se eliminará del carrito actual.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#f7b538",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        const actualizarCarrito = carrito.filter(
          (itemCarrito) => itemCarrito.idProducto !== idProducto
        );
        setCarrito(actualizarCarrito);
        Swal.fire({
          title: "Producto eliminado",
          text: `${producto.nombreProducto} eliminado del carrito correctamente`,
          icon: "success",
          timer: 1700,
          showConfirmButton: false,
        });
      }
    });
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

                <Button
                  as={Link}
                  to={`/detalle/${producto.idProducto}`}
                  className=" btn-dark"
                >
                  Ver Detalle
                </Button>
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
              onClick={() => eliminarProducto(producto.idProducto)}
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
