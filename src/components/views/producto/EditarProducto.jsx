import '../../../css/formularioAdminProductos.css';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const EditarProducto = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = (datos) => {
    console.log(datos);
  };

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
            ></Form.Control>
            <Form.Text className="text-danger ms-1">
              {errors.detalle?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2 fw-bold" controlId="formPrecio">
            <Form.Label className="letraFormLabel">Precio *</Form.Label>
            <Form.Control type="number" placeholder="Ej: 1200"></Form.Control>
            <Form.Text className="text-danger ms-1">
              {errors.precio?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2 fw-bold" controlId="formImagen">
            <Form.Label className="letraFormLabel">Imagen *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://res.cloudinary.com/dvcq6vatc/image/upload/v1689383720/yumyum/hamburguesaQuesoyMorron_pfs2by.png"
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
