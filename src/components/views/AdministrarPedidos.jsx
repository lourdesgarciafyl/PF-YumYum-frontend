import { Container, Row } from "react-bootstrap";
import ItemPedido from "./pedido/ItemPedido";
import { useEffect, useState } from "react";
import { obtenerListaPedidos } from "../helpers/queriesPedido";
const AdministrarPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    obtenerListaPedidos().then((respuesta) => {
      setPedidos(respuesta);
    });
  }, []);
  return (
    <section className="mainSection letraRoboto mb-3">
      <Container>
        <h1 className="text-center letraSpace letraAmarilla fs-1 mt-md-4 mt-lg-5">
          Administrar Pedidos
        </h1>
        <hr />
        <Row className="justify-content-start">
          {pedidos.map((pedido) => (
            <ItemPedido
              key={pedido._id}
              index={pedido._id}
              pedido={pedido}
              setPedidos={setPedidos}
            ></ItemPedido>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AdministrarPedidos;
