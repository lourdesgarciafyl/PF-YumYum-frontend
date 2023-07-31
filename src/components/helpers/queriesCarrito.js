export const total = (carrito) => {
    let totalProducto = 0;
    carrito.forEach((item) => {
      totalProducto += item.subtotalItem;
    });
    return totalProducto;
};

export const sumaCantidad = (carrito) => {
    let suma = 0;
    console.log('sumar cantidad', carrito)
    carrito.forEach((item) => {
      suma += item.cantidad;
    });
    return suma;
};