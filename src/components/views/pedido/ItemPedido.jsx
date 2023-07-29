import { Accordion, Card, Col, Form, ListGroup, Table } from 'react-bootstrap';
import './../../../css/itemPedido.css';
import { useState } from 'react';
import { Trash3Fill } from 'react-bootstrap-icons';
import { ToggleAcordion } from '../../helpers/ToggleAcordion';
import ItemProductoPedido from './ItemProductoPedido';
import { formatearFecha } from '../../helpers/formateoFecha';
import Swal from 'sweetalert2';
import { consultaEnProcesoPedido, consultaEntregarPedido, obtenerListaPedidos } from '../../helpers/queriesPedido';

const ItemPedido = ({ index, pedido, setPedidos }) => {
  const estadoSwitch =
    pedido.estado === 'En proceso'
      ? false
      : pedido.estado === 'Entregado'
      ? true
      : false;
  const [botonSwitch, setBotonSwitch] = useState(estadoSwitch);

  const toggler = () => {
    botonSwitch ? setBotonSwitch(false) : setBotonSwitch(true);
  };
  const cambioCheckbox = (index) => {
    if (!botonSwitch) {
      Swal.fire({
        title: `¿Pasar a Entregado el pedido N°:${index}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f7b538',
        cancelButtonColor: '#c32f27',
        confirmButtonText: 'Cambiar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          consultaEntregarPedido(index).then((respuesta) => {
            if (respuesta && respuesta.status === 200) {
              Swal.fire(
                'Pedido Editado',
                `El pedido N°${index} pasó a Entregado correctamente`,
                'success'
              );
              obtenerListaPedidos().then((respuesta) => {
                setPedidos(respuesta);
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
        title: `¿Volver a "En Proceso" el pedido N°:${index}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f7b538',
        cancelButtonColor: '#c32f27',
        confirmButtonText: 'Cambiar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          consultaEnProcesoPedido(index).then((respuesta) => {
            if (respuesta && respuesta.status === 200) {
              Swal.fire(
                'Pedido Editado',
                `El pedido N°${index} pasó a "En Proceso" correctamente`,
                'success'
              );
              obtenerListaPedidos().then((respuesta) => {
                setPedidos(respuesta);
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
  return (
    <Col md={6} xxl={4}>
      <Accordion defaultActiveKey="0" className="my-2">
        <Card>
          <Card.Header className="bg-white">
            <ListGroup>
              <ListGroup.Item className="border-0 letraRoboto tamanioLetraItemListGroup py-1 px-2">
                ID Pedido: <span className="fw-bold">{pedido._id}</span>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 letraRoboto tamanioLetraItemListGroup py-1 px-2">
                Fecha:{' '}
                <span className="fw-bold">
                  {formatearFecha(pedido.fechaPedido)}
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 letraRoboto tamanioLetraItemListGroup py-1 px-2">
                Cliente:{' '}
                <span className="fw-bold">
                  {pedido.usuario.nombreUsuario +
                    ' ' +
                    pedido.usuario.apellidoUsuario}
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 letraRoboto tamanioLetraItemListGroup py-1 px-2">
                Precio Total:{' '}
                <span className="fw-bold">${pedido.precioTotal}</span>
              </ListGroup.Item>
              <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                <ToggleAcordion eventKey="1" className="letraRoboto px-1">
                  Ver Más
                </ToggleAcordion>
                <Form>
                  <Form.Check
                    type="switch"
                    id={index}
                    className="d-flex justify-content-end align-items-center"
                    onClick={toggler}
                    checked={botonSwitch}
                    onChange={() => cambioCheckbox(`${index}`)}
                    label={
                      botonSwitch ? (
                        <span className="textoSpan fw-bold letraRoboto">
                          Entregado
                        </span>
                      ) : (
                        <span className="textoSpan letraRoboto">
                          En Proceso
                        </span>
                      )
                    }
                  ></Form.Check>
                </Form>
                <Trash3Fill
                  className="letraRoja iconoEliminar"
                  size={25}
                ></Trash3Fill>
              </div>
            </ListGroup>
          </Card.Header>

          <Accordion.Collapse eventKey="1">
            <Card.Body className="m-1">
              <Table responsive striped bordered hover>
                <thead>
                  <tr>
                    <th className="letraSpace tamanioLetraTituloTabla">
                      Producto
                    </th>
                    <th className="letraSpace tamanioLetraTituloTabla">
                      Cantidad
                    </th>
                    <th className="letraSpace tamanioLetraTituloTabla">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pedido.productos.map((producto) => (
                    <ItemProductoPedido key={producto._id} item={producto} />
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Col>
  );
};

export default ItemPedido;
