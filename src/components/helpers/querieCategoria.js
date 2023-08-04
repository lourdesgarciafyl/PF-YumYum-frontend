const URLCategoria = import.meta.env.VITE_API_CATEGORIA;

export const obtenerListaCategoriasActivas = async () => {
  try {
    const respuesta = await fetch(`${URLCategoria}/activas`);
    const listaCategorias = await respuesta.json();
    return listaCategorias;
  } catch (error) {
    return null;
  }
};
