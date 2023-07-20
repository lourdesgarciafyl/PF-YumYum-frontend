import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/common/Footer';
import Navegacion from './components/common/Navegacion';
import CarritoPedido from './components/views/CarritoPedido';

function App() {
  return (
    <>
      <Navegacion></Navegacion>
      <CarritoPedido></CarritoPedido>
      <Footer></Footer>
    </>
  );
}

export default App;
