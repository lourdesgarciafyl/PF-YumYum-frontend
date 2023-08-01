import Swal from "sweetalert2";
const sumarProducto = (productoSumado, carrito, totalProductos) => {
  if (totalProductos < 15) {
    const indice = carrito.findIndex(
      (prod) => prod.idProducto === productoSumado.idProducto
    );
    const aux = [...carrito];
    aux[indice].cantidad = aux[indice].cantidad + 1;
    aux[indice].subtotalItem = aux[indice].precio * aux[indice].cantidad;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Se agregó 1 ${productoSumado.nombreProducto} al carrito.`,
      showConfirmButton: false,
      timer: 1500,
    });
    return aux;
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Se permiten máximo 15 productos al carrito",
      showConfirmButton: false,
      timer: 2000,
    });
    return carrito;
  }
};

export default sumarProducto;
