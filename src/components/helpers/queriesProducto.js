const URLProducto = import.meta.env.VITE_API_PRODUCTO;

export const crearProducto = async (producto) => {
    try {
      const nuevoProducto = await fetch(URLProducto, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });
      return nuevoProducto;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  