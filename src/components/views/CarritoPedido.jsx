import "./../../css/carritoPedido.css";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import CardItemCarrito from "./pedido/CardItemCarrito";
import { crearPedido } from "../helpers/queriesPedido";
import { total } from "../helpers/queriesCarrito";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { set } from "react-hook-form";

const CarritoPedido = ({ usuario, carrito, setCarrito, totalProductos }) => {
  // useEffect(()=>{
  //   setCarrito(carrito)
  // },[carrito])

  const navegacion = useNavigate();

  const vaciarCarrito = () => {
    Swal.fire({
      title: "Esta seguro de vaciar su carrito?",
      text: "Deberar volver a armar su pedido en el inicio!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito([]);
        Swal.fire(
          "Carrito vaciado!",
          "Su Carrito fue vaciado. <br> Puede realizar nuevamente su pedido",
          "success"
        );
        navegacion("/");
      }
    });
  };

  const generarPedido = (nuevoPedido) => {
    crearPedido(nuevoPedido).then((respuestaCreated) => {
      if (respuestaCreated && respuestaCreated.status === 201) {
        Swal.fire(
          "Pedido Realizado",
          `Su pedido se realizó correctamente`,
          `success`
        );

        navegacion("/");
      } else {
        Swal.fire(`Ocurrió un error`, `Intente nuevamente más tarde`, `error`);
        console.log(nuevoPedido);
      }
    });
  };

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
                  key={item.idProducto}
                  carrito={carrito}
                  setCarrito={setCarrito}
                  usuario={usuario}
                  totalProductos={totalProductos}
                ></CardItemCarrito>
              ))}
              <Button
                variant="light"
                type="submit"
                className="mt-2 mb-3 botonVaciarCarrito"
                onClick={vaciarCarrito}
              >
                Vaciar Carrito
              </Button>
            </Col>

            <Col lg={3} className="justify-content-around">
              <ListGroup className="mb-2">
                <ListGroup.Item className="border-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="letra-roboto tamanioLetra">Total:</span>
                    <span className="letra-roboto tamanioLetra">
                      ${total(carrito)}
                    </span>
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
                onClick={() => generarPedido(usuario)}
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
