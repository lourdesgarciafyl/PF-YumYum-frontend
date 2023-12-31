import { Navbar, Container, Nav, Button, Badge } from "react-bootstrap";
import { useState, useRef } from "react";
import "../../css/navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Person } from "react-bootstrap-icons";
import { Link, NavLink, useNavigate } from "react-router-dom";
import iconoDelivery from "../../assets/img/icono-delivery.svg";
import logo from "../../assets/LogoYumNavbar.svg";
import Swal from "sweetalert2";
import { ListGroup, ListGroupItem } from "react-bootstrap";
const Navegacion = ({
  usuarioLogueado,
  setUsuarioLogueado,
  totalProductos,
  setCarrito,
}) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const navegacion = useNavigate();
  const logout = () => {
    Swal.fire({
      title: "¿Esta seguro de cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f7b538",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("usuarioInicioSesion");
        sessionStorage.removeItem(`${usuarioLogueado.id}`);
        setUsuarioLogueado("");
        setCarrito([]);
        Swal.fire({
          title: "Cerraste sesión",
          text: `¡YumYum te espera nuevamente!`,
          confirmButtonColor: " #d8572a",
        });
        navegacion("/");
      }
    });
  };

  return (
    <Navbar
      bg="dark"
      className="shadow fixed-top navPrincipal"
      variant="dark"
      expand="lg"
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="logoNavbar" alt="Logo YumYum" />
        </Navbar.Brand>

        {usuarioLogueado.nombreUsuario ? (
          <>
            {usuarioLogueado.perfil === "Cliente" ||
            usuarioLogueado.perfil === "Administrador" ? (
              <>
                <NavLink
                  to="/cliente/pedido"
                  id="carrito"
                  className="d-flex mt-2 justi flex-column position-relative"
                >
                  <Button className="rounded-5 btnCarrito " variant="dark">
                    <span>
                      <img
                        src={iconoDelivery}
                        alt="Icono de la moto"
                        className="iconoDelivery"
                      />
                    </span>
                    <Badge
                      bg="dark"
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-warning"
                    >
                      {" "}
                      <span className="" id="cantidadProductosCliente">
                        {totalProductos}
                      </span>
                    </Badge>
                  </Button>
                </NavLink>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <NavLink
              to="login"
              id="carrito"
              className="d-flex mt-2 justi flex-column carritoConPedidos nav-link"
            >
              <Button
                className="rounded-5 btnCarrito  "
                variant="outline-ligth"
              >
                <span>
                  <img
                    src={iconoDelivery}
                    alt="Icono de la moto"
                    className="iconoDelivery"
                  />
                </span>
                <Badge
                  bg="dark"
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-warning"
                >
                  <span className="" id="cantidadProductosCliente">
                    {totalProductos}
                  </span>
                </Badge>
              </Button>
            </NavLink>
          </>
        )}

        <Navbar.Toggle aria-controls="navbar" />

        <Navbar.Collapse id="navbar">
          <Nav className="d-flex ms-lg-auto navBar2">
            <NavLink end to="/" className="nav-link mt-lg-2">
              Menu
            </NavLink>
            <NavLink to="/nosotros" className="nav-link mt-lg-2">
              Nosotros
            </NavLink>
            {usuarioLogueado.nombreUsuario ? (
              <>
                {usuarioLogueado.perfil === "Administrador" ? (
                  <>
                    <NavDropdown
                      title="Administrador"
                      id="navbarScrollingDropdown"
                      className="mt-lg-2"
                    >
                      <NavDropdown.Item as={Link} to="/administrar/productos">
                        Productos
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/administrar/usuarios">
                        Usuarios
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/administrar/pedidos">
                        Pedidos
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>
                      {" "}
                      <Button
                        className="rounded-5 btnSesion"
                        variant="dark"
                        ref={target}
                        onClick={logout}
                      >
                        <Person size={25}></Person>Cerrar sesión
                      </Button>{" "}
                    </Nav.Link>
                    <ListGroup>
                    <ListGroup.Item className="bg-dark text-white liNavbar">
                      {usuarioLogueado.nombreUsuario}
                    </ListGroup.Item>
                    </ListGroup>
                  </>
                ) : (
                  <>
                    <Nav.Link>
                      {" "}
                      <Button
                        className="rounded-5 btnSesion"
                        variant="dark"
                        ref={target}
                        onClick={logout}
                      >
                        {" "}
                        <Person size={25}></Person>Cerrar sesión
                      </Button>
                    </Nav.Link>
                    <ListGroup>
                    <ListGroup.Item className="bg-dark text-white liNavbar">
                      {usuarioLogueado.nombreUsuario}
                    </ListGroup.Item>
                    </ListGroup>
                  </>
                )}
              </>
            ) : (
              <>
                <NavLink to="/registro" className="nav-link mt-lg-2">
                  Registrarme
                </NavLink>
                <NavLink to="/login" className="nav-link">
                  {" "}
                  <Button
                    className="rounded-5 botonLogin btnSesion"
                    variant="dark"
                    ref={target}
                    onClick={() => setShow(!show)}
                  >
                    <Person size={25}></Person>Iniciar Sesión
                  </Button>
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navegacion;
