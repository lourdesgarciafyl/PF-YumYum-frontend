import "./../../css/carritoPedido.css";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import CardItemCarrito from "./pedido/CardItemCarrito";
import { crearPedido } from "../helpers/queriesPedido";
import { total } from "../helpers/queriesCarrito";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CarritoPedido = ({ usuario, carrito, setCarrito, totalProductos }) => {

  const navegacion = useNavigate();

  const vaciarCarrito = () => {
    Swal.fire({
      title: "Esta seguro de vaciar su carrito?",
      text: "Deberar volver a armar su pedido en el inicio!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#f7b538",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito([]);
        Swal.fire({
          title: "Carrito vaciado!",
          text: "Su Carrito fue vaciado. <br> Puede realizar nuevamente su pedido",
          icon: "success",
          confirmButtonColor: '#d8572a'
      });
        navegacion("/");
      }
    });
  };

  const generarPedido = (usuario, carrito, totalCarrito) => {
   
    crearPedido(usuario, carrito, totalCarrito).then((respuestaCreated) => {
      if (respuestaCreated && respuestaCreated.status === 201) {
        Swal.fire({
          title: "Pedido Realizado",
          text: `Su pedido se realizó correctamente`,
          icon: `success`,
          confirmButtonColor: ' #d8572a'
        } );
        setCarrito([])
        navegacion("/");
      } else {
        Swal.fire(`Ocurrió un error`, `Intente nuevamente más tarde`, `error`);
      }
    });
  };

  return (
    <>
      <section className="mainSection letraRoboto">
        <Container>
        <h1 className="text-center letraSpace letraAmarilla fs-1 mt-md-4 mt-lg-5 mb-2">
            Mi Pedido
          </h1>
          <hr className="colorHr" />
          {carrito.length > 0 ? (
          <>
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
              <Row className="justify-content-center">
              <Button
                variant="dark"
                className="mt-2 mb-3 botonVaciarCarrito w-25"
                onClick={vaciarCarrito}
              >
                Vaciar Carrito
              </Button>
              <Button as={Link} to={"/"}
              variant="dark"
              className="ms-2 mt-2 mb-3 btnSeguir w-25">
                Seguir comprando
                </Button>
                </Row>
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
                variant="dark"
                type="submit"
                className="mt-2 mb-1 w-100 botonVaciarCarrito"
                onClick={()=> generarPedido(usuario, carrito,total(carrito))}
              >
                Pedir
              </Button>
            </Col>
          </Row>
          </> ) : ( 
          <>
          <div className="letraAmarilla text-center letraRoboto">
            <h2 className="fs-1 fw-bold">No hay productos en tu carrito</h2>
            <Button as={Link} to={"/"} className="volverMenu mb-2 letraSpace">Volver al menú</Button>
          </div>
          </> )}
        </Container>
      </section>
    </>
  );
};

export default CarritoPedido;
