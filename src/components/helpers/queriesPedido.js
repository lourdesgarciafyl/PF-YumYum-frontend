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

  export const editarPedido = async (id, pedido) => {
    try {
      const respuesta = await fetch(`${URLPedido}${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pedido),
      });
      
      return respuesta;
    } catch (error) {
      console.log(error);
      return null;
    }
  };