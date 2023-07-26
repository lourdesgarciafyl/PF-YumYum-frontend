const URLCategoria = import.meta.env.VITE_API_CATEGORIA;

export const obtenerListaCategorias = async () => {
  try {
    const respuesta = await fetch(URLCategoria);
    const listaCategorias = await respuesta.json();
    return listaCategorias;
  } catch (error) {
    console.log(error);
  }
};
