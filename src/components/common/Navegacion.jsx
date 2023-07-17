import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "../../navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Cart, Person } from "react-bootstrap-icons";


const Navegacion = () => {
    return (
      <Navbar bg="dark" className="shadow" variant="dark" expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">
            <img
              src="../../src/assets/LogoYumNavbar.svg"
              className="logoNavbar"
              alt="Logo YumYum"
            />
          </Navbar.Brand>
  
       
  
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="d-flex justify-content-between align-items-center  ">
              <Nav.Link href="#">Menu</Nav.Link>
              <Nav.Link href="#">Nosotros</Nav.Link>
  
              
              <Nav.Link href="#">
                {" "}
                <Button className="btn btn-dark rounded-5">
                  {" "}
                  <Person size={25}></Person>
                </Button>{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  export default Navegacion;
  