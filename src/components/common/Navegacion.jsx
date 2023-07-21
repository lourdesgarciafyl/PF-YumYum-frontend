import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../../css/navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Cart, Person } from "react-bootstrap-icons";
import { Link, NavLink, useNavigate} from "react-router-dom"

const Navegacion = ({usuarioLogueado, setUsuarioLogueado}) => {
  const navegacion = useNavigate();

  return (
    <Navbar bg="dark" className="shadow" variant="dark" expand="lg">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">
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
              1
            </span>
          </div>
          <p className="">Tu pedido</p>
        </Nav.Link>

        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="d-flex justify-content-between align-items-center  ">
            <NavLink end to="/" className="nav-link">Menu</NavLink>
            <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
            {usuarioLogueado.nombreUsuario ? (
              <>
              {usuarioLogueado.perfil === "Administrador"? (
                <>
              <NavDropdown title="Administrador" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/administrar/productos">Productos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/administrar/usuarios">Usuarios</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Pedidos</NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/login" className="nav-link">
              {" "}
              <Button className="btn btn-dark rounded-5">
                {" "}
                <Person size={25}></Person>
              </Button>{" "}
              </NavLink>
                </>
              ) : (
                <>
                <NavLink to="/login" className="nav-link">
                {" "}
                <Button className="btn btn-dark rounded-5">
                {" "}
                <Person size={25}></Person>
               </Button>{" "}
               </NavLink>
                </>
              )}
              </>
            ) : (
              <>
              <NavLink to="/registro" className="nav-link">Registrarme</NavLink>
              <NavLink to="/login" className="nav-link">
                {" "}
                <Button className="btn btn-dark rounded-5">
                {" "}
                <Person size={25}></Person>
               </Button>{" "}
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
