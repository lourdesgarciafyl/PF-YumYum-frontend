import { Container, Row, Button, Carousel, Col } from "react-bootstrap";
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
  };

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
                  <img src={logoHeroSection} alt="Logotipo YumYum" />
                </Col>
                <Col>
                  {" "}
                  <h1 className="text-center text-white">
                    Tu Comida favorita <br></br> directo a tu puerta{" "}
                  </h1>{" "}
                  <Link className="w-100 d-flex justify-content-center text-decoration-none ">
                    {" "}
                    <Button
                      variant="outline-warning"
                      className="mt-5 "
                      id="botonHero"
                    >
                      <span>Pedí Ahora </span>
                    </Button>{" "}
                  </Link>{" "}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
      ;
      <Container>
        <h2 className="display-4 text-center text-white mt-3 letraSpace">
          Menú
        </h2>
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
        <Row className="justify-content-around menu" id="productos">
          {productos.map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              carrito={carrito}
              setCarrito={setCarrito}
              usuarioLogueado={usuarioLogueado}
              totalProductos={totalProductos}
            ></CardProducto>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
