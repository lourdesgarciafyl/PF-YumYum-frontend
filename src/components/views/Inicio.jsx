import { Container, Row, Button, Carousel } from 'react-bootstrap';
import '../../css/inicio.css';
import CardProducto from '../../components/views/producto/CardProducto';
import {
  consultaProductosPorCategoria,
  obtenerListaProductos,
} from '../helpers/queriesProducto';
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from 'react';
import banner2 from '../../assets/img/Banner2.jpg';
import banner3 from '../../assets/img/Banner3.jpg';
import banner4 from '../../assets/img/Banner4.jpg';
import ItemNavCategoria from '../helpers/ItemNavCategoria';
import { obtenerListaCategoriasActivas } from '../helpers/querieCategoria';
import { Pagination } from 'react-bootstrap';

const Inicio = ({ usuarioLogueado, setusuarioLogueado, carrito, setCarrito, usuario, totalProductos }) => {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('Todo');
  const [paginaActual, setPaginaActual] = useState(1);
  const itemsPorPagina = 8;

  // const categorias = [
  //   'Todo',
  //   'Pizza',
  //   'Hamburguesa',
  //   'Veggie',
  //   'Bebida',
  //   'Otro',
  // ];
  useEffect(() => {
    obtenerListaCategoriasActivas()
      .then((respuesta) =>
        setCategorias(respuesta.map((categ) => categ.nombreCategoria))
      )
      .catch((error) => {
        console.log(error);
      });
    obtenerListaProductos()
      .then((repuesta) => {
        setProductos(repuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const indiceUltimoItem = paginaActual * itemsPorPagina;
  const indicePrimerItem = indiceUltimoItem - itemsPorPagina;
  const currentProductos = productos.slice(indicePrimerItem, indiceUltimoItem);
  const totalPaginas = Math.ceil(productos.length / itemsPorPagina);

  const handlePageChange = (numeroPage) => {
    setPaginaActual(numeroPage);
  };

  const manejadorCambioCategoria = (categoria) => {
    if (categoria === 'Todo') {
      setCategoriaActiva(categoria);
      obtenerListaProductos()
        .then((repuesta) => {
          setProductos(repuesta);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setCategoriaActiva(categoria);
      consultaProductosPorCategoria(categoria)
        .then((repuesta) => {
          setProductos(repuesta);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <section className="mainSection letraRoboto mb-3">
      <Carousel fade className="Carrusel-MD-LG">
        <Carousel.Item>
          <img src={banner2} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner3} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={banner4} />
        </Carousel.Item>
      </Carousel>
      ;
      <Container>
        <h1 className="display-4 text-center text-white mt-3 letraSpace">
          Menú
        </h1>
        <hr />
        <Nav className="justify-content-center my-4 menuBuscador">
          {categorias.map((categoria) => (
            <ItemNavCategoria
              key={categoria}
              categoria={categoria}
              categoriaActiva={categoriaActiva}
              manejadorCambioCategoria={manejadorCambioCategoria}
            />
          ))}
        </Nav>
        <hr className="mb-5" />
       <Row className="justify-content-around menu">
          {currentProductos.map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              carrito={carrito}
              setCarrito={setCarrito}
              usuarioLogueado={usuarioLogueado}
              totalProductos={totalProductos}
            />
          ))}
        </Row>
        <Pagination className="justify-content-center my-4">
          <Pagination.Prev
            disabled={paginaActual === 1}
            onClick={() => handlePageChange(paginaActual - 1)}
          />
          {[...Array(totalPaginas)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === paginaActual}
              onClick={() => handlePageChange(index + 1)}
    
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={paginaActual === totalPaginas}
            onClick={() => handlePageChange(paginaActual + 1)}
          />
        </Pagination>
      </Container>
    </section>
  );
};

export default Inicio;
