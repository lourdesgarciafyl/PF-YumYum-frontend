import { Container, Card, Row, Col } from "react-bootstrap";
import "../../css/detalle.css";
import { Github } from "react-bootstrap-icons";
import {cristian} from "../../assets/img/perfil/cristian.png"

const Nosotros = () => {
  return (
    <Container className="my-3 mainSection">
      <section className=" mb-4">
        <h1 className="letraAmarilla">Sobre Nosotros:</h1>
        <hr />

        <p className="lead text-white">
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
        <h2 className="letraAmarilla">El Equipo:</h2>
        <hr />

        <Col sm={6} md={6} lg={3} className="mb-3">
          <Card className="bg-transparent border-0">
            <Card.Title className="text-center letraAmarilla">
              Maria Lourdes Garcia
            </Card.Title>
            <Card.Img
              variant="top"
              src="cristian"
              className=""
              alt="FotoPerfil"
            />
            <Card.Body className="text-center fw-bolder letraAmarilla">
              <Github className="fs-1"></Github> /lourdesgarciafyl
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3} className="mb-3">
          <Card className="bg-transparent border-0">
            <Card.Title className="text-center letraAmarilla">
              Juan Gerardo Romero Uro
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://flixadastream.netlify.app/img/profile-pictures/cristianquiroga.png"
              className=""
              alt="FotoPerfil"
            />
            <Card.Body className="text-center fw-bolder letraAmarilla">
              <Github className="fs-1"></Github> /jgromerou
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3} className="mb-3">
          <Card className="bg-transparent border-0">
            <Card.Title className="text-center letraAmarilla">
              Agustín Baza
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://flixadastream.netlify.app/img/profile-pictures/cristianquiroga.png"
              className=""
              alt="FotoPerfil"
            />
            <Card.Body className="text-center fw-bolder letraAmarilla">
              <Github className="fs-1"></Github> /agustinbaza
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={6} lg={3} className="mb-3">
          <Card className="bg-transparent border-0">
            <Card.Title className="text-center letraAmarilla">
              Cristian Quiroga
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://flixadastream.netlify.app/img/profile-pictures/cristianquiroga.png"
              className=""
              alt="FotoPerfil"
            />
            <Card.Body className="text-center fw-bolder letraAmarilla">
              <Github className="fs-1"></Github> /cristianq3
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Nosotros;
