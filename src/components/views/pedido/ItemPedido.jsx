import { Accordion, Card, Col, Form, ListGroup, Table } from 'react-bootstrap';
import './../../../css/itemPedido.css';
import { useState } from 'react';
import { Trash3Fill } from 'react-bootstrap-icons';
import { ToggleAcordion } from '../../helpers/ToggleAcordion';

const ItemPedido = () => {
  const [botonSwitch, setBotonSwitch] = useState(false);

  const toggler = () => {
    botonSwitch ? setBotonSwitch(false) : setBotonSwitch(true);
  };

  return (
    <Col md={6}>
      <Accordion defaultActiveKey="0" className="my-2">
        <Card>
          <Card.Header className="bg-white">
            <ListGroup>
              <ListGroup.Item className="border-0 letraRoboto tamanioLetraItemListGroup py-1 px-2">
                ID Pedido: <span className="fw-bold">1</span>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 letraRoboto tamanioLetraItemListGroup py-1 px-2">
                Cliente: <span className="fw-bold">Gerardo</span>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 letraRoboto tamanioLetraItemListGroup py-1 px-2">
                Precio Total: <span className="fw-bold">$10000</span>
              </ListGroup.Item>
              <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                <ToggleAcordion eventKey="1" className="letraRoboto px-1">
                  Ver Más
                </ToggleAcordion>
                <Form>
                  <Form.Check
                    type="switch"
                    id="switchEstado"
                    className="d-flex justify-content-end align-items-center"
                    onClick={toggler}
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
            <Card.Body className="m-1 tamanioLetraTabla">
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
                  <tr>
                    <td className="text-truncate tamanioCelda letraRoboto tamanioLetraItemTabla">
                      Hamburguesa DobleCheddar
                    </td>
                    <td className="letraRoboto tamanioLetraItemTabla">2</td>
                    <td className="letraRoboto tamanioLetraItemTabla">5600</td>
                  </tr>
                  <tr>
                    <td className="text-truncate letraRoboto tamanioLetraItemTabla">
                      Hamburguesa DobleCheddar
                    </td>
                    <td className="letraRoboto tamanioLetraItemTabla">2</td>
                    <td className="letraRoboto tamanioLetraItemTabla">5600</td>
                  </tr>
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
