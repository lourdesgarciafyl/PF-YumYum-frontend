import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/common/Footer";;
import Navegacion from "./components/common/Navegacion"
import ItemProducto from "./components/views/producto/ItemProducto";
function App() {
  return (
    <>
        
          <Navegacion></Navegacion>
          <ItemProducto></ItemProducto>
          <Footer></Footer>
    </>
  );
}

export default App;
