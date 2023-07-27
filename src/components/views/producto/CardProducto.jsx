import { Col, Card, Button } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CardProducto = ({ producto, carrito, setCarrito, totalProductos }) => {
  const [mostrarElementos, setmostrarElementos] = useState(false);
  const handleMouseEnter = () => {
    setmostrarElementos(true);
  };
  const handleMouseLeave = () => {
    setmostrarElementos(false);
  };

  const { nombreProducto, precio, imagen, _id } = producto;
  //Función que agrega el producto si no existe, y si existe cambia su cantidad.
  const sumarProductoCarrito = (productoSumado) => {
    if (totalProductos < 15) {
      const existeProducto = carrito.find(
        (itemCarrito) => itemCarrito.producto === productoSumado._id
      );

      if (existeProducto) {
        const indice = carrito.findIndex(
          (prod) => prod.producto === productoSumado._id
        );
        const aux = [...carrito];
        aux[indice].cantidad = aux[indice].cantidad + 1;
        aux[indice].subtotalItem =
          aux[indice].subtotalItem * aux[indice].cantidad;
        setCarrito(aux);
      } else {
        const nuevoProducto = {
          producto: productoSumado._id,
          cantidad: 1,
          subtotalItem: productoSumado.precio * 1,
        };
        setCarrito([...carrito, nuevoProducto]);
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se agregó producto al carrito.',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      console.log('Solo se permite agregar 15 productos al carrito');
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Se permiten máximo 15 productos al carrito',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <Col
      md={6}
      lg={3}
      className="mb-3 letraRoboto d-flex justify-content-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="letraRoboto">
        <Card.Title>{nombreProducto}</Card.Title>
        <Card.Img variant="top" src={imagen} className="position-relative" />
        <Card.Body
          className={
            mostrarElementos ? 'd-block d-lg-block' : 'd-none d-lg-none'
          }
        >
          <div className="justify-content-around flex-column align-items-center w-100 d-flex">
            <div className="fw-bolder position-absolute precio">
              <p className="text-center fw-bold fs-1">
                <b className="fw-bolder fs-1">$</b>
                {precio}{' '}
              </p>{' '}
              <Button
                className="btn btn-dark"
                as={Link}
                to={`/detalle/${producto._id}`}
              >
                Ver detalle
              </Button>
            </div>
            <Button variant="light" className="rounded-5">
              {' '}
              <Plus
                className="fs-1"
                onClick={() => sumarProductoCarrito(producto)}
              ></Plus>{' '}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
