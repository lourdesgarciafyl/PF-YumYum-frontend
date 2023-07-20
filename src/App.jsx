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
/* Faltaria Mi pedido */
/* faltaria Administrar pedidos  y Sobre nosotros */

function App() {
  const usuario = JSON.parse(localStorage.getItem("usuarioInicioSesion")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  return (
    <>
    <BrowserRouter>
    <Navegacion usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Navegacion>
    <Routes>
      <Route exact path="/" element={<Inicio usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Inicio>}></Route>
      <Route exact path="/detalle/:id" element={<Detalle usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Detalle>}></Route>
      <Route exact path="/login" element={<Login></Login>}></Route>
      <Route exact path="/registro" element={<Registro setUsuarioLogueado={setUsuarioLogueado}></Registro>}></Route>
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
