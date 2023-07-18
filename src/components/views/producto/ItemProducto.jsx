import { Row, Col, Card, Badge, Button, Form } from "react-bootstrap";
import "../../../css/itemProducto.css"
import { useState } from "react";
import hamburguesaDobleBacon from "../../../assets/hamburguesaDobleBacon.png"

const ItemProducto = () => {
    const [botonSwitch, setBotonSwitch] = useState(false)
    
    const toggler = () =>{
      botonSwitch ? setBotonSwitch(false) : setBotonSwitch(true)
    }

    return(
        <Col sm={6} md={4} lg={3} className="mb-3 justify-content-center">
        <Card className="pt-0 cardItemProducto">
        <Card.Img 
        className="imagenCard"
        variant="top"
        src={hamburguesaDobleBacon}      
        />
        <Card.Body className="cardBodyProducto shadow">
          <Row className="justify-content-between justify-content-md-between my-0 py-0">
            <Col  className="me-1">
            <Card.Title className="letraSpace fw-bolder">Hamburguesa Doble Bacon</Card.Title>
            </Col>
            <Col>
            <Form onClick={toggler}>
              <Form.Check
              type="switch"
              id="custom-switch"
              className="d-flex justify-content-end align-items-center"
              label={botonSwitch ? <span className="textoSpan fw-bold">Activo</span> : <span className="textoSpan">Inactivo</span>}>
              </Form.Check>
              </Form>
            </Col>
          </Row>
          <hr/>
          <Card.Text className="letraRoboto">
            <strong className="letraSpace">Categoría:</strong> Pizza
            <br/>
            <strong className="letraSpace">Precio:</strong> $ 1200
          </Card.Text>
          <section className="letraRoboto d-flex flex-row justify-content-evenly pb-2">
          <aside>
            <Button className="btnEditarProducto ">Editar</Button>
          </aside>
          <aside>
            <Button className="btnBorrarProducto">Borrar</Button>
          </aside>
        </section>
        </Card.Body>
      </Card>
      </Col>
    )
}
export default ItemProducto;