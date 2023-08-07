import { Container, Card, Form, Button } from "react-bootstrap";
import { crearUsuario } from "../helpers/queriesUsuario";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../css/registro.css";
import { loginUsuario } from "../helpers/queriesUsuario";
import { useEffect } from "react";

const Registro = ({ setUsuarioLogueado, carrito }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const password = watch("password");
  const navegacion = useNavigate();
  const onSubmit = (data) => {
    delete data.confirmarPassword;
    const { email, password } = data
    data.perfil = "Cliente";
    data.estado = "Activo";
    crearUsuario(data).then((respuesta) => {
      if (respuesta.status === 201) {
        localStorage.setItem("usuarioInicioSesion", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        reset();
      loginUsuario({email, password}).then((respuesta) => {
          if (respuesta && respuesta.status === 200) {
            const { status, ...respuestaRestante } = respuesta;
            sessionStorage.clear();
            localStorage.setItem(
              "usuarioInicioSesion",
              JSON.stringify(respuestaRestante)
            );
            sessionStorage.setItem(`${respuesta._id}`, JSON.stringify(carrito));
            Swal.fire({
              title: "Ya estás registrado",
              text: `${respuesta.nombreUsuario} podés hacer un pedido.`,
              confirmButtonColor: " #d8572a",
            });
            setUsuarioLogueado(respuesta);
            navegacion("/");
          } else {
            Swal.fire("Error", "Email o password incorrecto", "error");
          }
        });
        navegacion("/");
      } else {
        Swal.fire(`Ocurrió un error`, `Intente nuevamente más tarde`, `error`);
      }
    });
  };

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])

  return (

    <> <section className="mainSection contenedorPrincipal letraRoboto">
    <Container className="mb-3" >
      
  
          <Card className="formGlass">
            <Card.Title className="text-center pt-3 mt-3">
              Registro de usuario nuevo
            </Card.Title>
            <hr className="w-75 m-auto"/>
            <Card.Body className="d-flex justify-content-center ">
              <Form noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="w-75 fs-5 "
              >
               <Form.Group className="mb-3">
  <Form.Label>Nombre/s</Form.Label>
  <Form.Control
    className="inputFormularioReg inputFormulario"
    type="text"
    placeholder="Ej: Lisandro"
    maxLength={30} 
    {...register("nombreUsuario", {
      required: "El nombre de usuario es obligatorio",
      minLength: {
        value: 3,
        message: "Cantidad mínima de caracteres: 3",
      }, maxLength: {
        value: 30,
        message: "Cantidad máxima de caracteres: 30",
      }
    })}
  />
  <Form.Text className="text-danger fw-bold">
    {errors.nombreUsuario?.message}
  </Form.Text>
</Form.Group>


<Form.Group className="mb-3">
  <Form.Label>Apellido/s</Form.Label>
  <Form.Control
    className="inputFormularioReg inputFormulario"
    type="text"
    placeholder="Ej: Villafañe"
    maxLength={40} 
    {...register("apellidoUsuario", {
      required: "El apellido es obligatorio",
      minLength: {
        value: 3,
        message: "Cantidad mínima de caracteres: 3",
      }, maxLength: {
        value: 40,
        message: "Cantidad máxima de caracteres: 40",
      }
    })}
  />
  <Form.Text className="text-danger fw-bold">
    {errors.apellidoUsuario?.message}
  </Form.Text>
</Form.Group>


<Form.Group className="mb-3">
  <Form.Label>Email</Form.Label>
  <Form.Control
    className="inputFormularioReg inputFormulario"
    type="email"
    placeholder="Ej: lisandrov@gmail.com"
    maxLength={60} 
    {...register("email", {
      required: "El email es obligatorio",
      minLength: {
        value: 5,
        message: "Cantidad mínima de caracteres: 5",
      }, 
      maxLength: {
        value: 60,
        message: "Cantidad máxima de caracteres: 60.",
      },
      pattern: {
        value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
        message: "El Email debe cumplir con el formato juan@correo.com",
      },
    })}
  />
  <Form.Text className="text-danger fw-bold">
    {errors.email?.message}
  </Form.Text>
</Form.Group>


<Form.Group className="mb-3">
  <Form.Label>Contraseña</Form.Label>
  <Form.Control
    className="inputFormularioReg inputFormulario"
    type="password"
    placeholder="Ingresa una contraseña"
    maxLength={16} 
    {...register("password", {
      required: "La contraseña es un dato obligatorio",
      pattern: {
        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
        message:
          "La contraseña debe tener entre 8 y 16 caracteres, al menos un número, una minúscula, una mayúscula y no contener caracteres especiales.",
      },
    })}
  />
  <Form.Text className="text-danger fw-bold">
    {errors.password?.message}
  </Form.Text>
</Form.Group>


<Form.Group className="mb-3">
  <Form.Label>Confirmar contraseña</Form.Label>
  <Form.Control
    className="inputFormularioReg inputFormulario"
    type="password"
    placeholder="Ingresa nuevamente la contraseña"
    maxLength={16} 
    {...register("confirmarPassword", {
      required: "Debe confirmar su contraseña.",
      pattern: {
        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
        message:
          "La contraseña debe tener entre 8 y 16 caracteres, al menos un número, una minúscula, una mayúscula y no contener caracteres especiales.",
      },
      validate: (value) =>
        value === password || "Las contraseñas no coinciden.",
    })}
  />
  <Form.Text className="text-danger fw-bold">
    {errors.confirmarPassword?.message}
  </Form.Text>
</Form.Group>
                <Button type="submit"  variant="outline-light" className="w-100 btnIngreso">
                  Registrarme
                </Button>
              </Form>
            </Card.Body>
          </Card>
   
    </Container>
    </section> </>
  );
};


export default Registro;
