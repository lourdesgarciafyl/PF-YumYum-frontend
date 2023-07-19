import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { crearUsuario } from "../helpers/queriesUsuario";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import imgRegistro from "../../assets/imgRegistro.png"
import "../../css/registro.css"

const Registro = () => {

    return(
        <Container className="mainSection my-3">
            <Row className="py-2">
                <Col lg={8}>
                    <Card className="letraForm">
                        <Card.Title className="mt-4 mb-1 text-center letraSpace letraNaranja fw-bold fs-4">Registro</Card.Title>
                        <hr className="letraNaranja" />
                        <Card.Body className="d-flex justify-content-center">
                            <Form className="w-75 letraRoboto letraRoja fs-5 fw-bold">
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre/s</Form.Label>
                                <Form.Control
                                className="inputFormRegistro"
                                type="text"
                                placeholder="Ej: Lisandro"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Apellido/s</Form.Label>
                                <Form.Control
                                className="inputFormRegistro"
                                type="text"
                                placeholder="Ej: Villafañe"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                className="inputFormRegistro"
                                type="email"
                                placeholder="Ej: lisandrov@gmail.com"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                className="inputFormRegistro"
                                type="password"
                                placeholder="Ingresa una contraseña"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control
                                className="inputFormRegistro"
                                type="password"
                                placeholder="Ingresa nuevamente la contraseña"></Form.Control>
                            </Form.Group>

                            <Button className="w-100 btnRegistrarme fw-bold">REGISTRARME</Button>
                            </Form>                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <div>
                    <img className="img-fluid imgRegistro" src={imgRegistro}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Registro
