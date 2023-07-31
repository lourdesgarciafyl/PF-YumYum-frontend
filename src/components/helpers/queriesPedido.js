const URLPedido = import.meta.env.VITE_API_PEDIDO;

export const crearPedido = async (usuario, carrito,totalCarrito) => {
  let pedido = {};
  const fechaActual = new Date();
  const offsetGMT3 = -3 * 60; // GMT-3 está 3 horas detrás del UTC
  const productosEnvio = carrito.map((producto) => {
    return {
      producto: producto.idProducto,
      cantidad: producto.cantidad,
      subtotalItem: producto.subtotalItem
    }
  })
  pedido.usuario = usuario._id;
  pedido.fechaPedido = fechaActual.setMinutes(fechaActual.getMinutes() + offsetGMT3);
  pedido.productos = productosEnvio;
  pedido.estado = 'En proceso';
  pedido.precioTotal = totalCarrito;
  try {
    const nuevoPedido = await fetch(URLPedido, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pedido),
    });
    return nuevoPedido;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const obtenerPedido = async (id) => {
  try {
    const respuesta = await fetch(URLPedido + id);
    const pedido = await respuesta.json();
    return pedido;
  } catch (error) {
    console.log(error);
  }
};

export const editarPedido = async (id, pedido) => {
  try {
    const respuesta = await fetch(`${URLPedido}${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pedido),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const borrarPedido = async (id) => {
  try {
    const respuesta = await fetch(`${URLPedido}${id}`, {
      method: 'DELETE',
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const obtenerListaPedidos = async () => {
  try {
    const respuesta = await fetch(URLPedido);
    const listaPedidos = await respuesta.json();
    return listaPedidos;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const consultaEntregarPedido = async (id) => {
  try {
    const respuesta = await fetch(`${URLPedido}/entregado/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const consultaEnProcesoPedido = async (id) => {
  try {
    const respuesta = await fetch(`${URLPedido}/enproceso/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};