import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navegacion";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro"
import Inicio from "./components/views/Inicio"
import Error404 from "./components/views/Error404"
import Detalle from "./components/views/Detalle"
import AdministradorUsuarios from "./components/views/AdministrarUsuarios"
import AdministrarProducto from "./components/views/AdministrarProductos"
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";
import RutasProtegidasCliente from "./components/routes/RutasProtegidasCliente";
import RutasCliente from "./components/routes/RutasCliente";
import Nosotros from "./components/views/Nosotros"
import { sumaCantidad } from "./components/helpers/queriesCarrito";

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioInicioSesion")) || {};
  const carritoUsuario = JSON.parse(sessionStorage.getItem(`${usuario._id}`)) || [];
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);
  // const [carrito, setCarrito] = useState(!carritoUsuario ? [] : carritoUsuario )
  const [carrito, setCarrito] = useState(carritoUsuario)
  const [totalProductos, setTotalProductos] = useState(0);

  useEffect(() => {
    sessionStorage.setItem(`${usuario._id}`, JSON.stringify(carrito))
    setTotalProductos(sumaCantidad(carrito))
  }, [carrito])
  
  return (
    <>
    <BrowserRouter>
    <Navegacion usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} totalProductos={totalProductos} setCarrito={setCarrito}></Navegacion>
    <Routes>
      <Route exact path="/" element={<Inicio usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} totalProductos={totalProductos} carrito={carrito} setCarrito={setCarrito}></Inicio>}></Route>
      <Route exact path="/detalle/:id" element={<Detalle usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} totalProductos={totalProductos} carrito={carrito} setCarrito={setCarrito} ></Detalle>}></Route>
      <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado} carrito={carrito}></Login>}></Route>
      <Route exact path="/registro" element={<Registro setUsuarioLogueado={setUsuarioLogueado}></Registro>}></Route>
      <Route exact path="/nosotros" element={<Nosotros></Nosotros>}></Route>
      <Route path="/cliente/*" element={
        <RutasProtegidasCliente usuario={usuarioLogueado} carrito={carrito} setCarrito={setCarrito}  totalProductos={totalProductos} setTotalProductos={setTotalProductos}>
          <RutasCliente usuario={usuarioLogueado} totalProductos={totalProductos} setTotalProductos={setTotalProductos} carrito={carrito} setCarrito={setCarrito}></RutasCliente>
        </RutasProtegidasCliente>
      }></Route>
      <Route path="/administrar/*" element={
        <RutasProtegidas usuario={usuarioLogueado}>
          <RutasAdministrador></RutasAdministrador>
        </RutasProtegidas>
      }></Route>
      <Route exact path="*" element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
