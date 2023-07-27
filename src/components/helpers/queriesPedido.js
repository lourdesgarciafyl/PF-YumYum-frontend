const URLPedido = import.meta.env.VITE_API_PEDIDO;

export const obtenerPedido = async (id) => {
    try {
        const respuesta = await fetch(URLPedido + id);
        const pedido = await respuesta.json();
        return pedido;
    } catch (error) {
        console.log(error);
    }
  };

  