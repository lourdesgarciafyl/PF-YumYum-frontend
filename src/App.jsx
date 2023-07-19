import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/common/Footer";;
import Navegacion from "./components/common/Navegacion"
import AgregarUsuario from "./components/views/usuario/AgregarUsuario";

function App() {
  return (
    <>
        
          <Navegacion></Navegacion>
          <AgregarUsuario></AgregarUsuario>
          <Footer></Footer>
    </>
  );
}

export default App;
