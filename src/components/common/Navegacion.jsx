import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import "../../css/navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { Cart, Person } from "react-bootstrap-icons";

const Navegacion = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <Navbar
      bg="dark"
      className="shadow fixed-top navPrincipal"
      variant="dark"
      expand="lg"
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <img
            src="../../src/assets/LogoYumNavbar.svg"
            className="logoNavbar"
            alt="Logo YumYum"
          />
        </Navbar.Brand>

        {/* Este link nos envia al carrito de compras. */}

        <Nav.Link
          href="#CarritodeCompras"
          id="carrito"
          className="d-flex mt-2 justi flex-column carritoConPedidos"
        >
          {" "}
          <div className="d-flex align-items-center ">
            <Cart size={30}></Cart>

            {/* Este Span lee la cantidad de productos que va sumando el cliente.  */}
            <span className="ms-2 my-2 fw-bolder" id="cantidadProductosCliente">
              3
            </span>
          </div>
          <p className="">Tu pedido</p>
        </Nav.Link>

        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="">
          <Nav className="d-flex ms-lg-auto navBar2">
            <Nav.Link href="#">Menu</Nav.Link>
            <Nav.Link href="#">Nosotros</Nav.Link>

            <NavDropdown title="Administrador" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">Productos</NavDropdown.Item>
              <NavDropdown.Item href="#">Usuarios</NavDropdown.Item>

              <NavDropdown.Item href="#action5">Pedidos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <Button
                className="rounded-5"
                variant="dark"
                ref={target}
                onClick={() => setShow(!show)}
              >
                <Person size={25}></Person>
              </Button>
              <Overlay target={target.current} show={show} placement="bottom">
                {(props) => (
                  <Tooltip className="bg-dark" id="overlayIngreso" {...props}>
                    <Button variant="dark" className="fw-bold">
                      Ingresar
                    </Button>
                  </Tooltip>
                )}
              </Overlay>
            </Nav.Link>

            <Nav.Link>Cristian</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navegacion;
