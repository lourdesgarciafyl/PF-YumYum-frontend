const URLUsuario = import.meta.env.VITE_API_USUARIO;

export const crearUsuario = async (usuario) => {
    try {
        const nuevoUsuario = await fetch(URLUsuario, {
         method: 'POST',
         headers: {
        'Content-Type': 'application/json',
         },
         body: JSON.stringify(usuario),
        });
        return nuevoUsuario;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const obtenerUsuario = async (id) => {
    try {
        const respuesta = await fetch(`${URLUsuario}/${id}`);
        const usuarioEncontrado = {
            data: await respuesta.json(),
            status: respuesta.status
        }
        return usuarioEncontrado;
    } catch (error) {
        console.log(error);
        return null;
    }
}