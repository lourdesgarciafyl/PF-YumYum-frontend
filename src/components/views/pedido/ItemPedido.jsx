import { Accordion, Card, Col, Form, ListGroup, Table } from 'react-bootstrap';
import './../../../css/itemPedido.css';
import { useState } from 'react';
import { Trash3Fill } from 'react-bootstrap-icons';
import { ToggleAcordion } from '../../helpers/ToggleAcordion';
import ItemProductoPedido from './ItemProductoPedido';
import { formatearFecha } from '../../helpers/formateoFecha';

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
      console.log('pasa a estado de Entregado');
    } else {
      console.log('pasa a estado de En Proceso');
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
