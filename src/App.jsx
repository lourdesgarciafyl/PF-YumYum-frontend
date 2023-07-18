import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/common/Footer';
import Navegacion from './components/common/Navegacion';
import EditarProducto from './components/views/producto/EditarProducto';
function App() {
  return (
    <>
      <Navegacion></Navegacion>
      <EditarProducto />
      <Footer></Footer>
    </>
  );
}

export default App;
