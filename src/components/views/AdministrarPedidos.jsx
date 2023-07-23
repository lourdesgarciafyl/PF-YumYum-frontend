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
          <ItemPedido index={1}></ItemPedido>
          <ItemPedido index={2}></ItemPedido>
          <ItemPedido index={3}></ItemPedido>
          <ItemPedido index={4}></ItemPedido>
          <ItemPedido index={5}></ItemPedido>
        </Row>
      </Container>
    </section>
  );
};

export default AdministrarPedidos;
