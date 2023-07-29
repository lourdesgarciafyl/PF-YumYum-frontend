const URLPedido = import.meta.env.VITE_API_PEDIDO;
const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth();
const anio = fecha.getFullYear();

export const crearPedido = async (usuario) => {
  let pedido = {};
  pedido.usuario = usuario.nombreUsuario;
  pedido.productos = carrito;
  pedido.estado = 'En proceso';
  pedido.fecha = `${dia}/${mes}/${anio}`;
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
