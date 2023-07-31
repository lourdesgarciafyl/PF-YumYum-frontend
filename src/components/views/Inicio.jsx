import { Container, Row, Button, Col } from "react-bootstrap";
import "../../css/inicio.css";
import CardProducto from "../../components/views/producto/CardProducto";
import {
  consultaProductosPorCategoria,
  obtenerListaProductos,
} from "../helpers/queriesProducto";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import videoHero from "../../assets/videoHero.mp4";
import logoHeroSection from "../../assets/LogoYumHeroSection.svg";
import ItemNavCategoria from "../helpers/ItemNavCategoria";
import { obtenerListaCategoriasActivas } from "../helpers/querieCategoria";
import { Link } from "react-router-dom";
import ItemNavCategoria from "../helpers/ItemNavCategoria";
import { obtenerListaCategoriasActivas } from "../helpers/querieCategoria";
import { Pagination } from "react-bootstrap";

const Inicio = ({
  usuarioLogueado,
  setusuarioLogueado,
  carrito,
  setCarrito,
  usuario,
  totalProductos,
}) => {
  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState("Todo");
  const productosPromocion = productos.filter(
    (producto) => producto.categoria === "Promociones"
  );
  const [paginasPorCategoria, setPaginasPorCategoria] = useState({ Todo: 1 });
  const itemsPorPagina = 8;

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

  const handlePageChange = (numeroPage) => {
    setPaginasPorCategoria((prevState) => ({
      ...prevState,
      [categoriaActiva]: numeroPage,
    }));
  };

  const manejadorCambioCategoria = (categoria) => {
    if (categoria === "Todo") {
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

    setPaginasPorCategoria((prevState) => ({
      ...prevState,
      [categoria]: 1,
    }));
  };

  const indiceUltimoItem =
    paginasPorCategoria[categoriaActiva] * itemsPorPagina;
  const indicePrimerItem = indiceUltimoItem - itemsPorPagina;
  const currentProductos = productos.slice(indicePrimerItem, indiceUltimoItem);
  const totalPaginas = Math.ceil(productos.length / itemsPorPagina);

  return (
    <section className="mainSection letraRoboto mb-3">
      <>
        {/* Video de Hero Section */}
        <div className="position-relative">
          <div>
            <video autoPlay loop muted className="videoHero w-100">
              <source src={videoHero} type="video/mp4" />
              Tu navegador no admite el elemento de video.
            </video>
            <Container
              fluid="md"
              id="contenidoHeroSection"
              className="position-absolute"
            >
              <Row className="justify-content-center align-items-center">
                <Col sm={6} lg={4} className="text-center">
                  <img
                    src={logoHeroSection}
                    alt="Logotipo YumYum"
                    className="mb-md-5"
                  />
                </Col>
                <Col>
                  <h1 className="text-center text-white">
                    Tu Comida favorita directo a tu puerta
                  </h1>
                  <Link className="w-100 d-flex justify-content-center text-decoration-none">
                    <Button
                      variant="outline-warning"
                      className="mt-5 "
                      id="botonHero"
                    >
                      <span>Pedí Ahora</span>
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
      <Container>
        <h1 className="display-4 text-center text-white mt-3 letraSpace mb-2 titulosInicio">
          Disfruta de nuestras PROMOS
        </h1>
        <hr className="mb-4" />
        <Row className="justify-content-around menu mt-5" id="productos">
          {productosPromocion.map((producto) => (
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
      </Container>

     
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

        {categoriaActiva === "Todo" && (
          <Pagination className="justify-content-center my-4">
            <Pagination.Prev
              disabled={paginasPorCategoria[categoriaActiva] === 1}
              onMouseDown={() =>
                handlePageChange(paginasPorCategoria[categoriaActiva] - 1)
              }
            />
            {[...Array(totalPaginas)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === paginasPorCategoria[categoriaActiva]}
                onMouseDown={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              disabled={paginasPorCategoria[categoriaActiva] === totalPaginas}
              onMouseDown={() =>
                handlePageChange(paginasPorCategoria[categoriaActiva] + 1)
              }
            />
          </Pagination>
        )}
      </Container>
    </section>
  );
};

export default Inicio;
