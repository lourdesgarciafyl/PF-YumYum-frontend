import "../../../css/itemProductoPedido.css";
const ItemProductoPedido = ({ item }) => {
  return (
    <>
      <tr>
        <td className=" tamanioCelda letraRoboto tamanioLetraItemTabla">
          {item.producto.nombreProducto}
        </td>
        <td className="letraRoboto tamanioLetraItemTabla">{item.cantidad}</td>
        <td className="letraRoboto tamanioLetraItemTabla">
          ${item.subtotalItem}
        </td>
      </tr>
    </>
  );
};

export default ItemProductoPedido;
