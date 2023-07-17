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

export const editarProducto = async (id, producto) => {
  try {
    const respuesta = await fetch(`${URLProducto}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(`${URLProducto}/${id}`, {
      method: 'DELETE',
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const obtenerListaProductos = async () => {
  try {
    const respuesta = await fetch(URLProducto);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const consultaProductosPorCategoria = async (categoria) => {
  try {
    const respuesta = await fetch(`${URLProducto}?categoria=${categoria}`);
    const productosFiltrados = await respuesta.json();
    return productosFiltrados;
  } catch (error) {
    console.log(error);
  }
};
