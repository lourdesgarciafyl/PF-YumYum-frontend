import { Container, Row } from 'react-bootstrap';
import ItemPedido from './pedido/ItemPedido';
const AdministrarPedidos = () => {
  return (
    <section className="mainSection letraRoboto mb-3">
      <Container>
        <h1 className="display-4 mt-3 letraSpace text-white text-center text-md-start ">
          Administrar Pedidos
        </h1>
        <hr />
        <Row className="justify-content-start">
          <ItemPedido></ItemPedido>
          <ItemPedido></ItemPedido>
          <ItemPedido></ItemPedido>
          <ItemPedido></ItemPedido>
          <ItemPedido></ItemPedido>
        </Row>
      </Container>
    </section>
  );
};

export default AdministrarPedidos;
