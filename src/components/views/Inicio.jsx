import { Container, Row, Button, Col } from "react-bootstrap";
import "../../css/inicio.css";
import CardProducto from "../../components/views/producto/CardProducto";
import {
  consultaProductosPorCategoria,
  obtenerListaProductos,
} from "../helpers/queriesProducto";
import Nav from "react-bootstrap/Nav";
import { useEffect, useRef, useState } from "react";
import videoHero from "../../assets/videoHero.mp4";
import logoHeroSection from "../../assets/LogoYumHeroSection.svg";
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
   const [productosPromocion, setProductosPromocion] = useState([]);
  const [paginasPorCategoria, setPaginasPorCategoria] = useState({ Todo: 1 });
  const itemsPorPagina = 8;
  const myRef = useRef();

  const scrollToRef = () => {
      const yOffset = 0; 
      const y =
        myRef.current.getBoundingClientRect().top + yOffset;
  
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
  };

  useEffect(() => {
    window.scrollTo({
      top: 120,
      behavior: 'smooth'
    });
    obtenerListaCategoriasActivas()
      .then((respuesta) =>
        setCategorias(respuesta.map((categ) => categ.nombreCategoria))
      )
      .catch((error) => {
        return null;
      });
    obtenerListaProductos()
      .then((repuesta) => {
        setProductos(repuesta);
      })
      .catch((error) => {
        return null;
      }); 
      consultaProductosPorCategoria("Promociones")
      .then((repuesta) => {
        setProductosPromocion(repuesta);
      })
      .catch((error) => {
        return null;
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
         return null;
        });
    } else {
      setCategoriaActiva(categoria);
      consultaProductosPorCategoria(categoria)
        .then((repuesta) => {
          setProductos(repuesta);
         
        })
        .catch((error) => {
          return null;
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
                  <Link onClick={scrollToRef} className="w-100 d-flex justify-content-center text-decoration-none">
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
      <Container ref={myRef}>
        <h1 className="display-4 text-center text-white mt-5 mb-3 letraSpace titulosInicio">
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
        <h1  className="display-4 text-center text-white mt-3 letraSpace titulosInicio ">
          Menú
        </h1>

        <Nav className="justify-content-center menuBuscador  p-4 d-flex">
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
