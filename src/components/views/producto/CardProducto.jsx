import { Col, Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import sumarProducto from "../../helpers/funcionSumarCarrito";

const CardProducto = ({
  producto,
  carrito,
  setCarrito,
  totalProductos,
  usuarioLogueado,
}) => {
  const [mostrarElementos, setmostrarElementos] = useState(false);
  const handleMouseEnter = () => {
    setmostrarElementos(true);
  };
  const handleMouseLeave = () => {
    setmostrarElementos(false);
  };
  const navegacion = useNavigate();
  const { nombreProducto, precio, imagen, _id } = producto;

  const sumar = (productoSumado) => {
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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Agregar <b> {nombreProducto}</b> a mi pedido
    </Tooltip>
  );

  return (
    <Col
      md={6}
      lg={3}
      className="mb-2 letraRoboto d-flex justify-content-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="letraRoboto">
        <Card.Title>{nombreProducto}</Card.Title>
        <Card.Img variant="top" src={imagen} className="position-relative" />
        <Card.Body
          className={
            mostrarElementos ? "d-block d-lg-block" : "d-none d-lg-none"
          }
        >
          <div className="justify-content-around flex-column align-items-center w-100 d-flex">
            <div className="fw-bolder position-absolute precio d-flex flex-column align-items-center">
              <span className="text-center fw-bold fs-1">
                <b className="fw-bolder fs-1">$</b>
                {precio}
              </span>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Button variant="light" className="rounded-5 btnAgregar">
                  <Plus className="fs-1" onClick={() => sumar(producto)}></Plus>
                </Button>
              </OverlayTrigger>
              <Link
                className="verMas btn btn-outline-dark"
                as={Link}
                to={`/detalle/${producto._id}`}
              >
                Ver detalle.
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
