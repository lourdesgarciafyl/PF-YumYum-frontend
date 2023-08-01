const URLProducto = import.meta.env.VITE_API_PRODUCTO;
//const token = JSON.parse(localStorage.getItem("usuarioInicioSesion")).token;

export const crearProducto = async (producto) => {
  try {
    const nuevoProducto = await fetch(URLProducto, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "x-token": JSON.parse(localStorage.getItem("usuarioInicioSesion")).token
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
        "x-token": JSON.parse(localStorage.getItem("usuarioInicioSesion")).token
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
      headers: {
        "x-token": JSON.parse(localStorage.getItem("usuarioInicioSesion")).token
      },  
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
    const respuesta = await fetch(`${URLProducto}/categoria/${categoria}`);
    const productosFiltrados = await respuesta.json();
    return productosFiltrados;
  } catch (error) {
    console.log(error);
  }
};

export const consultaProducto = async (id) => {
  try {
      const respuesta = await fetch(URLProducto + "/" + id);
      const producto = await respuesta.json();
      return producto;
  } catch (error) {
      console.log(error);
  }
};

export const consultaActivarProducto = async (id) => {
  try {
    const respuesta = await fetch(`${URLProducto}/activar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "x-token": JSON.parse(localStorage.getItem("usuarioInicioSesion")).token
      },
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const consultaDesactivarProducto = async (id) => {
  try {
    const respuesta = await fetch(`${URLProducto}/desactivar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "x-token": JSON.parse(localStorage.getItem("usuarioInicioSesion")).token
      },
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};