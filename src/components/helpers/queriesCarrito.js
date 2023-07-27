export const subtotal = (carrito) => {
    let subtotalProducto = 0;
    carrito.forEach((item) => {
      subtotalProducto += item.precio * item.cantidad;
    });
    return subtotalProducto;
};

export const sumaCantidad = (carrito) => {
    let suma = 0;
    carrito.forEach((item) => {
      suma += item.cantidad;
    });
    return suma;
};