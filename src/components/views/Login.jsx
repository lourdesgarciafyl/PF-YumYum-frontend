import { Form, Button, Container, Card, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PersonFill, FileLock2Fill } from "react-bootstrap-icons";
import "./../../css/login.css";
import { loginUsuario } from "../helpers/queriesUsuario";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logoHeroSection from "../../assets/LogoYumHeroSection.svg";

const Login = ({ setUsuarioLogueado, carrito }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    loginUsuario(usuario).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        const { status, ...respuestaRestante } = respuesta;
        sessionStorage.clear();
        localStorage.setItem(
          "usuarioInicioSesion",
          JSON.stringify(respuestaRestante)
        );
        sessionStorage.setItem(`${respuesta._id}`, JSON.stringify(carrito));
        Swal.fire({
          title: "Bienvenido",
          text: `${respuesta.nombreUsuario} iniciaste sesión correctamente`,
          confirmButtonColor: " #d8572a",
        });
        setUsuarioLogueado(respuesta);
        navegacion("/");
      } else {
        Swal.fire("Error", "Email o password incorrecto", "error");
      }
    });
  };

  return (
    <Container className="mainSection contenedorPrincipal">
      <Card className="my-5 border-0 contenedor_login  bg-white p-3">
        <Card.Title as="h5" className=" mt-3 text-center">
          Iniciar Sesión
        </Card.Title>
        <Card.Body>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formEmail">
              <InputGroup>
                <InputGroup.Text id="iconoEmail" className="fondoAmarillo">
                  <PersonFill size={25}></PersonFill>
                </InputGroup.Text>
                <Form.Control
                  aria-label="Email"
                  aria-describedby="iconoEmail"
                  type="email"
                  className="inputFormulario"
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
                      message:
                        "El Email debe cumplir con el formato juan@correo.com",
                    },
                  })}
                />
              </InputGroup>
              <Form.Text className="text-danger my-2 py-3">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <InputGroup>
                <InputGroup.Text id="iconoPassword" className="fondoAmarillo">
                  <FileLock2Fill size={25}></FileLock2Fill>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Contraseña"
                  aria-label="Password"
                  aria-describedby="iconoPassword"
                  type="password"
                  maxLength={16} 
                  className="inputFormulario"
                  {...register("password", {
                    required: "La contraseña es un dato obligatorio.",
                    pattern: {
                      value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                      message:
                        "La contraseña debe tener entre 8 y 16 caracteres, al menos un número, una minúscula, una mayúscula y no contener caracteres especiales.",
                    },
                  })}
                />
              </InputGroup>
              <Form.Text className="text-danger my-2 py-3">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>

            <Button type="submit" className="btn btn-dark w-100">
              Ingresar
            </Button>
          </Form>
          <hr />
          <div className="text-center">
            <Card.Text as="h6" className="mt-3 subtituloCuenta">
              ¿No tienes una cuenta?
            </Card.Text>
            <Card.Link as={Link} to={"/registro"} className="btn btn-dark w-50">
              Registrate
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
