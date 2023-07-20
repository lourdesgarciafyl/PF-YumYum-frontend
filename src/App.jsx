import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/common/Footer';
import Navegacion from './components/common/Navegacion';
import CarrritoPedido from './components/views/CarrritoPedido';

function App() {
  return (
    <>
      <Navegacion></Navegacion>
      <CarrritoPedido></CarrritoPedido>
      <Footer></Footer>
    </>
  );
}

export default App;
