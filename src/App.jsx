import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/common/Footer";
import Navegacion from "./components/common/Navegacion";
import Error404 from "./components/views/Error404";

function App() {
  return (
    <>
      <Navegacion></Navegacion>
      <Error404></Error404>
      <Footer></Footer>
    </>
  );
}

export default App;
