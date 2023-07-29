import { Row, Col, Card, Badge, Button, Form } from "react-bootstrap";
import "../../../css/itemProducto.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { borrarProducto, obtenerListaProductos } from "../../helpers/queriesProducto";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, setProductos }) => {
    const [botonSwitch, setBotonSwitch] = useState(false)
    
    const toggler = () =>{
      botonSwitch ? setBotonSwitch(false) : setBotonSwitch(true)
    }

    const borrarUnProducto = () => {
      Swal.fire({
        title: "¿Esta seguro de borrar el producto?",
        text: "No se puede revertir este paso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar",
      }).then((result) => {if (result.isConfirmed) {
          borrarProducto(producto._id).then((respuesta)=>{
            console.log(respuesta);
            if(respuesta.status === 200){
              Swal.fire(
                'Producto eliminado',
                `El producto ${producto.nombreProducto} fue eliminado correctamente`,
                'success'
              );
              obtenerListaProductos().then((respuesta)=> setProductos(respuesta))
            }else{
              Swal.fire(
                'Ocurrio un error',
                `Intente realizar esta operación nuevamente mas tarde`,
                'success'
              )
            }
          })
          
        }
      })
    }

    return(
        <Col sm={6} md={4} lg={3} className="mb-3 justify-content-center">
        <Card className="pt-0 cardItemProducto">
        <Card.Img 
        className="imagenCard"
        variant="top"
        src={producto.imagen}      
        />
        <Card.Body className="cardBodyProducto shadow">
          <Row className="justify-content-between justify-content-md-between my-0 py-0">
            <Col  className="me-1">
            <Card.Title className="letraSpace fw-bolder">{producto.nombreProducto}</Card.Title>
            </Col>
            <Col>
            <Form>
              <Form.Check
              type="switch"
              id="custom-switch"
              className="d-flex justify-content-end align-items-center"
              onClick={toggler}
              label={botonSwitch ? <span className="textoSpan fw-bold">{producto.estado}</span> : <span className="textoSpan">Inactivo</span>}>
              </Form.Check>
              </Form>
            </Col>
          </Row>
          <hr/>
          <Card.Text className="letraRoboto">
            <strong className="letraSpace">Categoría:</strong>{producto.categoria}
            <br/>
            <strong className="letraSpace">Precio:</strong> $ {producto.precio}
          </Card.Text>
          <section className="letraRoboto d-flex flex-row justify-content-evenly pb-2">
          <aside>
            <Button as={Link} to={`/administrar/productos/editar-producto/${producto._id}`} className="btnEditarProducto">Editar</Button>
          </aside>
          <aside>
            <Button className="btnBorrarProducto" onClick={borrarUnProducto}>Borrar</Button>
          </aside>
        </section>
        </Card.Body>
      </Card>
      </Col>
    )
}
export default ItemProducto;