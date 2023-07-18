import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/common/Footer";;
import Navegacion from "./components/common/Navegacion"
import ItemProducto from "./components/views/producto/ItemProducto";
import AdministrarProducto from "./components/views/AdministrarProductos";
function App() {
  return (
    <>
        
          <Navegacion></Navegacion>
          <AdministrarProducto></AdministrarProducto>
          <Footer></Footer>
    </>
  );
}

export default App;
