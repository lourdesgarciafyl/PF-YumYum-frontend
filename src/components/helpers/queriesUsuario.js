const URLUsuario = import.meta.env.VITE_API_USUARIO;
// sirve para registro:
export const crearUsuario = async (usuario) => {
  try {
    const nuevoUsuario = await fetch(URLUsuario+"/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return nuevoUsuario;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// sirve para crear registro desde el admin:
export const crearUsuarioAdmin = async (usuario) => {
  try {
    const nuevoUsuario = await fetch(URLUsuario+"/nuevo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return nuevoUsuario;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const obtenerUsuario = async (id) => {
  try {
    const respuesta = await fetch(`${URLUsuario}/${id}`);
    const usuarioEncontrado = {
      data: await respuesta.json(),
      status: respuesta.status,
    };
    return usuarioEncontrado;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const borrarUsuario = async (id) => {
  try {
    const respuesta = await fetch(`${URLUsuario}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const loginUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(`${URLUsuario}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      nombreUsuario: datos.nombreUsuario,
      _id: datos._id,
      perfil: datos.perfil,
      token: datos.token,
    };
  } catch (error) {
    console.log(error);
  }
};

// export const loginUsuario = async (usuario) => {
//   try {
//     const respuesta = await fetch(URLUsuario);
//     const listaUsuarios = await respuesta.json();
//     //buscar cual usuario tiene el mail
//     const usuarioBuscado = listaUsuarios.find(
//       (itemUsuario) => itemUsuario.email === usuario.email
//     );
//     if (usuarioBuscado) {
//       console.log("email encontrado");
//       if (usuarioBuscado.password === usuario.password) {
//         return usuarioBuscado;
//       } else {
//         console.log("el password es incorrecto");
//         return null;
//       }
//     } else {
//       console.log("el email no existe");
//       return null;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

export const consultaListaUsuarios = async () => {
  try {
    const respuesta = await fetch(URLUsuario);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuario = async (usuario, id) => {
  try {
    const respuesta = await fetch(`${URLUsuario}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
