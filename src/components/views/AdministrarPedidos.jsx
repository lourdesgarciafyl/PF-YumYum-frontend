import { Container, Row } from 'react-bootstrap';
import ItemPedido from './pedido/ItemPedido';
import { useEffect, useState } from 'react';
import { obtenerListaPedidos } from '../helpers/queriesPedido';
const AdministrarPedidos = () => {
  const [ pedidos, setPedidos ] = useState([])
  useEffect(() => {
    obtenerListaPedidos().then((respuesta) => {
        setPedidos(respuesta)
    })
}, [])
  return (
    <section className="mainSection letraRoboto mb-3">
      <Container>
        <h1 className="display-4 mt-3 letraSpace text-white text-center text-md-start ">
          Administrar Pedidos
        </h1>
        <hr />
        <Row className="justify-content-start">
        {
          pedidos.map((pedido)=> <ItemPedido key={pedido._id} index={pedido._id} pedido={pedido} setPedidos={setPedidos}></ItemPedido> )
        }
        </Row>
      </Container>
    </section>
  );
};

export default AdministrarPedidos;
