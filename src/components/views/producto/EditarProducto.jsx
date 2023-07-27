import '../../../css/formularioAdminProductos.css';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { editarProducto, consultaProducto } from '../../helpers/queriesProducto';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditarProducto = () => {
  const {id} = useParams();
  const navegacion = useNavigate()
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    setValue
  } = useForm();

  const onSubmit = (productoEditado) => {
    editarProducto(id, productoEditado).then((respuestaEditado) => {
      if (respuestaEditado && respuestaEditado.status === 200) {
        Swal.fire(
          'Producto Editado',
          `El producto ${productoEditado.nombreProducto} se editó correctamente`,
          'success'
        );
        reset();
       navegacion("/administrar/productos")
      } else {
        Swal.fire(
          'Ocurrió un error',
          `El producto ${productoEditado.nombreProducto} no fue editado, inténtelo más tarde`,
          'error'
        );
      }
    });
  };

  useEffect(()=>{
    consultaProducto(id).then((respuesta) =>{
        if(respuesta){
            setValue(`nombreProducto`, respuesta.nombreProducto);
            setValue(`detalle`, respuesta.detalle);
            setValue(`precio`, respuesta.precio);
            setValue(`imagen`, respuesta.imagen);
            setValue(`categoria`, respuesta.categoria);
            setValue(`estado`, respuesta.estado);
        }else{
            Swal.fire(
                'Ocurrio un error', 
                `No se puede editar el producto, intentelo mas tarde`, 
                'error');
        }
    })
}, [])

  return (
    <Card className="fondoAmarillo mainSection rounded-0">
      <div className="fondoNaranja letraAmarilla letraSpace">
        <Card.Title className="my-4 text-center fw-bold fs-3">
          Editar producto
        </Card.Title>
      </div>
      <Card.Body className="py-3 w-100 mx-auto">
        <Form
          noValidate
          className="w-75 mx-auto letraRoboto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Form.Group className="mb-2 fw-bold" controlId="formNombre">
            <Form.Label className="letraFormLabel">
              Nombre del producto *
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Pizza especial"
              {...register('nombreProducto', {
                required: 'Debe ingresar el nombre del producto.',
                minLength: {
                  value: 3,
                  message: 'Mínimo de caracteres: 3',
                },
                maxLength: {
                  value: 50,
                  message: 'Cantidad máxima de caracteres: 50',
                },
              })}
            ></Form.Control>
            <Form.Text className="text-danger ms-1">
              {errors.nombreProducto?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2 fw-bold" controlId="formDetalle">
            <Form.Label className="letraFormLabel">
              Detalle del producto *
            </Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={2}
              placeholder="Ingrese una descripción para dar más detalles sobre el producto."
              {...register('detalle', {
                required: 'Debe ingresar una descripción del producto',
                minLength: {
                  value: 5,
                  message: 'Cantidad mínima de caracteres: 5',
                },
                maxLength: {
                  value: 500,
                  message: 'Cantidad máxima de caracteres: 500',
                },
              })}
            ></Form.Control>
            <Form.Text className="text-danger ms-1">
              {errors.detalle?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2 fw-bold" controlId="formPrecio">
            <Form.Label className="letraFormLabel">Precio *</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 1200"
              {...register('precio', {
                required: 'Debe ingresar el precio del producto.',
                min: {
                  value: 100,
                  message: 'Precio mínimo: $100',
                },
                max: {
                  value: 10000,
                  message: 'Precio máximo: $10000',
                },
              })}
            ></Form.Control>
            <Form.Text className="text-danger ms-1">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2 fw-bold" controlId="formImagen">
            <Form.Label className="letraFormLabel">Imagen *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383720/yumyum/hamburguesaQuesoyMorron_pfs2by.png"
              {...register('imagen', {
                required: 'Debe ingresar la URL de la imagen.',
                pattern: {
                  value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:png|jpe?g|gif|svg)$/,
                  message: 'La URL debe terminar en: PNG, JPG, JPEG, GIF o SVG',
                },
              })}
            ></Form.Control>
            <Form.Text className="text-danger ms-1">
              {errors.imagen?.message}
            </Form.Text>
          </Form.Group>

          <Row>
            <Col lg={6}>
              <Form.Group className="mb-2 fw-bold" controlId="formCategoria">
                <Form.Label className="letraFormLabel">Categoría *</Form.Label>
                <Form.Select
                  {...register('categoria', {
                    required: 'Debe seleccionar una categoría',
                  })}
                >
                  <option value="" className="formSelect">
                    --Elegir una categoría--
                  </option>
                  <option value="Hamburguesa" className="formSelect">
                    Hamburguesa
                  </option>
                  <option value="Pizza" className="formSelect">
                    Pizza
                  </option>
                  <option value="Veggie" className="formSelect">
                    Veggie
                  </option>
                  <option value="Bebida" className="formSelect">
                    Bebida
                  </option>
                  <option value="Promociones" className="formSelect">
                    Promoción
                  </option>
                  <option value="Otro" className="formSelect">
                    Otro
                  </option>
                </Form.Select>
                <Form.Text className="text-danger ms-1">
                  {errors.categoria?.message}
                </Form.Text>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group className="mb-2 fw-bold" controlId="formEstado">
                <Form.Label className="letraFormLabel">Estado *</Form.Label>
                <Form.Select
                  {...register('estado', {
                    required: 'Debe seleccionar el estado del producto.',
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

          <Button className="mt-1 mb-3 fw-bold" type="submit" id="btnEditar">
            Editar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EditarProducto;
