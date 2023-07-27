import "../../../css/formularioAdminProductos.css";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { crearUsuario } from "../../helpers/queriesUsuario";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AgregarUsuario = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const navegacion = useNavigate()

  const onSubmit = (usuarioNuevo) => {
    crearUsuario(usuarioNuevo).then((respuestaCreated) => {
      if (respuestaCreated && respuestaCreated.status === 201) {
        Swal.fire(
          "Usuario agregado",
          `El usuario ${usuarioNuevo.nombreUsuario} se agregó correctamente`,
          `success`
        );
        reset();
        navegacion('/administrar/usuarios');
      } else {
        Swal.fire(`Ocurrió un error`, `Intente nuevamente más tarde`, `error`);
      }
    });
  };

  return (
    <Card className="fondoAmarillo mainSection">
      <div className="fondoNaranja letraAmarilla letraSpace">
        <Card.Title className="my-4 text-center fw-bold fs-3">
          Agregar usuario
        </Card.Title>
      </div>
      <Card.Body className="py-3 w-100 mx-auto">
        <Form
          noValidate
          className="w-75 mx-auto letraRoboto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className="mb-2 fw-bold" controlId="formNombre">
            <Form.Label className="letraFormLabel">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              {...register("nombreUsuario", {
                required: "Debe ingresar el nombre del usuario.",
                minLength: {
                  value: 3,
                  message: "Mínimo de caracteres: 3",
                },
                maxLength: {
                  value: 30,
                  message: "Cantidad máxima de caracteres: 30",
                },
              })}
            ></Form.Control>
            <Form.Text className="text-danger ms-1">
              {errors.nombreUsuario?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2 fw-bold" controlId="formApellido">
            <Form.Label className="letraFormLabel">Apellido</Form.Label>
            <Form.Control
              type="text"
              rows={2}
              placeholder="Apellido."
              {...register("apellido", {
                required: "Debe ingresar un apellido",
                minLength: {
                  value: 3,
                  message: "Cantidad mínima de caracteres: 5",
                },
                maxLength: {
                  value: 40,
                  message: "Cantidad máxima de caracteres: 40",
                },
              })}
            ></Form.Control>
            <Form.Text className="text-danger ms-1">
              {errors.apellido?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2 fw-bold " controlId="formEmail">
            <Form.Label className="letraFormLabel">
              Correo electronico *
            </Form.Label>
            <Form.Control
              placeholder="Ingrese un email"
              {...register("email", {
                required: "El Email es un dato obligatorio.",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El Email debe cumplir con el formato correo@correo.com",
                },
              })}
            />
            <Form.Text className="text-danger my-2 py-3">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3 fw-bold" controlId="formPassword">
            <Form.Label className="letraFormLabel">Password *</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "El Password es un dato obligatorio.",
                pattern: {
                  value:  /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                  message:
                    "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                },
              })}
            />
            <Form.Text className="text-danger my-2 py-3">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>

          <Row>
            <Col lg={6}>
              <Form.Group className="mb-2 fw-bold" controlId="forCategoria">
                <Form.Label className="letraFormLabel">Perfil</Form.Label>
                <Form.Select
                  {...register("perfil", {
                    required: "Debe seleccionar una categoría",
                  })}
                >
                  <option value="" className="formSelect">
                    --Elegir una perfil--
                  </option>
                  <option value="Administrador" className="formSelect">
                    Administrador
                  </option>
                  <option value="Cliente" className="formSelect">
                    Cliente
                  </option>
                </Form.Select>
                <Form.Text className="text-danger ms-1">
                  {errors.perfil?.message}
                </Form.Text>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group className="mb-2 fw-bold" controlId="forEstado">
                <Form.Label className="letraFormLabel">Estado *</Form.Label>
                <Form.Select
                  {...register("estado", {
                    required: "Debe seleccionar el estado del usuario.",
                  })}
                >
                  <option value="" className="formSelect">
                    --Elegir un estado--
                  </option>
                  <option value="Activo" className="formSelect">
                    Activo
                  </option>
                  <option value="Inactivo" className="formSelect">
                    Inactivo
                  </option>
                </Form.Select>
                <Form.Text className="text-danger ms-1">
                  {errors.estado?.message}
                </Form.Text>
              </Form.Group>
            </Col>
          </Row>

          <Button className="mt-1 mb-3" type="submit" id="btnAgregar">
            Agregar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AgregarUsuario;
