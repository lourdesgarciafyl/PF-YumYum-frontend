import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/common/Footer";;
import Navegacion from "./components/common/Navegacion"
import Registro from "./components/views/Registro";

function App() {
  return (
    <>
        
          <Navegacion></Navegacion>
         <Registro></Registro>
          <Footer></Footer>
    </>
  );
}

export default App;
