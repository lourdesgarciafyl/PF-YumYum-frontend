import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { crearUsuario } from "../helpers/queriesUsuario";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import imgRegistro from "../../assets/imgRegistro.png";
import "../../css/registro.css";

const Registro = ({ setUsuarioLogueado }) => {
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
    data.perfil = "Cliente";
    data.estado = "Activo";
    crearUsuario(data).then((respuesta) => {
      if (respuesta.status === 201) {
        localStorage.setItem("usuarioInicioSesion", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        reset();
        Swal.fire({
          color: "#fff",
          background: "#d8572a",
          confirmButtonColor: "#f7b538",
          title: `Bienvenido ${data.nombreUsuario}`,
          text: "Ahora podrás realizar un pedido",
          icon: "success",
        });
        navegacion("/");
      } else {
        Swal.fire(`Ocurrió un error`, `Intente nuevamente más tarde`, `error`);
      }
    });
  };

  return (
    <Container className="mainSection my-3">
      <Row className="py-2">
        <Col lg={8}>
          <Card className="letraForm">
            <Card.Title className="mt-4 mb-1 text-center letraSpace letraNaranja fw-bold fs-4">
              Registro
            </Card.Title>
            <hr className="letraNaranja" />
            <Card.Body className="d-flex justify-content-center">
              <Form
                onSubmit={handleSubmit(onSubmit)}
                className="w-75 letraRoboto letraRoja fs-5 fw-bold"
              >
                <Form.Group className="mb-3">
                  <Form.Label>Nombre/s</Form.Label>
                  <Form.Control
                    className="inputFormRegistro"
                    type="text"
                    placeholder="Ej: Lisandro"
                    {...register("nombreUsuario", {
                      required: "El nombre de usuario es obligatorio",
                      minLength: {
                        value: 3,
                        message: "Cantidad mínima de caracteres: 3",
                      },
                      maxLength: {
                        value: 30,
                        message: "Cantidad máxima de caracteres: 30.",
                      },
                    })}
                  ></Form.Control>
                  <Form.Text className="text-danger fw-bold">
                    {errors.nombreUsuario?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Apellido/s</Form.Label>
                  <Form.Control
                    className="inputFormRegistro"
                    type="text"
                    placeholder="Ej: Villafañe"
                    {...register("apellidoUsuario", {
                      required: "El apellido es obligatorio",
                      minLength: {
                        value: 3,
                        message: "Cantidad mínima de caracteres: 3",
                      },
                      maxLength: {
                        value: 40,
                        message: "Cantidad máxima de caracteres: 40.",
                      },
                    })}
                  ></Form.Control>
                  <Form.Text className="text-danger fw-bold">
                    {errors.apellidoUsuario?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="inputFormRegistro"
                    type="email"
                    placeholder="Ej: lisandrov@gmail.com"
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
                  ></Form.Control>
                  <Form.Text className="text-danger fw-bold">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    className="inputFormRegistro"
                    type="password"
                    placeholder="Ingresa una contraseña"
                    {...register("password", {
                      required: "La contrseña es un dato obligatorio",
                      pattern: {
                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        message:
                          "La contraseña debe tener entre 8 y 16 caracteres, al menos un numero, una minuscula, una mayúscula y no contener caracteres especiales.",
                      },
                    })}
                  ></Form.Control>
                  <Form.Text className="text-danger fw-bold">
                    {errors.password?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Confirmar contraseña</Form.Label>
                  <Form.Control
                    className="inputFormRegistro"
                    type="password"
                    placeholder="Ingresa nuevamente la contraseña"
                    {...register("confirmarPassword", {
                      required: "Debe confirmar su contaseña.",
                      pattern: {
                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        message:
                          "La contraseña debe tener entre 8 y 16 caracteres, al menos un numero, una minuscula, una mayúscula y no contener caracteres especiales.",
                      },
                      validate: (value) =>
                        value === password || "Las contraseñas no coinciden.",
                    })}
                  ></Form.Control>
                  <Form.Text className="text-danger fw-bold">
                    {errors.confirmarPassword?.message}
                  </Form.Text>
                </Form.Group>

                <Button type="submit" className="w-100 btnRegistrarme fw-bold">
                  REGISTRARME
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <div>
            <img className="img-fluid imgRegistro" src={imgRegistro}></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
