import Nav from 'react-bootstrap/Nav';
const ItemNavCategoria = ({
  categoria,
  categoriaActiva,
  manejadorCambioCategoria,
}) => {
  return (
    <Nav.Link
      onClick={() => manejadorCambioCategoria(categoria)}
      active={categoria === categoriaActiva}
      className={categoria === categoriaActiva ? 'categoriaActiva' : null}
    >
      {categoria}
    </Nav.Link>
  );
};

export default ItemNavCategoria;
