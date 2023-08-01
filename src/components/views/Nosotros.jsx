import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import "../../css/detalle.css";
import { Github } from "react-bootstrap-icons";
import cristian from "../../assets/img/perfil/cristian.png";
import lourdes from "../../assets/img/perfil/lourdes.png";
import gerardo from "../../assets/img/perfil/gerardo.png";
import agustin from "../../assets/img/perfil/agustin.png";

const Nosotros = () => {
  return (
    <Container className="mainSection">
      <section className=" mb-4">
      <h1 className="text-center letraSpace letraAmarilla fs-1 mt-md-4 mt-lg-5 mb-2">
           Sobre Nosotros
          </h1>
        <hr />

        <p className="letraRoboto fs-3 text-white">
          Nuestro equipo ha trabajado en colaboración utilizando herramientas
          como Trello y Scrum para gestionar tareas y adaptarnos de manera ágil
          a los cambios. Comunicándonos a través de reuniones virtuales por Zoom
          y WhatsApp, utilizamos Github para un trabajo colaborativo eficiente.
          Desarrollamos todo el proyecto en stack MERN y lo desplegamos en
          Vercel y Netlify para brindar una experiencia excepcional a nuestros
          usuarios. ¡Estamos emocionados de compartir nuestro trabajo y
          agradecemos ser parte de este viaje juntos!
        </p>
      </section>

      {/* Seccion Fotos del Equipo */}
      <Row>
      <h2 className="text-center letraSpace letraAmarilla fs-1 mt-md-4 mt-lg-5 mb-2">
           El Equipo
          </h2>
        <hr className="mb-5" />

        <Col sm={6} md={6} lg={3} className="mb-3">
          <Card className="bg-transparent border-0">
            <Card.Title className="text-center text-white">
              Maria Lourdes Garcia
            </Card.Title>
            <Card.Img
              variant="top"
              src={lourdes}
              className=""
              alt="FotoPerfil"
            />

            <Card.Body className="text-center fw-bolder text-white">
              <a
                href="https://github.com/lourdesgarciafyl"
                target="_blank"
                className="text-white  text-decoration-none nav-link"
                rel="noopener noreferrer"
              >
                <Github className="fs-1"></Github> /lourdesgarciafyl
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3} className="mb-3">
          <Card className="bg-transparent border-0">
            <Card.Title className="text-center text-white">
              Juan Gerardo Romero Uro
            </Card.Title>
            <Card.Img
              variant="top"
              src={gerardo}
              className=""
              alt="FotoPerfil"
            />

            <Card.Body className="text-center fw-bolder text-white">
              <a
                href="https://github.com/jgromerou"
                target="_blank"
                className="text-white  text-decoration-none nav-link"
                rel="noopener noreferrer"
              >
                <Github className="fs-1"></Github> /jgromerou
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3} className="mb-3">
          <Card className="bg-transparent border-0">
            <Card.Title className="text-center text-white">
              Agustín Baza
            </Card.Title>
            <Card.Img
              variant="top"
              src={agustin}
              className=""
              alt="FotoPerfil"
            />

            <Card.Body className="text-center fw-bolder text-white">
              <a
                href="https://github.com/agustinbaza"
                target="_blank"
                className="text-white  text-decoration-none nav-link"
                rel="noopener noreferrer"
              >
                <Github className="fs-1"></Github> /agustinbaza
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3} className="mb-3">
          <Card className="bg-transparent border-0">
            <Card.Title className="text-center text-white">
              Cristian Quiroga
            </Card.Title>
            <Card.Img
              variant="top"
              src={cristian}
              className=""
              alt="FotoPerfil"
            />
            <Card.Body className="text-center fw-bolder text-white">
              <a
                href="https://github.com/cristianq3"
                target="_blank"
                className="text-white  text-decoration-none nav-link"
                rel="noopener noreferrer"
              >
                <Github className="fs-1"></Github> /cristianq3
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Nosotros;
