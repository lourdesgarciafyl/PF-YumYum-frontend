import { Row, Col, Card, Badge, Button, Form } from "react-bootstrap";
import "../../../css/itemProducto.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { borrarProducto, obtenerListaProductos, consultaActivarProducto, consultaDesactivarProducto } from "../../helpers/queriesProducto";
import Swal from "sweetalert2";

const ItemProducto = ({ producto, setProductos, index }) => {
  const estadoSwitch =
  producto.estado === 'Inactivo'
    ? false
    : producto.estado === 'Activo'
    ? true
    : false;  
  const [botonSwitch, setBotonSwitch] = useState(estadoSwitch)
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
    };

    const cambioCheckbox = (index) => {
      if (!botonSwitch) {
        Swal.fire({
          title: `¿Pasar a Activo el producto ${producto.nombreProducto}?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#f7b538',
          cancelButtonColor: '#c32f27',
          confirmButtonText: 'Cambiar',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            consultaActivarProducto(index).then((respuesta) => {
              if (respuesta && respuesta.status === 200) {
                Swal.fire(
                  'Producto editado',
                  `El producto pasó a Activo correctamente`,
                  'success'
                );
                obtenerListaProductos().then((respuesta) => {
                  setProductos(respuesta);
                });
              } else {
                setBotonSwitch(false);
                Swal.fire(
                  'Ocurrió un error',
                  `Intente realizar esta operación nuevamente más tarde`,
                  'error'
                );
              }
            });
          }else{
            setBotonSwitch(false);
          }
        });
      } else {
        Swal.fire({
          title: `¿Pasar a Inactivo el producto N°:${producto.nombreProducto}?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#f7b538',
          cancelButtonColor: '#c32f27',
          confirmButtonText: 'Cambiar',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            consultaDesactivarProducto(index).then((respuesta) => {
              if (respuesta && respuesta.status === 200) {
                Swal.fire(
                  'Producto editado',
                  `El producto pasó a Inactivo correctamente`,
                  'success'
                );
                obtenerListaProductos().then((respuesta) => {
                  setProductos(respuesta);
                });
              } else {
                setBotonSwitch(true);
                Swal.fire(
                  'Ocurrió un error',
                  `Intente realizar esta operación nuevamente más tarde`,
                  'error'
                );
              }
            });
          }else{
            setBotonSwitch(true);
          }
        });
      }
    };
  

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
            //  type="switch"
            //  id="custom-switch"
            //  className="d-flex justify-content-end align-items-center"
            //  onClick={toggler}
            //</Form>  label={botonSwitch ? <span className="textoSpan fw-bold">{producto.estado}</span> : <span className="textoSpan">Inactivo</span>}
            type="switch"
            id={index}
            className="d-flex justify-content-end align-items-center"
            onClick={toggler}
            checked={botonSwitch}
            onChange={() => cambioCheckbox(`${index}`)}
            label={
              botonSwitch ? (
                <span className="textoSpan fw-bold letraRoboto">
                  Activo
                </span>
              ) : (
                <span className="textoSpan letraRoboto">
                  Inactivo
                </span>
              )
            }
            
            >
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