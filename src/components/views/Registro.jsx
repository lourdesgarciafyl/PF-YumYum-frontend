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
                        <Card.Title> Registro </Card.Title>
                        <Card.Body>
                            <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre/s</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Ej: Lisandro"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Apellido/s</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Ej: Villafañe"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                type="email"
                                placeholder="Ej: lisandrov@gmail.com"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                type="password"
                                placeholder="Ingresa una contraseña"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control
                                type="password"
                                placeholder="Ingresa nuevamente la contraseña"></Form.Control>
                            </Form.Group>

                            <Button className="w-100">Registrarme</Button>
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
