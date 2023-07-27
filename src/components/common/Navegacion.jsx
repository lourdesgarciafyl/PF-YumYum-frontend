import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import "../../css/navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { Cart, Person } from "react-bootstrap-icons";
import { Link, NavLink, useNavigate} from "react-router-dom"

const Navegacion = ({usuarioLogueado, setUsuarioLogueado, totalProductos, setCarrito}) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const navegacion = useNavigate();
  const logout = () => {
    localStorage.removeItem("usuarioInicioSesion");
    sessionStorage.removeItem(`${usuarioLogueado.id}`);
    setUsuarioLogueado("")
    setCarrito([])
    navegacion("/")
  }

  return (
    <Navbar
      bg="dark"
      className="shadow fixed-top navPrincipal"
      variant="dark"
      expand="lg"
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img
            src="../../src/assets/LogoYumNavbar.svg"
            className="logoNavbar"
            alt="Logo YumYum"
          />
        </Navbar.Brand>

        {/* Este link nos envia al carrito de compras. */}
        {usuarioLogueado.nombreUsuario ? (
          <>
          {usuarioLogueado.perfil === "Cliente" ? (
            <>
            <NavLink
            to="/cliente/pedido"
            id="carrito"
            className="d-flex mt-2 justi flex-column carritoConPedidos nav-link"
            >
           {" "}
           <div className="d-flex align-items-center ">
           <Cart size={30}></Cart>
            {/* Este Span lee la cantidad de productos que va sumando el cliente.  */}
            <span className="ms-2 my-2 fw-bolder" id="cantidadProductosCliente">
              {totalProductos}
            </span>
            </div>
            <p className="">Tu pedido</p>
          </NavLink>
            </>
          ):(
          <>
          </>)}
          </>
        ) : (
        <>
          <NavLink
            to="login"
            id="carrito"
            className="d-flex mt-2 justi flex-column carritoConPedidos nav-link"
            >
           {" "}
           <div className="d-flex align-items-center ">
           <Cart size={30}></Cart>
            {/* Este Span lee la cantidad de productos que va sumando el cliente.  */}
            <span className="ms-2 my-2 fw-bolder" id="cantidadProductosCliente">
            {totalProductos}
            </span>
            </div>
            <p className="">Tu pedido</p>
          </NavLink>
        </>
        )}

        <Navbar.Toggle aria-controls="navbar" />

        <Navbar.Collapse id="navbar">
          <Nav className="d-flex ms-lg-auto navBar2">
            <NavLink end to="/" className="nav-link">Menu</NavLink>
            <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
            {usuarioLogueado.nombreUsuario ? (
              <>
              {usuarioLogueado.perfil === "Administrador"? (
                <>
              <NavDropdown title="Administrador" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/administrar/productos">Productos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/administrar/usuarios">Usuarios</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/administrar/pedidos">Pedidos</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
              {" "}
              <Button 
                 className="rounded-5"
                variant="dark"
                ref={target}
                 onClick={logout}>
                {" "}
                <Person size={25}></Person>
              </Button>{" "}
              </Nav.Link>
              <Nav.Link>{usuarioLogueado.nombreUsuario}</Nav.Link>
              </>
              ) : (
                <>
                <Nav.Link>
                {" "}
                <Button               
                className="rounded-5"
                variant="dark"
                ref={target} 
                 onClick={logout}>
                {" "}
                <Person size={25}></Person>
               </Button>{" "}
               </Nav.Link>
                </>
              )}
              </>
            ) : (
              <>
              <NavLink to="/registro" className="nav-link">Registrarme</NavLink>
              <NavLink to="/login" className="nav-link">
                {" "}
                <Button               
                className="rounded-5"
                variant="dark"
                ref={target}
                onClick={() => setShow(!show)} >
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
