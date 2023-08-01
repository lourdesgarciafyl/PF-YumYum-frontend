import "../../../css/formularioAdminProductos.css";
import { Form, Button, Card, Row, Col,Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { cambiarPassword, editarUsuario, obtenerUsuario } from "../../helpers/queriesUsuario";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Key } from "react-bootstrap-icons";

const EditarUsuario = () => {
  const {
    register,
    formState: { errors },
    reset,
    setValue,
    handleSubmit,
  } = useForm();

  const {
    register: registerContrasenia,
    formState: { errors:errorsContrasenia },
    reset: resetContrasenia,
    handleSubmit: handleSubmitContrasenia,
    watch: watchContrasenia
  } = useForm();
  const password = watchContrasenia("password");

  const { id } = useParams();
  const navegacion = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    obtenerUsuario(id).then((respuesta) => {
      console.log(respuesta); 
      if (respuesta && respuesta.status === 200) {
        setValue("nombreUsuario", respuesta.data.nombreUsuario);
        setValue("apellidoUsuario", respuesta.data.apellidoUsuario);
        setValue("email", respuesta.data.email);
        setValue("password", respuesta.data.password);
        setValue("perfil", respuesta.data.perfil);
        setValue("estado", respuesta.data.estado);
      } else {
        Swal.fire(
          "Ocurrió un error",
          `No se puede editar el usuario, inténtelo más tarde`,
          "error"
        );
      }
    });
  }, [id, setValue]);


  const onSubmit = (usuarioEditado) => {
    editarUsuario(usuarioEditado, id).then((respuestaEditado) => {
      if (respuestaEditado && respuestaEditado.status === 200) {
        Swal.fire(
          "Usuario Editado",
          `El usuario ${usuarioEditado.nombreUsuario} se editó correctamente`,
          "success"
        );
        reset();
        navegacion("/administrar/usuarios");
      } else {
        Swal.fire(
          "Ocurrió un error",
          `El usuario ${usuarioEditado.nombreUsuario} no fue editado, inténtelo más tarde`,
          "error"
        );
      }
    });
  };

  const onSubmitContrasenia = (nuevaContrasenia) => {
    console.log(nuevaContrasenia);
    cambiarPassword(nuevaContrasenia,id).then((respuestaEditadoPassword) => {
      if (respuestaEditadoPassword && respuestaEditadoPassword.status === 200) {
        Swal.fire({
          text: "Se cambió conrrectamente la contraseña",
          icon: "success",
          confirmButtonColor: "#d8572a",
        });
        resetContrasenia();
        setShow(false);
      } else {
        Swal.fire(
          'Ocurrio un error',
          `La contraseña no fue editada, intentelo mas tarde`,
          'error'
        );
      }
    });
  }

  return (
    <>
    <Card className="fondoAmarillo mainSection">
      <div className="fondoNaranja letraAmarilla letraSpace">
        <Card.Title className="my-4 text-center fw-bold fs-3">
          Editar usuario
        </Card.Title>
      </div>
      <div className="ms-auto w-25 mt-3 ">
        <Button variant="danger me-1" bg="dark" className="fondoGrisClaro rounded-5 " onClick={() => handleShow()}>
          <Key className="fs-1"></Key>
        </Button>
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
              placeholder="Apellido"
              {...register("apellidoUsuario", {
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
              {errors.apellidoUsuario?.message}
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
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva Contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitContrasenia(onSubmitContrasenia)}>
            <Form.Group className="mb-2">
              <Form.Control
                className="col-sm-9 inputFormRegistro"
                type="password"
                placeholder="Ingresa una contraseña"
                {...registerContrasenia("password", {
                  required: "La contrseña es un dato obligatorio",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "La contraseña debe tener entre 8 y 16 caracteres, al menos un numero, una minuscula, una mayúscula y no contener caracteres especiales.",
                  },
                })}
              />
              <Form.Text className="text-danger my-2 py-3">
              {errorsContrasenia.password?.message}
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                  <Form.Label>Confirmar contraseña</Form.Label>
                  <Form.Control
                    className="col-sm-9 inputFormRegistro"
                    type="password"
                    placeholder="Ingresa nuevamente la contraseña"
                    {...registerContrasenia("confirmarPassword", {
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
                    {errorsContrasenia.confirmarPassword?.message}
                  </Form.Text>
                </Form.Group>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="success" type="submit">
                Enviar
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
    
    
  );
};

export default EditarUsuario;
