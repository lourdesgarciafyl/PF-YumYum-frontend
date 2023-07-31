import Swal from "sweetalert2";
const sumarProducto = (productoSumado,carrito,totalProductos) => {
    if (totalProductos < 15) {
        console.log('length carrito',totalProductos);
      // const existeProducto = carrito.find(
      //   (itemCarrito) => itemCarrito.idProducto === productoSumado.idProducto
      // );
      // if (existeProducto) {
        const indice = carrito.findIndex(
          (prod) => prod.idProducto === productoSumado.idProducto
        );
        const aux = [...carrito];
        aux[indice].cantidad = aux[indice].cantidad + 1;
        aux[indice].subtotalItem = aux[indice].precio * aux[indice].cantidad;
        console.log(aux);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Se agregó 1 ${productoSumado.nombreProducto} al carrito.`,
            showConfirmButton: false,
            timer: 1500,
          });
        return aux;
      // } 
    } else {
      console.log("Solo se permite agregar 15 productos al carrito");
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

  export default sumarProducto