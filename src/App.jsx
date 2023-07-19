import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navegacion";
import AdministradorUsuarios from "./components/views/AdministrarUsuarios";

function App() {
  return (
    <>
        
          <Navegacion></Navegacion>
          <AdministradorUsuarios></AdministradorUsuarios>
          <Footer></Footer>
    </>
  );
}

export default App;
