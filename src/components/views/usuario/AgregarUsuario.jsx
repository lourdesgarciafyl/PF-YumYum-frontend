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

  const onSubmit = (usuarioNuevo) => {
    crearUsuario(usuarioNuevo).then((respuestaCreated) => {
      if (respuestaCreated && respuestaCreated.status === 201) {
        Swal.fire(
          "Usuario agregado",
          `El producto ${usuarioNuevo.nombreUsuario} se agregó correctamente`,
          `success`
        );
        reset();
        /*Redireccionar a pag administrar productos */
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


          <Button className="mt-1 mb-3" type="submit" id="btnAgregar">
            Agregar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AgregarUsuario;
