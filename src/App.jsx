import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navegacion";
import Login from "./components/views/Inicio";

function App() {
  return (
    <>
      <Navegacion></Navegacion>
      <Login></Login>
      <Footer></Footer>
    </>
  );
}

export default App;
