import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/common/Footer";;
import Navegacion from "./components/common/Navegacion"
import Inicio from "./components/views/Inicio"
function App() {
  return (
    <>
        
          <Navegacion></Navegacion>
          <Inicio></Inicio>
          <Footer></Footer>
    </>
  );
}

export default App;
